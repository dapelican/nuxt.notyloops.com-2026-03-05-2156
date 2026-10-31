import {
  DateTime,
} from 'luxon';

import {
  USER_STATUS_PREMIUM_YEARLY,
} from '#shared/utils/constants.js';

import {
  executeSQLQuery,
} from '../database/query.js';

import {
  sendEmail,
} from '../services/bento/send-email.js';

const sendEmailBeforePremiumYearlyRenewal = async () => {
  const today = DateTime.utc().startOf('day');
  const range_start = today.plus({ days: 7 });
  const range_end = range_start.plus({ days: 1 });
  let failed_email_count = 0;

  try {
    const {
      rows: user_list,
    } = await executeSQLQuery(
      `SELECT u.email, u.subdomain, u.premium_status_expiration_date
      FROM users u
      INNER JOIN stripe_subscriptions ss ON ss.user_id = u.id
      WHERE u.status = $1
        AND ss.subscription_cancel_at_period_end = false
        AND u.premium_status_expiration_date >= $2
        AND u.premium_status_expiration_date < $3`,
      [
        USER_STATUS_PREMIUM_YEARLY,
        range_start.toISO(),
        range_end.toISO(),
      ]
    );

    let sent_email_count = 0;

    for (const user of user_list) {
      const expiration_date = DateTime.fromJSDate(user.premium_status_expiration_date, {
        zone: 'utc',
      });
      const formatted_expiration_date = user.subdomain === 'fr'
        ? expiration_date.setLocale('fr').toFormat('d MMMM yyyy')
        : expiration_date.setLocale('en').toFormat('MMMM d, yyyy');

      try {
        await sendEmail({
          subdomain: user.subdomain,
          template_name: 'premium-yearly-renewal',
          template_params: {
            expiration_date: formatted_expiration_date,
            information_url: `https://${user.subdomain}.notyloops.com/account/information`,
          },
          to: user.email,
        });

        sent_email_count += 1;
      } catch (error) {
        failed_email_count += 1;
        console.error('================= ERROR =====================');
        console.error('file:', 'server/scripts/send-email-before-premium-yearly-renewal.js');
        console.error('Error sending yearly renewal email to', user.email, error.message);
        console.error('=============================================');
      }
    }

    console.info('================= INFO ===============================');
    console.info('file:', 'server/scripts/send-email-before-premium-yearly-renewal.js');
    console.info('sent_email_count:', sent_email_count);
    console.info('failed_email_count:', failed_email_count);
    console.info('======================================================');
  } catch (error) {
    console.error('================= ERROR =====================');
    console.error('file:', 'server/scripts/send-email-before-premium-yearly-renewal.js');
    console.error('Error sending yearly renewal emails:', error.message);
    console.error('=============================================');
    throw error;
  }

  if (failed_email_count > 0) {
    throw new Error(`Failed to send ${failed_email_count} yearly renewal emails`);
  }
};

export {
  sendEmailBeforePremiumYearlyRenewal,
};
