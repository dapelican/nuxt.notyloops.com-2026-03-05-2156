'use strict';

import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest';

import {
  HTTP_CODE_500_INTERNAL_SERVER_ERROR,
} from '../../../helpers/http-status-codes.js';

import {
  createTestHandler,
} from '../create-test-handler.js';

import {
  defineEventHandler,
} from 'h3';

vi.mock('../../../database/query.js', () => ({
  executeSQLQuery: vi.fn(),
}));

vi.mock('@sentry/nuxt', () => ({
  captureException: vi.fn(),
  flush: vi.fn(),
}));

const {
  executeSQLQuery,
} = await import('../../../database/query.js');

const Sentry = await import('@sentry/nuxt');

const {
  handleBackendError,
} = await import('../../../helpers/handle-backend-error.js');

const createFailingRequest = (thrown_value) => createTestHandler(
  'get',
  '/fail',
  defineEventHandler(async (event) => {
    try {
      throw thrown_value;
    } catch (error) {
      return handleBackendError(error, event);
    }
  })
);

describe('handleBackendError', () => {
  beforeEach(() => {
    vi.mocked(executeSQLQuery).mockReset().mockResolvedValue({});
    vi.mocked(Sentry.captureException).mockReset();
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllEnvs();
  });

  it('logs serialized Error fields once and returns a generic 500', async () => {
    const error = new TypeError('boom');

    const response = await createFailingRequest(error)(new Request('http://localhost/fail'));

    expect(response.status).toBe(HTTP_CODE_500_INTERNAL_SERVER_ERROR);
    expect(await response.json()).toEqual({ error: 'internal_error' });

    expect(executeSQLQuery).toHaveBeenCalledTimes(1);
    expect(Sentry.captureException).not.toHaveBeenCalled();

    const [sql_query, parameter_list] = vi.mocked(executeSQLQuery).mock.calls[0];
    const content = JSON.parse(parameter_list[0]);

    expect(sql_query).toBe('INSERT INTO logs (content) VALUES ($1)');
    expect(content.error).toEqual({
      name: 'TypeError',
      message: 'boom',
      stack: error.stack,
    });
    expect(content.request_method).toBe('GET');
    expect(content.request_url).toBe('http://localhost/fail');
    expect(typeof content.timestamp).toBe('string');
  });

  it('serializes non-Error thrown values as a message', async () => {
    await createFailingRequest('plain failure')(new Request('http://localhost/fail'));

    const content = JSON.parse(vi.mocked(executeSQLQuery).mock.calls[0][1][0]);

    expect(content.error).toEqual({ message: 'plain failure' });
  });

  it('still returns a generic 500 when the database log fails', async () => {
    vi.mocked(executeSQLQuery).mockRejectedValue(new Error('database down'));

    const response = await createFailingRequest(new Error('boom'))(new Request('http://localhost/fail'));

    expect(response.status).toBe(HTTP_CODE_500_INTERNAL_SERVER_ERROR);
    expect(await response.json()).toEqual({ error: 'internal_error' });
    expect(executeSQLQuery).toHaveBeenCalledTimes(1);
  });

  it('reports production errors to Sentry without writing a database log', async () => {
    vi.stubEnv('NODE_ENV', 'production');
    vi.stubEnv('NUXT_PUBLIC_SENTRY_DSN', 'https://public@example.ingest.sentry.io/1');
    const error = new Error('boom');

    const response = await createFailingRequest(error)(new Request('http://localhost/fail?token=secret'));

    expect(response.status).toBe(HTTP_CODE_500_INTERNAL_SERVER_ERROR);
    expect(await response.json()).toEqual({ error: 'internal_error' });
    expect(executeSQLQuery).not.toHaveBeenCalled();
    expect(Sentry.captureException).toHaveBeenCalledWith(error, {
      contexts: {
        request: {
          method: 'GET',
          path: '/fail',
        },
      },
    });
  });

  it('returns the generic production response when Sentry is not configured', async () => {
    vi.stubEnv('NODE_ENV', 'production');
    vi.stubEnv('NUXT_PUBLIC_SENTRY_DSN', '');

    const response = await createFailingRequest(new Error('boom'))(new Request('http://localhost/fail'));

    expect(response.status).toBe(HTTP_CODE_500_INTERNAL_SERVER_ERROR);
    expect(await response.json()).toEqual({ error: 'internal_error' });
    expect(executeSQLQuery).not.toHaveBeenCalled();
    expect(Sentry.captureException).not.toHaveBeenCalled();
  });

  it('returns the generic production response when Sentry capture fails', async () => {
    vi.stubEnv('NODE_ENV', 'production');
    vi.stubEnv('NUXT_PUBLIC_SENTRY_DSN', 'https://public@example.ingest.sentry.io/1');
    vi.mocked(Sentry.captureException).mockImplementationOnce(() => {
      throw new Error('Sentry unavailable');
    });

    const response = await createFailingRequest(new Error('boom'))(new Request('http://localhost/fail'));

    expect(response.status).toBe(HTTP_CODE_500_INTERNAL_SERVER_ERROR);
    expect(await response.json()).toEqual({ error: 'internal_error' });
    expect(executeSQLQuery).not.toHaveBeenCalled();
    expect(Sentry.captureException).toHaveBeenCalledTimes(1);
  });
});
