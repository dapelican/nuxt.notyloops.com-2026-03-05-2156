CREATE TABLE note_reviews (
  id UUID PRIMARY KEY DEFAULT uuidv7(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  note_id UUID,
  user_id UUID,
  collection_id UUID,
  review_strategy TEXT,
  score INTEGER
);

CREATE TRIGGER update_note_reviews_timestamp
BEFORE UPDATE ON note_reviews
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();
