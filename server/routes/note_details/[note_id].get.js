'use strict';

import {
  FREEMIUM_NOTE_LIMIT,
  NOTE_FORMAT_FLASHCARD,
  USER_STATUS_FREE,
} from '#shared/utils/constants.js';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_401_UNAUTHORIZED,
  HTTP_CODE_403_FORBIDDEN,
} from '../../helpers/http-status-codes.js';

import {
  defineEventHandler,
  getRouterParam,
  setResponseStatus,
} from 'h3';

import {
  buildGroupedNoteDetailList,
} from '../../helpers/build-grouped-note-detail-list.js';

import {
  executeSQLQuery,
} from '../../database/query.js';

import {
  handleBackendError,
} from '../../helpers/handle-backend-error.js';

import {
  shuffleArray,
} from '../../helpers/shuffle-array.js';

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
      rows: note_list,
    } = await executeSQLQuery(
      'SELECT * FROM notes WHERE user_id = $1 AND id = $2',
      [user.id, note_id]
    );

    if (note_list.length === 0) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_unauthorized',
      };
    }

    const note = note_list.at(0);

    const {
      rows: note_detail_list,
    } = await executeSQLQuery(
      `SELECT * FROM note_details
      WHERE note_id = $1
      ORDER BY content_position ASC, content_sub_position ASC`,
      [note_id]
    );

    const grouped = buildGroupedNoteDetailList(note.format, note_detail_list);

    if (note.format === NOTE_FORMAT_FLASHCARD && note.swappable_sides) {
      const shuffled_group = shuffleArray(grouped)
        .map((group, index) => ({
          ...group,
          content_position: index + 1,
        }));

      setResponseStatus(event, HTTP_CODE_200_OK);

      return {
        note_detail_list: shuffled_group,
        note_format: note.format,
      };
    }

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      note_detail_list: grouped,
      note_format: note.format,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
