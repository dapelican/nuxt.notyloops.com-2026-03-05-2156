'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../../helpers/http-status-codes.js';

import {
  defineEventHandler,
  setResponseStatus,
} from 'h3';

import {
  executeSQLQuery,
} from '../../../database/query.js';

import {
  handleBackendError,
} from '../../../helpers/handle-backend-error.js';

import {
  verifySessionAndReturnUser,
} from '../../../helpers/verify-session-and-return-user.js';

const parseUuidArray = (json_value) => {
  if (!json_value) {
    return [];
  }

  if (!Array.isArray(json_value)) {
    return [];
  }

  return json_value.filter(Boolean);
};

const fetchNoteIdsMatchingCollection = async (user_id, collection_row) => {
  const tag_id_list_to_include = parseUuidArray(collection_row.tag_id_list_to_include);
  const tag_id_list_to_exclude = parseUuidArray(collection_row.tag_id_list_to_exclude);
  const inclusion_type = collection_row.inclusion_type === 'OR' ? 'OR' : 'AND';
  const exclusion_type = collection_row.exclusion_type === 'OR' ? 'OR' : 'AND';

  let inclusion_sql;
  const inclusion_params = [user_id];

  if (tag_id_list_to_include.length === 0) {
    inclusion_sql = `
      SELECT n.id
      FROM notes n
      WHERE n.user_id = $1 AND n.deleted_at IS NULL`;
  } else if (inclusion_type === 'AND') {
    inclusion_sql = `
      SELECT n.id
      FROM notes n
      WHERE n.user_id = $1 AND n.deleted_at IS NULL
      AND (
        SELECT COUNT(DISTINCT nt.tag_id)
        FROM note_tags nt
        WHERE nt.note_id = n.id
          AND nt.user_id = $1
          AND nt.tag_id = ANY($2::uuid[])
      ) = $3`;
    inclusion_params.push(tag_id_list_to_include, tag_id_list_to_include.length);
  } else {
    inclusion_sql = `
      SELECT DISTINCT n.id
      FROM notes n
      INNER JOIN note_tags nt ON nt.note_id = n.id AND nt.user_id = n.user_id
      WHERE n.user_id = $1 AND n.deleted_at IS NULL
        AND nt.tag_id = ANY($2::uuid[])`;
    inclusion_params.push(tag_id_list_to_include);
  }

  const { rows: inclusion_rows } = await executeSQLQuery(inclusion_sql, inclusion_params);
  let note_id_list = inclusion_rows.map((row) => row.id);

  if (note_id_list.length === 0 || tag_id_list_to_exclude.length === 0) {
    return note_id_list;
  }

  const exclude_sql = exclusion_type === 'OR'
    ? `
      SELECT x.id
      FROM unnest($1::uuid[]) AS x(id)
      WHERE NOT EXISTS (
        SELECT 1 FROM note_tags nt
        WHERE nt.note_id = x.id
          AND nt.user_id = $2
          AND nt.tag_id = ANY($3::uuid[])
      )`
    : `
      SELECT x.id
      FROM unnest($1::uuid[]) AS x(id)
      WHERE (
        SELECT COUNT(DISTINCT nt.tag_id)
        FROM note_tags nt
        WHERE nt.note_id = x.id
          AND nt.user_id = $2
          AND nt.tag_id = ANY($3::uuid[])
      ) < $4`;

  const exclude_params = exclusion_type === 'OR'
    ? [note_id_list, user_id, tag_id_list_to_exclude]
    : [note_id_list, user_id, tag_id_list_to_exclude, tag_id_list_to_exclude.length];

  const { rows: filtered_rows } = await executeSQLQuery(exclude_sql, exclude_params);

  return filtered_rows.map((row) => row.id);
};

const formatDateOnly = (value) => {
  if (value === null || value === undefined) {
    return null;
  }

  if (value instanceof Date) {
    // node-pg parses PostgreSQL DATE as local midnight; UTC getters shift the calendar day.
    const y = value.getFullYear();
    const m = String(value.getMonth() + 1).padStart(2, '0');
    const d = String(value.getDate()).padStart(2, '0');

    return `${y}-${m}-${d}`;
  }

  const string_value = String(value);

  return string_value.length >= 10 ? string_value.slice(0, 10) : string_value;
};

const utc_calendar_today_string = () =>
  new Date().toISOString().slice(0, 10);

export default defineEventHandler(async (event) => {
  try {
    const user = await verifySessionAndReturnUser(event);

    if (user === null) {
      setResponseStatus(event, HTTP_CODE_401_UNAUTHORIZED);

      return {
        error_message: 'error_unauthorized',
      };
    }

    const today_utc_date = utc_calendar_today_string();

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
        fetchNoteIdsMatchingCollection(user.id, collection_row)
      ))
    );

    const eligible_note_id_set = new Set();

    for (const note_id_list of per_collection_note_id_list_list) {
      for (const note_id of note_id_list) {
        eligible_note_id_set.add(note_id);
      }
    }

    const eligible_note_id_list = [...eligible_note_id_set];

    if (eligible_note_id_list.length > 0) {
      await executeSQLQuery(
        `INSERT INTO spaced_repetition_notes (note_id, user_id, due_date)
        SELECT nid, $2::uuid, $3::date
        FROM unnest($1::uuid[]) AS t(nid)
        ON CONFLICT (note_id) DO NOTHING`,
        [eligible_note_id_list, user.id, today_utc_date]
      );
    }

    let due_rows = [];

    if (eligible_note_id_list.length > 0) {
      const due_result = await executeSQLQuery(
        `SELECT note_id
        FROM spaced_repetition_notes
        WHERE user_id = $1
          AND note_id = ANY($2::uuid[])
          AND due_date <= $3::date
        ORDER BY due_date ASC, note_id ASC`,
        [user.id, eligible_note_id_list, today_utc_date]
      );
      due_rows = due_result.rows;
    }

    const spaced_repetition_note_id_list = due_rows.map((row) => row.note_id);

    if (spaced_repetition_note_id_list.length > 0) {
      setResponseStatus(event, HTTP_CODE_200_OK);

      return {
        spaced_repetition_due_note_count: spaced_repetition_note_id_list.length,
        spaced_repetition_note_id_list,
        next_due_date: null,
      };
    }

    const { rows: next_rows } = eligible_note_id_list.length > 0
      ? await executeSQLQuery(
          `SELECT (MIN(due_date))::text AS next_due_date
          FROM spaced_repetition_notes
          WHERE user_id = $1
            AND note_id = ANY($2::uuid[])
            AND due_date > $3::date`,
          [user.id, eligible_note_id_list, today_utc_date]
        )
      : { rows: [{ next_due_date: null }] };

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      spaced_repetition_due_note_count: 0,
      spaced_repetition_note_id_list: [],
      next_due_date: formatDateOnly(next_rows.at(0)?.next_due_date),
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
