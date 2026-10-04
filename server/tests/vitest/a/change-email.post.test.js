'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../../helpers/http-status-codes.js';

import { beforeEach, describe, expect, it, vi } from 'vitest';

import { createTestHandler } from '../create-test-handler.js';

import {
  executeSQLQuery,
} from '../../../database/query.js';

import handler from '../../../routes/a/change-email.post.js';

import {
  sendEmail,
} from '../../../services/amazon-ses/send-email.js';

vi.mock('../../../services/amazon-ses/send-email.js', () => ({
  sendEmail: vi.fn(() => Promise.resolve()),
}));

const SESSION_TOKEN_ID = 'd0000000-0000-4000-8000-000000000004';
const SESSION_USER_ID = '50000000-0000-4000-8000-000000000008';
const OTHER_USER_EMAIL = 'changepw@example.com';
const CURRENT_EMAIL = 'changeemail@example.com';
const CURRENT_PASSWORD = 'Test1234!';

const request = createTestHandler('post', '/a/change-email', handler);

const post = (body) => request(new Request('http://localhost/a/change-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
}));

const getUserEmail = async (email) => {
  const {
    rows,
  } = await executeSQLQuery(
    'SELECT email FROM users WHERE email = $1',
    [email]
  );

  return rows.at(0)?.email;
};

const getPendingToken = async (pending_email) => {
  const {
    rows,
  } = await executeSQLQuery(
    `SELECT token, pending_email, blacklisted
    FROM user_email_tokens
    WHERE user_id = $1 AND pending_email = $2
    ORDER BY created_at DESC`,
    [SESSION_USER_ID, pending_email]
  );

  return rows.at(0);
};

describe('POST /a/change-email', () => {
  beforeEach(() => {
    vi.mocked(sendEmail).mockClear();
  });

  it('returns 401 when session is invalid', async () => {
    getUserSession.mockResolvedValueOnce({});

    const response = await post({
      current_password: CURRENT_PASSWORD,
      new_email: 'new@example.com',
    });

    expect(response.status).toBe(HTTP_CODE_401_UNAUTHORIZED);

    const data = await response.json();

    expect(data.error_message).toBe('error_unauthorized');
  });

  it('returns 400 when email is invalid', async () => {
    getUserSession.mockResolvedValueOnce({
      session_token_id: SESSION_TOKEN_ID,
    });

    const response = await post({
      current_password: CURRENT_PASSWORD,
      new_email: 'bad',
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email');
  });

  it('returns 400 when the current password is missing', async () => {
    getUserSession.mockResolvedValueOnce({
      session_token_id: SESSION_TOKEN_ID,
    });

    const response = await post({
      new_email: 'fresh-email@example.com',
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_password');
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it('returns 401 when the current password is wrong', async () => {
    getUserSession.mockResolvedValueOnce({
      session_token_id: SESSION_TOKEN_ID,
    });

    const response = await post({
      current_password: 'WrongPassword!',
      new_email: 'fresh-email@example.com',
    });

    expect(response.status).toBe(HTTP_CODE_401_UNAUTHORIZED);

    const data = await response.json();

    expect(data.error_message).toBe('error_wrong_credentials');
    expect(await getUserEmail(CURRENT_EMAIL)).toBe(CURRENT_EMAIL);
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it('returns generic success when the new email is already in use', async () => {
    getUserSession.mockResolvedValueOnce({
      session_token_id: SESSION_TOKEN_ID,
    });

    const response = await post({
      current_password: CURRENT_PASSWORD,
      new_email: 'taken@example.com',
    });

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const data = await response.json();

    expect(data).toEqual({ success: true });
    expect(await getUserEmail(CURRENT_EMAIL)).toBe(CURRENT_EMAIL);
    expect(await getUserEmail('taken@example.com')).toBe('taken@example.com');
    expect(await getPendingToken('taken@example.com')).toBeUndefined();
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it('returns generic success when the new email is unchanged', async () => {
    getUserSession.mockResolvedValueOnce({
      session_token_id: SESSION_TOKEN_ID,
    });

    const response = await post({
      current_password: CURRENT_PASSWORD,
      new_email: CURRENT_EMAIL,
    });

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const data = await response.json();

    expect(data).toEqual({ success: true });
    expect(await getPendingToken(CURRENT_EMAIL)).toBeUndefined();
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it('stores a pending email and does not switch the account', async () => {
    getUserSession.mockResolvedValueOnce({
      session_token_id: SESSION_TOKEN_ID,
    });

    const new_email = 'fresh-email@example.com';

    const response = await post({
      current_email: OTHER_USER_EMAIL,
      current_password: CURRENT_PASSWORD,
      new_email,
    });

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const data = await response.json();

    expect(data).toEqual({ success: true });
    expect(await getUserEmail(CURRENT_EMAIL)).toBe(CURRENT_EMAIL);
    expect(await getUserEmail(OTHER_USER_EMAIL)).toBe(OTHER_USER_EMAIL);

    const pending_token = await getPendingToken(new_email);

    expect(pending_token.pending_email).toBe(new_email);
    expect(pending_token.blacklisted).toBe(false);
    expect(sendEmail).toHaveBeenCalledWith(expect.objectContaining({
      template_name: 'confirm-email-change',
      template_params: expect.objectContaining({
        uuid: pending_token.token,
      }),
      to: new_email,
    }));
  });

  it('blacklists the previous pending token when a new change is requested', async () => {
    getUserSession.mockResolvedValueOnce({
      session_token_id: SESSION_TOKEN_ID,
    });

    const first_response = await post({
      current_password: CURRENT_PASSWORD,
      new_email: 'first-pending@example.com',
    });

    expect(first_response.status).toBe(HTTP_CODE_200_OK);

    const first_token = await getPendingToken('first-pending@example.com');

    getUserSession.mockResolvedValueOnce({
      session_token_id: SESSION_TOKEN_ID,
    });

    const second_response = await post({
      current_password: CURRENT_PASSWORD,
      new_email: 'second-pending@example.com',
    });

    expect(second_response.status).toBe(HTTP_CODE_200_OK);

    const {
      rows,
    } = await executeSQLQuery(
      'SELECT blacklisted FROM user_email_tokens WHERE token = $1',
      [first_token.token]
    );

    expect(rows.at(0).blacklisted).toBe(true);
    expect((await getPendingToken('second-pending@example.com')).blacklisted).toBe(false);
    expect(await getUserEmail(CURRENT_EMAIL)).toBe(CURRENT_EMAIL);
  });
});
