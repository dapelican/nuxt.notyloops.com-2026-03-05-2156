'use strict';

import {
  NOTE_FORMAT_MC,
} from '#shared/utils/constants.js';

import {
  shuffleArray,
} from './shuffle-array.js';

export const buildGroupedNoteDetailList = (note_type, note_details) => {
  const groups = [];
  let current_group = [];

  for (const detail of note_details) {
    if (
      current_group.length > 0
      && detail.content_position !== current_group.at(0).content_position
    ) {
      groups.push(current_group);
      current_group = [];
    }

    current_group.push(detail);
  }

  if (current_group.length > 0) {
    groups.push(current_group);
  }

  return groups.map((group) => {
    if (group.length === 1) {
      return group.at(0);
    }

    const content_position = group.at(0).content_position;

    if (note_type === NOTE_FORMAT_MC && content_position === 2) {
      return shuffleArray(group);
    }

    return group;
  });
};
