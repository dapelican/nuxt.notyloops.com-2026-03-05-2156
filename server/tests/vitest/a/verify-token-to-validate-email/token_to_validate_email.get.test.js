'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
} from '../../../../helpers/http-status-codes.js';

import { describe, expect, it } from 'vitest';

import { createTestHandler } from '../../create-test-handler.js';

import handler from '../../../../routes/a/verify-token-to-validate-email/[token_to_validate_email].get.js';

const request = createTestHandler(
  'get',
  '/a/verify-token-to-validate-email/:token_to_validate_email',
  handler
);

describe('GET /a/verify-token-to-validate-email/:token', () => {
  it('returns 400 when token format is invalid', async () => {
    const response = await request(
      new Request('http://localhost/a/verify-token-to-validate-email/not-a-uuid')
    );

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email_token');
  });

  it('returns 400 when token is blacklisted', async () => {
    const response = await request(
      new Request('http://localhost/a/verify-token-to-validate-email/44444444-4444-4444-8444-444444444444')
    );

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email_token');
  });

  it('returns 200 with email for a valid token', async () => {
    const response = await request(
      new Request('http://localhost/a/verify-token-to-validate-email/33333333-3333-4333-8333-333333333333')
    );

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const data = await response.json();

    expect(data.email).toBe('verify-email-token@example.com');
  });
});
