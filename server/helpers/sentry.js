import * as Sentry from '@sentry/nuxt';

const getSentryDsn = () => {
  try {
    return useRuntimeConfig()?.public?.sentry_dsn?.trim()
      || process.env.NUXT_PUBLIC_SENTRY_DSN?.trim();
  } catch {
    return process.env.NUXT_PUBLIC_SENTRY_DSN?.trim();
  }
};

const isSentryEnabled = () => (
  process.env.NODE_ENV === 'production' && Boolean(getSentryDsn())
);

const captureSentryException = (error, context) => {
  if (!isSentryEnabled()) {
    return false;
  }

  try {
    Sentry.captureException(error, context);

    return true;
  } catch {
    return false;
  }
};

const flushSentry = async (timeout_ms = 2000) => {
  if (!isSentryEnabled()) {
    return false;
  }

  let timeout_id;

  try {
    await Promise.race([
      Sentry.flush(timeout_ms),
      new Promise((resolve) => {
        timeout_id = setTimeout(resolve, timeout_ms);
      }),
    ]);

    return true;
  } catch {
    return false;
  } finally {
    clearTimeout(timeout_id);
  }
};

export {
  captureSentryException,
  flushSentry,
  isSentryEnabled,
};
