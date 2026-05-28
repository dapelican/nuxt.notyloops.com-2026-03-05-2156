<script setup>
import {
  EUR_TO_USD_EXCHANGE_RATE,
  PREMIUM_ACCESS_PRE_TAX_AMOUNT_IN_CENTS,
} from '#shared/utils/constants.js';

const props = defineProps({
  extend_premium: {
    type: Boolean,
    default: false,
  },
});

const { locale } = useI18n();

const handling_request = ref(false);

const goToStripeCheckout = async () => {
  if (handling_request.value) {
    return;
  }

  handling_request.value = true;

  try {
    const response = await $fetch('/payments/create-stripe-checkout', {
      body: {
        locale: locale.value,
      },
      method: 'POST',
    });

    if (response.checkout_url) {
      await navigateTo(
        response.checkout_url,
        {
          external: true,
          open: {
            target: '_blank',
          },
        }
      );
    }
  } catch (error) {
    handleFrontendError(error, error?.data?.error_message);
  } finally {
    handling_request.value = false;
  }
};

const text = computed(() => {
  const eur_price = PREMIUM_ACCESS_PRE_TAX_AMOUNT_IN_CENTS / 100;

  let price = '';

  if (locale.value === 'fr') {
    price = `${eur_price} €`;
  } else {
    price = `$ ${Math.ceil(eur_price * EUR_TO_USD_EXCHANGE_RATE)}`;
  }

  return props.extend_premium
    ? `${$t('t_extend_premium')} (${price})`
    : `${$t('t_become_premium')} (${price})`;
});
</script>

<template>
  <!-- BecomePremiumElement.vue -->
  <UButton
    color="primary"
    :label="text"
    :loading="handling_request"
    variant="solid"
    @click="goToStripeCheckout"
  />
</template>
