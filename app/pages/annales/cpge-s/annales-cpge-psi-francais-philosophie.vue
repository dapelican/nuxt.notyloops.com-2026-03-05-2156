<script setup>
let meta_description = 'Les annales de français-philosophie pour les CPGE PSI/PSI*.';
meta_description += ' Les thèmes, oeuvres, sujets et rapports des dernières années.';

useHead({
  title: () => 'Annales CPGE PSI/PSI* : français-philosophie | OptiLeague',
  meta: [
    {
      name: 'description',
      content: () => meta_description,
    },
  ],
});
</script>

<template>
  <main class="padding-lr centered-max-width-700">
    <p>
      <NuxtLink
        to="/ressources#cpge-psi"
      >
        Ressources CPGE PSI/PSI*
      </NuxtLink>
      > Annales français-philosophie
    </p>

    <h1>
      Annales CPGE PSI/PSI* : français-philosophie
    </h1>

    <FrStaticAnnalesCpgeFrancaisPhilosophie />
  </main>
</template>
