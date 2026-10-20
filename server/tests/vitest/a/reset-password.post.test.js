'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
} from '../../../helpers/http-status-codes.js';

import { describe, expect, it, vi } from 'vitest';

import bcrypt from 'bcrypt';

import { createTestHandler } from '../create-test-handler.js';

import {
  executeSQLQuery,
} from '../../../database/query.js';

import {
  getActiveEmailTokenUserId,
} from '../../../helpers/get-active-email-token-user-id.js';

import handler from '../../../routes/a/reset-password.post.js';

import {
  sendEmail,
} from '../../../services/smtp2go/send-email.js';

vi.mock('../../../services/smtp2go/send-email.js', () => ({
  sendEmail: vi.fn(() => Promise.resolve()),
}));

vi.mock('../../../helpers/get-active-email-token-user-id.js', async () => {
  const actual = await vi.importActual('../../../helpers/get-active-email-token-user-id.js');

  return {
    ...actual,
    getActiveEmailTokenUserId: vi.fn((...args) => actual.getActiveEmailTokenUserId(...args)),
  };
});

const request = createTestHandler('post', '/a/reset-password', handler);

const RESET_TOKEN = '77777777-7777-4777-8777-777777777777';
const SEEDED_PASSWORD_HASH = '$2b$10$wL7tkbBZQyt/YiigMxI08egh.xU.pP.D87SLSGjq4NJxXAlyj/p0i';
const USER_EMAIL = 'do-reset-pw@example.com';

const post = (body) => request(new Request('http://localhost/a/reset-password', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
}));

const getPasswordHash = async (email) => {
  const {
    rows,
  } = await executeSQLQuery(
    'SELECT password FROM users WHERE email = $1',
    [email]
  );

  return rows.at(0)?.password;
};

describe('POST /a/reset-password', () => {
  it('returns 400 when email is missing', async () => {
    const response = await post({
      token: RESET_TOKEN,
      password_1: 'NewPass1!',
      password_2: 'NewPass1!',
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email');
  });

  it('returns 400 when email is invalid', async () => {
    const response = await post({
      email: 'bad',
      token: RESET_TOKEN,
      password_1: 'NewPass1!',
      password_2: 'NewPass1!',
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email');
  });

  it('returns 400 when the token is missing', async () => {
    const response = await post({
      email: USER_EMAIL,
      password_1: 'NewPass1!',
      password_2: 'NewPass1!',
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email_token');
    expect(await getPasswordHash(USER_EMAIL)).toBe(SEEDED_PASSWORD_HASH);
  });

  it('returns 400 when token is invalid', async () => {
    const response = await post({
      email: USER_EMAIL,
      token: 'not-a-uuid',
      password_1: 'NewPass1!',
      password_2: 'NewPass1!',
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email_token');
  });

  it('returns 400 when passwords are empty', async () => {
    const response = await post({
      email: USER_EMAIL,
      token: RESET_TOKEN,
      password_1: '',
      password_2: '',
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_password');
    expect(await getPasswordHash(USER_EMAIL)).toBe(SEEDED_PASSWORD_HASH);
  });

  it('returns 400 when passwords do not match', async () => {
    const response = await post({
      email: USER_EMAIL,
      token: RESET_TOKEN,
      password_1: 'NewPass1!',
      password_2: 'Different!',
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_password');
  });

  it('returns 400 when the token is a random unused UUID', async () => {
    const response = await post({
      email: USER_EMAIL,
      token: 'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa',
      password_1: 'NewPass1!',
      password_2: 'NewPass1!',
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email_token');
    expect(await getPasswordHash(USER_EMAIL)).toBe(SEEDED_PASSWORD_HASH);
  });

  it('returns 400 when the token user does not exist', async () => {
    vi.mocked(getActiveEmailTokenUserId).mockResolvedValueOnce(
      'ffffffff-ffff-4fff-8fff-ffffffffffff'
    );

    const response = await post({
      email: USER_EMAIL,
      token: RESET_TOKEN,
      password_1: 'NewPass1!',
      password_2: 'NewPass1!',
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email_token');
    expect(await getPasswordHash(USER_EMAIL)).toBe(SEEDED_PASSWORD_HASH);
  });

  it('returns 400 when the token belongs to another user', async () => {
    const response = await post({
      email: USER_EMAIL,
      token: '55555555-5555-4555-8555-555555555555',
      password_1: 'NewPass1!',
      password_2: 'NewPass1!',
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email_token');
    expect(await getPasswordHash(USER_EMAIL)).toBe(SEEDED_PASSWORD_HASH);
    expect(await getPasswordHash('verify-reset-token@example.com')).toBe(SEEDED_PASSWORD_HASH);
  });

  it('returns 200 on successful password reset', async () => {
    const response = await post({
      email: USER_EMAIL,
      token: RESET_TOKEN,
      password_1: 'NewSecure1!',
      password_2: 'NewSecure1!',
    });

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const data = await response.json();

    expect(data).toEqual({ success: true });

    const password_hash = await getPasswordHash(USER_EMAIL);

    expect(password_hash).not.toBe(SEEDED_PASSWORD_HASH);
    expect(await bcrypt.compare('NewSecure1!', password_hash)).toBe(true);

    const {
      rows,
    } = await executeSQLQuery(
      'SELECT blacklisted FROM user_email_tokens WHERE token = $1',
      [RESET_TOKEN]
    );

    expect(rows.at(0).blacklisted).toBe(true);
    expect(sendEmail).toHaveBeenCalledWith(expect.objectContaining({
      template_name: 'password-reset',
      to: USER_EMAIL,
    }));
  });
});
