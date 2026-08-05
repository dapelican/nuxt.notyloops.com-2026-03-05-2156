'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../../helpers/http-status-codes.js';

import { describe, expect, it, vi } from 'vitest';

import { createTestHandler } from '../create-test-handler.js';

import handler from '../../../routes/a/change-password.post.js';

vi.mock('../../../services/smtp2go/send-email.js', () => ({
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
  });
});
