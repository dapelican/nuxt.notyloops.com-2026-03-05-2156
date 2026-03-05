'use strict';

import { beforeEach, vi } from 'vitest';
import { setResponseStatus } from 'h3';

globalThis.useRuntimeConfig = vi.fn(() => ({
  DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
  EMAILABLE_API_KEY: 'test-emailable-key',
  SESSION_MAX_AGE_DAYS: '30',
  SMTP2GO_API_KEY: 'test-smtp2go-key',
}));

globalThis.setUserSession = vi.fn(async () => {});
globalThis.getUserSession = vi.fn(async () => ({}));
globalThis.clearUserSession = vi.fn(async () => {});
globalThis.replaceUserSession = vi.fn(async () => {});

globalThis.setResponseStatus = setResponseStatus;

beforeEach(() => {
  vi.mocked(globalThis.useRuntimeConfig).mockReturnValue({
    DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
    EMAILABLE_API_KEY: 'test-emailable-key',
    SESSION_MAX_AGE_DAYS: '30',
    SMTP2GO_API_KEY: 'test-smtp2go-key',
  });
  vi.mocked(globalThis.setUserSession).mockReset().mockResolvedValue(undefined);
  vi.mocked(globalThis.getUserSession).mockReset().mockResolvedValue({});
  vi.mocked(globalThis.clearUserSession).mockReset().mockResolvedValue(undefined);
  vi.mocked(globalThis.replaceUserSession).mockReset().mockResolvedValue(undefined);
});
