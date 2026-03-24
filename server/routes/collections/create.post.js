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

import { z } from 'zod';

const AND_OR_LIST = ['AND', 'OR'];

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
      inclusion_type,
      price_without_tax,
      review_strategy,
      tag_id_list_to_exclude,
      tag_id_list_to_include,
      title,
      track_scores,
      type,
    } = await readBody(event);

    if (!AND_OR_LIST.includes(inclusion_type)) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_inclusion_type',
      };
    }

    if (!AND_OR_LIST.includes(exclusion_type)) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_exclusion_type',
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

    const { rows: new_tag_list } = await executeSQLQuery(
      `INSERT INTO collections (
      user_id,
      title,
      tag_id_list_to_include,
      inclusion_type,
      tag_id_list_to_exclude,
      exclusion_type,
      type,
      review_strategy,
      track_scores,
      description,
      price_without_tax
      ) VALUES ($1, $2, $3::jsonb, $4, $5::jsonb, $6, $7, $8, $9, $10, $11) RETURNING *`,
      [
        user.id,
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
      ]
    );

    setResponseStatus(event, HTTP_CODE_201_CREATED);

    return new_tag_list.at(0);
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
