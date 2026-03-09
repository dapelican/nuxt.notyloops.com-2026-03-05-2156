<script setup>
// http://fr.localhost:2345/a/reset-password/9352e75d-89d7-487d-b8f2-bd7dedce7b0e

import * as z from 'zod';

const { t } = useI18n();

useSeoMeta({
  title: `${t('t_reset_my_password')} | OptiLeague`,
});

const page_error = ref('');

const route = useRoute();

const handling_request_1 = ref(true);

const {
  data: verify_data,
  error: verify_error,
} = await useFetch(`/a/verify-token-to-reset-password/${route.params.token_to_reset_password}`);

if (verify_error.value) {
  const error_message = verify_error.value.data?.error_message;

  switch (error_message) {
    case 'error_invalid_email_token':
      page_error.value = t('t_error_invalid_email_token');
      handling_request_1.value = false;
      break;
    default:
      handleFrontendError(null, error_message);
      break;
  }
}

const email = ref(verify_data.value?.email);

handling_request_1.value = false;

const form_fields = ref([
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

const form_schema = z
  .object({
    password_1: z.string().min(1, t('t_schema_error_empty_string')),
    password_2: z.string().min(1, t('t_schema_error_empty_string')),
  })
  .refine((data) => data.password_1 === data.password_2, {
    message: t('t_schema_error_passwords_do_not_match'),
    path: ['password_2'],
  });

const {
  fetch: refreshSession,
} = useUserSession();

const form_error = ref('');

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
    const error_message = error?.data?.error_message;

    switch (error_message) {
      case 'error_invalid_password':
        form_error.value = t('t_error_invalid_password');
        break;
      default:
        handleFrontendError(error, error_message);
        break;
    }
  } finally {
    handling_request_2.value = false;
  }
};
</script>

<template>
  <UContainer class="centered-max-width-400">
    <LoadingElement v-if="handling_request_1" />

    <UAlert
      v-else-if="!handling_request_1 && page_error"
      color="error"
      :description="page_error"
      icon="i-lucide-info"
    />

    <UPageCard v-else>
      <UAuthForm
        :disabled="handling_request_2"
        :fields="form_fields"
        :loading="handling_request_2"
        :schema="form_schema"
        :submit="{
          class: 'cursor-pointer',
          label: $t('t_reset'),
        }"
        :title="$t('t_reset_my_password')"
        @input="form_error = ''"
        @submit="resetPassword"
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
  </UContainer>
</template>
