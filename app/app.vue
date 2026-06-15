<script setup>
useSchema();

const i18n_head = useLocaleHead();
const request_url = useRequestURL();
const route = useRoute();

useHead(() => ({
  htmlAttrs: {
    ...i18n_head.value.htmlAttrs,
  },
  link: [
    {
      key: 'canonical',
      rel: 'canonical',
      href: `${request_url.origin}${route.path}`,
    },
    ...(i18n_head.value.link || []),
  ],
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
