import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_403_FORBIDDEN,
} from '../../../helpers/http-status-codes.js';

import { beforeEach, describe, expect, it, vi } from 'vitest';

import {
  createStripeCheckout,
} from '../../../services/stripe/create-checkout.js';

import { createTestHandler } from '../create-test-handler.js';

import {
  executeSQLQuery,
} from '../../../database/query.js';

import handler from '../../../routes/payments/create-stripe-checkout.post.js';

vi.mock('../../../services/stripe/create-checkout.js', () => ({
  createStripeCheckout: vi.fn(),
}));

const FREE_USER_ID = '10000000-0000-4000-8000-000000000003';
const FREE_USER_SESSION_TOKEN_ID = 'c1000000-0000-4000-8000-000000000003';
const PREMIUM_USER_SESSION_TOKEN_ID = 'b0000000-0000-4000-8000-000000000002';
const PAYWALLED_COLLECTION_ID = '40000000-0000-4000-8000-000000000007';

const runtime_config = () => ({
  B2_BUCKET_NAME: 'test-bucket',
  DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
  EMAILABLE_API_KEY: 'test-emailable-key',
  SESSION_MAX_AGE_DAYS: '30',
  STRIPE_ENDPOINT_SECRET: 'test-stripe-endpoint-secret',
  STRIPE_PREMIUM_MONTHLY_EUR_PRICE_ID: 'price_month_eur',
  STRIPE_PREMIUM_MONTHLY_USD_PRICE_ID: 'price_month_usd',
  STRIPE_PREMIUM_YEARLY_EUR_PRICE_ID: 'price_year_eur',
  STRIPE_PREMIUM_YEARLY_USD_PRICE_ID: 'price_year_usd',
  STRIPE_SECRET_API_KEY: 'test-stripe-secret-key',
  public: {
    domain: 'localhost',
  },
});

const request = createTestHandler(
  'post',
  '/payments/create-stripe-checkout',
  handler
);

const post = (body) => request(new Request('http://localhost/payments/create-stripe-checkout', {
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'POST',
}));

describe('POST /payments/create-stripe-checkout', () => {
  beforeEach(() => {
    createStripeCheckout.mockReset();
  });

  it('returns 403 when a free user starts checkout for a public_paywalled collection', async () => {
    vi.mocked(globalThis.useRuntimeConfig).mockReturnValue(runtime_config());

    getUserSession.mockResolvedValueOnce({
      session_token_id: FREE_USER_SESSION_TOKEN_ID,
    });

    const response = await post({
      collection_id: PAYWALLED_COLLECTION_ID,
      locale: 'en',
    });

    expect(response.status).toBe(HTTP_CODE_403_FORBIDDEN);

    const data = await response.json();

    expect(data.error_message).toBe('error_premium_required_to_buy_collection');
    expect(createStripeCheckout).not.toHaveBeenCalled();
  });

  it('opens a subscription Checkout with the USD monthly Price when currency is usd', async () => {
    vi.mocked(globalThis.useRuntimeConfig).mockReturnValue(runtime_config());
    createStripeCheckout.mockResolvedValue({
      checkout_url: 'https://checkout.stripe.test/monthly',
    });
    getUserSession.mockResolvedValueOnce({
      session_token_id: FREE_USER_SESSION_TOKEN_ID,
    });

    const response = await post({
      billing_interval: 'month',
      currency: 'USD',
      locale: 'fr',
    });

    expect(response.status).toBe(HTTP_CODE_200_OK);
    expect(await response.json()).toEqual({
      checkout_url: 'https://checkout.stripe.test/monthly',
    });
    expect(createStripeCheckout).toHaveBeenCalledWith(expect.objectContaining({
      billing_interval: 'month',
      locale: 'fr',
      mode: 'subscription',
      payment_type: 'premium_monthly',
      price_id: 'price_month_usd',
      return_page_url: 'http://fr.localhost/account/payments',
    }));
    expect(createStripeCheckout.mock.calls.at(0)?.at(0)?.stripe_customer_id).toBeUndefined();
  });

  it('opens a subscription Checkout with the EUR yearly Price when currency is eur', async () => {
    vi.mocked(globalThis.useRuntimeConfig).mockReturnValue(runtime_config());
    createStripeCheckout.mockResolvedValue({
      checkout_url: 'https://checkout.stripe.test/yearly',
    });
    getUserSession.mockResolvedValueOnce({
      session_token_id: FREE_USER_SESSION_TOKEN_ID,
    });

    const response = await post({
      billing_interval: 'year',
      currency: 'EUR',
      locale: 'en',
    });

    expect(response.status).toBe(HTTP_CODE_200_OK);
    expect(createStripeCheckout).toHaveBeenCalledWith(expect.objectContaining({
      billing_interval: 'year',
      locale: 'en',
      mode: 'subscription',
      payment_type: 'premium_yearly',
      price_id: 'price_year_eur',
      return_page_url: 'http://www.localhost/account/payments',
    }));
  });

  it('opens a subscription Checkout with the EUR Price when currency is omitted', async () => {
    vi.mocked(globalThis.useRuntimeConfig).mockReturnValue(runtime_config());
    createStripeCheckout.mockResolvedValue({
      checkout_url: 'https://checkout.stripe.test/monthly-eur',
    });
    getUserSession.mockResolvedValueOnce({
      session_token_id: FREE_USER_SESSION_TOKEN_ID,
    });

    const response = await post({
      billing_interval: 'month',
      locale: 'en',
    });

    expect(response.status).toBe(HTTP_CODE_200_OK);
    expect(createStripeCheckout).toHaveBeenCalledWith(expect.objectContaining({
      billing_interval: 'month',
      locale: 'en',
      mode: 'subscription',
      payment_type: 'premium_monthly',
      price_id: 'price_month_eur',
    }));
  });

  it('rejects a second subscription when a stripe_subscriptions row already exists', async () => {
    vi.mocked(globalThis.useRuntimeConfig).mockReturnValue(runtime_config());
    getUserSession.mockResolvedValueOnce({
      session_token_id: FREE_USER_SESSION_TOKEN_ID,
    });
    await executeSQLQuery(
      `INSERT INTO stripe_subscriptions (
        user_id,
        stripe_customer_id,
        stripe_subscription_id
      )
      VALUES ($1, 'cus_existing', 'sub_existing')`,
      [FREE_USER_ID]
    );

    try {
      const response = await post({
        billing_interval: 'month',
        locale: 'fr',
      });

      expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);
      expect(await response.json()).toEqual({
        error_message: 'error_subscription_already_exists',
      });
      expect(createStripeCheckout).not.toHaveBeenCalled();
    } finally {
      await executeSQLQuery(
        'DELETE FROM stripe_subscriptions WHERE user_id = $1',
        [FREE_USER_ID]
      );
    }
  });

  it('keeps collection checkout on mode payment', async () => {
    vi.mocked(globalThis.useRuntimeConfig).mockReturnValue(runtime_config());
    createStripeCheckout.mockResolvedValue({
      checkout_url: 'https://checkout.stripe.test/collection',
    });
    getUserSession.mockResolvedValueOnce({
      session_token_id: PREMIUM_USER_SESSION_TOKEN_ID,
    });

    const response = await post({
      collection_id: PAYWALLED_COLLECTION_ID,
      locale: 'en',
    });

    expect(response.status).toBe(HTTP_CODE_200_OK);
    expect(createStripeCheckout).toHaveBeenCalledWith(expect.objectContaining({
      currency: 'eur',
      mode: 'payment',
      unit_amount_in_cents: 500,
    }));
    expect(createStripeCheckout.mock.calls.at(0)?.at(0)?.price_id).toBeUndefined();
  });

  it('charges a paywalled collection from its stored USD amount when currency is usd', async () => {
    vi.mocked(globalThis.useRuntimeConfig).mockReturnValue(runtime_config());
    createStripeCheckout.mockResolvedValue({
      checkout_url: 'https://checkout.stripe.test/collection-usd',
    });
    getUserSession.mockResolvedValueOnce({
      session_token_id: PREMIUM_USER_SESSION_TOKEN_ID,
    });

    const response = await post({
      collection_id: PAYWALLED_COLLECTION_ID,
      currency: 'USD',
      locale: 'fr',
    });

    expect(response.status).toBe(HTTP_CODE_200_OK);
    expect(createStripeCheckout).toHaveBeenCalledWith(expect.objectContaining({
      currency: 'usd',
      locale: 'fr',
      mode: 'payment',
      return_page_url: `http://fr.localhost/pc/${PAYWALLED_COLLECTION_ID}`,
      unit_amount_in_cents: 600,
    }));
  });

  it('requires a billing interval when there is no collection', async () => {
    vi.mocked(globalThis.useRuntimeConfig).mockReturnValue(runtime_config());
    getUserSession.mockResolvedValueOnce({
      session_token_id: FREE_USER_SESSION_TOKEN_ID,
    });

    const response = await post({
      locale: 'fr',
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);
    expect(await response.json()).toEqual({
      error_message: 'error_invalid_checkout_input',
    });
    expect(createStripeCheckout).not.toHaveBeenCalled();
  });
});
