'use strict';

/**
 * Client-side note HTML from markdown: custom math delimiters, marked, KaTeX, DOMPurify.
 * Math: inline `$$...$$`, display `$$$...$$$` (block extracted before inline).
 * Single `$` is never parsed as math.
 * Server persists markdown unchanged; KaTeX runs only here for display.
 */

import createDomPurify from 'dompurify';

import katex from 'katex';

import {
  marked,
} from 'marked';

const PH_FENCE = (index) => `\uE000FENCE${index}\uE001`;

const PH_INLINE = (index) => `\uE000INLINE${index}\uE001`;

const PH_MATH = (index) => `\uE000MATH${index}\uE001`;

const escape_html = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');

const escape_attr = (value) => escape_html(value).replaceAll('\'', '&#39;');

const dompurify_config = () => ({
  ADD_ATTR: [
    'target',
    'class',
    'style',
    'aria-hidden',
    'aria-label',
    'role',
    'xmlns',
    'width',
    'height',
    'viewBox',
    'preserveAspectRatio',
    'stroke',
    'stroke-width',
    'fill',
    'x',
    'y',
    'x1',
    'y1',
    'x2',
    'y2',
    'd',
    'transform',
    'encoding',
  ],
  ADD_TAGS: [
    'math',
    'semantics',
    'mrow',
    'mi',
    'mo',
    'mn',
    'ms',
    'mtext',
    'mspace',
    'msup',
    'msub',
    'msubsup',
    'mfrac',
    'munder',
    'mover',
    'munderover',
    'mtable',
    'mtr',
    'mtd',
    'mlabeledtr',
    'menclose',
    'mstyle',
    'mpadded',
    'mphantom',
    'mfenced',
    'maction',
    'annotation',
    'annotation-xml',
    'svg',
    'path',
    'line',
    'rect',
    'g',
    'defs',
    'pattern',
    'marker',
  ],
});

const extract_fenced_code = (input, fence_stored) => input.replace(
  /```([\w-]*)\n([\s\S]*?)```/g,
  (_, lang, body) => {
    fence_stored.push({
      lang,
      body,
    });
    return PH_FENCE(fence_stored.length - 1);
  }
);

const protect_inline_code = (input, inline_stored) => {
  let index = 0;
  return input.replace(/`([^`\n]+)`/g, (_, code) => {
    inline_stored.push(code);
    const token = PH_INLINE(index);
    index += 1;
    return token;
  });
};

const extract_math = (input, math_stored) => {
  let working = input.replace(
    /\$\$\$([\s\S]*?)\$\$\$/g,
    (_, tex) => {
      math_stored.push({
        tex: tex.trim(),
        display_mode: true,
      });
      return PH_MATH(math_stored.length - 1);
    }
  );

  working = working.replace(
    /\$\$([\s\S]*?)\$\$/g,
    (_, tex) => {
      math_stored.push({
        tex: tex.trim(),
        display_mode: false,
      });
      return PH_MATH(math_stored.length - 1);
    }
  );

  return working;
};

const fence_to_pre_html = ({
  lang,
  body,
}) => {
  const class_attr = lang
    ? ` class="language-${escape_attr(lang)}"`
    : '';
  return `<pre><code${class_attr}>${escape_html(body)}</code></pre>`;
};

const restore_placeholders = (html, math_stored, fence_stored, inline_stored, dompurify) => {
  let out = html;

  for (let i = math_stored.length - 1; i >= 0; i -= 1) {
    const {
      tex,
      display_mode,
    } = math_stored[i];
    const fragment = katex.renderToString(tex, {
      displayMode: display_mode,
      throwOnError: false,
      strict: 'ignore',
    });
    out = out.split(PH_MATH(i)).join(fragment);
  }

  for (let i = fence_stored.length - 1; i >= 0; i -= 1) {
    out = out.split(PH_FENCE(i)).join(fence_to_pre_html(fence_stored[i]));
  }

  for (let i = inline_stored.length - 1; i >= 0; i -= 1) {
    const escaped = escape_html(inline_stored[i]);
    out = out.split(PH_INLINE(i)).join(`<code>${escaped}</code>`);
  }

  return dompurify.sanitize(out, dompurify_config());
};

/** Second argument is only for tests (pass DOMPurify bound to jsdom `window`). */
const renderNoteMarkdownToHtml = (markdown, dompurify_instance = null) => {
  const trimmed = markdown?.trim();

  if (!trimmed) {
    return '';
  }

  const window_ref = typeof window !== 'undefined' ? window : null;
  const dompurify = dompurify_instance
    ?? (window_ref ? createDomPurify(window_ref) : null);

  if (!dompurify) {
    return '';
  }

  const fence_stored = [];
  const inline_stored = [];
  const math_stored = [];

  let working = extract_fenced_code(trimmed, fence_stored);
  working = protect_inline_code(working, inline_stored);
  working = extract_math(working, math_stored);

  const raw_html = marked(working, {
    async: false,
  });

  return restore_placeholders(raw_html, math_stored, fence_stored, inline_stored, dompurify);
};

export {
  escape_html,
  renderNoteMarkdownToHtml,
};
