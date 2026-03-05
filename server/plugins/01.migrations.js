import {
  runMigrations,
} from '../database/migrations.js';

export default async () => {
  try {
    await runMigrations();
  } catch (error) {
    console.error('Failed to start app:', error);
    process.exit(1);
  }
};
