CREATE TABLE notes (
  id UUID PRIMARY KEY DEFAULT uuidv7(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now() ,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  deleted_at TIMESTAMPTZ,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  format TEXT NOT NULL DEFAULT 'flashcard', -- NOTE_FORMAT_FLASHCARD, NOTE_FORMAT_FREE, NOTE_FORMAT_MC
  title TEXT,
  swappable_sides BOOLEAN,
  first_review_date TIMESTAMPTZ,
  last_review_date TIMESTAMPTZ,
  review_count INTEGER NOT NULL DEFAULT 0,
  score INTEGER NOT NULL DEFAULT 0,
  source_note_id UUID,
  source_collection_id UUID
);

CREATE TRIGGER update_notes_timestamp
BEFORE UPDATE ON notes
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();
