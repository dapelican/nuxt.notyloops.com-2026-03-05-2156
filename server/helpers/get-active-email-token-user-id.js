'use strict';

import {
  DateTime,
} from 'luxon';

import {
  executeSQLQuery,
} from '../database/query.js';

const getPendingEmailClause = (pending_email) => {
  if (pending_email === 'absent') {
    return 'AND pending_email IS NULL';
  }

  if (pending_email === 'present') {
    return 'AND pending_email IS NOT NULL';
  }

  return '';
};

const getActiveEmailToken = async ({
  max_age_hours,
  pending_email,
  token,
  usage,
}) => {
  const created_after = DateTime
    .now()
    .minus({
      hours: max_age_hours,
    })
    .toISO();

  const {
    rows: active_user_token_list,
  } = await executeSQLQuery(
    `SELECT user_id, pending_email FROM user_email_tokens
    WHERE token = $1 AND created_at > $2::timestamptz
    AND blacklisted = $3 AND usage = $4
    ${getPendingEmailClause(pending_email)}`,
    [
      token,
      created_after,
      false,
      usage,
    ]
  );

  return active_user_token_list.at(0) ?? null;
};

const getActiveEmailTokenUserId = async (options) => {
  const active_token = await getActiveEmailToken(options);

  return active_token?.user_id ?? null;
};

export {
  getActiveEmailToken,
  getActiveEmailTokenUserId,
};
