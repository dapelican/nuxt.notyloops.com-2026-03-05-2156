<script setup>
import * as z from 'zod';
import { DateTime } from 'luxon';

definePageMeta({ middleware: 'auth' });

const {
  clear: clear_user_session,
} = useUserSession();

const { t } = useI18n();

useSeoMeta({
  title: `${t('t_my_information')} | NotyLoops`,
});

const handling_request_1 = ref(true);

// Keep at top level to avoid hydratation issues
const {
  data: user_data,
  error: user_error,
} = await useCurrentUser(USER_FETCH_KEY_ACCOUNT_INFORMATION);

if (user_error.value) {
  return handleFrontendError(null, user_error.value.data?.error_message);
}

if (!user_data.value) {
  return handleFrontendError(null, 'error_unauthorized');
}

const user_status = computed(() => user_data.value?.status);

const current_email = ref(user_data.value.email);

handling_request_1.value = false;

const route = useRoute();

onMounted(async () => {
  if (route.query.checkout === 'success') {
    await refreshNuxtData(USER_FETCH_KEY_ACCOUNT_INFORMATION);
  }
});

const premium_status_expiration_date_fr = computed(() => {
  const raw = user_data.value?.premium_status_expiration_date;

  if (raw == null || raw === '') {
    return '';
  }

  const dt = DateTime.fromISO(String(raw));

  return dt.isValid
    ? dt.setLocale('fr').toFormat('d MMMM yyyy')
    : '';
});

// email
const modifying_email = ref(false);

const email_form_state = reactive({
  new_email: '',
});

const email_form_schema = z.object({
  new_email: z.email(),
});

const email_form_error = ref('');

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
    const error_message = error?.data?.error_message;

    switch (error_message) {
      case 'error_invalid_email':
        email_form_error.value = t('t_error_invalid_email');
        break;
      case 'error_email_already_in_use':
        email_form_error.value = t('t_error_email_already_in_use');
        break;
      default:
        handleFrontendError(null, error_message);
        break;
    }
  } finally {
    handling_request_2.value = false;
  }
};

const resetEmailForm = () => {
  email_form_state.new_email = '';
  email_form_error.value = '';
  modifying_email.value = false;
};

// password
const modifying_password = ref(false);

const password_form_state = reactive({
  current_password: '',
  new_password_1: '',
  new_password_2: '',
});

const password_form_schema = z
  .object({
    current_password: z.string(t('t_schema_error_empty_string'))
      .min(1, t('t_schema_error_empty_string')),
    new_password_1: z.string(t('t_schema_error_empty_string'))
      .min(1, t('t_schema_error_empty_string')),
    new_password_2: z.string(t('t_schema_error_empty_string'))
      .min(1, t('t_schema_error_empty_string')),
  })
  .refine((data) => data.new_password_1 === data.new_password_2, {
    message: t('t_schema_error_passwords_do_not_match'),
    path: ['new_password_2'],
  });

const password_form_error = ref('');

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

    try {
      await $fetch('/a/log-out', { method: 'POST' });
    } finally {
      await clear_user_session();
    }

    return navigateTo('/a/log-in');
  } catch (error) {
    const error_message = error?.data?.error_message;

    switch (error_message) {
      case 'error_invalid_password':
        password_form_error.value = t('t_error_invalid_password');
        break;
      case 'error_wrong_credentials':
        password_form_error.value = t('t_error_wrong_credentials');
        break;
      default:
        handleFrontendError(error, error_message);
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
  password_form_error.value = '';
  modifying_password.value = false;
};
</script>

<template>
  <!-- app/pages/account/information.vue -->
  <UContainer class="centered-max-width-400 mt-10">
    <h1 class="mb-2">
      {{ $t('t_my_information') }}
    </h1>

    <hr class="separator-1">

    <LoadingElement v-if="handling_request_1" />

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
          @click="modifying_email = true"
        >
          {{ $t('t_change_email') }}
        </UButton>
      </section>

      <UForm
        v-if="modifying_email"
        class="space-y-4"
        :schema="email_form_schema"
        :state="email_form_state"
        @input="email_form_error = ''"
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
          v-if="email_form_error"
          color="error"
          :description="email_form_error"
          icon="i-lucide-info"
        />

        <nav class="flex-ce-ce-gap-2">
          <UButton
            :disabled="handling_request_2"
            type="button"
            variant="outline"

            @click="resetEmailForm"
          >
            {{ $t('t_cancel') }}
          </UButton>

          <UButton
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
        @input="password_form_error = ''"
        @submit="changePassword"
      >
        <InputPasswordElement
          v-model="password_form_state.current_password"
          :label="$t('t_current_password')"
          :disabled="handling_request_2"
          name="current_password"
        />

        <InputPasswordElement
          v-model="password_form_state.new_password_1"
          :label="$t('t_new_password')"
          :disabled="handling_request_2"
          name="new_password_1"
        />

        <InputPasswordElement
          v-model="password_form_state.new_password_2"
          :label="$t('t_new_password')"
          :disabled="handling_request_2"
          name="new_password_2"
        />

        <UAlert
          v-if="password_form_error"
          color="error"
          :description="password_form_error"
          icon="i-lucide-info"
        />

        <nav class="flex-ce-ce-gap-2">
          <UButton
            :disabled="handling_request_2"
            variant="outline"
            @click="resetPasswordForm"
          >
            {{ $t('t_cancel') }}
          </UButton>

          <UButton
            :disabled="handling_request_2"
            :loading="handling_request_2"
            type="submit"
          >
            {{ $t('t_change') }}
          </UButton>
        </nav>
      </UForm>

      <hr class="separator-2">

      <h2>
        {{ $t('t_account_type') }}
      </h2>

      <section
        v-if="[USER_STATUS_FREE, USER_STATUS_PENDING].includes(user_status)"
      >
        <p class="mb-4">
          {{ $t('t_free_account') }}
        </p>

        <BecomePremiumButtonElement />
      </section>

      <section
        v-if="user_status === USER_STATUS_PREMIUM"
      >
        <p>
          {{ $t('t_premium_account_until') }} {{ premium_status_expiration_date_fr }}
        </p>

        <BecomePremiumButtonElement
          class="mt-4"
          extend_premium
        />
      </section>

      <p v-if="user_status === USER_STATUS_ADMIN">
        {{ $t('t_admin_account') }}
      </p>
    </section>
  </UContainer>
</template>

<style scoped>
.input {
  width: 100%;
}
</style>
