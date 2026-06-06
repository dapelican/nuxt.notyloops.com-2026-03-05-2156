'use strict';

import {
  COLLECTION_TYPE_PRIVATE,
  COLLECTION_TYPE_PUBLIC_PAYWALLLED,
} from '#shared/utils/constants.js';

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

    if (collection.type === COLLECTION_TYPE_PUBLIC_PAYWALLLED) {
      const {
        rows: payment_row_list,
      } = await executeSQLQuery(
        `SELECT 1 FROM payments
        WHERE user_id = $1 AND collection_id = $2
        LIMIT 1`,
        [user.id, collection_id]
      );

      if (payment_row_list.length === 0) {
        setResponseStatus(event, HTTP_CODE_401_UNAUTHORIZED);

        return {
          error_message: 'error_unauthorized_collection_feature',
        };
      }
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

    const note_to_copy_id_list = [];

    for (const collection_note_id of collection_note_id_list) {
      if (user_source_note_id_list.includes(collection_note_id)) {
        continue;
      } else {
        note_to_copy_id_list.push(collection_note_id);
      }
    }

    if (note_to_copy_id_list.length === 0) {
      setResponseStatus(event, HTTP_CODE_200_OK);

      return {
        success: true,
        message: 'No notes to copy',
      };
    }

    let public_collection_copy_id = null;

    try {
      const {
        rows: public_collection_copy_list,
      } = await executeSQLQuery(
        `INSERT INTO public_collection_copies (
          collection_id,
          source_user_id,
          destination_user_id,
          status
        ) VALUES ($1, $2, $3, $4) RETURNING id`,
        [collection_id, user.id, user.id, 'pending']
      );

      public_collection_copy_id = public_collection_copy_list.at(0)?.id;

      const tag_label = collection.id;
      const lowercase_label = collection.id.toLowerCase();

      const {
        rows: existing_tag_list,
      } = await executeSQLQuery(
        'SELECT id FROM tags WHERE user_id = $1 AND lowercase_label = $2',
        [user.id, lowercase_label]
      );

      let tag_id;

      if (existing_tag_list.length > 0) {
        tag_id = existing_tag_list.at(0)?.id;
      } else {
        const {
          rows: tag_list,
        } = await executeSQLQuery(
          'INSERT INTO tags (user_id, label, lowercase_label) VALUES ($1, $2, $3) RETURNING id',
          [user.id, tag_label, lowercase_label]
        );

        tag_id = tag_list.at(0)?.id;
      }

      const {
        rows: new_note_list,
      } = await executeSQLQuery(
        `WITH new_notes AS (
            INSERT INTO notes (user_id, format, title, swappable_sides, source_note_id, source_collection_id)
            SELECT $1, format, title, swappable_sides, id, $2
            FROM notes
            WHERE id = ANY($3::uuid[])
            RETURNING id, source_note_id
          ),
          inserted_details AS (
            INSERT INTO note_details (
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
              nn.id,
              nd.content_position,
              nd.content_sub_position,
              nd.content_type,
              nd.markdown_content,
              nd.html_content,
              nd.file_url,
              nd.is_correct
            FROM note_details nd
            JOIN new_notes nn ON nd.note_id = nn.source_note_id
          )
          SELECT id FROM new_notes`,
        [user.id, collection_id, note_to_copy_id_list]
      );

      const new_note_id_list = new_note_list.map((note) => note.id);

      await executeSQLQuery(
        'INSERT INTO note_tags (user_id, note_id, tag_id) SELECT $1, UNNEST($2::uuid[]), $3',
        [user.id, new_note_id_list, tag_id]
      );

      await executeSQLQuery(
        'UPDATE public_collection_copies SET status = $1 WHERE id = $2',
        ['success', public_collection_copy_list.at(0)?.id]
      );

      setResponseStatus(event, HTTP_CODE_200_OK);

      return {
        success: true,
        message: 'Notes copied successfully',
      };
    } catch (error) {
      await executeSQLQuery(
        'UPDATE public_collection_copies SET status = $1 WHERE id = $2',
        ['failure', public_collection_copy_id]
      );

      throw error;
    }
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
