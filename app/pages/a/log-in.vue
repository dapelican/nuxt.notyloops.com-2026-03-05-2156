<script setup>
import * as z from 'zod';

const { t } = useI18n();

useSeoMeta({
  title: `${t('t_log_in')} | OptiLeague`,
});

const form_fields = ref([
  {
    name: 'email',
    type: 'email',
    label: $t('t_email'),
    placeholder: $t('t_enter_your_email'),
    required: true,
  },
  {
    name: 'password',
    type: 'password',
    label: $t('t_password'),
    placeholder: $t('t_enter_your_password'),
    required: true,
  },
]);

const form_schema = z.object({
  email: z.email(t('t_schema_error_invalid_email_address')),
  password: z.string().min(1, t('t_schema_error_empty_string')),
});

const form_error = ref('');

const handling_request = ref(false);

const {
  fetch: refreshSession,
} = useUserSession();

const logIn = async (form) => {
  handling_request.value = true;

  try {
    await $fetch('/a/log-in', {
      method: 'POST',
      body: {
        email: form.data.email,
        password: form.data.password,
      },
    });

    await refreshSession();

    return navigateTo(CONNECTED_USER_LANDING_PAGE);
  } catch (error) {
    const error_message = error?.data?.error_message;

    switch (error_message) {
      case 'error_invalid_email':
        form_error.value = t('t_error_invalid_email');
        break;
      case 'error_invalid_password':
        form_error.value = t('t_error_invalid_password');
        break;
      case 'error_wrong_credentials':
        form_error.value = t('t_error_wrong_credentials');
        break;
      case 'error_account_not_confirmed':
        form_error.value = t('t_error_account_not_confirmed');
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
    <UPageCard>
      <UAuthForm
        :disabled="handling_request"
        :fields="form_fields"
        :loading="handling_request"
        :schema="form_schema"
        size="xl"
        :submit="{
          class: 'cursor-pointer',
          label: $t('t_log_in'),
        }"
        :title="$t('t_log_in')"
        @input="form_error = ''"
        @submit="logIn"
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

    <hr class="separator-1">

    <NuxtLink
      to="/a/password-forgotten"
      class="primary-link"
    >{{ $t('t_password_forgotten_question') }}</NuxtLink>
  </UContainer>
</template>
