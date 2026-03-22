'use strict';

import {
  executeSQLQuery,
} from '../database/query.js';

const parseUuidArray = (json_value) => {
  if (!json_value) {
    return [];
  }

  if (!Array.isArray(json_value)) {
    return [];
  }

  return json_value.filter(Boolean);
};

export const selectNoteIdListOnTagCriteria = async (user_id, collection_row) => {
  const tag_id_list_to_include = parseUuidArray(collection_row.tag_id_list_to_include);
  const tag_id_list_to_exclude = parseUuidArray(collection_row.tag_id_list_to_exclude);
  const inclusion_type = collection_row.inclusion_type === 'OR' ? 'OR' : 'AND';
  const exclusion_type = collection_row.exclusion_type === 'OR' ? 'OR' : 'AND';

  let inclusion_sql;
  const inclusion_params = [user_id];

  if (tag_id_list_to_include.length === 0) {
    inclusion_sql = `
      SELECT n.id
      FROM notes n
      WHERE n.user_id = $1 AND n.deleted_at IS NULL`;
  } else if (inclusion_type === 'AND') {
    inclusion_sql = `
      SELECT n.id
      FROM notes n
      WHERE n.user_id = $1 AND n.deleted_at IS NULL
      AND (
        SELECT COUNT(DISTINCT nt.tag_id)
        FROM note_tags nt
        WHERE nt.note_id = n.id
          AND nt.user_id = $1
          AND nt.tag_id = ANY($2::uuid[])
      ) = $3`;
    inclusion_params.push(tag_id_list_to_include, tag_id_list_to_include.length);
  } else {
    inclusion_sql = `
      SELECT DISTINCT n.id
      FROM notes n
      INNER JOIN note_tags nt ON nt.note_id = n.id AND nt.user_id = n.user_id
      WHERE n.user_id = $1 AND n.deleted_at IS NULL
        AND nt.tag_id = ANY($2::uuid[])`;
    inclusion_params.push(tag_id_list_to_include);
  }

  const { rows: inclusion_rows } = await executeSQLQuery(inclusion_sql, inclusion_params);
  let note_id_list = inclusion_rows.map((row) => row.id);

  if (note_id_list.length === 0 || tag_id_list_to_exclude.length === 0) {
    return note_id_list;
  }

  const exclude_sql = exclusion_type === 'OR'
    ? `
      SELECT x.id
      FROM unnest($1::uuid[]) AS x(id)
      WHERE NOT EXISTS (
        SELECT 1 FROM note_tags nt
        WHERE nt.note_id = x.id
          AND nt.user_id = $2
          AND nt.tag_id = ANY($3::uuid[])
      )`
    : `
      SELECT x.id
      FROM unnest($1::uuid[]) AS x(id)
      WHERE (
        SELECT COUNT(DISTINCT nt.tag_id)
        FROM note_tags nt
        WHERE nt.note_id = x.id
          AND nt.user_id = $2
          AND nt.tag_id = ANY($3::uuid[])
      ) < $4`;

  const exclude_params = exclusion_type === 'OR'
    ? [note_id_list, user_id, tag_id_list_to_exclude]
    : [note_id_list, user_id, tag_id_list_to_exclude, tag_id_list_to_exclude.length];

  const { rows: filtered_rows } = await executeSQLQuery(exclude_sql, exclude_params);

  return filtered_rows.map((row) => row.id);
};
