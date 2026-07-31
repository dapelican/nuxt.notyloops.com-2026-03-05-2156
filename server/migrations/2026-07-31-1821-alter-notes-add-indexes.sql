CREATE INDEX IF NOT EXISTS notes_user_id_deleted_at_null_idx
  ON notes (user_id)
  WHERE deleted_at IS NULL;

CREATE INDEX IF NOT EXISTS notes_user_id_source_collection_id_deleted_at_null_idx
  ON notes (user_id, source_collection_id)
  WHERE deleted_at IS NULL;

CREATE INDEX IF NOT EXISTS notes_title_trgm_idx
  ON notes USING GIN (title gin_trgm_ops)
  WHERE deleted_at IS NULL;
