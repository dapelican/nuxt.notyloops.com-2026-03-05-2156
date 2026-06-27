<script setup>
const meta_description = 'Les sujets, rapports et parfois corrigés et bonnes copiesdes examens et concours francophones.';

useSeoMeta({
  title: 'Annales | NotyLoops',
  description: meta_description,
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
