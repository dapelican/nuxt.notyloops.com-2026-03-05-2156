'use strict';

import {
  DateTime,
} from 'luxon';

import {
  USER_STATUS_PREMIUM,
} from '#shared/utils/constants.js';

import {
  executeSQLQuery,
} from '../database/query.js';

import {
  sendEmail,
} from '../services/amazon-ses/send-email.js';

const getDayRange = (today, day_count) => {
  const range_start = today.plus({ days: day_count });

  return {
    range_end: range_start.plus({ days: 1 }).toISO(),
    range_start: range_start.toISO(),
  };
};

const sendEmailToExtendPremium = async () => {
  const today = DateTime.utc().startOf('day');
  const seven_day_range = getDayRange(today, 7);
  const three_day_range = getDayRange(today, 3);
  let failed_email_count = 0;

  try {
    const {
      rows: user_list,
    } = await executeSQLQuery(
      `SELECT email, subdomain, premium_status_expiration_date
      FROM users
      WHERE status = $1
        AND (
          (
            premium_status_expiration_date >= $2
            AND premium_status_expiration_date < $3
          )
          OR (
            premium_status_expiration_date >= $4
            AND premium_status_expiration_date < $5
          )
        )`,
      [
        USER_STATUS_PREMIUM,
        seven_day_range.range_start,
        seven_day_range.range_end,
        three_day_range.range_start,
        three_day_range.range_end,
      ]
    );

    let sent_email_count = 0;

    for (const user of user_list) {
      const expiration_date = DateTime.fromJSDate(user.premium_status_expiration_date, {
        zone: 'utc',
      });

      const day_count = Math.round(
        expiration_date.startOf('day').diff(today, 'days').days
      );

      try {
        await sendEmail({
          bcc: 'support@notyloops.com',
          subdomain: user.subdomain,
          template_name: 'extend-premium',
          template_params: {
            day_count,
          },
          to: user.email,
        });

        sent_email_count += 1;
      } catch (error) {
        failed_email_count += 1;
        console.error('Error sending premium renewal email to', user.email, error.message);
      }
    }

    console.log('======================================');
    console.log('sent_email_count:', sent_email_count);
    console.log('failed_email_count:', failed_email_count);
    console.log('======================================');
  } catch (error) {
    console.error('Error sending premium renewal emails:', error.message);
    throw error;
  }

  if (failed_email_count > 0) {
    throw new Error(`Failed to send ${failed_email_count} premium renewal emails`);
  }
};

export {
  sendEmailToExtendPremium,
};
