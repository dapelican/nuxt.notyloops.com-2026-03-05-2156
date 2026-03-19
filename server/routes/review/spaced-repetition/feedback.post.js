'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../../helpers/http-status-codes.js';

import {
  Rating,
  State,
  dateDiffInDays,
  fsrs,
} from 'ts-fsrs';

import {
  defineEventHandler,
  readBody,
  setResponseStatus,
} from 'h3';

import {
  executeSQLQuery,
} from '../../../database/query.js';

import {
  handleBackendError,
} from '../../../helpers/handle-backend-error.js';

import {
  verifySessionAndReturnUser,
} from '../../../helpers/verify-session-and-return-user.js';

import { z } from 'zod';

const ALLOWED_FEEDBACK_VALUES = ['positive', 'negative'];

const formatDateOnly = (value) => {
  if (value === null || value === undefined) {
    return null;
  }

  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  const string_value = String(value);

  return string_value.length >= 10 ? string_value.slice(0, 10) : string_value;
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

    const {
      feedback,
      note_id,
    } = await readBody(event);

    if (!z.uuid().safeParse(note_id).success) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_note_id',
      };
    }

    if (!ALLOWED_FEEDBACK_VALUES.includes(feedback)) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_feedback',
      };
    }

    const {
      rows: note_list,
    } = await executeSQLQuery(
      `SELECT *
      FROM notes
      WHERE id = $1 AND user_id = $2`,
      [note_id, user.id]
    );

    if (note_list.length === 0) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_no_item_found_for_user',
      };
    }

    const { rows } = await executeSQLQuery(
      `SELECT *
      FROM spaced_repetition_notes
      WHERE note_id = $1 AND user_id = $2`,
      [note_id, user.id]
    );

    const row = rows.at(0);

    if (!row) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_input',
      };
    }

    const grade = feedback === 'positive' ? Rating.Good : Rating.Again;
    const now = new Date();
    const f = fsrs();

    const card = {
      due: new Date(row.due_date),
      stability: row.stability,
      difficulty: row.difficulty,
      scheduled_days: row.scheduled_days,
      learning_steps: row.learning_steps ?? 0,
      reps: row.repetitions,
      lapses: row.lapses,
      state: row.state,
      last_review: row.state === State.New
        ? undefined
        : new Date(row.last_review_date),
    };

    const { card: next_card } = f.next(card, now, grade);

    const elapsed_days_for_db = row.state === State.New
      ? 0
      : dateDiffInDays(new Date(row.last_review_date), now);

    await executeSQLQuery(
      `UPDATE spaced_repetition_notes SET
        state = $1,
        due_date = $2::date,
        stability = $3,
        difficulty = $4,
        elapsed_days = $5,
        scheduled_days = $6,
        repetitions = $7,
        lapses = $8,
        last_review_date = $9,
        learning_steps = $10
      WHERE note_id = $11 AND user_id = $12`,
      [
        next_card.state,
        formatDateOnly(next_card.due),
        next_card.stability,
        next_card.difficulty,
        elapsed_days_for_db,
        next_card.scheduled_days,
        next_card.reps,
        next_card.lapses,
        next_card.last_review ?? now,
        next_card.learning_steps,
        note_id,
        user.id,
      ]
    );

    Promise.all([
      executeSQLQuery(
        `INSERT INTO note_reviews (note_id, user_id, collection_id, review_strategy, score)
        VALUES ($1, $2, $3, 'spaced_repetition', $4)`,
        [
          note_id,
          user.id,
          null,
          feedback === 'positive' ? 1 : 0,
        ]
      ),
      executeSQLQuery(
        `UPDATE notes SET
        last_review_date = $1,
        first_review_date = COALESCE(first_review_date, $1),
        review_count = review_count + 1,
        score = score + $2
        WHERE id = $3`,
        [
          now,
          feedback === 'positive' ? 1 : 0,
          note_id,
        ]
      ),
    ]);

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {};
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
