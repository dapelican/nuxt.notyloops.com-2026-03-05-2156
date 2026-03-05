'use strict';

import dotenv from 'dotenv';

import pg from 'pg';

dotenv.config();

let pool_instance = null;

const getConnectionString = () => {
  try {
    return useRuntimeConfig()?.DB_CONNECTION_STRING;
  } catch {
    // Necessary to query the database when the Nuxt service is not up (for migrations and tests)
    return process.env.DB_CONNECTION_STRING;
  }
};

const getPool = () => {
  if (!pool_instance) {
    pool_instance = new pg.Pool({
      connectionString: getConnectionString(),
    });
  }
  return pool_instance;
};

const closePool = async () => {
  if (pool_instance) {
    await pool_instance.end();
    pool_instance = null;
  }
};

const executeSQLQuery = async (sql_query, parameter_list) => {
  const pool = getPool();

  if (parameter_list) {
    return pool.query(sql_query, parameter_list)
      .catch(async (error) => {
        try {
          await executeSQLQuery(
            'INSERT INTO logs (content) VALUES ($1)',
            [JSON.stringify({
              error,
              parameter_list,
              sql_query,
            })]
          );
        } catch (log_error) {
          console.error('Failed to log error to database:', log_error);
        }

        console.error('================= ERROR WITH SQL QUERY AND PARAMETER_LIST =================');
        console.error('sql query: ', sql_query);
        console.error('parameter_list query: ', parameter_list);
        console.error('error:', JSON.stringify(error));
        console.error('===========================================================================');
        throw error;
      });
  }

  return pool.query(sql_query)
    .catch(async (error) => {
      try {
        await executeSQLQuery('INSERT INTO logs (content) VALUES ($1)',
          [JSON.stringify({
            error: JSON.stringify(error),
            sql_query,
          })]
        );
      } catch (log_error) {
        console.error('Failed to log error to database:', log_error);
      }

      console.error('================= ERROR WITH SQL QUERY =================');
      console.error('sql query: ', sql_query);
      console.error('error details:', JSON.stringify(error));
      console.error('========================================================');
      throw error;
    });
};

export {
  closePool,
  executeSQLQuery,
};
