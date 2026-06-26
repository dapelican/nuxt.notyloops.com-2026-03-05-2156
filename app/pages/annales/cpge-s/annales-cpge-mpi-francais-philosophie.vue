<script setup>
let meta_description = 'Les annales de Français - Philosophie pour les CPGE MPI/MPI*.';
meta_description += ' Les thèmes, oeuvres, sujets et rapports des dernières années.';

useSeoMeta({
  title: 'Annales CPGE MPI/MPI* : Français - Philosophie | NotyLoops',
  description: meta_description,
});
</script>

<template>
  <main class="padding-lr centered-max-width-700">
    <p>
      <NuxtLink
        to="/ressources#cpge-mpi"
      >
        Ressources CPGE MPI/MPI*
      </NuxtLink>
      > Annales Français - Philosophie
    </p>

    <h1>
      Annales CPGE MPI/MPI* : Français - Philosophie
    </h1>

    <FrStaticAnnalesCpgeFrancaisPhilosophie />
  </main>
</template>
