'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../helpers/http-status-codes.js';

import {
  defineEventHandler,
  setResponseStatus,
} from 'h3';

import { DateTime } from 'luxon';

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

    const now = DateTime.utc();
    const week_start = now.startOf('week');
    const week_end_exclusive = week_start.plus({ weeks: 1 });

    const { rows } = await executeSQLQuery(
      `SELECT COALESCE(SUM(character_count), 0)::int AS character_count
      FROM text_to_speech_usage
      WHERE user_id = $1
        AND created_at >= $2::timestamptz
        AND created_at < $3::timestamptz`,
      [
        user.id,
        week_start.toISO(),
        week_end_exclusive.toISO(),
      ]
    );

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      character_count: rows.at(0).character_count,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
