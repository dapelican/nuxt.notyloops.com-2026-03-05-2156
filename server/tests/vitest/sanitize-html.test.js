'use strict';

import {
  sanitizeHtml,
  sanitizeStoredNoteHtml,
} from '../../helpers/sanitize-html.js';

import {
  describe,
  expect,
  it,
} from 'vitest';

describe('sanitizeStoredNoteHtml', () => {
  it('returns null for nullish input', () => {
    expect(sanitizeStoredNoteHtml(null)).toBeNull();
    expect(sanitizeStoredNoteHtml(undefined)).toBeNull();
  });

  it('keeps markdown HTML and drops script, MathML, and foreign SVG', () => {
    const html = sanitizeStoredNoteHtml(
      '<p>Hello</p><script>alert(1)</script>'
      + '<math><annotation-xml encoding="text/html"><img src="x" onerror="alert(2)"></annotation-xml></math>'
      + '<svg><foreignObject><iframe src="javascript:alert(3)"></iframe></foreignObject></svg>'
      + '<p style="background-image:url(https://evil.test/x);color:blue">styled</p>'
    );

    expect(html).toContain('<p>Hello</p>');
    expect(html).toContain('styled');
    expect(html).toContain('color:blue');
    expect(html.toLowerCase()).not.toContain('script');
    expect(html.toLowerCase()).not.toContain('annotation-xml');
    expect(html.toLowerCase()).not.toContain('foreignobject');
    expect(html.toLowerCase()).not.toContain('iframe');
    expect(html.toLowerCase()).not.toContain('onerror');
    expect(html.toLowerCase()).not.toContain('url(');
    expect(html).not.toContain('alert(1)');
    expect(html).not.toContain('alert(2)');
    expect(html).not.toContain('alert(3)');
  });
});

describe('sanitizeHtml', () => {
  it('renders markdown and strips raw HTML that is not part of the note policy', () => {
    const html = sanitizeHtml('Hello **world**\n\n<script>alert(1)</script>\n\n<math><mi>x</mi></math>');

    expect(html).toContain('<strong>world</strong>');
    expect(html.toLowerCase()).not.toContain('<script');
    expect(html.toLowerCase()).not.toContain('<math');
    expect(html).not.toContain('alert(1)');
  });
});
