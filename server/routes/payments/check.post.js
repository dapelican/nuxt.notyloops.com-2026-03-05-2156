'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../helpers/http-status-codes.js';

import {
  defineEventHandler,
  readBody,
} from 'h3';

import {
  executeSQLQuery,
} from '../../database/query.js';

import {
  handleBackendError,
} from '../../helpers/handle-backend-error.js';

import {
  verifySessionAndReturnUser,
} from '../../helpers/verify-session-and-return-user.js';

import {
  z,
} from 'zod';

export default defineEventHandler(async (event) => {
  try {
    const user = await verifySessionAndReturnUser(event);

    if (user === null) {
      event.res.status = HTTP_CODE_401_UNAUTHORIZED;

      return {
        error_message: 'error_unauthorized',
      };
    }

    const body = await readBody(event);
    const collection_id = body?.collection_id;

    if (!z.uuid().safeParse(collection_id).success) {
      event.res.status = HTTP_CODE_400_BAD_REQUEST;

      return {
        error_message: 'error_invalid_collection_id',
      };
    }

    const {
      rows: payment_row_list,
    } = await executeSQLQuery(
      `SELECT 1 FROM payments
      WHERE user_id = $1 AND collection_id = $2
      LIMIT 1`,
      [user.id, collection_id]
    );

    const has_purchased = payment_row_list.length > 0;

    event.res.status = HTTP_CODE_200_OK;

    return {
      has_purchased,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
