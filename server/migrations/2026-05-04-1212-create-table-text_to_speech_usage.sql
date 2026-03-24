CREATE TABLE text_to_speech_usage (
  id UUID PRIMARY KEY DEFAULT uuidv7(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  character_count INTEGER NOT NULL,
  user_id UUID
);

CREATE TRIGGER update_text_to_speech_usage_timestamp
BEFORE UPDATE ON text_to_speech_usage
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();
