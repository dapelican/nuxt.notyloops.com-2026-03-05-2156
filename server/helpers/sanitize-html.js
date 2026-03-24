'use strict';

/* Markdown to HTML for persisted html_content only (no KaTeX). Math renders client-side from markdown_content (shared/render-note-markdown.js). */

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
