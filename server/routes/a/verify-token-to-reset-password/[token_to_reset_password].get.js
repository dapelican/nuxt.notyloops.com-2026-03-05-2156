'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
} from '../../../helpers/http-status-codes.js';

import {
  PASSWORD_RESET_TOKEN_DURATION_IN_HOURS,
  USER_TOKEN_RESET_PASSWORD,
} from '../../../helpers/constants.js';

import {
  defineEventHandler,
  getRouterParam,
  setResponseStatus,
} from 'h3';

import {
  executeSQLQuery,
} from '../../../database/query.js';

import {
  getActiveEmailTokenUserId,
} from '../../../helpers/get-active-email-token-user-id.js';

import {
  handleBackendError,
} from '../../../helpers/handle-backend-error.js';

import {
  validateUUID,
} from '../../../helpers/validators.js';

export default defineEventHandler(async (event) => {
  try {
    const token = await getRouterParam(event, 'token_to_reset_password');

    if (!token || !validateUUID(token)) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_email_token',
      };
    }

    const token_user_id = await getActiveEmailTokenUserId({
      max_age_hours: PASSWORD_RESET_TOKEN_DURATION_IN_HOURS,
      token,
      usage: USER_TOKEN_RESET_PASSWORD,
    });

    if (!token_user_id) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_email_token',
      };
    }

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT email FROM users WHERE id = $1',
      [token_user_id]
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
