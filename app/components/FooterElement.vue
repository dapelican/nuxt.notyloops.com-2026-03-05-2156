<script setup>
const items = [
  {
    label: $t('t_contact'),
    to: '/contact',
  },
  // {
  //   label: 'Figma Kit',
  //   to: 'https://go.nuxt.com/figma-ui',
  //   target: '_blank',
  // },
  // {
  //   label: 'Playground',
  //   to: 'https://stackblitz.com/edit/nuxt-ui',
  //   target: '_blank',
  // },
  // {
  //   label: 'Releases',
  //   to: 'https://github.com/nuxt/ui/releases',
  //   target: '_blank',
  // },
];
</script>

<template>
  <!-- FooterElement.vue -->
  <UFooter>
    <UNavigationMenu
      :items="items"
      variant="link"
    />
  </UFooter>
</template>
