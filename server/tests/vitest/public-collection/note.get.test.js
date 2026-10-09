'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../../helpers/http-status-codes.js';

import { describe, expect, it } from 'vitest';

import { createTestHandler } from '../create-test-handler.js';

import handler from '../../../routes/public-collection/[collection_id]/note/[note_id].get.js';

const PAYWALLED_NULL_PREVIEW_COLLECTION_ID = '40000000-0000-4000-8000-000000000004';
const PAYWALLED_WITH_PREVIEW_COLLECTION_ID = '40000000-0000-4000-8000-000000000007';
const PUBLIC_FREE_COLLECTION_ID = '40000000-0000-4000-8000-000000000001';
const PUBLIC_WITHOUT_ACCOUNT_COLLECTION_ID = '40000000-0000-4000-8000-00000000000a';
const PUBLIC_PREMIUM_COLLECTION_ID = '40000000-0000-4000-8000-00000000000b';
const OWNER_PUBLIC_PREMIUM_COLLECTION_ID = '40000000-0000-4000-8000-000000000013';
const PREVIEW_NOTE_ID = '30000000-0000-4000-8000-00000000005a';
const NON_PREVIEW_NOTE_ID = '30000000-0000-4000-8000-00000000005b';
const PUBLIC_FREE_NOTE_ID = '30000000-0000-4000-8000-000000000001';
const PUBLIC_WITHOUT_ACCOUNT_NOTE_ID = '30000000-0000-4000-8000-0000000000d1';
const PUBLIC_PREMIUM_NOTE_ID = '30000000-0000-4000-8000-0000000000d2';
const OWNER_PUBLIC_PREMIUM_NOTE_ID = '30000000-0000-4000-8000-0000000000d5';
const BUYER_SESSION_TOKEN_ID = 'e0000000-0000-4000-8000-000000000005';
const NON_BUYER_SESSION_TOKEN_ID = 'b0000000-0000-4000-8000-000000000002';
const FREE_USER_SESSION_TOKEN_ID = 'c1000000-0000-4000-8000-000000000003';

const request = createTestHandler(
  'get',
  '/public-collection/:collection_id/note/:note_id',
  handler
);

const get = (collection_id, note_id) => request(
  new Request(`http://localhost/public-collection/${collection_id}/note/${note_id}`)
);

describe('GET /public-collection/:collection_id/note/:note_id', () => {
  it('returns 401 when paywalled collection has a null preview list and there is no session', async () => {
    const response = await get(PAYWALLED_NULL_PREVIEW_COLLECTION_ID, PREVIEW_NOTE_ID);

    expect(response.status).toBe(HTTP_CODE_401_UNAUTHORIZED);

    const data = await response.json();

    expect(data.error_message).toBe('error_unauthorized');
    expect(data).not.toHaveProperty('note_detail_list');
  });

  it('returns 401 when paywalled collection has a null preview list and the session has no payment', async () => {
    getUserSession.mockResolvedValueOnce({
      session_token_id: NON_BUYER_SESSION_TOKEN_ID,
    });

    const response = await get(PAYWALLED_NULL_PREVIEW_COLLECTION_ID, PREVIEW_NOTE_ID);

    expect(response.status).toBe(HTTP_CODE_401_UNAUTHORIZED);

    const data = await response.json();

    expect(data.error_message).toBe('error_unauthorized');
    expect(data).not.toHaveProperty('note_detail_list');
  });

  it('returns 200 when paywalled collection has a null preview list and the session has a payment', async () => {
    getUserSession.mockResolvedValueOnce({
      session_token_id: BUYER_SESSION_TOKEN_ID,
    });

    const response = await get(PAYWALLED_NULL_PREVIEW_COLLECTION_ID, PREVIEW_NOTE_ID);

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const data = await response.json();

    expect(data).toHaveProperty('note_detail_list');
    expect(Array.isArray(data.note_detail_list)).toBe(true);
    expect(data.note_detail_list.length).toBeGreaterThan(0);
  });

  it('returns 200 for a preview note on a paywalled collection without a session', async () => {
    const response = await get(PAYWALLED_WITH_PREVIEW_COLLECTION_ID, PREVIEW_NOTE_ID);

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const data = await response.json();

    expect(data).toHaveProperty('note_detail_list');
    expect(Array.isArray(data.note_detail_list)).toBe(true);
    expect(data.note_detail_list.length).toBeGreaterThan(0);
  });

  it('returns 401 for a non-preview note on a paywalled collection without a session', async () => {
    const response = await get(PAYWALLED_WITH_PREVIEW_COLLECTION_ID, NON_PREVIEW_NOTE_ID);

    expect(response.status).toBe(HTTP_CODE_401_UNAUTHORIZED);

    const data = await response.json();

    expect(data.error_message).toBe('error_unauthorized');
    expect(data).not.toHaveProperty('note_detail_list');
  });

  it('returns 401 for a public_free note without a session', async () => {
    const response = await get(PUBLIC_FREE_COLLECTION_ID, PUBLIC_FREE_NOTE_ID);

    expect(response.status).toBe(HTTP_CODE_401_UNAUTHORIZED);

    const data = await response.json();

    expect(data.error_message).toBe('error_unauthorized');
    expect(data).not.toHaveProperty('note_detail_list');
  });

  it('returns 200 for a public_free note with a session', async () => {
    getUserSession.mockResolvedValueOnce({
      session_token_id: NON_BUYER_SESSION_TOKEN_ID,
    });

    const response = await get(PUBLIC_FREE_COLLECTION_ID, PUBLIC_FREE_NOTE_ID);

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const data = await response.json();

    expect(data).toHaveProperty('note_detail_list');
    expect(data.title).toBe('Afrique du Sud (Afrique)');
  });

  it('returns 200 for a public_without_account note without a session', async () => {
    const response = await get(PUBLIC_WITHOUT_ACCOUNT_COLLECTION_ID, PUBLIC_WITHOUT_ACCOUNT_NOTE_ID);

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const data = await response.json();

    expect(data).toHaveProperty('note_detail_list');
    expect(Array.isArray(data.note_detail_list)).toBe(true);
    expect(data.note_detail_list.length).toBeGreaterThan(0);
    expect(data.title).toBe('a — note 1');
  });

  it('returns 401 for a public_premium note when the user is not premium', async () => {
    getUserSession.mockResolvedValueOnce({
      session_token_id: FREE_USER_SESSION_TOKEN_ID,
    });

    const response = await get(PUBLIC_PREMIUM_COLLECTION_ID, PUBLIC_PREMIUM_NOTE_ID);

    expect(response.status).toBe(HTTP_CODE_401_UNAUTHORIZED);

    const data = await response.json();

    expect(data.error_message).toBe('error_unauthorized');
    expect(data).not.toHaveProperty('note_detail_list');
  });

  it('returns 200 for the owner of a public_premium note without premium status', async () => {
    getUserSession.mockResolvedValueOnce({
      session_token_id: FREE_USER_SESSION_TOKEN_ID,
    });

    const response = await get(OWNER_PUBLIC_PREMIUM_COLLECTION_ID, OWNER_PUBLIC_PREMIUM_NOTE_ID);

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const data = await response.json();

    expect(data.title).toBe('c — note 1');
    expect(data.note_detail_list.length).toBeGreaterThan(0);
  });
});
