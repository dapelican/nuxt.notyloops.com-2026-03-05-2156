'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_401_UNAUTHORIZED,
  HTTP_CODE_403_FORBIDDEN,
} from '../../helpers/http-status-codes.js';

import {
  defineEventHandler,
  readBody,
  setHeader,
  setResponseStatus,
} from 'h3';

import {
  executeSQLQuery,
} from '../../database/query.js';

import {
  handleBackendError,
} from '../../helpers/handle-backend-error.js';

import {
  selectNoteIdListOnTagCriteria,
} from '../../helpers/select-note-id-list-on-tag-criteria.js';

import {
  stringify,
} from 'csv-stringify/sync';

import {
  verifySessionAndReturnUser,
} from '../../helpers/verify-session-and-return-user.js';

import {
  z,
} from 'zod';

const CSV_COLUMNS = [
  'id',
  'title',
  'swappable_sides',
  'content_position',
  'content_sub_position',
  'content_type',
  'markdown_content',
  'html_content',
  'file_url',
  'to_be_hidden',
  'is_correct',
];

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
      collection_id,
    } = await readBody(event);

    if (!z.uuid().safeParse(collection_id).success) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_collection_id',
      };
    }

    const {
      rows: collection_list,
    } = await executeSQLQuery(
      'SELECT * FROM collections WHERE id = $1 AND user_id = $2',
      [collection_id, user.id]
    );

    const collection = collection_list.at(0);

    if (collection === undefined) {
      setResponseStatus(event, HTTP_CODE_403_FORBIDDEN);

      return {
        error_message: 'error_forbidden',
      };
    }

    const note_id_list = await selectNoteIdListOnTagCriteria(user.id, collection);

    let detail_rows = [];

    if (note_id_list.length > 0) {
      const {
        rows,
      } = await executeSQLQuery(
        `SELECT
          n.id AS note_id,
          n.title,
          n.swappable_sides,
          nd.content_position,
          nd.content_sub_position,
          nd.content_type,
          nd.markdown_content,
          nd.html_content,
          nd.file_url,
          nd.to_be_hidden,
          nd.is_correct
        FROM note_details nd
        INNER JOIN notes n ON n.id = nd.note_id
        WHERE n.user_id = $1
          AND n.deleted_at IS NULL
          AND n.id = ANY($2::uuid[])
        ORDER BY n.id, nd.content_position, nd.content_sub_position`,
        [user.id, note_id_list]
      );

      detail_rows = rows;
    }

    const note_id_to_numeric_id = new Map();
    let next_id = 1;

    for (const row of detail_rows) {
      if (!note_id_to_numeric_id.has(row.note_id)) {
        note_id_to_numeric_id.set(row.note_id, next_id);
        next_id += 1;
      }
    }

    const csv_rows = detail_rows.map((row) => ({
      id: note_id_to_numeric_id.get(row.note_id),
      title: row.title ?? '',
      swappable_sides: row.swappable_sides,
      content_position: row.content_position,
      content_sub_position: row.content_sub_position,
      content_type: row.content_type,
      markdown_content: row.markdown_content,
      html_content: row.html_content,
      file_url: row.file_url,
      to_be_hidden: row.to_be_hidden,
      is_correct: row.is_correct,
    }));

    const csv_text = stringify(csv_rows, {
      columns: CSV_COLUMNS,
      header: true,
    });

    setResponseStatus(event, HTTP_CODE_200_OK);
    setHeader(event, 'Content-Type', 'text/csv; charset=utf-8');
    setHeader(
      event,
      'Content-Disposition',
      `attachment; filename="collection-${collection_id}.csv"`
    );

    return csv_text;
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
