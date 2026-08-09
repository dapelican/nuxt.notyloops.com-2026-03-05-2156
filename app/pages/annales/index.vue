<script setup>
const meta_description = 'Les sujets, rapports et parfois corrigés et bonnes copies des examens et concours francophones.';

useSeoMeta({
  title: 'Annales | NotyLoops',
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
  <!-- app/pages/annales/index.vue -->
  <UContainer class="max-w-xl">
    <h1 class="center">
      Annales
    </h1>

    <ul class="list-disc list-inside mt-8">
      <!-- <li>
        <ULink
          class="text-primary"
          to="/annales/cpge"
        >Classes préparatoires aux grandes écoles (CPGE)</ULink>
      </li> -->
      <li>
        <ULink
          class="text-primary"
          to="/annales/cpge/bcpst"
        >CPGE BCPST</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/annales/cpge/ecg"
        >CPGE ECG</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/annales/cpge/ect"
        >CPGE ECT</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/annales/cpge/mp-option-informatique"
        >CPGE MP option informatique</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/annales/cpge/mp-option-si"
        >CPGE MP option SI</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/annales/cpge/mpi"
        >CPGE MPI</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/annales/cpge/pc"
        >CPGE PC</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/annales/cpge/psi"
        >CPGE PSI</ULink>
      </li>
    </ul>
  </UContainer>
</template>
