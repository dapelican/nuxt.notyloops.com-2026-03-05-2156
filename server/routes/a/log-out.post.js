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
    const session = await getUserSession(event);

    if (session?.session_token_id) {
      await executeSQLQuery(
        'UPDATE user_session_tokens SET blacklisted = true WHERE id = $1',
        [session.session_token_id]
      );
    }

    await clearUserSession(event);

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      success: true,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
