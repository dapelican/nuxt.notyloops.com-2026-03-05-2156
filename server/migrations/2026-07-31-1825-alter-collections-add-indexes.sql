CREATE INDEX IF NOT EXISTS collections_user_id_review_strategy_idx
  ON collections (user_id, review_strategy);

CREATE INDEX IF NOT EXISTS collections_title_trgm_idx
  ON collections USING GIN (title gin_trgm_ops);

CREATE INDEX IF NOT EXISTS collections_tag_id_list_to_include_gin_idx
  ON collections USING GIN (tag_id_list_to_include);

CREATE INDEX IF NOT EXISTS collections_tag_id_list_to_exclude_gin_idx
  ON collections USING GIN (tag_id_list_to_exclude);
