'use strict';

import {
  HTTP_CODE_201_CREATED,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_401_UNAUTHORIZED,
  HTTP_CODE_403_FORBIDDEN,
} from '../../helpers/http-status-codes.js';

import {
  defineEventHandler,
  readBody,
  setResponseStatus,
} from 'h3';

import {
  FREEMIUM_NOTE_LIMIT,
} from '#shared/utils/constants.js';

import {
  executeSQLQuery,
} from '../../database/query.js';

import {
  handleBackendError,
} from '../../helpers/handle-backend-error.js';

import {
  sanitizeHtml,
} from '../../helpers/sanitize-html.js';

import {
  verifySessionAndReturnUser,
} from '../../helpers/verify-session-and-return-user.js';

export default defineEventHandler(async (event) => {
  try {
    const user = await verifySessionAndReturnUser(event);

    if (user === null) {
      setResponseStatus(event, HTTP_CODE_401_UNAUTHORIZED);

      return {
        error_message: 'error_unauthorized',
      };
    }

    if (user.status === USER_STATUS_FREE) {
      const { rows: note_count_rows } = await executeSQLQuery(
        'SELECT COUNT(*)::int AS count FROM notes WHERE user_id = $1 AND deleted_at IS NULL',
        [user.id]
      );

      const total_user_note_count = note_count_rows.at(0).count;

      if (total_user_note_count >= FREEMIUM_NOTE_LIMIT) {
        setResponseStatus(event, HTTP_CODE_403_FORBIDDEN);

        return {
          error_message: 'error_unauthorized_note_feature',
        };
      }
    }

    const {
      note_details,
      tag_id_list,
      title,
    } = await readBody(event);

    if (!title) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);
      return { error_message: 'error_invalid_input' };
    }

    const { rows: new_note_list } = await executeSQLQuery(
      'INSERT INTO notes (user_id, title) VALUES ($1, $2) RETURNING id',
      [user.id, title]
    );

    const note_id = new_note_list.at(0).id;

    for (const detail of note_details) {
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
        )
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
        [
          note_id,
          detail.content_position,
          detail.content_sub_position,
          detail.content_type,
          detail.markdown_content,
          detail.markdown_content?.trim()
            ? sanitizeHtml(detail.markdown_content?.trim())
            : null,
          detail.file_url,
          detail.to_be_hidden,
          detail.is_correct,
        ]
      );
    }

    if (Array.isArray(tag_id_list) && tag_id_list.length > 0) {
      for (const tag_id of tag_id_list) {
        await executeSQLQuery(
          'INSERT INTO note_tags (user_id, note_id, tag_id) VALUES ($1, $2, $3)',
          [user.id, note_id, tag_id]
        );
      }
    }

    setResponseStatus(event, HTTP_CODE_201_CREATED);

    return {
      success: true,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
