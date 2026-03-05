'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
} from '../../../../helpers/http-status-codes.js';

import { describe, expect, it } from 'vitest';

import { createTestHandler } from '../../create-test-handler.js';

import handler from '../../../../routes/a/verify-token-to-reset-password/[token_to_reset_password].get.js';

const request = createTestHandler(
  'get',
  '/a/verify-token-to-reset-password/:token_to_reset_password',
  handler
);

describe('GET /a/verify-token-to-reset-password/:token', () => {
  it('returns 400 when token format is invalid', async () => {
    const response = await request(
      new Request('http://localhost/a/verify-token-to-reset-password/not-a-uuid')
    );

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email_token');
  });

  it('returns 400 when token is not found', async () => {
    const response = await request(
      new Request('http://localhost/a/verify-token-to-reset-password/aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa')
    );

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_email_token');
  });

  it('returns 200 with email for a valid token', async () => {
    const response = await request(
      new Request('http://localhost/a/verify-token-to-reset-password/55555555-5555-4555-8555-555555555555')
    );

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const data = await response.json();

    expect(data.email).toBe('verify-reset-token@example.com');
  });
});
