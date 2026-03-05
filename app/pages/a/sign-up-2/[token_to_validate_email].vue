<script setup>
// http://fr.localhost:2345/a/sign-up-2/9352e75d-89d7-487d-b8f2-bd7dedce7b0e

import * as z from 'zod';

const { t } = useI18n();

useSeoMeta({
  title: `${t('t_sign_up_step_2_of_2')} | OptiLeague`,
});

const error_message_1 = ref('');

const route = useRoute();

const handling_request_1 = ref(true);

// Keep at top level to avoid hydratation issues
const {
  data: verify_data,
  error: verify_error,
} = await useFetch(`/a/verify-token-to-validate-email/${route.params.token_to_validate_email}`);

if (verify_error.value) {
  const error_code = verify_error.value.data?.error_message;

  switch (error_code) {
    case 'error_invalid_email_token':
      error_message_1.value = t('t_error_invalid_email_token');
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

const handling_request_2 = ref(true);

const signUp = async (form) => {
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
          label: $t('t_sign_up'),
        }"
        :title="$t('t_sign_up')"
        @input="error_message_2 = ''"
        @submit="signUp"
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
