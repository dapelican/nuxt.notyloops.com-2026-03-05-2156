'use strict';

import {
  canonicalizeUploadMimeType,
} from '#shared/utils/canonicalize-upload-mime-type.js';

const detectAllowedUploadMime = (buffer) => {
  if (!buffer || buffer.length < 3) {
    return null;
  }

  const b0 = buffer[0];
  const b1 = buffer[1];
  const b2 = buffer[2];

  if (b0 === 0xFF && b1 === 0xD8 && b2 === 0xFF) {
    return 'image/jpeg';
  }

  if (
    buffer.length >= 8
    && b0 === 0x89
    && b1 === 0x50
    && b2 === 0x4E
    && buffer[3] === 0x47
    && buffer[4] === 0x0D
    && buffer[5] === 0x0A
    && buffer[6] === 0x1A
    && buffer[7] === 0x0A
  ) {
    return 'image/png';
  }

  if (
    buffer.length >= 12
    && b0 === 0x52
    && b1 === 0x49
    && b2 === 0x46
    && buffer[3] === 0x46
    && buffer[8] === 0x57
    && buffer[9] === 0x45
    && buffer[10] === 0x42
    && buffer[11] === 0x50
  ) {
    return 'image/webp';
  }

  if (b0 === 0x49 && b1 === 0x44 && b2 === 0x33) {
    return 'audio/mpeg';
  }

  if (b0 === 0xFF && (b1 & 0xE0) === 0xE0) {
    return 'audio/mpeg';
  }

  return null;
};

const resolveUploadMime = (declared_type, buffer) => {
  const declared = canonicalizeUploadMimeType(declared_type);
  const detected = detectAllowedUploadMime(buffer);

  if (!declared || !detected || declared !== detected) {
    return null;
  }

  return declared;
};

export {
  detectAllowedUploadMime,
  resolveUploadMime,
};
