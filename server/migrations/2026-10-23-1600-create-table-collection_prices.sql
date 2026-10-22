CREATE TABLE collection_prices (
  id UUID PRIMARY KEY DEFAULT uuidv7(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  collection_id UUID NOT NULL REFERENCES collections(id) ON DELETE CASCADE,
  currency TEXT NOT NULL,
  amount INTEGER NOT NULL,
  text TEXT NOT NULL,
  UNIQUE (collection_id, currency)
);

CREATE TRIGGER update_collection_prices_timestamp
BEFORE UPDATE ON collection_prices
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();
