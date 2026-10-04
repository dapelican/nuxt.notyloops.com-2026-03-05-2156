<script setup>
const { t } = useI18n();

useSeoMeta({
  title: `${t('t_confirm_email_change')} | NotyLoops`,
});

const route = useRoute();

const toast = useToast();

const {
  clear: clear_user_session,
} = useUserSession();

const page_error = ref('');

const handling_request_1 = ref(true);

const {
  data: verify_data,
  error: verify_error,
} = await useFetch(`/a/verify-token-to-confirm-email-change/${route.params.token}`);

if (verify_error.value) {
  const error_message = verify_error.value.data?.error_message;

  switch (error_message) {
    case 'error_invalid_email_token':
      page_error.value = t('t_error_invalid_email_token');
      break;
    default:
      handleFrontendError(null, error_message);
      break;
  }
}

const pending_email = ref(verify_data.value?.pending_email);

handling_request_1.value = false;

const handling_request_2 = ref(false);

const confirmEmailChange = async () => {
  handling_request_2.value = true;

  try {
    await $fetch('/a/confirm-email-change', {
      method: 'POST',
      body: {
        token: route.params.token,
      },
    });

    toast.add({
      color: 'success',
      description: t('t_email_change_confirmed'),
      icon: 'i-lucide-info',
    });

    await clear_user_session();

    await navigateTo('/a/log-in');
  } catch (error) {
    const error_message = error?.data?.error_message;

    switch (error_message) {
      case 'error_invalid_email_token':
        toast.add({
          color: 'error',
          description: t('t_error_invalid_email_token'),
          icon: 'i-lucide-info',
        });
        break;
      case 'error_email_already_in_use':
        toast.add({
          color: 'error',
          description: t('t_error_email_already_in_use'),
          icon: 'i-lucide-info',
        });
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
  <UContainer class="centered-max-width-650 mt-10">
    <LoadingElement v-if="handling_request_1" />

    <UAlert
      v-else-if="page_error"
      color="error"
      :description="page_error"
      icon="i-lucide-info"
    />

    <UPageCard v-else>
      <h1 class="mb-4">
        {{ $t('t_confirm_email_change') }}
      </h1>

      <p class="mb-4">
        {{ $t('t_confirm_email_change_description', { email: pending_email }) }}
      </p>

      <UButton
        class="justify-center"
        :disabled="handling_request_2"
        :loading="handling_request_2"
        @click="confirmEmailChange"
      >
        {{ $t('t_confirm_email_address') }}
      </UButton>
    </UPageCard>
  </UContainer>
</template>
