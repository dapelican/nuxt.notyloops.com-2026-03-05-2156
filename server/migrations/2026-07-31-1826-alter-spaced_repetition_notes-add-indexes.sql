CREATE INDEX IF NOT EXISTS spaced_repetition_notes_user_id_due_date_idx
  ON spaced_repetition_notes (user_id, due_date);
