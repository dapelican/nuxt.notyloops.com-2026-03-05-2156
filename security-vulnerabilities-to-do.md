# Open security issues

Review date: 2026-10-04. This file is only unfinished work. Issues already fixed (password reset, sign-up overwrite, change-email target, email-change confirmation, paywalled note reads, upload type and size checks, duplicate Checkout session grants, Stripe acknowledged before the grant, unpaid Checkout sessions treated as paid, login revealing unfinished accounts, login timing for missing users, sign-up email enumeration, public note HTML policy, collection description HTML, security response headers) stay in `security-vulnerabilities-done.md`.

Each item below is one change. Fix and check them off independently.

Severity:

- **Critical** — account takeover or the same outcome with one request.
- **High** — payment bypass, large data loss or cost, or unauthenticated abuse of the database.
- **Medium** — leaks, quotas, or abuse that need a logged-in user or many requests.
- **Low** — defense in depth and deployment settings.

## High

### ABUSE-1. Anyone can insert into `logs`

- **Where:** `POST /monitoring/save-log` (`server/routes/monitoring/save-log.post.js`)
- **Issue:** No session, no schema, no size cap. The body field `content` is inserted as-is.
- **Impact:** Unauthenticated callers can fill the database.
- **Fix:** Remove the route from the public app. If a client logger is still required, require a session, accept only a small allowlisted object, and rate-limit it.

## Medium

### DATA-1. Public collection responses return the whole row

- **Where:** `GET /public-collection/[collection_id]` (`server/routes/public-collection/[collection_id]/index.get.js`) spreads `SELECT *`. `GET /collections/[collection_id]` (`server/routes/collections/[collection_id].get.js`) returns that row to any logged-in user when `type` is not private.
- **Issue:** Callers receive `user_id`, `tag_id_list_to_include`, `tag_id_list_to_exclude`, `review_strategy`, `super_random_counter`, `preview_note_id_list`, and `pre_tax_price_in_cents`.
- **Impact:** Owner id and tag ids are exposed. Tag ids feed DATA-3.
- **Fix:** Return only `id`, `title`, `description_markdown`, `description_html`, `type`, and the price field the page needs. On `GET /collections/[collection_id]`, return the full row only when `user_id` is the caller.

### DATA-2. Paywalled collections list every note title

- **Where:** `GET /public-collection/[collection_id]` builds `note_list` with `SELECT id, title` for every note from `selectNoteIdListOnTagCriteria`, including `public_paywalled`, with no purchase check. `GET /public-collection/[collection_id]/check-copy` also counts those notes for any logged-in user, with no payment check.
- **Issue:** Note bodies are gated in `GET /public-collection/[collection_id]/note/[note_id]`. Titles and ids are not.
- **Impact:** The title is often the card prompt. Anyone with the collection id can read the full title list.
- **Fix:** For `public_paywalled`, return titles only for `preview_note_id_list` unless the caller is the owner or has a `payments` row. Apply the same rule in `check-copy`.

### DATA-3. Note create can attach another user’s tag and then read its label

- **Where:** `POST /notes/create` inserts `note_tags` for every id in `tag_id_list` without `tags.user_id = session user`. `POST /notes/update` does the same for new tag ids. `GET /notes/[note_id]` joins `tags` on `tag_id` only. `POST /notes/search` joins the same way. `POST /note-tags/link` does filter tags by `user_id`.
- **Issue:** Tag ids for a public collection are in DATA-1. Creating a note with one of those ids makes `GET /notes/{newNoteId}` return that tag’s `label`.
- **Impact:** Tag names of other users are readable when their ids appear on a public collection.
- **Fix:** Insert `note_tags` only for tags selected with `WHERE user_id = $sessionUserId`. Filter the joins in the note GET and search the same way.

### DATA-4. Health check returns a real user id

- **Where:** `GET /monitoring/ping` (`server/routes/monitoring/ping.get.js`)
- **Issue:** Unauthenticated `SELECT id FROM users LIMIT 1`, and the row is returned as `rows`.
- **Impact:** Leaks a user UUID and hits the database on every probe.
- **Fix:** Return `{ pong: 'pong' }` with no query. Restrict the route to the monitor’s network if it must stay up.

### ERR-1. HTTP 500 responses include the exception message

- **Where:** `server/helpers/handle-backend-error.js`
- **Issue:** The client receives `error: err.message`. Postgres errors include the statement and the failing value. This helper is the catch path for every route.
- **Impact:** Failed requests reveal schema and data that the route would not otherwise return.
- **Fix:** Log the error server-side. Return a fixed body such as `{ error_message: 'error_internal' }` with no `err.message`.

### ERR-2. Failed queries write their parameters into `logs`

- **Where:** `server/database/query.js` (`parameter_list` in the `INSERT INTO logs` payload and in `console.error`)
- **Issue:** A failed sign-up, reset, or password change logs the bcrypt hash and the email. Other failures log whatever was bound, including note text.
- **Impact:** The `logs` table and process output become a second copy of secrets and note content. ABUSE-1 shows this table is not a safe place for that.
- **Fix:** Log the query text and the Postgres error code only. Redact parameters.

### LIMIT-2. The free-tier cap is checked outside a transaction

- **Where:** `POST /notes/create` and `POST /notes/duplicate`
- **Issue:** Both `COUNT` notes, then insert. Concurrent requests can all pass the check and all insert.
- **Impact:** A free account can end above `FREEMIUM_NOTE_LIMIT` without using LIMIT-1.
- **Fix:** Take a transaction-scoped lock on the user row (or insert under a constraint) so the count and the insert commit together.

### LIMIT-3. Search accepts any integer limit and still loads every match

- **Where:** `POST /notes/search`, `POST /collections/search`, `POST /tags/search`
- **Issue:** `limit` and `offset` are coerced to integers with no minimum or maximum. Notes search runs `SELECT id FROM notes` for the whole match set, returns every id in `searched_note_id_list`, then applies `LIMIT`. `search_term` is wrapped in `%…%`, so a caller can force a leading-wildcard scan.
- **Impact:** One authenticated request can make Postgres and Node hold a very large result.
- **Fix:** Clamp `limit` (for example 1–100) and `offset` to `>= 0`. Page in SQL. Return a count, not the full id list, unless the UI truly needs that list and it is capped.

### LIMIT-4. CSV import has no size cap

- **Where:** `POST /notes/import` (`server/routes/notes/import.post.js`)
- **Issue:** Premium and admin callers can send a JSON or raw CSV body of any size. `csv-parse` builds the full record list in memory, then inserts row by row with no transaction and no maximum note count.
- **Impact:** Memory exhaustion. A failed import also leaves a partial set of notes.
- **Fix:** Reject bodies over a fixed byte size and a fixed row count before parsing. Insert in one transaction.

### LIMIT-5. Text-to-speech records usage and does not enforce it

- **Where:** `POST /files/generate-audio-file-from-text` (`server/routes/files/generate-audio-file-from-text.post.js`). Weekly cap constant: `TEXT_TO_SPEECH_WEEK_CHARACTER_LIMIT` (10_000) in `shared/utils/constants.js`. The read path is `GET /text-to-speech/week-usage`.
- **Issue:** Each call is limited to `TEXT_TO_SPEECH_FILE_CHARACTER_LIMIT` (500) characters, then the usage row is inserted after Google has already been called. The weekly sum is never compared to the cap. Premium never expiring (PAY-4) makes this permanent.
- **Impact:** A premium session can spend the Google key without a weekly ceiling.
- **Fix:** Sum `text_to_speech_usage` for the current week first. Reject when `sum + text.length` exceeds the weekly cap. Insert the usage row in the same transaction before calling Google, or roll it back if Google fails.

### LIMIT-6. Uploads have a per-file cap and no per-user cap

- **Where:** `POST /files/upload` (`server/routes/files/upload.post.js`). `MAX_UPLOAD_FILE_BYTES` is 10 MB.
- **Issue:** Any session can upload repeatedly. Objects are named with a timestamp and a UUID and stored in the application bucket.
- **Impact:** Storage cost grows without a quota.
- **Fix:** Count bytes or objects per user per day and reject above that quota.

### UP-1. MP3 detection accepts a two-byte prefix

- **Where:** `server/helpers/detect-allowed-upload-mime.js`
- **Issue:** JPEG, PNG, and WebP checks look at a real signature. Audio is accepted when the buffer starts with `ID3` or with `0xFF` and the top three bits of the next byte set (`MPEG` frame sync). `resolveUploadMime` then requires the declared type to match.
- **Impact:** A file that is not MPEG audio can be stored as `audio/mpeg` if it starts with those bytes. B2 will serve it with that content type (UP-2).
- **Fix:** Require a longer MPEG or ID3 header, or reject audio that fails a real parser. Keep the declared-type match.

### UP-2. Bucket objects are fetched with the URL alone

- **Where:** `server/helpers/is-application-bucket-file-url.js`, `server/services/backblaze/upload-file.js`
- **Issue:** Note create, update, and import accept any `https` URL whose host is `*.backblazeb2.com` and whose path is `/file/{B2_BUCKET_NAME}/…`. Upload returns that public download URL. Nothing checks that this user uploaded that object, and the bucket download URL does not require a session.
- **Impact:** Note images and audio are readable by anyone who has the URL. A public note, an export, or a log line that contains `file_url` publishes private media. Knowing another user’s object URL is enough to attach it to a note.
- **Fix:** Store the object key, not a world-readable URL. Serve files through an authenticated route that checks note ownership (and the paywall for public collections). If the bucket must stay public, use unguessable keys and do not put those URLs in emails, exports, or `logs`.

### ABUSE-2. Public forms send mail with no rate limit

- **Where:** `POST /contact` (`server/routes/contact/index.post.js`), `POST /a/join-beta` (`server/routes/a/join-beta.post.js`), `POST /a/send-token-to-validate-email`, `POST /a/log-in`, `POST /files/upload`, `POST /files/generate-audio-file-from-text`
- **Issue:** Contact and join-beta always email `support@notyloops.com`. Contact allows a 5_000-character message. Sign-up calls Emailable for every new address. Login, upload, and text-to-speech have no IP or account throttle. Password reset is the exception: one active token and a cap of three historical tokens per account.
- **Impact:** Mailbox flooding, Emailable spend, credential stuffing against weak passwords (PWD-1), and the quotas in LIMIT-5 and LIMIT-6.
- **Fix:** Add a shared limiter (IP plus email or user id) on login, sign-up, contact, and join-beta. Keep the existing reset-token cap.

## Low

### PWD-1. Passwords have no minimum length or denylist

- **Where:** `POST /a/sign-up`, `POST /a/reset-password`, `POST /a/change-password`. The check is non-empty and `password_1 === password_2`.
- **Issue:** A one-character password is stored with bcrypt cost 10.
- **Impact:** With ABUSE-2, guessed passwords succeed quickly.
- **Fix:** Require a minimum length (at least 10) on all three routes. Reject the new password when it equals the current one on change-password.

### SEC-1. Session sealing depends on a secret that the example invites people to copy

- **Where:** `.env.example` (`NUXT_SESSION_PASSWORD="a-secure-password-with-at-least-32-characters"`). Cookie flags themselves are fine: `nuxt-auth-utils` sets `httpOnly`, `sameSite: lax`, and `secure` outside development. `verifySessionAndReturnUser` trusts the sealed `session_token_id` and does not check the `token` column on `user_session_tokens`.
- **Issue:** Anyone who knows `NUXT_SESSION_PASSWORD` can mint a cookie for a known session-row id. The example value is not a generated secret.
- **Fix:** Generate a unique 32+ character secret per environment. Do not deploy the example value. Keep `sameSite=lax`.

### SEC-2. The Google API key is sent in the query string

- **Where:** `server/services/google/get-speech-buffer-from-text.js` (`texttospeech.googleapis.com/v1/text:synthesize?key=`)
- **Issue:** The key is on the URL. Axios and proxies often log request URLs. The module also calls `useRuntimeConfig()` at import time.
- **Fix:** Send the key in a header if this API allows it, or restrict the key to the Text-to-Speech API and this server’s egress IP. Read the config inside the function.

### OPS-1. Migrations run as the application starts

- **Where:** `server/plugins/01.migrations.js`, `server/database/migrations.js`
- **Issue:** Every boot applies pending SQL with the application database user. A bad or partial migration takes the process down (`process.exit(1)`), and the app role can change schema.
- **Fix:** Run migrations as a deploy step with a role that is not the runtime role. Keep the runtime role limited to DML.

### OPS-2. The Postgres pool does not set TLS

- **Where:** `server/database/query.js` (`new pg.Pool({ connectionString })`)
- **Issue:** Encryption happens only when `DB_CONNECTION_STRING` already contains `sslmode`. A remote host without that parameter is plaintext.
- **Fix:** For any non-local host, set `ssl: { rejectUnauthorized: true }` or require `sslmode=verify-full` in the connection string.

### OPS-3. The dev server runs scheduled tasks over HTTP with no auth

- **Where:** `nuxt.config.js` (`nitro.experimental.tasks` and `scheduledTasks`). Nitro registers `POST /_nitro/tasks/:name` in the development preset only (`node_modules/nitropack/dist/presets/_nitro/runtime/nitro-dev.mjs`). Tasks include `tasks:delete-notes-permanently` and `tasks:delete-unused-backblaze-files`.
- **Issue:** A Nuxt dev server reachable on the network will run those tasks for an anonymous caller. Production presets do not register that route.
- **Fix:** Do not expose `nuxt dev` beyond localhost. Keep the tasks endpoint off in any deployed environment.

### XSS-3. `javascript:` links are left in place

- **Where:** `patchNoteExternalLinks` in `app/components/MarkdownContent.vue`
- **Issue:** Anchors whose `href` matches `javascript:` are skipped. They are not removed. DOMPurify 3 usually strips these URLs first; this function does not add that protection.
- **Fix:** Remove the node or set `href` to `#` when the value matches `javascript:`. Prefer fixing XSS-1 so the markup never contains that href.

## Checked and left as-is

- SQL uses `$1, $2` parameters. `ORDER BY` columns in note, tag, and collection search are allowlists.
- Note, collection, tag, and review mutations that were inspected scope rows with `user_id`. `POST /note-tags/link` does this for both notes and tags; note create and update do not (DATA-3).
- Password reset and sign-up now require a live, unblacklisted email token and bind it to the user. Sign-up updates only `status = unverified` and `password IS NULL`.
- Paywalled note reads treat a null preview list as none, then allow the note only for the owner or a matching `payments` row.
- Uploads require a session, a 10 MB cap, and a magic-byte match (residual: UP-1, LIMIT-6, UP-2).
- Stripe signatures are verified with `STRIPE_ENDPOINT_SECRET` before the event is used.
- Email templates use escaped EJS (`<%= %>`).
- Secrets are under `runtimeConfig`, not `runtimeConfig.public`.
- Session cookies are HttpOnly and `SameSite=Lax`, which blocks cross-site POSTs from another site. A new CSRF token is not required for that default.

## Order to fix

1. AUTH-1, AUTH-2 together.
2. PAY-3, then PAY-4.
3. ABUSE-1 and DATA-4.
4. LIMIT-1 and LIMIT-2.
5. DATA-1, DATA-2, DATA-3.
6. ERR-1, ERR-2, ENUM-3.
7. ABUSE-2, LIMIT-3, LIMIT-4, LIMIT-5, LIMIT-6, PWD-1.
8. UP-1, UP-2, SEC-1, SEC-2, OPS-1, OPS-2, OPS-3, XSS-3.
