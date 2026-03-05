<script setup>
import * as z from 'zod';

const { t } = useI18n();

useSeoMeta({
  title: `${t('t_log_in')} | OptiLeague`,
});

const fields = ref([
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

const schema = z.object({
  email: z.email(t('t_invalid_email_address')),
  password: z.string().min(1, t('t_password_required')),
});

const error_message = ref('');

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
    const error_code = error?.data?.error_message;

    switch (error_code) {
      case 'error_invalid_email':
        error_message.value = t('t_error_invalid_email');
        break;
      case 'error_invalid_password':
        error_message.value = t('t_error_invalid_password');
        break;
      case 'error_wrong_credentials':
        error_message.value = t('t_error_wrong_credentials');
        break;
      case 'error_account_not_confirmed':
        error_message.value = t('t_error_account_not_confirmed');
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
        :fields="fields"
        :loading="handling_request"
        :schema="schema"
        :submit="{
          class: 'cursor-pointer',
          label: $t('t_log_in'),
        }"
        :title="$t('t_log_in')"
        @input="error_message = ''"
        @submit="logIn"
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

    <hr class="separator-1">

    <NuxtLink
      to="/a/password-forgotten"
      class="primary-link"
    >{{ $t('t_password_forgotten_question') }}</NuxtLink>
  </UContainer>
</template>
