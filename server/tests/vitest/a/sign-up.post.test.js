import {
  HTTP_CODE_201_CREATED,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_403_FORBIDDEN,
} from '../../../helpers/http-status-codes.js';

import { describe, expect, it, vi } from 'vitest';

import bcrypt from 'bcrypt';

import { createTestHandler } from '../create-test-handler.js';

import {
  executeSQLQuery,
} from '../../../database/query.js';

import handler from '../../../routes/a/sign-up.post.js';

import {
  sendEmail,
} from '../../../services/smtp2go/send-email.js';

vi.mock('../../../services/smtp2go/send-email.js', () => ({
  sendEmail: vi.fn(() => Promise.resolve()),
}));

const request = createTestHandler('post', '/a/sign-up', handler);

const SIGN_UP_TOKEN = 'aabbccdd-1111-4111-8111-aabbccddeeff';
const SEEDED_PASSWORD_HASH = '$2b$10$wL7tkbBZQyt/YiigMxI08egh.xU.pP.D87SLSGjq4NJxXAlyj/p0i';
const USER_EMAIL = 'signup@example.com';

const post = (body) => request(new Request('http://localhost/a/sign-up', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
}));

const getUserRow = async (email) => {
  const {
    rows,
  } = await executeSQLQuery(
    'SELECT password, status FROM users WHERE email = $1',
    [email]
  );

  return rows.at(0);
};

describe('POST /a/sign-up', () => {
  it('returns 400 when email is missing', async () => {
    const response = await post({
      password_1: 'Test1234!',
      password_2: 'Test1234!',
      token: SIGN_UP_TOKEN,
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email');
  });

  it('returns 400 when email is invalid', async () => {
    const response = await post({
      email: 'bad-email',
      password_1: 'Test1234!',
      password_2: 'Test1234!',
      token: SIGN_UP_TOKEN,
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email');
  });

  it('returns 400 when passwords are empty', async () => {
    const response = await post({
      email: USER_EMAIL,
      password_1: '',
      password_2: '',
      token: SIGN_UP_TOKEN,
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_password');
    expect(await getUserRow(USER_EMAIL)).toEqual({
      password: null,
      status: 'unverified',
    });
  });

  it('returns 400 when passwords do not match', async () => {
    const response = await post({
      email: USER_EMAIL,
      password_1: 'Test1234!',
      password_2: 'Different!',
      token: SIGN_UP_TOKEN,
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
      token: SIGN_UP_TOKEN,
    });

    expect(response.status).toBe(HTTP_CODE_403_FORBIDDEN);

    const data = await response.json();

    expect(data.error_message).toBe('error_no_user_found');
  });

  it('returns 400 when the token is missing', async () => {
    const response = await post({
      email: USER_EMAIL,
      password_1: 'Test1234!',
      password_2: 'Test1234!',
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email_token');
    expect(await getUserRow(USER_EMAIL)).toEqual({
      password: null,
      status: 'unverified',
    });
    expect(setUserSession).not.toHaveBeenCalled();
  });

  it('returns 400 when the token is invalid', async () => {
    const response = await post({
      email: USER_EMAIL,
      password_1: 'Test1234!',
      password_2: 'Test1234!',
      token: 'not-a-uuid',
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email_token');
    expect(await getUserRow(USER_EMAIL)).toEqual({
      password: null,
      status: 'unverified',
    });
    expect(setUserSession).not.toHaveBeenCalled();
  });

  it('returns 400 when the token is not an active validation token', async () => {
    const response = await post({
      email: USER_EMAIL,
      password_1: 'Test1234!',
      password_2: 'Test1234!',
      token: 'bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb',
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email_token');
    expect(await getUserRow(USER_EMAIL)).toEqual({
      password: null,
      status: 'unverified',
    });
    expect(setUserSession).not.toHaveBeenCalled();
  });

  it('returns 400 when the token belongs to another user', async () => {
    const response = await post({
      email: USER_EMAIL,
      password_1: 'Test1234!',
      password_2: 'Test1234!',
      token: '33333333-3333-4333-8333-333333333333',
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email_token');
    expect(await getUserRow(USER_EMAIL)).toEqual({
      password: null,
      status: 'unverified',
    });
    expect(await getUserRow('verify-email-token@example.com')).toEqual({
      password: null,
      status: 'unverified',
    });
    expect(setUserSession).not.toHaveBeenCalled();
  });

  it('does not overwrite a confirmed user', async () => {
    const response = await post({
      email: 'confirmed@example.com',
      password_1: 'HackedPass1!',
      password_2: 'HackedPass1!',
      token: '12121212-1212-4121-8121-121212121212',
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email_token');
    expect(await getUserRow('confirmed@example.com')).toEqual({
      password: SEEDED_PASSWORD_HASH,
      status: 'premium',
    });
    expect(setUserSession).not.toHaveBeenCalled();
  });

  it('returns 201 on successful sign-up', async () => {
    const response = await post({
      email: USER_EMAIL,
      password_1: 'NewPass123!',
      password_2: 'NewPass123!',
      token: SIGN_UP_TOKEN,
    });

    expect(response.status).toBe(HTTP_CODE_201_CREATED);

    const data = await response.json();

    expect(data).toEqual({ success: true });
    expect(setUserSession).toHaveBeenCalled();

    const user_row = await getUserRow(USER_EMAIL);

    expect(user_row.status).toBe('free');
    expect(await bcrypt.compare('NewPass123!', user_row.password)).toBe(true);

    const {
      rows,
    } = await executeSQLQuery(
      'SELECT blacklisted FROM user_email_tokens WHERE token = $1',
      [SIGN_UP_TOKEN]
    );

    expect(rows.at(0).blacklisted).toBe(true);
    expect(sendEmail).toHaveBeenCalledWith(expect.objectContaining({
      template_name: 'admin-new-sign-up',
      template_params: expect.objectContaining({
        email: USER_EMAIL,
      }),
    }));
  });
});
