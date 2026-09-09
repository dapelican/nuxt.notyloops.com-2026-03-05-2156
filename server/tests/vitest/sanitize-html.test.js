'use strict';

import {
  describe,
  expect,
  it,
} from 'vitest';

import {
  sanitizeStoredHtml,
} from '../../helpers/sanitize-html.js';

describe('sanitizeStoredHtml', () => {
  it('returns null for nullish input', () => {
    expect(sanitizeStoredHtml(null)).toBeNull();
    expect(sanitizeStoredHtml(undefined)).toBeNull();
  });

  it('keeps safe HTML', () => {
    expect(sanitizeStoredHtml('<p>Quiz on flags</p>')).toBe('<p>Quiz on flags</p>');
  });

  it('strips script tags', () => {
    const html = sanitizeStoredHtml(
      '<p>Hello</p><script>alert(1)</script><p>World</p>'
    );

    expect(html).toContain('<p>Hello</p>');
    expect(html).toContain('<p>World</p>');
    expect(html).not.toContain('<script>');
    expect(html).not.toContain('alert(1)');
  });

  it('strips onerror attributes', () => {
    const html = sanitizeStoredHtml(
      '<img src="x" onerror="alert(1)"><p onclick="alert(2)">ok</p>'
    );

    expect(html.toLowerCase()).not.toContain('onerror');
    expect(html.toLowerCase()).not.toContain('onclick');
    expect(html).not.toContain('alert(1)');
    expect(html).not.toContain('alert(2)');
  });
});
