<script setup>
definePageMeta({ middleware: 'auth' });

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

    const { note_id_list_to_review } = data;

    localStorage.setItem(LOCAL_STORAGE_KEY_REVIEW_COLLECTION_NOTE_ID_LIST, JSON.stringify(note_id_list_to_review));
    localStorage.setItem(LOCAL_STORAGE_KEY_REVIEW_COLLECTION_CURRENT_INDEX, '0');
    localStorage.setItem(LOCAL_STORAGE_KEY_REVIEW_COLLECTION_SCORE, '0');

    await navigateTo(`/review/collection/${collection_id}/note/${note_id_list_to_review.at(0)}`);
  } catch (error) {
    handling_request.value = false;
    handleFrontendError(error, error?.data?.error_message);
  }
});
</script>

<template>
  <LoadingElement v-if="handling_request" />
</template>
