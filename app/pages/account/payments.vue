<script setup>
import { DateTime } from 'luxon';

definePageMeta({ middleware: 'auth' });

const { locale, t } = useI18n();
const { formatStoredAmount } = useCurrency();

useSeoMeta({
  title: `${t('t_payments')} | ${WEBSITE_NAME}`,
});

const handling_request_1 = ref(true);

const request_fetch = useRequestFetch();

try {
  await request_fetch('/payments/sync-stripe-subscription', {
    method: 'POST',
  });
} catch {
  // The payments page still shows the subscription stored in the database.
}

// Keep at top level to avoid hydratation issues
const {
  data: user_data,
  error: user_error,
} = await useCurrentUser(USER_FETCH_KEY_ACCOUNT_PAYMENTS);

if (user_error.value) {
  handleFrontendError(null, user_error.value.data?.error_message);
}

const user_status = computed(() => user_data.value?.status);

const subscription_cancel_at_period_end = computed(() => {
  return user_data.value?.subscription_cancel_at_period_end === true;
});

const is_premium_subscription = computed(() => {
  return user_status.value === USER_STATUS_PREMIUM_MONTHLY
    || user_status.value === USER_STATUS_PREMIUM_YEARLY;
});

handling_request_1.value = false;

const route = useRoute();

const account_payment_list_fetch_key = 'fetch-account-payment-list';

const {
  data: payment_data,
  error: payment_error,
} = await useFetch('/payments/list', {
  key: account_payment_list_fetch_key,
});

if (payment_error.value) {
  handleFrontendError(null, payment_error.value.data?.error_message);
}

const payment_list = computed(() => payment_data.value?.payment_list ?? []);

let account_page_is_mounted = false;
let account_refresh_timeout_id = null;

const refreshAccountPayments = () => {
  return refreshNuxtData([
    USER_FETCH_KEY_ACCOUNT_PAYMENTS,
    account_payment_list_fetch_key,
  ]);
};

onMounted(async () => {
  account_page_is_mounted = true;

  if (route.query.checkout !== 'success') {
    return;
  }

  await refreshAccountPayments();

  if (!account_page_is_mounted) {
    return;
  }

  account_refresh_timeout_id = setTimeout(() => {
    refreshAccountPayments();
  }, 2000);
});

onUnmounted(() => {
  account_page_is_mounted = false;

  if (account_refresh_timeout_id !== null) {
    clearTimeout(account_refresh_timeout_id);
  }
});

const formatLocalizedDate = (raw) => {
  if (raw == null || raw === '') {
    return '';
  }

  const dt = DateTime.fromISO(String(raw));

  if (!dt.isValid) {
    return '';
  }

  if (locale.value === 'fr') {
    return dt.setLocale('fr').toFormat('d MMMM yyyy');
  }

  return dt.setLocale('en').toFormat('MMMM d, yyyy');
};

const premium_expiration_date_label = computed(() => {
  return formatLocalizedDate(user_data.value?.premium_status_expiration_date);
});

const formatPaymentAmount = (price_in_cents, payment_currency) => {
  const price_amount = Number(price_in_cents) / 100;

  return formatStoredAmount(price_amount, payment_currency);
};

const paymentTypeLabel = (payment_type) => {
  const key_by_type = {
    collection: 't_payment_type_collection',
    premium_access: 't_payment_type_premium_access',
    premium_monthly: 't_payment_type_premium_monthly',
    premium_notes: 't_payment_type_premium_notes',
    premium_yearly: 't_payment_type_premium_yearly',
  };
  const key = key_by_type[payment_type];

  return key
    ? t(key)
    : payment_type;
};

const payment_table_columns = computed(() => [
  {
    accessorKey: 'date',
    header: t('t_date'),
    enableSorting: false,
    meta: {
      class: {
        th: 'whitespace-nowrap',
        td: 'whitespace-nowrap',
      },
    },
  },
  {
    accessorKey: 'payment_type',
    header: t('t_type'),
    enableSorting: false,
  },
  {
    accessorKey: 'price_in_cents',
    header: t('t_amount'),
    enableSorting: false,
  },
]);

const opening_billing_portal = ref(false);

const openBillingPortal = async () => {
  if (opening_billing_portal.value) {
    return;
  }

  opening_billing_portal.value = true;

  try {
    const response = await $fetch('/payments/create-stripe-billing-portal', {
      body: {
        locale: locale.value,
      },
      method: 'POST',
    });

    if (response.portal_url) {
      await navigateTo(response.portal_url, {
        external: true,
      });
    }
  } catch (error) {
    handleFrontendError(error, error?.data?.error_message);
  } finally {
    opening_billing_portal.value = false;
  }
};
</script>

<template>
  <!-- app/pages/account/payments.vue -->
  <UContainer class="ml-auto mr-auto max-w-xl mt-10">
    <h1 class="mb-8">
      {{ $t('t_payments') }}
    </h1>

    <LoadingElement v-if="handling_request_1" />

    <section
      v-else
      class="max-w-sm"
    >
      <section
        v-if="[USER_STATUS_FREE, USER_STATUS_PENDING].includes(user_status)"
      >
        <p class="mb-4">
          {{ $t('t_free_account') }}
        </p>

        <section class="flex flex-wrap gap-2">
          <BecomePremiumButtonElement billing_interval="month" />
          <BecomePremiumButtonElement billing_interval="year" />
        </section>
      </section>

      <section v-if="is_premium_subscription">
        <template v-if="subscription_cancel_at_period_end">
          <p>
            {{ $t('t_premium_access_until') }} {{ premium_expiration_date_label }}
          </p>
        </template>

        <template v-else>
          <p v-if="user_status === USER_STATUS_PREMIUM_YEARLY">
            {{ $t('t_premium_yearly_account') }}
          </p>

          <p v-else>
            {{ $t('t_premium_monthly_account') }}
          </p>

          <p>
            {{ $t('t_renewal_date_with_colon') }} {{ premium_expiration_date_label }}
          </p>
        </template>

        <section class="mt-4 flex flex-wrap gap-2">
          <UButton
            :disabled="opening_billing_portal"
            :loading="opening_billing_portal"
            variant="outline"
            @click="openBillingPortal"
          >
            {{ $t('t_manage_subscription') }}
          </UButton>
        </section>
      </section>

      <section v-if="user_status === USER_STATUS_PREMIUM">
        <p>
          {{ $t('t_premium_account_until') }} {{ premium_expiration_date_label }}
        </p>
      </section>

      <p v-if="user_status === USER_STATUS_ADMIN">
        {{ $t('t_admin_account') }}
      </p>
    </section>

    <section
      v-if="!handling_request_1 && payment_list.length > 0"
      class="mt-8"
    >
      <h2>
        {{ $t('t_payment_history') }}
      </h2>

      <UTable
        class="mt-4"
        :columns="payment_table_columns"
        :data="payment_list"
        :sorting-options="{ enableSorting: false }"
      >
        <template #date-cell="{ row }">
          {{ formatLocalizedDate(row.original.created_at) }}
        </template>

        <template #payment_type-cell="{ row }">
          {{ paymentTypeLabel(row.original.payment_type) }}
        </template>

        <template #price_in_cents-cell="{ row }">
          {{ formatPaymentAmount(row.original.price_in_cents, row.original.currency) }}
        </template>
      </UTable>
    </section>
  </UContainer>
</template>
