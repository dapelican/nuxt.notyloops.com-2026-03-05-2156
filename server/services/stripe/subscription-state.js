import {
  USER_STATUS_PENDING,
  USER_STATUS_PREMIUM_MONTHLY,
  USER_STATUS_PREMIUM_YEARLY,
} from '#shared/utils/constants.js';

import {
  DateTime,
} from 'luxon';

import {
  executeSQLTransaction,
} from '../../database/query.js';

const ENTITLED_SUBSCRIPTION_STATUSES = new Set([
  'active',
  'past_due',
  'trialing',
]);

const readSubscriptionItem = (subscription) => {
  return subscription?.items?.data?.[0] ?? null;
};

const configuredPriceIdSet = (price_id_list) => {
  return new Set(price_id_list.filter((price_id) => {
    return typeof price_id === 'string' && price_id.length > 0;
  }));
};

const readSubscriptionPeriodEndIso = (subscription) => {
  const period_end_seconds = readSubscriptionItem(subscription)?.current_period_end
    ?? subscription?.current_period_end;

  if (typeof period_end_seconds !== 'number') {
    throw new Error('missing_subscription_period_end');
  }

  return DateTime.fromSeconds(period_end_seconds, {
    zone: 'utc',
  }).toISO();
};

const subscriptionIsScheduledToCancel = (subscription) => {
  return typeof subscription?.cancel_at === 'number'
    || subscription?.cancel_at_period_end === true;
};

const premiumStatusFromSubscription = (subscription) => {
  const price = readSubscriptionItem(subscription)?.price ?? null;
  const price_id = typeof price === 'string'
    ? price
    : price?.id ?? null;
  const {
    STRIPE_PREMIUM_MONTHLY_EUR_PRICE_ID,
    STRIPE_PREMIUM_MONTHLY_USD_PRICE_ID,
    STRIPE_PREMIUM_YEARLY_EUR_PRICE_ID,
    STRIPE_PREMIUM_YEARLY_USD_PRICE_ID,
  } = useRuntimeConfig();

  if (configuredPriceIdSet([
    STRIPE_PREMIUM_MONTHLY_EUR_PRICE_ID,
    STRIPE_PREMIUM_MONTHLY_USD_PRICE_ID,
  ]).has(price_id)) {
    return USER_STATUS_PREMIUM_MONTHLY;
  }

  if (configuredPriceIdSet([
    STRIPE_PREMIUM_YEARLY_EUR_PRICE_ID,
    STRIPE_PREMIUM_YEARLY_USD_PRICE_ID,
  ]).has(price_id)) {
    return USER_STATUS_PREMIUM_YEARLY;
  }

  const interval = price && typeof price === 'object'
    ? price.recurring?.interval
    : null;

  if (interval === 'month') {
    return USER_STATUS_PREMIUM_MONTHLY;
  }

  if (interval === 'year') {
    return USER_STATUS_PREMIUM_YEARLY;
  }

  return null;
};

const applyEntitledSubscription = async (subscription) => {
  if (!subscription?.id) {
    throw new Error('missing_stripe_subscription_id');
  }

  if (!ENTITLED_SUBSCRIPTION_STATUSES.has(subscription.status)) {
    return;
  }

  const premium_status = premiumStatusFromSubscription(subscription);
  const premium_status_expiration_date = readSubscriptionPeriodEndIso(subscription);
  const scheduled_to_cancel = subscriptionIsScheduledToCancel(subscription);

  await executeSQLTransaction(async (client) => {
    const updated_subscription = await client.query(
      `UPDATE stripe_subscriptions
      SET subscription_cancel_at_period_end = $1
      WHERE stripe_subscription_id = $2
      RETURNING user_id`,
      [scheduled_to_cancel, subscription.id]
    );

    const user_id = updated_subscription.rows.at(0)?.user_id;

    if (!user_id) {
      return;
    }

    if (premium_status) {
      await client.query(
        `UPDATE users
        SET status = $1,
            premium_status_expiration_date = $2
        WHERE id = $3`,
        [premium_status, premium_status_expiration_date, user_id]
      );

      return;
    }

    await client.query(
      `UPDATE users
      SET premium_status_expiration_date = $1
      WHERE id = $2`,
      [premium_status_expiration_date, user_id]
    );
  });
};

const endSubscription = async (subscription) => {
  if (!subscription?.id) {
    throw new Error('missing_stripe_subscription_id');
  }

  await executeSQLTransaction(async (client) => {
    const deleted = await client.query(
      `DELETE FROM stripe_subscriptions
      WHERE stripe_subscription_id = $1
      RETURNING user_id`,
      [subscription.id]
    );

    const user_id = deleted.rows.at(0)?.user_id;

    if (!user_id) {
      return;
    }

    await client.query(
      `UPDATE users
      SET status = $1
      WHERE id = $2`,
      [USER_STATUS_PENDING, user_id]
    );
  });
};

export {
  applyEntitledSubscription,
  endSubscription,
  readSubscriptionPeriodEndIso,
};
