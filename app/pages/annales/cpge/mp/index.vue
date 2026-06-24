<script setup>
const page_title = 'Annales prépa MP';

let meta_description = 'Les annales BCE et Ecricome de toutes les matières de CPGE MP (voie générale).';
meta_description += ' Les sujets et rapports des dernières années.';

const breadcrumb_items = [
  {
    label: 'Annales',
    to: '/annales',
    url: 'https://fr.notyloops.com/annales',
  },
  {
    label: 'CPGE',
    to: '/annales/cpge',
    url: 'https://fr.notyloops.com/annales/cpge',
  },
  {
    label: 'MP',
    to: '/annales/cpge/mp',
    url: 'https://fr.notyloops.com/annales/cpge/mp',
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
</script>

<template>
  <!-- app/pages/annales/cpge/mp/index.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales CPGE MP
    </h1>

    <ul class="list-disc list-inside">
      <li>
        <ULink
          to="/annales/cpge/mp/francais-philosophie"
          class="text-primary"
        >
          Français-philosophie
        </ULink>
      </li>
    </ul>
  </UContainer>
</template>
