### DATA-2. Paywalled collections list every note title

- **Where:** `GET /public-collection/[collection_id]` builds `note_list` with `SELECT id, title` for every note from `selectNoteIdListOnTagCriteria`, including `public_paywalled`, with no purchase check. `GET /public-collection/[collection_id]/check-copy` also counts those notes for any logged-in user, with no payment check.
- **Issue:** Note bodies are gated in `GET /public-collection/[collection_id]/note/[note_id]`. Titles and ids are not.
- **Impact:** The title is often the card prompt. Anyone with the collection id can read the full title list.
- **Fix:** For `public_paywalled`, return titles only for `preview_note_id_list` unless the caller is the owner or has a `payments` row. Apply the same rule in `check-copy`.
- **Comment**: this is intended. A user shoul be able to see the titles of the notes, but not their content.

### LIMIT-2. The free-tier cap is checked outside a transaction

- **Where:** `POST /notes/create` and `POST /notes/duplicate`
- **Issue:** Both `COUNT` notes, then insert. Concurrent requests can all pass the check and all insert.
- **Impact:** A free account can end above `FREEMIUM_NOTE_LIMIT` without using LIMIT-1.
- **Fix:** Take a transaction-scoped lock on the user row (or insert under a constraint) so the count and the insert commit together.
- **Comment**: this doesn't matter.

### LIMIT-5. Text-to-speech records usage and does not enforce it

- **Where:** `POST /files/generate-audio-file-from-text` (`server/routes/files/generate-audio-file-from-text.post.js`). Weekly cap constant: `TEXT_TO_SPEECH_WEEK_CHARACTER_LIMIT` (10_000) in `shared/utils/constants.js`. The read path is `GET /text-to-speech/week-usage`.
- **Issue:** Each call is limited to `TEXT_TO_SPEECH_FILE_CHARACTER_LIMIT` (500) characters, then the usage row is inserted after Google has already been called. The weekly sum is never compared to the cap. Premium never expiring (PAY-4) makes this permanent.
- **Impact:** A premium session can spend the Google key without a weekly ceiling.
- **Fix:** Sum `text_to_speech_usage` for the current week first. Reject when `sum + text.length` exceeds the weekly cap. Insert the usage row in the same transaction before calling Google, or roll it back if Google fails.
- **Comment**: not necessary. The important thing is to block usage when the threshold has been passed.