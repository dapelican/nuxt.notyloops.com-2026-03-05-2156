'use strict';

import { describe, expect, it, vi } from 'vitest';

import {
  HTTP_CODE_403_FORBIDDEN,
} from '../../../helpers/http-status-codes.js';

import {
  createStripeCheckout,
} from '../../../services/stripe/create-checkout.js';

import { createTestHandler } from '../create-test-handler.js';

import handler from '../../../routes/payments/create-stripe-checkout.post.js';

vi.mock('../../../services/stripe/create-checkout.js', () => ({
  createStripeCheckout: vi.fn(),
}));

const FREE_USER_SESSION_TOKEN_ID = 'c1000000-0000-4000-8000-000000000003';
const PAYWALLED_COLLECTION_ID = '40000000-0000-4000-8000-000000000007';

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
  it('returns 403 when a free user starts checkout for a public_paywalled collection', async () => {
    vi.mocked(globalThis.useRuntimeConfig).mockReturnValue({
      B2_BUCKET_NAME: 'test-bucket',
      DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
      EMAILABLE_API_KEY: 'test-emailable-key',
      SESSION_MAX_AGE_DAYS: '30',
      STRIPE_ENDPOINT_SECRET: 'test-stripe-endpoint-secret',
      STRIPE_SECRET_API_KEY: 'test-stripe-secret-key',
      public: {
        domain: 'localhost',
      },
    });

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
});
