<script setup>
definePageMeta({ middleware: 'auth' });

const { t } = useI18n();

useSeoMeta({
  title: `${t('t_review_collection_note')} | OptiLeague`,
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

const pending = computed(() => note_details_pending.value || note_row_pending.value);
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

      <section class="mt-8 flex flex-wrap justify-center gap-4">
        <UButton
          class="cursor-pointer hover:text-inverted!"
          :to="'/manage-collections/page/1'"
        >
          {{ $t('t_go_back_to_collections') }}
        </UButton>
      </section>
    </template>
  </UContainer>
</template>
