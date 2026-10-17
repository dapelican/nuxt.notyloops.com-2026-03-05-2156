'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_500_INTERNAL_SERVER_ERROR,
} from '../../../helpers/http-status-codes.js';

import { describe, expect, it, vi } from 'vitest';

import { createTestHandler } from '../create-test-handler.js';

import {
  executeSQLQuery,
} from '../../../database/query.js';

import handler from '../../../routes/monitoring/ping.get.js';

vi.mock('../../../database/query.js', async () => {
  const actual = await vi.importActual('../../../database/query.js');

  return {
    ...actual,
    executeSQLQuery: vi.fn((...args) => actual.executeSQLQuery(...args)),
  };
});

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

  it('returns 500 when the health check finds no users', async () => {
    vi.mocked(executeSQLQuery).mockResolvedValueOnce({
      rows: [],
    });

    const response = await request(new Request('http://localhost/monitoring/ping'));

    expect(response.status).toBe(HTTP_CODE_500_INTERNAL_SERVER_ERROR);

    const data = await response.json();

    expect(data).toEqual({
      error: 'internal_error',
    });
  });
});
