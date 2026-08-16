<script setup>
const page_title = 'Utiliser du markdown dans les notes NotyLoops';

const meta_description = 'Utiliser du markdown dans les notes NotyLoops.';

const breadcrumb_items = [
  {
    label: 'Ressources',
    to: '/ressources',
    url: 'https://fr.notyloops.com/ressources',
  },
  {
    label: 'Utiliser du markdown dans les notes NotyLoops',
  },
];

useSchema({
  name: page_title,
  description: meta_description,
  breadcrumb_items,
});

useSeoMeta({
  title: `${page_title} | NotyLoops`,
  description: meta_description,
});

// useGoogleTag();
</script>

<template>
  <!-- app/pages/ressources/markdown.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Utiliser du markdown dans les notes NotyLoops
    </h1>
  </UContainer>
</template>
