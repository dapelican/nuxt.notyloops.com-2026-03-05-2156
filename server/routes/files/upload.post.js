'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../helpers/http-status-codes.js';

import {
  defineEventHandler,
  readMultipartFormData,
  setResponseStatus,
} from 'h3';

import {
  handleBackendError,
} from '../../helpers/handle-backend-error.js';

import {
  uploadFile,
} from '../../services/backblaze/upload-file.js';

import {
  verifySessionAndReturnUser,
} from '../../helpers/verify-session-and-return-user.js';

export default defineEventHandler(async (event) => {
  try {
    const user = await verifySessionAndReturnUser(event);

    if (user === null) {
      setResponseStatus(event, HTTP_CODE_401_UNAUTHORIZED);

      return {
        error_message: 'error_unauthorized',
      };
    }

    const parts = await readMultipartFormData(event);

    const file_part = parts?.find((p) => p.name === 'file');

    if (!file_part || !file_part.data || !file_part.filename || !file_part.type) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_input',
      };
    }

    const file_url = await uploadFile(file_part.data, file_part.filename, file_part.type);

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      file_url,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
