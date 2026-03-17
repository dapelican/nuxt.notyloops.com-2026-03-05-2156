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

    const parameter_list = [user.id];
    let where_clause = 'WHERE c.user_id = $1';

    if (search_term) {
      parameter_list.push(`%${search_term}%`);
      where_clause += ` AND c.title ILIKE $${parameter_list.length}`;
    }

    const { rows: all_rows } = await executeSQLQuery(
      `SELECT c.id FROM collections c ${where_clause}`,
      parameter_list
    );

    const searched_collection_id_list = all_rows.map((row) => row.id);

    let sql_query = `SELECT * FROM collections c ${where_clause}`;

    sql_query += ` ORDER BY c.${sort_by} ${sort_order}`;

    parameter_list.push(limit);
    sql_query += ` LIMIT $${parameter_list.length}`;

    parameter_list.push(offset);
    sql_query += ` OFFSET $${parameter_list.length}`;

    const { rows: current_page_collection_list } = await executeSQLQuery(sql_query, parameter_list);

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      searched_collection_id_list,
      searched_note_count: searched_collection_id_list.length,
      current_page_collection_list,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
