'use strict';

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

    const {
      collection_id,
      language,
    } = await readBody(event);

    if (!z.uuid().safeParse(collection_id).success) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_collection_id',
      };
    }

    if (!AUTHORIZED_LANGUAGE_LIST.includes(language)) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_language',
      };
    }

    const {
      rows: collection_list,
    } = await executeSQLQuery(
      'SELECT * FROM collections WHERE id = $1 AND user_id = $2',
      [collection_id, user.id]
    );

    const collection = collection_list.at(0);

    if (collection === undefined) {
      setResponseStatus(event, HTTP_CODE_403_FORBIDDEN);

      return {
        error_message: 'error_forbidden',
      };
    }

    const duplicated_label = DUPLICATED_LABEL_BY_LANGUAGE[language];
    const new_title = `${collection.title} (${duplicated_label})`;

    const {
      rows: new_collection_list,
    } = await executeSQLQuery(
      `INSERT INTO collections (
      user_id,
      title,
      tag_id_list_to_include,
      inclusion_type,
      tag_id_list_to_exclude,
      exclusion_type,
      type,
      review_strategy,
      track_scores,
      description,
      pre_tax_price_in_cents,
      preview_note_id_list
      ) VALUES ($1, $2, $3::jsonb, $4, $5::jsonb, $6, $7, $8, $9, $10, $11, $12::jsonb) RETURNING *`,
      [
        user.id,
        new_title,
        JSON.stringify(collection.tag_id_list_to_include),
        collection.inclusion_type,
        JSON.stringify(collection.tag_id_list_to_exclude),
        collection.exclusion_type,
        collection.type,
        collection.review_strategy,
        collection.track_scores,
        collection.description,
        collection.pre_tax_price_in_cents,
        JSON.stringify(collection.preview_note_id_list),
      ]
    );

    setResponseStatus(event, HTTP_CODE_201_CREATED);

    return new_collection_list.at(0);
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
