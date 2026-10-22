import {
  HTTP_CODE_200_OK,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../helpers/http-status-codes.js';

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
      rows: subscription_row_list,
    } = await executeSQLQuery(
      `SELECT ss.subscription_cancel_at_period_end
      FROM users u
      LEFT JOIN stripe_subscriptions ss ON ss.user_id = u.id
      WHERE u.id = $1`,
      [user.id]
    );

    event.res.status = HTTP_CODE_200_OK;

    return {
      ...user,
      subscription_cancel_at_period_end: subscription_row_list.at(0)?.subscription_cancel_at_period_end ?? false,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
