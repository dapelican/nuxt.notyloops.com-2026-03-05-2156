<script setup>
const page_title = 'Annales khâgne A/L classique';

let meta_description = 'Les annales de toutes les matières de khâgne A/L classique.';
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
    label: 'Khâgne',
    to: '/annales/cpge/khagne',
    url: 'https://fr.notyloops.com/annales/cpge/khagne',
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
  <!-- app/pages/annales/cpge/khagne/a-l-classique.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales khâgne A/L classique
    </h1>

    <ul class="list-disc list-inside">
      <li>
        <ULink
          class="text-primary"
          to="/annales/cpge/khagne/____"
        >
          Français</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/annales/cpge/khagne/____"
        >
          Histoire</ULink>
      </li>
      <li>
        Langue et culture ancienne :
        <ULink
          class="text-primary"
          to="/annales/cpge/khagne/____"
        >
          grec
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/khagne/____"
        >
          latin
        </ULink>
      </li>
      <li>
        Langue vivante étrangère :
        <ULink
          class="text-primary"
          to="/annales/cpge/khagne/____"
        >
          allemand
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/khagne/____"
        >
          anglais
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/khagne/____"
        >
          arabe
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/khagne/____"
        >
          chinois
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/khagne/____"
        >
          espagnol
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/khagne/____"
        >
          grec moderne
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/khagne/____"
        >
          hébreu
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/khagne/____"
        >
          italien
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/khagne/____"
        >
          japonais
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/khagne/____"
        >
          polonais
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/khagne/____"
        >
          portugais
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/khagne/____"
        >
          russe
        </ULink>
      </li>
      <li>
        Option :
        <ULink
          class="text-primary"
          to="/annales/cpge/khagne/____"
        >
          Option 1
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/khagne/____"
        >
          Option 2
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/annales/cpge/khagne/____"
        >
          Philosophie</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/annales/cpge/ect/lettres"
        >
          Lettres (étude et synthèse de textes)</ULink>
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
