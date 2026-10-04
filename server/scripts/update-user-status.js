'use strict';

import {
  USER_STATUS_PENDING,
  USER_STATUS_PREMIUM,
} from '#shared/utils/constants.js';

import {
  DateTime,
} from 'luxon';

import {
  executeSQLQuery,
} from '../database/query.js';

const updateUserStatus = async () => {
  const now = DateTime.utc().toISO();

  try {
    const result = await executeSQLQuery(
      `UPDATE users
      SET status = $1
      WHERE status = $2
        AND premium_status_expiration_date <= $3`,
      [
        USER_STATUS_PENDING,
        USER_STATUS_PREMIUM,
        now,
      ]
    );

    console.log('======================================');
    console.log('expiration_threshold:', now);
    console.log('updated_user_count:', result.rowCount);
    console.log('======================================');
  } catch (error) {
    console.error('Error updating expired premium users:', error.message);
    throw error;
  }
};

export {
  updateUserStatus,
};
