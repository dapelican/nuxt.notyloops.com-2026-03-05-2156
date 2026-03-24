'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../../../helpers/http-status-codes.js';

import {
  defineEventHandler,
  readBody,
  setResponseStatus,
} from 'h3';

import {
  DateTime,
} from 'luxon';

import {
  executeSQLQuery,
} from '../../../../database/query.js';

import {
  handleBackendError,
} from '../../../../helpers/handle-backend-error.js';

import {
  verifySessionAndReturnUser,
} from '../../../../helpers/verify-session-and-return-user.js';

import { z } from 'zod';

const ALLOWED_FEEDBACK_VALUES = ['positive', 'negative'];

export default defineEventHandler(async (event) => {
  try {
    const user = await verifySessionAndReturnUser(event);

    if (user === null) {
      setResponseStatus(event, HTTP_CODE_401_UNAUTHORIZED);

      return {
        error_message: 'error_unauthorized',
      };
    }

    const collection_id = getRouterParam(event, 'collection_id');

    if (!z.uuid().safeParse(collection_id).success) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_collection_id',
      };
    }

    const {
      feedback,
      note_id,
    } = await readBody(event);

    if (!z.uuid().safeParse(note_id).success) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_note_id',
      };
    }

    if (!ALLOWED_FEEDBACK_VALUES.includes(feedback)) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_feedback',
      };
    }

    const {
      rows: collection_list,
    } = await executeSQLQuery(
      `SELECT *
      FROM collections
      WHERE id = $1 AND user_id = $2`,
      [collection_id, user.id]
    );

    if (collection_list.length === 0) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_no_item_found_for_user',
      };
    }

    const collection = collection_list.at(0);

    const {
      rows: note_list,
    } = await executeSQLQuery(
      `SELECT *
      FROM notes
      WHERE id = $1 AND user_id = $2`,
      [note_id, user.id]
    );

    if (note_list.length === 0) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_no_item_found_for_user',
      };
    }

    await Promise.all([
      executeSQLQuery(
        `INSERT INTO note_reviews (note_id, user_id, collection_id, review_strategy, score)
        VALUES ($1, $2, $3, $4, $5)`,
        [
          note_id,
          user.id,
          collection_id,
          collection.review_strategy,
          feedback === 'positive' ? 1 : 0,
        ]
      ),
      executeSQLQuery(
        `UPDATE notes SET
        last_review_date = $1,
        first_review_date = COALESCE(first_review_date, $1),
        review_count = review_count + 1,
        score = score + $2
        WHERE id = $3`,
        [
          DateTime.now().toISO(),
          feedback === 'positive' ? 1 : 0,
          note_id,
        ]
      ),
    ]);

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {};
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
