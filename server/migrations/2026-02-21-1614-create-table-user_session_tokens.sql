CREATE TABLE user_session_tokens (
  id UUID PRIMARY KEY DEFAULT uuidv7(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now() ,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  expires_at TIMESTAMPTZ,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token TEXT,
  blacklisted BOOLEAN DEFAULT FALSE
);

CREATE TRIGGER update_user_session_tokens_timestamp
BEFORE UPDATE ON user_session_tokens
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();
