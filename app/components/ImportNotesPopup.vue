<script setup>
const { t } = useI18n();

const {
  page_number,
  searchItems,
  total_user_note_count,
} = useSearchAndSelectItemsOrInject(ITEM_TYPE_NOTE);

const is_dragging = ref(false);
const is_importing = ref(false);
const show_popup = ref(false);
const csv_text = ref(null);
const file_name = ref(null);
const import_error = ref(null);

const is_valid_csv_file = (file) => {
  if (file.name?.toLowerCase().endsWith('.csv')) {
    return true;
  }

  const normalized = (file.type || '').toLowerCase();

  return [
    'text/csv',
    'application/csv',
    'text/comma-separated-values',
    'application/vnd.ms-excel',
  ].includes(normalized) || (normalized === '' && file.name?.toLowerCase().endsWith('.csv'));
};

const close_popup_and_reset = () => {
  show_popup.value = false;
  csv_text.value = null;
  file_name.value = null;
  import_error.value = null;
  is_dragging.value = false;
};

const read_file_as_text = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(String(reader.result ?? ''));
    reader.onerror = () => reject(new Error('read failed'));
    reader.readAsText(file, 'utf-8');
  });
};

const process_file = async (file) => {
  if (!is_valid_csv_file(file)) {
    import_error.value = t('t_import_csv_invalid_type');

    return;
  }

  import_error.value = null;
  is_importing.value = true;

  try {
    csv_text.value = await read_file_as_text(file);
    file_name.value = file.name;
  } catch {
    import_error.value = t('t_import_csv_read_error');
  } finally {
    is_importing.value = false;
  }
};

const handle_drop = (event) => {
  is_dragging.value = false;
  const file = event.dataTransfer?.files?.[0];

  if (!file) {
    return;
  }

  process_file(file);
};

const handle_file_input_change = (event) => {
  const file = event.target?.files?.[0];

  if (event.target) {
    event.target.value = '';
  }

  if (!file) {
    return;
  }

  process_file(file);
};

const clear_selected_file = () => {
  csv_text.value = null;
  file_name.value = null;
  import_error.value = null;
};

const run_import = async () => {
  if (!csv_text.value?.length) {
    return;
  }

  is_importing.value = true;
  import_error.value = null;

  try {
    await $fetch('/notes/import', {
      body: {
        csv: csv_text.value,
      },
      method: 'POST',
    });

    const response = await $fetch('/notes/count-user-notes');

    total_user_note_count.value = response.total_user_note_count;

    await searchItems();

    close_popup_and_reset();

    await navigateTo(`/manage-notes/page/${page_number.value}`);
  } catch (error) {
    const key = error?.data?.error_message;

    import_error.value = typeof key === 'string'
      ? t(key)
      : t('t_import_error');
  } finally {
    is_importing.value = false;
  }
};
</script>

<template>
  <!-- ImportNotesPopup.vue -->
  <UModal
    v-model:open="show_popup"
    :close="{
      class: 'cursor-pointer',
      onClick: close_popup_and_reset,
    }"
    :title="$t('t_import_notes_title')"
  >
    <slot />

    <template #body>
      <p
        v-if="import_error"
        class="text-error"
      >
        {{ import_error }}
      </p>

      <hr
        v-if="import_error"
        class="separator-0-5"
      >

      <LoadingElement
        v-if="is_importing && !csv_text"
        :with_top_margin="false"
      />

      <label
        v-else-if="!csv_text"
        :class="[
          'flex flex-col items-center justify-center gap-2.5 w-full h-32 overflow-hidden relative rounded-lg border-2 border-dashed cursor-pointer transition-[border-color,background-color] duration-200 border-default hover:border-primary',
          { 'border-primary bg-accented': is_dragging },
        ]"
        @dragenter.prevent="is_dragging = true"
        @dragleave.prevent="is_dragging = false"
        @dragover.prevent
        @drop.prevent="handle_drop"
      >
        <input
          type="file"
          accept=".csv,text/csv,application/csv"
          class="file-input-hidden"
          @change="handle_file_input_change"
        >

        <Icon
          name="uil:upload"
          size="24"
        />

        <span class="upload-file-text">{{ $t('t_drop_your_csv_here_or_browse') }}</span>
      </label>

      <section
        v-else
        class="flex flex-col items-center gap-2 py-2"
      >
        <p class="text-sm m-0">
          {{ file_name }}
        </p>
        <UButton
          class="cursor-pointer"
          :disabled="is_importing"
          size="sm"
          variant="soft"
          @click="clear_selected_file"
        >
          {{ $t('t_choose_different_file') }}
        </UButton>
      </section>
    </template>

    <template #footer>
      <div class="popup-actions">
        <UButton
          class="cursor-pointer"
          color="error"
          variant="outline"
          :disabled="is_importing"
          @click="close_popup_and_reset"
        >
          <span>{{ $t('t_cancel') }}</span>
        </UButton>

        <UButton
          class="cursor-pointer"
          color="primary"
          variant="solid"
          :disabled="!csv_text || is_importing"
          :loading="is_importing"
          @click="run_import"
        >
          <span>{{ $t('t_import_submit') }}</span>
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

.file-input-hidden {
  display: none;
}

.upload-file-text {
  font-size: 0.8rem;
}
</style>
