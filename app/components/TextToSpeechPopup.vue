<script setup>
const error_message = ref('');

const file_url = ref(null);

const handling_request = ref(false);

const language = ref(null);

const week_character_count = ref(null);

const language_list = GOOGLE_TEXT_TO_SPEECH_LANGUAGE_LIST
  .map((language) => ({
    id: language.code,
    label: language.name.fr,
  }))
  .toSorted((a, b) => a.label.localeCompare(b.label));

const show_popup = ref(false);

const text = ref('');

const characters_remaining = computed(() => {
  return TEXT_TO_SPEECH_FILE_CHARACTER_LIMIT - text.value.length;
});

const is_text_at_character_limit = computed(() => {
  return text.value.length >= TEXT_TO_SPEECH_FILE_CHARACTER_LIMIT;
});

const is_week_usage_above_limit = computed(() => {
  return week_character_count.value !== null
    && week_character_count.value >= TEXT_TO_SPEECH_WEEK_CHARACTER_LIMIT;
});

const fetchWeekUsage = async () => {
  handling_request.value = true;

  try {
    const data = await $fetch('/text-to-speech/week-usage');

    if (!show_popup.value) {
      return;
    }

    week_character_count.value = data.character_count ?? 0;
  } catch {
    if (show_popup.value) {
      week_character_count.value = 0;
    }
  } finally {
    if (show_popup.value) {
      handling_request.value = false;
    }
  }
};

watch(show_popup, (is_open) => {
  if (!is_open) {
    week_character_count.value = null;

    return;
  }

  void fetchWeekUsage();
}, { flush: 'sync' });

const closePopupAndResetVariables = () => {
  error_message.value = '';
  file_url.value = null;
  language.value = '';
  text.value = '';
  handling_request.value = false;
  week_character_count.value = null;
  show_popup.value = false;
};

const generateAudioFromText = async () => {
  handling_request.value = true;

  try {
    const data = await $fetch('/files/generate-audio-file-from-text', {
      method: 'POST',
      body: {
        text: text.value,
        language_code: language.value?.id,
      },
    });

    file_url.value = data.audio_url;
  } catch (error) {
    const server_error_key = error?.data?.error_message;

    error_message.value = server_error_key === 't_error_text_to_speech_file_character_limit'
      ? 't_error_text_to_speech_file_character_limit'
      : 't_error_generating_audio';
  } finally {
    handling_request.value = false;
  }
};

const emit = defineEmits(['file_url']);

const emitFileInfo = () => {
  emit('file_url', {
    file_url: file_url.value,
    file_type: 'audio',
  });

  closePopupAndResetVariables();
};
</script>

<template>
  <!-- TextToSpeechPopup.vue -->
  <UModal
    v-model:open="show_popup"
    :close="{
      class: 'cursor-pointer',
      onClick: closePopupAndResetVariables,
    }"
    :title="$t('t_generate_audio_from_text')"
    :ui="{ content: 'max-w-xl' }"
  >
    <DashedAreaElement>
      {{ $t('t_generate_audio_from_text') }}
    </DashedAreaElement>

    <template #body>
      <LoadingElement
        v-if="handling_request"
      />

      <template v-else-if="error_message">
        <p class="text-error">
          {{ $t(error_message) }}
        </p>
      </template>

      <AudioPlayerElement
        v-else-if="file_url"
        :audio_url="file_url"
      />

      <p
        v-else-if="is_week_usage_above_limit"
        class="m-0"
      >
        {{ $t('t_text_to_speech_week_usage_limit_message', {
          limit: TEXT_TO_SPEECH_WEEK_CHARACTER_LIMIT,
          used: week_character_count,
        }) }}
      </p>

      <template v-else>
        <h3>
          {{ $t('t_text') }}
        </h3>

        <UTextarea
          v-model="text"
          autoresize
          class="w-full"
          required
          :maxlength="TEXT_TO_SPEECH_FILE_CHARACTER_LIMIT"
          :rows="5"
        />

        <UAlert
          class="mt-2"
          :color="is_text_at_character_limit ? 'error' : 'info'"
          :description="$t('t_text_to_speech_remaining_characters', {
            remaining: characters_remaining,
            limit: TEXT_TO_SPEECH_FILE_CHARACTER_LIMIT,
          })"
          icon="i-lucide-info"
          variant="subtle"
        />

        <hr class="separator-1">

        <h3>
          {{ $t('t_language') }}
        </h3>

        <UInputMenu
          v-model="language"
          class="w-full my-2"
          :items="language_list"
          required
        />

        <hr class="separator-1">
      </template>
    </template>

    <template #footer>
      <div class="popup-actions">
        <UButton
          class="cursor-pointer"
          color="neutral"
          variant="outline"
          @click="closePopupAndResetVariables"
        >
          <span>{{ $t('t_cancel') }}</span>
        </UButton>

        <UButton
          v-if="!file_url && !error_message && !is_week_usage_above_limit && !handling_request"
          class="cursor-pointer"
          :color="is_text_at_character_limit ? 'error' : 'primary'"
          :disabled="!text || !language || is_text_at_character_limit"
          variant="solid"
          @click="generateAudioFromText"
        >
          <span>{{ $t('t_generate_audio') }}</span>
        </UButton>

        <UButton
          v-if="file_url"
          class="cursor-pointer"
          color="primary"
          variant="solid"
          @click="emitFileInfo"
        >
          <span>{{ $t('t_add_audio') }}</span>
        </UButton>
      </div>
    </template>
  </UModal>
</template>

<style scoped>
.popup-actions {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>
