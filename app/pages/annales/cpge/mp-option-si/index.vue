<script setup>
const page_title = 'Annales prépa MP option SI (Sciences de l\'ingénieur)';

let meta_description = 'Les annales de toutes les matières de CPGE MP option SI (Sciences de l\'ingénieur).';
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
    label: 'MP option SI',
    to: '/annales/cpge/mp-option-si',
    url: 'https://fr.notyloops.com/annales/cpge/mp-option-si',
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

useHead({
  script: [
    {
      textContent: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K3HP9GQ2');`,
    },
  ],
  noscript: [
    {
      innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K3HP9GQ2"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      tagPosition: 'bodyOpen',
    },
  ],
});
</script>

<template>
  <!-- app/pages/annales/cpge/mp-option-si/index.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales CPGE MP option SI
    </h1>

    <ul class="list-disc list-inside">
      <li>
        <ULink
          to="/annales/cpge/mp-option-si/francais-philosophie"
          class="text-primary"
        >
          Français - Philosophie
        </ULink>
      </li>
      <li>
        <ULink
          to="/annales/cpge/mp-option-si/informatique"
          class="text-primary"
        >
          Informatique
        </ULink>
      </li>
      <li>
        LVA :
        <ULink
          class="text-primary"
          to="/annales/cpge/mp-option-si/lva-allemand"
        >
          allemand
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/mp-option-si/lva-anglais"
        >
          anglais
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/mp-option-si/lva-arabe"
        >
          arabe
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/mp-option-si/lva-espagnol"
        >
          espagnol
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/mp-option-si/lva-italien"
        >
          italien
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/mp-option-si/lva-portugais"
        >
          portugais
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/mp-option-si/lva-russe"
        >
          russe
        </ULink>
      </li>
      <!-- <li>
        LVB :
        <ULink
          class="text-primary"
          to="/annales/cpge/mp-option-si/lvb-allemand"
        >
          allemand
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/mp-option-si/lvb-anglais"
        >
          anglais
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/mp-option-si/lvb-espagnol"
        >
          espagnol
        </ULink>
      </li> -->
      <li>
        <ULink
          to="/annales/cpge/mp-option-si/mathematiques"
          class="text-primary"
        >
          Mathématiques
        </ULink>
      </li>
      <li>
        <ULink
          to="/annales/cpge/mp-option-si/physique-chimie"
          class="text-primary"
        >
          Physique - Chimie
        </ULink>
      </li>
      <li>
        <ULink
          to="/annales/cpge/mp-option-si/si"
          class="text-primary"
        >
          SI (Sciences de l'ingénieur)
        </ULink>
      </li>
    </ul>
  </UContainer>
</template>
