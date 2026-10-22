import {
  fileURLToPath,
} from 'node:url';

const getNonEmptyEnvironmentVariable = (name) => {
  const value = process.env[name]?.trim();

  return value || undefined;
};

const getTraceSampleRate = () => {
  const value = Number(getNonEmptyEnvironmentVariable('NUXT_PUBLIC_SENTRY_TRACES_SAMPLE_RATE') ?? 0.1);

  return Number.isFinite(value) && value >= 0 && value <= 1 ? value : 0.1;
};

const sentry_dsn = getNonEmptyEnvironmentVariable('NUXT_PUBLIC_SENTRY_DSN');
const sentry_environment = getNonEmptyEnvironmentVariable('NUXT_PUBLIC_SENTRY_ENVIRONMENT');
const sentry_traces_sample_rate = getTraceSampleRate();
const sentry_auth_token = getNonEmptyEnvironmentVariable('SENTRY_AUTH_TOKEN');
const sentry_org = getNonEmptyEnvironmentVariable('SENTRY_ORG');
const sentry_project = getNonEmptyEnvironmentVariable('SENTRY_PROJECT');
const is_production = process.env.NODE_ENV === 'production';
const is_sentry_enabled = is_production && Boolean(sentry_dsn);
const can_upload_sentry_source_maps = is_sentry_enabled
  && Boolean(sentry_auth_token && sentry_org && sentry_project);

let sentry_ingest_origin;

if (sentry_dsn) {
  try {
    sentry_ingest_origin = new URL(sentry_dsn).origin;
  } catch {
    sentry_ingest_origin = undefined;
  }
}

export default defineNuxtConfig({
  modules: [
    ...(!is_production ? ['@nuxt/eslint'] : []),
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxtjs/plausible',
    '@nuxtjs/turnstile',
    'nuxt-auth-utils',
    'nuxt-security',
    ...(is_sentry_enabled ? ['@sentry/nuxt/module'] : []),
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
    B2_APPLICATION_KEY: process.env.B2_APPLICATION_KEY,
    B2_APPLICATION_KEY_ID: process.env.B2_APPLICATION_KEY_ID,
    B2_BUCKET_ID: process.env.B2_BUCKET_ID,
    B2_BUCKET_NAME: process.env.B2_BUCKET_NAME,
    DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
    EMAILABLE_API_KEY: process.env.EMAILABLE_API_KEY,
    GOOGLE_CLOUD_API_KEY: process.env.GOOGLE_CLOUD_API_KEY,
    SESSION_MAX_AGE_DAYS: process.env.SESSION_MAX_AGE_DAYS,
    SMTP2GO_API_KEY: process.env.SMTP2GO_API_KEY,
    STRIPE_ENDPOINT_SECRET: process.env.STRIPE_ENDPOINT_SECRET,
    STRIPE_PREMIUM_MONTHLY_EUR_PRICE_ID: process.env.STRIPE_PREMIUM_MONTHLY_EUR_PRICE_ID,
    STRIPE_PREMIUM_MONTHLY_USD_PRICE_ID: process.env.STRIPE_PREMIUM_MONTHLY_USD_PRICE_ID,
    STRIPE_PREMIUM_YEARLY_EUR_PRICE_ID: process.env.STRIPE_PREMIUM_YEARLY_EUR_PRICE_ID,
    STRIPE_PREMIUM_YEARLY_USD_PRICE_ID: process.env.STRIPE_PREMIUM_YEARLY_USD_PRICE_ID,
    STRIPE_SECRET_API_KEY: process.env.STRIPE_SECRET_API_KEY,
    public: {
      domain: process.env.DOMAIN,
      sentry_dsn,
      sentry_environment,
      sentry_traces_sample_rate,
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
  sourcemap: is_production
    ? {
        client: 'hidden',
        server: 'hidden',
      }
    : false,
  compatibilityDate: '2026-03-05',
  nitro: {
    externals: {
      // pg's CommonJS dependencies use extensionless subpath imports that Node ESM cannot resolve.
      external: ['pg'],
    },
    scanDirs: ['server/services'],
    experimental: {
      tasks: true,
    },
    scheduledTasks: {
      '0 3 * * *': ['delete-notes-permanently'],
      '0 4 * * *': ['delete-unused-backblaze-files'],
      '0 5 * * *': ['send-email-before-premium-yearly-renewal'],
      '0 6 * * *': ['update-user-status'],
    },
  },
  ...(!is_production
    ? {
        eslint: {
          config: {
            stylistic: true,
          },
        },
      }
    : {}),
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
  // YouTube embeds need a Referer and must not be blocked by COEP.
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
      referrerPolicy: 'strict-origin-when-cross-origin',
      crossOriginEmbedderPolicy: 'unsafe-none',
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
          'https://www.youtube-nocookie.com',
        ],
        'connect-src': [
          '\'self\'',
          'https://challenges.cloudflare.com',
          ...(sentry_ingest_origin ? [sentry_ingest_origin] : []),
        ],
        // HeaderElement loads Permanent Marker: CSS from fonts.googleapis.com, files from fonts.gstatic.com.
        'style-src': [
          '\'self\'',
          '\'unsafe-inline\'',
          'https://fonts.googleapis.com',
        ],
        'img-src': [
          '\'self\'',
          'data:',
          'https://*.backblazeb2.com',
        ],
        'media-src': [
          '\'self\'',
          'https://*.backblazeb2.com',
        ],
        'font-src': [
          '\'self\'',
          'data:',
          'https://fonts.gstatic.com',
        ],
        'object-src': ['\'none\''],
        'base-uri': ['\'self\''],
        'form-action': ['\'self\''],
        'frame-ancestors': ['\'none\''],
      },
    },
  },
  sentry: {
    enabled: is_sentry_enabled,
    ...(can_upload_sentry_source_maps
      ? {
          authToken: sentry_auth_token,
          org: sentry_org,
          project: sentry_project,
        }
      : {}),
    sourcemaps: {
      disable: !can_upload_sentry_source_maps,
    },
  },
  turnstile: {
    siteKey: process.env.CLOUDFLARE_TURNSTILE_PUBLIC_SITE_KEY,
  },
});
