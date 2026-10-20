<script setup>
import * as z from 'zod';

const { t } = useI18n();

useSeoMeta({
  title: `${t('t_contact')} | ${WEBSITE_NAME}`,
});

const handling_request = ref(false);
const form_error = ref('');
const show_success_message = ref(false);
const turnstile_element = ref(null);
const turnstile_token = ref('');

const contact_form_state = reactive({
  email: '',
  first_name: '',
  message: '',
});

const contact_form_schema = z.object({
  email: z.email(t('t_schema_error_invalid_email_address')),
  first_name: z
    .string(t('t_schema_error_empty_string'))
    .min(1, t('t_schema_error_empty_string')),
  message: z
    .string(t('t_schema_error_empty_string'))
    .min(1, t('t_schema_error_empty_string')),
});

const sendContactMessage = async () => {
  handling_request.value = true;

  try {
    await $fetch('/contact', {
      method: 'POST',
      body: {
        email: contact_form_state.email,
        first_name: contact_form_state.first_name,
        message: contact_form_state.message,
        turnstile_token: turnstile_token.value,
      },
    });

    show_success_message.value = true;
  } catch (error) {
    const error_message = error?.data?.error_message;

    switch (error_message) {
      case 'error_invalid_email':
        form_error.value = t('t_error_invalid_email');
        break;
      case 'error_corrupt_email':
        form_error.value = t('t_error_corrupt_email');
        break;
      case 'error_invalid_turnstile':
        form_error.value = t('t_error_invalid_turnstile');
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
  <UContainer class="ml-auto mr-auto max-w-xl w-full">
    <h1 class="text-center">
      {{ $t('t_contact') }}
    </h1>

    <UAlert
      v-if="show_success_message"
      color="info"
      :description="$t('t_your_message_has_been_sent')"
      icon="i-lucide-info"
    />

    <UForm
      v-else
      class="space-y-4"
      :schema="contact_form_schema"
      :state="contact_form_state"
      @input="form_error = ''"
      @submit="sendContactMessage"
    >
      <UFormField
        :label="$t('t_first_name')"
        name="first_name"
      >
        <UInput
          v-model="contact_form_state.first_name"
          autocomplete="given-name"
          class="w-full"
          :disabled="handling_request"
          :placeholder="$t('t_enter_your_first_name')"
        />
      </UFormField>

      <UFormField
        :label="$t('t_email')"
        name="email"
      >
        <UInput
          v-model="contact_form_state.email"
          autocomplete="email"
          class="w-full"
          :disabled="handling_request"
          :placeholder="$t('t_enter_your_email')"
          type="email"
        />
      </UFormField>

      <UFormField
        :label="$t('t_message')"
        name="message"
      >
        <UTextarea
          v-model="contact_form_state.message"
          autoresize
          class="w-full"
          :disabled="handling_request"
          :placeholder="$t('t_enter_your_message')"
          :rows="6"
        />
      </UFormField>

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

      <nav class="flex-ce-ce-gap-2">
        <UButton
          class="cursor-pointer"
          :disabled="handling_request"
          :loading="handling_request"
          type="submit"
          variant="solid"
        >
          {{ $t('t_submit') }}
        </UButton>
      </nav>
    </UForm>
  </UContainer>
</template>
