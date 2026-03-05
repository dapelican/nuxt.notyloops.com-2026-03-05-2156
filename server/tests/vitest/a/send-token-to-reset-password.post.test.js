'use strict';

import {
  HTTP_CODE_201_CREATED,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_403_FORBIDDEN,
} from '../../../helpers/http-status-codes.js';

import { describe, expect, it, vi } from 'vitest';

import { createTestHandler } from '../create-test-handler.js';

import handler from '../../../routes/a/send-token-to-reset-password.post.js';

vi.mock('../../../services/smtp2go/send-email.js', () => ({
  sendEmail: vi.fn(() => Promise.resolve()),
}));

const request = createTestHandler('post', '/a/send-token-to-reset-password', handler);

const post = (body) => request(new Request('http://localhost/a/send-token-to-reset-password', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
}));

describe('POST /a/send-token-to-reset-password', () => {
  it('returns 400 when email is invalid', async () => {
    const response = await post({ email: 'bad' });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email');
  });

  it('returns 400 when no user is found', async () => {
    const response = await post({ email: 'nonexistent@example.com' });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_no_user_found');
  });

  it('returns 403 when a reset token was already sent recently', async () => {
    const response = await post({ email: 'reset-active-token@example.com' });

    expect(response.status).toBe(HTTP_CODE_403_FORBIDDEN);

    const data = await response.json();

    expect(data.error_message).toBe('error_email_token_already_sent');
  });

  it('returns 403 when maximum retries are reached', async () => {
    const response = await post({ email: 'reset-max-retries@example.com' });

    expect(response.status).toBe(HTTP_CODE_403_FORBIDDEN);

    const data = await response.json();

    expect(data.error_message).toBe('error_maximum_retries_reached');
  });

  it('returns 201 on successful token send', async () => {
    const response = await post({ email: 'reset-success@example.com' });

    expect(response.status).toBe(HTTP_CODE_201_CREATED);

    const data = await response.json();

    expect(data).toEqual({});
  });
});
