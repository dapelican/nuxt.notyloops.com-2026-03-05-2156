'use strict';

import { describe, expect, it } from 'vitest';

import {
  HTTP_CODE_201_CREATED,
} from '../../../helpers/http-status-codes.js';

import { createTestHandler } from '../create-test-handler.js';

import handler from '../../../routes/monitoring/save-log.post.js';

const request = createTestHandler('post', '/monitoring/save-log', handler);

describe('POST /monitoring/save-log', () => {
  it('inserts a log entry and returns 201', async () => {
    const response = await request(new Request('http://localhost/monitoring/save-log', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: JSON.stringify({ message: 'test log entry' }) }),
    }));

    expect(response.status).toBe(HTTP_CODE_201_CREATED);

    const data = await response.json();

    expect(data).toEqual({});
  });
});
