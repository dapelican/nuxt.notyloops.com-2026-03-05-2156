'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_500_INTERNAL_SERVER_ERROR,
} from '../../../helpers/http-status-codes.js';

import { beforeAll, describe, expect, it, vi } from 'vitest';

import handler, {
  finish_checkout_session_completed_processing,
} from '../../../routes/webhooks/stripe.post.js';

import { DateTime } from 'luxon';

import {
  PREMIUM_PAYMENT_TYPE,
} from '../../../helpers/constants.js';

import { createTestHandler } from '../create-test-handler.js';

import {
  executeSQLQuery,
} from '../../../database/query.js';

const {
  construct_event,
  retrieve_session,
} = vi.hoisted(() => ({
  construct_event: vi.fn(),
  retrieve_session: vi.fn(),
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
    }
  },
}));

const PREMIUM_USER_ID = '50000000-0000-4000-8000-0000000000e1';
const COLLECTION_USER_ID = '50000000-0000-4000-8000-0000000000e2';
const HANDLER_USER_ID = '50000000-0000-4000-8000-0000000000e3';
const UNPAID_USER_ID = '50000000-0000-4000-8000-0000000000e4';
const ASYNC_PAID_USER_ID = '50000000-0000-4000-8000-0000000000e5';
const ASYNC_FAILED_USER_ID = '50000000-0000-4000-8000-0000000000e6';
const COLLECTION_ID = '60000000-0000-4000-8000-0000000000e1';
const PREMIUM_SESSION_ID = 'cs_test_premium_once';
const COLLECTION_SESSION_ID = 'cs_test_collection_once';
const HANDLER_SESSION_ID = 'cs_test_handler_premium';
const UNPAID_SESSION_ID = 'cs_test_unpaid_completed';
const ASYNC_PAID_SESSION_ID = 'cs_test_async_paid';
const ASYNC_FAILED_SESSION_ID = 'cs_test_async_failed';
const ORIGINAL_EXPIRATION = '2026-01-15T00:00:00.000Z';
const EXTENDED_EXPIRATION = '2027-01-15T00:00:00.000Z';

const request = createTestHandler('post', '/webhooks/stripe', handler);

const insertUser = async (user_id, email) => {
  await executeSQLQuery(
    'DELETE FROM payments WHERE user_id = $1',
    [user_id]
  );
  await executeSQLQuery(
    'DELETE FROM users WHERE id = $1',
    [user_id]
  );
  await executeSQLQuery(
    `INSERT INTO users (id, email, status, premium_status_expiration_date, subdomain)
    VALUES ($1, $2, 'free', $3, 'www')`,
    [user_id, email, ORIGINAL_EXPIRATION]
  );
};

const expirationIso = (premium_status_expiration_date) => DateTime
  .fromJSDate(premium_status_expiration_date)
  .toUTC()
  .toISO();

describe('checkout.session.completed grants', () => {
  beforeAll(async () => {
    await insertUser(PREMIUM_USER_ID, 'stripe-premium-once@example.com');
    await insertUser(COLLECTION_USER_ID, 'stripe-collection-once@example.com');
    await insertUser(HANDLER_USER_ID, 'stripe-handler-once@example.com');
    await insertUser(UNPAID_USER_ID, 'stripe-unpaid-completed@example.com');
    await insertUser(ASYNC_PAID_USER_ID, 'stripe-async-paid@example.com');
    await insertUser(ASYNC_FAILED_USER_ID, 'stripe-async-failed@example.com');
  });

  it('extends premium once when the same Checkout session is delivered twice', async () => {
    const grant = {
      amount_paid: 4900,
      collection_id: null,
      payment_type: PREMIUM_PAYMENT_TYPE,
      stripe_checkout_session_id: PREMIUM_SESSION_ID,
      user_id: PREMIUM_USER_ID,
    };

    await finish_checkout_session_completed_processing(grant);
    await finish_checkout_session_completed_processing(grant);

    const {
      rows: payment_list,
    } = await executeSQLQuery(
      `SELECT payment_type, price_in_cents, stripe_checkout_session_id
      FROM payments
      WHERE user_id = $1`,
      [PREMIUM_USER_ID]
    );

    expect(payment_list).toHaveLength(1);
    expect(payment_list.at(0)).toMatchObject({
      payment_type: PREMIUM_PAYMENT_TYPE,
      price_in_cents: 4900,
      stripe_checkout_session_id: PREMIUM_SESSION_ID,
    });

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT status, premium_status_expiration_date FROM users WHERE id = $1',
      [PREMIUM_USER_ID]
    );

    expect(user_list.at(0)?.status).toBe('premium');
    expect(expirationIso(user_list.at(0)?.premium_status_expiration_date)).toBe(EXTENDED_EXPIRATION);
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
      `SELECT collection_id, payment_type, price_in_cents, stripe_checkout_session_id
      FROM payments
      WHERE user_id = $1`,
      [COLLECTION_USER_ID]
    );

    expect(payment_list).toHaveLength(1);
    expect(payment_list.at(0)).toMatchObject({
      collection_id: COLLECTION_ID,
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

  it('does not keep the session id when the premium user is missing', async () => {
    const missing_user_id = '50000000-0000-4000-8000-0000000000e9';

    await expect(finish_checkout_session_completed_processing({
      amount_paid: 4900,
      collection_id: null,
      payment_type: PREMIUM_PAYMENT_TYPE,
      stripe_checkout_session_id: 'cs_test_missing_user',
      user_id: missing_user_id,
    })).rejects.toThrow('premium_user_not_found');

    const {
      rows,
    } = await executeSQLQuery(
      'SELECT id FROM payments WHERE stripe_checkout_session_id = $1',
      ['cs_test_missing_user']
    );

    expect(rows).toHaveLength(0);
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
      id: HANDLER_SESSION_ID,
      metadata: {
        payment_type: PREMIUM_PAYMENT_TYPE,
      },
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
      'SELECT stripe_checkout_session_id FROM payments WHERE user_id = $1',
      [HANDLER_USER_ID]
    );

    expect(payment_list).toHaveLength(1);
    expect(payment_list.at(0)?.stripe_checkout_session_id).toBe(HANDLER_SESSION_ID);

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT status, premium_status_expiration_date FROM users WHERE id = $1',
      [HANDLER_USER_ID]
    );

    expect(user_list.at(0)?.status).toBe('premium');
    expect(expirationIso(user_list.at(0)?.premium_status_expiration_date)).toBe(EXTENDED_EXPIRATION);
  });

  it('returns 500 when the premium user is missing so Stripe retries', async () => {
    const missing_user_id = '50000000-0000-4000-8000-0000000000ea';
    const missing_session_id = 'cs_test_handler_missing_user';

    construct_event.mockReturnValue({
      data: {
        object: {
          id: missing_session_id,
        },
      },
      type: 'checkout.session.completed',
    });
    retrieve_session.mockResolvedValue({
      amount_total: 4900,
      client_reference_id: missing_user_id,
      id: missing_session_id,
      metadata: {
        payment_type: PREMIUM_PAYMENT_TYPE,
      },
      payment_status: 'paid',
    });

    const response = await request(new Request('http://localhost/webhooks/stripe', {
      body: '{}',
      headers: {
        'stripe-signature': 'test-signature',
      },
      method: 'POST',
    }));

    expect(response.status).toBe(HTTP_CODE_500_INTERNAL_SERVER_ERROR);
    expect(await response.json()).toEqual({
      error: 'premium_user_not_found',
    });

    const {
      rows,
    } = await executeSQLQuery(
      'SELECT id FROM payments WHERE stripe_checkout_session_id = $1',
      [missing_session_id]
    );

    expect(rows).toHaveLength(0);
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
        payment_type: PREMIUM_PAYMENT_TYPE,
      },
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
      'SELECT id FROM payments WHERE user_id = $1',
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

  it('grants premium when async_payment_succeeded reports a paid session', async () => {
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
      id: ASYNC_PAID_SESSION_ID,
      metadata: {
        payment_type: PREMIUM_PAYMENT_TYPE,
      },
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
      `SELECT payment_type, price_in_cents, stripe_checkout_session_id
      FROM payments
      WHERE user_id = $1`,
      [ASYNC_PAID_USER_ID]
    );

    expect(payment_list).toHaveLength(1);
    expect(payment_list.at(0)).toMatchObject({
      payment_type: PREMIUM_PAYMENT_TYPE,
      price_in_cents: 4900,
      stripe_checkout_session_id: ASYNC_PAID_SESSION_ID,
    });

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT status, premium_status_expiration_date FROM users WHERE id = $1',
      [ASYNC_PAID_USER_ID]
    );

    expect(user_list.at(0)?.status).toBe('premium');
    expect(expirationIso(user_list.at(0)?.premium_status_expiration_date)).toBe(EXTENDED_EXPIRATION);
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
      'SELECT id FROM payments WHERE stripe_checkout_session_id = $1',
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
