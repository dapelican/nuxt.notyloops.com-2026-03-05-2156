<script setup>
const page_title = 'Annales prépa PT : physique - chimie';

let meta_description = 'Les annales de physique - chimie pour les CPGE PT.';
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
    label: 'PT',
    to: '/annales/cpge/pt',
    url: 'https://fr.notyloops.com/annales/cpge/pt',
  },
  {
    label: 'Physique - chimie',
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
  <!-- app/pages/annales/cpge/pt/physique-chimie.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales CPGE PT : physique - chimie
    </h1>

    <h2>
      2026
    </h2>

    <ul class="list-disc list-inside">
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/cpge-physique-chimie-2026-pt-sujet-a.pdf"
          target="_blank"
        >
          Sujet A
        </ULink>
        <!-- |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/cpge-physique-chimie-2026-pt-rapport-a.pdf"
          target="_blank"
        >
          Rapport
        </ULink> -->
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/cpge-physique-chimie-2026-pt-sujet-chimie.pdf"
          target="_blank"
        >
          Sujet chimie
        </ULink>
        <!-- |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/cpge-physique-chimie-2026-pt-rapport-chimie.pdf"
          target="_blank"
        >
          Rapport
        </ULink> -->
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/cpge-physique-chimie-2026-pt-sujet-thermodynamique.pdf"
          target="_blank"
        >
          Sujet thermodynamique
        </ULink>
        <!-- |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/cpge-physique-chimie-2026-pt-rapport-thermodynamique.pdf"
          target="_blank"
        >
          Rapport
        </ULink> -->
      </li>
    </ul>
  </UContainer>
</template>
