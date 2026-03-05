'use strict';

import {
  executeSQLQuery,
} from './query.js';

import fs from 'fs/promises';

import path from 'path';

// Resolve migrations dir from project root so it works when Nitro runs from .nuxt
const MIGRATIONS_DIR = path.join(process.cwd(), 'server', 'migrations');

// Create the migrations table if it doesn't exist
const createMigrationsTable = async () => {
  const createTableSQL = `
    CREATE TABLE IF NOT EXISTS migrations (
      id SERIAL PRIMARY KEY,
      filename TEXT NOT NULL UNIQUE,
      executed_at TIMESTAMPTZ DEFAULT now() NOT NULL
    );
  `;

  await executeSQLQuery(createTableSQL);
  console.log('Migrations table ready');
};

// Get list of executed migrations from database
const getExecutedMigrations = async () => {
  const result = await executeSQLQuery('SELECT filename FROM migrations ORDER BY id');
  return result.rows.map((row) => row.filename);
};

// Get list of migration files from filesystem
const getMigrationFiles = async (migrationsDir = MIGRATIONS_DIR) => {
  try {
    const files = await fs.readdir(migrationsDir);
    return files
      .filter((file) => file.endsWith('.sql'))
      .sort(); // Sort alphabetically for consistent order
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log(`Migrations directory ${migrationsDir} does not exist`);
      return [];
    }
    throw error;
  }
};

// Read and execute a migration file
const executeMigrationFile = async (filename, migrationsDir = MIGRATIONS_DIR) => {
  const filePath = path.join(migrationsDir, filename);
  const sql = await fs.readFile(filePath, 'utf8');

  console.log(`Executing migration: ${filename}`);

  // Execute the migration SQL
  await executeSQLQuery(sql);

  // Record the migration as executed
  await executeSQLQuery(
    'INSERT INTO migrations (filename) VALUES ($1)',
    [filename]
  );

  console.log(`✓ Migration ${filename} completed`);
};

// Run pending migrations
const runMigrations = async (migrationsDir = MIGRATIONS_DIR) => {
  try {
    console.log('Starting migrations...');

    // Ensure migrations table exists
    await createMigrationsTable();

    // Get executed and available migrations
    const [executedMigrations, migrationFiles] = await Promise.all([
      getExecutedMigrations(),
      getMigrationFiles(migrationsDir),
    ]);

    // Find pending migrations
    const pendingMigrations = migrationFiles.filter(
      (file) => !executedMigrations.includes(file)
    );

    if (pendingMigrations.length === 0) {
      console.log('No pending migrations');
      return;
    }

    console.log(`Found ${pendingMigrations.length} pending migration(s)`);

    // Execute pending migrations sequentially
    for (const migration of pendingMigrations) {
      await executeMigrationFile(migration, migrationsDir);
    }

    console.log('All migrations completed successfully');
  } catch (error) {
    console.error('Migration failed:', error);
    throw error;
  }
};

// Check migration status
const getMigrationStatus = async (migrationsDir = MIGRATIONS_DIR) => {
  await createMigrationsTable();

  const [executedMigrations, migrationFiles] = await Promise.all([
    getExecutedMigrations(),
    getMigrationFiles(migrationsDir),
  ]);

  const pendingMigrations = migrationFiles.filter(
    (file) => !executedMigrations.includes(file)
  );

  return {
    executed: executedMigrations.length,
    executedMigrations,
    pending: pendingMigrations.length,
    pendingMigrations,
    total: migrationFiles.length,
  };
};

export {
  runMigrations,
  getMigrationStatus,
  createMigrationsTable,
};
