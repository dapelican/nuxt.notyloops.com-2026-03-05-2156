'use strict';

import { describe, expect, it } from 'vitest';

import {
  HTTP_CODE_200_OK,
} from '../../../helpers/http-status-codes.js';

import { createTestHandler } from '../create-test-handler.js';

import handler from '../../../routes/a/log-out.post.js';

const request = createTestHandler('post', '/a/log-out', handler);

const post = () => request(new Request('http://localhost/a/log-out', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
}));

describe('POST /a/log-out', () => {
  it('returns 200 and blacklists session token when session exists', async () => {
    getUserSession.mockResolvedValueOnce({
      session_token_id: 'a0000000-0000-4000-8000-000000000001',
    });

    const response = await post();

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const data = await response.json();

    expect(data).toEqual({ success: true });
    expect(clearUserSession).toHaveBeenCalled();
  });

  it('returns 200 when no session exists', async () => {
    getUserSession.mockResolvedValueOnce({});

    const response = await post();

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const data = await response.json();

    expect(data).toEqual({ success: true });
    expect(clearUserSession).toHaveBeenCalled();
  });
});
