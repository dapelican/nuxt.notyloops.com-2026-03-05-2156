<script setup>
const page_title = 'Annales prépa TSI';

let meta_description = 'Les annales de toutes les matières de CPGE TSI.';
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
    label: 'TSI',
    to: '/annales/cpge/tsi',
    url: 'https://fr.notyloops.com/annales/cpge/tsi',
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
  <!-- app/pages/annales/cpge/tsi/index.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales CPGE TSI
    </h1>

    <ul class="list-disc list-inside">
      <li>
        <ULink
          to="/annales/cpge/tsi/francais-philosophie"
          class="text-primary"
        >
          Français - Philosophie
        </ULink>
      </li>
      <li>
        <ULink
          to="/annales/cpge/tsi/informatique"
          class="text-primary"
        >
          Informatique
        </ULink>
      </li>
      <li>
        LVA :
        <ULink
          class="text-primary"
          to="/annales/cpge/tsi/lva-allemand"
        >
          allemand
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/tsi/lva-anglais"
        >
          anglais
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/tsi/lva-arabe"
        >
          arabe
        </ULink>
        <!-- |
        <ULink
          class="text-primary"
          to="/annales/cpge/tsi/lva-espagnol"
        >
          espagnol
        </ULink> -->
        <!-- |
        <ULink
          class="text-primary"
          to="/annales/cpge/tsi/lva-italien"
        >
          italien
        </ULink> -->
        <!-- |
        <ULink
          class="text-primary"
          to="/annales/cpge/tsi/lva-portugais"
        >
          portugais
        </ULink> -->
        <!-- |
        <ULink
          class="text-primary"
          to="/annales/cpge/tsi/lva-russe"
        >
          russe
        </ULink> -->
      </li>
      <!-- <li>
        LVB :
        <ULink
          class="text-primary"
          to="/annales/cpge/tsi/lvb-allemand"
        >
          allemand
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/tsi/lvb-anglais"
        >
          anglais
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/tsi/lvb-espagnol"
        >
          espagnol
        </ULink>
      </li> -->
      <!-- <li>
        <ULink
          to="/annales/cpge/tsi/mathematiques"
          class="text-primary"
        >
          Mathématiques
        </ULink>
      </li> -->
      <!-- <li>
        <ULink
          to="/annales/cpge/tsi/modelisation"
          class="text-primary"
        >
          Modélisation
        </ULink>
      </li> -->
      <!-- <li>
        <ULink
          to="/annales/cpge/tsi/physique-chimie"
          class="text-primary"
        >
          Physique - Chimie
        </ULink>
      </li> -->
      <!-- <li>
        <ULink
          to="/annales/cpge/tsi/si"
          class="text-primary"
        >
          SI
        </ULink>
      </li> -->
    </ul>
  </UContainer>
</template>
