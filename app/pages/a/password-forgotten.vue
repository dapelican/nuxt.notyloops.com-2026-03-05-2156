<script setup>
import * as z from 'zod';

const { t } = useI18n();

useSeoMeta({
  title: `${t('t_password_forgotten')} | OptiLeague`,
});

const fields = ref([
  {
    label: t('t_email'),
    name: 'email',
    placeholder: t('t_enter_your_email'),
    required: true,
    type: 'email',
  },
]);

const schema = z.object({
  email: z.email(),
});

const error_message = ref('');
const handling_request = ref(false);
const show_check_your_inbox_message = ref(false);

const sendPasswordForgottenEmail = async (form) => {
  handling_request.value = true;

  try {
    await $fetch('/a/send-token-to-reset-password', {
      method: 'POST',
      body: {
        email: form.data.email,
      },
    });

    show_check_your_inbox_message.value = true;
  } catch (error) {
    const error_code = error?.data?.error_message;

    switch (error_code) {
      case 'error_invalid_email':
        error_message.value = t('t_error_invalid_email');
        break;
      case 'error_no_user_found':
        error_message.value = t('t_error_no_user_found');
        break;
      case 'error_email_token_failure':
        error_message.value = t('t_error_email_token_failure');
        break;
      case 'error_maximum_retries_reached':
        error_message.value = t('t_error_maximum_retries_reached');
        break;
      default:
        handleFrontendError(error, error_code);
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
        :fields="fields"
        :loading="handling_request"
        :schema="schema"
        :submit="{
          class: 'cursor-pointer',
          label: $t('t_submit'),
        }"
        :title="$t('t_password_forgotten')"
        @input="error_message = ''"
        @submit="sendPasswordForgottenEmail"
      >
        <template #validation>
          <UAlert
            v-if="error_message"
            color="error"
            :description="error_message"
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
