import {
  HTTP_CODE_200_OK,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../../helpers/http-status-codes.js';

import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';

import { DateTime } from 'luxon';

import { createTestHandler } from '../create-test-handler.js';

import {
  executeSQLQuery,
} from '../../../database/query.js';

import handler from '../../../routes/payments/sync-stripe-subscription.post.js';

const { retrieve_subscription } = vi.hoisted(() => ({
  retrieve_subscription: vi.fn(),
}));

vi.mock('stripe', () => ({
  default: class StripeMock {
    constructor() {
      this.subscriptions = {
        retrieve: retrieve_subscription,
      };
    }
  },
}));

const SYNC_USER_ID = '50000000-0000-4000-8000-0000000000a8';
const SYNC_SESSION_TOKEN_ID = 'c5000000-0000-4000-8000-0000000000a8';
const PERIOD_END_SECONDS = 1800000000;
const PERIOD_END_ISO = DateTime.fromSeconds(PERIOD_END_SECONDS, {
  zone: 'utc',
}).toISO();

const runtime_config = (stripe_secret_api_key = 'test-stripe-secret-key') => ({
  B2_BUCKET_NAME: 'test-bucket',
  DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
  EMAILABLE_API_KEY: 'test-emailable-key',
  SESSION_MAX_AGE_DAYS: '30',
  STRIPE_ENDPOINT_SECRET: 'test-stripe-endpoint-secret',
  STRIPE_PREMIUM_MONTHLY_EUR_PRICE_ID: 'price_month_eur',
  STRIPE_PREMIUM_MONTHLY_USD_PRICE_ID: 'price_month_usd',
  STRIPE_PREMIUM_YEARLY_EUR_PRICE_ID: 'price_year_eur',
  STRIPE_PREMIUM_YEARLY_USD_PRICE_ID: 'price_year_usd',
  STRIPE_SECRET_API_KEY: stripe_secret_api_key,
});

const request = createTestHandler(
  'post',
  '/payments/sync-stripe-subscription',
  handler
);

const post = () => request(new Request('http://localhost/payments/sync-stripe-subscription', {
  method: 'POST',
}));

const expirationIso = (premium_status_expiration_date) => DateTime
  .fromJSDate(premium_status_expiration_date)
  .toUTC()
  .toISO();

const deleteSyncUser = async () => {
  await executeSQLQuery(
    'DELETE FROM stripe_payments WHERE user_id = $1',
    [SYNC_USER_ID]
  );
  await executeSQLQuery(
    'DELETE FROM stripe_subscriptions WHERE user_id = $1',
    [SYNC_USER_ID]
  );
  await executeSQLQuery(
    'DELETE FROM user_session_tokens WHERE id = $1',
    [SYNC_SESSION_TOKEN_ID]
  );
  await executeSQLQuery(
    'DELETE FROM users WHERE id = $1',
    [SYNC_USER_ID]
  );
};

const insertSubscription = async (scheduled_to_cancel) => {
  await executeSQLQuery(
    `INSERT INTO stripe_subscriptions (
      user_id,
      stripe_customer_id,
      stripe_subscription_id,
      subscription_cancel_at_period_end
    )
    VALUES ($1, 'cus_sync', 'sub_sync', $2)`,
    [SYNC_USER_ID, scheduled_to_cancel]
  );
};

describe('POST /payments/sync-stripe-subscription', () => {
  beforeAll(async () => {
    await deleteSyncUser();
    await executeSQLQuery(
      `INSERT INTO users (id, email, status, premium_status_expiration_date, subdomain)
      VALUES ($1, 'stripe-sync@example.com', 'premium_monthly', $2, 'www')`,
      [SYNC_USER_ID, '2026-01-15T00:00:00.000Z']
    );
    await executeSQLQuery(
      `INSERT INTO user_session_tokens (id, user_id, token, expires_at, blacklisted)
      VALUES ($1, $2, 'sync-subscription-token', now() + interval '30 days', false)`,
      [SYNC_SESSION_TOKEN_ID, SYNC_USER_ID]
    );
  });

  beforeEach(async () => {
    retrieve_subscription.mockReset();
    vi.mocked(globalThis.useRuntimeConfig).mockReturnValue(runtime_config());
    await executeSQLQuery(
      `UPDATE users
      SET status = 'premium_monthly',
          premium_status_expiration_date = $2
      WHERE id = $1`,
      [SYNC_USER_ID, '2026-01-15T00:00:00.000Z']
    );
    await executeSQLQuery(
      'DELETE FROM stripe_subscriptions WHERE user_id = $1',
      [SYNC_USER_ID]
    );
  });

  it('returns 401 when the session is missing', async () => {
    getUserSession.mockResolvedValueOnce({});

    const response = await post();

    expect(response.status).toBe(HTTP_CODE_401_UNAUTHORIZED);
    expect(await response.json()).toEqual({
      error_message: 'error_unauthorized',
    });
    expect(retrieve_subscription).not.toHaveBeenCalled();
  });

  it('leaves the database unchanged when Stripe is not configured', async () => {
    vi.mocked(globalThis.useRuntimeConfig).mockReturnValue(runtime_config(''));
    getUserSession.mockResolvedValueOnce({
      session_token_id: SYNC_SESSION_TOKEN_ID,
    });
    await insertSubscription(false);

    const response = await post();

    expect(response.status).toBe(HTTP_CODE_200_OK);
    expect(await response.json()).toEqual({
      synced: false,
    });
    expect(retrieve_subscription).not.toHaveBeenCalled();

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT status FROM users WHERE id = $1',
      [SYNC_USER_ID]
    );

    expect(user_list.at(0)?.status).toBe('premium_monthly');
  });

  it('returns without calling Stripe when the user has no subscription row', async () => {
    getUserSession.mockResolvedValueOnce({
      session_token_id: SYNC_SESSION_TOKEN_ID,
    });

    const response = await post();

    expect(response.status).toBe(HTTP_CODE_200_OK);
    expect(await response.json()).toEqual({
      synced: false,
    });
    expect(retrieve_subscription).not.toHaveBeenCalled();
  });

  it('leaves the database unchanged when Stripe returns an error', async () => {
    getUserSession.mockResolvedValueOnce({
      session_token_id: SYNC_SESSION_TOKEN_ID,
    });
    await insertSubscription(false);
    retrieve_subscription.mockRejectedValue(new Error('stripe_unavailable'));

    const response = await post();

    expect(response.status).toBe(HTTP_CODE_200_OK);
    expect(await response.json()).toEqual({
      synced: false,
    });

    const {
      rows: subscription_list,
    } = await executeSQLQuery(
      'SELECT subscription_cancel_at_period_end FROM stripe_subscriptions WHERE user_id = $1',
      [SYNC_USER_ID]
    );

    expect(subscription_list.at(0)?.subscription_cancel_at_period_end).toBe(false);

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT status FROM users WHERE id = $1',
      [SYNC_USER_ID]
    );

    expect(user_list.at(0)?.status).toBe('premium_monthly');
  });

  it('stores a scheduled cancellation from cancel_at and keeps premium access', async () => {
    getUserSession.mockResolvedValueOnce({
      session_token_id: SYNC_SESSION_TOKEN_ID,
    });
    await insertSubscription(false);
    retrieve_subscription.mockResolvedValue({
      cancel_at: PERIOD_END_SECONDS,
      cancel_at_period_end: false,
      id: 'sub_sync',
      items: {
        data: [
          {
            current_period_end: PERIOD_END_SECONDS,
          },
        ],
      },
      status: 'active',
    });

    const response = await post();

    expect(response.status).toBe(HTTP_CODE_200_OK);
    expect(await response.json()).toEqual({
      synced: true,
    });
    expect(retrieve_subscription).toHaveBeenCalledWith('sub_sync');

    const {
      rows: subscription_list,
    } = await executeSQLQuery(
      'SELECT subscription_cancel_at_period_end FROM stripe_subscriptions WHERE user_id = $1',
      [SYNC_USER_ID]
    );

    expect(subscription_list.at(0)?.subscription_cancel_at_period_end).toBe(true);

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT status, premium_status_expiration_date FROM users WHERE id = $1',
      [SYNC_USER_ID]
    );

    expect(user_list.at(0)?.status).toBe('premium_monthly');
    expect(expirationIso(user_list.at(0)?.premium_status_expiration_date)).toBe(PERIOD_END_ISO);
  });

  it('clears a scheduled cancellation when the subscription is reactivated', async () => {
    getUserSession.mockResolvedValueOnce({
      session_token_id: SYNC_SESSION_TOKEN_ID,
    });
    await insertSubscription(true);
    retrieve_subscription.mockResolvedValue({
      cancel_at: null,
      cancel_at_period_end: false,
      id: 'sub_sync',
      items: {
        data: [
          {
            current_period_end: PERIOD_END_SECONDS,
            price: {
              id: 'price_year_eur',
            },
          },
        ],
      },
      status: 'active',
    });

    const response = await post();

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const {
      rows: subscription_list,
    } = await executeSQLQuery(
      'SELECT subscription_cancel_at_period_end FROM stripe_subscriptions WHERE user_id = $1',
      [SYNC_USER_ID]
    );

    expect(subscription_list.at(0)?.subscription_cancel_at_period_end).toBe(false);

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT status, premium_status_expiration_date FROM users WHERE id = $1',
      [SYNC_USER_ID]
    );

    expect(user_list.at(0)?.status).toBe('premium_yearly');
    expect(expirationIso(user_list.at(0)?.premium_status_expiration_date)).toBe(PERIOD_END_ISO);
  });

  it('sets the user to pending when the Stripe subscription is missing', async () => {
    getUserSession.mockResolvedValueOnce({
      session_token_id: SYNC_SESSION_TOKEN_ID,
    });
    await insertSubscription(true);
    retrieve_subscription.mockRejectedValue({
      code: 'resource_missing',
      statusCode: 404,
    });

    const response = await post();

    expect(response.status).toBe(HTTP_CODE_200_OK);
    expect(await response.json()).toEqual({
      synced: true,
    });

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT status FROM users WHERE id = $1',
      [SYNC_USER_ID]
    );

    expect(user_list.at(0)?.status).toBe('pending');

    const {
      rows: subscription_list,
    } = await executeSQLQuery(
      'SELECT id FROM stripe_subscriptions WHERE user_id = $1',
      [SYNC_USER_ID]
    );

    expect(subscription_list).toHaveLength(0);
  });
});
