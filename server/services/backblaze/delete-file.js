'use strict';

import {
  DateTime,
} from 'luxon';

import axios from 'axios';

import {
  getAuthorizationData,
} from './get-authorization-data.js';

const {
  B2_BUCKET_ID,
  B2_BUCKET_NAME,
} = useRuntimeConfig();

const getFileUrlsByBatch = async (start_file_name) => {
  const auth_data = await getAuthorizationData();

  const response = await axios({
    data: {
      bucketId: B2_BUCKET_ID,
      maxFileCount: 1000,
      startFileName: start_file_name,
    },
    headers: {
      Authorization: auth_data.authorization_token,
    },
    method: 'post',
    url: `${auth_data.api_url}/b2api/v2/b2_list_file_names`,
  });

  const file_list = response.data.files
    .map((file) => ({
      ...file,
      file_date: DateTime.fromMillis(file.uploadTimestamp).toISO(),
      file_url: `${auth_data.download_url}/file/${B2_BUCKET_NAME}/${file.fileName}`,
    }));

  return {
    file_list,
    start_file_name: response.data.nextFileName,
  };
};

const deleteFile = async (file_id, file_name) => {
  const auth_data = await getAuthorizationData();

  try {
    const {
      data: backblaze_data,
    } = await axios({
      data: {
        fileId: file_id,
        fileName: file_name,
      },
      headers: {
        Authorization: auth_data.authorization_token,
      },
      method: 'post',
      url: `${auth_data.api_url}/b2api/v2/b2_delete_file_version`,
    });

    return backblaze_data;
  } catch (error) {
    console.error('Error deleting file:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export {
  deleteFile,
  getFileUrlsByBatch,
};
