<script setup>
const props = defineProps({
  tag_id: {
    type: String,
    required: true,
  },
  tag_label: {
    type: String,
    required: true,
  },
});

const {
  all_user_tag_list,
  page_number,
  searchItems,
  total_user_tag_count,
} = useSearchAndSelectItemsOrInject(ITEM_TYPE_TAG);

const show_popup = ref(false);
const is_deleting = ref(false);

const deleteTag = async () => {
  is_deleting.value = true;

  try {
    await $fetch('/tags/delete', {
      method: 'DELETE',
      body: {
        tag_id_list: [props.tag_id],
      },
    });

    const tag_data = await $fetch('/tags/get-user-tags');

    all_user_tag_list.value = tag_data.all_user_tag_list;

    const count_response = await $fetch('/tags/count-user-tags');

    total_user_tag_count.value = count_response.total_user_tag_count;

    await searchItems();

    show_popup.value = false;

    navigateTo(`/manage-tags/page/${page_number.value}`);
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
  <!-- DeleteTagPopup.vue -->
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
        {{ $t('t_are_you_sure_you_want_to_delete_the_tag') }}
      </p>

      <p>
        {{ tag_label }}
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
          @click="deleteTag"
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
