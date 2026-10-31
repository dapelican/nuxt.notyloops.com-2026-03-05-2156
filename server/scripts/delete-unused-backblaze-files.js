import {
  deleteFile,
  getFileUrlsByBatch,
} from '../services/backblaze/delete-file.js';

import {
  DateTime,
} from 'luxon';

import {
  executeSQLQuery,
} from '../database/query.js';

const FILE_DATE_THRESHOLD = DateTime.now().minus({ weeks: 24 }).toISO();

const deleteUnusedBackblazeFiles = async () => {
  let start_file_name = null;
  let file_list = [];

  try {
    while (true) {
      const response = await getFileUrlsByBatch(start_file_name);
      start_file_name = response.start_file_name;
      file_list = file_list.concat(response.file_list);

      if (!start_file_name) {
        break;
      }
    }

    let used_url_count = 0;
    let unused_url_count = 0;
    let deleted_url_count = 0;

    for (const file of file_list) {
      if (file.file_date < FILE_DATE_THRESHOLD) {
        continue;
      }

      const {
        rows,
      } = await executeSQLQuery(
        `SELECT id FROM note_details
        WHERE file_url = $1`,
        [file.file_url]
      );

      if (rows.length > 0) {
        used_url_count += 1;
      } else {
        unused_url_count += 1;

        console.log('file_url to delete >>>>>>>>>>>>>>>>>>', file.file_url);

        await deleteFile(file.fileId, file.fileName)
          .then(() => {
            console.log('File successfully deleted');
            deleted_url_count += 1;
          })
          .catch((error) => console.log('!!!!!!!!!!could not delete Backblaze file', error));
      }
    }

    console.info('================= INFO ===============================');
    console.info('file:', 'server/scripts/delete-unused-backblaze-files.js');
    console.info('used_url_count:', used_url_count);
    console.info('unused_url_count:', unused_url_count);
    console.info('deleted_url_count:', deleted_url_count);
    console.info('======================================================');
  } catch (error) {
    console.error('================= ERROR =====================');
    console.error('file:', 'server/scripts/delete-unused-backblaze-files.js');
    console.error('Error getting URLs:', error.message);
    console.error('=============================================');
    throw error;
  }
};

export {
  deleteUnusedBackblazeFiles,
};
