<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
});

const { t } = useI18n();

const popup_title = computed(() => {
  if (props.title) {
    return props.title;
  }

  return t('t_limited_feature_title');
});

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
    :title="popup_title"
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
