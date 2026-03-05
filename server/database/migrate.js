'use strict';

import {
  getMigrationStatus,
  runMigrations,
} from './migrations.js';

import process from 'process';

const command = process.argv[2];

const showUsage = () => {
  console.log(`
Usage: node server/database/migrate.js [command]

Commands:
  run     - Run pending migrations
  status  - Show migration status
  help    - Show this help message

Examples:
  node server/database/migrate.js run
  node server/database/migrate.js status
`);
};

const goGetMigrationStatus = async () => {
  const status = await getMigrationStatus();
  console.log(`
Migration Status:
  Total migrations: ${status.total}
  Executed: ${status.executed}
  Pending: ${status.pending}

Executed migrations:
${status.executedMigrations.map((migration) => `  ✓ ${migration}`).join('\n') || '  (none)'}

Pending migrations:
${status.pendingMigrations.map((migration) => `  - ${migration}`).join('\n') || '  (none)'}
  `);
};

const main = async () => {
  try {
    switch (command) {
      case 'run':
        await runMigrations();
        break;

      case 'status':
        await goGetMigrationStatus();
        break;

      case 'help':
      case undefined:
        showUsage();
        break;

      default:
        console.error(`Unknown command: ${command}`);
        showUsage();
    }

    process.exit(0);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
};

main();
