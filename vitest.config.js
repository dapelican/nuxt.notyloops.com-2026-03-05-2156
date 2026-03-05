'use strict';

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      include: ['server/routes/**'],
    },
    include: ['server/tests/vitest/**/*.test.js'],
    setupFiles: ['server/tests/vitest/setup.js'],
  },
});
