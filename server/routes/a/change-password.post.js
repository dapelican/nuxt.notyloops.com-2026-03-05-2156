'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../helpers/http-status-codes.js';

import {
  defineEventHandler,
  readBody,
} from 'h3';

import {
  validateEmail,
  validateNonEmptyInputFieldList,
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

import {
  verifySessionAndReturnUser,
} from '../../helpers/verify-session-and-return-user.js';

const SALT_ROUND = 10;

const sendEmailToNotifyPasswordChange = async (user) => {
  await sendEmail({
    subdomain: user.subdomain,
    template_name: 'password-changed',
    to: user.email,
  });
};

export default defineEventHandler(async (event) => {
  try {
    const user = await verifySessionAndReturnUser(event);

    if (user === null) {
      event.res.status = HTTP_CODE_401_UNAUTHORIZED;

      return {
        error_message: 'error_unauthorized',
      };
    }

    const body = await readBody(event);
    const email = body.email;
    const current_password = body.current_password?.trim();
    const new_password_1 = body.new_password_1?.trim();
    const new_password_2 = body.new_password_2?.trim();

    if (!validateEmail(email)) {
      event.res.status = HTTP_CODE_400_BAD_REQUEST;

      return {
        error_message: 'error_invalid_email',
      };
    }

    if (
      !validateNonEmptyInputFieldList([current_password, new_password_1, new_password_2])
      || new_password_1 !== new_password_2
    ) {
      event.res.status = HTTP_CODE_400_BAD_REQUEST;

      return {
        error_message: 'error_invalid_password',
      };
    }

    if (email !== user.email) {
      event.res.status = HTTP_CODE_401_UNAUTHORIZED;

      return {
        error_message: 'error_unauthorized',
      };
    }

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );

    const existing_user = user_list.at(0);

    const valid_password = await bcrypt.compare(current_password, existing_user.password);

    if (!valid_password) {
      event.res.status = HTTP_CODE_401_UNAUTHORIZED;

      return {
        error_message: 'error_wrong_credentials',
      };
    }

    const salt = await bcrypt.genSalt(SALT_ROUND);
    const bcrypt_password = await bcrypt.hash(new_password_1, salt);

    await executeSQLQuery(
      'UPDATE users SET password = $1 WHERE email = $2',
      [bcrypt_password, email]
    );

    await executeSQLQuery(
      `UPDATE user_session_tokens SET blacklisted = true WHERE user_id = $1`,
      [existing_user.id]
    );

    await sendEmailToNotifyPasswordChange(existing_user);

    event.res.status = HTTP_CODE_200_OK;

    return {
      success: true,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
