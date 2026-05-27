'use strict';

import {
  HTTP_CODE_204_NO_CONTENT,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_401_UNAUTHORIZED,
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

    const {
      collection_id_list,
    } = await readBody(event);

    if (!Array.isArray(collection_id_list) || collection_id_list.length === 0) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_input',
      };
    }

    // Make sure the collection_id_list belongs to the user
    const {
      rows: collection_list,
    } = await executeSQLQuery(
      'SELECT id FROM collections WHERE user_id = $1 AND id = ANY($2::uuid[])',
      [user.id, collection_id_list]
    );

    const final_collection_id_list = collection_list.map((collection) => collection.id);

    await executeSQLQuery(
      'DELETE FROM collections WHERE id = ANY($1::uuid[])',
      [final_collection_id_list]
    );

    setResponseStatus(event, HTTP_CODE_204_NO_CONTENT);

    return {
      success: true,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
