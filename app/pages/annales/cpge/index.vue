<script setup>
const page_title = 'Annales CPGE';

let meta_description = 'Les annales des concours pour les classes préparatoires aux grandes écoles (CPGE).';
meta_description += ' Les sujets et rapports des dernières années par classe.';

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
];

useSchema({
  breadcrumb_items,
});

useSeoMeta({
  title: `${page_title} | NotyLoops`,
  description: meta_description,
});
</script>

<template>
  <!-- app/pages/annales/cpge/index.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales CPGE
    </h1>

    <ul class="list-disc list-inside ">
      <li>
        <ULink
          class="text-primary"
          to="/annales/cpge/bcpst"
        >BCPST</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/annales/cpge/ecg"
        >ECG</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/annales/cpge/ect"
        >ECT</ULink>
      </li>
    </ul>
  </UContainer>
</template>
