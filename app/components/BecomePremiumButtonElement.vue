<script setup>
defineProps({
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
</script>

<template>
  <!-- BecomePremiumElement.vue -->
  <UButton
    color="primary"
    :label="extend_premium ? $t('t_extend_premium') : $t('t_become_premium')"
    :loading="handling_request"
    variant="solid"
    @click="goToStripeCheckout"
  />
</template>
