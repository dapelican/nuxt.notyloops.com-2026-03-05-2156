'use strict';

import {
  describe,
  expect,
  it,
  vi,
} from 'vitest';

import {
  getCachedDownloadUrl,
} from '../../services/backblaze/get-authorization-data.js';

import {
  isApplicationBucketFileUrl,
} from '../../helpers/is-application-bucket-file-url.js';

vi.mock('../../services/backblaze/get-authorization-data.js', () => ({
  getCachedDownloadUrl: vi.fn(() => null),
}));

const VALID_URL = 'https://f000.backblazeb2.com/file/test-bucket/2026-01-01-00-00-00-aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa';

describe('isApplicationBucketFileUrl', () => {
  it('allows null and empty values', () => {
    expect(isApplicationBucketFileUrl(null)).toBe(true);
    expect(isApplicationBucketFileUrl('')).toBe(true);
    expect(isApplicationBucketFileUrl('   ')).toBe(true);
  });

  it('allows https URLs from the application B2 bucket', () => {
    expect(isApplicationBucketFileUrl(VALID_URL)).toBe(true);
  });

  it('rejects http, other hosts, and paths outside the bucket prefix', () => {
    expect(isApplicationBucketFileUrl(VALID_URL.replace('https://', 'http://'))).toBe(false);
    expect(isApplicationBucketFileUrl('https://evil.example/file/test-bucket/x')).toBe(false);
    expect(isApplicationBucketFileUrl('https://f000.backblazeb2.com/file/other-bucket/x')).toBe(false);
    expect(isApplicationBucketFileUrl('https://f000.backblazeb2.com/file/test-bucket')).toBe(false);
    expect(isApplicationBucketFileUrl('https://f000.backblazeb2.com/file/test-bucket/../secret')).toBe(false);
    expect(isApplicationBucketFileUrl('not-a-url')).toBe(false);
    expect(isApplicationBucketFileUrl(1)).toBe(false);
  });

  it('allows a cached custom B2 download host', () => {
    vi.mocked(getCachedDownloadUrl).mockReturnValueOnce('https://cdn.example.com');

    expect(
      isApplicationBucketFileUrl('https://cdn.example.com/file/test-bucket/abc')
    ).toBe(true);
  });
});
