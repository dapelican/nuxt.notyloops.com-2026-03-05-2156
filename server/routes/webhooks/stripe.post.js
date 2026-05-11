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
  handleBackendError,
} from '../../helpers/handle-backend-error.js';

import {
  DateTime,
} from 'luxon';

import Stripe from 'stripe';
/* eslint-enable sort-imports */

const CHECKOUT_SESSION_COMPLETED = 'checkout.session.completed';

const PREMIUM_ACCESS_PAYMENT_LINK_ID_LIST = [
  'test_aFaeVdb1scYQ2pq4efc3m00',
];

const finish_checkout_session_completed_processing = async ({
  customer_id,
  payment_link_id,
  amount_paid,
}) => {
  const {
    rows: user_list,
  } = await executeSQLQuery(
    'SELECT * FROM users WHERE id = $1',
    [customer_id]
  );

  const user = user_list.at(0);

  const new_premium_status_expiration_date = user.premium_status_expiration_date
    ? DateTime.fromISO(user.premium_status_expiration_date)
        .plus({ years: 1 })
        .toISO()
    : DateTime.utc().plus({ years: 1 }).toISO();

  if (PREMIUM_ACCESS_PAYMENT_LINK_ID_LIST.includes(payment_link_id)) {
    await Promise.all([
      executeSQLQuery(
        'UPDATE users SET premium_status_expiration_date = $1 WHERE id = $2',
        [new_premium_status_expiration_date, customer_id]
      ),
      executeSQLQuery(
        'INSERT INTO payments (payment_type, user_id, price_in_cents) VALUES ($1, $2, $3)',
        ['premium_access', customer_id, amount_paid]
      ),
    ]);
  } else {
    const {
      rows: collection_list,
    } = await executeSQLQuery(
      'SELECT id FROM collections WHERE stripe_payment_link_id = $1',
      [payment_link_id]
    );

    const collection = collection_list.at(0);

    if (collection === undefined) {
      return;
    }

    await executeSQLQuery(
      `INSERT INTO payments (payment_type, user_id, collection_id, price_in_cents)
      VALUES ($1, $2, $3, $4)`,
      ['premium_notes', customer_id, collection.id, amount_paid]
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
        session_from_event.id
      );

      const payment_link_id = session.payment_link ?? null;
      const amount_paid = session.amount_total;
      const customer_id = session.client_reference_id;

      const post_ack_processing = finish_checkout_session_completed_processing({
        customer_id,
        payment_link_id,
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
