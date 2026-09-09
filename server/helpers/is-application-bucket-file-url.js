'use strict';

import {
  getCachedDownloadUrl,
} from '../services/backblaze/get-authorization-data.js';

const isAllowedBackblazeHostname = (hostname) => {
  const host = hostname.toLowerCase();

  const cached_download_url = getCachedDownloadUrl();

  if (cached_download_url) {
    try {
      const allowed_host = new URL(cached_download_url).hostname.toLowerCase();

      if (host === allowed_host) {
        return true;
      }
    } catch {
      // Fall through to the public B2 suffix check.
    }
  }

  return host === 'backblazeb2.com' || host.endsWith('.backblazeb2.com');
};

const isApplicationBucketFileUrl = (file_url) => {
  if (file_url == null) {
    return true;
  }

  if (typeof file_url !== 'string') {
    return false;
  }

  const trimmed = file_url.trim();

  if (trimmed === '') {
    return true;
  }

  const {
    B2_BUCKET_NAME,
  } = useRuntimeConfig();

  if (!B2_BUCKET_NAME) {
    return false;
  }

  let parsed;

  try {
    parsed = new URL(trimmed);
  } catch {
    return false;
  }

  if (parsed.protocol !== 'https:') {
    return false;
  }

  const expected_path_prefix = `/file/${B2_BUCKET_NAME}/`;

  if (
    !parsed.pathname.startsWith(expected_path_prefix)
    || parsed.pathname.length <= expected_path_prefix.length
  ) {
    return false;
  }

  return isAllowedBackblazeHostname(parsed.hostname);
};

export {
  isApplicationBucketFileUrl,
};
