<script setup>
import * as z from 'zod';

const { t } = useI18n();

useSeoMeta({
  title: `${t('t_join_waiting_list')} | NotyLoops`,
});

const form_fields = ref([
  {
    label: $t('t_email'),
    name: 'email',
    placeholder: $t('t_enter_your_email'),
    required: true,
    type: 'email',
  },
]);

const form_schema = z.object({
  email: z.email(t('t_schema_error_invalid_email_address')),
});

const form_error = ref('');
const handling_request = ref(false);
const show_success_message = ref(false);

const sendJoinWaitingListEmail = async (form) => {
  handling_request.value = true;

  try {
    // useAsyncData, useFetch or $fetch
    await $fetch('/a/join-waiting-list', {
      method: 'POST',
      body: {
        email: form.data.email,
      },
    });

    show_success_message.value = true;
  } catch (error) {
    const error_message = error?.data?.error_message;

    switch (error_message) {
      case 'error_invalid_email':
        form_error.value = t('t_error_invalid_email');
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
  <UContainer class="centered-max-width-400 mt-10">
    <UPageCard v-if="!show_success_message">
      <UAuthForm
        :disabled="handling_request"
        :fields="form_fields"
        :loading="handling_request"
        :schema="form_schema"
        :submit="{
          class: 'cursor-pointer',
          label: $t('t_join_waiting_list'),
        }"
        :title="$t('t_join_waiting_list')"
        @input="form_error = ''"
        @submit="sendJoinWaitingListEmail"
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
      :description="$t('t_you_are_now_on_the_waiting_list')"
      icon="i-lucide-info"
    />
  </UContainer>
</template>
