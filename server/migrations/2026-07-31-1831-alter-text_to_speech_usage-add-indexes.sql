CREATE INDEX IF NOT EXISTS text_to_speech_usage_user_id_created_at_idx
  ON text_to_speech_usage (user_id, created_at);
