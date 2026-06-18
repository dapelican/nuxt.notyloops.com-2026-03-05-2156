<script setup>
const page_title = 'Annales CPGE BCPST';

let meta_description = 'Les annales Agro-Véto, ENS et G2E de toutes les matières de CPGE BCPST.';
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
    label: 'BCPST',
    to: '/annales/cpge/bcpst',
    url: 'https://fr.notyloops.com/annales/cpge/bcpst',
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
  <!-- app/pages/annales/cpge/bcpst/index.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales CPGE BCPST
    </h1>

    <ul class="list-disc list-inside">
      <li>
        <NuxtLink
          to="/annales/cpge/bcpst/chimie"
          class="text-primary"
        >
          Chimie
        </NuxtLink>
      </li>
      <!-- <li>
        <NuxtLink
          to="/annales/cpge/bcpst/francais-philosophie"
          class="text-primary"
        >
          Français-philosphie
        </NuxtLink>
      </li> -->
      <!-- <li>
        LVA :
        <NuxtLink
          to="/annales/cpge/bcpst/lva-allemand"
          class="text-primary"
        >
          allemand
        </NuxtLink>
        |
        <NuxtLink
          to="/annales/cpge/bcpst/lva-anglais"
          class="text-primary"
        >
          anglais
        </NuxtLink>
        |
        <NuxtLink
          to="/annales/cpge/bcpst/lva-espagnol"
          class="text-primary"
        >
          espagnol
        </NuxtLink>
      </li> -->
      <!-- <li>
        LVB :
        <NuxtLink
          to="/annales/cpge/bcpst/lvb-allemand"
          class="text-primary"
        >
          allemand
        </NuxtLink>
        |
        <NuxtLink
          to="/annales/cpge/bcpst/lvb-espagnol"
          class="text-primary"
        >
          espagnol
        </NuxtLink>
        |
        <NuxtLink
          to="/annales/cpge/bcpst/lvb-italien"
          class="text-primary"
        >
          italien
        </NuxtLink>
      </li> -->
      <!-- <li>
        <NuxtLink
          to="/annales/cpge/bcpst/mathematiques"
          class="text-primary"
        >
          Mathématiques
        </NuxtLink>
      </li> -->
      <!-- <li>
        <NuxtLink
          to="/annales/cpge/bcpst/physique"
          class="text-primary"
        >
          Physique
        </NuxtLink>
      </li> -->
      <!-- <li>
        <NuxtLink
          to="/annales/cpge/bcpst/svt"
          class="text-primary"
        >
          SVT (sciences de la vie et de la terre)
        </NuxtLink>
      </li> -->
    </ul>
  </UContainer>
</template>
