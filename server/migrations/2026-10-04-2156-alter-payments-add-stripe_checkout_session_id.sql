ALTER TABLE payments
ADD COLUMN stripe_checkout_session_id TEXT UNIQUE;
