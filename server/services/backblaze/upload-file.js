'use strict';

import {
  DateTime,
} from 'luxon';

import axios from 'axios';

import crypto from 'crypto';

import {
  getAuthorizationData,
} from './get-authorization-data.js';

import {
  v4 as uuidv4,
} from 'uuid';

const {
  B2_BUCKET_ID,
  B2_BUCKET_NAME,
} = useRuntimeConfig();

const getUploadUrl = async (auth_token, api_url) => {
  try {
    const response = await axios.post(
      `${api_url}/b2api/v2/b2_get_upload_url`,
      {
        bucketId: B2_BUCKET_ID,
      },
      {
        headers: {
          Authorization: auth_token,
        },
      });

    return {
      upload_auth_token: response.data.authorizationToken,
      upload_url: response.data.uploadUrl,
    };
  } catch (error) {
    console.error('B2 get upload URL error:', error.response?.data || error.message);
    throw new Error('Failed to get upload URL from B2');
  }
};

const uploadFile = async (file_buffer, content_type) => {
  try {
    const { api_url, authorization_token, download_url } = await getAuthorizationData();

    const { upload_url, upload_auth_token } = await getUploadUrl(authorization_token, api_url);

    const unique_name = `${DateTime.utc().toFormat('yyyy-MM-dd-HH-mm-ss')}-${uuidv4()}`;

    const file_sha1 = crypto.createHash('sha1').update(file_buffer).digest('hex');

    const response = await axios.post(upload_url, file_buffer, {
      headers: {
        'Authorization': upload_auth_token,
        'Content-Type': content_type,
        'X-Bz-Content-Sha1': file_sha1,
        'X-Bz-File-Name': encodeURIComponent(unique_name),
        'X-Bz-Info-Author': 'unknown',
      },
    });

    return `${download_url}/file/${B2_BUCKET_NAME}/${response.data.fileName}`;
  } catch (error) {
    console.error('Failed to uplaod file: ', error.response?.data || error.message);
    throw new Error('Failed to uplaod file');
  }
};

export {
  uploadFile,
};
