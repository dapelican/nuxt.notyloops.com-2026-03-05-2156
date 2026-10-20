'use strict';

import {
  HTTP_CODE_201_CREATED,
  HTTP_CODE_400_BAD_REQUEST,
} from '../../../helpers/http-status-codes.js';

import { beforeEach, describe, expect, it, vi } from 'vitest';

import {
  WEBSITE_DOMAIN_NAME,
} from '#shared/utils/constants.js';

import { createTestHandler } from '../create-test-handler.js';

import handler from '../../../routes/contact/index.post.js';

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

const request = createTestHandler('post', '/contact', handler);

const post = (body) => request(new Request('http://localhost/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    turnstile_token: 'test-token',
    ...body,
  }),
}));

describe('POST /contact', () => {
  beforeEach(() => {
    vi.mocked(sendEmail).mockClear();
    vi.mocked(verifyEmail).mockClear();
    vi.mocked(verifyEmail).mockResolvedValue(true);
  });

  it('returns 400 when the turnstile token is missing', async () => {
    const response = await request(new Request('http://localhost/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'ada@example.com',
        first_name: 'Ada',
        message: 'Hello',
      }),
    }));

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_turnstile');
    expect(sendEmail).not.toHaveBeenCalled();
    expect(verifyEmail).not.toHaveBeenCalled();
  });

  it('returns 400 when a field is empty', async () => {
    const response = await post({
      email: 'ada@example.com',
      first_name: '',
      message: 'Hello',
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_input');
    expect(sendEmail).not.toHaveBeenCalled();
    expect(verifyEmail).not.toHaveBeenCalled();
  });

  it('returns 400 when the first name is too long', async () => {
    const response = await post({
      email: 'ada@example.com',
      first_name: 'A'.repeat(101),
      message: 'Hello',
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_input');
    expect(sendEmail).not.toHaveBeenCalled();
    expect(verifyEmail).not.toHaveBeenCalled();
  });

  it('returns 400 when the message is too long', async () => {
    const response = await post({
      email: 'ada@example.com',
      first_name: 'Ada',
      message: 'M'.repeat(5001),
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_input');
    expect(sendEmail).not.toHaveBeenCalled();
    expect(verifyEmail).not.toHaveBeenCalled();
  });

  it('returns 400 when the email is invalid', async () => {
    const response = await post({
      email: 'not-an-email',
      first_name: 'Ada',
      message: 'Hello',
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email');
    expect(sendEmail).not.toHaveBeenCalled();
    expect(verifyEmail).not.toHaveBeenCalled();
  });

  it('returns 400 when email verification reports a corrupt email', async () => {
    vi.mocked(verifyEmail).mockResolvedValueOnce(false);

    const response = await post({
      email: 'undeliverable@example.com',
      first_name: 'Ada',
      message: 'Hello',
    });

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_corrupt_email');
    expect(verifyEmail).toHaveBeenCalledWith('undeliverable@example.com');
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it('sends the contact message to support', async () => {
    const response = await post({
      email: ' Ada@Example.com ',
      first_name: ' Ada ',
      message: ' Hello ',
    });

    expect(response.status).toBe(HTTP_CODE_201_CREATED);

    const data = await response.json();

    expect(data).toEqual({
      success: true,
    });
    expect(verifyEmail).toHaveBeenCalledWith('ada@example.com');
    expect(sendEmail).toHaveBeenCalledWith({
      subdomain: 'www',
      template_name: 'admin-new-contact-message',
      template_params: {
        email: 'ada@example.com',
        first_name: 'Ada',
        message: 'Hello',
      },
      to: `support@${WEBSITE_DOMAIN_NAME}`,
    });
  });
});
