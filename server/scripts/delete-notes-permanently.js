import {
  DateTime,
} from 'luxon';

import {
  executeSQLQuery,
} from '../database/query.js';

const deleteNotesPermanently = async () => {
  const deleted_at_threshold = DateTime.now().minus({ years: 1 }).toISO();

  try {
    const note_details_result = await executeSQLQuery(
      `DELETE FROM note_details
      WHERE deleted_at IS NOT NULL
        AND deleted_at < $1`,
      [deleted_at_threshold]
    );

    const notes_result = await executeSQLQuery(
      `DELETE FROM notes
      WHERE deleted_at IS NOT NULL
        AND deleted_at < $1`,
      [deleted_at_threshold]
    );

    console.info('================= INFO ===============================');
    console.info('file:', 'server/scripts/delete-notes-permanently.js');
    console.info('deleted_at_threshold:', deleted_at_threshold);
    console.info('deleted_note_details_count:', note_details_result.rowCount);
    console.info('deleted_notes_count:', notes_result.rowCount);
    console.info('======================================================');
  } catch (error) {
    console.error('================= ERROR =====================');
    console.error('file:', 'server/scripts/delete-notes-permanently.js');
    console.error('Error deleting notes permanently:', error.message);
    console.error('=============================================');
    throw error;
  }
};

export {
  deleteNotesPermanently,
};
