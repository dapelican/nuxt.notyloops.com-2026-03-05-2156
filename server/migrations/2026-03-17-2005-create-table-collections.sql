CREATE TABLE collections (
  id UUID PRIMARY KEY DEFAULT uuidv7(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now() ,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type TEXT NOT NULL DEFAULT 'private', -- private, shared, public
  title TEXT NOT NULL,
  description TEXT,
  tag_id_list_to_include JSONB,
  inclusion_type TEXT NOT NULL DEFAULT 'AND' CHECK (inclusion_type IN ('AND', 'OR')),
  tag_id_list_to_exclude JSONB,
  exclusion_type TEXT NOT NULL DEFAULT 'AND' CHECK (exclusion_type IN ('AND', 'OR')),
  track_scores BOOLEAN NOT NULL DEFAULT TRUE,
  hide_note_titles BOOLEAN NOT NULL DEFAULT TRUE,
  review_strategy TEXT NOT NULL DEFAULT 'creation_order',
  pinned BOOLEAN NOT NULL DEFAULT FALSE,
  price_without_tax INTEGER,
  slug TEXT
);

CREATE TRIGGER update_collections_timestamp
BEFORE UPDATE ON collections
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();