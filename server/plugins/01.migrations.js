import {
  captureSentryException,
  flushSentry,
} from '../helpers/sentry.js';

import {
  runMigrations,
} from '../database/migrations.js';

export default async () => {
  try {
    await runMigrations();
  } catch (error) {
    console.error('Failed to start app:', error);
    captureSentryException(error, {
      tags: {
        startup_phase: 'migrations',
      },
    });
    await flushSentry();
    process.exit(1);
  }
};
