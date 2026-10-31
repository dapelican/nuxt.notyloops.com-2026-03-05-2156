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
    console.error('================= ERROR =====================');
    console.error('file:', 'server/plugins/01.migrations.js');
    console.error('Failed to start app:', error);
    console.error('=============================================');

    captureSentryException(error, {
      tags: {
        startup_phase: 'migrations',
      },
    });
    await flushSentry();
    process.exit(1);
  }
};
