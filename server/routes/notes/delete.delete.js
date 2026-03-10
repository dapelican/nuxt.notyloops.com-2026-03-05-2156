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
    } = await readBody(event);

    if (!Array.isArray(note_id_list) || note_id_list.length === 0) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_input',
      };
    }

    const {
      rows: note_list,
    } = await executeSQLQuery(
      'SELECT id FROM notes WHERE user_id = $1 AND id = ANY($2::uuid[])',
      [user.id, note_id_list]
    );

    const final_note_id_list = note_list.map((note) => note.id);

    await executeSQLQuery(
      'UPDATE notes SET deleted_at = now() WHERE id = ANY($1::uuid[])',
      [final_note_id_list]
    );

    setResponseStatus(event, HTTP_CODE_204_NO_CONTENT);

    return {
      success: true,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
