<script setup>
const page_title = 'Annales khâgne B/L';

let meta_description = 'Les annales de toutes les matières de prépas littéraires B/L.';
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
    label: 'Khâgne B/L',
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
  <!-- app/pages/annales/cpge/khagne-bl/index.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales khâgne B/L
    </h1>

    <ul class="list-disc list-inside">
      <li>
        <ULink
          to="/annales/cpge/khagne-bl/francais"
          class="text-primary"
        >
          Français
        </ULink>
      </li>
      <li>
        <ULink
          to="/annales/cpge/khagne-bl/histoire"
          class="text-primary"
        >
          Histoire
        </ULink>
      </li>
      <li>
        Langue B (BCE) :
        <ULink
          to="/annales/cpge/khagne-bl/lb-allemand"
          class="text-primary"
        >
          allemand
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-bl/lb-anglais"
          class="text-primary"
        >
          anglais
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-bl/lb-arabe"
          class="text-primary"
        >
          arabe
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-bl/lb-chinois"
          class="text-primary"
        >
          chinois
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-bl/lb-espagnol"
          class="text-primary"
        >
          espagnol
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-bl/lb-grec-ancien"
          class="text-primary"
        >
          grec ancien
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-bl/lb-italien"
          class="text-primary"
        >
          italien
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-bl/lb-japonais"
          class="text-primary"
        >
          japonais
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-bl/lb-latin"
          class="text-primary"
        >
          latin
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-bl/lb-polonais"
          class="text-primary"
        >
          polonais
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-bl/lb-portugais"
          class="text-primary"
        >
          portugais
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-bl/lb-russe"
          class="text-primary"
        >
          russe
        </ULink>
      </li>
      <li>
        Langue vivante étrangère :
        <ULink
          to="/annales/cpge/khagne-bl/lve-allemand"
          class="text-primary"
        >
          allemand
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-bl/lve-anglais"
          class="text-primary"
        >
          anglais
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-bl/lve-espagnol"
          class="text-primary"
        >
          espagnol
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-bl/lve-italien"
          class="text-primary"
        >
          italien
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-bl/lve-russe"
          class="text-primary"
        >
          russe
        </ULink>
      </li>
      <li>
        <ULink
          to="/annales/cpge/khagne-bl/mathematiques"
          class="text-primary"
        >
          Mathématiques
        </ULink>
      </li>
      <li>
        Option :
        <ULink
          to="/annales/cpge/khagne-bl/option-allemand"
          class="text-primary"
        >
          allemand
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-bl/option-anglais"
          class="text-primary"
        >
          anglais
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-bl/option-arabe"
          class="text-primary"
        >
          arabe
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-bl/option-chinois"
          class="text-primary"
        >
          chinois
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-bl/option-espagnol"
          class="text-primary"
        >
          espagnol
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-bl/option-geographie"
          class="text-primary"
        >
          géographie
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-bl/option-grec"
          class="text-primary"
        >
          grec
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-bl/option-hebreu"
          class="text-primary"
        >
          hébreu
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-bl/option-italien"
          class="text-primary"
        >
          italien
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-bl/option-latin"
          class="text-primary"
        >
          latin
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-bl/option-russe"
          class="text-primary"
        >
          russe
        </ULink>
      </li>
      <li>
        <ULink
          to="/annales/cpge/khagne-bl/philosophie"
          class="text-primary"
        >
          Philosophie
        </ULink>
      </li>
      <li>
        <ULink
          to="/annales/cpge/khagne-bl/sciences-sociales"
          class="text-primary"
        >
          Sciences sociales
        </ULink>
      </li>
    </ul>
  </UContainer>
</template>
