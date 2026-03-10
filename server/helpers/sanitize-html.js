'use strict';

import {
  JSDOM,
} from 'jsdom';

import createDomPurify from 'dompurify';

import {
  marked,
} from 'marked';

const dompurify = createDomPurify(new JSDOM().window);

const sanitizeHtml = (input) => dompurify.sanitize(marked(input), {
  ADD_ATTR: ['target'],
});

export {
  sanitizeHtml,
};
