'use strict';

import { DateTime } from 'luxon';

import {
  HTTP_CODE_500_INTERNAL_SERVER_ERROR,
} from './http-status-codes.js';

import {
  executeSQLQuery,
} from '../database/query.js';

import { getRequestURL } from 'h3';

/**
 * Nitro/h3 error handler. Call from a route's catch block, e.g.:
 *   } catch (err) { return handleBackendError(err, event); }
 * @param {unknown} err - Caught error (Error or any thrown value)
 * @param {import('h3').H3Event} event - Nitro/h3 event
 * @returns {{ error: string }} JSON body for 500 response
 */
const handleBackendError = async (err, event) => {
  const message = err?.message ?? String(err);
  const request_url = getRequestURL(event)?.toString?.() ?? event.node?.req?.url ?? '';
  const request_method = event.method ?? event.node?.req?.method ?? '';

  console.log('============== ERROR ==============');
  console.log('request', `[${DateTime.utc().toISO()}] ${request_method} ${request_url}`);
  console.log(message);
  console.log('===================================');

  try {
    await executeSQLQuery('INSERT INTO logs (content) VALUES ($1)',
      [JSON.stringify({
        error: err,
        request_method,
        request_url,
        timestamp: DateTime.utc().toISO(),
      })]
    );
  } catch (log_error) {
    console.error('Failed to log error to database:', log_error);
  }

  setResponseStatus(event, HTTP_CODE_500_INTERNAL_SERVER_ERROR);

  return {
    error: message,
  };
};

export {
  handleBackendError,
};
