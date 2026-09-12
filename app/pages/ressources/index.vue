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
      Méthodologie
    </h2>

    <ol class="list-decimal list-inside">
      <li>
        <ULink
          class="text-primary"
          to="/ressources/apprendre-a-apprendre"
        >Apprendre à apprendre</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/ressources/flashcards"
        >Pourquoi utiliser absolument les flashcards ?</ULink>
      </li>
    </ol>

    <h2 class="mt-8">
      NotyLoops
    </h2>

    <ul class="list-disc list-inside">
      <li>
        <ULink
          class="text-primary"
          to="/ressources/langues-synthese-vocale"
        >Les langues pour la synthèse vocale sur NotyLoops</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/ressources/strategies-de-revision"
        >Les stratégies de révision sur NotyLoops</ULink>
      </li>
      <li>
        Comment créer des flashcards sur NotyLoops? (vidéo)
        <!-- <ULink
          class="text-primary"
          to="/ressources/markdown"
        >Comment créer des flashcards ? (vidéo)</ULink> -->
      </li>
      <li>
        Utiliser du markdown dans les notes
        <!-- <ULink
          class="text-primary"
          to="/ressources/markdown"
        >Utiliser du markdown dans les notes</ULink> -->
      </li>
      <li>
        Comment ajouter du langage informatique ?
        <!-- <ULink
          class="text-primary"
          to="/ressources/langage-informatique"
        >Comment ajouter du langage informatique ?</ULink> -->
      </li>
      <li>
        Comment ajouter des formules mathématiques ?
        <!-- <ULink
          class="text-primary"
          to="/ressources/formules-mathematiques"
        >Comment ajouter des formules mathématiques ?</ULink> -->
      </li>
      <li>
        Comment créer des flashcards de vocabulaire en langue étrangère ? (vidéo)
        <!-- <ULink
          class="text-primary"
          to="/ressources/formules-mathematiques"
        >Comment créer des notes pour l'apprentissage de langue étrangère ?</ULink> -->
      </li>

      <li>
        Comment sélectionner les notes à réviser ?
        <!-- <ULink
          class="text-primary"
          to="/ressources/selection-des-notes"
        >Comment sélectionner les notes à réviser ?</ULink> -->
      </li>
    </ul>
  </UContainer>
</template>
