'use strict';

import {
  EMAIL_VALIDATION_TOKEN_DURATION_IN_HOURS,
  USER_TOKEN_CONNECT,
  USER_TOKEN_VALIDATE_EMAIL,
} from '../../helpers/constants.js';

import {
  HTTP_CODE_201_CREATED,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_403_FORBIDDEN,
} from '../../helpers/http-status-codes.js';

import {
  USER_STATUS_FREE,
  USER_STATUS_UNVERIFIED,
} from '#shared/utils/constants.js';

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

import { v7 as uuidv7 } from 'uuid';

const SALT_ROUND = 10;

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

    if (
      !validateNonEmptyInputFieldList([password_1, password_2])
      || password_1 !== password_2
    ) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_password',
      };
    }

    if (!token || !validateUUID(token)) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_email_token',
      };
    }

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );

    if (user_list.length === 0) {
      setResponseStatus(event, HTTP_CODE_403_FORBIDDEN);

      return {
        error_message: 'error_no_user_found',
      };
    }

    const user = user_list.at(0);

    const token_user_id = await getActiveEmailTokenUserId({
      max_age_hours: EMAIL_VALIDATION_TOKEN_DURATION_IN_HOURS,
      token,
      usage: USER_TOKEN_VALIDATE_EMAIL,
    });

    if (!token_user_id || token_user_id !== user.id) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_email_token',
      };
    }

    const salt = await bcrypt.genSalt(SALT_ROUND);
    const bcrypt_password = await bcrypt.hash(password_1, salt);

    const {
      rows: updated_user_list,
    } = await executeSQLQuery(
      `UPDATE users
      SET password = $1,
      status = $2
      WHERE id = $3
      AND status = $4
      AND password IS NULL
      RETURNING *`,
      [
        bcrypt_password,
        USER_STATUS_FREE,
        user.id,
        USER_STATUS_UNVERIFIED,
      ]
    );

    const updated_user = updated_user_list.at(0);

    if (!updated_user) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_email_token',
      };
    }

    const session_token = uuidv7();
    const session_max_age_days = Number(useRuntimeConfig().SESSION_MAX_AGE_DAYS);

    const { rows: session_token_list } = await executeSQLQuery(
      `INSERT INTO user_session_tokens (user_id, token, expires_at)
      VALUES ($1, $2, now() + interval '1 day' * $3)
      RETURNING id`,
      [updated_user.id, session_token, session_max_age_days]
    );

    await setUserSession(event, {
      user: { id: updated_user.id },
      session_token_id: session_token_list.at(0).id,
    });

    await executeSQLQuery(
      `UPDATE user_email_tokens
      SET blacklisted = true
      WHERE token = $1 AND usage = $2`,
      [token, USER_TOKEN_VALIDATE_EMAIL]
    );

    await executeSQLQuery(
      `INSERT INTO user_email_tokens (user_id, usage)
      VALUES ($1, $2)`,
      [
        updated_user.id,
        USER_TOKEN_CONNECT,
      ]
    );

    sendEmail({
      subdomain: updated_user.subdomain,
      template_name: 'admin-new-sign-up',
      template_params: {
        email: updated_user.email,
        id: updated_user.id,
        subdomain: updated_user.subdomain,
      },
      to: 'support@notyloops.com',
    });

    setResponseStatus(event, HTTP_CODE_201_CREATED);

    return {
      success: true,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
