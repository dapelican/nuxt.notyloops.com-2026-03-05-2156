'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../../helpers/http-status-codes.js';

import {
  defineEventHandler,
  getRouterParam,
  setResponseStatus,
} from 'h3';

import {
  COLLECTION_TYPE_PRIVATE,
} from '#shared/utils/constants.js';

import {
  executeSQLQuery,
} from '../../../database/query.js';

import {
  handleBackendError,
} from '../../../helpers/handle-backend-error.js';

import {
  selectNoteIdListOnTagCriteria,
} from '../../../helpers/select-note-id-list-on-tag-criteria.js';

import {
  verifySessionAndReturnUser,
} from '../../../helpers/verify-session-and-return-user.js';

import {
  z,
} from 'zod';

export default defineEventHandler(async (event) => {
  try {
    const user = await verifySessionAndReturnUser(event);

    if (!user?.id) {
      setResponseStatus(event, HTTP_CODE_401_UNAUTHORIZED);

      return {
        error_message: 'error_unauthorized',
      };
    }

    const collection_id = getRouterParam(event, 'collection_id');

    if (!z.uuid().safeParse(collection_id).success) {
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

    const {
      rows: user_note_list,
    } = await executeSQLQuery(
      `SELECT source_note_id FROM notes
      WHERE user_id = $1 AND source_collection_id = $2 AND deleted_at IS NULL`,
      [user.id, collection_id]
    );

    const user_source_note_id_list = user_note_list.map((note) => note.source_note_id);

    const collection_note_id_list = await selectNoteIdListOnTagCriteria(collection.user_id, collection);

    let notes_to_copy = 0;
    let notes_already_copied = 0;

    for (const collection_note_id of collection_note_id_list) {
      if (user_source_note_id_list.includes(collection_note_id)) {
        notes_already_copied += 1;
      } else {
        notes_to_copy += 1;
      }
    }

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      notes_already_copied,
      notes_to_copy,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
