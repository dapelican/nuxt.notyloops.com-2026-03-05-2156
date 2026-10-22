import { beforeEach, describe, expect, it, vi } from 'vitest';

import { createStripeCheckout } from '../../../services/stripe/create-checkout.js';

const { create_session } = vi.hoisted(() => ({
  create_session: vi.fn(),
}));

vi.mock('stripe', () => ({
  default: class StripeMock {
    constructor() {
      this.checkout = {
        sessions: {
          create: create_session,
        },
      };
    }
  },
}));

describe('createStripeCheckout', () => {
  beforeEach(() => {
    create_session.mockReset();
    create_session.mockResolvedValue({
      url: 'https://checkout.stripe.test/session',
    });
  });

  it('builds a subscription session from a Price id', async () => {
    const result = await createStripeCheckout({
      billing_interval: 'month',
      client_reference_id: 'user-1',
      customer_email: 'ada@example.com',
      locale: 'fr',
      mode: 'subscription',
      payment_type: 'premium_monthly',
      price_id: 'price_month_eur',
      return_page_url: 'https://fr.notyloops.com/account/information',
      stripe_secret_api_key: 'sk_test',
      user_id: 'user-1',
    });

    expect(result).toEqual({
      checkout_url: 'https://checkout.stripe.test/session',
    });

    const session_params = create_session.mock.calls.at(0)?.at(0);

    expect(session_params).toMatchObject({
      allow_promotion_codes: true,
      client_reference_id: 'user-1',
      customer_email: 'ada@example.com',
      line_items: [
        {
          price: 'price_month_eur',
          quantity: 1,
        },
      ],
      locale: 'fr',
      mode: 'subscription',
    });
    expect(session_params.metadata).toEqual({
      billing_interval: 'month',
      payment_type: 'premium_monthly',
      user_id: 'user-1',
    });
    expect(session_params.subscription_data.metadata).toEqual(session_params.metadata);
    expect(session_params.customer).toBeUndefined();
    expect(session_params.price_data).toBeUndefined();
    expect(JSON.stringify(session_params)).not.toContain('tax_behavior');
  });

  it('reuses the Stripe customer and does not send customer_email', async () => {
    await createStripeCheckout({
      billing_interval: 'year',
      client_reference_id: 'user-1',
      customer_email: 'ada@example.com',
      mode: 'subscription',
      payment_type: 'premium_yearly',
      price_id: 'price_year_usd',
      return_page_url: 'https://www.notyloops.com/account/information',
      stripe_customer_id: 'cus_known',
      stripe_secret_api_key: 'sk_test',
      user_id: 'user-1',
    });

    const session_params = create_session.mock.calls.at(0)?.at(0);

    expect(session_params.customer).toBe('cus_known');
    expect(session_params.customer_email).toBeUndefined();
  });

  it('keeps collection checkout on a one-time exclusive price', async () => {
    await createStripeCheckout({
      client_reference_id: 'user-1',
      currency: 'eur',
      customer_email: 'ada@example.com',
      locale: 'fr',
      mode: 'payment',
      product_name: 'Collection',
      return_page_url: 'https://fr.notyloops.com/pc/collection-1',
      session_metadata: {
        collection_id: 'collection-1',
        payment_type: 'collection',
      },
      stripe_secret_api_key: 'sk_test',
      unit_amount_in_cents: 500,
    });

    const session_params = create_session.mock.calls.at(0)?.at(0);

    expect(session_params.mode).toBe('payment');
    expect(session_params.line_items).toEqual([
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: 'Collection',
            tax_code: 'txcd_10103000',
          },
          tax_behavior: 'exclusive',
          unit_amount: 500,
        },
        quantity: 1,
      },
    ]);
    expect(session_params.subscription_data).toBeUndefined();
  });
});
