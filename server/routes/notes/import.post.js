'use strict';

import {
  HTTP_CODE_201_CREATED,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_401_UNAUTHORIZED,
  HTTP_CODE_403_FORBIDDEN,
} from '../../helpers/http-status-codes.js';

import {
  USER_STATUS_ADMIN,
  USER_STATUS_PREMIUM,
} from '#shared/utils/constants.js';

import {
  defineEventHandler,
  getHeader,
  readBody,
  readRawBody,
  setResponseStatus,
} from 'h3';

import {
  JSDOM,
} from 'jsdom';

import createDomPurify from 'dompurify';

import {
  executeSQLQuery,
} from '../../database/query.js';

import {
  handleBackendError,
} from '../../helpers/handle-backend-error.js';

import {
  parse,
} from 'csv-parse/sync';

import {
  sanitizeHtml,
} from '../../helpers/sanitize-html.js';

import { v7 as uuidv7 } from 'uuid';

import {
  verifySessionAndReturnUser,
} from '../../helpers/verify-session-and-return-user.js';

const dompurify = createDomPurify(new JSDOM().window);

const CONTENT_TYPE_LIST = ['text', 'image', 'audio'];

const normalize_cell = (value) => {
  if (value === null || value === undefined) {
    return '';
  }

  return String(value);
};

const parse_boolean_or_null = (value) => {
  const s = normalize_cell(value).trim().toLowerCase();

  if (s === '' || s === 'null') {
    return null;
  }

  if (['true', '1', 'yes'].includes(s)) {
    return true;
  }

  if (['false', '0', 'no'].includes(s)) {
    return false;
  }

  return null;
};

const parse_int_or_null = (value) => {
  const s = normalize_cell(value).trim();

  if (s === '') {
    return null;
  }

  const n = Number.parseInt(s, 10);

  return Number.isNaN(n) ? null : n;
};

const html_for_insert = (markdown_raw, html_raw) => {
  const markdown = markdown_raw?.trim();

  if (markdown) {
    return sanitizeHtml(markdown);
  }

  const html = html_raw?.trim();

  if (html) {
    return dompurify.sanitize(html, {
      ADD_ATTR: ['target'],
    });
  }

  return null;
};

const validate_row_list = (row_list) => {
  row_list.sort((a, b) => {
    const pa = parse_int_or_null(a.content_position) ?? 0;
    const pb = parse_int_or_null(b.content_position) ?? 0;

    if (pa !== pb) {
      return pa - pb;
    }

    const sa = parse_int_or_null(a.content_sub_position) ?? 0;
    const sb = parse_int_or_null(b.content_sub_position) ?? 0;

    return sa - sb;
  });

  const first = row_list.at(0);
  const title = normalize_cell(first.title).trim();

  if (!title) {
    return false;
  }

  for (const row of row_list) {
    const content_position = parse_int_or_null(row.content_position);

    if (content_position === null) {
      return false;
    }

    let content_type = normalize_cell(row.content_type).trim();

    if (!content_type) {
      content_type = 'text';
    }

    if (!CONTENT_TYPE_LIST.includes(content_type)) {
      return false;
    }
  }

  return true;
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

    if (
      user.status !== USER_STATUS_PREMIUM
      && user.status !== USER_STATUS_ADMIN
    ) {
      setResponseStatus(event, HTTP_CODE_403_FORBIDDEN);

      return {
        error_message: 't_error_premium_feature_required',
      };
    }

    const content_type = getHeader(event, 'content-type') ?? '';
    let csv_text;

    if (content_type.includes('application/json')) {
      const body = await readBody(event);
      csv_text = body?.csv;

      if (typeof csv_text !== 'string') {
        setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

        return {
          error_message: 'error_invalid_input',
        };
      }
    } else if (content_type.includes('text/csv') || content_type.includes('text/plain')) {
      csv_text = await readRawBody(event, 'utf8');

      if (typeof csv_text !== 'string' || csv_text.length === 0) {
        setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

        return {
          error_message: 'error_invalid_input',
        };
      }
    } else {
      const body = await readBody(event).catch(() => null);

      if (body && typeof body.csv === 'string') {
        csv_text = body.csv;
      } else {
        setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

        return {
          error_message: 'error_invalid_input',
        };
      }
    }

    let records;

    try {
      records = parse(csv_text, {
        columns: (header) => header.map((h) => String(h).trim().toLowerCase()),
        skip_empty_lines: true,
        relax_column_count: true,
      });
    } catch {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_input',
      };
    }

    if (!Array.isArray(records) || records.length === 0) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_input',
      };
    }

    const groups = new Map();

    for (const raw_row of records) {
      const file_note_id = parse_int_or_null(raw_row.id);

      if (file_note_id === null) {
        setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

        return {
          error_message: 'error_invalid_input',
        };
      }

      if (!groups.has(file_note_id)) {
        groups.set(file_note_id, []);
      }

      groups.get(file_note_id).push(raw_row);
    }

    const sorted_file_ids = [...groups.keys()].sort((a, b) => a - b);

    for (const file_note_id of sorted_file_ids) {
      if (!validate_row_list(groups.get(file_note_id))) {
        setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

        return {
          error_message: 'error_invalid_input',
        };
      }
    }

    const import_batch_label = uuidv7();

    const {
      rows: tag_rows,
    } = await executeSQLQuery(
      'INSERT INTO tags (user_id, label, lowercase_label) VALUES ($1, $2, $3) RETURNING id',
      [user.id, import_batch_label, import_batch_label.toLowerCase()]
    );

    const import_tag_id = tag_rows.at(0).id;
    let created_note_count = 0;
    let created_detail_count = 0;

    for (const file_note_id of sorted_file_ids) {
      const row_list = groups.get(file_note_id);

      const first = row_list.at(0);
      const title = normalize_cell(first.title).trim();
      const swappable_sides = parse_boolean_or_null(first.swappable_sides);

      const {
        rows: new_note_list,
      } = await executeSQLQuery(
        'INSERT INTO notes (user_id, title, swappable_sides) VALUES ($1, $2, $3) RETURNING id',
        [user.id, title, swappable_sides]
      );

      const note_id = new_note_list.at(0).id;

      created_note_count += 1;

      for (const row of row_list) {
        const content_position = parse_int_or_null(row.content_position);
        const content_sub_position = parse_int_or_null(row.content_sub_position) ?? 0;
        let content_type = normalize_cell(row.content_type).trim();

        if (!content_type) {
          content_type = 'text';
        }

        const markdown_content = normalize_cell(row.markdown_content);
        const html_raw = normalize_cell(row.html_content);
        const file_url_raw = normalize_cell(row.file_url);
        const file_url = file_url_raw.trim() === '' ? null : file_url_raw;

        await executeSQLQuery(
          `INSERT INTO note_details (
            note_id,
            content_position,
            content_sub_position,
            content_type,
            markdown_content,
            html_content,
            file_url,
            to_be_hidden,
            is_correct
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
          [
            note_id,
            content_position,
            content_sub_position,
            content_type,
            markdown_content.trim() === '' ? null : markdown_content,
            html_for_insert(
              markdown_content.trim() === '' ? null : markdown_content,
              html_raw.trim() === '' ? null : html_raw
            ),
            file_url,
            parse_boolean_or_null(row.to_be_hidden),
            parse_boolean_or_null(row.is_correct),
          ]
        );

        created_detail_count += 1;
      }

      await executeSQLQuery(
        'INSERT INTO note_tags (user_id, note_id, tag_id) VALUES ($1, $2, $3)',
        [user.id, note_id, import_tag_id]
      );
    }

    setResponseStatus(event, HTTP_CODE_201_CREATED);

    return {
      created_detail_count,
      created_note_count,
      import_tag_id,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
