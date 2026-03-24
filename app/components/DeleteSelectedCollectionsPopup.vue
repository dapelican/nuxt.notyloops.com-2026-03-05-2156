<script setup>
const {
  clearSelection,
  page_number,
  selected_item_id_set,
  searchItems,
  total_user_collection_count,
} = useSearchAndSelectItemsOrInject(ITEM_TYPE_COLLECTION);

const show_popup = ref(false);
const is_deleting = ref(false);

const deleteCollections = async () => {
  if (selected_item_id_set.value.size === 0) {
    return;
  }

  is_deleting.value = true;
  try {
    await $fetch('/collections/delete', {
      method: 'DELETE',
      body: {
        collection_id_list: [...selected_item_id_set.value],
      },
    });

    const response = await $fetch('/collections/count-user-collections');

    total_user_collection_count.value = response.total_user_collection_count;

    clearSelection();
    show_popup.value = false;

    if (page_number.value === 1) {
      searchItems();
    } else {
      navigateTo('/manage-collections/page/1');
    }
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
  <!-- DeleteSelectedCollectionsPopup.vue -->
  <UModal
    v-model:open="show_popup"
    :close="{ class: 'cursor-pointer' }"
    :title="$t('t_delete')"
  >
    <section>
      <span class="desktop-only cursor-pointer">{{ $t('t_delete') }}</span>

      <UIcon
        name="i-lucide-trash-2"
        class="mobile-only cursor-pointer size-6 text-error"
      />
    </section>

    <template #body>
      <p class="mt-0 mb-0">
        {{ $t('t_are_you_sure_you_want_to_delete_the_x_selected_collections', { count: selected_item_id_set.size }) }}
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
          @click="deleteCollections"
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
