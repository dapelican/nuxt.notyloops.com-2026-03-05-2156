/* eslint-disable no-undef */
'use strict';

import {
  HTTP_CODE_200_OK,
  HTTP_CODE_400_BAD_REQUEST,
  HTTP_CODE_401_UNAUTHORIZED,
} from '../../helpers/http-status-codes.js';

import {
  defineEventHandler,
  setResponseStatus,
} from 'h3';

import fs from 'fs/promises';

import {
  getSpeechBufferFromText,
} from '../../services/google/get-speech-buffer-from-text.js';

import {
  handleBackendError,
} from '../../helpers/handle-backend-error.js';

import path from 'path';

import {
  uploadFile,
} from '../../services/backblaze/upload-file.js';

import {
  verifySessionAndReturnUser,
} from '../../helpers/verify-session-and-return-user.js';

const authorized_language_code_list = GOOGLE_TEXT_TO_SPEECH_LANGUAGE_LIST
  .map((language) => language.code);

// Ensure upload directory exists
const ensureUploadDir = async (upload_dir) => {
  try {
    await fs.access(upload_dir);
  // eslint-disable-next-line no-unused-vars
  } catch (___) {
    // Directory doesn't exist, create it
    await fs.mkdir(upload_dir, {
      recursive: true,
    });
    console.log(`📁 Created upload directory: ${upload_dir}`);
  }
};

const generateSpeechLink = async (text, language_code, user_id) => {
  let file_path = null;

  if (text.length === 0) {
    return {
      audio_url: null,
      text_length: 0,
    };
  }

  try {
    const timestamp = Date.now();
    const file_name = `${user_id}_${timestamp}.mp3`;
    const upload_dir = './uploads';

    // Ensure upload directory exists
    await ensureUploadDir(upload_dir);

    // Create full file path
    file_path = path.join(upload_dir, file_name);

    // Generate audio buffer from text
    const audio_buffer = await getSpeechBufferFromText(text, language_code);

    // Write audio buffer to temporary file
    await fs.writeFile(file_path, audio_buffer);
    console.log(`💾 Temporary audio file created: ${file_path} (${audio_buffer.length} bytes)`);

    // Upload file to B2
    const audio_url = await uploadFile(
      audio_buffer,
      'audio/mpeg'
    );

    console.log(`☁️ File uploaded to B2: ${audio_url}`);

    // Clean up the temporary file
    await fs.unlink(file_path);
    console.log(`🗑️ Temporary file cleaned up: ${file_path}`);
    file_path = null;

    return audio_url;
  } catch (err) {
    console.error('Speech generation error:', err);

    // Clean up the temporary file if it exists
    if (file_path) {
      try {
        await fs.unlink(file_path);
        console.log(`🗑️ Cleaned up temporary file after error: ${file_path}`);
      } catch (cleanup_err) {
        console.error('Error cleaning up file:', cleanup_err);
      }
    }

    throw err;
  }
};

export default defineEventHandler(async (event) => {
  try {
    const {
      text,
      language_code,
    } = await readBody(event);

    const user = await verifySessionAndReturnUser(event);

    if (user === null) {
      setResponseStatus(event, HTTP_CODE_401_UNAUTHORIZED);

      return {
        error_message: 'error_unauthorized',
      };
    }

    if (text?.length === 0 || !authorized_language_code_list.includes(language_code)) {
      setResponseStatus(event, HTTP_CODE_400_BAD_REQUEST);

      return {
        error_message: 'error_invalid_input',
      };
    }

    const audio_url = await generateSpeechLink(text, language_code, user.id);

    setResponseStatus(event, HTTP_CODE_200_OK);

    return {
      audio_url,
    };
  } catch (error) {
    console.log('!!!!!!!!!!!!!!!!!!error', error);

    /* c8 ignore next */
    return handleBackendError(error, event);
  }
});
