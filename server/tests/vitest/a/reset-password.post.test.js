'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
} from '../../../helpers/http-status-codes.js';

import { describe, expect, it, vi } from 'vitest';

import { createTestHandler } from '../create-test-handler.js';

import handler from '../../../routes/a/reset-password.post.js';

vi.mock('../../../services/smtp2go/send-email.js', () => ({
  sendEmail: vi.fn(() => Promise.resolve()),
}));

const request = createTestHandler('post', '/a/reset-password', handler);

const post = (body) => request(new Request('http://localhost/a/reset-password', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
}));

describe('POST /a/reset-password', () => {
  it('returns 400 when email is invalid', async () => {
    const response = await post({
      email: 'bad',
      token: '77777777-7777-4777-8777-777777777777',
      password_1: 'NewPass1!',
      password_2: 'NewPass1!',
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email');
  });

  it('returns 400 when token is invalid', async () => {
    const response = await post({
      email: 'do-reset-pw@example.com',
      token: 'not-a-uuid',
      password_1: 'NewPass1!',
      password_2: 'NewPass1!',
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email_token');
  });

  it('returns 400 when passwords do not match', async () => {
    const response = await post({
      email: 'do-reset-pw@example.com',
      token: '77777777-7777-4777-8777-777777777777',
      password_1: 'NewPass1!',
      password_2: 'Different!',
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_password');
  });

  it('returns 200 on successful password reset', async () => {
    const response = await post({
      email: 'do-reset-pw@example.com',
      token: '77777777-7777-4777-8777-777777777777',
      password_1: 'NewSecure1!',
      password_2: 'NewSecure1!',
    });

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const data = await response.json();

    expect(data).toEqual({ success: true });
  });
});
