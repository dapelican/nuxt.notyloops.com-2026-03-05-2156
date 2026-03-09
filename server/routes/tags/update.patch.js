'use strict';

import {
  HTTP_CODE_200_OK,
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
      id,
      label,
    } = await readBody(event);

    if (!id || !label) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_input',
      };
    }

    // Make sure that id of the tag belongs to the user
    const {
      rows: tag_list,
    } = await executeSQLQuery(
      'SELECT id FROM tags WHERE user_id = $1 AND id = $2',
      [user.id, id]
    );

    if (tag_list.length === 0) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_input',
      };
    }

    const lowercase_label = label.toLowerCase();

    const {
      rows: existing_tag_list,
    } = await executeSQLQuery(
      'SELECT id FROM tags WHERE user_id = $1 AND lowercase_label = $2 AND id != $3',
      [user.id, lowercase_label, id]
    );

    if (existing_tag_list.length > 0) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_tag_already_exists',
      };
    }

    await executeSQLQuery(
      'UPDATE tags SET label = $1, lowercase_label = $2 WHERE id = $3',
      [label, lowercase_label, id]
    );

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {};
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
