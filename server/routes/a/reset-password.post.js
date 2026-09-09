'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
} from '../../helpers/http-status-codes.js';

import {
  PASSWORD_RESET_TOKEN_DURATION_IN_HOURS,
  USER_TOKEN_RESET_PASSWORD,
} from '../../helpers/constants.js';

import {
  defineEventHandler,
  readBody,
  setResponseStatus,
} from 'h3';

import {
  validateEmail,
  validateNonEmptyInputFieldList,
  validateUUID,
} from '../../helpers/validators.js';

import bcrypt from 'bcrypt';

import {
  executeSQLQuery,
} from '../../database/query.js';

import {
  getActiveEmailTokenUserId,
} from '../../helpers/get-active-email-token-user-id.js';

import {
  handleBackendError,
} from '../../helpers/handle-backend-error.js';

import {
  sendEmail,
} from '../../services/smtp2go/send-email.js';

const SALT_ROUND = 10;

const sendEmailToNotifyPasswordReset = async (user) => {
  await sendEmail({
    subdomain: user.subdomain,
    template_name: 'password-reset',
    to: user.email,
  });
};

export default defineEventHandler(async (event) => {
  try {
    let {
      email,
      password_1,
      password_2,
      token,
    } = await readBody(event);

    email = email?.toLowerCase()?.trim();
    password_1 = password_1?.trim();
    password_2 = password_2?.trim();

    if (
      !validateNonEmptyInputFieldList([email])
      || !validateEmail(email)
    ) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_email',
      };
    }

    if (!token || !validateUUID(token)) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_email_token',
      };
    }

    if (
      !validateNonEmptyInputFieldList([password_1, password_2])
      || password_1 !== password_2
    ) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_password',
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
      'SELECT * FROM users WHERE id = $1',
      [token_user_id]
    );

    const user = user_list.at(0);

    if (!user || user.email.toLowerCase() !== email) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_email_token',
      };
    }

    const salt = await bcrypt.genSalt(SALT_ROUND);
    const bcrypt_password = await bcrypt.hash(password_1, salt);

    await executeSQLQuery(
      `UPDATE users
      SET password = $1
      WHERE id = $2`,
      [bcrypt_password, user.id]
    );

    await executeSQLQuery(
      `UPDATE user_email_tokens
      SET blacklisted = true
      WHERE token = $1 AND usage = $2`,
      [token, USER_TOKEN_RESET_PASSWORD]
    );

    await executeSQLQuery(
      `UPDATE user_session_tokens SET blacklisted = true WHERE user_id = $1`,
      [user.id]
    );

    await sendEmailToNotifyPasswordReset(user);

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      success: true,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
