<script setup>
import * as z from 'zod';

const { t } = useI18n();

useSeoMeta({
  title: `${t('t_contact')} | NotyLoops`,
});

const handling_request = ref(false);
const form_error = ref('');
const show_success_message = ref(false);

const contact_form_state = reactive({
  email: '',
  first_name: '',
  message: '',
});

const contact_form_schema = z.object({
  email: z.email(t('t_schema_error_invalid_email_address')),
  first_name: z
    .string({ invalid_type_error: t('t_schema_error_empty_string') })
    .min(1, t('t_schema_error_empty_string')),
  message: z
    .string({ invalid_type_error: t('t_schema_error_empty_string') })
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
  <UContainer class="centered-max-width-650">
    <h1 class="center">
      {{ $t('t_contact_us') }}
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

      <UAlert
        v-if="form_error"
        color="error"
        :description="form_error"
        icon="i-lucide-info"
      />

      <hr class="separator-1">

      <nav class="flex-ce-ce-gap-2">
        <UButton
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
