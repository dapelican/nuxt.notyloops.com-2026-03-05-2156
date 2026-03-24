'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../../helpers/http-status-codes.js';

import {
  defineEventHandler,
  getQuery,
  setResponseStatus,
} from 'h3';

import { DateTime } from 'luxon';

import {
  executeSQLQuery,
} from '../../../database/query.js';

import {
  handleBackendError,
} from '../../../helpers/handle-backend-error.js';

import {
  selectNoteIdListOnTagCriteria,
} from '../../../helpers/select-note-id-list-on-tag-criteria.js';

import {
  verifySessionAndReturnUser,
} from '../../../helpers/verify-session-and-return-user.js';

const getDayIndexInYear = (event) => {
  const { date } = getQuery(event);

  // Calendar date used to determine the index of the day within that date's year:
  // January 1st is index 0 (Luxon ordinal 1 → ordinal - 1)
  // January 29th is index 28; in a leap year February adds an extra day before March
  // December 31st is index 364 or 365 depending on leap year

  if (date) {
    const dt = DateTime.fromISO(String(date).slice(0, 10));

    if (dt.isValid) {
      return dt.ordinal - 1;
    }
  }

  return DateTime.utc().ordinal - 1;
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

    const day_index_in_year = getDayIndexInYear(event);

    const { rows: diary_collection_list } = await executeSQLQuery(
      `SELECT
        tag_id_list_to_include,
        inclusion_type,
        tag_id_list_to_exclude,
        exclusion_type
      FROM collections
      WHERE user_id = $1 AND review_strategy = 'diary'
      ORDER BY created_at ASC`,
      [user.id]
    );

    if (diary_collection_list.length === 0) {
      setResponseStatus(event, HTTP_CODE_200_OK);

      return {
        diary_due_note_count: 0,
        diary_note_id_list: [],
      };
    }

    const per_collection_note_id_list = await Promise.all(
      diary_collection_list.map((collection_row) => (
        selectNoteIdListOnTagCriteria(user.id, collection_row)
      ))
    );

    const diary_note_id_list = [];

    for (const note_id_list of per_collection_note_id_list) {
      if (note_id_list.length === 0) {
        continue;
      }

      const { rows: ordered_rows } = await executeSQLQuery(
        `SELECT id
        FROM notes
        WHERE id = ANY($1::uuid[])
        ORDER BY title ASC`,
        [note_id_list]
      );

      const ordered_note_id_list = ordered_rows.map((row) => row.id);

      let chosen_note_id = ordered_note_id_list.at(day_index_in_year);

      if (chosen_note_id === undefined) {
        chosen_note_id = ordered_note_id_list.at(
          Math.floor(Math.random() * ordered_note_id_list.length)
        );
      }

      diary_note_id_list.push(chosen_note_id);
    }

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      diary_due_note_count: diary_note_id_list.length,
      diary_note_id_list,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
