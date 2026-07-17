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
      tag_id_list,
    } = await readBody(event);

    if (!Array.isArray(tag_id_list) || tag_id_list.length === 0) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_input',
      };
    }

    // Make sure the tag_id_list belongs to the user
    const {
      rows: tag_list,
    } = await executeSQLQuery(
      'SELECT id FROM tags WHERE user_id = $1 AND id = ANY($2::uuid[])',
      [user.id, tag_id_list]
    );

    const final_tag_id_list = tag_list.map((tag) => tag.id);

    // Select the collection_id_list that belongs to the user and that has in the column
    // tag_id_list_to_include or tag_id_list_to_exclude any of the tag
    const {
      rows: collection_list,
    } = await executeSQLQuery(
      `SELECT id
       FROM collections
       WHERE user_id = $1
         AND (
           (
             tag_id_list_to_include IS NOT NULL
             AND EXISTS (
               SELECT 1
               FROM jsonb_array_elements_text(tag_id_list_to_include) AS elem
               WHERE elem::uuid = ANY($2::uuid[])
             )
           )
           OR (
             tag_id_list_to_exclude IS NOT NULL
             AND EXISTS (
               SELECT 1
               FROM jsonb_array_elements_text(tag_id_list_to_exclude) AS elem
               WHERE elem::uuid = ANY($2::uuid[])
             )
           )
         )`,
      [user.id, final_tag_id_list]
    );

    const collection_id_list = collection_list.map((collection) => collection.id);

    // Update the collection_id_list to remove the tag_id_list from the columns
    // tag_id_list_to_include and tag_id_list_to_exclude
    if (collection_id_list.length > 0) {
      await executeSQLQuery(
        `UPDATE collections
         SET
           tag_id_list_to_include = (
             SELECT COALESCE(jsonb_agg(to_jsonb(elem)), '[]'::jsonb)
             FROM jsonb_array_elements_text(COALESCE(tag_id_list_to_include, '[]'::jsonb)) AS elem
             WHERE elem::uuid <> ALL($2::uuid[])
           ),
           tag_id_list_to_exclude = (
             SELECT COALESCE(jsonb_agg(to_jsonb(elem)), '[]'::jsonb)
             FROM jsonb_array_elements_text(COALESCE(tag_id_list_to_exclude, '[]'::jsonb)) AS elem
             WHERE elem::uuid <> ALL($2::uuid[])
           )
         WHERE id = ANY($1::uuid[])`,
        [collection_id_list, final_tag_id_list]
      );
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
