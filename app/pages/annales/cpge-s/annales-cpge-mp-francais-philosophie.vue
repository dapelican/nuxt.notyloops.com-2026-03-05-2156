<script setup>
let meta_description = 'Les annales de Français - Philosophie pour les CPGE MP/MP*.';
meta_description += ' Les thèmes, oeuvres, sujets et rapports des dernières années.';

useSeoMeta({
  title: 'Annales CPGE MP/MP* : Français - Philosophie | NotyLoops',
  description: meta_description,
});
</script>

<template>
  <main class="padding-lr centered-max-width-700">
    <p>
      <NuxtLink
        to="/ressources#cpge-mp"
      >
        Ressources CPGE MP/MP*
      </NuxtLink>
      > Annales Français - Philosophie
    </p>

    <h1>
      Annales CPGE MP/MP* : Français - Philosophie
    </h1>

    <FrStaticAnnalesCpgeFrancaisPhilosophie />
  </main>
</template>
