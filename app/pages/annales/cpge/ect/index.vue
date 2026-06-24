<script setup>
const page_title = 'Annales prépa ECT';

let meta_description = 'Les annales BCE et Ecricome de toutes les matières de CPGE ECT (voie technologique).';
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
    label: 'ECT',
    to: '/annales/cpge/ect',
    url: 'https://fr.notyloops.com/annales/cpge/ect',
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
  <!-- app/pages/annales/cpge/ect/index.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales CPGE ECT
    </h1>

    <ul class="list-disc list-inside">
      <li>
        <ULink
          class="text-primary"
          to="/annales/cpge/ect/culture-generale"
        >
          Culture générale (dissertation)</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/annales/cpge/ect/economie-droit"
        >
          Économie et droit</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/annales/cpge/ect/lettres"
        >
          Lettres (étude et synthèse de textes)</ULink>
      </li>
      <li>
        LVA :
        <ULink
          class="text-primary"
          to="/annales/cpge/ect/lva-allemand"
        >
          allemand
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/ect/lva-anglais"
        >
          anglais
        </ULink>
        <!-- |
        <ULink
          to=""
          class="text-primary"
        >
          arabe littéral
        </ULink> -->
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/ect/lva-espagnol"
        >
          espagnol
        </ULink>
      </li>
      <li>
        LVB :
        <ULink
          class="text-primary"
          to="/annales/cpge/ect/lvb-allemand"
        >
          allemand
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/ect/lvb-anglais"
        >
          anglais
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/ect/lvb-espagnol"
        >
          espagnol
        </ULink>
        <!-- |
        <ULink
          to=""
          class="text-primary"
        >
          italien
        </ULink> -->
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/annales/cpge/ect/management-sciences-de-gestion"
        >
          Management et sciences de gestion
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/annales/cpge/ect/mathematiques"
        >
          Mathématiques</ULink>
      </li>
    </ul>
  </UContainer>
</template>
