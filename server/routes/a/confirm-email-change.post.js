'use strict';

import {
  EMAIL_VALIDATION_TOKEN_DURATION_IN_HOURS,
  USER_TOKEN_VALIDATE_EMAIL,
} from '../../helpers/constants.js';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_403_FORBIDDEN,
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
  getActiveEmailToken,
} from '../../helpers/get-active-email-token-user-id.js';

import {
  handleBackendError,
} from '../../helpers/handle-backend-error.js';

import {
  sendEmail,
} from '../../services/amazon-ses/send-email.js';

import {
  validateUUID,
} from '../../helpers/validators.js';

const sendEmailToNotifyEmailChange = async (user, previous_email, new_email) => {
  await sendEmail({
    subdomain: user.subdomain,
    template_name: 'email-changed',
    template_params: { new_email },
    to: previous_email,
  });
};

const blacklistToken = async (token) => {
  await executeSQLQuery(
    `UPDATE user_email_tokens
    SET blacklisted = true
    WHERE token = $1 AND usage = $2`,
    [token, USER_TOKEN_VALIDATE_EMAIL]
  );
};

export default defineEventHandler(async (event) => {
  try {
    let {
      token,
    } = await readBody(event);

    token = token?.trim();

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

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT email, subdomain FROM users WHERE id = $1',
      [active_token.user_id]
    );

    const user = user_list.at(0);
    const previous_email = user.email;

    const {
      rows: updated_user_list,
    } = await executeSQLQuery(
      `UPDATE users
      SET email = $1
      WHERE id = $2
      AND NOT EXISTS (
        SELECT 1 FROM users WHERE email = $1 AND id <> $2
      )
      RETURNING email`,
      [active_token.pending_email, active_token.user_id]
    );

    await blacklistToken(token);

    if (updated_user_list.length === 0) {
      setResponseStatus(event, HTTP_CODE_403_FORBIDDEN);

      return {
        error_message: 'error_email_already_in_use',
      };
    }

    await executeSQLQuery(
      `UPDATE user_session_tokens SET blacklisted = true WHERE user_id = $1`,
      [active_token.user_id]
    );

    await clearUserSession(event);

    await sendEmailToNotifyEmailChange(user, previous_email, active_token.pending_email);

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      success: true,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
