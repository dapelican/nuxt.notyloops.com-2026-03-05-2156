'use strict';

import {
  EMAIL_VALIDATION_TOKEN_DURATION_IN_HOURS,
  USER_TOKEN_VALIDATE_EMAIL,
} from '../../helpers/constants.js';

import {
  HTTP_CODE_201_CREATED,
  HTTP_CODE_400_BAD_REQUEST,
} from '../../helpers/http-status-codes.js';

import {
  USER_STATUS_UNVERIFIED,
  WEBSITE_DOMAIN_NAME,
} from '#shared/utils/constants.js';

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
  getSubdomain,
} from '../../helpers/get-subdomain.js';

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
  verifyEmail,
} from '../../services/emailable/verify-email.js';

import {
  verifyTurnstileToken,
} from '../../helpers/verify-turnstile-token.js';

const getEmailTokenDurationHoursAgo = () => DateTime
  .now()
  .minus({
    hours: EMAIL_VALIDATION_TOKEN_DURATION_IN_HOURS,
  })
  .toISO();

const sendTokenToValidateEmail = async (user, subdomain) => {
  const uuid = uuidv7();

  await executeSQLQuery(
    `INSERT INTO user_email_tokens (user_id, token, usage)
    VALUES ($1, $2, $3)`,
    [user.id, uuid, USER_TOKEN_VALIDATE_EMAIL]
  );

  try {
    await sendEmail({
      bcc: `support@${WEBSITE_DOMAIN_NAME}`,
      subdomain,
      template_name: 'validate-email',
      template_params: { EMAIL_VALIDATION_TOKEN_DURATION_IN_HOURS, uuid },
      to: user.email,
    });
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

    const subdomain = getSubdomain(event);

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

    if (user_list.length > 0) {
      const user = user_list.at(0);

      if (user.status === USER_STATUS_UNVERIFIED) {
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
            USER_TOKEN_VALIDATE_EMAIL,
          ]
        );

        if (active_user_token_list.length === 0) {
          const {
            rows: inactive_user_token_list,
          } = await executeSQLQuery(
            `SELECT * FROM user_email_tokens
            WHERE user_id = $1 AND created_at < $2::timestamptz AND usage = $3`,
            [
              user.id,
              getEmailTokenDurationHoursAgo(),
              USER_TOKEN_VALIDATE_EMAIL,
            ]
          );

          if (inactive_user_token_list.length <= 2) {
            await sendTokenToValidateEmail(user, subdomain);
          }
        }
      }
    } else {
      const email_is_verified = await verifyEmail(email);

      if (!email_is_verified) {
        event.res.status = HTTP_CODE_400_BAD_REQUEST;

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

      await sendTokenToValidateEmail(new_user, subdomain)
        // eslint-disable-next-line no-unused-vars
        .catch((___) => {
          event.res.status = HTTP_CODE_400_BAD_REQUEST;

          return {
            error_message: 'error_email_token_not_sent',
          };
        });
    }

    event.res.status = HTTP_CODE_201_CREATED;

    return {
      success: true,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
