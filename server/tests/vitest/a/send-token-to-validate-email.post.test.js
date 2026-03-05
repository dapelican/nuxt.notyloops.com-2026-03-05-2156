'use strict';

import {
  HTTP_CODE_201_CREATED,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_403_FORBIDDEN,
} from '../../../helpers/http-status-codes.js';

import { describe, expect, it, vi } from 'vitest';

import { createTestHandler } from '../create-test-handler.js';

import handler from '../../../routes/a/send-token-to-validate-email.post.js';

import { verifyEmail } from '../../../services/emailable/verify-email.js';

vi.mock('../../../services/smtp2go/send-email.js', () => ({
  sendEmail: vi.fn(() => Promise.resolve()),
}));

vi.mock('../../../services/emailable/verify-email.js', () => ({
  verifyEmail: vi.fn(() => Promise.resolve(true)),
}));

const request = createTestHandler('post', '/a/send-token-to-validate-email', handler);

const post = (body) => request(new Request('http://localhost/a/send-token-to-validate-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
}));

describe('POST /a/send-token-to-validate-email', () => {
  it('returns 400 when email is invalid', async () => {
    const response = await post({ email: 'bad' });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email');
  });

  it('returns 403 when email belongs to a verified user', async () => {
    const response = await post({ email: 'confirmed@example.com' });

    expect(response.status).toBe(HTTP_CODE_403_FORBIDDEN);

    const data = await response.json();

    expect(data.error_message).toBe('error_email_already_in_use');
  });

  it('returns 403 when a validation token was already sent recently', async () => {
    const response = await post({ email: 'unverified-active-token@example.com' });

    expect(response.status).toBe(HTTP_CODE_403_FORBIDDEN);

    const data = await response.json();

    expect(data.error_message).toBe('error_email_token_already_sent');
  });

  it('returns 403 when maximum retries are reached', async () => {
    const response = await post({ email: 'unverified-max-retries@example.com' });

    expect(response.status).toBe(HTTP_CODE_403_FORBIDDEN);

    const data = await response.json();

    expect(data.error_message).toBe('error_maximum_retries_reached');
  });

  it('returns 201 when existing unverified user retries after token expired', async () => {
    const response = await post({ email: 'unverified-retry@example.com' });

    expect(response.status).toBe(HTTP_CODE_201_CREATED);

    const data = await response.json();

    expect(data).toEqual({
      success: true,
    });
  });

  it('returns 400 when email verification reports corrupt email', async () => {
    verifyEmail.mockResolvedValueOnce(false);

    const response = await post({ email: 'corrupt@example.com' });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_corrupt_email');
  });

  it('returns 201 and creates user when email is new and valid', async () => {
    verifyEmail.mockResolvedValueOnce(true);

    const response = await post({ email: 'brand-new@example.com' });

    expect(response.status).toBe(HTTP_CODE_201_CREATED);

    const data = await response.json();

    expect(data).toEqual({
      success: true,
    });
  });
});
