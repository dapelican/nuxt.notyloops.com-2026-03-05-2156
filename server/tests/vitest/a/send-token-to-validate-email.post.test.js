'use strict';

import {
  HTTP_CODE_201_CREATED,
  HTTP_CODE_400_BAD_REQUEST,
} from '../../../helpers/http-status-codes.js';

import { beforeEach, describe, expect, it, vi } from 'vitest';

import { createTestHandler } from '../create-test-handler.js';

import handler from '../../../routes/a/send-token-to-validate-email.post.js';

import {
  sendEmail,
} from '../../../services/amazon-ses/send-email.js';

import { verifyEmail } from '../../../services/emailable/verify-email.js';

vi.mock('../../../services/amazon-ses/send-email.js', () => ({
  sendEmail: vi.fn(() => Promise.resolve()),
}));

vi.mock('../../../services/emailable/verify-email.js', () => ({
  verifyEmail: vi.fn(() => Promise.resolve(true)),
}));

beforeEach(() => {
  sendEmail.mockClear();
  verifyEmail.mockClear();
  verifyEmail.mockResolvedValue(true);
});

const request = createTestHandler('post', '/a/send-token-to-validate-email', handler);

const post = (body) => request(new Request('http://localhost/a/send-token-to-validate-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
}));

const SUCCESS_BODY = {
  success: true,
};

describe('POST /a/send-token-to-validate-email', () => {
  it('returns 400 when email is invalid', async () => {
    const response = await post({ email: 'bad' });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email');
    expect(sendEmail).not.toHaveBeenCalled();
    expect(verifyEmail).not.toHaveBeenCalled();
  });

  it('returns 201 when email belongs to a verified user', async () => {
    const response = await post({ email: 'confirmed@example.com' });

    expect(response.status).toBe(HTTP_CODE_201_CREATED);

    const data = await response.json();

    expect(data).toEqual(SUCCESS_BODY);
    expect(sendEmail).not.toHaveBeenCalled();
    expect(verifyEmail).not.toHaveBeenCalled();
  });

  it('returns 201 when a validation token was already sent recently', async () => {
    const response = await post({ email: 'unverified-active-token@example.com' });

    expect(response.status).toBe(HTTP_CODE_201_CREATED);

    const data = await response.json();

    expect(data).toEqual(SUCCESS_BODY);
    expect(sendEmail).not.toHaveBeenCalled();
    expect(verifyEmail).not.toHaveBeenCalled();
  });

  it('returns 201 when maximum retries are reached', async () => {
    const response = await post({ email: 'unverified-max-retries@example.com' });

    expect(response.status).toBe(HTTP_CODE_201_CREATED);

    const data = await response.json();

    expect(data).toEqual(SUCCESS_BODY);
    expect(sendEmail).not.toHaveBeenCalled();
    expect(verifyEmail).not.toHaveBeenCalled();
  });

  it('returns 201 when existing unverified user retries after token expired', async () => {
    const response = await post({ email: 'unverified-retry@example.com' });

    expect(response.status).toBe(HTTP_CODE_201_CREATED);

    const data = await response.json();

    expect(data).toEqual(SUCCESS_BODY);
    expect(sendEmail).toHaveBeenCalledTimes(1);
    expect(verifyEmail).not.toHaveBeenCalled();
  });

  it('returns 400 when email verification reports corrupt email', async () => {
    verifyEmail.mockResolvedValueOnce(false);

    const response = await post({ email: 'corrupt@example.com' });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_corrupt_email');
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it('returns 201 and creates user when email is new and valid', async () => {
    verifyEmail.mockResolvedValueOnce(true);

    const response = await post({ email: 'brand-new@example.com' });

    expect(response.status).toBe(HTTP_CODE_201_CREATED);

    const data = await response.json();

    expect(data).toEqual(SUCCESS_BODY);
    expect(sendEmail).toHaveBeenCalledTimes(1);
    expect(verifyEmail).toHaveBeenCalledTimes(1);
  });
});
