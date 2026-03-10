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

    const {
      note_details,
      note_id,
      tag_id_list,
      title,
    } = await readBody(event);

    if (!note_id || !title) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_input',
      };
    }

    // Make sure the note to update belongs to the user
    const {
      rows: note_list,
    } = await executeSQLQuery(
      'SELECT id FROM notes WHERE user_id = $1 AND id = $2',
      [user.id, note_id]
    );

    if (note_list.length === 0) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_no_item_found_for_user',
      };
    }

    await executeSQLQuery(
      'UPDATE notes SET title = $1 WHERE id = $2',
      [title, note_id]
    );

    await executeSQLQuery(
      'DELETE FROM note_details WHERE note_id = $1',
      [note_id]
    );

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
      const {
        rows: existing_note_tag_list,
      } = await executeSQLQuery(
        'SELECT tag_id FROM note_tags WHERE user_id = $1 AND note_id = $2',
        [user.id, note_id]
      );

      const existing_tag_id_list = existing_note_tag_list.map((tag) => tag.tag_id);

      const new_tag_id_list = tag_id_list.filter((tag_id) => !existing_tag_id_list.includes(tag_id));

      for (const tag_id of new_tag_id_list) {
        await executeSQLQuery(
          'INSERT INTO note_tags (user_id, note_id, tag_id) VALUES ($1, $2, $3)',
          [user.id, note_id, tag_id]
        );
      }
    }

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      success: true,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
