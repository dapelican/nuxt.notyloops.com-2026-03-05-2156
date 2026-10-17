'use strict';

import {
  describe,
  expect,
  it,
} from 'vitest';

import {
  createTestHandler,
} from '../create-test-handler.js';

import {
  defineEventHandler,
} from 'h3';

import {
  getSubdomain,
} from '../../../helpers/get-subdomain.js';

const handler = defineEventHandler((event) => ({
  subdomain: getSubdomain(event),
}));

const request = createTestHandler('get', '/subdomain', handler);

const readSubdomain = async (host) => {
  const response = await request(new Request(`http://${host}/subdomain`));

  const data = await response.json();

  return data.subdomain;
};

describe('getSubdomain', () => {
  it('returns only www or fr', async () => {
    expect(await readSubdomain('fr.example.com')).toBe('fr');
    expect(await readSubdomain('www.example.com')).toBe('www');
    expect(await readSubdomain('FR.example.com')).toBe('fr');
    expect(await readSubdomain('evil.example.com')).toBe('www');
  });
});
