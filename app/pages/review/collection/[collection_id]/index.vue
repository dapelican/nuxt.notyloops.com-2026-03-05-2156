<script setup>
const route = useRoute();
const collection_id = route.params.collection_id;

const handling_request = ref(true);

onMounted(async () => {
  try {
    const data = await $fetch(`/review/collection/${collection_id}/get-note-list`);

    if (data.error_message) {
      handling_request.value = false;
      handleFrontendError(null, data.error_message);
      return;
    }

    const {
      note_id_list_to_review,
      persist_scores,
      track_scores,
    } = data;

    if (!Array.isArray(note_id_list_to_review) || note_id_list_to_review.length === 0) {
      handling_request.value = false;
      handleFrontendError(null, 'error_no_item_found');
      return;
    }

    localStorage.setItem(LOCAL_STORAGE_KEY_REVIEW_COLLECTION_NOTE_ID_LIST, JSON.stringify(note_id_list_to_review));
    localStorage.setItem(LOCAL_STORAGE_KEY_REVIEW_COLLECTION_CURRENT_INDEX, '0');
    localStorage.setItem(LOCAL_STORAGE_KEY_REVIEW_COLLECTION_SCORE, '0');
    localStorage.setItem(
      LOCAL_STORAGE_KEY_REVIEW_COLLECTION_TRACK_SCORES,
      JSON.stringify(Boolean(track_scores))
    );
    localStorage.setItem(
      LOCAL_STORAGE_KEY_REVIEW_COLLECTION_PERSIST_SCORES,
      JSON.stringify(persist_scores !== false)
    );

    await navigateTo(`/review/collection/${collection_id}/note/${note_id_list_to_review.at(0)}`);
  } catch (error) {
    handling_request.value = false;

    const status_code = error?.statusCode ?? error?.status;
    const error_message = error?.data?.error_message;

    if (
      status_code === 403
      && error_message !== 'error_unauthorized_collection_feature'
    ) {
      await navigateTo(`/pc/${collection_id}`);
      return;
    }

    handleFrontendError(error, error_message);
  }
});
</script>

<template>
  <LoadingElement v-if="handling_request" />
</template>
