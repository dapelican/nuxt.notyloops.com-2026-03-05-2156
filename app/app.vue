<script setup>
useSchema();

const { locale, locales } = useI18n();

const current_language = computed(() => (
  locales.value.find((item) => item.code === locale.value)?.language || locale.value
));

useHead(() => ({
  htmlAttrs: {
    lang: current_language.value,
  },
}));
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
