import {
  HTTP_CODE_201_CREATED,
  HTTP_CODE_400_BAD_REQUEST,
} from '../../../helpers/http-status-codes.js';

import { beforeEach, describe, expect, it, vi } from 'vitest';

import { createTestHandler } from '../create-test-handler.js';

import {
  executeSQLQuery,
} from '../../../database/query.js';

import handler from '../../../routes/a/send-token-to-validate-email.post.js';

import {
  sendEmail,
} from '../../../services/smtp2go/send-email.js';

import { verifyEmail } from '../../../services/emailable/verify-email.js';

vi.mock('../../../services/smtp2go/send-email.js', () => ({
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
  body: JSON.stringify({
    turnstile_token: 'test-token',
    ...body,
  }),
}));

const SUCCESS_BODY = {
  success: true,
};

describe('POST /a/send-token-to-validate-email', () => {
  it('returns 400 when the turnstile token is missing', async () => {
    const response = await request(new Request('http://localhost/a/send-token-to-validate-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'brand-new@example.com',
      }),
    }));

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_turnstile');
    expect(sendEmail).not.toHaveBeenCalled();
    expect(verifyEmail).not.toHaveBeenCalled();
  });

  it('returns 400 when email is missing', async () => {
    const response = await post({});

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email');
    expect(sendEmail).not.toHaveBeenCalled();
    expect(verifyEmail).not.toHaveBeenCalled();
  });

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

  it('removes the token and still returns 201 when the validation email fails for a new user', async () => {
    const email = 'send-fails-new@example.com';

    vi.mocked(sendEmail).mockRejectedValueOnce(new Error('smtp failed'));
    verifyEmail.mockResolvedValueOnce(true);

    const response = await post({ email });

    expect(response.status).toBe(HTTP_CODE_201_CREATED);

    const data = await response.json();

    expect(data).toEqual(SUCCESS_BODY);

    const {
      rows: token_rows,
    } = await executeSQLQuery(
      `SELECT user_email_tokens.token
      FROM user_email_tokens
      JOIN users ON users.id = user_email_tokens.user_id
      WHERE users.email = $1`,
      [email]
    );

    expect(token_rows).toEqual([]);
  });
});
