'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../helpers/http-status-codes.js';

import {
  defineEventHandler,
  getQuery,
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

import { z } from 'zod';

const ALLOWED_PERIOD_IN_DAYS_LIST = [7, 30, 90];
const DEFAULT_PERIOD_IN_DAYS = 30;
const STREAK_LOOKBACK_DAY_COUNT = 365;

const calculateSuccessRate = (positive_count, review_count) => {
  if (!review_count) {
    return null;
  }

  return Math.round((positive_count / review_count) * 100);
};

const resolveTimeZone = (raw_time_zone) => {
  if (typeof raw_time_zone !== 'string' || raw_time_zone.length === 0) {
    return 'UTC';
  }

  const is_valid = DateTime.local().setZone(raw_time_zone).isValid;

  return is_valid ? raw_time_zone : 'UTC';
};

const resolvePeriodInDays = (raw_period_in_days) => {
  const parsed = z.coerce.number().int().safeParse(raw_period_in_days);

  if (!parsed.success || !ALLOWED_PERIOD_IN_DAYS_LIST.includes(parsed.data)) {
    return DEFAULT_PERIOD_IN_DAYS;
  }

  return parsed.data;
};

const computeStreaks = (active_date_list, today_iso) => {
  const date_set = new Set(active_date_list);

  let current_day_count = 0;
  let cursor = DateTime.fromISO(today_iso);

  if (!date_set.has(cursor.toISODate())) {
    cursor = cursor.minus({ days: 1 });
  }

  while (date_set.has(cursor.toISODate())) {
    current_day_count += 1;
    cursor = cursor.minus({ days: 1 });
  }

  const sorted_date_list = [...active_date_list].sort();
  let longest_day_count = 0;
  let run_day_count = 0;
  let previous_date = null;

  for (const date_iso of sorted_date_list) {
    if (
      previous_date
      && DateTime.fromISO(date_iso).diff(DateTime.fromISO(previous_date), 'days').days === 1
    ) {
      run_day_count += 1;
    } else {
      run_day_count = 1;
    }

    longest_day_count = Math.max(longest_day_count, run_day_count);
    previous_date = date_iso;
  }

  return {
    current_day_count,
    longest_day_count,
  };
};

export default defineEventHandler(async (event) => {
  try {
    const user = await verifySessionAndReturnUser(event);

    if (user === null) {
      setResponseStatus(event, HTTP_CODE_401_UNAUTHORIZED);

      return {
        error_message: 'error_unauthorized',
      };
    }

    const query = getQuery(event);
    const period_in_days = resolvePeriodInDays(query.period_in_days);
    const time_zone = resolveTimeZone(query.time_zone);
    const granularity = period_in_days === 90 ? 'week' : 'day';

    const now_in_zone = DateTime.now().setZone(time_zone);
    const today_iso = now_in_zone.toISODate();
    const period_start = now_in_zone.startOf('day').minus({ days: period_in_days - 1 });
    const previous_window_start = period_start.minus({ days: period_in_days });
    const streak_window_start = now_in_zone.startOf('day').minus({ days: STREAK_LOOKBACK_DAY_COUNT - 1 });

    const period_start_iso = period_start.toUTC().toISO();
    const previous_window_start_iso = previous_window_start.toUTC().toISO();
    const streak_window_start_iso = streak_window_start.toUTC().toISO();

    const [
      period_result,
      activity_result,
      streak_result,
      collection_result,
      strategy_result,
      note_result,
      all_time_result,
    ] = await Promise.all([
      executeSQLQuery(
        `SELECT
          COUNT(*) FILTER (WHERE created_at >= $2)::int AS current_review_count,
          COUNT(DISTINCT note_id) FILTER (WHERE created_at >= $2)::int AS current_distinct_note_count,
          COUNT(DISTINCT (created_at AT TIME ZONE $4)::date)
            FILTER (WHERE created_at >= $2)::int AS current_active_day_count,
          COALESCE(SUM(score) FILTER (WHERE created_at >= $2), 0)::int AS current_positive_count,
          COUNT(*) FILTER (WHERE created_at < $2)::int AS previous_review_count,
          COALESCE(SUM(score) FILTER (WHERE created_at < $2), 0)::int AS previous_positive_count
        FROM note_reviews
        WHERE user_id = $1 AND created_at >= $3`,
        [user.id, period_start_iso, previous_window_start_iso, time_zone]
      ),
      executeSQLQuery(
        `WITH bucket_series AS (
          SELECT generate_series(
            date_trunc(
              $4,
              (now() AT TIME ZONE $3)::timestamp - make_interval(days => $2 - 1)
            ),
            date_trunc($4, (now() AT TIME ZONE $3)::timestamp),
            ('1 ' || $4)::interval
          ) AS bucket_start
        )
        SELECT
          to_char(bucket_series.bucket_start, 'YYYY-MM-DD') AS bucket_start,
          COUNT(note_reviews.id)::int AS review_count,
          COALESCE(SUM(note_reviews.score), 0)::int AS positive_count
        FROM bucket_series
        LEFT JOIN note_reviews
          ON note_reviews.user_id = $1
          AND date_trunc($4, note_reviews.created_at AT TIME ZONE $3)
            = bucket_series.bucket_start
        GROUP BY bucket_series.bucket_start
        ORDER BY bucket_series.bucket_start`,
        [user.id, period_in_days, time_zone, granularity]
      ),
      executeSQLQuery(
        `SELECT DISTINCT to_char(created_at AT TIME ZONE $3, 'YYYY-MM-DD') AS active_date
        FROM note_reviews
        WHERE user_id = $1 AND created_at >= $2
        ORDER BY active_date`,
        [user.id, streak_window_start_iso, time_zone]
      ),
      executeSQLQuery(
        `SELECT
          note_reviews.collection_id,
          collections.title,
          COUNT(*)::int AS review_count,
          COALESCE(SUM(note_reviews.score), 0)::int AS positive_count
        FROM note_reviews
        LEFT JOIN collections ON collections.id = note_reviews.collection_id
        WHERE note_reviews.user_id = $1 AND note_reviews.created_at >= $2
        GROUP BY note_reviews.collection_id, collections.title
        ORDER BY review_count DESC`,
        [user.id, period_start_iso]
      ),
      executeSQLQuery(
        `SELECT
          review_strategy,
          COUNT(*)::int AS review_count,
          COALESCE(SUM(score), 0)::int AS positive_count
        FROM note_reviews
        WHERE user_id = $1 AND created_at >= $2
        GROUP BY review_strategy
        ORDER BY review_count DESC`,
        [user.id, period_start_iso]
      ),
      executeSQLQuery(
        `SELECT
          notes.id AS note_id,
          notes.title,
          COUNT(*)::int AS review_count,
          COALESCE(SUM(note_reviews.score), 0)::int AS positive_count
        FROM note_reviews
        JOIN notes
          ON notes.id = note_reviews.note_id
          AND notes.deleted_at IS NULL
        WHERE note_reviews.user_id = $1 AND note_reviews.created_at >= $2
        GROUP BY notes.id, notes.title
        HAVING COUNT(*) >= 3
        ORDER BY AVG(note_reviews.score) ASC, COUNT(*) DESC
        LIMIT 10`,
        [user.id, period_start_iso]
      ),
      executeSQLQuery(
        `SELECT
          COUNT(*)::int AS review_count,
          COUNT(DISTINCT note_id)::int AS distinct_note_count,
          MIN(created_at) AS first_review_date
        FROM note_reviews
        WHERE user_id = $1`,
        [user.id]
      ),
    ]);

    const period_row = period_result.rows.at(0);
    const all_time_row = all_time_result.rows.at(0);

    const active_date_list = streak_result.rows.map((row) => row.active_date);

    const streak = computeStreaks(active_date_list, today_iso);

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      period_in_days,
      granularity,
      current_period: {
        review_count: period_row.current_review_count,
        distinct_note_count: period_row.current_distinct_note_count,
        active_day_count: period_row.current_active_day_count,
        positive_count: period_row.current_positive_count,
        success_rate: calculateSuccessRate(
          period_row.current_positive_count,
          period_row.current_review_count
        ),
      },
      previous_period: {
        review_count: period_row.previous_review_count,
        success_rate: calculateSuccessRate(
          period_row.previous_positive_count,
          period_row.previous_review_count
        ),
      },
      activity_series: activity_result.rows.map((row) => ({
        bucket_start: row.bucket_start,
        review_count: row.review_count,
        positive_count: row.positive_count,
      })),
      streak,
      collection_breakdown: collection_result.rows.map((row) => ({
        collection_id: row.collection_id,
        title: row.title,
        review_count: row.review_count,
        success_rate: calculateSuccessRate(row.positive_count, row.review_count),
      })),
      strategy_breakdown: strategy_result.rows.map((row) => ({
        review_strategy: row.review_strategy,
        review_count: row.review_count,
        success_rate: calculateSuccessRate(row.positive_count, row.review_count),
      })),
      note_to_work_on_list: note_result.rows.map((row) => ({
        note_id: row.note_id,
        title: row.title,
        review_count: row.review_count,
        success_rate: calculateSuccessRate(row.positive_count, row.review_count),
      })),
      all_time: {
        review_count: all_time_row.review_count,
        distinct_note_count: all_time_row.distinct_note_count,
        first_review_date: all_time_row.first_review_date,
      },
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
