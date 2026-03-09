<script setup>
import * as z from 'zod';

const { t } = useI18n();

useSeoMeta({
  title: `${t('t_sign_up_step_1_of_2')} | OptiLeague`,
});

const form_fields = ref([
  {
    label: t('t_email'),
    name: 'email',
    placeholder: t('t_enter_your_email'),
    required: true,
    type: 'email',
  },
]);

const form_schema = z.object({
  email: z.email(t('t_schema_error_invalid_email_address')),
});

const form_error = ref('');
const handling_request = ref(false);
const show_check_your_inbox_message = ref(false);

const sendValidateEmailToken = async (form) => {
  handling_request.value = true;

  try {
    // useAsyncData, useFetch or $fetch
    await $fetch('/a/send-token-to-validate-email', {
      method: 'POST',
      body: {
        email: form.data.email,
      },
    });

    show_check_your_inbox_message.value = true;
  } catch (error) {
    const error_message = error?.data?.error_message;

    switch (error_message) {
      case 'error_invalid_email':
        form_error.value = t('t_error_invalid_email');
        break;
      case 'error_email_already_in_use':
        form_error.value = t('t_error_email_already_in_use');
        break;
      case 'error_email_token_already_sent':
        form_error.value = t('t_error_email_token_already_sent');
        break;
      case 'error_maximum_retries_reached':
        form_error.value = t('t_error_maximum_retries_reached');
        break;
      case 'error_corrupt_email':
        form_error.value = t('t_error_corrupt_email');
        break;
      default:
        handleFrontendError(error, error_message);
        break;
    }
  } finally {
    handling_request.value = false;
  }
};
</script>

<template>
  <UContainer class="centered-max-width-400">
    <UPageCard v-if="!show_check_your_inbox_message">
      <UAuthForm
        :disabled="handling_request"
        :fields="form_fields"
        :loading="handling_request"
        :schema="form_schema"
        :submit="{
          class: 'cursor-pointer',
          label: $t('t_confirm_email_address'),
        }"
        :title="$t('t_sign_up')"
        @input="form_error = ''"
        @submit="sendValidateEmailToken"
      >
        <template #validation>
          <UAlert
            v-if="form_error"
            color="error"
            :description="form_error"
            icon="i-lucide-info"
          />
        </template>
      </UAuthForm>
    </UPageCard>

    <UAlert
      v-else
      color="info"
      :description="$t('t_check_your_inbox_message')"
      icon="i-lucide-info"
    />
  </UContainer>
</template>
