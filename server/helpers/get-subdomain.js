'use strict';

import { getRequestURL } from 'h3';

/**
 * Determines the language from the request subdomain.
 * @param {object} event - The H3 event object from the incoming request.
 * @returns {'www' | 'fr' | string} 'www' for the www subdomain and loopback hosts, 'fr' for the fr subdomain.
 */
const is_loopback_host = (hostname) => (
  hostname === 'localhost'
  || hostname === '127.0.0.1'
  || hostname === '::1'
);

const getSubdomain = (event) => {
  const url = getRequestURL(event);

  const hostname = url?.hostname ?? '';

  // Local `npm run local` is opened as localhost or a loopback IP.
  // Those hosts are the English site, same as the www subdomain.
  if (is_loopback_host(hostname)) {
    return 'www';
  }

  const subdomain = hostname.split('.').at(0) ?? '';

  return subdomain;
};

export {
  getSubdomain,
};
