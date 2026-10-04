'use strict';

import {
  describe,
  expect,
  it,
} from 'vitest';

import {
  collectionDescriptionColumns,
} from '../../helpers/collection-description-columns.js';

describe('collectionDescriptionColumns', () => {
  it('returns null columns for blank input', () => {
    expect(collectionDescriptionColumns(null)).toEqual({
      description_html: null,
      description_markdown: null,
    });
    expect(collectionDescriptionColumns(undefined)).toEqual({
      description_html: null,
      description_markdown: null,
    });
    expect(collectionDescriptionColumns('   ')).toEqual({
      description_html: null,
      description_markdown: null,
    });
  });

  it('keeps authored text unchanged and stores sanitized HTML', () => {
    const columns = collectionDescriptionColumns('  **bold** <script>alert(1)</script>');

    expect(columns.description_markdown).toBe('  **bold** <script>alert(1)</script>');
    expect(columns.description_html).toContain('<strong>bold</strong>');
    expect(columns.description_html.toLowerCase()).not.toContain('<script');
    expect(columns.description_html).not.toContain('alert(1)');
  });
});
