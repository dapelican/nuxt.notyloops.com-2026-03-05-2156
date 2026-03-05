'use strict';

import {
  EMAIL_VALIDATION_TOKEN_DURATION_IN_HOURS,
  USER_STATUS_UNVERIFIED,
  USER_TOKEN_VALIDATE_EMAIL,
} from '../../helpers/constants.js';

import {
  HTTP_CODE_201_CREATED,
  HTTP_CODE_400_BAD_REQUEST,
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
  DateTime,
} from 'luxon';

import {
  executeSQLQuery,
} from '../../database/query.js';

import {
  getSubdomain,
} from '../../helpers/get-subdomain.js';

import {
  handleBackendError,
} from '../../helpers/handle-backend-error.js';

import {
  sendEmail,
} from '../../services/smtp2go/send-email.js';

import {
  v4 as uuidv4,
} from 'uuid';

import {
  verifyEmail,
} from '../../services/emailable/verify-email.js';

const getEmailTokenDurationHoursAgo = () => DateTime
  .now()
  .minus({
    hours: EMAIL_VALIDATION_TOKEN_DURATION_IN_HOURS,
  })
  .toISO();

const sendTokenToValidateEmail = async (user, subdomain) => {
  const uuid = uuidv4();

  try {
    const uuid = uuidv4();

    await Promise.all([
      executeSQLQuery(
        `INSERT INTO user_email_tokens (user_id, token, usage)
        VALUES ($1, $2, $3)`,
        [user.id, uuid, USER_TOKEN_VALIDATE_EMAIL]
      ),
      sendEmail({
        subdomain,
        template_name: 'validate-email',
        template_params: { EMAIL_VALIDATION_TOKEN_DURATION_IN_HOURS, uuid },
        to: user.email,
      }),
    ]);
  } catch (error) {
    await executeSQLQuery(
      'DELETE FROM user_email_tokens WHERE token = $1',
      [uuid]
    );

    throw error;
  }
};

export default defineEventHandler(async (event) => {
  try {
    let {
      email,
    } = await readBody(event);

    email = email?.toLowerCase()?.trim();

    const subdomain = getSubdomain(event);

    if (
      !validateNonEmptyInputFieldList([email])
      || !validateEmail(email)
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
      [email]
    );

    if (user_list.length > 0) {
      const user = user_list.at(0);

      if (user.status !== USER_STATUS_UNVERIFIED) {
        setResponseStatus(event, HTTP_CODE_403_FORBIDDEN);

        return {
          error_message: 'error_email_already_in_use',
        };
      }

      const {
        rows: active_user_token_list,
      } = await executeSQLQuery(
        `SELECT * FROM user_email_tokens
        WHERE user_id = $1 AND created_at > $2::timestamptz
        AND blacklisted = $3 AND usage = $4`,
        [
          user_list.at(0).id,
          getEmailTokenDurationHoursAgo(),
          false,
          USER_TOKEN_VALIDATE_EMAIL,
        ]
      );

      if (active_user_token_list.length > 0) {
        setResponseStatus(event, HTTP_CODE_403_FORBIDDEN);

        return {
          error_message: 'error_email_token_already_sent',
        };
      }

      const {
        rows: inactive_user_token_list,
      } = await executeSQLQuery(
        `SELECT * FROM user_email_tokens
        WHERE user_id = $1 AND created_at < $2::timestamptz AND usage = $3`,
        [
          user_list.at(0).id,
          getEmailTokenDurationHoursAgo(),
          USER_TOKEN_VALIDATE_EMAIL,
        ]
      );

      if (inactive_user_token_list.length <= 2) {
        await sendTokenToValidateEmail(user, subdomain);

        setResponseStatus(event, HTTP_CODE_201_CREATED);

        return {
          success: true,
        };
      }

      setResponseStatus(event, HTTP_CODE_403_FORBIDDEN);

      return {
        error_message: 'error_maximum_retries_reached',
      };
    }

    const email_is_verified = await verifyEmail(email);

    if (!email_is_verified) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_corrupt_email',
      };
    }

    const {
      rows: new_user_list,
    } = await executeSQLQuery(
      'INSERT INTO users (email, status, subdomain) VALUES ($1, $2, $3) RETURNING *',
      [email, USER_STATUS_UNVERIFIED, subdomain]
    );

    const new_user = new_user_list.at(0);

    await sendTokenToValidateEmail(new_user, subdomain);

    setResponseStatus(event, HTTP_CODE_201_CREATED);

    return {
      success: true,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
