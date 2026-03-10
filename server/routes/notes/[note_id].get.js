'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../helpers/http-status-codes.js';

import {
  defineEventHandler,
  getRouterParam,
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

    const note_id = getRouterParam(event, 'note_id');

    if (!note_id) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_input',
      };
    }

    const {
      rows: note_list,
    } = await executeSQLQuery(
      'SELECT * FROM notes WHERE user_id = $1 AND id = $2',
      [user.id, note_id]
    );

    if (note_list.length === 0) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_input',
      };
    }

    const [
      {
        rows: note_detail_list,
      },
      {
        rows: tag_list,
      },
    ] = await Promise.all([
      executeSQLQuery(
        'SELECT * FROM note_details WHERE note_id = $1 ORDER BY content_position ASC, content_sub_position ASC',
        [note_id]
      ),
      executeSQLQuery(
        `SELECT t.id, t.label
         FROM note_tags nt LEFT JOIN tags t ON t.id = nt.tag_id WHERE nt.note_id = $1`,
        [note_id]
      ),
    ]);

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      ...note_list.at(0),
      note_detail_list,
      tag_list,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
