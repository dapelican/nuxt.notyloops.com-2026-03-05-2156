'use strict';

/*
 * script-src includes 'unsafe-inline' because Nuxt injects the color-mode
 * script and window.__NUXT__ config as inline scripts. No third-party origin
 * is allowed. Referrer-Policy is global so token URLs are not sent onward.
 */

const CONTENT_SECURITY_POLICY = [
  'script-src \'self\' \'unsafe-inline\'',
  'object-src \'none\'',
  'base-uri \'self\'',
  'frame-ancestors \'none\'',
].join('; ');

const SECURITY_HEADERS = {
  'Content-Security-Policy': CONTENT_SECURITY_POLICY,
  'Referrer-Policy': 'no-referrer',
  'X-Content-Type-Options': 'nosniff',
};

const SECURITY_ROUTE_RULES = {
  '/**': {
    headers: SECURITY_HEADERS,
  },
};

const TOKEN_PAGE_PATH_LIST = [
  '/a/confirm-email-change/00000000-0000-4000-8000-000000000001',
  '/a/reset-password/00000000-0000-4000-8000-000000000001',
  '/a/sign-up-2/00000000-0000-4000-8000-000000000001',
];

export {
  CONTENT_SECURITY_POLICY,
  SECURITY_HEADERS,
  SECURITY_ROUTE_RULES,
  TOKEN_PAGE_PATH_LIST,
};
