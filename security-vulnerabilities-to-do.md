# Security vulnerabilities

Review of the Nuxt 4 application (auth, notes, collections, payments, uploads, and public pages). Ordered by severity.

## High

### 3. Change-email IDOR

- **Where:** `POST /a/change-email` (`server/routes/a/change-email.post.js`)
- **Issue:** The endpoint requires a session, but then updates whoever owns `current_email`, not the logged-in user. There is no `current_email === user.email` check (unlike change-password).
- **Risk:** A logged-in attacker who knows another user’s email can reassign it, then use password reset or support flows against that account.
- **Fix:** Ignore body `current_email`. Update `WHERE id = $sessionUserId`. Confirm the new address with a token before switching.

### 6. Unauthenticated log sink

- **Where:** `POST /monitoring/save-log` (`server/routes/monitoring/save-log.post.js`)
- **Issue:** No auth, no size cap, inserts arbitrary JSON into `logs`.
- **Risk:** Easy database-fill / DoS and a place to park attacker-controlled payloads.
- **Fix:** Remove it from the public internet, or require auth plus a small schema and rate limit.



## Medium

| Issue | Where | Risk |
| --- | --- | --- |
| No rate limiting | Login, signup, reset, contact, join-beta, save-log | Credential stuffing, mail bombing `support@notyloops.com`, TTS/upload cost abuse |
| Internal errors returned to clients | `handleBackendError` returns `err.message` | SQL/stack details leak |
| SQL failures log `parameter_list` | `server/database/query.js` | Password hashes and PII in `logs` |
| `/monitoring/ping` returns a user UUID | `SELECT id FROM users LIMIT 1` | Unauthenticated info leak plus extra database load |
| Public collection `SELECT *` | `public-collection/.../index.get.js` | Owner `user_id`, tag IDs, pricing internals |
| Freemium bypass | `copy.post.js` never checks `FREEMIUM_NOTE_LIMIT` | Free users can copy unlimited public notes |
| No password policy | Sign-up / reset | Single-character passwords allowed |
| Email enumeration | `error_email_already_in_use`, `error_email_token_already_sent`, `error_account_not_confirmed` | Confirms which emails exist |
| TTS quota not enforced | Usage is recorded; generate-audio does not check it | API cost abuse for premium users |
| Stripe webhook ACKs before work finishes | `server/routes/webhooks/stripe.post.js` | Failed grants will not be retried; possible missed premium |
| Postgres pool has no SSL | `server/database/query.js` | Database traffic unencrypted if the host is remote |
| Search `limit`/`offset` unbounded | Notes/tags/collections search | Large `LIMIT` DoS |
| CSV import unbounded | `notes/import.post.js` | Memory DoS |
| Arbitrary `file_url` | Note create/update | Tracking pixels, unexpected SVG/HTML |
| No CSP / security headers in `nuxt.config.js` | App-wide | Makes XSS more damaging |

### Auth-adjacent notes

- Login uses bcrypt and generic `error_wrong_credentials` for unknown users vs wrong password (good), but `error_account_not_confirmed` still enumerates unverified accounts.
- `ORDER BY` interpolation is allowlisted (`title`, `created_at`, …). That is not SQL injection today; keep the allowlist.
- Most note/collection/tag routes correctly scope by `user_id`.

## Low

- Session cookie security depends on `NUXT_SESSION_PASSWORD` being strong in production (weak or copied example values break session sealing).
- User enumeration via login `error_account_not_confirmed`.
- Google Cloud API key is passed in the TTS request query string (may appear in logs).
- Migrations run automatically on application startup (`server/plugins/01.migrations.js`).
- `javascript:` links are not stripped in `patchNoteExternalLinks` (defense in depth; DOMPurify may already strip them).

## What looks solid

- Queries use parameterized `$1, $2` placeholders.
- Passwords are bcrypt-hashed (cost 10).
- Sessions are sealed cookies (`nuxt-auth-utils`) plus database tokens with expiry and blacklist.
- Note markdown is sanitized with DOMPurify (client and server).
- Stripe webhooks verify `stripe-signature` before use.
- Email templates use escaped EJS (`<%= %>`), not raw `<%- %>`.
- Secrets sit in private `runtimeConfig`, not `runtimeConfig.public`.
- Ownership checks on typical CRUD (`notes`, `collections`, `tags`, `note-tags`).

## Suggested order of work

1. Verify the reset token in `reset-password`; verify the signup token and restrict signup to unverified users.
2. Bind change-email to the session user id; confirm the new email with a token.
3. Sanitize collection descriptions; stop raw `v-html`.
4. Enforce paywall on the public note GET (`null` preview = no access except paid).
5. Lock down `/monitoring/save-log` and `/monitoring/ping`.
6. Add rate limits, upload allowlists, password minimums, and stop returning raw error messages.
