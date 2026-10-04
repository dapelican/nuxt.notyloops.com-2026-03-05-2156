'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_403_FORBIDDEN,
} from '../../../helpers/http-status-codes.js';

import { beforeAll, describe, expect, it, vi } from 'vitest';

import confirm_handler from '../../../routes/a/confirm-email-change.post.js';

import { createTestHandler } from '../create-test-handler.js';

import {
  executeSQLQuery,
} from '../../../database/query.js';

import {
  sendEmail,
} from '../../../services/amazon-ses/send-email.js';

import verify_handler from '../../../routes/a/verify-token-to-confirm-email-change/[token].get.js';

vi.mock('../../../services/amazon-ses/send-email.js', () => ({
  sendEmail: vi.fn(() => Promise.resolve()),
}));

const USER_ID = '50000000-0000-4000-8000-0000000000d1';
const USER_EMAIL = 'confirm-change@example.com';
const PASSWORD_HASH = '$2b$10$wL7tkbBZQyt/YiigMxI08egh.xU.pP.D87SLSGjq4NJxXAlyj/p0i';
const SIGN_UP_TOKEN = 'aabbccdd-1111-4111-8111-aabbccddeeff';
const EXPIRED_TOKEN = 'c1111111-1111-4111-8111-111111111111';
const ACTIVE_TOKEN = 'c2222222-2222-4222-8222-222222222222';
const TAKEN_TOKEN = 'c3333333-3333-4333-8333-333333333333';
const PENDING_EMAIL = 'pending-confirm@example.com';
const SESSION_TOKEN_ID = 'c4444444-4444-4444-8444-444444444444';

const verify_request = createTestHandler(
  'get',
  '/a/verify-token-to-confirm-email-change/:token',
  verify_handler
);

const confirm_request = createTestHandler('post', '/a/confirm-email-change', confirm_handler);

const verify = (token) => verify_request(
  new Request(`http://localhost/a/verify-token-to-confirm-email-change/${token}`)
);

const confirm = (token) => confirm_request(new Request('http://localhost/a/confirm-email-change', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ token }),
}));

const insertToken = async ({
  created_at_sql = 'now()',
  pending_email,
  token,
}) => {
  await executeSQLQuery(
    `INSERT INTO user_email_tokens (user_id, token, usage, pending_email, blacklisted, created_at)
    VALUES ($1, $2, 'validate_email', $3, false, ${created_at_sql})`,
    [USER_ID, token, pending_email]
  );
};

describe('email change confirmation', () => {
  beforeAll(async () => {
    await executeSQLQuery(
      `INSERT INTO users (id, email, password, status, subdomain)
      VALUES ($1, $2, $3, 'premium', 'www')`,
      [USER_ID, USER_EMAIL, PASSWORD_HASH]
    );

    await insertToken({
      created_at_sql: 'now() - interval \'100 hours\'',
      pending_email: 'expired-pending@example.com',
      token: EXPIRED_TOKEN,
    });

    await insertToken({
      pending_email: PENDING_EMAIL,
      token: ACTIVE_TOKEN,
    });

    await insertToken({
      pending_email: 'taken@example.com',
      token: TAKEN_TOKEN,
    });

    await executeSQLQuery(
      `INSERT INTO user_session_tokens (id, user_id, token, expires_at, blacklisted)
      VALUES ($1, $2, 'confirm-email-change-session', now() + interval '1 day', false)`,
      [SESSION_TOKEN_ID, USER_ID]
    );
  });

  it('returns 400 when the verify token format is invalid', async () => {
    const response = await verify('not-a-uuid');

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email_token');
  });

  it('returns 400 when a sign-up token is used to verify an email change', async () => {
    const response = await verify(SIGN_UP_TOKEN);

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email_token');
  });

  it('returns 400 when the verify token is expired', async () => {
    const response = await verify(EXPIRED_TOKEN);

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email_token');
  });

  it('returns the pending email for an active change token', async () => {
    const response = await verify(ACTIVE_TOKEN);

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const data = await response.json();

    expect(data.pending_email).toBe(PENDING_EMAIL);
  });

  it('returns 400 when the confirm token format is invalid', async () => {
    const response = await confirm('not-a-uuid');

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email_token');
  });

  it('returns 400 when a sign-up token is used to confirm an email change', async () => {
    const response = await confirm(SIGN_UP_TOKEN);

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email_token');
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it('returns 403 and does not switch the email when the address is taken', async () => {
    const response = await confirm(TAKEN_TOKEN);

    expect(response.status).toBe(HTTP_CODE_403_FORBIDDEN);

    const data = await response.json();

    expect(data.error_message).toBe('error_email_already_in_use');

    const {
      rows: user_rows,
    } = await executeSQLQuery(
      'SELECT email FROM users WHERE id = $1',
      [USER_ID]
    );

    expect(user_rows.at(0).email).toBe(USER_EMAIL);

    const {
      rows: token_rows,
    } = await executeSQLQuery(
      `SELECT blacklisted FROM user_email_tokens
      WHERE token = $1 AND usage = 'validate_email'`,
      [TAKEN_TOKEN]
    );

    expect(token_rows.at(0).blacklisted).toBe(true);

    const {
      rows: session_rows,
    } = await executeSQLQuery(
      'SELECT blacklisted FROM user_session_tokens WHERE id = $1',
      [SESSION_TOKEN_ID]
    );

    expect(session_rows.at(0).blacklisted).toBe(false);
    expect(clearUserSession).not.toHaveBeenCalled();
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it('switches the email when the token is consumed', async () => {
    const response = await confirm(ACTIVE_TOKEN);

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const data = await response.json();

    expect(data).toEqual({ success: true });

    const {
      rows: user_rows,
    } = await executeSQLQuery(
      'SELECT email FROM users WHERE id = $1',
      [USER_ID]
    );

    expect(user_rows.at(0).email).toBe(PENDING_EMAIL);

    const {
      rows: token_rows,
    } = await executeSQLQuery(
      `SELECT blacklisted FROM user_email_tokens
      WHERE token = $1 AND usage = 'validate_email'`,
      [ACTIVE_TOKEN]
    );

    expect(token_rows.at(0).blacklisted).toBe(true);

    const {
      rows: session_rows,
    } = await executeSQLQuery(
      'SELECT blacklisted FROM user_session_tokens WHERE id = $1',
      [SESSION_TOKEN_ID]
    );

    expect(session_rows.at(0).blacklisted).toBe(true);
    expect(clearUserSession).toHaveBeenCalled();
    expect(sendEmail).toHaveBeenCalledWith(expect.objectContaining({
      template_name: 'email-changed',
      template_params: { new_email: PENDING_EMAIL },
      to: USER_EMAIL,
    }));
  });
});
