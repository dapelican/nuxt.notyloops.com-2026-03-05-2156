'use strict';

/* Authored collection text may be markdown, HTML, or both. Blank input stores neither form. */

import {
  sanitizeHtml,
} from './sanitize-html.js';

const collectionDescriptionColumns = (description) => {
  if (typeof description !== 'string' || description.trim() === '') {
    return {
      description_html: null,
      description_markdown: null,
    };
  }

  return {
    description_html: sanitizeHtml(description.trim()),
    description_markdown: description,
  };
};

export {
  collectionDescriptionColumns,
};
