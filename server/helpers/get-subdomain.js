'use strict';

import { getRequestURL } from 'h3';

/**
 * Determines the language from the request subdomain.
 * @param {object} event - The H3 event object from the incoming request.
 * @returns {'en' | 'fr'} 'en' when subdomain is 'www', 'fr' when subdomain is 'fr'.
 */
function getSubdomain(event) {
  const url = getRequestURL(event);

  const hostname = url?.hostname ?? '';

  return hostname.split('.').at(0) ?? '';
}

export {
  getSubdomain,
};
