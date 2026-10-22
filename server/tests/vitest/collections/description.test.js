import {
  HTTP_CODE_200_OK,
  HTTP_CODE_201_CREATED,
  HTTP_CODE_400_BAD_REQUEST,
} from '../../../helpers/http-status-codes.js';

import {
  afterAll,
  describe,
  expect,
  it,
} from 'vitest';

import { createTestHandler } from '../create-test-handler.js';

import create_handler from '../../../routes/collections/create.post.js';

import duplicate_handler from '../../../routes/collections/duplicate.post.js';

import {
  executeSQLQuery,
} from '../../../database/query.js';

import public_handler from '../../../routes/public-collection/[collection_id]/index.get.js';

import update_handler from '../../../routes/collections/update.patch.js';

const SESSION_TOKEN_ID = 'b0000000-0000-4000-8000-000000000002';
const USER_ID = '50000000-0000-4000-8000-000000000005';
const LEGACY_COLLECTION_ID = '40000000-0000-4000-8000-0000000000aa';

const create_request = createTestHandler('post', '/collections/create', create_handler);
const update_request = createTestHandler('patch', '/collections/update', update_handler);
const duplicate_request = createTestHandler('post', '/collections/duplicate', duplicate_handler);
const public_request = createTestHandler('get', '/public-collection/:collection_id', public_handler);

const as_user = () => {
  getUserSession.mockResolvedValueOnce({
    session_token_id: SESSION_TOKEN_ID,
  });
};

const post_json = (request, url, body) => request(new Request(url, {
  method: url.endsWith('/update') ? 'PATCH' : 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
}));

const collection_body = (description, title) => ({
  description,
  exclusion_type: 'OR',
  inclusion_type: 'AND',
  price_list: [],
  review_strategy: 'random',
  tag_id_list_to_exclude: [],
  tag_id_list_to_include: [],
  title,
  track_scores: true,
  type: 'public_free',
});

const created_id_list = [];

afterAll(async () => {
  await executeSQLQuery(
    'DELETE FROM collections WHERE user_id = $1 OR id = $2',
    [USER_ID, LEGACY_COLLECTION_ID]
  );
});

describe('collection descriptions', () => {
  it('stores authored markdown unchanged and strips dangerous HTML from description_html', async () => {
    as_user();

    const authored = '  **bold** [site](https://example.com) <script>alert(1)</script>';
    const response = await post_json(
      create_request,
      'http://localhost/collections/create',
      collection_body(authored, 'vitest description markdown')
    );

    expect(response.status).toBe(HTTP_CODE_201_CREATED);

    const data = await response.json();

    created_id_list.push(data.id);
    expect(data.description_markdown).toBe(authored);
    expect(data.description_html).toContain('<strong>bold</strong>');
    expect(data.description_html).toContain('https://example.com');
    expect(data.description_html.toLowerCase()).not.toContain('<script');
    expect(data.description_html).not.toContain('alert(1)');
  });

  it('stores null for a blank description', async () => {
    as_user();

    const response = await post_json(
      create_request,
      'http://localhost/collections/create',
      collection_body('   ', 'vitest description blank')
    );

    expect(response.status).toBe(HTTP_CODE_201_CREATED);

    const data = await response.json();

    created_id_list.push(data.id);
    expect(data.description_markdown).toBeNull();
    expect(data.description_html).toBeNull();
  });

  it('updates both description columns', async () => {
    as_user();

    const created = await post_json(
      create_request,
      'http://localhost/collections/create',
      collection_body('first', 'vitest description update')
    );
    const created_data = await created.json();

    created_id_list.push(created_data.id);

    as_user();

    const authored = '<p>Hello</p><script>alert(1)</script>';
    const response = await post_json(
      update_request,
      'http://localhost/collections/update',
      {
        ...collection_body(authored, 'vitest description update'),
        id: created_data.id,
      }
    );

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const data = await response.json();

    expect(data.description_markdown).toBe(authored);
    expect(data.description_html).toContain('<p>Hello</p>');
    expect(data.description_html.toLowerCase()).not.toContain('<script');
    expect(data.description_html).not.toContain('alert(1)');
  });

  it('copies both description columns when duplicating', async () => {
    as_user();

    const authored = '**keep** me';
    const created = await post_json(
      create_request,
      'http://localhost/collections/create',
      collection_body(authored, 'vitest description duplicate')
    );
    const created_data = await created.json();

    created_id_list.push(created_data.id);

    as_user();

    const response = await post_json(
      duplicate_request,
      'http://localhost/collections/duplicate',
      {
        collection_id: created_data.id,
        language: 'en',
      }
    );

    expect(response.status).toBe(HTTP_CODE_201_CREATED);

    const data = await response.json();

    created_id_list.push(data.id);

    const {
      rows,
    } = await executeSQLQuery(
      `SELECT description_html, description_markdown
      FROM collections WHERE id = $1`,
      [data.id]
    );

    expect(rows.at(0).description_markdown).toBe(created_data.description_markdown);
    expect(rows.at(0).description_html).toBe(created_data.description_html);
  });

  it('returns a legacy description_html row unchanged', async () => {
    const legacy_html = '<p onclick="alert(1)">Legacy</p>';

    await executeSQLQuery(
      `INSERT INTO collections (
        id,
        user_id,
        type,
        title,
        description_html,
        description_markdown
      ) VALUES ($1, $2, 'public_free', 'vitest legacy description', $3, NULL)`,
      [LEGACY_COLLECTION_ID, USER_ID, legacy_html]
    );

    const response = await public_request(
      new Request(`http://localhost/public-collection/${LEGACY_COLLECTION_ID}`)
    );

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const data = await response.json();

    expect(data.collection.description_markdown).toBeNull();
    expect(data.collection.description_html).toBe(legacy_html);
  });
});

const paywalled_body = (title, price_list) => ({
  ...collection_body('', title),
  price_list,
  type: 'public_paywalled',
});

const selectPriceList = async (collection_id) => {
  const { rows } = await executeSQLQuery(
    `SELECT currency, amount, text FROM collection_prices
    WHERE collection_id = $1 ORDER BY currency`,
    [collection_id]
  );

  return rows;
};

const PRICE_LIST = [
  { amount: 7, currency: 'EUR' },
  { amount: 8, currency: 'USD' },
];

const STORED_PRICE_LIST = [
  { amount: 7, currency: 'EUR', text: '7 €' },
  { amount: 8, currency: 'USD', text: '$8' },
];

describe('collection prices', () => {
  it('stores EUR and USD prices with generated text for a paywalled collection', async () => {
    as_user();

    const response = await post_json(
      create_request,
      'http://localhost/collections/create',
      paywalled_body('vitest prices create', PRICE_LIST)
    );

    expect(response.status).toBe(HTTP_CODE_201_CREATED);

    const data = await response.json();

    expect(data).not.toHaveProperty('pre_tax_price_in_cents');
    expect(data.price_list).toEqual(STORED_PRICE_LIST);
    expect(await selectPriceList(data.id)).toEqual(STORED_PRICE_LIST);
  });

  it('rejects a paywalled collection without both positive integer prices', async () => {
    for (const price_list of [
      undefined,
      [{ amount: 7, currency: 'EUR' }],
      [{ amount: 7, currency: 'EUR' }, { amount: 0, currency: 'USD' }],
      [{ amount: 7, currency: 'EUR' }, { amount: 8.5, currency: 'USD' }],
      [{ amount: 7, currency: 'EUR' }, { amount: 8, currency: 'EUR' }],
    ]) {
      as_user();

      const response = await post_json(
        create_request,
        'http://localhost/collections/create',
        paywalled_body('vitest prices invalid', price_list)
      );

      expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);
      expect(await response.json()).toEqual({
        error_message: 'error_invalid_collection_price_list',
      });
    }
  });

  it('ignores prices for a collection that is not paywalled', async () => {
    as_user();

    const response = await post_json(
      create_request,
      'http://localhost/collections/create',
      {
        ...collection_body('', 'vitest prices free'),
        price_list: PRICE_LIST,
      }
    );

    expect(response.status).toBe(HTTP_CODE_201_CREATED);

    const data = await response.json();

    expect(await selectPriceList(data.id)).toEqual([]);
  });

  it('replaces prices on update and deletes them when the collection is no longer paywalled', async () => {
    as_user();

    const created = await post_json(
      create_request,
      'http://localhost/collections/create',
      paywalled_body('vitest prices update', PRICE_LIST)
    );
    const created_data = await created.json();

    as_user();

    const updated = await post_json(
      update_request,
      'http://localhost/collections/update',
      {
        ...paywalled_body('vitest prices update', [
          { amount: 9, currency: 'USD' },
          { amount: 10, currency: 'EUR' },
        ]),
        id: created_data.id,
      }
    );

    expect(updated.status).toBe(HTTP_CODE_200_OK);
    expect(await selectPriceList(created_data.id)).toEqual([
      { amount: 10, currency: 'EUR', text: '10 €' },
      { amount: 9, currency: 'USD', text: '$9' },
    ]);

    as_user();

    const made_free = await post_json(
      update_request,
      'http://localhost/collections/update',
      {
        ...collection_body('', 'vitest prices update'),
        id: created_data.id,
      }
    );

    expect(made_free.status).toBe(HTTP_CODE_200_OK);
    expect((await made_free.json()).price_list).toEqual([]);
    expect(await selectPriceList(created_data.id)).toEqual([]);
  });

  it('copies prices when duplicating', async () => {
    as_user();

    const created = await post_json(
      create_request,
      'http://localhost/collections/create',
      paywalled_body('vitest prices duplicate', PRICE_LIST)
    );
    const created_data = await created.json();

    as_user();

    const response = await post_json(
      duplicate_request,
      'http://localhost/collections/duplicate',
      {
        collection_id: created_data.id,
        language: 'en',
      }
    );

    expect(response.status).toBe(HTTP_CODE_201_CREATED);

    const data = await response.json();

    expect(await selectPriceList(data.id)).toEqual(STORED_PRICE_LIST);
  });
});
