'use strict';

import { describe, expect, it } from 'vitest';

import {
  HTTP_CODE_200_OK,
} from '../../../helpers/http-status-codes.js';

import { createTestHandler } from '../create-test-handler.js';

import handler from '../../../routes/monitoring/ping.get.js';

const request = createTestHandler('get', '/monitoring/ping', handler);

describe('GET /monitoring/ping', () => {
  it('returns pong when the database responds', async () => {
    const response = await request(new Request('http://localhost/monitoring/ping'));

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const data = await response.json();

    expect(data).toEqual({
      pong: 'pong',
    });
  });
});
