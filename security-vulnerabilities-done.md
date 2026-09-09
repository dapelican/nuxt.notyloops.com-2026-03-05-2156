## Critical: account takeover

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