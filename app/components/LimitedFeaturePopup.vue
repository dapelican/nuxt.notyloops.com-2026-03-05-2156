<script setup>
const { locale } = useI18n();

const show_popup = ref(false);

const {
  data: user_data,
  error: user_error,
} = await useFetch('/a/user');

if (user_error.value) {
  handleFrontendError(null, user_error.value.data?.error_message);
}

const user_email = ref(user_data.value?.email);
const user_id = ref(user_data.value?.id);

const stripe_payment_link = computed(() => {
  let url = locale.value === 'fr'
    ? 'https://buy.stripe.com/test_aFaeVdb1scYQ2pq4efc3m00'
    : 'https://buy.stripe.com/test_aFaeVdb1scYQ2pq4efc3m00';

  url += `?client_reference_id=${user_id.value}`;
  url += `&prefilled_email=${encodeURIComponent(user_email.value)}`;
  url += '&locale=fr';

  return url;
});

const close = () => {
  show_popup.value = false;
};
</script>

<template>
  <!-- LimitedFeaturePopup.vue -->
  <UModal
    v-model:open="show_popup"
    :close="{
      class: 'cursor-pointer',
      onClick: close,
    }"
    :title="$t('t_limited_feature_title')"
  >
    <slot />

    <template #body>
      <slot name="content" />
    </template>

    <template #footer>
      <div class="limited-feature-popup__footer">
        <UButton
          class="cursor-pointer hover:text-inverted!"
          color="primary"
          :label="$t('t_become_premium')"
          variant="solid"
          :to="stripe_payment_link"
        />
      </div>
    </template>
  </UModal>
</template>

<style scoped>
.limited-feature-popup__footer {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
</style>
