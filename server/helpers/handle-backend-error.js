'use strict';

import { DateTime } from 'luxon';

import {
  HTTP_CODE_500_INTERNAL_SERVER_ERROR,
} from './http-status-codes.js';

import {
  captureSentryException,
} from './sentry.js';

import {
  executeSQLQuery,
} from '../database/query.js';

import {
  getRequestURL,
} from 'h3';

const serializeError = (error) => {
  if (error instanceof Error) {
    return {
      name: error.name,
      message: error.message,
      stack: error.stack,
    };
  }

  return {
    message: String(error),
  };
};

/**
 * Nitro/h3 error handler. Call from a route's catch block, e.g.:
 *   } catch (err) { return handleBackendError(err, event); }
 * @param {unknown} err - Caught error (Error or any thrown value)
 * @param {import('h3').H3Event} event - Nitro/h3 event
 * @returns {{ error: string }} JSON body for 500 response
 */
const handleBackendError = async (err, event) => {
  const request_url = getRequestURL(event);
  const request_path = request_url?.pathname ?? event.node?.req?.url?.split('?')[0] ?? '';
  const request_method = event.method ?? event.node?.req?.method ?? '';

  if (process.env.NODE_ENV !== 'production') {
    const serialized_error = serializeError(err);
    const timestamp = DateTime.utc().toISO();

    console.error('============== ERROR ==============');
    console.error('request', `[${timestamp}] ${request_method} ${request_url}`);
    console.error(serialized_error.stack ?? serialized_error.message);
    console.error('===================================');

    try {
      await executeSQLQuery('INSERT INTO logs (content) VALUES ($1)',
        [JSON.stringify({
          error: serialized_error,
          request_method,
          request_url: request_url?.toString() ?? '',
          timestamp,
        })]
      );
    } catch (log_error) {
      console.error('Failed to log error to database:', log_error);
    }
  } else {
    captureSentryException(err, {
      contexts: {
        request: {
          method: request_method,
          path: request_path,
        },
      },
    });
  }

  event.res.status = HTTP_CODE_500_INTERNAL_SERVER_ERROR;

  return {
    error: 'internal_error',
  };
};

export {
  handleBackendError,
};
