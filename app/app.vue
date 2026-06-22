<script setup>
useSchema();

const i18n_head = useLocaleHead({ seo: false });
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
  ],
}));
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
