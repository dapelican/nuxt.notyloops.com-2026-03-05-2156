'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../helpers/http-status-codes.js';

import {
  defineEventHandler,
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

const DEFAULT_SORT_OPTION = 'created_at:desc';

const buildDefaultPreferenceByArea = () => ({
  note: {
    sort_option: DEFAULT_SORT_OPTION,
    search_criteria_term: '',
    search_criteria_tag_id_list: [],
  },
  tag: {
    sort_option: DEFAULT_SORT_OPTION,
    search_criteria_term: '',
    search_criteria_tag_id_list: [],
  },
  collection: {
    sort_option: DEFAULT_SORT_OPTION,
    search_criteria_term: '',
    search_criteria_tag_id_list: [],
  },
});

export default defineEventHandler(async (event) => {
  try {
    const user = await verifySessionAndReturnUser(event);

    if (user === null) {
      setResponseStatus(event, HTTP_CODE_401_UNAUTHORIZED);

      return {
        error_message: 'error_unauthorized',
      };
    }

    const { rows: row_list } = await executeSQLQuery(
      `SELECT
        note_search_criteria_term,
        note_search_criteria_tag_id_list,
        note_sort_option,
        tag_search_criteria_term,
        tag_sort_option,
        collection_search_criteria_term,
        collection_search_criteria_tag_id_list,
        collection_sort_option
      FROM user_preferences
      WHERE user_id = $1
      LIMIT 1`,
      [user.id]
    );

    const row = row_list.at(0);

    if (row === undefined) {
      setResponseStatus(event, HTTP_CODE_200_OK);

      return {
        preference_by_area: buildDefaultPreferenceByArea(),
      };
    }

    const note_tag_list = Array.isArray(row.note_search_criteria_tag_id_list)
      ? row.note_search_criteria_tag_id_list
      : [];
    const collection_tag_list = Array.isArray(row.collection_search_criteria_tag_id_list)
      ? row.collection_search_criteria_tag_id_list
      : [];

    const preference_by_area = {
      note: {
        sort_option: row.note_sort_option ?? DEFAULT_SORT_OPTION,
        search_criteria_term: row.note_search_criteria_term ?? '',
        search_criteria_tag_id_list: note_tag_list,
      },
      tag: {
        sort_option: row.tag_sort_option ?? DEFAULT_SORT_OPTION,
        search_criteria_term: row.tag_search_criteria_term ?? '',
        search_criteria_tag_id_list: [],
      },
      collection: {
        sort_option: row.collection_sort_option ?? DEFAULT_SORT_OPTION,
        search_criteria_term: row.collection_search_criteria_term ?? '',
        search_criteria_tag_id_list: collection_tag_list,
      },
    };

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      preference_by_area,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
