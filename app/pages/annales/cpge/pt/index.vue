<script setup>
const page_title = 'Annales prépa PT';

let meta_description = 'Les annales de toutes les matières de CPGE PT.';
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
  <!-- app/pages/annales/cpge/pt/index.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales CPGE PT
    </h1>

    <ul class="list-disc list-inside">
      <li>
        <ULink
          to="/annales/cpge/pt/francais-philosophie"
          class="text-primary"
        >
          Français - Philosophie
        </ULink>
      </li>
      <li>
        <ULink
          to="/annales/cpge/pt/informatique-modelisation"
          class="text-primary"
        >
          Informatique et modélisation
        </ULink>
      </li>
      <li>
        LVA :
        <ULink
          class="text-primary"
          to="/annales/cpge/pt/lva-allemand"
        >
          allemand
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/pt/lva-anglais"
        >
          anglais
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/pt/lva-arabe"
        >
          arabe
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/pt/lva-espagnol"
        >
          espagnol
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/pt/lva-italien"
        >
          italien
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/annales/cpge/pt/lvb"
        >
          LVB
        </ULink>
      </li>
      <li>
        <ULink
          to="/annales/cpge/pt/mathematiques"
          class="text-primary"
        >
          Mathématiques
        </ULink>
      </li>
      <li>
        <ULink
          to="/annales/cpge/pt/physique-chimie"
          class="text-primary"
        >
          Physique - chimie
        </ULink>
      </li>
      <li>
        <ULink
          to="/annales/cpge/pt/sciences-industrielles"
          class="text-primary"
        >
          Sciences industrielles
        </ULink>
      </li>
    </ul>
  </UContainer>
</template>
