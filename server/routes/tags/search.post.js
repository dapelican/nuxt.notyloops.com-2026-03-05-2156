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

const ALLOWED_SORT_COLUMNS = ['label', 'attached_note_count', 'created_at', 'updated_at'];
const ALLOWED_SORT_ORDERS = ['asc', 'desc'];

const DEFAULT_SORT_BY = 'label';
const DEFAULT_SORT_ORDER = 'asc';

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
    } = await readBody(event);

    if (!z.coerce.number().int().safeParse(limit).success || !z.coerce.number().int().safeParse(offset).success) {
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

    const parameter_list = [user.id];
    let where_clause = 'WHERE t.user_id = $1';

    if (search_term) {
      parameter_list.push(`%${search_term}%`);
      where_clause += ` AND t.label ILIKE $${parameter_list.length}`;
    }

    const { rows: all_rows } = await executeSQLQuery(
      `SELECT t.id FROM tags t ${where_clause}`,
      parameter_list
    );

    const searched_tag_id_list = all_rows.map((row) => row.id);

    let sql_query = `SELECT t.id, t.label, COUNT(nt.note_id)::int AS attached_note_count,
    t.created_at, t.updated_at
    FROM tags t
    LEFT JOIN note_tags nt ON nt.tag_id = t.id AND nt.user_id = t.user_id
    ${where_clause}
    GROUP BY t.id, t.label`;

    sql_query += ` ORDER BY t.${sort_by} ${sort_order}`;

    parameter_list.push(limit);
    sql_query += ` LIMIT $${parameter_list.length}`;

    parameter_list.push(offset);
    sql_query += ` OFFSET $${parameter_list.length}`;

    const {
      rows: current_page_tag_list,
    } = await executeSQLQuery(sql_query, parameter_list);

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      searched_tag_id_list,
      searched_tag_count: searched_tag_id_list.length,
      current_page_tag_list,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
