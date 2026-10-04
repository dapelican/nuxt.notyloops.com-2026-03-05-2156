'use strict';

/**
 * One DOMPurify policy for note HTML on the server and in the browser.
 * Markdown tags plus the elements KaTeX emits in HTML mode (span, svg, path, line).
 * MathML, including annotation-xml, is not allowed. KaTeX is rendered with output: 'html'.
 */

import createDomPurify from 'dompurify';

const KATEX_STYLE_PROPERTY_SET = new Set([
  'background-color',
  'border-bottom-width',
  'border-color',
  'border-right-style',
  'border-right-width',
  'border-style',
  'border-top-width',
  'border-width',
  'bottom',
  'color',
  'height',
  'left',
  'margin',
  'margin-left',
  'margin-right',
  'margin-top',
  'min-width',
  'padding-left',
  'position',
  'text-shadow',
  'top',
  'vertical-align',
  'width',
]);

const LENGTH_TOKEN = /^[+-]?(?:\d+\.?\d*|\.\d+)(?:em|ex|px|pt|%)?$/;

const COLOR_TOKEN = /^(?:#[0-9a-f]{3,8}|[a-z]+)$/i;

const BORDER_STYLE_TOKEN = /^(?:solid|dashed|dotted|none)$/;

const hooked_dompurify_set = new WeakSet();

let cached_dompurify = null;

const isLengthToken = (token) => LENGTH_TOKEN.test(token);

const isColorToken = (token) => COLOR_TOKEN.test(token);

const sanitizeStyleValue = (property, value) => {
  const token_list = value.split(/\s+/).filter(Boolean);

  if (token_list.length === 0) {
    return '';
  }

  if (property === 'position') {
    return token_list.length === 1 && token_list[0] === 'relative'
      ? 'relative'
      : '';
  }

  if (property === 'border-style' || property === 'border-right-style') {
    return token_list.length === 1 && BORDER_STYLE_TOKEN.test(token_list[0])
      ? token_list[0]
      : '';
  }

  if (property === 'color' || property === 'background-color' || property === 'border-color') {
    return token_list.length === 1 && isColorToken(token_list[0])
      ? token_list[0]
      : '';
  }

  if (property === 'margin') {
    return token_list.length <= 4 && token_list.every(isLengthToken)
      ? token_list.join(' ')
      : '';
  }

  if (property === 'text-shadow') {
    return token_list.length <= 6 && token_list.every((token) => isLengthToken(token) || isColorToken(token))
      ? token_list.join(' ')
      : '';
  }

  return token_list.length === 1 && isLengthToken(token_list[0])
    ? token_list[0]
    : '';
};

const sanitizeStyleDeclaration = (declaration) => {
  const kept_list = [];

  for (const part of String(declaration).split(';')) {
    const trimmed = part.trim();

    if (!trimmed) {
      continue;
    }

    const colon_index = trimmed.indexOf(':');

    if (colon_index <= 0) {
      continue;
    }

    const property = trimmed.slice(0, colon_index).trim().toLowerCase();
    const value = trimmed.slice(colon_index + 1).trim();

    if (!KATEX_STYLE_PROPERTY_SET.has(property)) {
      continue;
    }

    const safe_value = sanitizeStyleValue(property, value);

    if (!safe_value) {
      continue;
    }

    kept_list.push(`${property}:${safe_value}`);
  }

  return kept_list.join(';');
};

const ensureNoteHtmlHook = (dompurify) => {
  if (hooked_dompurify_set.has(dompurify)) {
    return;
  }

  hooked_dompurify_set.add(dompurify);

  dompurify.addHook('uponSanitizeAttribute', (_node, data) => {
    if (data.attrName !== 'style') {
      return;
    }

    const cleaned = sanitizeStyleDeclaration(data.attrValue);

    if (!cleaned) {
      data.keepAttr = false;
      return;
    }

    data.attrValue = cleaned;
  });

  dompurify.addHook('uponSanitizeElement', (node, data) => {
    if (data.tagName !== 'input') {
      return;
    }

    if (node.getAttribute('type') !== 'checkbox') {
      node.remove();
    }
  });
};

const noteHtmlPurifyConfig = () => ({
  ALLOW_ARIA_ATTR: false,
  ALLOW_DATA_ATTR: false,
  ALLOW_UNKNOWN_PROTOCOLS: false,
  ALLOWED_ATTR: [
    'alt',
    'aria-hidden',
    'checked',
    'class',
    'd',
    'disabled',
    'height',
    'href',
    'preserveAspectRatio',
    'rel',
    'src',
    'stroke-width',
    'style',
    'target',
    'title',
    'type',
    'viewBox',
    'width',
    'x1',
    'x2',
    'xmlns',
    'y1',
    'y2',
  ],
  ALLOWED_TAGS: [
    'a',
    'blockquote',
    'br',
    'code',
    'del',
    'em',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'hr',
    'img',
    'input',
    'li',
    'line',
    'ol',
    'p',
    'path',
    'pre',
    'span',
    'strong',
    'sub',
    'sup',
    'svg',
    'table',
    'tbody',
    'td',
    'th',
    'thead',
    'tr',
    'ul',
  ],
});

const sanitizeNoteHtml = (html, dompurify) => {
  ensureNoteHtmlHook(dompurify);

  return dompurify.sanitize(html == null ? '' : String(html), noteHtmlPurifyConfig());
};

const getNoteDomPurify = async () => {
  if (cached_dompurify) {
    return cached_dompurify;
  }

  if (import.meta.server) {
    const {
      JSDOM,
    } = await import('jsdom');

    cached_dompurify = createDomPurify(new JSDOM('').window);
  } else {
    cached_dompurify = createDomPurify(window);
  }

  return cached_dompurify;
};

export {
  getNoteDomPurify,
  noteHtmlPurifyConfig,
  sanitizeNoteHtml,
};
