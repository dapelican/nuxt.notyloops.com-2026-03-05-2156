CREATE INDEX IF NOT EXISTS note_details_note_id_idx
  ON note_details (note_id);

CREATE INDEX IF NOT EXISTS note_details_markdown_content_trgm_idx
  ON note_details USING GIN (markdown_content gin_trgm_ops);
