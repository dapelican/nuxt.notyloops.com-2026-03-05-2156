import {
  HTTP_CODE_201_CREATED,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_404_NOT_FOUND,
  HTTP_CODE_413_PAYLOAD_TOO_LARGE,
} from '../../helpers/http-status-codes.js';

import {
  defineEventHandler,
  readBody,
  setResponseStatus,
} from 'h3';

import {
  executeSQLQuery,
} from '../../database/query.js';

import {
  handleBackendError,
} from '../../helpers/handle-backend-error.js';

const CONTENT_MAX_BYTES = 16384;

const isJsonString = (value) => {
  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
};

export default defineEventHandler(async (event) => {
  if (process.env.NODE_ENV === 'production') {
    setResponseStatus(event, HTTP_CODE_404_NOT_FOUND);

    return {
      error_message: 'error_not_found',
    };
  }

  try {
    const body = await readBody(event);
    const content = body?.content;

    if (typeof content !== 'string' || !isJsonString(content)) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_input',
      };
    }

    if (Buffer.byteLength(content, 'utf8') > CONTENT_MAX_BYTES) {
      setResponseStatus(event, HTTP_CODE_413_PAYLOAD_TOO_LARGE);

      return {
        error_message: 'error_payload_too_large',
      };
    }

    await executeSQLQuery(
      'INSERT into logs (content) VALUES ($1)',
      [content]
    );

    setResponseStatus(event, HTTP_CODE_201_CREATED);

    return {};
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
