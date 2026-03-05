'use strict';

import {
  defineEventHandler,
  readBody,
  setResponseStatus,
} from 'h3';

import {
  HTTP_CODE_201_CREATED,
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
      content,
    } = await readBody(event);

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
