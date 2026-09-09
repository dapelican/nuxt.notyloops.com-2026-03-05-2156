'use strict';

import {
  describe,
  expect,
  it,
} from 'vitest';

import {
  detectAllowedUploadMime,
  resolveUploadMime,
} from '../../helpers/detect-allowed-upload-mime.js';

const PNG_HEADER = Buffer.from([
  0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A,
]);

const JPEG_HEADER = Buffer.from([0xFF, 0xD8, 0xFF, 0xE0]);

const WEBP_HEADER = Buffer.from('RIFF....WEBP', 'ascii');

const MP3_ID3_HEADER = Buffer.from('ID3....', 'ascii');

const MP3_FRAME_SYNC = Buffer.from([0xFF, 0xFB, 0x90, 0x00]);

describe('detectAllowedUploadMime', () => {
  it('detects jpeg, png, webp, and mp3 headers', () => {
    expect(detectAllowedUploadMime(JPEG_HEADER)).toBe('image/jpeg');
    expect(detectAllowedUploadMime(PNG_HEADER)).toBe('image/png');
    expect(detectAllowedUploadMime(WEBP_HEADER)).toBe('image/webp');
    expect(detectAllowedUploadMime(MP3_ID3_HEADER)).toBe('audio/mpeg');
    expect(detectAllowedUploadMime(MP3_FRAME_SYNC)).toBe('audio/mpeg');
  });

  it('rejects html, svg, and empty buffers', () => {
    expect(detectAllowedUploadMime(Buffer.from('<!DOCTYPE html>'))).toBeNull();
    expect(detectAllowedUploadMime(Buffer.from('<svg xmlns="http://www.w3.org/2000/svg"></svg>'))).toBeNull();
    expect(detectAllowedUploadMime(Buffer.alloc(0))).toBeNull();
    expect(detectAllowedUploadMime(null)).toBeNull();
  });
});

describe('resolveUploadMime', () => {
  it('requires declared type and magic bytes to match', () => {
    expect(resolveUploadMime('image/png', PNG_HEADER)).toBe('image/png');
    expect(resolveUploadMime('image/jpg', JPEG_HEADER)).toBe('image/jpeg');
    expect(resolveUploadMime('audio/mp3', MP3_ID3_HEADER)).toBe('audio/mpeg');
    expect(resolveUploadMime('image/jpeg', PNG_HEADER)).toBeNull();
    expect(resolveUploadMime('image/svg+xml', PNG_HEADER)).toBeNull();
    expect(resolveUploadMime('text/html', Buffer.from('<html></html>'))).toBeNull();
  });
});
