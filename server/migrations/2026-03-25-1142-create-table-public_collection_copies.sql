CREATE TABLE public_collection_copies (
  id UUID PRIMARY KEY DEFAULT uuidv7(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  collection_id UUID,
  source_user_id UUID,
  destination_user_id UUID,
  copied_note_count INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'pending'
);

CREATE TRIGGER update_public_collection_copies_timestamp
BEFORE UPDATE ON public_collection_copies
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();
