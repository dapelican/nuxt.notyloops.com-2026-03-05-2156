'use strict';

import {
  HTTP_CODE_201_CREATED,
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
      label,
    } = await readBody(event);

    if (!label) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_input',
      };
    }

    const lowercase_label = label.toLowerCase();

    // Make sure the user has only one tag with the lowercase label
    const {
      rows: existing_tag_list,
    } = await executeSQLQuery(
      'SELECT id FROM tags WHERE user_id = $1 AND lowercase_label = $2',
      [user.id, lowercase_label]
    );

    if (existing_tag_list.length > 0) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_tag_already_exists',
      };
    }

    const { rows: new_tag_list } = await executeSQLQuery(
      'INSERT INTO tags (user_id, label, lowercase_label) VALUES ($1, $2, $3) RETURNING id',
      [user.id, label, lowercase_label]
    );

    setResponseStatus(event, HTTP_CODE_201_CREATED);

    return {
      id: new_tag_list.at(0).id,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
