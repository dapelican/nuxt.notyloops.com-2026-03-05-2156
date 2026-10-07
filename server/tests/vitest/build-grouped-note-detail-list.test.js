'use strict';

import { describe, expect, it } from 'vitest';

import {
  assignContentPosition,
} from '../../helpers/build-grouped-note-detail-list.js';

describe('assignContentPosition', () => {
  it('keeps a multi-block side as an array of details', () => {
    const group = [
      { content_position: 2, content_type: 'text', markdown_content: 'Hello' },
      { content_position: 2, content_type: 'audio', file_url: 'https://example.com/a.mp3' },
    ];

    const result = assignContentPosition(group, 1);

    expect(Array.isArray(result)).toBe(true);
    expect(result).toEqual([
      { content_position: 1, content_type: 'text', markdown_content: 'Hello' },
      { content_position: 1, content_type: 'audio', file_url: 'https://example.com/a.mp3' },
    ]);
  });

  it('updates a single-block side', () => {
    const result = assignContentPosition({ content_position: 1, content_type: 'text' }, 2);

    expect(result).toEqual({ content_position: 2, content_type: 'text' });
  });
});
