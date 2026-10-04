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

import katex from 'katex';

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

  it('keeps KaTeX HTML for a square root and drops MathML and script from the markdown', () => {
    const html = renderNoteMarkdownToHtml(
      '$$\\sqrt{x}$$\n\n<script>alert(1)</script>\n\n<math><annotation-xml encoding="text/html"><img src=x onerror=alert(2)></annotation-xml></math>',
      make_dompurify()
    );

    expect(html).toContain('class="katex"');
    expect(html).toContain('<svg');
    expect(html).toContain('<path');
    expect(html).toContain('style="');
    expect(html.toLowerCase()).not.toContain('<script');
    expect(html.toLowerCase()).not.toContain('annotation-xml');
    expect(html.toLowerCase()).not.toContain('<math');
    expect(html.toLowerCase()).not.toContain('onerror');
    expect(html).not.toContain('alert(1)');
    expect(html).not.toContain('alert(2)');
  });

  it('keeps every inline style and svg KaTeX emits for common formulas', () => {
    const formula_list = [
      '\\sqrt{x}+\\frac{1}{2}',
      '\\sum_{i=1}^{n} i',
      '\\overbrace{a+b}^{n}',
      '\\cancel{x}',
      '\\textcolor{blue}{x}',
      '\\colorbox{red}{x}',
      '\\begin{matrix} a & b \\\\ c & d \\end{matrix}',
      '\\pmb{x}',
      '\\left\\{\\frac{a}{b}\\right\\}',
      '\\xrightarrow{n\\to\\infty}',
    ];

    const dompurify = make_dompurify();

    for (const tex of formula_list) {
      const html = renderNoteMarkdownToHtml(`$$${tex}$$`, dompurify);
      const raw = katex.renderToString(tex, {
        displayMode: false,
        output: 'html',
        strict: 'ignore',
        throwOnError: false,
        trust: false,
      });
      const style_count = (value) => (value.match(/style="/g) || []).length;
      const svg_count = (value) => (value.match(/<svg/g) || []).length;

      expect(style_count(html), tex).toBe(style_count(raw));
      expect(svg_count(html), tex).toBe(svg_count(raw));
    }
  });

  it('drops CSS urls and properties KaTeX does not emit', () => {
    const html = renderNoteMarkdownToHtml(
      '<p style="color:red;background-image:url(https://evil.test/a);position:fixed">x</p>',
      make_dompurify()
    );

    expect(html).toContain('color:red');
    expect(html.toLowerCase()).not.toContain('url(');
    expect(html.toLowerCase()).not.toContain('position');
    expect(html.toLowerCase()).not.toContain('fixed');
  });
});
