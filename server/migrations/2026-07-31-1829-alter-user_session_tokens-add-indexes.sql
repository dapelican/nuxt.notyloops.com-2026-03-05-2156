CREATE INDEX IF NOT EXISTS user_session_tokens_user_id_idx
  ON user_session_tokens (user_id);
