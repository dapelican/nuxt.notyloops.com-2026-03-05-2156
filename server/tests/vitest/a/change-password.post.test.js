import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../../helpers/http-status-codes.js';

import { describe, expect, it, vi } from 'vitest';

import bcrypt from 'bcrypt';

import { createTestHandler } from '../create-test-handler.js';

import {
  executeSQLQuery,
} from '../../../database/query.js';

import handler from '../../../routes/a/change-password.post.js';

import {
  sendEmail,
} from '../../../services/bento/send-email.js';

vi.mock('../../../services/bento/send-email.js', () => ({
  sendEmail: vi.fn(() => Promise.resolve()),
}));

const SESSION_TOKEN_ID = 'c0000000-0000-4000-8000-000000000003';
const USER_EMAIL = 'changepw@example.com';

const request = createTestHandler('post', '/a/change-password', handler);

const post = (body) => request(new Request('http://localhost/a/change-password', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
}));

describe('POST /a/change-password', () => {
  it('returns 401 when session is invalid', async () => {
    getUserSession.mockResolvedValueOnce({});

    const response = await post({
      email: USER_EMAIL,
      current_password: 'Test1234!',
      new_password_1: 'NewPass1!',
      new_password_2: 'NewPass1!',
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
      email: 'bad',
      current_password: 'Test1234!',
      new_password_1: 'NewPass1!',
      new_password_2: 'NewPass1!',
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email');
  });

  it('returns 400 when the new passwords are missing', async () => {
    getUserSession.mockResolvedValueOnce({
      session_token_id: SESSION_TOKEN_ID,
    });

    const response = await post({
      email: USER_EMAIL,
      current_password: 'Test1234!',
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_password');
  });

  it('returns 400 when new passwords do not match', async () => {
    getUserSession.mockResolvedValueOnce({
      session_token_id: SESSION_TOKEN_ID,
    });

    const response = await post({
      email: USER_EMAIL,
      current_password: 'Test1234!',
      new_password_1: 'NewPass1!',
      new_password_2: 'Different!',
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_password');
  });

  it('returns 401 when email does not match authenticated user', async () => {
    getUserSession.mockResolvedValueOnce({
      session_token_id: SESSION_TOKEN_ID,
    });

    const response = await post({
      email: 'other@example.com',
      current_password: 'Test1234!',
      new_password_1: 'NewPass1!',
      new_password_2: 'NewPass1!',
    });

    expect(response.status).toBe(HTTP_CODE_401_UNAUTHORIZED);

    const data = await response.json();

    expect(data.error_message).toBe('error_unauthorized');
  });

  it('returns 401 when current password is wrong', async () => {
    getUserSession.mockResolvedValueOnce({
      session_token_id: SESSION_TOKEN_ID,
    });

    const response = await post({
      email: USER_EMAIL,
      current_password: 'WrongPassword!',
      new_password_1: 'NewPass1!',
      new_password_2: 'NewPass1!',
    });

    expect(response.status).toBe(HTTP_CODE_401_UNAUTHORIZED);

    const data = await response.json();

    expect(data.error_message).toBe('error_wrong_credentials');
  });

  it('returns 200 on successful password change', async () => {
    getUserSession.mockResolvedValueOnce({
      session_token_id: SESSION_TOKEN_ID,
    });

    const response = await post({
      email: USER_EMAIL,
      current_password: 'Test1234!',
      new_password_1: 'BrandNew1!',
      new_password_2: 'BrandNew1!',
    });

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const data = await response.json();

    expect(data).toEqual({ success: true });

    const {
      rows: user_rows,
    } = await executeSQLQuery(
      'SELECT password FROM users WHERE email = $1',
      [USER_EMAIL]
    );

    expect(await bcrypt.compare('BrandNew1!', user_rows.at(0).password)).toBe(true);

    const {
      rows: session_rows,
    } = await executeSQLQuery(
      'SELECT blacklisted FROM user_session_tokens WHERE id = $1',
      [SESSION_TOKEN_ID]
    );

    expect(session_rows.at(0).blacklisted).toBe(true);
    expect(sendEmail).toHaveBeenCalledWith(expect.objectContaining({
      template_name: 'password-changed',
      to: USER_EMAIL,
    }));
  });
});
