<script setup>
import * as z from 'zod';

definePageMeta({ middleware: 'auth' });

const { t } = useI18n();

useSeoMeta({
  title: `${t('t_add_note')} | OptiLeague`,
});

const handling_request = ref(false);

const tag_form_state = reactive({
  label: '',
});

const tag_form_schema = z.object({
  label: z
    .string({ invalid_type_error: t('t_schema_error_empty_string') })
    .min(1, t('t_schema_error_empty_string')),
});

const tag_form_error = ref('');

const createTag = async () => {
  handling_request.value = true;

  try {
    await $fetch('/tags/create', {
      method: 'POST',
      body: {
        label: tag_form_state.label,
      },
    });

    return navigateTo('/manage-tags/page/1');
  } catch (error) {
    const error_message = error?.data?.error_message;

    if (error_message === 'error_tag_already_exists') {
      tag_form_error.value = $t('t_error_tag_already_exists');
      return;
    }

    handleFrontendError(error, error_message);
  } finally {
    handling_request.value = false;
  }
};
</script>

<template>
  <UContainer class="centered-max-width-650">
    <h1 class="center">
      {{ $t('t_add_tag') }}
    </h1>

    <UForm
      class="space-y-4"
      :schema="tag_form_schema"
      :state="tag_form_state"
      @input="tag_form_error = ''"
      @submit="createTag"
    >
      <UFormField
        :label="$t('t_label')"
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

      <hr class="separator-1">

      <nav class="flex-ce-ce-gap-2">
        <NuxtLink
          :to="'/manage-tags/page/1'"
        >
          {{ $t('t_cancel') }}
        </NuxtLink>

        <UButton
          class="cursor-pointer"
          :disabled="handling_request"
          :loading="handling_request"
          type="submit"
          variant="solid"
        >
          {{ $t('t_save') }}
        </UButton>
      </nav>
    </UForm>
  </UContainer>
</template>
