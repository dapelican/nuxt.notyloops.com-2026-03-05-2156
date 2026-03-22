<script setup>
import { DateTime } from 'luxon';

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

    const day_of_year = DateTime.now().ordinal;

    console.log(day_of_year);

    let index = null;

    if (!note_id_list_to_review.at(day_of_year - 1)) {
      index = note_id_list_to_review.length - 1;
    } else {
      index = day_of_year - 1;
    }

    localStorage.setItem(LOCAL_STORAGE_KEY_REVIEW_COLLECTION_CURRENT_INDEX, String(index));

    await navigateTo(`/review/diary/${collection_id}/note/${note_id_list_to_review.at(index)}`);
  } catch (error) {
    handling_request.value = false;
    handleFrontendError(error, error?.data?.error_message);
  }
});
</script>

<template>
  <LoadingElement v-if="handling_request" />
</template>
