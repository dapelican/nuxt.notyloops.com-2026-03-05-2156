'use strict';

import {
  FREEMIUM_NOTE_LIMIT,
  USER_STATUS_FREE,
} from '#shared/utils/constants.js';

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
  executeSQLQuery,
} from '../../database/query.js';

import {
  handleBackendError,
} from '../../helpers/handle-backend-error.js';

import {
  verifySessionAndReturnUser,
} from '../../helpers/verify-session-and-return-user.js';

import {
  z,
} from 'zod';

const DUPLICATED_LABEL_BY_LANGUAGE = {
  en: 'duplicated',
  fr: 'dupliqué',
};

const AUTHORIZED_LANGUAGE_LIST = Object.keys(DUPLICATED_LABEL_BY_LANGUAGE);

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
      const {
        rows: note_count_rows,
      } = await executeSQLQuery(
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
      note_id,
      language,
    } = await readBody(event);

    if (!z.uuid().safeParse(note_id).success) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_note_id',
      };
    }

    if (!AUTHORIZED_LANGUAGE_LIST.includes(language)) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_language',
      };
    }

    const {
      rows: note_list,
    } = await executeSQLQuery(
      'SELECT * FROM notes WHERE id = $1 AND user_id = $2 AND deleted_at IS NULL',
      [note_id, user.id]
    );

    const note = note_list.at(0);

    if (note === undefined) {
      setResponseStatus(event, HTTP_CODE_403_FORBIDDEN);

      return {
        error_message: 'error_forbidden',
      };
    }

    const duplicated_label = DUPLICATED_LABEL_BY_LANGUAGE[language];
    const new_title = `${note.title} (${duplicated_label})`;

    const {
      rows: new_note_list,
    } = await executeSQLQuery(
      `INSERT INTO notes (user_id, title, format, swappable_sides)
      VALUES ($1, $2, $3, $4)
      RETURNING *`,
      [user.id, new_title, note.format, note.swappable_sides]
    );

    const new_note = new_note_list.at(0);

    await executeSQLQuery(
      `INSERT INTO note_details (
        note_id,
        content_position,
        content_sub_position,
        content_type,
        markdown_content,
        html_content,
        file_url,
        is_correct
      )
      SELECT
        $1,
        content_position,
        content_sub_position,
        content_type,
        markdown_content,
        html_content,
        file_url,
        is_correct
      FROM note_details
      WHERE note_id = $2 AND deleted_at IS NULL`,
      [new_note.id, note_id]
    );

    await executeSQLQuery(
      `INSERT INTO note_tags (user_id, note_id, tag_id)
      SELECT user_id, $1, tag_id
      FROM note_tags
      WHERE note_id = $2 AND user_id = $3`,
      [new_note.id, note_id, user.id]
    );

    setResponseStatus(event, HTTP_CODE_201_CREATED);

    return new_note;
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
