'use strict';

import {
  fileURLToPath,
} from 'node:url';

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxtjs/plausible',
    '@nuxtjs/turnstile',
    'nuxt-auth-utils',
    'nuxt-security',
  ],
  // to prevent weird warnings in the console locally
  devtools: {
    enabled: false,
  },
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/images/notyloops-0016x0016.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/images/notyloops-0032x0032.png',
        },
      ],
      // To make the browser have the same color as the brand color
      // meta: [
      //   {
      //     name: 'theme-color',
      //     content: '#97BF0D',
      //   },
      // ],
    },
  },
  css: ['~/assets/css/main.css'],
  // to make the environment variables declared in the .env file
  // available in the app folder (client-side) and the sever folder (server-side).
  // with the funtion useRuntimeConfig()
  runtimeConfig: {
    AMAZON_SES_ACCESS_KEY_ID: process.env.AMAZON_SES_ACCESS_KEY_ID,
    AMAZON_SES_REGION: process.env.AMAZON_SES_REGION,
    AMAZON_SES_SECRET_ACCESS_KEY: process.env.AMAZON_SES_SECRET_ACCESS_KEY,
    B2_APPLICATION_KEY: process.env.B2_APPLICATION_KEY,
    B2_APPLICATION_KEY_ID: process.env.B2_APPLICATION_KEY_ID,
    B2_BUCKET_ID: process.env.B2_BUCKET_ID,
    B2_BUCKET_NAME: process.env.B2_BUCKET_NAME,
    DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
    EMAILABLE_API_KEY: process.env.EMAILABLE_API_KEY,
    GOOGLE_CLOUD_API_KEY: process.env.GOOGLE_CLOUD_API_KEY,
    POSTMARK_SERVER_TOKEN: process.env.POSTMARK_SERVER_TOKEN,
    SESSION_MAX_AGE_DAYS: process.env.SESSION_MAX_AGE_DAYS,
    STRIPE_ENDPOINT_SECRET: process.env.STRIPE_ENDPOINT_SECRET,
    STRIPE_SECRET_API_KEY: process.env.STRIPE_SECRET_API_KEY,
    public: {
      domain: process.env.DOMAIN,
    },
    turnstile: {
      // Dummy secret in dev so local checks do not call Siteverify.
      // CLOUDFLARE_TURNSTILE_SECRET_KEY replaces this in production.
      secretKey: process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY
        || (process.env.NODE_ENV === 'development'
          ? '1x0000000000000000000000000000000AA'
          : ''),
    },
    session: {
      // Implicitly used by nuxt-auth-utils to st the cookie lifespan
      maxAge: 60 * 60 * 24 * Number(process.env.SESSION_MAX_AGE_DAYS),
    },
  },
  alias: {
    '#shared': fileURLToPath(new URL('./shared', import.meta.url)),
  },
  compatibilityDate: '2026-03-05',
  nitro: {
    scanDirs: ['server/services'],
    experimental: {
      tasks: true,
    },
    scheduledTasks: {
      '0 3 * * *': ['tasks:delete-notes-permanently'],
      '0 4 * * *': ['tasks:delete-unused-backblaze-files'],
      '0 5 * * *': ['tasks:send-email-to-extend-premium'],
      '0 6 * * *': ['tasks:update-user-status'],
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  i18n: {
    defaultLocale: 'en',
    detectBrowserLanguage: false,
    differentDomains: true,
    locales: [
      {
        // Internal locale id for routing / switching
        code: 'en',
        domain: `www.${process.env.DOMAIN}`,
        file: 'en.json',
        // Real language tag for browsers/SEO ('en', 'fr', or richer like 'en-US')
        language: 'en',
        // Human-readable label in UI (e.g. language switcher)
        name: 'English',
      },
      {
        // Internal locale id for routing / switching
        code: 'fr',
        domain: `fr.${process.env.DOMAIN}`,
        file: 'fr.json',
        // Real language tag for browsers/SEO ('en', 'fr', or richer like 'en-US')
        language: 'fr',
        // Human-readable label in UI (e.g. language switcher)
        name: 'Français',
      },
    ],
    strategy: 'no_prefix',
  },
  plausible: {
    autoOutboundTracking: true,
    fileDownloads: true,
    // Prevent tracking on localhost
    ignoredHostnames: ['localhost'],
    formSubmissions: false,
    proxy: true,
  },
  // Headers only. Other nuxt-security middleware stays off until the app uses it.
  // 'unsafe-inline' in script-src is the CSP Level 2 fallback; a nonce makes browsers ignore it.
  // strict-dynamic is omitted: @nuxtjs/turnstile 1.1.3 does not nonce its external script,
  // and CSP3 would then ignore the Cloudflare host allowlist.
  security: {
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
    headers: {
      referrerPolicy: 'no-referrer',
      xContentTypeOptions: 'nosniff',
      xFrameOptions: 'DENY',
      contentSecurityPolicy: {
        'default-src': ['\'self\''],
        'script-src': [
          '\'self\'',
          'https://challenges.cloudflare.com',
          '\'nonce-{{nonce}}\'',
          '\'unsafe-inline\'',
        ],
        'script-src-attr': ['\'none\''],
        'frame-src': [
          'https://challenges.cloudflare.com',
          'https://www.youtube.com',
        ],
        'connect-src': ['\'self\'', 'https://challenges.cloudflare.com'],
        'style-src': ['\'self\'', '\'unsafe-inline\''],
        'img-src': [
          '\'self\'',
          'data:',
          'https://*.backblazeb2.com',
        ],
        'media-src': [
          '\'self\'',
          'https://*.backblazeb2.com',
        ],
        'font-src': ['\'self\'', 'data:'],
        'object-src': ['\'none\''],
        'base-uri': ['\'self\''],
        'form-action': ['\'self\''],
        'frame-ancestors': ['\'none\''],
      },
    },
  },
  turnstile: {
    siteKey: process.env.CLOUDFLARE_TURNSTILE_PUBLIC_SITE_KEY,
  },
});
