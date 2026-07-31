CREATE INDEX IF NOT EXISTS note_tags_note_id_idx
  ON note_tags (note_id);

CREATE INDEX IF NOT EXISTS note_tags_user_id_tag_id_idx
  ON note_tags (user_id, tag_id);
