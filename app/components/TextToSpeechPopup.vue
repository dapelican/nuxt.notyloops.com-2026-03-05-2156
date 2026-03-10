<script setup>
const error_message = ref('');

const file_url = ref(null);

const handling_request = ref(false);

const language = ref(null);

const language_list = GOOGLE_TEXT_TO_SPEECH_LANGUAGE_LIST
  .map((language) => ({
    id: language.code,
    label: language.name.fr,
  }))
  .toSorted((a, b) => a.label.localeCompare(b.label));

const show_popup = ref(false);

const text = ref('');

const closePopupAndResetVariables = () => {
  error_message.value = '';
  file_url.value = null;
  language.value = '';
  text.value = '';
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
  } catch {
    error_message.value = 'error_generating_audio';
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
  >
    <DashedAreaElement>
      {{ $t('t_generate_audio_from_text') }}
    </DashedAreaElement>

    <template #body>
      <template v-if="error_message">
        <p class="text-error">
          {{ $t(error_message) }}
        </p>
      </template>

      <AudioPlayerElement
        v-else-if="file_url"
        :audio_url="file_url"
      />

      <template v-else>
        <h3>
          {{ $t('t_text') }}
        </h3>

        <UTextarea
          v-model="text"
          autoresize
          class="w-full"
          required
          :rows="5"
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
          color="error"
          variant="outline"
          @click="closePopupAndResetVariables"
        >
          <span>{{ $t('t_cancel') }}</span>
        </UButton>

        <UButton
          v-if="!file_url && !error_message"
          class="cursor-pointer"
          color="primary"
          :disabled="!text || !language || handling_request"
          :loading="handling_request"
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
