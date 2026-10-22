import {
  COLLECTION_TYPE_LIST,
  COLLECTION_TYPE_PRIVATE,
  COLLECTION_TYPE_PUBLIC_PAYWALLLED,
  REVIEW_STRATEGY_LIST,
} from '#shared/utils/constants.js';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../helpers/http-status-codes.js';

import {
  defineEventHandler,
  readBody,
} from 'h3';

import {
  executeSQLQuery,
  executeSQLTransaction,
} from '../../database/query.js';

import {
  parseCollectionPriceList,
  replaceCollectionPriceList,
} from '../../helpers/collection-prices.js';

import {
  collectionDescriptionColumns,
} from '../../helpers/collection-description-columns.js';

import {
  handleBackendError,
} from '../../helpers/handle-backend-error.js';

import {
  verifySessionAndReturnUser,
} from '../../helpers/verify-session-and-return-user.js';

import { z } from 'zod';

export default defineEventHandler(async (event) => {
  try {
    const user = await verifySessionAndReturnUser(event);

    if (user === null) {
      event.res.status = HTTP_CODE_401_UNAUTHORIZED;

      return {
        error_message: 'error_unauthorized',
      };
    }

    const {
      description,
      exclusion_type,
      id,
      inclusion_type,
      price_list,
      review_strategy,
      tag_id_list_to_exclude,
      tag_id_list_to_include,
      title,
      track_scores,
      type,
    } = await readBody(event);

    const AND_OR_LIST = ['AND', 'OR'];

    if (!AND_OR_LIST.includes(inclusion_type)) {
      event.res.status = HTTP_CODE_400_BAD_REQUEST;

      return {
        error_message: 'error_invalid_input',
      };
    }

    if (!AND_OR_LIST.includes(exclusion_type)) {
      event.res.status = HTTP_CODE_400_BAD_REQUEST;

      return {
        error_message: 'error_invalid_input',
      };
    }

    if (!z.uuid().safeParse(id).success) {
      event.res.status = HTTP_CODE_400_BAD_REQUEST;

      return {
        error_message: 'error_invalid_collectionid',
      };
    }

    if (!z.string().min(1).safeParse(title).success) {
      event.res.status = HTTP_CODE_400_BAD_REQUEST;

      return {
        error_message: 'error_invalid_collection_title',
      };
    }

    if (!COLLECTION_TYPE_LIST.includes(type)) {
      event.res.status = HTTP_CODE_400_BAD_REQUEST;

      return {
        error_message: 'error_invalid_collection_type',
      };
    }

    if (type === COLLECTION_TYPE_PRIVATE && !REVIEW_STRATEGY_LIST.includes(review_strategy)) {
      event.res.status = HTTP_CODE_400_BAD_REQUEST;

      return {
        error_message: 'error_invalid_collection_review_strategy',
      };
    }

    const uuid_array_schema = z.array(z.uuid()).nullable().optional();

    if (!uuid_array_schema.safeParse(tag_id_list_to_include).success) {
      event.res.status = HTTP_CODE_400_BAD_REQUEST;

      return {
        error_message: 'error_invalid_tag_id_list_to_include',
      };
    }

    if (!uuid_array_schema.safeParse(tag_id_list_to_exclude).success) {
      event.res.status = HTTP_CODE_400_BAD_REQUEST;

      return {
        error_message: 'error_invalid_tag_id_list_to_exclude',
      };
    }

    let parsed_price_list = [];

    if (type === COLLECTION_TYPE_PUBLIC_PAYWALLLED) {
      parsed_price_list = parseCollectionPriceList(price_list);

      if (parsed_price_list === null) {
        event.res.status = HTTP_CODE_400_BAD_REQUEST;

        return {
          error_message: 'error_invalid_collection_price_list',
        };
      }
    }

    const {
      rows: existing_collection_list,
    } = await executeSQLQuery(
      'SELECT user_id FROM collections WHERE id = $1 AND user_id = $2',
      [id, user.id]
    );

    if (existing_collection_list.length === 0) {
      event.res.status = HTTP_CODE_400_BAD_REQUEST;

      return {
        error_message: 'error_no_collection_found',
      };
    }

    if (existing_collection_list.at(0).user_id !== user.id) {
      event.res.status = HTTP_CODE_401_UNAUTHORIZED;

      return {
        error_message: 'error_unauthorized',
      };
    }

    const {
      description_html,
      description_markdown,
    } = collectionDescriptionColumns(description);

    const updated_collection = await executeSQLTransaction(async (client) => {
      const {
        rows: updated_row_list,
      } = await client.query(
        `UPDATE collections SET
          title = $2,
          tag_id_list_to_include = $3::jsonb,
          inclusion_type = $4,
          tag_id_list_to_exclude = $5::jsonb,
          exclusion_type = $6,
          type = $7,
          review_strategy = $8,
          track_scores = $9,
          description_markdown = $10,
          description_html = $11
        WHERE id = $1 AND user_id = $12
        RETURNING *`,
        [
          id,
          title,
          JSON.stringify(tag_id_list_to_include),
          inclusion_type,
          JSON.stringify(tag_id_list_to_exclude),
          exclusion_type,
          type,
          review_strategy,
          track_scores,
          description_markdown,
          description_html,
          user.id,
        ]
      );

      await replaceCollectionPriceList(client, id, parsed_price_list);

      return updated_row_list.at(0);
    });

    event.res.status = HTTP_CODE_200_OK;

    return {
      ...updated_collection,
      price_list: parsed_price_list,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
