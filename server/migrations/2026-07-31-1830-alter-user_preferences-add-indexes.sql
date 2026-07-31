CREATE UNIQUE INDEX IF NOT EXISTS user_preferences_user_id_idx
  ON user_preferences (user_id);
