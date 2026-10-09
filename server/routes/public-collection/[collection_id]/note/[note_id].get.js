'use strict';

import {
  COLLECTION_TYPE_PRIVATE,
  NOTE_FORMAT_FLASHCARD,
} from '#shared/utils/constants.js';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../../../helpers/http-status-codes.js';

import {
  assignContentPosition,
  buildGroupedNoteDetailList,
} from '../../../../helpers/build-grouped-note-detail-list.js';

import {
  defineEventHandler,
  getRouterParam,
  setResponseStatus,
} from 'h3';

import {
  executeSQLQuery,
} from '../../../../database/query.js';

import {
  handleBackendError,
} from '../../../../helpers/handle-backend-error.js';

import {
  selectNoteIdListOnTagCriteria,
} from '../../../../helpers/select-note-id-list-on-tag-criteria.js';

import {
  shuffleArray,
} from '../../../../helpers/shuffle-array.js';

import {
  user_can_read_public_note,
} from '../../../../helpers/public-collection-access.js';

import {
  verifySessionAndReturnUser,
} from '../../../../helpers/verify-session-and-return-user.js';

import {
  z,
} from 'zod';

export default defineEventHandler(async (event) => {
  try {
    const collection_id = getRouterParam(event, 'collection_id');
    const note_id = getRouterParam(event, 'note_id');

    if (!z.uuid().safeParse(collection_id).success) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_collection_id',
      };
    }

    if (!z.uuid().safeParse(note_id).success) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_collection_id',
      };
    }

    const {
      rows: collection_list,
    } = await executeSQLQuery(
      'SELECT * FROM collections WHERE id = $1',
      [collection_id]
    );

    const collection = collection_list.at(0);

    if (collection === undefined) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_no_item_found',
      };
    }

    if (collection.type === COLLECTION_TYPE_PRIVATE) {
      setResponseStatus(event, HTTP_CODE_401_UNAUTHORIZED);

      return {
        error_message: 'error_unauthorized',
      };
    }

    const user = await verifySessionAndReturnUser(event);
    const can_read = await user_can_read_public_note(user, collection, note_id);

    if (!can_read) {
      setResponseStatus(event, HTTP_CODE_401_UNAUTHORIZED);

      return {
        error_message: 'error_unauthorized',
      };
    }

    const note_id_list = await selectNoteIdListOnTagCriteria(collection.user_id, collection);

    if (!note_id_list.includes(note_id)) {
      setResponseStatus(event, HTTP_CODE_401_UNAUTHORIZED);

      return {
        error_message: 'error_unauthorized',
      };
    }

    const {
      rows: note_list,
    } = await executeSQLQuery(
      'SELECT * FROM notes WHERE id = $1',
      [note_id]
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
      setResponseStatus(event, HTTP_CODE_200_OK);

      return {
        note_detail_list: shuffleArray(grouped)
          .map((group, index) => assignContentPosition(group, index + 1)),
        note_format: note.format,
        title: note.title,
      };
    }

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      note_detail_list: grouped,
      note_format: note.format,
      title: note.title,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
