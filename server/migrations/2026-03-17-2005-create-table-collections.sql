CREATE TABLE collections (
  id UUID PRIMARY KEY DEFAULT uuidv7(),
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type TEXT NOT NULL DEFAULT 'private',
  title TEXT NOT NULL,
  description TEXT,
  tag_id_list_to_include JSONB,
  tag_id_list_to_exclude JSONB,
  track_scores BOOLEAN NOT NULL DEFAULT TRUE,
  display_titles BOOLEAN NOT NULL DEFAULT FALSE,
  review_order TEXT NOT NULL DEFAULT 'creation_order',
  pinned BOOLEAN NOT NULL DEFAULT FALSE,
  price_without_vat INTEGER,
  slug TEXT
);

CREATE TRIGGER update_collections_timestamp
BEFORE UPDATE ON collections
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();