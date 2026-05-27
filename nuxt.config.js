'use strict';

import {
  fileURLToPath,
} from 'node:url';

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    'nuxt-auth-utils',
  ],
  // to prevent weird warnings in the console locally
  devtools: {
    enabled: false,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
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
    B2_APPLICATION_KEY: process.env.B2_APPLICATION_KEY,
    B2_APPLICATION_KEY_ID: process.env.B2_APPLICATION_KEY_ID,
    B2_BUCKET_ID: process.env.B2_BUCKET_ID,
    B2_BUCKET_NAME: process.env.B2_BUCKET_NAME,
    DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
    EMAILABLE_API_KEY: process.env.EMAILABLE_API_KEY,
    GOOGLE_CLOUD_API_KEY: process.env.GOOGLE_CLOUD_API_KEY,
    PLUNK_SECRET_KEY: process.env.PLUNK_SECRET_KEY,
    SESSION_MAX_AGE_DAYS: process.env.SESSION_MAX_AGE_DAYS,
    SMTP2GO_API_KEY: process.env.SMTP2GO_API_KEY,
    STRIPE_ENDPOINT_SECRET: process.env.STRIPE_ENDPOINT_SECRET,
    STRIPE_SECRET_API_KEY: process.env.STRIPE_SECRET_API_KEY,
    public: {
      domain: process.env.DOMAIN,
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
      '0 3 * * 1': ['tasks:delete-unused-backblaze-files'],
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
        code: 'en',
        domain: `www.${process.env.DOMAIN}`,
        file: 'en.json',
        language: 'en',
        name: 'English',
      },
      {
        code: 'fr',
        domain: `fr.${process.env.DOMAIN}`,
        file: 'fr.json',
        language: 'fr',
        name: 'Français',
      },
    ],
    strategy: 'no_prefix',
  },
});
