'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../../helpers/http-status-codes.js';

import {
  afterAll,
  describe,
  expect,
  it,
} from 'vitest';

import collection_handler from '../../../routes/collections/[collection_id].get.js';

import { createTestHandler } from '../create-test-handler.js';

import {
  executeSQLQuery,
} from '../../../database/query.js';

import public_handler from '../../../routes/public-collection/[collection_id]/index.get.js';

const OWNER_SESSION_TOKEN_ID = 'b0000000-0000-4000-8000-000000000002';
const OWNER_USER_ID = '50000000-0000-4000-8000-000000000005';
const OTHER_SESSION_TOKEN_ID = 'b1000000-0000-4000-8000-0000000000b1';
const OTHER_USER_ID = '50000000-0000-4000-8000-000000000008';
const PUBLIC_COLLECTION_ID = '40000000-0000-4000-8000-0000000000b1';
const PRIVATE_COLLECTION_ID = '40000000-0000-4000-8000-0000000000b2';
const SEEDED_PUBLIC_FREE_ID = '40000000-0000-4000-8000-000000000001';
const SEEDED_PAYWALLED_ID = '40000000-0000-4000-8000-000000000007';
const PREVIEW_NOTE_ID = '30000000-0000-4000-8000-00000000005a';
const TAG_ID = '20000000-0000-4000-8000-000000000001';

const HIDDEN_FIELD_LIST = [
  'exclusion_type',
  'inclusion_type',
  'preview_note_id_list',
  'review_strategy',
  'super_random_counter',
  'tag_id_list_to_exclude',
  'tag_id_list_to_include',
  'track_scores',
  'user_id',
];

const public_request = createTestHandler('get', '/public-collection/:collection_id', public_handler);
const collection_request = createTestHandler('get', '/collections/:collection_id', collection_handler);

const as_session = (session_token_id) => {
  getUserSession.mockResolvedValueOnce({
    session_token_id,
  });
};

afterAll(async () => {
  await executeSQLQuery(
    'DELETE FROM collections WHERE id = ANY($1::uuid[])',
    [[PUBLIC_COLLECTION_ID, PRIVATE_COLLECTION_ID]]
  );
  await executeSQLQuery(
    'DELETE FROM user_session_tokens WHERE id = $1',
    [OTHER_SESSION_TOKEN_ID]
  );
});

describe('public collection fields', () => {
  it('omits owner and tag fields from GET /public-collection/:collection_id', async () => {
    const response = await public_request(
      new Request(`http://localhost/public-collection/${SEEDED_PUBLIC_FREE_ID}`)
    );

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const data = await response.json();

    expect(Object.keys(data.collection).sort()).toEqual([
      'description_html',
      'description_markdown',
      'id',
      'pre_tax_price_in_cents',
      'title',
      'type',
    ]);
    expect(data.collection.id).toBe(SEEDED_PUBLIC_FREE_ID);
    expect(data.collection.type).toBe('public_free');

    for (const field_name of HIDDEN_FIELD_LIST) {
      expect(data.collection).not.toHaveProperty(field_name);
    }
  });

  it('marks preview notes without returning preview_note_id_list', async () => {
    const response = await public_request(
      new Request(`http://localhost/public-collection/${SEEDED_PAYWALLED_ID}`)
    );

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const data = await response.json();
    const preview_note = data.note_list.find((note) => note.id === PREVIEW_NOTE_ID);

    expect(data.collection).not.toHaveProperty('preview_note_id_list');
    expect(data.collection.pre_tax_price_in_cents).toBe(500);
    expect(preview_note.is_preview).toBe(true);
    expect(data.note_list.some((note) => note.id !== PREVIEW_NOTE_ID && note.is_preview === true)).toBe(false);
  });

  it('returns the full row from GET /collections/:collection_id only to the owner', async () => {
    await executeSQLQuery(
      `INSERT INTO collections (
        id,
        user_id,
        type,
        title,
        description_html,
        description_markdown,
        tag_id_list_to_include,
        tag_id_list_to_exclude,
        review_strategy,
        super_random_counter,
        preview_note_id_list,
        pre_tax_price_in_cents
      ) VALUES (
        $1, $2, 'public_free', 'vitest public fields',
        '<p>Public</p>', 'Public',
        $3::jsonb, '[]'::jsonb, 'random', 4, $4::jsonb, 1200
      ), (
        $5, $2, 'private', 'vitest private fields',
        NULL, NULL,
        '[]'::jsonb, '[]'::jsonb, 'random', 0, '[]'::jsonb, NULL
      )`,
      [
        PUBLIC_COLLECTION_ID,
        OWNER_USER_ID,
        JSON.stringify([TAG_ID]),
        JSON.stringify([PREVIEW_NOTE_ID]),
        PRIVATE_COLLECTION_ID,
      ]
    );

    as_session(OWNER_SESSION_TOKEN_ID);

    const owner_response = await collection_request(
      new Request(`http://localhost/collections/${PUBLIC_COLLECTION_ID}`)
    );

    expect(owner_response.status).toBe(HTTP_CODE_200_OK);

    const owner_data = await owner_response.json();

    expect(owner_data.user_id).toBe(OWNER_USER_ID);
    expect(owner_data.tag_id_list_to_include).toEqual([TAG_ID]);
    expect(owner_data.review_strategy).toBe('random');
    expect(owner_data.super_random_counter).toBe(4);
    expect(owner_data.preview_note_id_list).toEqual([PREVIEW_NOTE_ID]);

    await executeSQLQuery(
      `INSERT INTO user_session_tokens (id, user_id, token, expires_at, blacklisted)
      VALUES ($1, $2, 'public-fields-session-token', now() + interval '30 days', false)`,
      [OTHER_SESSION_TOKEN_ID, OTHER_USER_ID]
    );

    as_session(OTHER_SESSION_TOKEN_ID);

    const other_response = await collection_request(
      new Request(`http://localhost/collections/${PUBLIC_COLLECTION_ID}`)
    );

    expect(other_response.status).toBe(HTTP_CODE_200_OK);

    const other_data = await other_response.json();

    expect(Object.keys(other_data).sort()).toEqual([
      'description_html',
      'description_markdown',
      'id',
      'pre_tax_price_in_cents',
      'title',
      'type',
    ]);
    expect(other_data.pre_tax_price_in_cents).toBe(1200);

    for (const field_name of HIDDEN_FIELD_LIST) {
      expect(other_data).not.toHaveProperty(field_name);
    }

    as_session(OTHER_SESSION_TOKEN_ID);

    const private_response = await collection_request(
      new Request(`http://localhost/collections/${PRIVATE_COLLECTION_ID}`)
    );

    expect(private_response.status).toBe(HTTP_CODE_401_UNAUTHORIZED);

    const private_data = await private_response.json();

    expect(private_data.error_message).toBe('error_unauthorized');
    expect(private_data).not.toHaveProperty('user_id');
  });
});
