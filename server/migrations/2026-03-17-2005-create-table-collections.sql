CREATE TABLE collections (
  id UUID PRIMARY KEY DEFAULT uuidv7(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now() ,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type TEXT NOT NULL DEFAULT 'private', -- private, public_free, public_paywalled
  title TEXT NOT NULL,
  description TEXT,
  tag_id_list_to_include JSONB,
  inclusion_type TEXT NOT NULL DEFAULT 'AND' CHECK (inclusion_type IN ('AND', 'OR')),
  tag_id_list_to_exclude JSONB,
  exclusion_type TEXT NOT NULL DEFAULT 'AND' CHECK (exclusion_type IN ('AND', 'OR')),
  track_scores BOOLEAN NOT NULL DEFAULT TRUE,
  review_strategy TEXT NOT NULL DEFAULT 'creation_order',
  super_random_counter INTEGER NOT NULL DEFAULT 0,
  preview_note_id_list JSONB,
  price_without_tax INTEGER,
  stripe_payment_link_id TEXT
);

CREATE TRIGGER update_collections_timestamp
BEFORE UPDATE ON collections
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();