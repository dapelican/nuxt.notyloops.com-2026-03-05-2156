'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_401_UNAUTHORIZED,
  HTTP_CODE_403_FORBIDDEN,
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

const sendEmailToNotifyEmailChange = async (user, current_email, new_email) => {
  await sendEmail({
    subdomain: user.subdomain,
    template_name: 'email-changed',
    template_params: { new_email },
    to: current_email,
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

    let {
      current_email,
      new_email,
    } = await readBody(event);

    current_email = current_email?.toLowerCase()?.trim();
    new_email = new_email?.toLowerCase()?.trim();

    if (
      !validateNonEmptyInputFieldList([current_email, new_email])
      || !validateEmail(current_email)
      || !validateEmail(new_email)
    ) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_email',
      };
    }

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT * FROM users WHERE email = $1',
      [new_email]
    );

    if (user_list.length > 0) {
      setResponseStatus(event, HTTP_CODE_403_FORBIDDEN);

      return {
        error_message: 'error_email_already_in_use',
      };
    }

    const {
      rows: updated_user_list,
    } = await executeSQLQuery(
      'UPDATE users SET email = $1 WHERE email = $2 RETURNING *',
      [new_email, current_email]
    );

    const updated_user = updated_user_list.at(0);

    await sendEmailToNotifyEmailChange(updated_user, current_email, new_email);

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      email: updated_user.email,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
