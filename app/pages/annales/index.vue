<script setup>
const meta_description = 'Les sujets, rapports et parfois corrigés et bonnes copies des examens et concours francophones.';

useSeoMeta({
  title: 'Annales | NotyLoops',
  description: meta_description,
});

// useGoogleTag();
</script>

<template>
  <!-- app/pages/annales/index.vue -->
  <UContainer class="max-w-xl">
    <h1 class="center">
      Annales
    </h1>

    <h2>
      Belgique
    </h2>

    <ul class="list-disc list-inside">
      <li>
        <ULink
          class="text-primary"
          to="/annales/medecine-dentisterie-wallonie-bruxelles"
        >Concours d'entrée en médecine et dentisterie de Wallonie-Bruxelles</ULink>
      </li>
    </ul>

    <h2 class="mt-12">
      France
    </h2>

    <ul class="list-disc list-inside">
      <li>
        <ULink
          class="text-primary"
          to="/annales/cpge"
        >Classes préparatoires aux grandes écoles (CPGE)</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/annales/tescia"
        >TeSciA</ULink>
      </li>
    </ul>
  </UContainer>
</template>
