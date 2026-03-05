'use strict';

import { createApp, createRouter, toWebHandler } from 'h3';

export function createTestHandler(method, path, handler) {
  const app = createApp();
  const router = createRouter();
  router[method](path, handler);
  app.use(router);
  return toWebHandler(app);
}
