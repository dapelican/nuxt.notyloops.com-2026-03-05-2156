'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../../helpers/http-status-codes.js';

import { describe, expect, it } from 'vitest';

import { createTestHandler } from '../create-test-handler.js';

import handler from '../../../routes/a/log-in.post.js';

const request = createTestHandler('post', '/a/log-in', handler);

const post = (body) => request(new Request('http://localhost/a/log-in', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
}));

describe('POST /a/log-in', () => {
  it('returns 400 when email is invalid', async () => {
    const response = await post({ email: 'not-an-email', password: 'Test1234!' });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email');
  });

  it('returns 400 when password is empty', async () => {
    const response = await post({ email: 'confirmed@example.com', password: '' });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_password');
  });

  it('returns 401 when user is not found', async () => {
    const response = await post({ email: 'nonexistent@example.com', password: 'Test1234!' });

    expect(response.status).toBe(HTTP_CODE_401_UNAUTHORIZED);

    const data = await response.json();

    expect(data.error_message).toBe('error_wrong_credentials');
  });

  it('returns 401 when account is not confirmed (null password)', async () => {
    const response = await post({ email: 'unconfirmed@example.com', password: 'Test1234!' });

    expect(response.status).toBe(HTTP_CODE_401_UNAUTHORIZED);

    const data = await response.json();

    expect(data.error_message).toBe('error_account_not_confirmed');
  });

  it('returns 401 when password is wrong', async () => {
    const response = await post({ email: 'confirmed@example.com', password: 'WrongPassword!' });

    expect(response.status).toBe(HTTP_CODE_401_UNAUTHORIZED);

    const data = await response.json();

    expect(data.error_message).toBe('error_wrong_credentials');
  });

  it('returns 200 on successful login', async () => {
    const response = await post({ email: 'confirmed@example.com', password: 'Test1234!' });

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const data = await response.json();

    expect(data).toEqual({ success: true });
  });
});
