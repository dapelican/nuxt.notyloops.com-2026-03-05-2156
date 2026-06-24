<script setup>
const page_title = 'Annales prépa ECG';

let meta_description = 'Les annales BCE et Ecricome de toutes les matières de CPGE ECG (voie générale).';
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
    label: 'ECG',
    to: '/annales/cpge/ecg',
    url: 'https://fr.notyloops.com/annales/cpge/ecg',
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
  <!-- app/pages/annales/cpge/ecg/index.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales CPGE ECG
    </h1>

    <ul class="list-disc list-inside">
      <li>
        <ULink
          class="text-primary"
          to="/annales/cpge/ecg/culture-generale"
        >
          Culture générale (dissertation)
        </ULink>
      </li>
      <li>
        <ULink
          to="/annales/cpge/ecg/esh"
          class="text-primary"
        >
          Économie, sociologie et histoire du monde contemporain (ESH)
        </ULink>
      </li>
      <li>
        <ULink
          to="/annales/cpge/ecg/hgg"
          class="text-primary"
        >
          Histoire, géographie et géopolitique du monde contemporain (HGG)
        </ULink>
      </li>
      <li>
        <ULink
          to="/annales/cpge/ecg/lettres"
          class="text-primary"
        >
          Lettres (résumé de texte, étude et synthèse de textes)
        </ULink>
      </li>
      <li>
        LVA :
        <ULink
          to="/annales/cpge/ecg/lva-allemand"
          class="text-primary"
        >
          allemand
        </ULink>
        |
        <ULink
          to="/annales/cpge/ecg/lva-anglais"
          class="text-primary"
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
          to="/annales/cpge/ecg/lva-espagnol"
          class="text-primary"
        >
          espagnol
        </ULink>
      </li>
      <li>
        LVB :
        <ULink
          to="/annales/cpge/ecg/lvb-allemand"
          class="text-primary"
        >
          allemand
        </ULink>
        |
        <ULink
          to="/annales/cpge/ecg/lvb-anglais"
          class="text-primary"
        >
          anglais
        </ULink>
        |
        <ULink
          to="/annales/cpge/ecg/lvb-espagnol"
          class="text-primary"
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
          to="/annales/cpge/ecg/mathematiques-appliquees"
          class="text-primary"
        >
          Mathématiques appliquées
        </ULink>
      </li>
      <li>
        <ULink
          to="/annales/cpge/ecg/mathematiques-approfondies"
          class="text-primary"
        >
          Mathématiques appronfondies
        </ULink>
      </li>
    </ul>
  </UContainer>
</template>
