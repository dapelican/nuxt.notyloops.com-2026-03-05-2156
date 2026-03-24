<script setup>
const props = defineProps({
  collection_id: {
    type: String,
    required: true,
  },
  collection_title: {
    type: String,
    required: true,
  },
});

const {
  page_number,
  searchItems,
  total_user_collection_count,
} = useSearchAndSelectItemsOrInject(ITEM_TYPE_COLLECTION);

const show_popup = ref(false);
const is_deleting = ref(false);

const deleteNote = async () => {
  is_deleting.value = true;

  try {
    await $fetch('/collections/delete', {
      method: 'DELETE',
      body: {
        collection_id_list: [props.collection_id],
      },
    });

    const response = await $fetch('/collections/count-user-collections');

    total_user_collection_count.value = response.total_user_collection_count;

    await searchItems();

    show_popup.value = false;

    navigateTo(`/manage-collections/page/${page_number.value}`);
  } catch (error) {
    console.error(error);
    console.error(error?.data?.error_message);
    handleFrontendError(error, error?.data?.error_message);
  } finally {
    is_deleting.value = false;
  }
};
</script>

<template>
  <!-- DeleteCollectionPopup.vue -->
  <UModal
    v-model:open="show_popup"
    :close="{ class: 'cursor-pointer' }"
    :title="$t('t_delete')"
  >
    <section>
      <span class="cursor-pointer text-error">{{ $t('t_delete') }}</span>
    </section>

    <template #body>
      <p class="mt-0 mb-0">
        {{ $t('t_are_you_sure_you_want_to_delete_the_collection') }}
      </p>

      <p>
        {{ collection_title }}
      </p>
    </template>

    <template
      #footer="{ close }"
    >
      <div class="popup-actions">
        <UButton
          class="cursor-pointer"
          :label="$t('t_cancel')"
          variant="outline"
          @click="close"
        />

        <UButton
          class="cursor-pointer"
          color="error"
          :disabled="is_deleting"
          :loading="is_deleting"
          icon="i-lucide-trash-2"
          :label="$t('t_delete')"
          variant="solid"
          @click="deleteNote"
        />
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
