'use strict';

import {
  HTTP_CODE_201_CREATED,
  HTTP_CODE_400_BAD_REQUEST,
} from '../../helpers/http-status-codes.js';

import {
  defineEventHandler,
  readBody,
} from 'h3';

import {
  validateEmail,
  validateNonEmptyInputFieldList,
} from '../../helpers/validators.js';

import {
  WEBSITE_DOMAIN_NAME,
} from '#shared/utils/constants.js';

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
  verifyEmail,
} from '../../services/emailable/verify-email.js';

import {
  verifyTurnstileToken,
} from '../../helpers/verify-turnstile-token.js';

const FIRST_NAME_MAX_LENGTH = 100;
const MESSAGE_MAX_LENGTH = 5000;

export default defineEventHandler(async (event) => {
  try {
    let {
      email,
      first_name,
      message,
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
    first_name = first_name?.trim();
    message = message?.trim();

    const subdomain = getSubdomain(event);

    if (
      !validateNonEmptyInputFieldList([first_name, email, message])
      || first_name.length > FIRST_NAME_MAX_LENGTH
      || message.length > MESSAGE_MAX_LENGTH
    ) {
      event.res.status = HTTP_CODE_400_BAD_REQUEST;

      return {
        error_message: 'error_invalid_input',
      };
    }

    if (!validateEmail(email)) {
      event.res.status = HTTP_CODE_400_BAD_REQUEST;

      return {
        error_message: 'error_invalid_email',
      };
    }

    const email_is_verified = await verifyEmail(email);

    if (!email_is_verified) {
      event.res.status = HTTP_CODE_400_BAD_REQUEST;

      return {
        error_message: 'error_corrupt_email',
      };
    }

    await sendEmail({
      subdomain,
      template_name: 'admin-new-contact-message',
      template_params: {
        email,
        first_name,
        message,
      },
      to: `support@${WEBSITE_DOMAIN_NAME}`,
    });

    event.res.status = HTTP_CODE_201_CREATED;

    return {
      success: true,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
