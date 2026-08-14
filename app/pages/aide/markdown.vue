<script setup>
const page_title = 'Utiliser du markdown dans les notes';

const meta_description = 'Utiliser du markdown dans les notes.';

const breadcrumb_items = [
  {
    label: 'Centre d\'aide',
    to: '/aide',
    url: 'https://fr.notyloops.com/aide',
  },
  {
    label: 'Utiliser du markdown dans les notes',
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
  <!-- app/pages/aide/markdown.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Utiliser du markdown dans les notes
    </h1>
  </UContainer>
</template>
