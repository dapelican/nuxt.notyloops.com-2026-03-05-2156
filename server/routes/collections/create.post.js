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
      tag_id_list_to_exclude,
      tag_id_list_to_include,
      title,
      // description,
      type,
      // track_scores,
      // display_titles,
      // review_order,
      // pinned,
      // price_without_vat,
      // slug,
    } = await readBody(event);

    if (!title) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_input',
      };
    }

    if (!tag_id_list_to_include || !Array.isArray(tag_id_list_to_include)) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_input',
      };
    }

    if (!tag_id_list_to_exclude || !Array.isArray(tag_id_list_to_exclude)) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_input',
      };
    }

    if (!type) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_input',
      };
    }

    const { rows: new_tag_list } = await executeSQLQuery(
      `INSERT INTO collections (
      user_id,
      title,
      tag_id_list_to_include,
      tag_id_list_to_exclude,
      type
      ) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [
        user.id,
        title,
        JSON.stringify(tag_id_list_to_include),
        JSON.stringify(tag_id_list_to_exclude),
        type,
      ]
    );

    setResponseStatus(event, HTTP_CODE_201_CREATED);

    return new_tag_list.at(0);
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
