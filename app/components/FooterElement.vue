<script setup>
const { locale } = useI18n();

const route = useRoute();

const items = [
  ...(locale.value === 'fr'
    ? [
        {
          active: route.path === '/annales',
          label: 'Annales',
          to: '/annales',
        },
      ]
    : []
  ),
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
  <div class="mt-16 mb-4">
    <USeparator
      icon="i-lucide-ellipsis"
      class="h-px"
    />

    <section class="flex justify-center align-center gap-6 flex-wrap mt-4">
      <ULink
        v-for="item in items"
        :key="item.label"
        class="text-sm"
        :target="item.target"
        :to="item.to"
      >
        {{ item.label }}
      </ULink>
    </section>
  </div>
</template>
