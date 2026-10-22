import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../../helpers/http-status-codes.js';

import { beforeEach, describe, expect, it, vi } from 'vitest';

import { createTestHandler } from '../create-test-handler.js';

import {
  executeSQLQuery,
} from '../../../database/query.js';

import handler from '../../../routes/payments/create-stripe-billing-portal.post.js';

const { create_portal_session } = vi.hoisted(() => ({
  create_portal_session: vi.fn(),
}));

vi.mock('stripe', () => ({
  default: class StripeMock {
    constructor() {
      this.billingPortal = {
        sessions: {
          create: create_portal_session,
        },
      };
    }
  },
}));

const FREE_USER_ID = '10000000-0000-4000-8000-000000000003';
const FREE_USER_SESSION_TOKEN_ID = 'c1000000-0000-4000-8000-000000000003';

const runtime_config = (domain = 'localhost') => ({
  B2_BUCKET_NAME: 'test-bucket',
  DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
  EMAILABLE_API_KEY: 'test-emailable-key',
  SESSION_MAX_AGE_DAYS: '30',
  STRIPE_ENDPOINT_SECRET: 'test-stripe-endpoint-secret',
  STRIPE_SECRET_API_KEY: 'test-stripe-secret-key',
  public: {
    domain,
  },
});

const request = createTestHandler(
  'post',
  '/payments/create-stripe-billing-portal',
  handler
);

const post = (body = {}) => request(new Request('http://localhost/payments/create-stripe-billing-portal', {
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'POST',
}));

const deleteSubscription = () => executeSQLQuery(
  'DELETE FROM stripe_subscriptions WHERE user_id = $1',
  [FREE_USER_ID]
);

describe('POST /payments/create-stripe-billing-portal', () => {
  beforeEach(async () => {
    create_portal_session.mockReset();
    create_portal_session.mockResolvedValue({
      url: 'https://billing.stripe.test/session',
    });
    vi.mocked(globalThis.useRuntimeConfig).mockReturnValue(runtime_config());
    await deleteSubscription();
  });

  it('returns 401 when the session is missing', async () => {
    getUserSession.mockResolvedValueOnce({});

    const response = await post();

    expect(response.status).toBe(HTTP_CODE_401_UNAUTHORIZED);
    expect(await response.json()).toEqual({
      error_message: 'error_unauthorized',
    });
    expect(create_portal_session).not.toHaveBeenCalled();
  });

  it('returns 400 when Stripe is not configured', async () => {
    vi.mocked(globalThis.useRuntimeConfig).mockReturnValue({
      ...runtime_config(),
      STRIPE_SECRET_API_KEY: '',
    });
    getUserSession.mockResolvedValueOnce({
      session_token_id: FREE_USER_SESSION_TOKEN_ID,
    });

    const response = await post({
      locale: 'fr',
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);
    expect(await response.json()).toEqual({
      error_message: 'stripe_not_configured',
    });
    expect(create_portal_session).not.toHaveBeenCalled();
  });

  it('returns 400 when the user has no subscription row', async () => {
    getUserSession.mockResolvedValueOnce({
      session_token_id: FREE_USER_SESSION_TOKEN_ID,
    });

    const response = await post({
      locale: 'en',
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);
    expect(await response.json()).toEqual({
      error_message: 'error_subscription_not_found',
    });
    expect(create_portal_session).not.toHaveBeenCalled();
  });

  it('returns a billing portal url for the Stripe customer', async () => {
    vi.mocked(globalThis.useRuntimeConfig).mockReturnValue(runtime_config('localhost'));
    getUserSession.mockResolvedValueOnce({
      session_token_id: FREE_USER_SESSION_TOKEN_ID,
    });
    await executeSQLQuery(
      `INSERT INTO stripe_subscriptions (
        user_id,
        stripe_customer_id,
        stripe_subscription_id
      )
      VALUES ($1, 'cus_portal', 'sub_portal')`,
      [FREE_USER_ID]
    );

    try {
      const response = await post({
        locale: 'fr',
      });

      expect(response.status).toBe(HTTP_CODE_200_OK);
      expect(await response.json()).toEqual({
        portal_url: 'https://billing.stripe.test/session',
      });
      expect(create_portal_session).toHaveBeenCalledWith({
        customer: 'cus_portal',
        locale: 'fr',
        return_url: 'http://fr.localhost/account/payments?billing_portal=return',
      });
    } finally {
      await deleteSubscription();
    }
  });

  it('uses the English site origin when the locale is not French', async () => {
    vi.mocked(globalThis.useRuntimeConfig).mockReturnValue(runtime_config('notyloops.com'));
    getUserSession.mockResolvedValueOnce({
      session_token_id: FREE_USER_SESSION_TOKEN_ID,
    });
    await executeSQLQuery(
      `INSERT INTO stripe_subscriptions (
        user_id,
        stripe_customer_id,
        stripe_subscription_id
      )
      VALUES ($1, 'cus_portal_en', 'sub_portal_en')`,
      [FREE_USER_ID]
    );

    try {
      const response = await post({
        locale: 'en',
      });

      expect(response.status).toBe(HTTP_CODE_200_OK);
      expect(create_portal_session).toHaveBeenCalledWith({
        customer: 'cus_portal_en',
        locale: 'en',
        return_url: 'https://www.notyloops.com/account/payments?billing_portal=return',
      });
    } finally {
      await deleteSubscription();
    }
  });
});
