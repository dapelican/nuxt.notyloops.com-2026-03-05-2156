CREATE TABLE tags (
  id UUID PRIMARY KEY DEFAULT uuidv7(),
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  label TEXT NOT NULL,
  lowercase_label TEXT
);

CREATE TRIGGER update_tags_timestamp
BEFORE UPDATE ON tags
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();