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
      rows: collection_list,
    } = await executeSQLQuery(
      `SELECT id, title, type, description, price_without_tax, slug
      FROM collections
      WHERE type IN ('public_free', 'public_paywalled')
      ORDER BY title ASC`,
      []
    );

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      collection_list,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
