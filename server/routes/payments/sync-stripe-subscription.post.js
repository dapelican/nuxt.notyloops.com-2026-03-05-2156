import {
  HTTP_CODE_200_OK,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../helpers/http-status-codes.js';

import {
  applyEntitledSubscription,
  endSubscription,
} from '../../services/stripe/subscription-state.js';

import Stripe from 'stripe';

import {
  defineEventHandler,
} from 'h3';

import {
  executeSQLQuery,
} from '../../database/query.js';

import {
  handleBackendError,
} from '../../helpers/handle-backend-error.js';

import {
  verifySessionAndReturnUser,
} from '../../helpers/verify-session-and-return-user.js';

const isMissingStripeSubscription = (error) => {
  return error?.code === 'resource_missing'
    || error?.statusCode === 404;
};

const subscriptionHasEnded = (subscription) => {
  return !subscription
    || subscription.status === 'canceled'
    || subscription.status === 'incomplete_expired';
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
    } = useRuntimeConfig();

    if (!STRIPE_SECRET_API_KEY) {
      event.res.status = HTTP_CODE_200_OK;

      return {
        synced: false,
      };
    }

    const {
      rows: subscription_row_list,
    } = await executeSQLQuery(
      `SELECT stripe_subscription_id
      FROM stripe_subscriptions
      WHERE user_id = $1`,
      [user.id]
    );

    const stripe_subscription_id = subscription_row_list.at(0)?.stripe_subscription_id;

    if (!stripe_subscription_id) {
      event.res.status = HTTP_CODE_200_OK;

      return {
        synced: false,
      };
    }

    const stripe_client = new Stripe(STRIPE_SECRET_API_KEY);

    let subscription;

    try {
      subscription = await stripe_client.subscriptions.retrieve(stripe_subscription_id);
    } catch (error) {
      if (!isMissingStripeSubscription(error)) {
        event.res.status = HTTP_CODE_200_OK;

        return {
          synced: false,
        };
      }

      await endSubscription({
        id: stripe_subscription_id,
      });

      event.res.status = HTTP_CODE_200_OK;

      return {
        synced: true,
      };
    }

    if (subscriptionHasEnded(subscription)) {
      await endSubscription({
        id: subscription?.id || stripe_subscription_id,
      });

      event.res.status = HTTP_CODE_200_OK;

      return {
        synced: true,
      };
    }

    await applyEntitledSubscription(subscription);

    event.res.status = HTTP_CODE_200_OK;

    return {
      synced: true,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
