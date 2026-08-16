<script setup>
const meta_description = 'Ressources.';

useSeoMeta({
  title: 'Ressources | NotyLoops',
  description: meta_description,
});

// useGoogleTag();
</script>

<template>
  <!-- app/pages/ressources/index.vue -->
  <UContainer class="max-w-xl">
    <h1 class="center">
      Ressources
    </h1>

    <h2>
      Méthodologie pour apprendre, réviser, mémoriser
    </h2>

    <ul class="list-disc list-inside">
      <li>
        <ULink
          class="text-primary"
          to="/ressources/flashcards"
        >Pourquoi utiliser absolument les flashcards ?</ULink>
      </li>
    </ul>

    <h2 class="mt-8">
      Utiliser NotyLoops
    </h2>

    <h3>
      Les notes
    </h3>

    <ul class="list-disc list-inside">
      <li>
        <ULink
          class="text-primary"
          to="/ressources/markdown"
        >Utiliser du markdown dans les notes</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/ressources/langage-informatique"
        >Comment ajouter du langage informatique ?</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/ressources/formules-mathematiques"
        >Comment ajouter des formules mathématiques ?</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/ressources/formules-mathematiques"
        >Comment créer des notes pour l'apprentissage de langue étrangère ?</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/ressources/synthese-vocale"
        >Les langues disponibles pour la synthèse vocale</ULink>
      </li>
    </ul>

    <h3 class="mt-8">
      Les collections
    </h3>

    <ul class="list-disc list-inside">
      <li>
        <ULink
          class="text-primary"
          to="/ressources/selection-des-notes"
        >Comment sélectionner les notes à réviser ?</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/ressources/strategies-de-revision"
        >Les stratégies de révision</ULink>
      </li>
    </ul>
  </UContainer>
</template>
