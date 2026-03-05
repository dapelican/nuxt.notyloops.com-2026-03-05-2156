'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_401_UNAUTHORIZED,
  HTTP_CODE_403_FORBIDDEN,
} from '../../../helpers/http-status-codes.js';

import { describe, expect, it, vi } from 'vitest';

import { createTestHandler } from '../create-test-handler.js';

import handler from '../../../routes/a/change-email.post.js';

vi.mock('../../../services/smtp2go/send-email.js', () => ({
  sendEmail: vi.fn(() => Promise.resolve()),
}));

const SESSION_TOKEN_ID = 'd0000000-0000-4000-8000-000000000004';
const USER_EMAIL = 'changeemail@example.com';

const request = createTestHandler('post', '/a/change-email', handler);

const post = (body) => request(new Request('http://localhost/a/change-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
}));

describe('POST /a/change-email', () => {
  it('returns 401 when session is invalid', async () => {
    getUserSession.mockResolvedValueOnce({});

    const response = await post({
      current_email: USER_EMAIL,
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
      current_email: 'bad',
      new_email: 'new@example.com',
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email');
  });

  it('returns 403 when new email is already in use', async () => {
    getUserSession.mockResolvedValueOnce({
      session_token_id: SESSION_TOKEN_ID,
    });

    const response = await post({
      current_email: USER_EMAIL,
      new_email: 'taken@example.com',
    });

    expect(response.status).toBe(HTTP_CODE_403_FORBIDDEN);

    const data = await response.json();

    expect(data.error_message).toBe('error_email_already_in_use');
  });

  it('returns 200 on successful email change', async () => {
    getUserSession.mockResolvedValueOnce({
      session_token_id: SESSION_TOKEN_ID,
    });

    const response = await post({
      current_email: USER_EMAIL,
      new_email: 'fresh-email@example.com',
    });

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const data = await response.json();

    expect(data.email).toBe('fresh-email@example.com');
  });
});
