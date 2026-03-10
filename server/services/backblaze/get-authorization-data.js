'use strict';

import {
  DateTime,
} from 'luxon';

import axios from 'axios';

const {
  B2_APPLICATION_KEY,
  B2_APPLICATION_KEY_ID,
} = useRuntimeConfig();

let authorization_data = {
  api_url: '',
  authorization_token: '',
  download_url: '',
  created_at: '',
};

const getAuthorizationData = async () => {
  if (
    authorization_data.created_at
    && authorization_data.created_at > DateTime.now().minus({ hours: 23 }).toISO()
  ) {
    return authorization_data;
  }

  try {
    const auth_string = Buffer.from(`${B2_APPLICATION_KEY_ID}:${B2_APPLICATION_KEY}`).toString('base64');

    const {
      data: backblaze_data,
    } = await axios.get('https://api.backblazeb2.com/b2api/v2/b2_authorize_account', {
      headers: {
        Authorization: `Basic ${auth_string}`,
      },
    });

    authorization_data = {
      api_url: backblaze_data.apiUrl,
      authorization_token: backblaze_data?.authorizationToken,
      download_url: backblaze_data?.downloadUrl,
      created_at: DateTime.now().toISO(),
    };

    return authorization_data;
  } catch (error) {
    console.error('B2 authorization error:', error.response?.data || error.message);
    throw new Error('Failed to authorize with B2');
  }
};

export {
  getAuthorizationData,
};
