'use strict';

import { getRequestURL } from 'h3';

/**
 * Determines the language from the request subdomain.
 * @param {object} event - The H3 event object from the incoming request.
 * @returns {'www' | 'fr'} 'fr' when the first hostname label is fr, otherwise 'www'.
 */
const getSubdomain = (event) => {
  const url = getRequestURL(event);

  const label = (url?.hostname ?? '').split('.').at(0)?.toLowerCase() ?? '';

  return label === 'fr' || label === 'www' ? label : 'www';
};

export {
  getSubdomain,
};
