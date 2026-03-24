'use strict';

import {
  shuffleArray,
} from './shuffle-array.js';

export const buildGroupedNoteDetailList = (rows) => {
  const final_note_detail_list = [];
  let idx = 0;

  while (idx < rows.length) {
    const current_content_position = rows[idx].content_position;
    const same_position_group = [];

    while (
      idx < rows.length
      && rows[idx].content_position === current_content_position
    ) {
      same_position_group.push(rows[idx]);
      idx += 1;
    }

    if (same_position_group.length > 1) {
      final_note_detail_list.push(shuffleArray(same_position_group));
    } else {
      final_note_detail_list.push(same_position_group.at(0));
    }
  }

  return final_note_detail_list;
};
