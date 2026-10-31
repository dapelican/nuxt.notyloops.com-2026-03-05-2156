import {
  USER_STATUS_PENDING,
  USER_STATUS_PREMIUM_MONTHLY,
  USER_STATUS_PREMIUM_YEARLY,
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
      WHERE status IN ($2, $3)
        AND premium_status_expiration_date <= $4`,
      [
        USER_STATUS_PENDING,
        USER_STATUS_PREMIUM_MONTHLY,
        USER_STATUS_PREMIUM_YEARLY,
        now,
      ]
    );

    console.info('================= INFO ===============================');
    console.info('file:', 'server/scripts/update-user-status.js');
    console.info('expiration_threshold:', now);
    console.info('updated_user_count:', result.rowCount);
    console.info('======================================================');
  } catch (error) {
    console.error('================= ERROR =====================');
    console.error('file:', 'server/scripts/update-user-status.js');
    console.error('Error updating expired premium users:', error.message);
    console.error('=============================================');
    throw error;
  }
};

export {
  updateUserStatus,
};
