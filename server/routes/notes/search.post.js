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

const ALLOWED_SORT_COLUMNS = ['title', 'created_at', 'updated_at'];
const ALLOWED_SORT_ORDERS = ['asc', 'desc'];

const DEFAULT_SORT_BY = 'created_at';
const DEFAULT_SORT_ORDER = 'desc';

export default defineEventHandler(async (event) => {
  try {
    const user = await verifySessionAndReturnUser(event);

    if (user === null) {
      setResponseStatus(event, HTTP_CODE_401_UNAUTHORIZED);

      return {
        error_message: 'error_unauthorized',
      };
    }

    let {
      limit,
      offset,
      search_term,
      sort_by,
      sort_order,
      tag_id_list,
    } = await readBody(event);

    if (
      !z.coerce.number().int().safeParse(limit).success
      || !z.coerce.number().int().safeParse(offset).success
    ) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_limit_or_offset',
      };
    }

    sort_by = ALLOWED_SORT_COLUMNS.includes(sort_by)
      ? sort_by
      : DEFAULT_SORT_BY;

    sort_order = ALLOWED_SORT_ORDERS.includes(sort_order)
      ? sort_order
      : DEFAULT_SORT_ORDER;

    const where_clause_list = ['n.user_id = $1 and n.deleted_at IS NULL'];
    const parameter_list = [user.id];

    if (search_term) {
      const search_idx = parameter_list.length + 1;
      where_clause_list.push(`(n.title ILIKE $${search_idx} OR EXISTS (SELECT 1 FROM note_details nd WHERE nd.note_id = n.id AND nd.markdown_content ILIKE $${search_idx}))`);
      parameter_list.push(`%${search_term}%`);
    }

    if (Array.isArray(tag_id_list) && tag_id_list.length > 0) {
      const tag_idx = parameter_list.length + 1;
      where_clause_list.push(`n.id IN (SELECT note_id FROM note_tags WHERE tag_id = ANY($${tag_idx}::uuid[]))`);
      parameter_list.push(tag_id_list);
    }

    const where_clause = `WHERE ${where_clause_list.join(' AND ')}`;

    const { rows: all_rows } = await executeSQLQuery(
      `SELECT id FROM notes n ${where_clause}`,
      parameter_list
    );

    const searched_note_id_list = all_rows.map((row) => row.id);

    let sql_query = `SELECT
      n.id,
      n.title,
      n.created_at,
      n.updated_at,
      COALESCE(
        json_agg(
          json_build_object('id', t.id, 'label', t.label)
        ) FILTER (WHERE t.id IS NOT NULL),
        '[]'::json
      ) AS tag_list
    FROM notes n
    LEFT JOIN note_tags nt ON nt.note_id = n.id
    LEFT JOIN tags t ON t.id = nt.tag_id
    ${where_clause}
    GROUP BY n.id`;

    sql_query += ` ORDER BY n.${sort_by} ${sort_order}`;

    parameter_list.push(limit);
    sql_query += ` LIMIT $${parameter_list.length}`;

    parameter_list.push(offset);
    sql_query += ` OFFSET $${parameter_list.length}`;

    const { rows: current_page_note_list } = await executeSQLQuery(sql_query, parameter_list);

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      searched_note_id_list,
      searched_note_count: searched_note_id_list.length,
      current_page_note_list,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
