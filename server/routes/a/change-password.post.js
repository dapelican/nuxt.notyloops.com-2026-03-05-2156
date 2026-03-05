'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../helpers/http-status-codes.js';

import {
  defineEventHandler,
  readBody,
  setResponseStatus,
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
      setResponseStatus(event, HTTP_CODE_401_UNAUTHORIZED);

      return {
        error_message: 'error_unauthorized',
      };
    }

    const {
      email,
    } = await readBody(event);

    let {
      current_password,
      new_password_1,
      new_password_2,
    } = await readBody(event);

    current_password = current_password?.trim();
    new_password_1 = new_password_1?.trim();
    new_password_2 = new_password_2?.trim();

    if (!validateEmail(email)) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_email',
      };
    }

    if (
      !validateNonEmptyInputFieldList([current_password, new_password_1, new_password_2])
      || new_password_1 !== new_password_2
    ) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_password',
      };
    }

    if (email !== user.email) {
      setResponseStatus(event, HTTP_CODE_401_UNAUTHORIZED);

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
      setResponseStatus(event, HTTP_CODE_401_UNAUTHORIZED);

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

    await sendEmailToNotifyPasswordChange(existing_user);

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      success: true,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
