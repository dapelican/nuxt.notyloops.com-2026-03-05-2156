'use strict';

import {
  HTTP_CODE_201_CREATED,
  HTTP_CODE_400_BAD_REQUEST,
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
  getSubdomain,
} from '../../helpers/get-subdomain.js';

import {
  handleBackendError,
} from '../../helpers/handle-backend-error.js';

import {
  sendEmail,
} from '../../services/plunk/send-email.js';

const FIRST_NAME_MAX_LENGTH = 100;
const MESSAGE_MAX_LENGTH = 5000;

export default defineEventHandler(async (event) => {
  try {
    let {
      email,
      first_name,
      message,
    } = await readBody(event);

    email = email?.toLowerCase()?.trim();
    first_name = first_name?.trim();
    message = message?.trim();

    const subdomain = getSubdomain(event);

    if (
      !validateNonEmptyInputFieldList([first_name, email, message])
      || first_name.length > FIRST_NAME_MAX_LENGTH
      || message.length > MESSAGE_MAX_LENGTH
    ) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_input',
      };
    }

    if (!validateEmail(email)) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_email',
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
