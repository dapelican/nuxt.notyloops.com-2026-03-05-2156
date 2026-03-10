'use strict';

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
    SESSION_MAX_AGE_DAYS: process.env.SESSION_MAX_AGE_DAYS,
    SMTP2GO_API_KEY: process.env.SMTP2GO_API_KEY,
    session: {
      // Implicitly used by nuxt-auth-utils to st the cookie lifespan
      maxAge: 60 * 60 * 24 * Number(process.env.SESSION_MAX_AGE_DAYS),
    },
  },
  compatibilityDate: '2026-03-05',
  nitro: {
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
        name: 'English',
      },
      {
        code: 'fr',
        domain: `fr.${process.env.DOMAIN}`,
        file: 'fr.json',
        name: 'Français',
      },
    ],
    strategy: 'no_prefix',
  },
});
