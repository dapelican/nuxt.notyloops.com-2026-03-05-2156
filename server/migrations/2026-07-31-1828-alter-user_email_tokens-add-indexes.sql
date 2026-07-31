CREATE INDEX IF NOT EXISTS user_email_tokens_token_idx
  ON user_email_tokens (token);

CREATE INDEX IF NOT EXISTS user_email_tokens_user_id_usage_created_at_idx
  ON user_email_tokens (user_id, usage, created_at);
