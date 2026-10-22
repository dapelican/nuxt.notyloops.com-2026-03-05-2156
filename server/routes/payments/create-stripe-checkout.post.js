/* eslint-disable sort-imports */
import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_401_UNAUTHORIZED,
  HTTP_CODE_403_FORBIDDEN,
} from '../../helpers/http-status-codes.js';

import {
  defineEventHandler,
  readBody,
} from 'h3';

import {
  executeSQLQuery,
} from '../../database/query.js';

import {
  COLLECTION_PAYMENT_TYPE,
  PREMIUM_MONTHLY_PAYMENT_TYPE,
  PREMIUM_YEARLY_PAYMENT_TYPE,
} from '../../helpers/constants.js';

import {
  handleBackendError,
} from '../../helpers/handle-backend-error.js';

import {
  user_has_premium_status,
} from '../../helpers/public-collection-access.js';

import {
  verifySessionAndReturnUser,
} from '../../helpers/verify-session-and-return-user.js';

import {
  COLLECTION_TYPE_PUBLIC_PAYWALLLED,
  CURRENCY_LIST,
  CURRENCY_USD,
  DEFAULT_CURRENCY,
  USER_STATUS_ADMIN,
} from '#shared/utils/constants.js';

import {
  createStripeCheckout,
} from '../../services/stripe/create-checkout.js';

import { z } from 'zod';
/* eslint-enable sort-imports */

const request_body_schema = z.object({
  billing_interval: z.enum(['month', 'year']).optional(),
  collection_id: z.uuid().nullable().optional(),
  currency: z.enum(CURRENCY_LIST).default(DEFAULT_CURRENCY),
  locale: z.enum(['en', 'fr']).optional(),
}).superRefine((value, context) => {
  if (!value.collection_id && value.billing_interval === undefined) {
    context.addIssue('billing_interval_required');
  }
});

const premiumPriceId = (billing_interval, currency, runtime_config) => {
  const currency_is_usd = currency === CURRENCY_USD;

  if (billing_interval === 'year') {
    return currency_is_usd
      ? runtime_config.STRIPE_PREMIUM_YEARLY_USD_PRICE_ID
      : runtime_config.STRIPE_PREMIUM_YEARLY_EUR_PRICE_ID;
  }

  return currency_is_usd
    ? runtime_config.STRIPE_PREMIUM_MONTHLY_USD_PRICE_ID
    : runtime_config.STRIPE_PREMIUM_MONTHLY_EUR_PRICE_ID;
};

const buildSiteOrigin = (locale, domain) => {
  const protocol = domain.includes('localhost') ? 'http' : 'https';

  let proper_domain = (locale === 'fr')
    ? `fr.${domain}`
    : `www.${domain}`;

  return `${protocol}://${proper_domain}`;
};

export default defineEventHandler(async (event) => {
  try {
    const authenticated_user = await verifySessionAndReturnUser(event);

    if (authenticated_user === null) {
      event.res.status = HTTP_CODE_401_UNAUTHORIZED;

      return {
        error_message: 'error_unauthorized',
      };
    }

    const body = await readBody(event);

    const body_parse_result = request_body_schema.safeParse(body);

    if (!body_parse_result.success) {
      event.res.status = HTTP_CODE_400_BAD_REQUEST;

      return {
        error_message: 'error_invalid_checkout_input',
      };
    }

    const {
      billing_interval,
      collection_id,
      currency,
      locale,
    } = body_parse_result.data;

    const runtime_config = useRuntimeConfig();

    const {
      STRIPE_SECRET_API_KEY,
      public: { domain },
    } = runtime_config;

    if (!STRIPE_SECRET_API_KEY) {
      event.res.status = HTTP_CODE_400_BAD_REQUEST;

      return {
        error_message: 'stripe_not_configured',
      };
    }

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT email FROM users WHERE id = $1',
      [authenticated_user.id]
    );

    const user = user_list.at(0);

    if (user === undefined) {
      event.res.status = HTTP_CODE_400_BAD_REQUEST;

      return {
        error_message: 'error_invalid_user_id',
      };
    }

    const site_origin = buildSiteOrigin(locale, domain);

    let product_name;
    let return_page_url;
    let session_metadata;
    let unit_amount_in_cents;

    if (!collection_id) {
      const {
        rows: subscription_row_list,
      } = await executeSQLQuery(
        `SELECT 1 FROM stripe_subscriptions
        WHERE user_id = $1
        LIMIT 1`,
        [authenticated_user.id]
      );

      if (subscription_row_list.length > 0) {
        event.res.status = HTTP_CODE_400_BAD_REQUEST;

        return {
          error_message: 'error_subscription_already_exists',
        };
      }

      const price_id = premiumPriceId(billing_interval, currency, runtime_config);

      if (!price_id) {
        event.res.status = HTTP_CODE_400_BAD_REQUEST;

        return {
          error_message: 'stripe_not_configured',
        };
      }

      const payment_type = billing_interval === 'year'
        ? PREMIUM_YEARLY_PAYMENT_TYPE
        : PREMIUM_MONTHLY_PAYMENT_TYPE;

      const checkout_result = await createStripeCheckout({
        billing_interval,
        client_reference_id: authenticated_user.id,
        customer_email: user.email,
        locale,
        mode: 'subscription',
        payment_type,
        price_id,
        return_page_url: `${site_origin}/account/payments`,
        stripe_secret_api_key: STRIPE_SECRET_API_KEY,
        user_id: authenticated_user.id,
      });

      if (checkout_result.error_message) {
        event.res.status = HTTP_CODE_400_BAD_REQUEST;

        return {
          error_message: checkout_result.error_message,
        };
      }

      event.res.status = HTTP_CODE_200_OK;

      return {
        checkout_url: checkout_result.checkout_url,
      };
    } else {
      const {
        rows: collection_list,
      } = await executeSQLQuery(
        `SELECT collections.id, collections.title, collections.type, collection_prices.amount
        FROM collections
        LEFT JOIN collection_prices
          ON collection_prices.collection_id = collections.id
          AND collection_prices.currency = $2
        WHERE collections.id = $1`,
        [collection_id, currency]
      );

      const collection = collection_list.at(0);

      if (collection === undefined) {
        event.res.status = HTTP_CODE_400_BAD_REQUEST;

        return {
          error_message: 'error_invalid_collection_id',
        };
      }

      if (collection.type !== COLLECTION_TYPE_PUBLIC_PAYWALLLED) {
        event.res.status = HTTP_CODE_400_BAD_REQUEST;

        return {
          error_message: 'error_collection_not_paywalled',
        };
      }

      if (!collection.amount || collection.amount <= 0) {
        event.res.status = HTTP_CODE_400_BAD_REQUEST;

        return {
          error_message: 'error_collection_price_not_set',
        };
      }

      const {
        rows: payment_row_list,
      } = await executeSQLQuery(
        `SELECT 1 FROM stripe_payments
        WHERE user_id = $1 AND collection_id = $2
        LIMIT 1`,
        [authenticated_user.id, collection_id]
      );

      if (payment_row_list.length > 0) {
        event.res.status = HTTP_CODE_400_BAD_REQUEST;

        return {
          error_message: 'error_collection_already_purchased',
        };
      }

      if (
        !user_has_premium_status(authenticated_user)
        && authenticated_user.status !== USER_STATUS_ADMIN
      ) {
        event.res.status = HTTP_CODE_403_FORBIDDEN;

        return {
          error_message: 'error_premium_required_to_buy_collection',
        };
      }

      product_name = collection.title;

      return_page_url = `${site_origin}/pc/${collection_id}`;
      session_metadata = {
        collection_id,
        payment_type: COLLECTION_PAYMENT_TYPE,
      };
      unit_amount_in_cents = collection.amount * 100;
    }

    const checkout_result = await createStripeCheckout({
      client_reference_id: authenticated_user.id,
      currency: currency.toLowerCase(),
      customer_email: user.email,
      locale,
      mode: 'payment',
      product_name,
      return_page_url,
      session_metadata,
      stripe_secret_api_key: STRIPE_SECRET_API_KEY,
      unit_amount_in_cents,
    });

    if (checkout_result.error_message) {
      event.res.status = HTTP_CODE_400_BAD_REQUEST;

      return {
        error_message: checkout_result.error_message,
      };
    }

    event.res.status = HTTP_CODE_200_OK;

    return {
      checkout_url: checkout_result.checkout_url,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
