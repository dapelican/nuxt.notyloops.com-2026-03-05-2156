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

import { z } from 'zod';

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
      description,
      exclusion_type,
      id,
      inclusion_type,
      price_without_tax,
      review_strategy,
      tag_id_list_to_exclude,
      tag_id_list_to_include,
      title,
      track_scores,
      type,
    } = await readBody(event);

    const AND_OR_LIST = ['AND', 'OR'];

    if (!AND_OR_LIST.includes(inclusion_type)) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_input',
      };
    }

    if (!AND_OR_LIST.includes(exclusion_type)) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_input',
      };
    }

    if (!z.uuid().safeParse(id).success) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_collectionid',
      };
    }

    if (!z.string().min(1).safeParse(title).success) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_collection_title',
      };
    }

    if (!COLLECTION_TYPE_LIST.includes(type)) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_collection_type',
      };
    }

    if (type === COLLECTION_TYPE_PRIVATE && !REVIEW_STRATEGY_LIST.includes(review_strategy)) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_collection_review_strategy',
      };
    }

    const uuid_array_schema = z.array(z.uuid()).nullable().optional();

    if (!uuid_array_schema.safeParse(tag_id_list_to_include).success) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_tag_id_list_to_include',
      };
    }

    if (!uuid_array_schema.safeParse(tag_id_list_to_exclude).success) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_tag_id_list_to_exclude',
      };
    }

    const {
      rows: existing_collection_list,
    } = await executeSQLQuery(
      'SELECT user_id FROM collections WHERE id = $1 AND user_id = $2',
      [id, user.id]
    );

    if (existing_collection_list.length === 0) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_no_collection_found',
      };
    }

    if (existing_collection_list.at(0).user_id !== user.id) {
      setResponseStatus(event, HTTP_CODE_401_UNAUTHORIZED);

      return {
        error_message: 'error_unauthorized',
      };
    }

    const {
      rows: updated_row_list,
    } = await executeSQLQuery(
      `UPDATE collections SET
        title = $2,
        tag_id_list_to_include = $3::jsonb,
        inclusion_type = $4,
        tag_id_list_to_exclude = $5::jsonb,
        exclusion_type = $6,
        type = $7,
        review_strategy = $8,
        track_scores = $9,
        description = $10,
        price_without_tax = $11
      WHERE id = $1 AND user_id = $12
      RETURNING *`,
      [
        id,
        title,
        JSON.stringify(tag_id_list_to_include),
        inclusion_type,
        JSON.stringify(tag_id_list_to_exclude),
        exclusion_type,
        type,
        review_strategy,
        track_scores,
        description,
        price_without_tax,
        user.id,
      ]
    );

    const updated_collection = updated_row_list.at(0);

    setResponseStatus(event, HTTP_CODE_200_OK);

    return updated_collection;
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
