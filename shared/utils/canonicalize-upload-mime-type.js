'use strict';

import {
  ALLOWED_UPLOAD_MIME_TYPE_ALIAS,
  ALLOWED_UPLOAD_MIME_TYPE_LIST,
} from '#shared/utils/constants.js';

const canonicalizeUploadMimeType = (mime_type) => {
  if (!mime_type || typeof mime_type !== 'string') {
    return null;
  }

  const normalized = mime_type.toLowerCase().trim();
  const canonical = ALLOWED_UPLOAD_MIME_TYPE_ALIAS[normalized] ?? normalized;

  if (!ALLOWED_UPLOAD_MIME_TYPE_LIST.includes(canonical)) {
    return null;
  }

  return canonical;
};

export {
  canonicalizeUploadMimeType,
};
