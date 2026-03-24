<script setup>
definePageMeta({ middleware: 'auth' });

const { t } = useI18n();

useSeoMeta({
  title: `${t('t_review_spaced_repetition_note')} | NotyLoops`,
});

const route = useRoute();

const note_id = computed(() => route.params.note_id);

const {
  data: note_details_payload,
  error: note_details_error,
  pending: note_details_pending,
} = await useFetch(
  () => `/note_details/${note_id.value}`,
  {
    key: computed(() => `spaced-repetition-note-details-${note_id.value}`),
    watch: [note_id],
  }
);

const {
  data: note_row_payload,
  error: note_row_error,
  pending: note_row_pending,
} = await useFetch(
  () => `/notes/${note_id.value}`,
  {
    key: computed(() => `spaced-repetition-note-row-${note_id.value}`),
    watch: [note_id],
  }
);

if (note_details_error.value) {
  handleFrontendError(null, note_details_error.value.data?.error_message);
}

if (note_row_error.value) {
  handleFrontendError(null, note_row_error.value.data?.error_message);
}

if (note_details_payload.value?.error_message) {
  handleFrontendError(null, note_details_payload.value.error_message);
}

if (note_row_payload.value?.error_message) {
  handleFrontendError(null, note_row_payload.value.error_message);
}

const note_detail_list = computed(() => note_details_payload.value?.note_detail_list ?? []);

const note_title = computed(() => note_row_payload.value?.title ?? '');

const pending = computed(() => note_details_pending.value || note_row_pending.value);

const show_spaced_repetition_actions = computed(() =>
  route.path.includes('spaced-repetition'));

const submitting_feedback = ref(false);

const parse_note_id_list_from_storage = () => {
  if (!import.meta.client) {
    return [];
  }

  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY_SPACED_REPETITION_NOTE_ID_LIST);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const parse_current_index_from_storage = () => {
  if (!import.meta.client) {
    return 0;
  }

  const raw = localStorage.getItem(LOCAL_STORAGE_KEY_SPACED_REPETITION_CURRENT_INDEX);
  const parsed = Number.parseInt(raw ?? '0', 10);
  return Number.isNaN(parsed) ? 0 : parsed;
};

const navigate_to_next_note_or_end = async () => {
  if (!import.meta.client) {
    return;
  }

  const list = parse_note_id_list_from_storage();
  const current_id = String(note_id.value);
  const idx_in_list = list.findIndex((id) => String(id) === current_id);

  const next_idx = idx_in_list >= 0
    ? idx_in_list + 1
    : parse_current_index_from_storage() + 1;

  localStorage.setItem(LOCAL_STORAGE_KEY_SPACED_REPETITION_CURRENT_INDEX, String(next_idx));

  if (next_idx < list.length) {
    await navigateTo(`/review/spaced-repetition/note/${list[next_idx]}`);
  } else {
    await navigateTo('/review/spaced-repetition/end');
  }
};

const submit_feedback = async (feedback) => {
  submitting_feedback.value = true;

  try {
    await $fetch('/review/spaced-repetition/feedback', {
      body: {
        feedback,
        note_id: note_id.value,
      },
      method: 'POST',
    });

    const score = Number(localStorage.getItem(LOCAL_STORAGE_KEY_SPACED_REPETITION_SCORE) ?? 0);
    if (feedback === 'positive') {
      localStorage.setItem(LOCAL_STORAGE_KEY_SPACED_REPETITION_SCORE, String(score + 1));
    }

    await navigate_to_next_note_or_end();
  } catch (error) {
    handleFrontendError(error, error?.data?.error_message);
  } finally {
    submitting_feedback.value = false;
  }
};
</script>

<template>
  <UContainer class="centered-max-width-650">
    <LoadingElement
      v-if="pending"
      class="mx-auto w-full max-w-md py-8"
    />

    <template v-else>
      <NoteDisplayerElement
        :hide_title="false"
        :note_detail_list="note_detail_list"
        :title="note_title"
      />

      <section
        v-if="show_spaced_repetition_actions"
        class="mt-8 flex flex-wrap justify-center gap-4"
      >
        <UButton
          class="cursor-pointer"
          color="neutral"
          :loading="submitting_feedback"
          icon="i-lucide-thumbs-down"
          variant="subtle"
          @click="submit_feedback('negative')"
        >
          {{ $t('t_feedback_negative') }}
        </UButton>

        <UButton
          class="cursor-pointer"
          :loading="submitting_feedback"
          icon="i-lucide-thumbs-up"
          @click="submit_feedback('positive')"
        >
          {{ $t('t_feedback_positive') }}
        </UButton>
      </section>
    </template>
  </UContainer>
</template>
