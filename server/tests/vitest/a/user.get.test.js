'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../../helpers/http-status-codes.js';

import { describe, expect, it } from 'vitest';

import { createTestHandler } from '../create-test-handler.js';

import handler from '../../../routes/a/user.get.js';

const request = createTestHandler('get', '/a/user', handler);

const get = () => request(new Request('http://localhost/a/user'));

describe('GET /a/user', () => {
  it('returns 401 when session is invalid', async () => {
    getUserSession.mockResolvedValueOnce({});

    const response = await get();

    expect(response.status).toBe(HTTP_CODE_401_UNAUTHORIZED);

    const data = await response.json();

    expect(data.error_message).toBe('error_unauthorized');
  });

  it('returns 200 with user data when session is valid', async () => {
    getUserSession.mockResolvedValueOnce({
      session_token_id: 'b0000000-0000-4000-8000-000000000002',
    });

    const response = await get();

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const data = await response.json();

    expect(data).toHaveProperty('id');
    expect(data.email).toBe('userget@example.com');
    expect(data.status).toBe('tier_1');
  });
});
