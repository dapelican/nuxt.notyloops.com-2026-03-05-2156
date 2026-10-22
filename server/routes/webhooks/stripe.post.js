/* eslint-disable sort-imports */
import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_500_INTERNAL_SERVER_ERROR,
} from '../../helpers/http-status-codes.js';

import {
  defineEventHandler,
  getRequestHeader,
  readRawBody,
  setResponseStatus,
} from 'h3';

import {
  executeSQLTransaction,
} from '../../database/query.js';

import {
  applyEntitledSubscription,
  endSubscription,
  readSubscriptionPeriodEndIso,
} from '../../services/stripe/subscription-state.js';

import {
  PREMIUM_MONTHLY_PAYMENT_TYPE,
  PREMIUM_YEARLY_PAYMENT_TYPE,
} from '../../helpers/constants.js';

import {
  DEFAULT_CURRENCY,
  USER_STATUS_PREMIUM_MONTHLY,
  USER_STATUS_PREMIUM_YEARLY,
} from '#shared/utils/constants.js';

import {
  handleBackendError,
} from '../../helpers/handle-backend-error.js';

import Stripe from 'stripe';
/* eslint-enable sort-imports */

const CHECKOUT_SESSION_ASYNC_PAYMENT_SUCCEEDED = 'checkout.session.async_payment_succeeded';
const CHECKOUT_SESSION_COMPLETED = 'checkout.session.completed';
const CUSTOMER_SUBSCRIPTION_DELETED = 'customer.subscription.deleted';
const CUSTOMER_SUBSCRIPTION_UPDATED = 'customer.subscription.updated';
const INVOICE_PAID = 'invoice.paid';
const INVOICE_PAYMENT_FAILED = 'invoice.payment_failed';
const PAYMENT_STATUS_PAID = 'paid';

const GRANT_CHECKOUT_SESSION_EVENT_TYPES = new Set([
  CHECKOUT_SESSION_ASYNC_PAYMENT_SUCCEEDED,
  CHECKOUT_SESSION_COMPLETED,
]);

const SUBSCRIPTION_INVOICE_BILLING_REASONS = new Set([
  'subscription_create',
  'subscription_cycle',
  'subscription_update',
]);

const readStripeId = (value) => {
  if (typeof value === 'string' && value.length > 0) {
    return value;
  }

  if (value && typeof value.id === 'string') {
    return value.id;
  }

  return null;
};

const subscriptionStatusForPaymentType = (payment_type) => {
  if (payment_type === PREMIUM_MONTHLY_PAYMENT_TYPE) {
    return USER_STATUS_PREMIUM_MONTHLY;
  }

  if (payment_type === PREMIUM_YEARLY_PAYMENT_TYPE) {
    return USER_STATUS_PREMIUM_YEARLY;
  }

  throw new Error('invalid_subscription_payment_type');
};

const preferredLocalesForSubdomain = (subdomain) => {
  if (subdomain === 'fr') {
    return ['fr'];
  }

  return ['en'];
};

const readChargedCurrency = (raw_currency) => {
  if (typeof raw_currency === 'string' && raw_currency.length > 0) {
    return raw_currency.toLowerCase();
  }

  return DEFAULT_CURRENCY.toLowerCase();
};

const finish_checkout_session_completed_processing = async ({
  user_id,
  collection_id,
  payment_type,
  amount_paid,
  stripe_checkout_session_id,
  currency,
}) => {
  if (!stripe_checkout_session_id) {
    throw new Error('missing_stripe_checkout_session_id');
  }

  if (payment_type === 'premium_access') {
    return;
  }

  const charged_currency = readChargedCurrency(currency);

  await executeSQLTransaction(async (client) => {
    await client.query(
      `INSERT INTO stripe_payments (payment_type, user_id, collection_id, price_in_cents, stripe_checkout_session_id, currency)
      VALUES ($1, $2, $3, $4, $5, $6)
      ON CONFLICT (stripe_checkout_session_id) DO NOTHING`,
      ['premium_notes', user_id, collection_id, amount_paid, stripe_checkout_session_id, charged_currency]
    );
  });
};

const completeSubscriptionCheckout = async ({
  session,
  stripe_client,
}) => {
  const user_id = session.client_reference_id;
  const payment_type = session.metadata?.payment_type ?? null;
  const stripe_customer_id = readStripeId(session.customer);
  const stripe_subscription_id = readStripeId(session.subscription);
  const status = subscriptionStatusForPaymentType(payment_type);

  if (!user_id || !stripe_customer_id || !stripe_subscription_id) {
    throw new Error('missing_subscription_checkout_reference');
  }

  const subscription = await stripe_client.subscriptions.retrieve(stripe_subscription_id);
  const premium_status_expiration_date = readSubscriptionPeriodEndIso(subscription);
  const charged_currency = readChargedCurrency(session.currency);

  const subdomain = await executeSQLTransaction(async (client) => {
    await client.query(
      `INSERT INTO stripe_subscriptions (
        user_id,
        stripe_customer_id,
        stripe_subscription_id,
        subscription_cancel_at_period_end,
        currency
      )
      VALUES ($1, $2, $3, false, $4)
      ON CONFLICT (user_id) DO UPDATE
      SET stripe_customer_id = EXCLUDED.stripe_customer_id,
          stripe_subscription_id = EXCLUDED.stripe_subscription_id,
          subscription_cancel_at_period_end = false,
          currency = EXCLUDED.currency`,
      [user_id, stripe_customer_id, stripe_subscription_id, charged_currency]
    );

    const updated = await client.query(
      `UPDATE users
      SET status = $1,
          premium_status_expiration_date = $2
      WHERE id = $3
      RETURNING subdomain`,
      [status, premium_status_expiration_date, user_id]
    );

    if (updated.rowCount === 0) {
      throw new Error('premium_user_not_found');
    }

    return updated.rows.at(0).subdomain;
  });

  await stripe_client.customers.update(stripe_customer_id, {
    preferred_locales: preferredLocalesForSubdomain(subdomain),
  });
};

const grantSubscriptionInvoicePaid = async ({
  invoice,
  stripe_client,
}) => {
  if (!SUBSCRIPTION_INVOICE_BILLING_REASONS.has(invoice?.billing_reason)) {
    return;
  }

  const stripe_subscription_id = readStripeId(invoice.parent?.subscription_details?.subscription)
    ?? readStripeId(invoice.subscription);

  if (!stripe_subscription_id || !invoice.id || typeof invoice.amount_paid !== 'number') {
    throw new Error('missing_subscription_invoice');
  }

  const subscription = await stripe_client.subscriptions.retrieve(stripe_subscription_id);
  const payment_type = subscription.metadata?.payment_type ?? null;
  const user_id = subscription.metadata?.user_id ?? null;
  const status = subscriptionStatusForPaymentType(payment_type);
  const premium_status_expiration_date = readSubscriptionPeriodEndIso(subscription);
  const charged_currency = readChargedCurrency(invoice.currency);

  if (!user_id) {
    throw new Error('missing_subscription_user_id');
  }

  await executeSQLTransaction(async (client) => {
    await client.query(
      `INSERT INTO stripe_payments (payment_type, user_id, price_in_cents, stripe_invoice_id, currency)
      VALUES ($1, $2, $3, $4, $5)
      ON CONFLICT (stripe_invoice_id) DO NOTHING`,
      [payment_type, user_id, invoice.amount_paid, invoice.id, charged_currency]
    );

    const updated = await client.query(
      `UPDATE users
      SET status = $1,
          premium_status_expiration_date = $2
      WHERE id = $3`,
      [status, premium_status_expiration_date, user_id]
    );

    if (updated.rowCount === 0) {
      throw new Error('premium_user_not_found');
    }
  });
};

export {
  finish_checkout_session_completed_processing,
};

export default defineEventHandler(async (event) => {
  try {
    const {
      STRIPE_ENDPOINT_SECRET,
      STRIPE_SECRET_API_KEY,
    } = useRuntimeConfig();

    if (!STRIPE_SECRET_API_KEY || !STRIPE_ENDPOINT_SECRET) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'stripe_not_configured',
      };
    }

    const raw_body = await readRawBody(event);
    const stripe_signature = getRequestHeader(event, 'stripe-signature');

    if (!stripe_signature || !raw_body) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'invalid_webhook_request',
      };
    }

    const stripe_client = new Stripe(STRIPE_SECRET_API_KEY);

    let stripe_event;

    try {
      stripe_event = stripe_client.webhooks.constructEvent(
        raw_body,
        stripe_signature,
        STRIPE_ENDPOINT_SECRET
      );
    } catch {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'invalid_stripe_signature',
      };
    }

    if (stripe_event.type === INVOICE_PAYMENT_FAILED) {
      setResponseStatus(event, HTTP_CODE_200_OK);

      return {
        received: true,
      };
    }

    if (stripe_event.type === INVOICE_PAID) {
      await grantSubscriptionInvoicePaid({
        invoice: stripe_event.data.object,
        stripe_client,
      });

      setResponseStatus(event, HTTP_CODE_200_OK);

      return {
        received: true,
      };
    }

    if (stripe_event.type === CUSTOMER_SUBSCRIPTION_UPDATED) {
      await applyEntitledSubscription(stripe_event.data.object);

      setResponseStatus(event, HTTP_CODE_200_OK);

      return {
        received: true,
      };
    }

    if (stripe_event.type === CUSTOMER_SUBSCRIPTION_DELETED) {
      await endSubscription(stripe_event.data.object);

      setResponseStatus(event, HTTP_CODE_200_OK);

      return {
        received: true,
      };
    }

    if (GRANT_CHECKOUT_SESSION_EVENT_TYPES.has(stripe_event.type)) {
      const session_from_event = stripe_event.data.object;
      const session = await stripe_client.checkout.sessions.retrieve(
        session_from_event.id);

      if (session.payment_status !== PAYMENT_STATUS_PAID) {
        if (stripe_event.type === CHECKOUT_SESSION_ASYNC_PAYMENT_SUCCEEDED) {
          setResponseStatus(event, HTTP_CODE_500_INTERNAL_SERVER_ERROR);

          return {
            error_message: 'checkout_session_not_paid',
          };
        }

        setResponseStatus(event, HTTP_CODE_200_OK);

        return {
          received: true,
        };
      }

      if (session.mode === 'subscription') {
        await completeSubscriptionCheckout({
          session,
          stripe_client,
        });
      } else {
        const collection_id = session.metadata?.collection_id ?? null;
        const payment_type = session.metadata?.payment_type ?? null;
        const amount_paid = session.amount_total;
        const user_id = session.client_reference_id;

        await finish_checkout_session_completed_processing({
          user_id,
          collection_id,
          payment_type,
          amount_paid,
          stripe_checkout_session_id: session.id,
          currency: session.currency,
        });
      }

      setResponseStatus(event, HTTP_CODE_200_OK);

      return {
        received: true,
      };
    }

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      received: true,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
