<script setup>
const page_title = 'Annales prépa PT : mathématiques';

let meta_description = 'Les annales de mathématiques pour les CPGE PT.';
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
    label: 'Mathématiques',
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
  <!-- app/pages/annales/cpge/pt/mathematiques.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales CPGE PT : mathématiques
    </h1>

    <h2>
      2026
    </h2>

    <ul class="list-disc list-inside">
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/cpge-mathematiques-2026-pt-sujet-a.pdf"
          target="_blank"
        >
          Sujet A
        </ULink>
        <!-- |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/cpge-mathematiques-2026-pt-rapport-a.pdf"
          target="_blank"
        >
          Rapport
        </ULink> -->
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/cpge-mathematiques-2026-pt-sujet-b.pdf"
          target="_blank"
        >
          Sujet B
        </ULink>
        <!-- |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/cpge-mathematiques-2026-pt-rapport-b.pdf"
          target="_blank"
        >
          Rapport
        </ULink> -->
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/cpge-mathematiques-2026-pt-sujet-c.pdf"
          target="_blank"
        >
          Sujet C
        </ULink>
        <!-- |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/cpge-mathematiques-2026-pt-rapport-c.pdf"
          target="_blank"
        >
          Rapport
        </ULink> -->
      </li>
    </ul>
  </UContainer>
</template>
