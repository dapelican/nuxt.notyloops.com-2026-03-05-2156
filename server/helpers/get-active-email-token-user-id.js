'use strict';

import {
  DateTime,
} from 'luxon';

import {
  executeSQLQuery,
} from '../database/query.js';

const getActiveEmailTokenUserId = async ({
  max_age_hours,
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
    `SELECT user_id FROM user_email_tokens
    WHERE token = $1 AND created_at > $2::timestamptz
    AND blacklisted = $3 AND usage = $4`,
    [
      token,
      created_after,
      false,
      usage,
    ]
  );

  return active_user_token_list.at(0)?.user_id ?? null;
};

export {
  getActiveEmailTokenUserId,
};
