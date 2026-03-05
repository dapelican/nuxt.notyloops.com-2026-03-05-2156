CREATE TABLE user_email_tokens (
  id UUID PRIMARY KEY DEFAULT uuidv7(),
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token TEXT,
  usage TEXT,
  blacklisted BOOLEAN DEFAULT FALSE
);

CREATE TRIGGER update_user_email_tokens_timestamp
BEFORE UPDATE ON user_email_tokens
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();
