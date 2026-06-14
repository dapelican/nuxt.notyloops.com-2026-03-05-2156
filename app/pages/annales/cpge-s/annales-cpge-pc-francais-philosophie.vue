<script setup>
let meta_description = 'Les annales de français-philosophie pour les CPGE PC/PC*.';
meta_description += ' Les thèmes, oeuvres, sujets et rapports des dernières années.';

useHead({
  title: () => 'Annales CPGE PC/PC* : français-philosophie | NotyLoops',
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
        to="/ressources#cpge-pc"
      >
        Ressources CPGE PC/PC*
      </NuxtLink>
      > Annales français-philosophie
    </p>

    <h1>
      Annales CPGE PC/PC* : français-philosophie
    </h1>

    <FrStaticAnnalesCpgeFrancaisPhilosophie />
  </main>
</template>
