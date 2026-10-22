import {
  COLLECTION_TYPE_LIST,
  COLLECTION_TYPE_PRIVATE,
  COLLECTION_TYPE_PUBLIC_PAYWALLLED,
  REVIEW_STRATEGY_LIST,
} from '#shared/utils/constants.js';

import {
  HTTP_CODE_201_CREATED,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../helpers/http-status-codes.js';

import {
  defineEventHandler,
  readBody,
} from 'h3';

import {
  parseCollectionPriceList,
  replaceCollectionPriceList,
} from '../../helpers/collection-prices.js';

import {
  collectionDescriptionColumns,
} from '../../helpers/collection-description-columns.js';

import {
  executeSQLTransaction,
} from '../../database/query.js';

import {
  handleBackendError,
} from '../../helpers/handle-backend-error.js';

import {
  verifySessionAndReturnUser,
} from '../../helpers/verify-session-and-return-user.js';

import { z } from 'zod';

const AND_OR_LIST = ['AND', 'OR'];

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
      inclusion_type,
      price_list,
      review_strategy,
      tag_id_list_to_exclude,
      tag_id_list_to_include,
      title,
      track_scores,
      type,
    } = await readBody(event);

    if (!AND_OR_LIST.includes(inclusion_type)) {
      event.res.status = HTTP_CODE_400_BAD_REQUEST;

      return {
        error_message: 'error_invalid_inclusion_type',
      };
    }

    if (!AND_OR_LIST.includes(exclusion_type)) {
      event.res.status = HTTP_CODE_400_BAD_REQUEST;

      return {
        error_message: 'error_invalid_exclusion_type',
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
      description_html,
      description_markdown,
    } = collectionDescriptionColumns(description);

    const new_collection = await executeSQLTransaction(async (client) => {
      const { rows: new_collection_list } = await client.query(
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
        description_markdown,
        description_html
        ) VALUES ($1, $2, $3::jsonb, $4, $5::jsonb, $6, $7, $8, $9, $10, $11) RETURNING *`,
        [
          user.id,
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
        ]
      );

      const created_collection = new_collection_list.at(0);

      await replaceCollectionPriceList(client, created_collection.id, parsed_price_list);

      return created_collection;
    });

    event.res.status = HTTP_CODE_201_CREATED;

    return {
      ...new_collection,
      price_list: parsed_price_list,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
