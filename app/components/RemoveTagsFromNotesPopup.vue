<script setup>
const props = defineProps({
  selected_note_id_set: {
    type: Set,
    required: true,
  },
});

const {
  all_user_tag_list,
  clearSelection,
  searchItems,
} = useSearchAndSelectItems(ITEM_TYPE_NOTE);

const selected_tag_id_list = ref([]);

const show_popup = ref(false);

const updateSelectedTagIdList = (new_tag_id_list) => {
  selected_tag_id_list.value = new_tag_id_list;
};

const removing_tags = ref(false);

const removeTagFromNotes = async () => {
  try {
    removing_tags.value = true;
    await $fetch('/note-tags/unlink', {
      method: 'POST',
      body: {
        note_id_list: [...props.selected_note_id_set],
        tag_id_list: selected_tag_id_list.value,
      },
    });

    clearSelection();
    show_popup.value = false;
    searchItems();
  } catch (error) {
    console.error(error);
    handleFrontendError(error, error?.data?.error_message);
  } finally {
    removing_tags.value = false;
  }
};

const handleCancel = () => {
  selected_tag_id_list.value = [];
  show_popup.value = false;
};
</script>

<template>
  <!-- RemoveTagsFromNotesPopup.vue -->
  <UModal
    v-model:open="show_popup"
    :close="{
      class: 'cursor-pointer',
    }"
    :title="$t('t_add_tags')"
  >
    <UButton
      class="cursor-pointer"
      color="secondary"
      icon="i-lucide:circle-minus"
      variant="outline"
    >
      <span class="desktop-only">{{ $t('t_remove_tags') }}</span>
    </UButton>

    <template #body>
      <SelectTagsInputElement
        :tag_list="all_user_tag_list"
        :selected_tag_id_list="selected_tag_id_list"
        @update:selected_tag_id_list="updateSelectedTagIdList"
      />
    </template>

    <template #footer>
      <div class="popup-actions">
        <UButton
          class="cursor-pointer"
          color="error"
          variant="outline"
          @click="handleCancel"
        >
          <span>{{ $t('t_cancel') }}</span>
        </UButton>

        <UButton
          class="cursor-pointer"
          color="primary"
          variant="solid"
          @click="removeTagFromNotes"
        >
          <span>{{ $t('t_remove') }}</span>
        </UButton>
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
