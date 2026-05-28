'use strict';

import {
  defineEventHandler,
  setResponseStatus,
} from 'h3';

import {
  HTTP_CODE_200_OK,
} from '../../helpers/http-status-codes.js';

import {
  handleBackendError,
} from '../../helpers/handle-backend-error.js';

const FRANKFURTER_EUR_TO_USD_EXCHANGE_RATE_URL = 'https://api.frankfurter.dev/v1/latest?from=EUR&to=USD';

export default defineEventHandler(async (event) => {
  try {
    const response = await fetch(FRANKFURTER_EUR_TO_USD_EXCHANGE_RATE_URL);

    if (!response.ok) {
      throw new Error('error_failed_to_fetch_exchange_rate');
    }

    const exchange_rate_data = await response.json();

    const eur_to_usd_exchange_rate = exchange_rate_data?.rates?.USD;

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      eur_to_usd_exchange_rate,
    };
  } catch (error) {
    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
