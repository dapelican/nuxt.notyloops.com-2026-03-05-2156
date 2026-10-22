import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest';

vi.mock('@sentry/nuxt', () => ({
  init: vi.fn(),
}));

const Sentry = await import('@sentry/nuxt');

describe('Sentry configuration', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.mocked(Sentry.init).mockReset();
    vi.stubEnv('NODE_ENV', 'production');
    vi.stubEnv('NUXT_PUBLIC_SENTRY_DSN', '');
    vi.stubGlobal('useRuntimeConfig', () => ({
      public: {
        sentry_dsn: '',
        sentry_environment: '',
        sentry_traces_sample_rate: 0.1,
      },
    }));
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
  });

  it('loads the server config without initializing Sentry when the DSN is absent', async () => {
    await expect(import('../../../sentry.server.config.js')).resolves.toBeDefined();

    expect(Sentry.init).not.toHaveBeenCalled();
  });

  it('loads the client config without initializing Sentry when the DSN is absent', async () => {
    await expect(import('../../../sentry.client.config.js')).resolves.toBeDefined();

    expect(Sentry.init).not.toHaveBeenCalled();
  });
});
