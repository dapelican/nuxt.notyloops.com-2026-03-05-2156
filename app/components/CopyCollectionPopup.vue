<script setup>
const { collection_id } = useRoute().params;

const { t } = useI18n();

const handling_request_1 = ref(false);

const notes_already_copied = ref(0);

const notes_to_copy = ref(0);

const show_popup = ref(false);

const goCheckCopy = async () => {
  handling_request_1.value = true;

  try {
    const response = await $fetch(`/public-collection/${collection_id}/check-copy`);

    notes_already_copied.value = response.notes_already_copied;
    notes_to_copy.value = response.notes_to_copy;
  } catch (error) {
    handleFrontendError(error, error?.data?.error_message);
  } finally {
    handling_request_1.value = false;
  }
};

const handling_request_2 = ref(false);

const toast = useToast();

const goCopyMissingNotes = async () => {
  handling_request_2.value = true;

  try {
    await $fetch(`/public-collection/${collection_id}/copy`, { method: 'POST' });

    toast.add({
      title: t('t_notes_copied'),
      description: t('t_notes_copied_successfully'),
      color: 'success',
    });

    navigateTo('/manage-notes/page/1');
  } catch (error) {
    toast.add({
      title: t('t_error_copying_notes'),
      description: t('t_error_copying_notes_description'),
      color: 'error',
    });

    handleFrontendError(error, error?.data?.error_message);
  } finally {
    handling_request_2.value = false;

    show_popup.value = false;
  }
};
</script>

<template>
  <!-- CopyCollectionPopup.vue -->
  <UModal
    v-model:open="show_popup"
    :close="{ class: 'cursor-pointer' }"
    :title="$t('t_copy_collection')"
  >
    <UButton
      :label="$t('t_copy_collection')"
      variant="solid"
      @click="goCheckCopy"
    />

    <template #body>
      <section>
        <LoadingElement v-if="handling_request_1" />

        <div v-else>
          <p>
            {{ $t('t_notes_already_copied_with_colon') }}
            {{ notes_already_copied }}
          </p>
          <p>
            {{ $t('t_notes_to_copy_with_colon') }}
            {{ notes_to_copy }}
          </p>
        </div>
      </section>
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
          v-if="notes_to_copy > 0"
          :disabled="handling_request_2"
          :loading="handling_request_2"
          :label="$t('t_copy_missing_notes')"
          variant="solid"
          @click="goCopyMissingNotes"
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
