<script setup>
const runtime_config = useRuntimeConfig();
const { locale } = useI18n();

const redirectToSubdomain = (subdomain) => {
  const domain = runtime_config.public.domain;
  const url = `${window.location.protocol}//${subdomain}.${domain}`;

  window.location.assign(url);
};

const language_items = computed(() => [
  [
    {
      active: locale.value === 'en',
      label: 'English',
      onSelect: () => redirectToSubdomain('www'),
    },
    {
      active: locale.value === 'fr',
      label: 'Français',
      onSelect: () => redirectToSubdomain('fr'),
    },
  ],
]);
</script>

<template>
  <UDropdownMenu :items="language_items">
    <UButton
      color="neutral"
      icon="i-lucide-languages"
      variant="ghost"
    />
  </UDropdownMenu>
</template>
