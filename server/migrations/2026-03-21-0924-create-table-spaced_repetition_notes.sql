CREATE TABLE spaced_repetition_notes (
  id UUID PRIMARY KEY DEFAULT uuidv7(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now() ,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  note_id UUID NOT NULL REFERENCES notes(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  state SMALLINT NOT NULL DEFAULT 0,
  due_date DATE NOT NULL DEFAULT now(),
  stability DOUBLE PRECISION NOT NULL DEFAULT 0,
  difficulty DOUBLE PRECISION NOT NULL DEFAULT 0,
  elapsed_days INTEGER NOT NULL DEFAULT 0,
  scheduled_days INTEGER NOT NULL DEFAULT 0,
  repetitions INTEGER NOT NULL DEFAULT 0,
  lapses INTEGER NOT NULL DEFAULT 0,
  learning_steps INTEGER NOT NULL DEFAULT 0,
  last_review_date TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(note_id)
);

CREATE TRIGGER update_spaced_repetition_notes_timestamp
BEFORE UPDATE ON spaced_repetition_notes
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();
