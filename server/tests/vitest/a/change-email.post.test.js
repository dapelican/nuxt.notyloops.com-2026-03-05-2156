import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../../helpers/http-status-codes.js';

import { beforeEach, describe, expect, it, vi } from 'vitest';

import bcrypt from 'bcrypt';

import { createTestHandler } from '../create-test-handler.js';

import {
  executeSQLQuery,
} from '../../../database/query.js';

import handler from '../../../routes/a/change-email.post.js';

import {
  sendEmail,
} from '../../../services/bento/send-email.js';

vi.mock('../../../services/bento/send-email.js', () => ({
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

  it('returns 400 when the new email is missing', async () => {
    getUserSession.mockResolvedValueOnce({
      session_token_id: SESSION_TOKEN_ID,
    });

    const response = await post({
      current_password: CURRENT_PASSWORD,
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email');
    expect(sendEmail).not.toHaveBeenCalled();
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

  it('returns 401 when the account has no password', async () => {
    const user_id = '50000000-0000-4000-8000-0000000000c9';
    const session_token_id = 'e2222222-2222-4222-8222-222222222222';

    await executeSQLQuery(
      `INSERT INTO users (id, email, password, status, subdomain)
      VALUES ($1, $2, NULL, 'unverified', 'www')`,
      [user_id, 'changeemail-nopassword@example.com']
    );

    await executeSQLQuery(
      `INSERT INTO user_session_tokens (id, user_id, token, expires_at, blacklisted)
      VALUES ($1, $2, 'changeemail-nopassword-session', now() + interval '30 days', false)`,
      [session_token_id, user_id]
    );

    getUserSession.mockResolvedValueOnce({
      session_token_id,
    });

    const compare_spy = vi.spyOn(bcrypt, 'compare');

    try {
      const response = await post({
        current_password: CURRENT_PASSWORD,
        new_email: 'nopassword-target@example.com',
      });

      expect(response.status).toBe(HTTP_CODE_401_UNAUTHORIZED);

      const data = await response.json();

      expect(data.error_message).toBe('error_wrong_credentials');
      expect(compare_spy).not.toHaveBeenCalled();
      expect(sendEmail).not.toHaveBeenCalled();
    } finally {
      compare_spy.mockRestore();
    }
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

  it('stores a pending email, blacklists the previous token, and does not switch the account', async () => {
    getUserSession.mockResolvedValueOnce({
      session_token_id: SESSION_TOKEN_ID,
    });

    const first_email = 'fresh-email@example.com';

    const first_response = await post({
      current_email: OTHER_USER_EMAIL,
      current_password: CURRENT_PASSWORD,
      new_email: first_email,
    });

    expect(first_response.status).toBe(HTTP_CODE_200_OK);

    const first_data = await first_response.json();

    expect(first_data).toEqual({ success: true });
    expect(await getUserEmail(CURRENT_EMAIL)).toBe(CURRENT_EMAIL);
    expect(await getUserEmail(OTHER_USER_EMAIL)).toBe(OTHER_USER_EMAIL);

    const first_token = await getPendingToken(first_email);

    expect(first_token.pending_email).toBe(first_email);
    expect(first_token.blacklisted).toBe(false);
    expect(sendEmail).toHaveBeenCalledWith(expect.objectContaining({
      template_name: 'confirm-email-change',
      template_params: expect.objectContaining({
        uuid: first_token.token,
      }),
      to: first_email,
    }));

    getUserSession.mockResolvedValueOnce({
      session_token_id: SESSION_TOKEN_ID,
    });

    const second_email = 'second-pending@example.com';

    const second_response = await post({
      current_password: CURRENT_PASSWORD,
      new_email: second_email,
    });

    expect(second_response.status).toBe(HTTP_CODE_200_OK);

    const {
      rows,
    } = await executeSQLQuery(
      'SELECT blacklisted FROM user_email_tokens WHERE token = $1',
      [first_token.token]
    );

    const second_token = await getPendingToken(second_email);

    expect(rows.at(0).blacklisted).toBe(true);
    expect(second_token.blacklisted).toBe(false);
    expect(sendEmail).toHaveBeenCalledWith(expect.objectContaining({
      template_name: 'confirm-email-change',
      template_params: expect.objectContaining({
        uuid: second_token.token,
      }),
      to: second_email,
    }));
    expect(await getUserEmail(CURRENT_EMAIL)).toBe(CURRENT_EMAIL);
  });

  it('deletes the token when the confirmation email fails', async () => {
    vi.mocked(sendEmail).mockRejectedValueOnce(new Error('smtp failed'));

    getUserSession.mockResolvedValueOnce({
      session_token_id: SESSION_TOKEN_ID,
    });

    const new_email = 'failed-send@example.com';

    const response = await post({
      current_password: CURRENT_PASSWORD,
      new_email,
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_email_token_not_sent');
    expect(await getPendingToken(new_email)).toBeUndefined();
    expect(await getUserEmail(CURRENT_EMAIL)).toBe(CURRENT_EMAIL);
  });
});
