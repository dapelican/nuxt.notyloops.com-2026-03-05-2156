CREATE INDEX IF NOT EXISTS note_reviews_user_id_created_at_idx
  ON note_reviews (user_id, created_at DESC);

CREATE INDEX IF NOT EXISTS note_reviews_note_id_idx
  ON note_reviews (note_id);
