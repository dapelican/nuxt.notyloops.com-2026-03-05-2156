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
  getActiveEmailToken,
} from '../../../helpers/get-active-email-token-user-id.js';

import {
  handleBackendError,
} from '../../../helpers/handle-backend-error.js';

import {
  validateUUID,
} from '../../../helpers/validators.js';

export default defineEventHandler(async (event) => {
  try {
    const token = await getRouterParam(event, 'token');

    if (!token || !validateUUID(token)) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_email_token',
      };
    }

    const active_token = await getActiveEmailToken({
      max_age_hours: EMAIL_VALIDATION_TOKEN_DURATION_IN_HOURS,
      pending_email: 'present',
      token,
      usage: USER_TOKEN_VALIDATE_EMAIL,
    });

    if (!active_token) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_email_token',
      };
    }

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      pending_email: active_token.pending_email,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
