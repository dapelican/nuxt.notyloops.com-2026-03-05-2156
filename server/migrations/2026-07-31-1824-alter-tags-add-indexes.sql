CREATE INDEX IF NOT EXISTS tags_user_id_lowercase_label_idx
  ON tags (user_id, lowercase_label);

CREATE INDEX IF NOT EXISTS tags_label_trgm_idx
  ON tags USING GIN (label gin_trgm_ops);
