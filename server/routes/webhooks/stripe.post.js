'use strict';

/* eslint-disable sort-imports */
import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_500_INTERNAL_SERVER_ERROR,
} from '../../helpers/http-status-codes.js';

import {
  defineEventHandler,
  getHeader,
  readRawBody,
  setResponseStatus,
} from 'h3';

import {
  executeSQLTransaction,
} from '../../database/query.js';

import {
  PREMIUM_PAYMENT_TYPE,
} from '../../helpers/constants.js';

import {
  USER_STATUS_PREMIUM,
} from '#shared/utils/constants.js';

import {
  handleBackendError,
} from '../../helpers/handle-backend-error.js';

import Stripe from 'stripe';
/* eslint-enable sort-imports */

const CHECKOUT_SESSION_ASYNC_PAYMENT_SUCCEEDED = 'checkout.session.async_payment_succeeded';
const CHECKOUT_SESSION_COMPLETED = 'checkout.session.completed';
const PAYMENT_STATUS_PAID = 'paid';

const GRANT_CHECKOUT_SESSION_EVENT_TYPES = new Set([
  CHECKOUT_SESSION_ASYNC_PAYMENT_SUCCEEDED,
  CHECKOUT_SESSION_COMPLETED,
]);

const finish_checkout_session_completed_processing = async ({
  user_id,
  collection_id,
  payment_type,
  amount_paid,
  stripe_checkout_session_id,
}) => {
  if (!stripe_checkout_session_id) {
    throw new Error('missing_stripe_checkout_session_id');
  }

  await executeSQLTransaction(async (client) => {
    if (payment_type === PREMIUM_PAYMENT_TYPE) {
      const inserted = await client.query(
        `INSERT INTO payments (payment_type, user_id, price_in_cents, stripe_checkout_session_id)
        VALUES ($1, $2, $3, $4)
        ON CONFLICT (stripe_checkout_session_id) DO NOTHING
        RETURNING id`,
        [PREMIUM_PAYMENT_TYPE, user_id, amount_paid, stripe_checkout_session_id]
      );

      if (inserted.rowCount === 0) {
        return;
      }

      const updated = await client.query(
        `UPDATE users
        SET status = $1,
            premium_status_expiration_date = COALESCE(premium_status_expiration_date, now()) + interval '1 year'
        WHERE id = $2`,
        [USER_STATUS_PREMIUM, user_id]
      );

      if (updated.rowCount === 0) {
        throw new Error('premium_user_not_found');
      }

      return;
    }

    await client.query(
      `INSERT INTO payments (payment_type, user_id, collection_id, price_in_cents, stripe_checkout_session_id)
      VALUES ($1, $2, $3, $4, $5)
      ON CONFLICT (stripe_checkout_session_id) DO NOTHING`,
      ['premium_notes', user_id, collection_id, amount_paid, stripe_checkout_session_id]
    );
  });
};

export {
  finish_checkout_session_completed_processing,
};

export default defineEventHandler(async (event) => {
  try {
    const {
      STRIPE_ENDPOINT_SECRET,
      STRIPE_SECRET_API_KEY,
    } = useRuntimeConfig();

    if (!STRIPE_SECRET_API_KEY || !STRIPE_ENDPOINT_SECRET) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'stripe_not_configured',
      };
    }

    const raw_body = await readRawBody(event, 'utf8');
    const stripe_signature = getHeader(event, 'stripe-signature');

    if (!stripe_signature || raw_body === undefined || raw_body === null) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'invalid_webhook_request',
      };
    }

    const stripe_client = new Stripe(STRIPE_SECRET_API_KEY);

    let stripe_event;

    try {
      stripe_event = stripe_client.webhooks.constructEvent(
        raw_body,
        stripe_signature,
        STRIPE_ENDPOINT_SECRET
      );
    } catch {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'invalid_stripe_signature',
      };
    }

    if (GRANT_CHECKOUT_SESSION_EVENT_TYPES.has(stripe_event.type)) {
      const session_from_event = stripe_event.data.object;
      const session = await stripe_client.checkout.sessions.retrieve(
        session_from_event.id);

      if (session.payment_status !== PAYMENT_STATUS_PAID) {
        if (stripe_event.type === CHECKOUT_SESSION_ASYNC_PAYMENT_SUCCEEDED) {
          setResponseStatus(event, HTTP_CODE_500_INTERNAL_SERVER_ERROR);

          return {
            error_message: 'checkout_session_not_paid',
          };
        }

        setResponseStatus(event, HTTP_CODE_200_OK);

        return {
          received: true,
        };
      }

      const collection_id = session.metadata?.collection_id ?? null;
      const payment_type = session.metadata?.payment_type ?? null;
      const amount_paid = session.amount_total;
      const user_id = session.client_reference_id;

      await finish_checkout_session_completed_processing({
        user_id,
        collection_id,
        payment_type,
        amount_paid,
        stripe_checkout_session_id: session.id,
      });

      setResponseStatus(event, HTTP_CODE_200_OK);

      return {
        received: true,
      };
    }

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      received: true,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
