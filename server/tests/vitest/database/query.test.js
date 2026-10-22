import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest';

const { query_mock } = vi.hoisted(() => ({
  query_mock: vi.fn(),
}));

vi.mock('pg', () => ({
  default: {
    Pool: vi.fn(function Pool() {
      this.query = query_mock;
      this.end = vi.fn(async () => {});
    }),
  },
}));

const {
  closePool,
  executeSQLQuery,
} = await import('../../../database/query.js');

describe('executeSQLQuery', () => {
  beforeEach(() => {
    query_mock.mockReset();
    vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(async () => {
    vi.restoreAllMocks();
    await closePool();
  });

  it('rethrows a failed parameterized query without logging it or its parameters', async () => {
    const error = new Error('syntax error');
    query_mock.mockRejectedValue(error);

    await expect(executeSQLQuery('SELECT $1', ['secret-value'])).rejects.toBe(error);

    expect(query_mock).toHaveBeenCalledTimes(1);
    expect(console.error).not.toHaveBeenCalled();
    expect(console.log).not.toHaveBeenCalled();
  });

  it('rethrows a failed query without parameters', async () => {
    const error = new Error('syntax error');
    query_mock.mockRejectedValue(error);

    await expect(executeSQLQuery('SELECT')).rejects.toBe(error);

    expect(query_mock).toHaveBeenCalledTimes(1);
    expect(console.error).not.toHaveBeenCalled();
  });
});
