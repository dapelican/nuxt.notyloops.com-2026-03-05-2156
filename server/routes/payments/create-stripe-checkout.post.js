'use strict';

/* eslint-disable sort-imports */
import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../helpers/http-status-codes.js';

import {
  defineEventHandler,
  readBody,
  setResponseStatus,
} from 'h3';

import {
  executeSQLQuery,
} from '../../database/query.js';

import {
  COLLECTION_PAYMENT_TYPE,
  PREMIUM_PAYMENT_TYPE,
} from '../../helpers/constants.js';

import {
  handleBackendError,
} from '../../helpers/handle-backend-error.js';

import {
  verifySessionAndReturnUser,
} from '../../helpers/verify-session-and-return-user.js';

import {
  COLLECTION_TYPE_PUBLIC_PAYWALLLED,
  EUR_TO_USD_EXCHANGE_RATE,
  PREMIUM_ACCESS_PRE_TAX_AMOUNT_IN_CENTS,
} from '#shared/utils/constants.js';

import {
  createStripeCheckout,
} from '../../services/stripe/create-checkout.js';

import { z } from 'zod';
/* eslint-enable sort-imports */

const request_body_schema = z.object({
  collection_id: z.uuid().nullable().optional(),
  locale: z.enum(['en', 'fr']).optional(),
});

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
      setResponseStatus(event, HTTP_CODE_401_UNAUTHORIZED);

      return {
        error_message: 'error_unauthorized',
      };
    }

    const body = await readBody(event);

    const body_parse_result = request_body_schema.safeParse(body);

    if (!body_parse_result.success) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_checkout_input',
      };
    }

    const {
      collection_id,
      locale,
    } = body_parse_result.data;

    const {
      STRIPE_SECRET_API_KEY,
      public: { domain },
    } = useRuntimeConfig();

    if (!STRIPE_SECRET_API_KEY) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

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
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

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
      product_name = (locale === 'fr')
        ? 'Accès premium'
        : 'Premium access';
      return_page_url = `${site_origin}/account/information`;
      session_metadata = {
        payment_type: PREMIUM_PAYMENT_TYPE,
      };
      unit_amount_in_cents = (locale === 'fr')
        ? PREMIUM_ACCESS_PRE_TAX_AMOUNT_IN_CENTS
        : Math.ceil(PREMIUM_ACCESS_PRE_TAX_AMOUNT_IN_CENTS * EUR_TO_USD_EXCHANGE_RATE);
    } else {
      const {
        rows: collection_list,
      } = await executeSQLQuery(
        `SELECT id, title, type, pre_tax_price_in_cents
        FROM collections
        WHERE id = $1`,
        [collection_id]
      );

      const collection = collection_list.at(0);

      if (collection === undefined) {
        setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

        return {
          error_message: 'error_invalid_collection_id',
        };
      }

      if (collection.type !== COLLECTION_TYPE_PUBLIC_PAYWALLLED) {
        setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

        return {
          error_message: 'error_collection_not_paywalled',
        };
      }

      if (!collection.pre_tax_price_in_cents || collection.pre_tax_price_in_cents <= 0) {
        setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

        return {
          error_message: 'error_collection_price_not_set',
        };
      }

      const {
        rows: payment_row_list,
      } = await executeSQLQuery(
        `SELECT 1 FROM payments
        WHERE user_id = $1 AND collection_id = $2
        LIMIT 1`,
        [authenticated_user.id, collection_id]
      );

      if (payment_row_list.length > 0) {
        setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

        return {
          error_message: 'error_collection_already_purchased',
        };
      }

      product_name = collection.title;

      return_page_url = `${site_origin}/pc/${collection_id}`;
      session_metadata = {
        collection_id,
        payment_type: COLLECTION_PAYMENT_TYPE,
      };
      unit_amount_in_cents = (locale === 'fr')
        ? collection.pre_tax_price_in_cents
        : Math.ceil(collection.pre_tax_price_in_cents * EUR_TO_USD_EXCHANGE_RATE);
    }

    const checkout_result = await createStripeCheckout({
      client_reference_id: authenticated_user.id,
      currency: (locale === 'fr')
        ? 'eur'
        : 'usd',
      customer_email: user.email,
      locale,
      product_name,
      return_page_url,
      session_metadata,
      stripe_secret_api_key: STRIPE_SECRET_API_KEY,
      unit_amount_in_cents,
    });

    if (checkout_result.error_message) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: checkout_result.error_message,
      };
    }

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      checkout_url: checkout_result.checkout_url,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
