'use strict';

import {
  HTTP_CODE_201_CREATED,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_403_FORBIDDEN,
} from '../../../helpers/http-status-codes.js';

import { describe, expect, it, vi } from 'vitest';

import { createTestHandler } from '../create-test-handler.js';

import handler from '../../../routes/a/sign-up.post.js';

vi.mock('../../../services/smtp2go/send-email.js', () => ({
  sendEmail: vi.fn(() => Promise.resolve()),
}));

const request = createTestHandler('post', '/a/sign-up', handler);

const post = (body) => request(new Request('http://localhost/a/sign-up', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
}));

describe('POST /a/sign-up', () => {
  it('returns 400 when email is invalid', async () => {
    const response = await post({
      email: 'bad-email',
      password_1: 'Test1234!',
      password_2: 'Test1234!',
      token: 'aabbccdd-1111-4111-8111-aabbccddeeff',
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email');
  });

  it('returns 400 when passwords do not match', async () => {
    const response = await post({
      email: 'signup@example.com',
      password_1: 'Test1234!',
      password_2: 'Different!',
      token: 'aabbccdd-1111-4111-8111-aabbccddeeff',
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_password');
  });

  it('returns 403 when no user is found for the email', async () => {
    const response = await post({
      email: 'nobody@example.com',
      password_1: 'Test1234!',
      password_2: 'Test1234!',
      token: 'aabbccdd-1111-4111-8111-aabbccddeeff',
    });

    expect(response.status).toBe(HTTP_CODE_403_FORBIDDEN);

    const data = await response.json();

    expect(data.error_message).toBe('error_no_user_found');
  });

  it('returns 201 on successful sign-up', async () => {
    const response = await post({
      email: 'signup@example.com',
      password_1: 'NewPass123!',
      password_2: 'NewPass123!',
      token: 'aabbccdd-1111-4111-8111-aabbccddeeff',
    });

    expect(response.status).toBe(HTTP_CODE_201_CREATED);

    const data = await response.json();

    expect(data).toEqual({ success: true });
    expect(setUserSession).toHaveBeenCalled();
  });
});
