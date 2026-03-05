'use strict';

import { DateTime } from 'luxon';

import {
  SESSION_RENEWAL_THRESHOLD_IN_MINUTES,
} from './constants.js';

import {
  executeSQLQuery,
} from '../database/query.js';

import {
  handleBackendError,
} from './handle-backend-error.js';

const verifySessionAndReturnUser = async (event) => {
  try {
    const session = await getUserSession(event);

    if (!session?.session_token_id) {
      return null;
    }

    const { rows: result_list } = await executeSQLQuery(
      `SELECT u.id, u.email, u.status, ust.updated_at
      FROM user_session_tokens ust
      JOIN users u ON u.id = ust.user_id
      WHERE ust.id = $1 AND ust.blacklisted = false AND ust.expires_at > now()`,
      [session.session_token_id]
    );

    if (result_list.length === 0) {
      await clearUserSession(event);
      return null;
    }

    const { id, email, status, updated_at } = result_list.at(0);

    const minutes_since_update = DateTime.utc()
      .diff(DateTime.fromJSDate(updated_at), 'minutes')
      .minutes;

    if (minutes_since_update >= SESSION_RENEWAL_THRESHOLD_IN_MINUTES) {
      const session_max_age_days = Number(useRuntimeConfig().SESSION_MAX_AGE_DAYS);

      const new_expires_at = DateTime
        .utc()
        .plus({ days: session_max_age_days })
        .toISO();

      await executeSQLQuery(
        `UPDATE user_session_tokens
        SET expires_at = $1
        WHERE id = $2`,
        [
          new_expires_at,
          session.session_token_id,
        ]
      );

      await replaceUserSession(event, {
        user: { id },
        session_token_id: session.session_token_id,
      });
    }

    return { id, email, status };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
};

export {
  verifySessionAndReturnUser,
};
