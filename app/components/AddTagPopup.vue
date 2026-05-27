<script setup>
import * as z from 'zod';

const { t } = useI18n();

const {
  all_user_tag_list,
} = useSearchAndSelectItemsOrInject(ITEM_TYPE_NOTE);

const show_popup = ref(false);
const handling_request = ref(false);

const tag_form = ref(null);

const tag_form_state = reactive({
  label: '',
});

const tag_form_schema = z.object({
  label: z
    .string({ invalid_type_error: t('t_schema_error_empty_string') })
    .min(1, t('t_schema_error_empty_string')),
});

const tag_form_error = ref('');

const resetForm = () => {
  tag_form_state.label = '';
  tag_form_error.value = '';
};

const handleCancel = () => {
  show_popup.value = false;
};

const submitTagForm = () => {
  tag_form.value?.submit?.();
};

const createTag = async () => {
  handling_request.value = true;

  try {
    await $fetch('/tags/create', {
      method: 'POST',
      body: {
        label: tag_form_state.label,
      },
    });

    const tag_data = await $fetch('/tags/get-user-tags');

    if (tag_data?.all_user_tag_list) {
      all_user_tag_list.value = tag_data.all_user_tag_list;
    }

    show_popup.value = false;
    resetForm();
  } catch (error) {
    const error_message = error?.data?.error_message;

    if (error_message === 'error_tag_already_exists') {
      tag_form_error.value = t('t_error_tag_already_exists');
      return;
    }

    handleFrontendError(error, error_message);
  } finally {
    handling_request.value = false;
  }
};

watch(show_popup, (is_open) => {
  if (!is_open) {
    resetForm();
  }
});
</script>

<template>
  <!-- AddTagPopup.vue -->
  <UModal
    v-model:open="show_popup"
    :close="{ class: 'cursor-pointer' }"
    :title="$t('t_add_tag')"
  >
    <UButton
      icon="i-lucide-plus"
      @click="show_popup = true"
    >
      <span>{{ $t('t_add_tag') }}</span>
    </UButton>

    <template #body>
      <UForm
        ref="tag_form"
        class="space-y-4"
        :schema="tag_form_schema"
        :state="tag_form_state"
        @input="tag_form_error = ''"
        @submit="createTag"
      >
        <UFormField
          :label="$t('t_tag_label')"
          name="label"
        >
          <UInput
            v-model="tag_form_state.label"
            :disabled="handling_request"
            class="w-full"
          />
        </UFormField>

        <UAlert
          v-if="tag_form_error"
          color="error"
          :description="tag_form_error"
          icon="i-lucide-info"
        />
      </UForm>
    </template>

    <template #footer>
      <div class="popup-actions">
        <UButton
          color="neutral"
          variant="outline"
          @click="handleCancel"
        >
          <span>{{ $t('t_cancel') }}</span>
        </UButton>

        <UButton
          color="primary"
          variant="solid"
          :disabled="handling_request"
          :loading="handling_request"
          @click="submitTagForm"
        >
          <span>{{ $t('t_save') }}</span>
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
