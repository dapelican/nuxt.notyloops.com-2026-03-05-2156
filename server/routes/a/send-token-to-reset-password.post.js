import {
  HTTP_CODE_201_CREATED,
  HTTP_CODE_400_BAD_REQUEST,
} from '../../helpers/http-status-codes.js';

import {
  PASSWORD_RESET_TOKEN_DURATION_IN_HOURS,
  USER_TOKEN_RESET_PASSWORD,
} from '../../helpers/constants.js';

import {
  defineEventHandler,
  readBody,
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
  handleBackendError,
} from '../../helpers/handle-backend-error.js';

import {
  sendEmail,
} from '../../services/smtp2go/send-email.js';

import {
  v7 as uuidv7,
} from 'uuid';

import {
  verifyTurnstileToken,
} from '../../helpers/verify-turnstile-token.js';

const getEmailTokenDurationHoursAgo = () => DateTime
  .now()
  .minus({
    hours: PASSWORD_RESET_TOKEN_DURATION_IN_HOURS,
  })
  .toISO();

const sendTokenToResetPassword = async (user, subdomain) => {
  const uuid = uuidv7();

  await executeSQLQuery(
    `INSERT INTO user_email_tokens (user_id, token, usage)
        VALUES ($1, $2, $3)`,
    [
      user.id,
      uuid,
      USER_TOKEN_RESET_PASSWORD,
    ]
  );

  return sendEmail({
    subdomain,
    template_name: 'reset-password-link',
    template_params: { PASSWORD_RESET_TOKEN_DURATION_IN_HOURS, uuid },
    to: user.email,
  });
};

export default defineEventHandler(async (event) => {
  try {
    let {
      email,
      turnstile_token,
    } = await readBody(event);

    const turnstile_token_is_valid = await verifyTurnstileToken(turnstile_token);

    if (!turnstile_token_is_valid) {
      event.res.status = HTTP_CODE_400_BAD_REQUEST;

      return {
        error_message: 'error_invalid_turnstile',
      };
    }

    email = email?.toLowerCase()?.trim();

    if (
      !validateNonEmptyInputFieldList([email])
      || !validateEmail(email)
    ) {
      event.res.status = HTTP_CODE_400_BAD_REQUEST;

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

    if (user_list.length === 0) {
      event.res.status = HTTP_CODE_201_CREATED;

      return {};
    }

    const user = user_list.at(0);

    const {
      rows: active_user_token_list,
    } = await executeSQLQuery(
      `SELECT * FROM user_email_tokens
        WHERE user_id = $1 AND created_at > $2::timestamptz
        AND blacklisted = $3 AND usage = $4`,
      [
        user.id,
        getEmailTokenDurationHoursAgo(),
        false,
        USER_TOKEN_RESET_PASSWORD,
      ]
    );

    if (active_user_token_list.length > 0) {
      event.res.status = HTTP_CODE_201_CREATED;

      return {};
    }

    const {
      rows: inactive_user_token_list,
    } = await executeSQLQuery(
      `SELECT * FROM user_email_tokens
        WHERE user_id = $1 AND created_at < $2::timestamptz AND usage = $3`,
      [
        user_list.at(0).id,
        getEmailTokenDurationHoursAgo(),
        USER_TOKEN_RESET_PASSWORD,
      ]
    );

    if (inactive_user_token_list.length >= 3) {
      event.res.status = HTTP_CODE_400_BAD_REQUEST;

      return {
        error_message: 'error_password_reset_limit_reached',
      };
    }

    await sendTokenToResetPassword(user, user.subdomain);

    event.res.status = HTTP_CODE_201_CREATED;

    return {};
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
