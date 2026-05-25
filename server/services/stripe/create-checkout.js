'use strict';

import Stripe from 'stripe';

const createStripeCheckout = async ({
  client_reference_id,
  customer_email,
  locale,
  product_name,
  return_page_url,
  session_metadata,
  stripe_secret_api_key,
  unit_amount_in_cents,
}) => {
  const stripe_client = new Stripe(stripe_secret_api_key);

  const checkout_session_params = {
    allow_promotion_codes: true,
    // billing_address_collection: 'required',
    cancel_url: `${return_page_url}?checkout=cancelled`,
    client_reference_id,
    customer_email,
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: product_name,
            tax_code: 'txcd_10103000',
          },
          tax_behavior: 'exclusive',
          unit_amount: unit_amount_in_cents,
        },
        quantity: 1,
      },
    ],
    // managed_payments: {
    //   enabled: true,
    // },
    metadata: session_metadata,
    mode: 'payment',
    success_url: `${return_page_url}?checkout=success`,
    ...(locale !== undefined && { locale }),
  };

  const checkout_session = await stripe_client.checkout.sessions.create(checkout_session_params);

  if (!checkout_session.url) {
    return {
      error_message: 'error_checkout_url_unavailable',
    };
  }

  return {
    checkout_url: checkout_session.url,
  };
};

export {
  createStripeCheckout,
};
