import {
  beforeAll,
  describe,
  expect,
  it,
  vi,
} from 'vitest';

import {
  readFileSync,
} from 'node:fs';

vi.stubGlobal('defineNuxtConfig', (config) => config);

const package_json = JSON.parse(
  readFileSync(new URL('../../../package.json', import.meta.url), 'utf8')
);

describe('security response headers', () => {
  let nuxt_config;

  beforeAll(async () => {
    nuxt_config = (await import('../../../nuxt.config.js')).default;
  });

  it('registers nuxt-security and leaves unused middleware off', () => {
    expect(package_json.dependencies['nuxt-security']).toBeDefined();
    expect(nuxt_config.modules).toContain('nuxt-security');
    expect(nuxt_config.security).toMatchObject({
      nonce: true,
      hidePoweredBy: true,
      sri: true,
      requestSizeLimiter: false,
      rateLimiter: false,
      xssValidator: false,
      corsHandler: false,
      allowedMethodsRestricter: false,
      csrf: false,
      removeLoggers: false,
    });
  });

  it('allows Turnstile, YouTube, and Backblaze without strict-dynamic', () => {
    const content_security_policy = nuxt_config.security.headers.contentSecurityPolicy;

    expect(nuxt_config.security.headers).toMatchObject({
      referrerPolicy: 'strict-origin-when-cross-origin',
      crossOriginEmbedderPolicy: 'unsafe-none',
      xContentTypeOptions: 'nosniff',
      xFrameOptions: 'DENY',
    });
    expect(content_security_policy['script-src']).toEqual([
      '\'self\'',
      'https://challenges.cloudflare.com',
      '\'nonce-{{nonce}}\'',
      '\'unsafe-inline\'',
    ]);
    expect(content_security_policy['script-src'].join(' ')).not.toContain('strict-dynamic');
    expect(content_security_policy['script-src-attr']).toEqual(['\'none\'']);
    expect(content_security_policy['frame-src']).toEqual([
      'https://challenges.cloudflare.com',
      'https://www.youtube-nocookie.com',
    ]);
    expect(content_security_policy['connect-src']).toEqual([
      '\'self\'',
      'https://challenges.cloudflare.com',
    ]);
    expect(content_security_policy['img-src']).toEqual([
      '\'self\'',
      'data:',
      'https://*.backblazeb2.com',
    ]);
    expect(content_security_policy['media-src']).toEqual([
      '\'self\'',
      'https://*.backblazeb2.com',
    ]);
    expect(content_security_policy['style-src']).toEqual([
      '\'self\'',
      '\'unsafe-inline\'',
      'https://fonts.googleapis.com',
    ]);
    expect(content_security_policy['font-src']).toEqual([
      '\'self\'',
      'data:',
      'https://fonts.gstatic.com',
    ]);
    expect(content_security_policy['frame-ancestors']).toEqual(['\'none\'']);
    expect(content_security_policy['default-src']).toEqual(['\'self\'']);
    expect(content_security_policy['object-src']).toEqual(['\'none\'']);
    expect(content_security_policy['base-uri']).toEqual(['\'self\'']);
    expect(content_security_policy['form-action']).toEqual(['\'self\'']);
    expect(nuxt_config.routeRules).toBeUndefined();
    expect(nuxt_config.nitro.routeRules).toBeUndefined();
  });
});
