<script setup>
const { t } = useI18n();

useSeoMeta({
  title: `${t('t_review_collection_note')} | NotyLoops`,
});

const route = useRoute();

const collection_id = route.params.collection_id;
const note_id = computed(() => route.params.note_id);

const note_detail_list = ref([]);
const note_title = ref('');
const note_format = ref(NOTE_FORMAT_FREE);
const pending = ref(true);
const submitting_feedback = ref(false);
const navigating_next = ref(false);

const read_boolean_from_storage = (storage_key) => {
  if (!import.meta.client) {
    return true;
  }

  const raw = localStorage.getItem(storage_key);

  if (raw === null) {
    return true;
  }

  try {
    return JSON.parse(raw) === true;
  } catch {
    return true;
  }
};

const read_track_scores_enabled_from_storage = () => {
  return read_boolean_from_storage(LOCAL_STORAGE_KEY_REVIEW_COLLECTION_TRACK_SCORES);
};

const read_persist_scores_enabled_from_storage = () => {
  return read_boolean_from_storage(LOCAL_STORAGE_KEY_REVIEW_COLLECTION_PERSIST_SCORES);
};

const track_scores_enabled = ref(true);
const persist_scores_enabled = ref(true);

let load_sequence = 0;

const load_note = async () => {
  const sequence = load_sequence + 1;
  load_sequence = sequence;
  pending.value = true;

  persist_scores_enabled.value = read_persist_scores_enabled_from_storage();
  track_scores_enabled.value = read_track_scores_enabled_from_storage();

  try {
    if (!persist_scores_enabled.value) {
      const data = await $fetch(`/public-collection/${collection_id}/note/${note_id.value}`);

      if (sequence !== load_sequence) {
        return;
      }

      if (data?.error_message) {
        handleFrontendError(null, data.error_message);
        return;
      }

      note_detail_list.value = data.note_detail_list ?? [];
      note_title.value = data.title ?? '';
      note_format.value = data.note_format ?? NOTE_FORMAT_FREE;
      return;
    }

    const [
      note_details_payload,
      note_row_payload,
    ] = await Promise.all([
      $fetch(`/note_details/${note_id.value}`),
      $fetch(`/notes/${note_id.value}`),
    ]);

    if (sequence !== load_sequence) {
      return;
    }

    if (note_details_payload?.error_message) {
      handleFrontendError(null, note_details_payload.error_message);
      return;
    }

    if (note_row_payload?.error_message) {
      handleFrontendError(null, note_row_payload.error_message);
      return;
    }

    note_detail_list.value = note_details_payload?.note_detail_list ?? [];
    note_title.value = note_row_payload?.title ?? '';
    note_format.value = note_details_payload?.note_format
      ?? note_row_payload?.format
      ?? NOTE_FORMAT_FREE;
  } catch (error) {
    if (sequence !== load_sequence) {
      return;
    }

    handleFrontendError(error, error?.data?.error_message);
  } finally {
    if (sequence === load_sequence) {
      pending.value = false;
    }
  }
};

onMounted(() => {
  load_note();
});

watch(note_id, () => {
  if (!import.meta.client) {
    return;
  }

  load_note();
});

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

const remember_local_score = (feedback) => {
  const score = Number(localStorage.getItem(LOCAL_STORAGE_KEY_REVIEW_COLLECTION_SCORE) ?? 0);

  if (feedback === 'positive') {
    localStorage.setItem(LOCAL_STORAGE_KEY_REVIEW_COLLECTION_SCORE, String(score + 1));
  }
};

const submit_feedback = async (feedback) => {
  submitting_feedback.value = true;

  try {
    if (!persist_scores_enabled.value) {
      remember_local_score(feedback);
      await navigate_to_next_note_or_end();
      return;
    }

    await $fetch(`/review/collection/${collection_id}/feedback`, {
      body: {
        feedback,
        note_id: note_id.value,
      },
      method: 'POST',
    });

    remember_local_score(feedback);

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
        :note_format="note_format"
        :title="note_title"
      />

      <ClientOnly>
        <nav
          v-if="track_scores_enabled"
          class="mt-16 mb-16 flex flex-wrap justify-center gap-x-12 gap-y-8"
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
