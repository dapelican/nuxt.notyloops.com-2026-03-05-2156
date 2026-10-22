import Stripe from 'stripe';

const buildSubscriptionCheckoutSessionParams = ({
  billing_interval,
  client_reference_id,
  customer_email,
  locale,
  payment_type,
  price_id,
  return_page_url,
  stripe_customer_id,
  user_id,
}) => {
  const metadata = {
    billing_interval,
    payment_type,
    user_id,
  };

  return {
    allow_promotion_codes: true,
    cancel_url: `${return_page_url}?checkout=cancelled`,
    client_reference_id,
    line_items: [
      {
        price: price_id,
        quantity: 1,
      },
    ],
    metadata,
    mode: 'subscription',
    subscription_data: {
      metadata,
    },
    success_url: `${return_page_url}?checkout=success`,
    ...(stripe_customer_id
      ? { customer: stripe_customer_id }
      : { customer_email }),
    ...(locale !== undefined && { locale }),
  };
};

const buildPaymentCheckoutSessionParams = ({
  client_reference_id,
  currency,
  customer_email,
  locale,
  product_name,
  return_page_url,
  session_metadata,
  unit_amount_in_cents,
}) => {
  return {
    allow_promotion_codes: true,
    // billing_address_collection: 'required',
    cancel_url: `${return_page_url}?checkout=cancelled`,
    client_reference_id,
    customer_email,
    line_items: [
      {
        price_data: {
          currency,
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
};

const createStripeCheckout = async ({
  billing_interval,
  client_reference_id,
  currency = 'eur',
  customer_email,
  locale,
  mode = 'payment',
  payment_type,
  price_id,
  product_name,
  return_page_url,
  session_metadata,
  stripe_customer_id,
  stripe_secret_api_key,
  unit_amount_in_cents,
  user_id,
}) => {
  const stripe_client = new Stripe(stripe_secret_api_key);

  const checkout_session_params = mode === 'subscription'
    ? buildSubscriptionCheckoutSessionParams({
        billing_interval,
        client_reference_id,
        customer_email,
        locale,
        payment_type,
        price_id,
        return_page_url,
        stripe_customer_id,
        user_id,
      })
    : buildPaymentCheckoutSessionParams({
        client_reference_id,
        currency,
        customer_email,
        locale,
        product_name,
        return_page_url,
        session_metadata,
        unit_amount_in_cents,
      });

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
