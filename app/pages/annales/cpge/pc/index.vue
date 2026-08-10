<script setup>
const page_title = 'Annales prépa PC';

let meta_description = 'Les annales de toutes les matières de CPGE PC.';
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
    label: 'PC',
    to: '/annales/cpge/pc',
    url: 'https://fr.notyloops.com/annales/cpge/pc',
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
  <!-- app/pages/annales/cpge/pc/index.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales CPGE PC
    </h1>

    <ul class="list-disc list-inside">
      <li>
        <ULink
          to="/annales/cpge/pc/francais-philosophie"
          class="text-primary"
        >
          Français - Philosophie
        </ULink>
      </li>
      <li>
        <ULink
          to="/annales/cpge/pc/informatique"
          class="text-primary"
        >
          Informatique
        </ULink>
      </li>
      <li>
        LVA :
        <ULink
          class="text-primary"
          to="/annales/cpge/pc/lva-allemand"
        >
          allemand
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/pc/lva-anglais"
        >
          anglais
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/pc/lva-arabe"
        >
          arabe
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/pc/lva-espagnol"
        >
          espagnol
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/pc/lva-italien"
        >
          italien
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/pc/lva-portugais"
        >
          portugais
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/pc/lva-russe"
        >
          russe
        </ULink>
      </li>
      <!-- <li>
        LVB :
        <ULink
          class="text-primary"
          to="/annales/cpge/pc/lvb-allemand"
        >
          allemand
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/pc/lvb-anglais"
        >
          anglais
        </ULink>
        |
        <ULink
          class="text-primary"
          to="/annales/cpge/pc/lvb-espagnol"
        >
          espagnol
        </ULink>
      </li> -->
      <li>
        <ULink
          to="/annales/cpge/pc/mathematiques"
          class="text-primary"
        >
          Mathématiques
        </ULink>
      </li>
      <li>
        <ULink
          to="/annales/cpge/pc/physique-chimie"
          class="text-primary"
        >
          Physique - Chimie
        </ULink>
      </li>
    </ul>
  </UContainer>
</template>
