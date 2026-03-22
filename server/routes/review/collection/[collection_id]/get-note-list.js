'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../../../helpers/http-status-codes.js';

import {
  defineEventHandler,
  getRouterParam,
  setResponseStatus,
} from 'h3';

import {
  executeSQLQuery,
} from '../../../../database/query.js';

import {
  handleBackendError,
} from '../../../../helpers/handle-backend-error.js';

import {
  selectNoteIdListOnTagCriteria,
} from '../../../../helpers/select-note-id-list-on-tag-criteria.js';

import {
  shuffleArray,
} from '../../../../helpers/shuffle-array.js';

import {
  verifySessionAndReturnUser,
} from '../../../../helpers/verify-session-and-return-user.js';

import { z } from 'zod';

const applyReviewStrategy = async (note_id_list, review_strategy) => {
  if (review_strategy === 'random') {
    return shuffleArray(note_id_list);
  }

  if (review_strategy === 'by_score_lowest_to_highest') {
    const {
      rows: note_list,
    } = await executeSQLQuery(
      `SELECT id, score FROM notes WHERE id = ANY($1::uuid[])
      ORDER BY score ASC`,
      [note_id_list]
    );

    return note_list.map((note) => note.id);
  }

  if (review_strategy === 'by_last_review_date_oldest_to_newest') {
    const {
      rows: note_list,
    } = await executeSQLQuery(
      `SELECT id, last_review_date FROM notes WHERE id = ANY($1::uuid[])
      ORDER BY last_review_date ASC`,
      [note_id_list]
    );

    return note_list.map((note) => note.id);
  }

  if (review_strategy === 'by_creation_date_oldest_to_newest') {
    const {
      rows: note_list,
    } = await executeSQLQuery(
      `SELECT id, created_at FROM notes WHERE id = ANY($1::uuid[])
      ORDER BY created_at ASC`,
      [note_id_list]
    );

    return note_list.map((note) => note.id);
  }

  if (review_strategy === 'by_title_in_lexicographical_order'
    || review_strategy === 'diary'
  ) {
    const {
      rows: note_list,
    } = await executeSQLQuery(
      `SELECT id, title FROM notes WHERE id = ANY($1::uuid[])
      ORDER BY title ASC`,
      [note_id_list]
    );

    return note_list.map((note) => note.id);
  }
};

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
        error_message: 'error_invalid_input',
      };
    }

    const { rows: collection_list } = await executeSQLQuery(
      'SELECT * FROM collections WHERE id = $1 and user_id = $2',
      [collection_id, user.id]
    );

    const collection = collection_list.at(0);

    if (collection === undefined) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_no_item_found_for_user',
      };
    }

    const note_id_list = await selectNoteIdListOnTagCriteria(user.id, collection);

    let note_id_list_to_review = [];

    if (collection.review_strategy === 'super_random') {
      const strategy_list = REVIEW_STRATEGY_LIST
        .filter((strategy) => !['spaced_repetition', 'diary', 'super_random'].includes(strategy));

      const random_index = Math.floor(Math.random() * strategy_list.length);

      const random_strategy = strategy_list[random_index];

      note_id_list_to_review = await applyReviewStrategy(note_id_list, random_strategy);
    } else {
      note_id_list_to_review = await applyReviewStrategy(note_id_list, collection.review_strategy);
    }

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      note_id_list_to_review,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
