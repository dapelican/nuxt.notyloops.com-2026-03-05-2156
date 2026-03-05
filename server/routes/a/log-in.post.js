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

import {
  USER_TOKEN_CONNECT,
} from '../../helpers/constants.js';

import bcrypt from 'bcrypt';

import {
  executeSQLQuery,
} from '../../database/query.js';

import {
  handleBackendError,
} from '../../helpers/handle-backend-error.js';

import { v4 as uuidv4 } from 'uuid';

export default defineEventHandler(async (event) => {
  try {
    let {
      email,
      password,
    } = await readBody(event);

    email = email?.toLowerCase()?.trim();
    password = password?.trim();

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
      !validateNonEmptyInputFieldList([password])
    ) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_password',
      };
    }

    const {
      rows: user_list,
    } = await executeSQLQuery(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );

    if (user_list.length === 0) {
      setResponseStatus(event, HTTP_CODE_401_UNAUTHORIZED);

      return {
        error_message: 'error_wrong_credentials',
      };
    }

    const user = user_list.at(0);

    if (user.password === null) {
      setResponseStatus(event, HTTP_CODE_401_UNAUTHORIZED);

      return {
        error_message: 'error_account_not_confirmed',
      };
    }

    const valid_password = await bcrypt.compare(password, user.password);

    if (!valid_password) {
      setResponseStatus(event, HTTP_CODE_401_UNAUTHORIZED);

      return {
        error_message: 'error_wrong_credentials',
      };
    }

    const session_token = uuidv4();
    const session_max_age_days = Number(useRuntimeConfig().SESSION_MAX_AGE_DAYS);

    const { rows: session_token_list } = await executeSQLQuery(
      `INSERT INTO user_session_tokens (user_id, token, expires_at)
      VALUES ($1, $2, now() + interval '1 day' * $3)
      RETURNING id`,
      [user.id, session_token, session_max_age_days]
    );

    await setUserSession(event, {
      user: { id: user.id },
      session_token_id: session_token_list.at(0).id,
    });

    await executeSQLQuery(
      `INSERT INTO user_email_tokens (user_id, usage)
      VALUES ($1, $2)`,
      [
        user.id,
        USER_TOKEN_CONNECT,
      ]
    );

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      success: true,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
