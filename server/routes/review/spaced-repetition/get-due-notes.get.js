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
  shuffleArray,
} from '../../../helpers/shuffle-array.js';

import {
  verifySessionAndReturnUser,
} from '../../../helpers/verify-session-and-return-user.js';

const resolveLocalDate = (event) => {
  const { date } = getQuery(event);

  if (date) {
    const dt = DateTime.fromISO(String(date).slice(0, 10));

    if (dt.isValid) {
      return dt.toISODate();
    }
  }

  return DateTime.utc().toISODate();
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

    const today_date = resolveLocalDate(event);

    const { rows: spaced_repetition_collection_list } = await executeSQLQuery(
      `SELECT
        tag_id_list_to_include,
        inclusion_type,
        tag_id_list_to_exclude,
        exclusion_type
      FROM collections
      WHERE user_id = $1 AND review_strategy = 'spaced_repetition'`,
      [user.id]
    );

    if (spaced_repetition_collection_list.length === 0) {
      setResponseStatus(event, HTTP_CODE_200_OK);

      return {
        spaced_repetition_due_note_count: 0,
        spaced_repetition_note_id_list: [],
        next_due_date: null,
      };
    }

    const per_collection_note_id_list_list = await Promise.all(
      spaced_repetition_collection_list.map((collection_row) => (
        selectNoteIdListOnTagCriteria(user.id, collection_row)
      ))
    );

    const eligible_note_id_set = new Set();

    for (const note_id_list of per_collection_note_id_list_list) {
      for (const note_id of note_id_list) {
        eligible_note_id_set.add(note_id);
      }
    }

    const eligible_note_id_list = [...eligible_note_id_set];

    let next_due_date = null;

    if (eligible_note_id_list.length > 0) {
      await executeSQLQuery(
        `INSERT INTO spaced_repetition_notes (note_id, user_id, due_date)
        SELECT nid, $2::uuid, $3::date
        FROM unnest($1::uuid[]) AS t(nid)
        ON CONFLICT (note_id) DO NOTHING`,
        [eligible_note_id_list, user.id, today_date]
      );

      const { rows: due_rows } = await executeSQLQuery(
        `SELECT note_id
        FROM spaced_repetition_notes
        WHERE user_id = $1
          AND note_id = ANY($2::uuid[])
          AND due_date <= $3::date
        ORDER BY due_date ASC, note_id ASC`,
        [user.id, eligible_note_id_list, today_date]
      );

      const spaced_repetition_note_id_list = due_rows.map((row) => row.note_id);

      if (spaced_repetition_note_id_list.length > 0) {
        setResponseStatus(event, HTTP_CODE_200_OK);

        return {
          spaced_repetition_due_note_count: spaced_repetition_note_id_list.length,
          spaced_repetition_note_id_list: shuffleArray(spaced_repetition_note_id_list),
          next_due_date: null,
        };
      }

      const { rows: next_rows } = await executeSQLQuery(
        `SELECT (MIN(due_date))::text AS next_due_date
        FROM spaced_repetition_notes
        WHERE user_id = $1
          AND note_id = ANY($2::uuid[])
          AND due_date > $3::date`,
        [user.id, eligible_note_id_list, today_date]
      );

      next_due_date = next_rows.at(0)?.next_due_date ?? null;
    }

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      spaced_repetition_due_note_count: 0,
      spaced_repetition_note_id_list: [],
      next_due_date,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
