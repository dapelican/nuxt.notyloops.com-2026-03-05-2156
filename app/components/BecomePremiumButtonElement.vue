<script setup>
const props = defineProps({
  billing_interval: {
    type: String,
    required: true,
    validator: (value) => value === 'month' || value === 'year',
  },
});

const { locale } = useI18n();
const { currency } = useCurrency();

const handling_request = ref(false);

const goToStripeCheckout = async () => {
  if (handling_request.value) {
    return;
  }

  handling_request.value = true;

  try {
    const response = await $fetch('/payments/create-stripe-checkout', {
      body: {
        billing_interval: props.billing_interval,
        currency: currency.value,
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
  const price_by_interval = props.billing_interval === 'year'
    ? PREMIUM.YEARLY
    : PREMIUM.MONTHLY;
  const price = price_by_interval[currency.value].text;
  const interval_label = props.billing_interval === 'year'
    ? $t('t_per_year')
    : $t('t_per_month');

  return `${$t('t_become_premium')} (${price} ${interval_label})`;
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
