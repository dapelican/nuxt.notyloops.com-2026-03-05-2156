<script setup>
// http://fr.localhost:2345/a/reset-password/9352e75d-89d7-487d-b8f2-bd7dedce7b0e

import * as z from 'zod';

const { t } = useI18n();

useSeoMeta({
  title: `${t('t_reset_my_password')} | OptiLeague`,
});

const error_message_1 = ref('');

const route = useRoute();

const handling_request_1 = ref(true);

const {
  data: verify_data,
  error: verify_error,
} = await useFetch(`/a/verify-token-to-reset-password/${route.params.token_to_reset_password}`);

if (verify_error.value) {
  const error_code = verify_error.value.data?.error_message;

  switch (error_code) {
    case 'error_invalid_email_token':
      error_message_1.value = t('t_error_invalid_email_token');
      handling_request_1.value = false;
      break;
    default:
      handleFrontendError(null, error_code);
      break;
  }
}

const email = ref(verify_data.value?.email);

handling_request_1.value = false;

const fields = ref([
  {
    disabled: true,
    label: t('t_email'),
    name: 'email',
    placeholder: email.value,
    type: 'email',
  },
  {
    name: 'password_1',
    type: 'password',
    label: $t('t_password'),
    placeholder: $t('t_enter_your_password'),
    required: true,
  },
  {
    name: 'password_2',
    type: 'password',
    label: $t('t_confirm_your_password'),
    placeholder: $t('t_enter_your_password'),
    required: true,
  },
]);

const schema = z
  .object({
    password_1: z.string().min(1, t('t_password_required')),
    password_2: z.string().min(1, t('t_password_required')),
  })
  .refine((data) => data.password_1 === data.password_2, {
    message: t('t_passwords_do_not_match'),
    path: ['password_2'],
  });

const {
  fetch: refreshSession,
} = useUserSession();

const error_message_2 = ref('');

const handling_request_2 = ref(false);

const resetPassword = async (form) => {
  handling_request_2.value = true;

  try {
    await $fetch('/a/sign-up', {
      method: 'POST',
      body: {
        email: email.value,
        password_1: form.data.password_1,
        password_2: form.data.password_2,
      },
    });

    await refreshSession();

    return navigateTo(CONNECTED_USER_LANDING_PAGE);
  } catch (error) {
    const error_code = error?.data?.error_message;

    switch (error_code) {
      case 'error_invalid_password':
        error_message_2.value = t('t_error_invalid_password');
        break;
      default:
        handleFrontendError(error, error_code);
        break;
    }
  } finally {
    handling_request_2.value = false;
  }
};
</script>

<template>
  <UContainer class="centered-max-width-400">
    <UProgress v-if="handling_request_1" />

    <UAlert
      v-else-if="!handling_request_1 && error_message_1"
      color="error"
      :description="error_message_1"
      icon="i-lucide-info"
    />

    <UPageCard v-else>
      <UAuthForm
        :disabled="handling_request_2"
        :fields="fields"
        :loading="handling_request_2"
        :schema
        :submit="{
          class: 'cursor-pointer',
          label: $t('t_reset'),
        }"
        :title="$t('t_reset_my_password')"
        @input="error_message_2 = ''"
        @submit="resetPassword"
      >
        <template #validation>
          <UAlert
            v-if="error_message_2"
            color="error"
            :description="error_message_2"
            icon="i-lucide-info"
          />
        </template>
      </UAuthForm>
    </UPageCard>
  </UContainer>
</template>
