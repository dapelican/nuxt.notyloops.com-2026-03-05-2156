'use strict';

import {
  CONTENT_SECURITY_POLICY,
  SECURITY_HEADERS,
  SECURITY_ROUTE_RULES,
  TOKEN_PAGE_PATH_LIST,
} from '#shared/security-headers.js';

import {
  describe,
  expect,
  it,
} from 'vitest';

import {
  readFileSync,
} from 'node:fs';

describe('security response headers', () => {
  it('sets nosniff, no-referrer, and a same-origin script policy on every route', () => {
    expect(SECURITY_ROUTE_RULES['/**'].headers).toBe(SECURITY_HEADERS);
    expect(SECURITY_HEADERS['X-Content-Type-Options']).toBe('nosniff');
    expect(SECURITY_HEADERS['Referrer-Policy']).toBe('no-referrer');
    expect(CONTENT_SECURITY_POLICY).toContain('script-src \'self\'');
    expect(CONTENT_SECURITY_POLICY).toContain('object-src \'none\'');
    expect(CONTENT_SECURITY_POLICY).toContain('base-uri \'self\'');
    expect(CONTENT_SECURITY_POLICY).toContain('frame-ancestors \'none\'');
    expect(CONTENT_SECURITY_POLICY).not.toMatch(/https?:\/\//);
  });

  it('covers reset, sign-up validation, and email-change confirmation pages', () => {
    expect(TOKEN_PAGE_PATH_LIST).toEqual([
      '/a/confirm-email-change/00000000-0000-4000-8000-000000000001',
      '/a/reset-password/00000000-0000-4000-8000-000000000001',
      '/a/sign-up-2/00000000-0000-4000-8000-000000000001',
    ]);
  });

  it('applies those route rules from nuxt.config.js', () => {
    const config_source = readFileSync(new URL('../../../nuxt.config.js', import.meta.url), 'utf8');

    expect(config_source).toContain('SECURITY_ROUTE_RULES');
    expect(config_source).toContain('routeRules: SECURITY_ROUTE_RULES');
  });
});
