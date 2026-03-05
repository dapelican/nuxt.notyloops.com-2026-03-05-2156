'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
} from '../../helpers/http-status-codes.js';

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
    const {
      email,
      token,
    } = await readBody(event);

    let {
      password_1,
      password_2,
    } = await readBody(event);

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

    const salt = await bcrypt.genSalt(SALT_ROUND);
    const bcrypt_password = await bcrypt.hash(password_1, salt);

    await executeSQLQuery(
      `UPDATE users
      SET password = $1
      WHERE email = $2`,
      [bcrypt_password, email]
    );

    await executeSQLQuery(
      `UPDATE user_email_tokens
      SET blacklisted = true
      WHERE token = $1`,
      [token]
    );

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );

    const user = user_list.at(0);

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
