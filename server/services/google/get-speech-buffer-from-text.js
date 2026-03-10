/* eslint-disable no-undef */

'use strict';

import axios from 'axios';

import crypto from 'crypto';

const getRandomWaveNetVoice = (language_code) => {
  const voice_list = GOOGLE_TEXT_TO_SPEECH_LANGUAGE_LIST
    .find((language) => language.code === language_code)
    ?.voice_list;

  return voice_list[crypto.randomInt(0, voice_list.length)];
};

const {
  GOOGLE_CLOUD_API_KEY,
} = useRuntimeConfig();

/**
 * Generates speech binary from text using Google Cloud Text-to-Speech API with API Key
 * @param {string} text - The text to convert to speech
 * @param {string} language_code - Language code (e.g., 'en-US', 'fr-FR', 'es-ES')
 * @returns {Promise<Buffer>} - Audio content as binary buffer
 */
const getSpeechBufferFromText = async (text, language_code) => {
  try {
    const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${GOOGLE_CLOUD_API_KEY}`;

    const body = {
      audioConfig: {
        audioEncoding: 'MP3',
      },
      input: {
        text,
      },
      voice: {
        languageCode: language_code,
        name: getRandomWaveNetVoice(language_code),
        // ssmlGender: 'NEUTRAL',
      },
    };

    const response = await axios.post(
      url,
      body,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 30000,
      }
    );

    const audio_content = response?.data?.audioContent;

    if (!audio_content) {
      throw new Error('No audio content received from Google TTS API');
    }

    // Convert base64 to buffer
    const audio_buffer = Buffer.from(audio_content, 'base64');

    console.log(`✅ Speech generated successfully (${audio_buffer.length} bytes)`);

    return audio_buffer;
  } catch (error) {
    console.error('❌ Error generating speech:', error.message);
    // Log the detailed error response from Google
    if (error.response?.data) {
      console.error('Google API Error Details:', JSON.stringify(error.response.data, null, 2));
    }
    throw error;
  }
};

export {
  getSpeechBufferFromText,
};
