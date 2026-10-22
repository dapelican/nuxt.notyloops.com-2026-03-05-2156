import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../helpers/http-status-codes.js';

import {
  defineEventHandler,
  readBody,
} from 'h3';

import Stripe from 'stripe';

import {
  executeSQLQuery,
} from '../../database/query.js';

import {
  handleBackendError,
} from '../../helpers/handle-backend-error.js';

import {
  verifySessionAndReturnUser,
} from '../../helpers/verify-session-and-return-user.js';

const buildSiteOrigin = (locale, domain) => {
  const protocol = domain.includes('localhost') ? 'http' : 'https';

  let proper_domain = (locale === 'fr')
    ? `fr.${domain}`
    : `www.${domain}`;

  return `${protocol}://${proper_domain}`;
};

export default defineEventHandler(async (event) => {
  try {
    const user = await verifySessionAndReturnUser(event);

    if (user === null) {
      event.res.status = HTTP_CODE_401_UNAUTHORIZED;

      return {
        error_message: 'error_unauthorized',
      };
    }

    const {
      STRIPE_SECRET_API_KEY,
      public: { domain },
    } = useRuntimeConfig();

    if (!STRIPE_SECRET_API_KEY) {
      event.res.status = HTTP_CODE_400_BAD_REQUEST;

      return {
        error_message: 'stripe_not_configured',
      };
    }

    const body = await readBody(event);
    const locale = body?.locale === 'fr' ? 'fr' : 'en';
    const site_origin = buildSiteOrigin(locale, domain);

    const {
      rows: subscription_row_list,
    } = await executeSQLQuery(
      `SELECT stripe_customer_id
      FROM stripe_subscriptions
      WHERE user_id = $1`,
      [user.id]
    );

    const subscription_row = subscription_row_list.at(0);

    if (subscription_row === undefined || !subscription_row.stripe_customer_id) {
      event.res.status = HTTP_CODE_400_BAD_REQUEST;

      return {
        error_message: 'error_subscription_not_found',
      };
    }

    const stripe_client = new Stripe(STRIPE_SECRET_API_KEY);

    const portal_session = await stripe_client.billingPortal.sessions.create({
      customer: subscription_row.stripe_customer_id,
      locale,
      return_url: `${site_origin}/account/payments?billing_portal=return`,
    });

    event.res.status = HTTP_CODE_200_OK;

    return {
      portal_url: portal_session.url,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
