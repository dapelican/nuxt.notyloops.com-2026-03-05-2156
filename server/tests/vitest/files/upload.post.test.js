'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../../helpers/http-status-codes.js';

import { describe, expect, it, vi } from 'vitest';

import {
  MAX_UPLOAD_FILE_BYTES,
} from '#shared/utils/constants.js';

import { createTestHandler } from '../create-test-handler.js';

import handler from '../../../routes/files/upload.post.js';

import {
  uploadFile,
} from '../../../services/backblaze/upload-file.js';

vi.mock('../../../services/backblaze/upload-file.js', () => ({
  uploadFile: vi.fn(() => Promise.resolve(
    'https://f000.backblazeb2.com/file/test-bucket/uploaded-file'
  )),
}));

const SESSION_TOKEN_ID = 'f0000000-0000-4000-8000-000000000006';

const request = createTestHandler('post', '/files/upload', handler);

const PNG_1X1 = Buffer.from([
  0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A,
  0x00, 0x00, 0x00, 0x0D, 0x49, 0x48, 0x44, 0x52,
  0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,
  0x08, 0x06, 0x00, 0x00, 0x00, 0x1F, 0x15, 0xC4,
  0x89, 0x00, 0x00, 0x00, 0x0A, 0x49, 0x44, 0x41,
  0x54, 0x78, 0x9C, 0x63, 0x00, 0x01, 0x00, 0x00,
  0x05, 0x00, 0x01, 0x0D, 0x0A, 0x2D, 0xB4, 0x00,
  0x00, 0x00, 0x00, 0x49, 0x45, 0x4E, 0x44, 0xAE,
  0x42, 0x60, 0x82,
]);

const multipartRequest = (filename, type, data) => {
  const boundary = '----testboundary';
  const header = Buffer.from(
    `--${boundary}\r\nContent-Disposition: form-data; name="file"; filename="${filename}"\r\nContent-Type: ${type}\r\n\r\n`
  );
  const footer = Buffer.from(`\r\n--${boundary}--\r\n`);
  const body = Buffer.concat([header, data, footer]);

  return new Request('http://localhost/files/upload', {
    method: 'POST',
    headers: {
      'Content-Type': `multipart/form-data; boundary=${boundary}`,
    },
    body,
  });
};

const authedSession = () => {
  getUserSession.mockResolvedValueOnce({
    session_token_id: SESSION_TOKEN_ID,
  });
};

describe('POST /files/upload', () => {
  it('returns 401 when session is invalid', async () => {
    getUserSession.mockResolvedValueOnce({});

    const response = await request(multipartRequest('a.png', 'image/png', PNG_1X1));

    expect(response.status).toBe(HTTP_CODE_401_UNAUTHORIZED);

    const data = await response.json();

    expect(data.error_message).toBe('error_unauthorized');
    expect(uploadFile).not.toHaveBeenCalled();
  });

  it('returns 400 when the file part is missing', async () => {
    authedSession();

    const response = await request(new Request('http://localhost/files/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data; boundary=----testboundary',
      },
      body: '------testboundary--\r\n',
    }));

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_input');
    expect(uploadFile).not.toHaveBeenCalled();
  });

  it('returns 400 when the file is too large', async () => {
    authedSession();

    const oversized = Buffer.alloc(MAX_UPLOAD_FILE_BYTES + 1);

    const response = await request(multipartRequest('a.png', 'image/png', oversized));

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_input');
    expect(uploadFile).not.toHaveBeenCalled();
  });

  it('returns 400 when magic bytes do not match an allowed type', async () => {
    authedSession();

    const response = await request(multipartRequest(
      'page.html',
      'text/html',
      Buffer.from('<html></html>')
    ));

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_input');
    expect(uploadFile).not.toHaveBeenCalled();
  });

  it('returns 400 when the declared type does not match magic bytes', async () => {
    authedSession();

    const response = await request(multipartRequest('a.jpg', 'image/jpeg', PNG_1X1));

    expect(response.status).toBe(HTTP_CODE_400_BAD_REQUEST);

    const data = await response.json();

    expect(data.error_message).toBe('error_invalid_input');
    expect(uploadFile).not.toHaveBeenCalled();
  });

  it('uploads an allowed png and returns the file url', async () => {
    authedSession();

    const response = await request(multipartRequest('a.png', 'image/png', PNG_1X1));

    expect(response.status).toBe(HTTP_CODE_200_OK);

    const data = await response.json();

    expect(data.file_url).toBe(
      'https://f000.backblazeb2.com/file/test-bucket/uploaded-file'
    );
    expect(uploadFile).toHaveBeenCalledTimes(1);
    expect(uploadFile.mock.calls[0][1]).toBe('image/png');
  });
});
