## Critical: account takeover

### AUTH-3. Email change leaves existing sessions valid

- **Where:** `POST /a/confirm-email-change` (`server/routes/a/confirm-email-change.post.js`). Contrast `POST /a/change-password`, which sets `user_session_tokens.blacklisted = true`.
- **Issue:** After the address changed, every sealed session for that user still worked.
- **Impact:** The previous owner stayed logged in, and so did anyone who already stole the cookie.
- **Fix:** When the new address is applied, blacklist every `user_session_tokens` row for that user and clear the current cookie.

### AUTH-2. The new email is never confirmed

- **Where:** `POST /a/change-email` (`server/routes/a/change-email.post.js`) and `POST /a/confirm-email-change` (`server/routes/a/confirm-email-change.post.js`)
- **Issue:** The new address was written immediately. There was no `validate_email` token, no proof the caller controlled the mailbox, and no current-password check (change-password does check the password).
- **Impact:** Combined with AUTH-1 this was takeover. On the caller’s own account it still let a stolen session lock the owner out by pointing the email elsewhere.
- **Fix:** Store a pending email and a `validate_email` token. Switch `users.email` only when that token is consumed. Require the current password on the request that starts the change. Return a generic success either way so this route stops confirming `error_email_already_in_use`.

### AUTH-1. Change-email updates whatever address is in the body

- **Where:** `POST /a/change-email` (`server/routes/a/change-email.post.js`)
- **Issue:** The handler requires a session, then runs `UPDATE users SET email = $1 WHERE email = $2` with `current_email` from the body. It never checks `current_email === user.email`. `verifySessionAndReturnUser` is unused after the null check.
- **Impact:** Any logged-in user who knows another account’s email can move that account onto an address they control. Password reset then goes to the attacker. The notification is sent to the old address, so the victim is told after the change, not asked before it.
- **Fix:** Ignore `current_email`. Update `WHERE id = $sessionUserId`. Do not perform AUTH-2’s switch in this same request.

### 1. Password reset does not check the token

- **Where:** `POST /a/reset-password` (`server/routes/a/reset-password.post.js`)
- **Issue:** The handler validates that the token looks like a UUID, then sets the password for that email. It never checks that the token exists, belongs to that user, is unexpired, or is unused.
- **Details:** Token verification exists only on `GET /a/verify-token-to-reset-password/...`. The password-change endpoint does not use it. Anyone who knows a user’s email can set a new password with any UUID. Tests encode this: a hardcoded UUID is accepted without a matching database row.
- **Fix:** Before updating the password, require an active `reset_password` token for that user (same query as the verify route), bind it to the email, then blacklist it. Reject if there is no match.

### 2. Sign-up overwrites any existing account

- **Where:** `POST /a/sign-up` (`server/routes/a/sign-up.post.js`)
- **Issue:** The handler looks up the user by email and sets a new password. It does not verify the email-validation token, user status, or that the account is still unverified.
- **Effects:**
  - Take over any account whose email is known (including confirmed and premium users).
  - Force `status` to free (premium wiped).
  - Log the attacker in via `setUserSession`.
- **Details:** The `token` field is only used afterward to blacklist a row; a missing or invalid token still succeeds.
- **Fix:** Require a valid, unexpired, unused `validate_email` token for that user. Only update users with `status = unverified` and `password IS NULL`.

## High

### 4. Stored XSS on public collections

- **Where:** `app/pages/pc/[collection_id].vue` (`v-html` on `collection?.description`)
- **Issue:** Collection `description` is stored as raw HTML and rendered with `v-html` with no sanitization. Notes go through DOMPurify; descriptions do not.
- **Risk:** A public collection with a malicious description runs script in the application origin for anyone who opens `/pc/{id}`. Session cookies are HttpOnly, but same-origin XSS can still call authenticated APIs as the visitor.
- **Fix:** Store markdown or sanitized HTML (same pipeline as notes). Do not `v-html` unsanitized user content.

### 5. Paywalled notes are readable when preview list is null

- **Where:** `GET /public-collection/[collection_id]/note/[note_id]` (`server/routes/public-collection/[collection_id]/note/[note_id].get.js`)
- **Issue:** Access is denied only when `type === public_paywalled` **and** `preview_note_id_list !== null` **and** the note is not in that list. `preview_note_id_list` has no database default, so it is often `NULL`. Then the whole check is skipped: every note in a paywalled collection is public, with no login or purchase check. Copy correctly checks payments; this GET does not.
- **Fix:** For `public_paywalled`, allow a note only if it is in the preview list **or** the caller has a matching payment row. Treat `null` preview as “no previews.”

### 7. Unrestricted file upload

- **Where:** `POST /files/upload` (`server/routes/files/upload.post.js`)
- **Issue:** Only checks that a session exists. It does not check MIME type, extension, magic bytes, or size. Content type is taken from the client. Combined with user-controlled `file_url` on notes (images/audio), this can host HTML/SVG/malware on the B2 bucket and inflate storage bills.
- **Fix:** Allowlist types (for example jpeg/png/webp/mp3), cap size, verify magic bytes, and only accept URLs from the application bucket.

### PAY-2. Stripe was acknowledged before premium or a purchase was stored

- **Where:** `POST /webhooks/stripe` (`server/routes/webhooks/stripe.post.js`, `finish_checkout_session_completed_processing`)
- **Issue:** On `checkout.session.completed` the handler started the database work, returned HTTP 200 immediately, and only logged failures in `post_ack_processing.catch`. If `users` had no row for `client_reference_id`, the worker threw after Stripe had already been told the event succeeded.
- **Impact:** Stripe did not retry. The customer was charged and never received premium or the collection purchase.
- **Fix:** Await the grant. Return 2xx only after the `payments` insert and the user or collection update commit. Return 5xx on failure so Stripe retries.

### PAY-1. The same Checkout session can grant premium more than once

- **Where:** `server/routes/webhooks/stripe.post.js`. Schema: `payments.stripe_checkout_session_id`.
- **Issue:** Nothing stored `checkout.session.id`. Each delivery inserted another `payments` row. For premium it also set expiration to the current expiration plus one year.
- **Impact:** Stripe delivers events at least once. A duplicate added another paid year and another payment row.
- **Fix:** Store the Checkout session id on `payments` with a unique constraint. Insert that id first, in the same transaction as the premium update. If the id is already stored, leave the user unchanged.

### PAY-3. A completed Checkout session was treated as paid

- **Where:** `server/routes/webhooks/stripe.post.js`
- **Issue:** The grant used `metadata.payment_type`, `metadata.collection_id`, `client_reference_id`, and `amount_total`. It did not require `payment_status === 'paid'`. `checkout.session.completed` fires when the customer finishes Checkout, including delayed payment methods whose `payment_status` is still `unpaid`. Promotion codes, exclusive tax, and the USD conversion may change `amount_total`; that difference is not this bug.
- **Impact:** Premium (`status = premium`, expiration plus one year) or a `payments` row for a collection could be written without a captured charge.
- **Fix:** On `checkout.session.completed`, grant only when `payment_status` is `paid`. If it is `unpaid`, do not grant; grant on `checkout.session.async_payment_succeeded`. Ignore `checkout.session.async_payment_failed`. Leave `allow_promotion_codes` enabled.

## Medium

### ENUM-2. Sign-up reported that an email is already registered

- **Where:** `POST /a/send-token-to-validate-email` (`server/routes/a/send-token-to-validate-email.post.js`)
- **Issue:** A confirmed account returned `error_email_already_in_use`. An unverified account with a live token returned `error_email_token_already_sent`. The retry cap returned `error_maximum_retries_reached`. An unknown address continues into Emailable and may create a user.
- **Impact:** Confirmed which emails have accounts.
- **Fix:** Return `{ success: true }` with status 201 for a confirmed account, a live token, the retry cap, and a real send. Send the validation mail only when the account is unverified and under the existing token cap. Invalid and corrupt addresses still return 400. Emailable spend on unknown addresses remains ABUSE-2.

### ENUM-1. Login revealed accounts that have not set a password

- **Where:** `POST /a/log-in` (`server/routes/a/log-in.post.js`)
- **Issue:** Unknown email and wrong password both returned `error_wrong_credentials`. `password === null` returned `error_account_not_confirmed`.
- **Impact:** Callers learned which addresses had an unfinished account.
- **Fix:** Return `error_wrong_credentials` with status 401 for the null-password case too. Timing for that path is equalized in ENUM-3.

### ENUM-3. Login timing differs for missing users

- **Where:** `POST /a/log-in` (`server/routes/a/log-in.post.js`)
- **Issue:** `bcrypt.compare` ran only when a password hash existed. Missing users returned before that work.
- **Impact:** Response time distinguished registered accounts even after ENUM-1.
- **Fix:** Compare the submitted password with a cost-10 dummy hash when the user is missing or `password` is null. Ignore that comparison and still return `error_wrong_credentials`. Accounts that have a password are still compared with their stored hash.

### XSS-1. Public notes were rendered with a wider HTML policy than the server stores

- **Where:** `shared/render-note-markdown.js` and `app/components/NoteDisplayerElement.vue`. Copy: `server/routes/public-collection/[collection_id]/copy.post.js`.
- **Issue:** Note markdown is stored raw and turned into HTML in the browser. The client DOMPurify config added `style` plus SVG and MathML, including `annotation-xml`. The server stored `html_content` with a different config. The SSR fallback rendered `html_content` with no second pass, including rows written before sanitization and rows copied unchanged into another account.
- **Impact:** A sanitizer gap ran in the application origin for whoever opened the note. Session cookies are HttpOnly; same-origin script could still call APIs as the visitor.
- **Fix:** One policy in `shared/note-html-policy.js` is used when notes are stored, rendered, and copied. KaTeX runs in HTML mode. The allowlist is markdown tags plus the `span`, `svg`, `path`, and `line` elements KaTeX emits, and inline `style` is limited to the properties in that output. The SSR fallback and a note with no markdown go through the same function. Copying a public collection sanitizes `html_content` in the same transaction as the insert.

### XSS-2. Collection descriptions were injected as stored HTML

- **Where:** `app/pages/pc/[collection_id].vue` used `v-html` on `description`. Writes and the public GET ran `sanitizeStoredHtml`, a separate DOMPurify config from notes.
- **Issue:** The page executed whatever HTML the sanitizer left behind. A bypass of that allowlist ran in the application origin.
- **Impact:** Same-origin script could call APIs as the visitor. Session cookies are HttpOnly.
- **Fix:** `description` was renamed to `description_html`, and `description_markdown` was added. Create and update store the authored text unchanged and store `description_html` with `sanitizeHtml` (the note policy). Blank text stores null in both columns. Duplicate copies both. The public page and note bodies render through `MarkdownContent`: non-empty markdown goes through `renderNoteMarkdownToHtml`, otherwise the HTML is passed through `sanitizeNoteHtml`. Legacy rows that only have `description_html` still render.

### HDR-1. Responses set no security headers

- **Where:** `nuxt.config.js`. No Content-Security-Policy, `X-Content-Type-Options`, `Referrer-Policy`, or `frame-ancestors`.
- **Issue:** Nothing limited script sources or framing, and token URLs could be sent as referrers.
- **Impact:** XSS-1 and XSS-2 were easier to exploit. Reset, sign-up, and email-change links put the token in the path.
- **Fix:** Every response gets `X-Content-Type-Options: nosniff`, `Referrer-Policy: no-referrer`, and a Content-Security-Policy of `script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'`. `'unsafe-inline'` is required for Nuxt's color-mode script and inline runtime config. No third-party script origin is allowed. The policy is in `shared/security-headers.js`, referenced from Nitro `routeRules`, and applied by `server/middleware/security-headers.js`.
