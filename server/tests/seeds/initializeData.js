'use strict';

import {
  closePool,
  executeSQLQuery,
} from '../../database/query.js';

import { fileURLToPath } from 'url';

import fs from 'fs/promises';

import path from 'path';

import {
  runMigrations,
} from '../../database/migrations.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const deleteAllTables = async () => {
  console.log('Dropping all tables...');
  await executeSQLQuery(`
    DROP SCHEMA public CASCADE;
    CREATE SCHEMA public;
    GRANT ALL ON SCHEMA public TO public;
  `);
  console.log('✓ All tables dropped');
};

const executeSQLQueriesOfCurrentFolder = async () => {
  const sql_files = (await fs.readdir(__dirname))
    .filter((file) => file.endsWith('.sql'))
    .sort();
  console.log(`Executing ${sql_files.length} seed file(s)...`);
  for (const filename of sql_files) {
    const file_path = path.join(__dirname, filename);
    const sql = await fs.readFile(file_path, 'utf8');
    if (sql.trim()) {
      console.log(`Executing seed: ${filename}`);
      await executeSQLQuery(sql);
      console.log(`✓ Seed ${filename} completed`);
    }
  }
};

const initializeData = async () => {
  await deleteAllTables();

  await runMigrations();

  await executeSQLQueriesOfCurrentFolder();
};

try {
  await initializeData();
} catch (err) {
  console.error(err);
  process.exitCode = 1;
} finally {
  await closePool();
}
