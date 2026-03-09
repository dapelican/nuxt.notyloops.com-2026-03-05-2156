<script setup>
const items = [
  {
    label: 'Figma Kit',
    to: 'https://go.nuxt.com/figma-ui',
    target: '_blank',
  },
  {
    label: 'Playground',
    to: 'https://stackblitz.com/edit/nuxt-ui',
    target: '_blank',
  },
  {
    label: 'Releases',
    to: 'https://github.com/nuxt/ui/releases',
    target: '_blank',
  },
];
</script>

<template>
  <!-- FooterElement.vue -->
  <UFooter>
    <template #left>
      <p class="text-muted text-sm">
        Copyright © {{ new Date().getFullYear() }}
      </p>
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
    />
  </UFooter>
</template>
