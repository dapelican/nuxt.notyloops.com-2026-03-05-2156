CREATE INDEX IF NOT EXISTS payments_user_id_collection_id_idx
  ON payments (user_id, collection_id);
