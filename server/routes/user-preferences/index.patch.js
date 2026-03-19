'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../helpers/http-status-codes.js';

import {
  defineEventHandler,
  readBody,
  setResponseStatus,
} from 'h3';

import {
  LIST_PREFERENCE_AREA_SET,
} from '../../helpers/constants.js';

import {
  executeSQLQuery,
} from '../../database/query.js';

import {
  handleBackendError,
} from '../../helpers/handle-backend-error.js';

import {
  verifySessionAndReturnUser,
} from '../../helpers/verify-session-and-return-user.js';

const is_non_empty_string = (value) => typeof value === 'string' && value.length > 0;

const buildStoredPayloadFromBody = (body_payload) => {
  if (body_payload === null || typeof body_payload !== 'object' || Array.isArray(body_payload)) {
    return null;
  }

  if (typeof body_payload.sort_option !== 'string'
    || typeof body_payload.search_criteria_term !== 'string'
    || !Array.isArray(body_payload.search_criteria_tag_id_list)
  ) {
    return null;
  }

  const tag_id_list = body_payload.search_criteria_tag_id_list.filter(is_non_empty_string);

  return {
    search_criteria_tag_id_list: tag_id_list,
    search_criteria_term: body_payload.search_criteria_term,
    sort_option: body_payload.sort_option,
  };
};

const responsePayloadForArea = (area, stored_payload) => {
  if (area === 'tag') {
    return {
      sort_option: stored_payload.sort_option,
      search_criteria_term: stored_payload.search_criteria_term,
      search_criteria_tag_id_list: [],
    };
  }

  return {
    sort_option: stored_payload.sort_option,
    search_criteria_term: stored_payload.search_criteria_term,
    search_criteria_tag_id_list: stored_payload.search_criteria_tag_id_list,
  };
};

const upsertNotePreferences = async (user_id, stored_payload) => {
  const { rowCount } = await executeSQLQuery(
    `UPDATE user_preferences SET
      note_search_criteria_term = $2,
      note_search_criteria_tag_id_list = $3::text[],
      note_sort_option = $4
    WHERE user_id = $1`,
    [user_id, stored_payload.search_criteria_term, stored_payload.search_criteria_tag_id_list, stored_payload.sort_option]
  );

  if (rowCount === 0) {
    await executeSQLQuery(
      `INSERT INTO user_preferences (user_id, note_search_criteria_term, note_search_criteria_tag_id_list, note_sort_option)
      VALUES ($1, $2, $3::text[], $4)`,
      [user_id, stored_payload.search_criteria_term, stored_payload.search_criteria_tag_id_list, stored_payload.sort_option]
    );
  }
};

const upsertTagPreferences = async (user_id, stored_payload) => {
  const { rowCount } = await executeSQLQuery(
    `UPDATE user_preferences SET
      tag_search_criteria_term = $2,
      tag_sort_option = $3
    WHERE user_id = $1`,
    [user_id, stored_payload.search_criteria_term, stored_payload.sort_option]
  );

  if (rowCount === 0) {
    await executeSQLQuery(
      `INSERT INTO user_preferences (user_id, tag_search_criteria_term, tag_sort_option)
      VALUES ($1, $2, $3)`,
      [user_id, stored_payload.search_criteria_term, stored_payload.sort_option]
    );
  }
};

const upsertCollectionPreferences = async (user_id, stored_payload) => {
  const { rowCount } = await executeSQLQuery(
    `UPDATE user_preferences SET
      collection_search_criteria_term = $2,
      collection_search_criteria_tag_id_list = $3::text[],
      collection_sort_option = $4
    WHERE user_id = $1`,
    [user_id, stored_payload.search_criteria_term, stored_payload.search_criteria_tag_id_list, stored_payload.sort_option]
  );

  if (rowCount === 0) {
    await executeSQLQuery(
      `INSERT INTO user_preferences (user_id, collection_search_criteria_term, collection_search_criteria_tag_id_list, collection_sort_option)
      VALUES ($1, $2, $3::text[], $4)`,
      [user_id, stored_payload.search_criteria_term, stored_payload.search_criteria_tag_id_list, stored_payload.sort_option]
    );
  }
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

    const {
      area,
      payload: body_payload,
    } = await readBody(event);

    if (!LIST_PREFERENCE_AREA_SET.has(area)) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_input',
      };
    }

    const stored_payload = buildStoredPayloadFromBody(body_payload);

    if (stored_payload === null) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_input',
      };
    }

    if (area === 'note') {
      await upsertNotePreferences(user.id, stored_payload);
    } else if (area === 'tag') {
      await upsertTagPreferences(user.id, stored_payload);
    } else {
      await upsertCollectionPreferences(user.id, stored_payload);
    }

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      area,
      payload: responsePayloadForArea(area, stored_payload),
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
