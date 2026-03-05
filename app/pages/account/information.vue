<script setup>
import * as z from 'zod';

definePageMeta({ middleware: 'auth' });

const { t } = useI18n();

useSeoMeta({
  title: `${t('t_my_information')} | OptiLeague`,
});

const handling_request_1 = ref(true);

// Keep at top level to avoid hydratation issues
const {
  data: user_data,
  error: user_error,
} = await useFetch('/a/user');

if (user_error.value) {
  handleFrontendError(null, user_error.value.data?.error_message);
}

const current_email = ref(user_data.value?.email);

handling_request_1.value = false;

// email
const modifying_email = ref(false);

const email_form_state = reactive({
  new_email: '',
});

const email_form_schema = z.object({
  new_email: z.email(),
});

const error_message_email = ref('');

const handling_request_2 = ref(false);

const changeEmail = async (form) => {
  handling_request_2.value = true;

  try {
    await $fetch('/a/change-email', {
      method: 'POST',
      body: {
        current_email: current_email.value,
        new_email: form.data.new_email,
      },
    });

    return navigateTo('/a/log-in');
  } catch (error) {
    const error_code = error?.data?.error_message;

    switch (error_code) {
      case 'error_invalid_email':
        error_message_email.value = t('t_error_invalid_email');
        break;
      case 'error_email_already_in_use':
        error_message_email.value = t('t_error_email_already_in_use');
        break;
      default:
        handleFrontendError(null, error_code);
        break;
    }
  } finally {
    handling_request_2.value = false;
  }
};

const resetEmailForm = () => {
  email_form_state.new_email = '';
  error_message_email.value = '';
  modifying_email.value = false;
};

// password
const show_passwords = ref(false);

const modifying_password = ref(false);

const password_form_state = reactive({
  current_password: '',
  new_password_1: '',
  new_password_2: '',
});

const password_form_schema = z
  .object({
    current_password: z.string().min(1, t('t_password_required')),
    new_password_1: z.string().min(1, t('t_password_required')),
    new_password_2: z.string().min(1, t('t_password_required')),
  })
  .refine((data) => data.new_password_1 === data.new_password_2, {
    message: t('t_passwords_do_not_match'),
    path: ['new_password_2'],
  });

const error_message_password = ref('');

const changePassword = async (form) => {
  handling_request_2.value = true;

  try {
    await $fetch('/a/change-password', {
      method: 'POST',
      body: {
        email: current_email.value,
        current_password: form.data.current_password,
        new_password_1: form.data.new_password_1,
        new_password_2: form.data.new_password_2,
      },
    });

    return navigateTo('/a/log-in');
  } catch (error) {
    const error_code = error?.data?.error_message;

    switch (error_code) {
      case 'error_invalid_password':
        error_message_password.value = t('t_error_invalid_password');
        break;
      case 'error_wrong_credentials':
        error_message_password.value = t('t_error_wrong_credentials');
        break;
      default:
        handleFrontendError(error, error_code);
        break;
    }
  } finally {
    handling_request_2.value = false;
  }
};

const resetPasswordForm = () => {
  password_form_state.current_password = '';
  password_form_state.new_password_1 = '';
  password_form_state.new_password_2 = '';
  error_message_password.value = '';
  modifying_password.value = false;
};
</script>

<template>
  <UContainer class="centered-max-width-400">
    <h1 class="mb-2">
      {{ $t('t_my_information') }}
    </h1>

    <hr class="separator-1">

    <UProgress v-if="handling_request_1" />

    <section v-else>
      <h2>
        {{ $t('t_email') }}
      </h2>

      <section v-if="!modifying_email">
        <p>
          {{ current_email }}
        </p>

        <hr class="separator-1">

        <UButton
          class="cursor-pointer"
          @click="modifying_email = true"
        >
          {{ $t('t_change_email') }}
        </UButton>
      </section>

      <UForm
        v-if="modifying_email"
        :schema="email_form_schema"
        :state="email_form_state"
        class="space-y-4"
        @input="error_message = ''"
        @submit="changeEmail"
      >
        <UFormField
          :label="$t('t_email')"
          name="new_email"
        >
          <UInput
            v-model="email_form_state.new_email"
            :disabled="handling_request_2"
            class="input"
          />
        </UFormField>

        <UAlert
          v-if="error_message_email"
          color="error"
          :description="error_message_email"
          icon="i-lucide-info"
        />

        <nav class="flex-ce-ce-gap-2">
          <UButton
            class="cursor-pointer"
            :disabled="handling_request_2"
            type="button"
            variant="outline"

            @click="resetEmailForm"
          >
            {{ $t('t_cancel') }}
          </UButton>

          <UButton
            class="cursor-pointer"
            :disabled="handling_request_2"
            :loading="handling_request_2"
            type="submit"
            variant="solid"
          >
            {{ $t('t_change') }}
          </UButton>
        </nav>
      </UForm>

      <hr class="separator-2">

      <h2>
        {{ $t('t_password') }}
      </h2>

      <section v-if="!modifying_password">
        <UButton
          class="cursor-pointer"
          @click="modifying_password = true"
        >
          {{ $t('t_change_password') }}
        </UButton>
      </section>

      <UForm
        v-if="modifying_password"
        :schema="password_form_schema"
        :state="password_form_state"
        class="space-y-4"
        @input="error_message_password = ''"
        @submit="changePassword"
      >
        <UFormField
          :label="$t('t_current_password')"
          name="current_password"
        >
          <UInput
            v-model="password_form_state.current_password"
            :disabled="handling_request_2"
            :type="show_passwords ? 'text' : 'password'"
            class="input"
          >
            <template #trailing>
              <UButton
                type="button"
                color="neutral"
                size="sm"
                variant="link"
                :icon="show_passwords ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                @click="show_passwords = !show_passwords"
              />
            </template>
          </UInput>
        </UFormField>

        <UFormField
          :label="$t('t_new_password')"
          name="new_password_1"
        >
          <UInput
            v-model="password_form_state.new_password_1"
            :disabled="handling_request_2"
            :type="show_passwords ? 'text' : 'password'"
            class="input"
          >
            <template #trailing>
              <UButton
                type="button"
                color="neutral"
                size="sm"
                variant="link"
                class="cursor-pointer"
                :icon="show_passwords ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                @click="show_passwords = !show_passwords"
              />
            </template>
          </UInput>
        </UFormField>

        <UFormField
          :label="$t('t_new_password')"
          name="new_password_2"
        >
          <UInput
            v-model="password_form_state.new_password_2"
            :disabled="handling_request_2"
            :type="show_passwords ? 'text' : 'password'"
            class="input"
          >
            <template #trailing>
              <UButton
                type="button"
                color="neutral"
                size="sm"
                variant="link"
                class="cursor-pointer"
                :icon="show_passwords ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                @click="show_passwords = !show_passwords"
              />
            </template>
          </UInput>
        </UFormField>

        <UAlert
          v-if="error_message_password"
          color="error"
          :description="error_message_password"
          icon="i-lucide-info"
        />

        <nav class="flex-ce-ce-gap-2">
          <UButton
            class="cursor-pointer"
            :disabled="handling_request_2"
            variant="outline"
            @click="resetPasswordForm"
          >
            {{ $t('t_cancel') }}
          </UButton>

          <UButton
            class="cursor-pointer"
            :disabled="handling_request_2"
            :loading="handling_request_2"
            type="submit"
          >
            {{ $t('t_change') }}
          </UButton>
        </nav>
      </UForm>
    </section>
  </UContainer>
</template>

<style scoped>
.input {
  width: 100%;
}
</style>
