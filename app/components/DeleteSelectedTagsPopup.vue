<script setup>
const {
  clearSelection,
  page_number,
  refreshAllUserTagList,
  refreshTotalUserTagCount,
  selected_item_id_set,
  searchItems,
} = useSearchAndSelectItemsOrInject(ITEM_TYPE_TAG);

const show_popup = ref(false);
const is_deleting = ref(false);

const deleteTags = async () => {
  if (selected_item_id_set.value.size === 0) {
    return;
  }

  is_deleting.value = true;
  try {
    await $fetch('/tags/delete', {
      method: 'DELETE',
      body: {
        tag_id_list: [...selected_item_id_set.value],
      },
    });

    await Promise.all([
      refreshAllUserTagList(),
      refreshTotalUserTagCount(),
    ]);

    clearSelection();
    show_popup.value = false;

    if (page_number.value === 1) {
      searchItems();
    } else {
      navigateTo('/manage-tags/page/1');
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
  <!-- DeleteSelectedTagsPopup.vue -->
  <UModal
    v-model:open="show_popup"
    :close="{ class: 'cursor-pointer' }"
    :title="$t('t_delete')"
  >
    <UButton
      class="text-error"
      color="neutral"
      icon="i-lucide-trash-2"
      variant="outline"
    >
      <span class="desktop-only">{{ $t('t_delete') }}</span>
    </UButton>

    <template #body>
      <p class="mt-0 mb-0">
        {{ $t('t_are_you_sure_you_want_to_delete_the_x_selected_tags', { count: selected_item_id_set.size }) }}
      </p>
    </template>

    <template
      #footer="{ close }"
    >
      <div class="popup-actions">
        <UButton
          :label="$t('t_cancel')"
          variant="outline"
          @click="close"
        />

        <UButton
          color="error"
          :disabled="is_deleting"
          :loading="is_deleting"
          icon="i-lucide-trash-2"
          :label="$t('t_delete')"
          variant="solid"
          @click="deleteTags"
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
