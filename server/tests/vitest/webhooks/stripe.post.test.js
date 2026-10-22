import { beforeAll, describe, expect, it, vi } from 'vitest';

import handler, {
  finish_checkout_session_completed_processing,
} from '../../../routes/webhooks/stripe.post.js';

import { DateTime } from 'luxon';

import {
  HTTP_CODE_200_OK,
} from '../../../helpers/http-status-codes.js';

import { createTestHandler } from '../create-test-handler.js';

import {
  executeSQLQuery,
} from '../../../database/query.js';

const {
  construct_event,
  retrieve_session,
  retrieve_subscription,
  update_customer,
} = vi.hoisted(() => ({
  construct_event: vi.fn(),
  retrieve_session: vi.fn(),
  retrieve_subscription: vi.fn(),
  update_customer: vi.fn(),
}));

vi.mock('stripe', () => ({
  default: class StripeMock {
    constructor() {
      this.webhooks = {
        constructEvent: construct_event,
      };
      this.checkout = {
        sessions: {
          retrieve: retrieve_session,
        },
      };
      this.customers = {
        update: update_customer,
      };
      this.subscriptions = {
        retrieve: retrieve_subscription,
      };
    }
  },
}));

const COLLECTION_USER_ID = '50000000-0000-4000-8000-0000000000e2';
const HANDLER_USER_ID = '50000000-0000-4000-8000-0000000000e3';
const UNPAID_USER_ID = '50000000-0000-4000-8000-0000000000e4';
const ASYNC_PAID_USER_ID = '50000000-0000-4000-8000-0000000000e5';
const ASYNC_FAILED_USER_ID = '50000000-0000-4000-8000-0000000000e6';
const COLLECTION_ID = '60000000-0000-4000-8000-0000000000e1';
const COLLECTION_SESSION_ID = 'cs_test_collection_once';
const HANDLER_SESSION_ID = 'cs_test_handler_premium';
const UNPAID_SESSION_ID = 'cs_test_unpaid_completed';
const ASYNC_PAID_SESSION_ID = 'cs_test_async_paid';
const ASYNC_FAILED_SESSION_ID = 'cs_test_async_failed';
const ORIGINAL_EXPIRATION = '2026-01-15T00:00:00.000Z';

const request = createTestHandler('post', '/webhooks/stripe', handler);

const insertUser = async (user_id, email, subdomain = 'www') => {
  await executeSQLQuery(
    'DELETE FROM stripe_subscriptions WHERE user_id = $1',
    [user_id]
  );
  await executeSQLQuery(
    'DELETE FROM stripe_payments WHERE user_id = $1',
    [user_id]
  );
  await executeSQLQuery(
    'DELETE FROM users WHERE id = $1',
    [user_id]
  );
  await executeSQLQuery(
    `INSERT INTO users (id, email, status, premium_status_expiration_date, subdomain)
    VALUES ($1, $2, 'free', $3, $4)`,
    [user_id, email, ORIGINAL_EXPIRATION, subdomain]
  );
};

const expirationIso = (premium_status_expiration_date) => DateTime
  .fromJSDate(premium_status_expiration_date)
  .toUTC()
  .toISO();

describe('checkout.session.completed grants', () => {
  beforeAll(async () => {
    await insertUser(COLLECTION_USER_ID, 'stripe-collection-once@example.com');
    await insertUser(HANDLER_USER_ID, 'stripe-handler-once@example.com');
    await insertUser(UNPAID_USER_ID, 'stripe-unpaid-completed@example.com');
    await insertUser(ASYNC_PAID_USER_ID, 'stripe-async-paid@example.com');
    await insertUser(ASYNC_FAILED_USER_ID, 'stripe-async-failed@example.com');
  });

  it('stores one collection purchase when the same Checkout session is delivered twice', async () => {
    const grant = {
      amount_paid: 1200,
      collection_id: COLLECTION_ID,
      payment_type: 'premium_notes',
      stripe_checkout_session_id: COLLECTION_SESSION_ID,
      user_id: COLLECTION_USER_ID,
    };

    await finish_checkout_session_completed_processing(grant);
    await finish_checkout_session_completed_processing(grant);

    const {
      rows: payment_list,
    } = await executeSQLQuery(
      `SELECT collection_id, currency, payment_type, price_in_cents, stripe_checkout_session_id
      FROM stripe_payments
      WHERE user_id = $1`,
      [COLLECTION_USER_ID]
    );

    expect(payment_list).toHaveLength(1);
    expect(payment_list.at(0)).toMatchObject({
      collection_id: COLLECTION_ID,
      currency: 'eur',
      payment_type: 'premium_notes',
      price_in_cents: 1200,
      stripe_checkout_session_id: COLLECTION_SESSION_ID,
    });

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT status, premium_status_expiration_date FROM users WHERE id = $1',
      [COLLECTION_USER_ID]
    );

    expect(user_list.at(0)?.status).toBe('free');
    expect(expirationIso(user_list.at(0)?.premium_status_expiration_date)).toBe(ORIGINAL_EXPIRATION);
  });

  it('stores the Checkout session id returned by Stripe', async () => {
    construct_event.mockReturnValue({
      data: {
        object: {
          id: HANDLER_SESSION_ID,
        },
      },
      type: 'checkout.session.completed',
    });
    retrieve_session.mockResolvedValue({
      amount_total: 4900,
      client_reference_id: HANDLER_USER_ID,
      currency: 'usd',
      id: HANDLER_SESSION_ID,
      metadata: {
        collection_id: COLLECTION_ID,
        payment_type: 'collection',
      },
      mode: 'payment',
      payment_status: 'paid',
    });

    const response = await request(new Request('http://localhost/webhooks/stripe', {
      body: '{}',
      headers: {
        'stripe-signature': 'test-signature',
      },
      method: 'POST',
    }));

    expect(response.status).toBe(HTTP_CODE_200_OK);
    expect(await response.json()).toEqual({
      received: true,
    });

    const {
      rows: payment_list,
    } = await executeSQLQuery(
      `SELECT collection_id, currency, payment_type, stripe_checkout_session_id
      FROM stripe_payments
      WHERE user_id = $1`,
      [HANDLER_USER_ID]
    );

    expect(payment_list).toHaveLength(1);
    expect(payment_list.at(0)).toMatchObject({
      collection_id: COLLECTION_ID,
      currency: 'usd',
      payment_type: 'premium_notes',
      stripe_checkout_session_id: HANDLER_SESSION_ID,
    });

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT status, premium_status_expiration_date FROM users WHERE id = $1',
      [HANDLER_USER_ID]
    );

    expect(user_list.at(0)?.status).toBe('free');
    expect(expirationIso(user_list.at(0)?.premium_status_expiration_date)).toBe(ORIGINAL_EXPIRATION);
  });

  it('does not grant when checkout.session.completed is still unpaid', async () => {
    construct_event.mockReturnValue({
      data: {
        object: {
          id: UNPAID_SESSION_ID,
        },
      },
      type: 'checkout.session.completed',
    });
    retrieve_session.mockResolvedValue({
      amount_total: 4900,
      client_reference_id: UNPAID_USER_ID,
      id: UNPAID_SESSION_ID,
      metadata: {
        collection_id: COLLECTION_ID,
        payment_type: 'collection',
      },
      mode: 'payment',
      payment_status: 'unpaid',
    });

    const response = await request(new Request('http://localhost/webhooks/stripe', {
      body: '{}',
      headers: {
        'stripe-signature': 'test-signature',
      },
      method: 'POST',
    }));

    expect(response.status).toBe(HTTP_CODE_200_OK);
    expect(await response.json()).toEqual({
      received: true,
    });

    const {
      rows: payment_list,
    } = await executeSQLQuery(
      'SELECT id FROM stripe_payments WHERE user_id = $1',
      [UNPAID_USER_ID]
    );

    expect(payment_list).toHaveLength(0);

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT status, premium_status_expiration_date FROM users WHERE id = $1',
      [UNPAID_USER_ID]
    );

    expect(user_list.at(0)?.status).toBe('free');
    expect(expirationIso(user_list.at(0)?.premium_status_expiration_date)).toBe(ORIGINAL_EXPIRATION);
  });

  it('records a collection purchase when async_payment_succeeded reports a paid session', async () => {
    construct_event.mockReturnValue({
      data: {
        object: {
          id: ASYNC_PAID_SESSION_ID,
        },
      },
      type: 'checkout.session.async_payment_succeeded',
    });
    retrieve_session.mockResolvedValue({
      amount_total: 4900,
      client_reference_id: ASYNC_PAID_USER_ID,
      currency: 'usd',
      id: ASYNC_PAID_SESSION_ID,
      metadata: {
        collection_id: COLLECTION_ID,
        payment_type: 'collection',
      },
      mode: 'payment',
      payment_status: 'paid',
    });

    const response = await request(new Request('http://localhost/webhooks/stripe', {
      body: '{}',
      headers: {
        'stripe-signature': 'test-signature',
      },
      method: 'POST',
    }));

    expect(response.status).toBe(HTTP_CODE_200_OK);
    expect(await response.json()).toEqual({
      received: true,
    });

    const {
      rows: payment_list,
    } = await executeSQLQuery(
      `SELECT collection_id, payment_type, price_in_cents, stripe_checkout_session_id
      FROM stripe_payments
      WHERE user_id = $1`,
      [ASYNC_PAID_USER_ID]
    );

    expect(payment_list).toHaveLength(1);
    expect(payment_list.at(0)).toMatchObject({
      collection_id: COLLECTION_ID,
      payment_type: 'premium_notes',
      price_in_cents: 4900,
      stripe_checkout_session_id: ASYNC_PAID_SESSION_ID,
    });

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT status, premium_status_expiration_date FROM users WHERE id = $1',
      [ASYNC_PAID_USER_ID]
    );

    expect(user_list.at(0)?.status).toBe('free');
    expect(expirationIso(user_list.at(0)?.premium_status_expiration_date)).toBe(ORIGINAL_EXPIRATION);
  });

  it('does not grant when async_payment_failed is delivered', async () => {
    retrieve_session.mockClear();
    construct_event.mockReturnValue({
      data: {
        object: {
          id: ASYNC_FAILED_SESSION_ID,
        },
      },
      type: 'checkout.session.async_payment_failed',
    });

    const response = await request(new Request('http://localhost/webhooks/stripe', {
      body: '{}',
      headers: {
        'stripe-signature': 'test-signature',
      },
      method: 'POST',
    }));

    expect(response.status).toBe(HTTP_CODE_200_OK);
    expect(await response.json()).toEqual({
      received: true,
    });
    expect(retrieve_session).not.toHaveBeenCalled();

    const {
      rows: payment_list,
    } = await executeSQLQuery(
      'SELECT id FROM stripe_payments WHERE stripe_checkout_session_id = $1',
      [ASYNC_FAILED_SESSION_ID]
    );

    expect(payment_list).toHaveLength(0);

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT status FROM users WHERE id = $1',
      [ASYNC_FAILED_USER_ID]
    );

    expect(user_list.at(0)?.status).toBe('free');
  });
});

const SUBSCRIPTION_USER_ID = '50000000-0000-4000-8000-0000000000f1';
const INVOICE_USER_ID = '50000000-0000-4000-8000-0000000000f2';
const UPDATED_USER_ID = '50000000-0000-4000-8000-0000000000f3';
const DELETED_USER_ID = '50000000-0000-4000-8000-0000000000f4';
const FAILED_PAYMENT_USER_ID = '50000000-0000-4000-8000-0000000000f5';
const CANCEL_AT_USER_ID = '50000000-0000-4000-8000-0000000000f6';
const PLAN_CHANGE_USER_ID = '50000000-0000-4000-8000-0000000000f7';
const SUBSCRIPTION_UPDATE_INVOICE_USER_ID = '50000000-0000-4000-8000-0000000000f8';
const FIRST_PERIOD_END_SECONDS = 1800000000;
const SECOND_PERIOD_END_SECONDS = 1830000000;
const KEPT_PERIOD_END_ISO = '2027-06-01T00:00:00.000Z';
const KEPT_PERIOD_END_SECONDS = DateTime.fromISO(KEPT_PERIOD_END_ISO, {
  zone: 'utc',
}).toUnixInteger();

const postStripeEvent = (stripe_event) => {
  construct_event.mockReturnValue(stripe_event);

  return request(new Request('http://localhost/webhooks/stripe', {
    body: '{}',
    headers: {
      'stripe-signature': 'test-signature',
    },
    method: 'POST',
  }));
};

const expirationSeconds = (premium_status_expiration_date) => DateTime
  .fromJSDate(premium_status_expiration_date)
  .toUTC()
  .toSeconds();

describe('subscription webhooks', () => {
  beforeAll(async () => {
    await insertUser(SUBSCRIPTION_USER_ID, 'stripe-subscription@example.com', 'fr');
    await insertUser(INVOICE_USER_ID, 'stripe-invoice@example.com', 'www');
    await insertUser(UPDATED_USER_ID, 'stripe-updated@example.com', 'www');
    await insertUser(DELETED_USER_ID, 'stripe-deleted@example.com', 'www');
    await insertUser(FAILED_PAYMENT_USER_ID, 'stripe-payment-failed@example.com', 'www');
    await insertUser(CANCEL_AT_USER_ID, 'stripe-cancel-at@example.com', 'www');
    await insertUser(PLAN_CHANGE_USER_ID, 'stripe-plan-change@example.com', 'www');
    await insertUser(SUBSCRIPTION_UPDATE_INVOICE_USER_ID, 'stripe-subscription-update@example.com', 'www');
  });

  it('stores the subscription without a checkout payment when the session is delivered twice', async () => {
    retrieve_subscription.mockResolvedValue({
      id: 'sub_year_fr',
      items: {
        data: [
          {
            current_period_end: FIRST_PERIOD_END_SECONDS,
          },
        ],
      },
      metadata: {
        billing_interval: 'year',
        payment_type: 'premium_yearly',
        user_id: SUBSCRIPTION_USER_ID,
      },
    });
    update_customer.mockResolvedValue({});

    const stripe_event = {
      data: {
        object: {
          id: 'cs_test_subscription_year',
        },
      },
      type: 'checkout.session.completed',
    };
    retrieve_session.mockResolvedValue({
      client_reference_id: SUBSCRIPTION_USER_ID,
      customer: 'cus_year_fr',
      id: 'cs_test_subscription_year',
      metadata: {
        billing_interval: 'year',
        payment_type: 'premium_yearly',
        user_id: SUBSCRIPTION_USER_ID,
      },
      currency: 'eur',
      mode: 'subscription',
      payment_status: 'paid',
      subscription: 'sub_year_fr',
    });

    const first_response = await postStripeEvent(stripe_event);
    const second_response = await postStripeEvent(stripe_event);

    expect(first_response.status).toBe(HTTP_CODE_200_OK);
    expect(second_response.status).toBe(HTTP_CODE_200_OK);
    expect(update_customer).toHaveBeenCalledWith('cus_year_fr', {
      preferred_locales: ['fr'],
    });

    const {
      rows: subscription_list,
    } = await executeSQLQuery(
      `SELECT currency, stripe_customer_id, stripe_subscription_id, subscription_cancel_at_period_end
      FROM stripe_subscriptions
      WHERE user_id = $1`,
      [SUBSCRIPTION_USER_ID]
    );

    expect(subscription_list).toHaveLength(1);
    expect(subscription_list.at(0)).toMatchObject({
      currency: 'eur',
      stripe_customer_id: 'cus_year_fr',
      stripe_subscription_id: 'sub_year_fr',
      subscription_cancel_at_period_end: false,
    });

    const {
      rows: payment_list,
    } = await executeSQLQuery(
      'SELECT id FROM stripe_payments WHERE user_id = $1',
      [SUBSCRIPTION_USER_ID]
    );

    expect(payment_list).toHaveLength(0);

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT status, premium_status_expiration_date FROM users WHERE id = $1',
      [SUBSCRIPTION_USER_ID]
    );

    expect(user_list.at(0)?.status).toBe('premium_yearly');
    expect(expirationSeconds(user_list.at(0)?.premium_status_expiration_date)).toBe(FIRST_PERIOD_END_SECONDS);
  });

  it('records one invoice payment and refreshes the period end when the same invoice is delivered twice', async () => {
    const invoice_event = {
      data: {
        object: {
          amount_paid: 6000,
          billing_reason: 'subscription_cycle',
          currency: 'usd',
          id: 'in_year_cycle',
          parent: {
            subscription_details: {
              subscription: 'sub_invoice',
            },
          },
        },
      },
      type: 'invoice.paid',
    };

    retrieve_subscription.mockResolvedValue({
      id: 'sub_invoice',
      items: {
        data: [
          {
            current_period_end: FIRST_PERIOD_END_SECONDS,
          },
        ],
      },
      metadata: {
        billing_interval: 'year',
        payment_type: 'premium_yearly',
        user_id: INVOICE_USER_ID,
      },
    });

    const first_response = await postStripeEvent(invoice_event);

    expect(first_response.status).toBe(HTTP_CODE_200_OK);

    retrieve_subscription.mockResolvedValue({
      id: 'sub_invoice',
      items: {
        data: [
          {
            current_period_end: SECOND_PERIOD_END_SECONDS,
          },
        ],
      },
      metadata: {
        billing_interval: 'year',
        payment_type: 'premium_yearly',
        user_id: INVOICE_USER_ID,
      },
    });

    const second_response = await postStripeEvent({
      ...invoice_event,
      data: {
        object: {
          ...invoice_event.data.object,
          billing_reason: 'subscription_create',
        },
      },
    });

    expect(second_response.status).toBe(HTTP_CODE_200_OK);

    const {
      rows: payment_list,
    } = await executeSQLQuery(
      `SELECT currency, payment_type, price_in_cents, stripe_invoice_id
      FROM stripe_payments
      WHERE user_id = $1`,
      [INVOICE_USER_ID]
    );

    expect(payment_list).toHaveLength(1);
    expect(payment_list.at(0)).toMatchObject({
      currency: 'usd',
      payment_type: 'premium_yearly',
      price_in_cents: 6000,
      stripe_invoice_id: 'in_year_cycle',
    });

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT status, premium_status_expiration_date FROM users WHERE id = $1',
      [INVOICE_USER_ID]
    );

    expect(user_list.at(0)?.status).toBe('premium_yearly');
    expect(expirationSeconds(user_list.at(0)?.premium_status_expiration_date)).toBe(SECOND_PERIOD_END_SECONDS);
  });

  it('keeps premium access when the subscription is set to cancel at period end', async () => {
    await executeSQLQuery(
      `UPDATE users
      SET status = 'premium_monthly',
          premium_status_expiration_date = $2
      WHERE id = $1`,
      [UPDATED_USER_ID, KEPT_PERIOD_END_ISO]
    );
    await executeSQLQuery(
      'DELETE FROM stripe_subscriptions WHERE user_id = $1',
      [UPDATED_USER_ID]
    );
    await executeSQLQuery(
      `INSERT INTO stripe_subscriptions (
        user_id,
        stripe_customer_id,
        stripe_subscription_id,
        subscription_cancel_at_period_end
      )
      VALUES ($1, 'cus_updated', 'sub_updated', false)`,
      [UPDATED_USER_ID]
    );

    const response = await postStripeEvent({
      data: {
        object: {
          cancel_at_period_end: true,
          id: 'sub_updated',
          items: {
            data: [
              {
                current_period_end: KEPT_PERIOD_END_SECONDS,
              },
            ],
          },
          status: 'active',
        },
      },
      type: 'customer.subscription.updated',
    });

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT status, premium_status_expiration_date FROM users WHERE id = $1',
      [UPDATED_USER_ID]
    );

    expect(user_list.at(0)?.status).toBe('premium_monthly');
    expect(expirationIso(user_list.at(0)?.premium_status_expiration_date)).toBe(KEPT_PERIOD_END_ISO);

    const {
      rows: subscription_list,
    } = await executeSQLQuery(
      'SELECT subscription_cancel_at_period_end FROM stripe_subscriptions WHERE user_id = $1',
      [UPDATED_USER_ID]
    );

    expect(subscription_list.at(0)?.subscription_cancel_at_period_end).toBe(true);
  });

  it('keeps premium access when a scheduled cancellation is cleared', async () => {
    await executeSQLQuery(
      `UPDATE users
      SET status = 'premium_monthly',
          premium_status_expiration_date = $2
      WHERE id = $1`,
      [UPDATED_USER_ID, KEPT_PERIOD_END_ISO]
    );
    await executeSQLQuery(
      'DELETE FROM stripe_subscriptions WHERE user_id = $1',
      [UPDATED_USER_ID]
    );
    await executeSQLQuery(
      `INSERT INTO stripe_subscriptions (
        user_id,
        stripe_customer_id,
        stripe_subscription_id,
        subscription_cancel_at_period_end
      )
      VALUES ($1, 'cus_updated', 'sub_updated', true)`,
      [UPDATED_USER_ID]
    );

    const response = await postStripeEvent({
      data: {
        object: {
          cancel_at: null,
          cancel_at_period_end: false,
          id: 'sub_updated',
          items: {
            data: [
              {
                current_period_end: KEPT_PERIOD_END_SECONDS,
              },
            ],
          },
          status: 'active',
        },
      },
      type: 'customer.subscription.updated',
    });

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT status, premium_status_expiration_date FROM users WHERE id = $1',
      [UPDATED_USER_ID]
    );

    expect(user_list.at(0)?.status).toBe('premium_monthly');
    expect(expirationIso(user_list.at(0)?.premium_status_expiration_date)).toBe(KEPT_PERIOD_END_ISO);

    const {
      rows: subscription_list,
    } = await executeSQLQuery(
      'SELECT subscription_cancel_at_period_end FROM stripe_subscriptions WHERE user_id = $1',
      [UPDATED_USER_ID]
    );

    expect(subscription_list.at(0)?.subscription_cancel_at_period_end).toBe(false);
  });

  it('sets the user to pending and deletes the subscription row when the subscription is deleted', async () => {
    await executeSQLQuery(
      `UPDATE users
      SET status = 'premium_yearly'
      WHERE id = $1`,
      [DELETED_USER_ID]
    );
    await executeSQLQuery(
      `INSERT INTO stripe_subscriptions (
        user_id,
        stripe_customer_id,
        stripe_subscription_id
      )
      VALUES ($1, 'cus_deleted', 'sub_deleted')`,
      [DELETED_USER_ID]
    );

    const response = await postStripeEvent({
      data: {
        object: {
          id: 'sub_deleted',
        },
      },
      type: 'customer.subscription.deleted',
    });

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT status FROM users WHERE id = $1',
      [DELETED_USER_ID]
    );

    expect(user_list.at(0)?.status).toBe('pending');

    const {
      rows: subscription_list,
    } = await executeSQLQuery(
      'SELECT id FROM stripe_subscriptions WHERE user_id = $1',
      [DELETED_USER_ID]
    );

    expect(subscription_list).toHaveLength(0);
  });

  it('does not change access when an invoice payment fails', async () => {
    await executeSQLQuery(
      `UPDATE users
      SET status = 'premium_yearly',
          premium_status_expiration_date = $2
      WHERE id = $1`,
      [FAILED_PAYMENT_USER_ID, ORIGINAL_EXPIRATION]
    );
    await executeSQLQuery(
      `INSERT INTO stripe_subscriptions (
        user_id,
        stripe_customer_id,
        stripe_subscription_id
      )
      VALUES ($1, 'cus_failed', 'sub_failed')`,
      [FAILED_PAYMENT_USER_ID]
    );

    const response = await postStripeEvent({
      data: {
        object: {
          id: 'in_failed',
        },
      },
      type: 'invoice.payment_failed',
    });

    expect(response.status).toBe(HTTP_CODE_200_OK);
    expect(await response.json()).toEqual({
      received: true,
    });

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT status, premium_status_expiration_date FROM users WHERE id = $1',
      [FAILED_PAYMENT_USER_ID]
    );

    expect(user_list.at(0)?.status).toBe('premium_yearly');
    expect(expirationIso(user_list.at(0)?.premium_status_expiration_date)).toBe(ORIGINAL_EXPIRATION);

    const {
      rows: payment_list,
    } = await executeSQLQuery(
      'SELECT id FROM stripe_payments WHERE user_id = $1',
      [FAILED_PAYMENT_USER_ID]
    );

    expect(payment_list).toHaveLength(0);

    const {
      rows: subscription_list,
    } = await executeSQLQuery(
      'SELECT subscription_cancel_at_period_end FROM stripe_subscriptions WHERE user_id = $1',
      [FAILED_PAYMENT_USER_ID]
    );

    expect(subscription_list).toHaveLength(1);
    expect(subscription_list.at(0)?.subscription_cancel_at_period_end).toBe(false);
  });

  it('sets the local cancel flag when cancel_at is set and cancel_at_period_end is false', async () => {
    await executeSQLQuery(
      `UPDATE users
      SET status = 'premium_monthly',
          premium_status_expiration_date = $2
      WHERE id = $1`,
      [CANCEL_AT_USER_ID, ORIGINAL_EXPIRATION]
    );
    await executeSQLQuery(
      'DELETE FROM stripe_subscriptions WHERE user_id = $1',
      [CANCEL_AT_USER_ID]
    );
    await executeSQLQuery(
      `INSERT INTO stripe_subscriptions (
        user_id,
        stripe_customer_id,
        stripe_subscription_id,
        subscription_cancel_at_period_end
      )
      VALUES ($1, 'cus_cancel_at', 'sub_cancel_at', false)`,
      [CANCEL_AT_USER_ID]
    );

    const response = await postStripeEvent({
      data: {
        object: {
          cancel_at: KEPT_PERIOD_END_SECONDS,
          cancel_at_period_end: false,
          id: 'sub_cancel_at',
          items: {
            data: [
              {
                current_period_end: KEPT_PERIOD_END_SECONDS,
              },
            ],
          },
          status: 'active',
        },
      },
      type: 'customer.subscription.updated',
    });

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT status, premium_status_expiration_date FROM users WHERE id = $1',
      [CANCEL_AT_USER_ID]
    );

    expect(user_list.at(0)?.status).toBe('premium_monthly');
    expect(expirationIso(user_list.at(0)?.premium_status_expiration_date)).toBe(KEPT_PERIOD_END_ISO);

    const {
      rows: subscription_list,
    } = await executeSQLQuery(
      'SELECT subscription_cancel_at_period_end FROM stripe_subscriptions WHERE user_id = $1',
      [CANCEL_AT_USER_ID]
    );

    expect(subscription_list.at(0)?.subscription_cancel_at_period_end).toBe(true);
  });

  it('clears the local cancel flag when cancel_at and cancel_at_period_end are both clear', async () => {
    await executeSQLQuery(
      `UPDATE users
      SET status = 'premium_monthly',
          premium_status_expiration_date = $2
      WHERE id = $1`,
      [CANCEL_AT_USER_ID, KEPT_PERIOD_END_ISO]
    );
    await executeSQLQuery(
      'DELETE FROM stripe_subscriptions WHERE user_id = $1',
      [CANCEL_AT_USER_ID]
    );
    await executeSQLQuery(
      `INSERT INTO stripe_subscriptions (
        user_id,
        stripe_customer_id,
        stripe_subscription_id,
        subscription_cancel_at_period_end
      )
      VALUES ($1, 'cus_cancel_at', 'sub_cancel_at', true)`,
      [CANCEL_AT_USER_ID]
    );

    const response = await postStripeEvent({
      data: {
        object: {
          cancel_at: null,
          cancel_at_period_end: false,
          id: 'sub_cancel_at',
          items: {
            data: [
              {
                current_period_end: KEPT_PERIOD_END_SECONDS,
              },
            ],
          },
          status: 'active',
        },
      },
      type: 'customer.subscription.updated',
    });

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT status FROM users WHERE id = $1',
      [CANCEL_AT_USER_ID]
    );

    expect(user_list.at(0)?.status).toBe('premium_monthly');

    const {
      rows: subscription_list,
    } = await executeSQLQuery(
      'SELECT subscription_cancel_at_period_end FROM stripe_subscriptions WHERE user_id = $1',
      [CANCEL_AT_USER_ID]
    );

    expect(subscription_list.at(0)?.subscription_cancel_at_period_end).toBe(false);
  });

  it('updates the premium interval and expiration when the subscription price changes', async () => {
    await executeSQLQuery(
      `UPDATE users
      SET status = 'premium_monthly',
          premium_status_expiration_date = $2
      WHERE id = $1`,
      [PLAN_CHANGE_USER_ID, ORIGINAL_EXPIRATION]
    );
    await executeSQLQuery(
      'DELETE FROM stripe_subscriptions WHERE user_id = $1',
      [PLAN_CHANGE_USER_ID]
    );
    await executeSQLQuery(
      `INSERT INTO stripe_subscriptions (
        user_id,
        stripe_customer_id,
        stripe_subscription_id
      )
      VALUES ($1, 'cus_plan', 'sub_plan')`,
      [PLAN_CHANGE_USER_ID]
    );

    const response = await postStripeEvent({
      data: {
        object: {
          cancel_at: null,
          cancel_at_period_end: false,
          id: 'sub_plan',
          items: {
            data: [
              {
                current_period_end: SECOND_PERIOD_END_SECONDS,
                price: {
                  id: 'price_year_usd',
                  recurring: {
                    interval: 'year',
                  },
                },
              },
            ],
          },
          status: 'active',
        },
      },
      type: 'customer.subscription.updated',
    });

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT status, premium_status_expiration_date FROM users WHERE id = $1',
      [PLAN_CHANGE_USER_ID]
    );

    expect(user_list.at(0)?.status).toBe('premium_yearly');
    expect(expirationSeconds(user_list.at(0)?.premium_status_expiration_date)).toBe(SECOND_PERIOD_END_SECONDS);
  });

  it('uses the price interval when the price id is not one of the configured premium prices', async () => {
    await executeSQLQuery(
      `UPDATE users
      SET status = 'premium_yearly',
          premium_status_expiration_date = $2
      WHERE id = $1`,
      [PLAN_CHANGE_USER_ID, ORIGINAL_EXPIRATION]
    );
    await executeSQLQuery(
      'DELETE FROM stripe_subscriptions WHERE user_id = $1',
      [PLAN_CHANGE_USER_ID]
    );
    await executeSQLQuery(
      `INSERT INTO stripe_subscriptions (
        user_id,
        stripe_customer_id,
        stripe_subscription_id
      )
      VALUES ($1, 'cus_plan', 'sub_plan')`,
      [PLAN_CHANGE_USER_ID]
    );

    const response = await postStripeEvent({
      data: {
        object: {
          cancel_at: null,
          cancel_at_period_end: false,
          id: 'sub_plan',
          items: {
            data: [
              {
                current_period_end: FIRST_PERIOD_END_SECONDS,
                price: {
                  id: 'price_unknown',
                  recurring: {
                    interval: 'month',
                  },
                },
              },
            ],
          },
          status: 'trialing',
        },
      },
      type: 'customer.subscription.updated',
    });

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT status, premium_status_expiration_date FROM users WHERE id = $1',
      [PLAN_CHANGE_USER_ID]
    );

    expect(user_list.at(0)?.status).toBe('premium_monthly');
    expect(expirationSeconds(user_list.at(0)?.premium_status_expiration_date)).toBe(FIRST_PERIOD_END_SECONDS);
  });

  it('leaves the premium status unchanged when the price is not a monthly or yearly plan', async () => {
    await executeSQLQuery(
      `UPDATE users
      SET status = 'premium_yearly',
          premium_status_expiration_date = $2
      WHERE id = $1`,
      [PLAN_CHANGE_USER_ID, ORIGINAL_EXPIRATION]
    );
    await executeSQLQuery(
      'DELETE FROM stripe_subscriptions WHERE user_id = $1',
      [PLAN_CHANGE_USER_ID]
    );
    await executeSQLQuery(
      `INSERT INTO stripe_subscriptions (
        user_id,
        stripe_customer_id,
        stripe_subscription_id
      )
      VALUES ($1, 'cus_plan', 'sub_plan')`,
      [PLAN_CHANGE_USER_ID]
    );

    const response = await postStripeEvent({
      data: {
        object: {
          cancel_at_period_end: false,
          id: 'sub_plan',
          items: {
            data: [
              {
                current_period_end: SECOND_PERIOD_END_SECONDS,
                price: {
                  id: 'price_unknown',
                  recurring: {
                    interval: 'week',
                  },
                },
              },
            ],
          },
          status: 'past_due',
        },
      },
      type: 'customer.subscription.updated',
    });

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT status, premium_status_expiration_date FROM users WHERE id = $1',
      [PLAN_CHANGE_USER_ID]
    );

    expect(user_list.at(0)?.status).toBe('premium_yearly');
    expect(expirationSeconds(user_list.at(0)?.premium_status_expiration_date)).toBe(SECOND_PERIOD_END_SECONDS);
  });

  it('records a payment when an invoice is paid for a subscription update', async () => {
    retrieve_subscription.mockResolvedValue({
      id: 'sub_update_invoice',
      items: {
        data: [
          {
            current_period_end: SECOND_PERIOD_END_SECONDS,
          },
        ],
      },
      metadata: {
        billing_interval: 'month',
        payment_type: 'premium_monthly',
        user_id: SUBSCRIPTION_UPDATE_INVOICE_USER_ID,
      },
    });

    const response = await postStripeEvent({
      data: {
        object: {
          amount_paid: 1500,
          billing_reason: 'subscription_update',
          currency: 'eur',
          id: 'in_subscription_update',
          parent: {
            subscription_details: {
              subscription: 'sub_update_invoice',
            },
          },
        },
      },
      type: 'invoice.paid',
    });

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const {
      rows: payment_list,
    } = await executeSQLQuery(
      `SELECT currency, payment_type, price_in_cents, stripe_invoice_id
      FROM stripe_payments
      WHERE user_id = $1`,
      [SUBSCRIPTION_UPDATE_INVOICE_USER_ID]
    );

    expect(payment_list).toHaveLength(1);
    expect(payment_list.at(0)).toMatchObject({
      currency: 'eur',
      payment_type: 'premium_monthly',
      price_in_cents: 1500,
      stripe_invoice_id: 'in_subscription_update',
    });

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT status, premium_status_expiration_date FROM users WHERE id = $1',
      [SUBSCRIPTION_UPDATE_INVOICE_USER_ID]
    );

    expect(user_list.at(0)?.status).toBe('premium_monthly');
    expect(expirationSeconds(user_list.at(0)?.premium_status_expiration_date)).toBe(SECOND_PERIOD_END_SECONDS);
  });
});
