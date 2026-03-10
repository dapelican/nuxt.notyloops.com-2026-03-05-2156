'use strict';

import {
  HTTP_CODE_204_NO_CONTENT,
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
      note_id_list,
      tag_id_list,
    } = await readBody(event);

    if (!Array.isArray(note_id_list) || !Array.isArray(tag_id_list)
      || note_id_list.length === 0 || tag_id_list.length === 0
    ) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_input',
      };
    }

    // Only select notes that belong to user
    const {
      rows: note_list,
    } = await executeSQLQuery(
      'SELECT id FROM notes WHERE user_id = $1 AND id = ANY($2::uuid[])',
      [user.id, note_id_list]
    );

    const final_note_id_list = note_list.map((note) => note.id);

    // Only select tags that belong to user
    const {
      rows: tag_list,
    } = await executeSQLQuery(
      'SELECT id FROM tags WHERE user_id = $1 AND id = ANY($2::uuid[])',
      [user.id, tag_id_list]
    );

    const final_tag_id_list = tag_list.map((tag) => tag.id);

    // Link notes to tags
    for (const note_id of final_note_id_list) {
      for (const tag_id of final_tag_id_list) {
        const {
          rows: existing_note_tag_list,
        } = await executeSQLQuery(
          'SELECT id FROM note_tags WHERE user_id = $1 AND note_id = $2 AND tag_id = $3',
          [user.id, note_id, tag_id]
        );

        if (existing_note_tag_list.length > 0) {
          continue;
        }

        await executeSQLQuery(
          'INSERT INTO note_tags (user_id, note_id, tag_id) VALUES ($1, $2, $3)',
          [user.id, note_id, tag_id]
        )
          .catch(() => null);
      }
    }

    setResponseStatus(event, HTTP_CODE_204_NO_CONTENT);

    return {
      success: true,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
