<script setup>
const show_popup = ref(false);

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
      <slot name="footer" />
    </template>
  </UModal>
</template>
