ALTER TABLE payments RENAME TO stripe_payments;

ALTER INDEX payments_user_id_collection_id_idx
RENAME TO stripe_payments_user_id_collection_id_idx;

ALTER TRIGGER update_payments_timestamp ON stripe_payments
RENAME TO update_stripe_payments_timestamp;

ALTER TABLE stripe_payments
ADD COLUMN stripe_invoice_id TEXT UNIQUE,
ADD COLUMN currency TEXT NOT NULL DEFAULT 'eur';

CREATE TABLE stripe_subscriptions (
  id UUID PRIMARY KEY DEFAULT uuidv7(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT UNIQUE,
  subscription_cancel_at_period_end BOOLEAN NOT NULL DEFAULT false,
  currency TEXT NOT NULL DEFAULT 'eur'
);

CREATE TRIGGER update_stripe_subscriptions_timestamp
BEFORE UPDATE ON stripe_subscriptions
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();
