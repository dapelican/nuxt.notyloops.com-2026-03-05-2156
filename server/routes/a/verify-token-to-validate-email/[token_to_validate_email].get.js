'use strict';

import {
  EMAIL_VALIDATION_TOKEN_DURATION_IN_HOURS,
  USER_TOKEN_VALIDATE_EMAIL,
} from '../../../helpers/constants.js';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
} from '../../../helpers/http-status-codes.js';

import {
  defineEventHandler,
  getRouterParam,
  setResponseStatus,
} from 'h3';

import {
  DateTime,
} from 'luxon';

import {
  executeSQLQuery,
} from '../../../database/query.js';

import {
  handleBackendError,
} from '../../../helpers/handle-backend-error.js';

import {
  validateUUID,
} from '../../../helpers/validators.js';

const getEmailTokenDurationHoursAgo = () => DateTime
  .now()
  .minus({
    hours: EMAIL_VALIDATION_TOKEN_DURATION_IN_HOURS,
  })
  .toISO();

export default defineEventHandler(async (event) => {
  try {
    const token = await getRouterParam(event, 'token_to_validate_email');

    if (!token || !validateUUID(token)) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_email_token',
      };
    }

    const {
      rows: active_user_token_list,
    } = await executeSQLQuery(
      `SELECT user_id FROM user_email_tokens
      WHERE token = $1 AND created_at > $2::timestamptz
      AND blacklisted = $3 AND usage = $4`,
      [
        token,
        getEmailTokenDurationHoursAgo(),
        false,
        USER_TOKEN_VALIDATE_EMAIL,
      ]
    );

    if (active_user_token_list.length === 0) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_email_token',
      };
    }

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT email FROM users WHERE id = $1',
      [active_user_token_list.at(0).user_id]
    );

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      email: user_list.at(0).email,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
