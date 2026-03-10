<script setup>
import { z } from 'zod';

definePageMeta({ middleware: 'auth' });

const { t } = useI18n();

useSeoMeta({
  title: `${t('t_edit_tag')} | OptiLeague`,
});

const route = useRoute();

const handling_request_1 = ref(true);

const tag_id = route.params.tag_id;

const {
  data: tag_data,
  error: tag_error,
} = await useFetch(`/tags/${tag_id}`);

if (tag_error.value) {
  const error_message = verify_error.value.data?.error_message;

  handleFrontendError(null, error_message);
}

const label = ref(tag_data.value?.label);

handling_request_1.value = false;

const page_number = route.query.page_number;

const tag_form_state = reactive({
  label,
});

const tag_form_schema = z.object({
  label: z
    .string({ invalid_type_error: t('t_schema_error_empty_string') })
    .min(1, t('t_schema_error_empty_string')),
});

const tag_form_error = ref('');

const handling_request_2 = ref(false);

const updateTag = async () => {
  handling_request_2.value = true;

  try {
    await $fetch('/tags/update', {
      method: 'PATCH',
      body: {
        id: tag_id,
        label: tag_form_state.label,
      },
    });

    return navigateTo(`/manage-tags/page/${page_number}`);
  } catch (error) {
    const error_message = error?.data?.error_message;

    if (error_message === 'error_tag_already_exists') {
      tag_form_error.value = $t('t_error_tag_already_exists');
      return;
    }

    handleFrontendError(error, error_message);
  } finally {
    handling_request_2.value = false;
  }
};
</script>

<template>
  <UContainer>
    <LoadingElement v-if="handling_request_1" />

    <main
      v-if="!handling_request_1"
      class="centered-max-width-650"
    >
      <h1 class="center">
        {{ $t('t_edit_tag') }}
      </h1>

      <UForm
        class="space-y-4"
        :schema="tag_form_schema"
        :state="tag_form_state"
        @input="tag_form_error = ''"
        @submit="updateTag"
      >
        <UFormField
          :label="$t('t_label')"
          name="label"
        >
          <UInput
            v-model="tag_form_state.label"
            :disabled="handling_request_2"
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
            :to="`/manage-tags/page/${page_number}`"
          >
            {{ $t('t_cancel') }}
          </NuxtLink>

          <UButton
            class="cursor-pointer"
            :disabled="handling_request_2"
            :loading="handling_request_2"
            type="submit"
            variant="solid"
          >
            {{ $t('t_save') }}
          </UButton>
        </nav>
      </UForm>
    </main>
  </UContainer>
</template>
