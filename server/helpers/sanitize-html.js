'use strict';

/* Markdown to HTML for persisted html_content and description_html only (no KaTeX). Math renders client-side from markdown (shared/render-note-markdown.js). */

import {
  JSDOM,
} from 'jsdom';

import createDomPurify from 'dompurify';

import {
  marked,
} from 'marked';

import {
  sanitizeNoteHtml,
} from '#shared/note-html-policy.js';

const dompurify = createDomPurify(new JSDOM().window);

const sanitizeHtml = (input) => sanitizeNoteHtml(marked(input), dompurify);

const sanitizeStoredNoteHtml = (input) => {
  if (!input) {
    return null;
  }

  return sanitizeNoteHtml(String(input), dompurify);
};

export {
  sanitizeHtml,
  sanitizeStoredNoteHtml,
};
