<script setup>
const props = defineProps({
  note_id: {
    type: String,
    required: true,
  },
  note_title: {
    type: String,
    required: true,
  },
});

const {
  page_number,
  searchItems,
  total_user_note_count,
} = useSearchAndSelectItemsOrInject(ITEM_TYPE_NOTE);

const show_popup = ref(false);
const is_deleting = ref(false);

const deleteNote = async () => {
  is_deleting.value = true;

  try {
    await $fetch('/notes/delete', {
      method: 'DELETE',
      body: {
        note_id_list: [props.note_id],
      },
    });

    const response = await $fetch('/notes/count-user-notes');

    total_user_note_count.value = response.total_user_note_count;

    await searchItems();

    show_popup.value = false;

    navigateTo(`/manage-notes/page/${page_number.value}`);
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
  <!-- DeleteNotePopup.vue -->
  <UModal
    v-model:open="show_popup"
    :close="{ class: 'cursor-pointer' }"
    :title="$t('t_delete')"
  >
    <section>
      <UButton
        color="error"
        :label="$t('t_delete')"
        variant="outline"
      />
    </section>

    <template #body>
      <p class="mt-0 mb-0">
        {{ $t('t_are_you_sure_you_want_to_delete_the_note') }}
      </p>

      <p>
        {{ note_title }}
      </p>
    </template>

    <template
      #footer="{ close }"
    >
      <div class="popup-actions">
        <UButton
          color="neutral"
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
