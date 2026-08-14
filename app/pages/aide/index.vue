<script setup>
const meta_description = 'Obtenir de l\'aide pour utiliser NotyLoops. Informations détaillées sur comment créer des notes, des tags, des collections.';

useSeoMeta({
  title: 'Centre d\'aide | NotyLoops',
  description: meta_description,
});

// useGoogleTag();
</script>

<template>
  <!-- app/pages/aide/index.vue -->
  <UContainer class="max-w-xl">
    <h1 class="center">
      Centre d'aide
    </h1>

    <h2>
      Les notes
    </h2>

    <ul class="list-disc list-inside">
      <li>
        <ULink
          class="text-primary"
          to="/aide/markdown"
        >Utiliser du markdown dans les notes</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/aide/langage-informatique"
        >Comment ajouter du langage informatique ?</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/aide/formules-mathematiques"
        >Comment ajouter des formules mathématiques ?</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/aide/formules-mathematiques"
        >Comment créer des notes pour l'apprentissage de langue étrangère ?</ULink>
      </li>
    </ul>

    <h2 class="mt-4">
      Les collections
    </h2>

    <ul class="list-disc list-inside">
      <li>
        <ULink
          class="text-primary"
          to="/aide/selection-des-notes"
        >Comment sélectionner les notes à réviser ?</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/aide/strategies-de-revision"
        >Les stratégies de révision</ULink>
      </li>
    </ul>
  </UContainer>
</template>
