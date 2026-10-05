'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_201_CREATED,
} from '../../../helpers/http-status-codes.js';

import {
  afterAll,
  describe,
  expect,
  it,
} from 'vitest';

import { createTestHandler } from '../create-test-handler.js';

import create_handler from '../../../routes/notes/create.post.js';

import {
  executeSQLQuery,
} from '../../../database/query.js';

import get_handler from '../../../routes/notes/[note_id].get.js';

import search_handler from '../../../routes/notes/search.post.js';

import update_handler from '../../../routes/notes/update.patch.js';

const SESSION_TOKEN_ID = 'f0000000-0000-4000-8000-000000000006';
const USER_ID = '50000000-0000-4000-8000-000000000016';
const OWN_TAG_ID = '20000000-0000-4000-8000-0000000000c1';
const SECOND_TAG_ID = '20000000-0000-4000-8000-0000000000c2';
const VICTIM_TAG_ID = '20000000-0000-4000-8000-000000000001';
const VICTIM_TAG_LABEL = 'Afrique';
const NOTE_TITLE = 'vitest note tag ownership';

const create_request = createTestHandler('post', '/notes/create', create_handler);
const get_request = createTestHandler('get', '/notes/:note_id', get_handler);
const search_request = createTestHandler('post', '/notes/search', search_handler);
const update_request = createTestHandler('patch', '/notes/update', update_handler);

const as_session = () => {
  getUserSession.mockResolvedValueOnce({
    session_token_id: SESSION_TOKEN_ID,
  });
};

const post_json = (request, url, body) => {
  as_session();

  return request(new Request(url, {
    method: url.endsWith('/update') ? 'PATCH' : 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }));
};

const note_body = (tag_id_list) => ({
  format: 'flashcard',
  note_details: [],
  swappable_sides: false,
  tag_id_list,
  title: NOTE_TITLE,
});

afterAll(async () => {
  await executeSQLQuery(
    'DELETE FROM notes WHERE user_id = $1 AND title = $2',
    [USER_ID, NOTE_TITLE]
  );
  await executeSQLQuery(
    'DELETE FROM tags WHERE id = ANY($1::uuid[])',
    [[OWN_TAG_ID, SECOND_TAG_ID]]
  );
});

describe('note tag ownership', () => {
  it('does not attach or return another user tag label', async () => {
    await executeSQLQuery(
      'DELETE FROM notes WHERE user_id = $1 AND title = $2',
      [USER_ID, NOTE_TITLE]
    );
    await executeSQLQuery(
      'DELETE FROM tags WHERE id = ANY($1::uuid[])',
      [[OWN_TAG_ID, SECOND_TAG_ID]]
    );
    await executeSQLQuery(
      `INSERT INTO tags (id, user_id, label, lowercase_label)
       VALUES ($1, $2, 'Own tag', 'own tag'), ($3, $2, 'Second tag', 'second tag')`,
      [OWN_TAG_ID, USER_ID, SECOND_TAG_ID]
    );

    const create_response = await post_json(
      create_request,
      'http://localhost/notes/create',
      note_body([OWN_TAG_ID, VICTIM_TAG_ID])
    );

    expect(create_response.status).toBe(HTTP_CODE_201_CREATED);

    const {
      rows: note_rows,
    } = await executeSQLQuery(
      'SELECT id FROM notes WHERE user_id = $1 AND title = $2',
      [USER_ID, NOTE_TITLE]
    );
    const note_id = note_rows.at(0).id;

    const {
      rows: linked_rows,
    } = await executeSQLQuery(
      'SELECT tag_id FROM note_tags WHERE note_id = $1',
      [note_id]
    );

    expect(linked_rows.map((row) => row.tag_id)).toEqual([OWN_TAG_ID]);

    as_session();

    const get_response = await get_request(
      new Request(`http://localhost/notes/${note_id}`)
    );

    expect(get_response.status).toBe(HTTP_CODE_200_OK);

    const get_data = await get_response.json();

    expect(get_data.tag_list).toEqual([
      { id: OWN_TAG_ID, label: 'Own tag' },
    ]);
    expect(JSON.stringify(get_data)).not.toContain(VICTIM_TAG_LABEL);

    await executeSQLQuery(
      'INSERT INTO note_tags (user_id, note_id, tag_id) VALUES ($1, $2, $3)',
      [USER_ID, note_id, VICTIM_TAG_ID]
    );

    as_session();

    const leaked_get_response = await get_request(
      new Request(`http://localhost/notes/${note_id}`)
    );
    const leaked_get_data = await leaked_get_response.json();

    expect(leaked_get_data.tag_list).toEqual([
      { id: OWN_TAG_ID, label: 'Own tag' },
    ]);
    expect(JSON.stringify(leaked_get_data)).not.toContain(VICTIM_TAG_LABEL);

    const search_response = await post_json(
      search_request,
      'http://localhost/notes/search',
      {
        exclusion_type: 'AND',
        inclusion_type: 'AND',
        limit: 10,
        offset: 0,
        search_term: NOTE_TITLE,
        sort_by: 'created_at',
        sort_order: 'desc',
        tag_id_list_to_exclude: [],
        tag_id_list_to_include: [],
      }
    );

    expect(search_response.status).toBe(HTTP_CODE_200_OK);

    const search_data = await search_response.json();
    const searched_note = search_data.current_page_note_list.find((note) => note.id === note_id);

    expect(searched_note.tag_list).toEqual([
      { id: OWN_TAG_ID, label: 'Own tag' },
    ]);
    expect(JSON.stringify(search_data)).not.toContain(VICTIM_TAG_LABEL);

    const update_response = await post_json(
      update_request,
      'http://localhost/notes/update',
      {
        ...note_body([OWN_TAG_ID, SECOND_TAG_ID, VICTIM_TAG_ID]),
        note_id,
      }
    );

    expect(update_response.status).toBe(HTTP_CODE_200_OK);

    const {
      rows: updated_rows,
    } = await executeSQLQuery(
      'SELECT tag_id FROM note_tags WHERE note_id = $1 ORDER BY tag_id',
      [note_id]
    );

    expect(updated_rows.map((row) => row.tag_id)).toEqual([
      VICTIM_TAG_ID,
      OWN_TAG_ID,
      SECOND_TAG_ID,
    ].sort());

    as_session();

    const final_get_response = await get_request(
      new Request(`http://localhost/notes/${note_id}`)
    );
    const final_get_data = await final_get_response.json();
    const returned_tag_id_list = final_get_data.tag_list.map((tag) => tag.id).sort();

    expect(returned_tag_id_list).toEqual([OWN_TAG_ID, SECOND_TAG_ID].sort());
    expect(JSON.stringify(final_get_data)).not.toContain(VICTIM_TAG_LABEL);
  });
});
