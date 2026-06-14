<script setup>
const meta_description = 'Les sujets, rapports et bonnes copies des examens et concours francophones.';

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
      <li>
        <ULink
          class="text-primary"
          to="/annales/cpge"
        >Classes préparatoires aux grandes écoles (CPGE)</ULink>
      </li>
    </ul>
  </UContainer>
</template>
