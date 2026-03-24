'use strict';

import {
  describe,
  expect,
  it,
} from 'vitest';

import {
  JSDOM,
} from 'jsdom';

import createDomPurify from 'dompurify';

import {
  renderNoteMarkdownToHtml,
} from '#shared/render-note-markdown.js';

const make_dompurify = () => createDomPurify(new JSDOM('').window);

describe('renderNoteMarkdownToHtml', () => {
  it('returns empty string for blank markdown', () => {
    expect(renderNoteMarkdownToHtml('', make_dompurify())).toBe('');
    expect(renderNoteMarkdownToHtml('   ', make_dompurify())).toBe('');
    expect(renderNoteMarkdownToHtml(null, make_dompurify())).toBe('');
  });

  it('renders inline math with $$...$$', () => {
    const html = renderNoteMarkdownToHtml('a $$x^2$$ b', make_dompurify());
    expect(html).toContain('class="katex"');
    expect(html).toContain('x');
    expect(html).not.toContain('$$');
  });

  it('renders display math with $$$...$$$ before resolving $$...$$', () => {
    const html = renderNoteMarkdownToHtml('$$$\\alpha$$$ then $$\\beta$$', make_dompurify());
    expect(html).toContain('katex-display');
    expect(html).toContain('katex');
    expect(html).toContain('β');
  });

  it('does not treat single $ as math', () => {
    const html = renderNoteMarkdownToHtml('price $5 and $10', make_dompurify());
    expect(html).toContain('$5');
    expect(html).not.toContain('katex');
  });

  it('does not parse math inside fenced code blocks', () => {
    const html = renderNoteMarkdownToHtml(
      '```\n$$x$$\n```',
      make_dompurify()
    );
    expect(html).toContain('<pre><code>');
    expect(html).toContain('$$');
    expect(html).not.toContain('katex');
  });

  it('survives invalid LaTeX via KaTeX non-throwing mode', () => {
    const html = renderNoteMarkdownToHtml('$$\\\\boom{\\broken$$', make_dompurify());
    expect(html.length).toBeGreaterThan(0);
    expect(html).toContain('katex');
  });
});
