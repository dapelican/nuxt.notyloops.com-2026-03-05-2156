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
        error_message: 'error_no_item_foundr',
      };
    }

    if (collection.type === COLLECTION_TYPE_PRIVATE) {
      setResponseStatus(event, HTTP_CODE_401_UNAUTHORIZED);

      return {
        error_message: 'error_unauthorized',
      };
    }

    const note_id_list = await selectNoteIdListOnTagCriteria(collection.user_id, collection);

    const {
      rows: note_list,
    } = await executeSQLQuery(
      `SELECT id, title FROM notes WHERE id = ANY($1::uuid[])
      ORDER BY title ASC`,
      [note_id_list]
    );

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      collection,
      collection_belongs_to_connected_user: user?.id && (collection?.user_id === user?.id),
      note_list,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
