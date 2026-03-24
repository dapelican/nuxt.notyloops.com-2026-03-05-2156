'use strict';

import {
  defineConfig,
} from 'vitest/config';

import {
  fileURLToPath,
} from 'node:url';

const shared_root = fileURLToPath(new URL('./shared', import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      '#shared': shared_root,
    },
  },
  test: {
    coverage: {
      provider: 'v8',
      include: ['server/routes/**'],
    },
    include: ['server/tests/vitest/**/*.test.js'],
    setupFiles: ['server/tests/vitest/setup.js'],
  },
});
