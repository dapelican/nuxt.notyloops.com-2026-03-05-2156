import * as Sentry from '@sentry/nuxt';

const getTraceSampleRate = (value) => {
  const sample_rate = Number(value);

  return Number.isFinite(sample_rate) && sample_rate >= 0 && sample_rate <= 1
    ? sample_rate
    : 0.1;
};

const getSentryOptions = () => {
  const runtime_config = useRuntimeConfig();
  const sentry_dsn = runtime_config.public.sentry_dsn?.trim();

  if (!import.meta.env.PROD || !sentry_dsn) {
    return undefined;
  }

  return {
    dsn: sentry_dsn,
    enabled: true,
    environment: runtime_config.public.sentry_environment?.trim() || undefined,
    tracesSampleRate: getTraceSampleRate(runtime_config.public.sentry_traces_sample_rate),
    sendDefaultPii: false,
    beforeSend(event) {
      delete event.user;

      if (event.request) {
        delete event.request.cookies;
        delete event.request.data;
        delete event.request.headers;
      }

      return event;
    },
  };
};

const sentry_options = getSentryOptions();

if (sentry_options) {
  Sentry.init(sentry_options);
}
