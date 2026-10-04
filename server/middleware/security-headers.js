'use strict';

import {
  defineEventHandler,
  setHeaders,
} from 'h3';

import {
  SECURITY_HEADERS,
} from '#shared/security-headers.js';

export default defineEventHandler((event) => {
  setHeaders(event, SECURITY_HEADERS);
});
