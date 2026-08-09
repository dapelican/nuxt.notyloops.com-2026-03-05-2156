<script setup>
const page_title = 'Annales prépa';

let meta_description = 'Les annales des concours pour les classes préparatoires aux grandes écoles (CPGE).';
meta_description += ' Les sujets et rapports des dernières années par classe.';

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
];

useSchema({
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
  <!-- app/pages/annales/cpge/index.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales CPGE
    </h1>

    <ul class="list-disc list-inside ">
      <li>
        <ULink
          class="text-primary"
          to="/annales/cpge/bcpst"
        >BCPST</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/annales/cpge/ecg"
        >ECG</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/annales/cpge/ect"
        >ECT</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/annales/cpge/mp-option-informatique"
        >MP option informatique</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/annales/cpge/mp-option-si"
        >MP option SI</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/annales/cpge/mpi"
        >MPI</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/annales/cpge/pc"
        >PC</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/annales/cpge/psi"
        >PSI</ULink>
      </li>
    </ul>
  </UContainer>
</template>
