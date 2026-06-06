'use strict';

/* eslint-disable sort-imports */
import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
} from '../../helpers/http-status-codes.js';

import {
  defineEventHandler,
  getHeader,
  readRawBody,
  setResponseStatus,
} from 'h3';

import {
  executeSQLQuery,
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

import {
  DateTime,
} from 'luxon';

import Stripe from 'stripe';
/* eslint-enable sort-imports */

const CHECKOUT_SESSION_COMPLETED = 'checkout.session.completed';

const finish_checkout_session_completed_processing = async ({
  user_id,
  collection_id,
  payment_type,
  amount_paid,
}) => {
  const {
    rows: user_list,
  } = await executeSQLQuery(
    'SELECT * FROM users WHERE id = $1',
    [user_id]
  );

  const user = user_list.at(0);

  const new_premium_status_expiration_date = user.premium_status_expiration_date
    ? DateTime.fromJSDate(user.premium_status_expiration_date)
        .plus({ years: 1 })
        .toISO()
    : DateTime.utc().plus({ years: 1 }).toISO();

  if (
    payment_type === PREMIUM_PAYMENT_TYPE
  ) {
    await Promise.all([
      executeSQLQuery(
        'UPDATE users SET status = $1, premium_status_expiration_date = $2 WHERE id = $3',
        [USER_STATUS_PREMIUM, new_premium_status_expiration_date, user_id]
      ),
      executeSQLQuery(
        'INSERT INTO payments (payment_type, user_id, price_in_cents) VALUES ($1, $2, $3)',
        [PREMIUM_PAYMENT_TYPE, user_id, amount_paid]
      ),
    ]);
  } else {
    await executeSQLQuery(
      `INSERT INTO payments (payment_type, user_id, collection_id, price_in_cents)
      VALUES ($1, $2, $3, $4)`,
      ['premium_notes', user_id, collection_id, amount_paid]
    );
  }
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

    if (stripe_event.type === CHECKOUT_SESSION_COMPLETED) {
      const session_from_event = stripe_event.data.object;
      const session = await stripe_client.checkout.sessions.retrieve(
        session_from_event.id);

      const collection_id = session.metadata?.collection_id ?? null;
      const payment_type = session.metadata?.payment_type ?? null;
      const amount_paid = session.amount_total;
      const user_id = session.client_reference_id;

      const post_ack_processing = finish_checkout_session_completed_processing({
        user_id,
        collection_id,
        payment_type,
        amount_paid,
      });

      post_ack_processing.catch((error) => {
        console.error('stripe_webhook_post_ack_processing_failed', error);
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
