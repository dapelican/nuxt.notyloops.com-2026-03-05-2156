'use strict';

import {
  EMAIL_VALIDATION_TOKEN_DURATION_IN_HOURS,
  USER_TOKEN_VALIDATE_EMAIL,
} from '../../helpers/constants.js';

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
} from '../../services/amazon-ses/send-email.js';

import {
  v7 as uuidv7,
} from 'uuid';

import {
  verifySessionAndReturnUser,
} from '../../helpers/verify-session-and-return-user.js';

const sendConfirmationEmail = async ({
  new_email,
  subdomain,
  uuid,
}) => {
  await sendEmail({
    subdomain,
    template_name: 'confirm-email-change',
    template_params: {
      EMAIL_VALIDATION_TOKEN_DURATION_IN_HOURS,
      uuid,
    },
    to: new_email,
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
      current_password,
      new_email,
    } = await readBody(event);

    new_email = new_email?.toLowerCase()?.trim();
    current_password = current_password?.trim();

    if (
      !validateNonEmptyInputFieldList([new_email])
      || !validateEmail(new_email)
    ) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_email',
      };
    }

    if (!validateNonEmptyInputFieldList([current_password])) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_password',
      };
    }

    const {
      rows: credential_list,
    } = await executeSQLQuery(
      'SELECT password, subdomain FROM users WHERE id = $1',
      [user.id]
    );

    const existing_user = credential_list.at(0);

    const valid_password = existing_user?.password
      ? await bcrypt.compare(current_password, existing_user.password)
      : false;

    if (!valid_password) {
      setResponseStatus(event, HTTP_CODE_401_UNAUTHORIZED);

      return {
        error_message: 'error_wrong_credentials',
      };
    }

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT id FROM users WHERE email = $1',
      [new_email]
    );

    if (user_list.length > 0) {
      setResponseStatus(event, HTTP_CODE_200_OK);

      return {
        success: true,
      };
    }

    await executeSQLQuery(
      `UPDATE user_email_tokens
      SET blacklisted = true
      WHERE user_id = $1
      AND usage = $2
      AND pending_email IS NOT NULL
      AND blacklisted = false`,
      [user.id, USER_TOKEN_VALIDATE_EMAIL]
    );

    const uuid = uuidv7();

    await executeSQLQuery(
      `INSERT INTO user_email_tokens (user_id, token, usage, pending_email)
      VALUES ($1, $2, $3, $4)`,
      [user.id, uuid, USER_TOKEN_VALIDATE_EMAIL, new_email]
    );

    try {
      await sendConfirmationEmail({
        new_email,
        subdomain: existing_user.subdomain,
        uuid,
      });
    } catch {
      await executeSQLQuery(
        'DELETE FROM user_email_tokens WHERE token = $1',
        [uuid]
      );

      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_email_token_not_sent',
      };
    }

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      success: true,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
