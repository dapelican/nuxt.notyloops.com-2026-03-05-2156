<script setup>
const i18n_head = useLocaleHead();

useHead(() => ({
  htmlAttrs: {
    ...i18n_head.value.htmlAttrs,
  },
  link: [...(i18n_head.value.link || [])],
  meta: [...(i18n_head.value.meta || [])],
}));
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
