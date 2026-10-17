<script setup>
import * as z from 'zod';

const { t } = useI18n();

useSeoMeta({
  title: `${t('t_password_forgotten')} | ${WEBSITE_NAME}`,
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
const turnstile_element = ref(null);
const turnstile_token = ref('');

const sendPasswordForgottenEmail = async (form) => {
  handling_request.value = true;

  try {
    await $fetch('/a/send-token-to-reset-password', {
      method: 'POST',
      body: {
        email: form.data.email,
        turnstile_token: turnstile_token.value,
      },
    });

    show_check_your_inbox_message.value = true;
  } catch (error) {
    const error_message = error?.data?.error_message;

    switch (error_message) {
      case 'error_invalid_email':
        form_error.value = t('t_error_invalid_email');
        break;
      case 'error_email_token_failure':
        form_error.value = t('t_error_email_token_failure');
        break;
      case 'error_invalid_turnstile':
        form_error.value = t('t_error_invalid_turnstile');
        break;
      case 'error_password_reset_limit_reached':
        form_error.value = t('t_error_password_reset_limit_reached');
        break;
      default:
        handleFrontendError(error, error_message);
        break;
    }
  } finally {
    handling_request.value = false;
    turnstile_element.value?.reset();
  }
};
</script>

<template>
  <UContainer class="centered-max-width-400 mt-10">
    <UPageCard v-if="!show_check_your_inbox_message">
      <UAuthForm
        :disabled="handling_request"
        :fields="form_fields"
        :loading="handling_request"
        :schema="form_schema"
        :submit="{
          class: 'cursor-pointer',
          label: $t('t_submit'),
        }"
        :title="$t('t_password_forgotten')"
        @input="form_error = ''"
        @submit="sendPasswordForgottenEmail"
      >
        <template #validation>
          <TurnstileElement
            ref="turnstile_element"
            v-model="turnstile_token"
          />
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
