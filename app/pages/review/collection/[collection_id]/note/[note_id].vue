<script setup>
definePageMeta({ middleware: 'auth' });

const { t } = useI18n();

useSeoMeta({
  title: `${t('t_review_collection_note')} | NotyLoops`,
});

const route = useRoute();

const collection_id = route.params.collection_id;
const note_id = computed(() => route.params.note_id);

const {
  data: note_details_payload,
  error: note_details_error,
  pending: note_details_pending,
} = await useFetch(
  () => `/note_details/${note_id.value}`,
  {
    key: computed(() => `collection-note-details-${note_id.value}`),
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
    key: computed(() => `collection-note-row-${note_id.value}`),
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

const note_type = computed(() => note_row_payload.value?.type ?? NOTE_FORMAT_FREE);

const pending = computed(() => note_details_pending.value || note_row_pending.value);

const submitting_feedback = ref(false);

const read_track_scores_enabled_from_storage = () => {
  if (!import.meta.client) {
    return true;
  }

  const raw = localStorage.getItem(LOCAL_STORAGE_KEY_REVIEW_COLLECTION_TRACK_SCORES);

  if (raw === null) {
    return true;
  }

  try {
    return JSON.parse(raw) === true;
  } catch {
    return true;
  }
};

const track_scores_enabled = ref(read_track_scores_enabled_from_storage());

const navigating_next = ref(false);

const parse_note_id_list_from_storage = () => {
  if (!import.meta.client) {
    return [];
  }

  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY_REVIEW_COLLECTION_NOTE_ID_LIST);
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

  const raw = localStorage.getItem(LOCAL_STORAGE_KEY_REVIEW_COLLECTION_CURRENT_INDEX);
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

  localStorage.setItem(LOCAL_STORAGE_KEY_REVIEW_COLLECTION_CURRENT_INDEX, String(next_idx));

  if (next_idx < list.length) {
    await navigateTo(`/review/collection/${collection_id}/note/${list[next_idx]}`);
  } else {
    await navigateTo(`/review/collection/end`);
  }
};

const continue_to_next_note_or_end = async () => {
  navigating_next.value = true;

  try {
    await navigate_to_next_note_or_end();
  } finally {
    navigating_next.value = false;
  }
};

const submit_feedback = async (feedback) => {
  submitting_feedback.value = true;

  try {
    await $fetch(`/review/collection/${collection_id}/feedback`, {
      body: {
        feedback,
        note_id: note_id.value,
      },
      method: 'POST',
    });

    const score = Number(localStorage.getItem(LOCAL_STORAGE_KEY_REVIEW_COLLECTION_SCORE) ?? 0);
    if (feedback === 'positive') {
      localStorage.setItem(LOCAL_STORAGE_KEY_REVIEW_COLLECTION_SCORE, String(score + 1));
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
        :note_type="note_type"
        :title="note_title"
      />

      <ClientOnly>
        <nav
          v-if="track_scores_enabled"
          class="mt-8 flex flex-wrap justify-center gap-4"
        >
          <UButton
            color="neutral"
            :loading="submitting_feedback"
            icon="i-lucide-thumbs-down"
            variant="subtle"
            @click="submit_feedback('negative')"
          >
            {{ $t('t_feedback_negative') }}
          </UButton>

          <UButton
            :loading="submitting_feedback"
            icon="i-lucide-thumbs-up"
            @click="submit_feedback('positive')"
          >
            {{ $t('t_feedback_positive') }}
          </UButton>
        </nav>

        <nav
          v-else
          class="mt-8 flex flex-wrap justify-center gap-4"
        >
          <UButton
            :loading="navigating_next"
            icon="i-lucide-chevron-right"
            @click="continue_to_next_note_or_end"
          >
            {{ $t('t_continue_to_next_note') }}
          </UButton>
        </nav>
      </ClientOnly>

      <nav class="mt-8 flex justify-center">
        <UButton
          color="neutral"
          variant="outline"
          :to="'/review/collection/end'"
        >
          {{ $t('t_end_review_session') }}
        </UButton>
      </nav>
    </template>
  </UContainer>
</template>
