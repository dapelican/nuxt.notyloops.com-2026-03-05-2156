'use strict';

import {
  defineEventHandler,
  setResponseStatus,
} from 'h3';

import {
  HTTP_CODE_200_OK,
} from '../../helpers/http-status-codes.js';

import {
  executeSQLQuery,
} from '../../database/query.js';

import {
  handleBackendError,
} from '../../helpers/handle-backend-error.js';

export default defineEventHandler(async (event) => {
  try {
    const {
      rows,
    } = await executeSQLQuery('SELECT id FROM users LIMIT 1');

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      pong: 'pong',
      rows,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
