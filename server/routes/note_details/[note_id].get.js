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
  shuffleArray,
} from '../../helpers/shuffle-array.js';

import {
  verifySessionAndReturnUser,
} from '../../helpers/verify-session-and-return-user.js';

const build_grouped_note_detail_list = (rows) => {
  const final_note_detail_list = [];
  let idx = 0;

  while (idx < rows.length) {
    const current_content_position = rows[idx].content_position;
    const same_position_group = [];

    while (
      idx < rows.length
      && rows[idx].content_position === current_content_position
    ) {
      same_position_group.push(rows[idx]);
      idx += 1;
    }

    if (same_position_group.length > 1) {
      final_note_detail_list.push(shuffleArray(same_position_group));
    } else {
      final_note_detail_list.push(same_position_group.at(0));
    }
  }

  return final_note_detail_list;
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
        error_message: 'error_unauthorized',
      };
    }

    const note = note_list.at(0);

    const {
      rows: note_detail_list,
    } = await executeSQLQuery(
      'SELECT * FROM note_details WHERE note_id = $1 ORDER BY content_position ASC, content_sub_position ASC',
      [note_id]
    );

    const grouped = build_grouped_note_detail_list(note_detail_list);

    if (note_detail_list.length === 2 && note.swappable_sides) {
      setResponseStatus(event, HTTP_CODE_200_OK);

      return {
        note_detail_list: shuffleArray(grouped),
      };
    }

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      note_detail_list: grouped,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
