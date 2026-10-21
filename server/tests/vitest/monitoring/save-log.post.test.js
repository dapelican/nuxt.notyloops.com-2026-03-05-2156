'use strict';

import {
  HTTP_CODE_201_CREATED,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_404_NOT_FOUND,
  HTTP_CODE_413_PAYLOAD_TOO_LARGE,
} from '../../../helpers/http-status-codes.js';

import {
  afterEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest';

import { createTestHandler } from '../create-test-handler.js';

import handler from '../../../routes/monitoring/save-log.post.js';

const request = createTestHandler('post', '/monitoring/save-log', handler);

const postLog = (body) => request(new Request('http://localhost/monitoring/save-log', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
}));

describe('POST /monitoring/save-log', () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('inserts a log entry and returns 201', async () => {
    const response = await postLog({ content: JSON.stringify({ message: 'test log entry' }) });

    expect(response.status).toBe(HTTP_CODE_201_CREATED);

    const data = await response.json();

    expect(data).toEqual({});
  });

  it('returns 404 in production', async () => {
    vi.stubEnv('NODE_ENV', 'production');

    const response = await postLog({ content: JSON.stringify({ message: 'test log entry' }) });

    expect(response.status).toBe(HTTP_CODE_404_NOT_FOUND);
  });

  it.each([
    ['missing content', {}],
    ['non-string content', { content: { message: 'test log entry' } }],
    ['non-JSON string content', { content: 'not json' }],
  ])('returns 400 for %s', async (_label, body) => {
    const response = await postLog(body);

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data).toEqual({ error_message: 'error_invalid_input' });
  });

  it('returns 413 for oversized content', async () => {
    const response = await postLog({ content: JSON.stringify({ message: 'x'.repeat(20000) }) });

    expect(response.status).toBe(HTTP_CODE_413_PAYLOAD_TOO_LARGE);

    const data = await response.json();

    expect(data).toEqual({ error_message: 'error_payload_too_large' });
  });
});
