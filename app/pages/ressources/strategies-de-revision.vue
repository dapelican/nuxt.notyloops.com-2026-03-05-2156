<script setup>
const page_title = 'Les stratégies de révision sur NotyLoops';

const meta_description = 'Les stratégies de révision sur NotyLoops.';

const breadcrumb_items = [
  {
    label: 'Ressources',
    to: '/ressources',
    url: 'https://fr.notyloops.com/ressources',
  },
  {
    label: 'Les stratégies de révision sur NotyLoops',
  },
];

useSchema({
  name: page_title,
  description: meta_description,
  breadcrumb_items,
});

useSeoMeta({
  title: `${page_title} | NotyLoops`,
  description: meta_description,
});

// useGoogleTag();
</script>

<template>
  <!-- app/pages/ressources/strategies-de-revision.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Les stratégies de révision
    </h1>

    <p>
      Sur NotyLoops, vous pouvez choisir entre 8 stratégies de révision différentes pour réviser vos notes :
    </p>

    <ol class="list-decimal list-inside mt-4 space-y-4">
      <li>
        <b>Répétition espacée</b>.
        Vos notes vous sont présentées plus ou moins souvent en fonction du score de maîtrise que vous leur attribuez.
        Il y a 2 scores possibles : vous maîtrisez la note ou vous ne la maîtrisez pas.
        Pour la répétition espacée, nous utilisons l'algorithme FSRS (Free Spaced Repetition Scheduler)
        pour déterminer le moment optimal de révision de chaque note.
      </li>
      <li>
        <b>Éphéméride (1 note par jour)</b>.
      </li>
      <li>
        <b>Au hasard</b>.
        A chaque révision, vos notes vous sont présentées au hasard.
      </li>
      <li>
        <b>Par score du plus faible au plus élevé</b>.
        Cela vous permet de réviser en priorité les notes que vous maîtrisez le moins.
      </li>
      <li>
        <b>Par date de dernière révision, de la plus ancienne à la plus récente</b>.
        Cela vous permet de réviser en priorité les notes que vous n'avez pas révisées depuis longtemps.
      </li>
      <li>
        <b>Par date de création, de la plus ancienne à la plus récente</b>.
        Cette ordre est intéressant si vous voulez garder un ordre précis de révision de vos notes,
        basé sur l'ordre dans lequel vous les avez créées.
      </li>
      <li>
        <b>Par ordre lexicographique des titres</b>.
        Cette ordre est intéressant si vous voulez garder un ordre précis de révision de vos notes,
        basé sur le titre des notes.
      </li>
      <li>
        <b>A3</b>, alternativement une des stratégie de révision suivante :
        <ol class="list-decimal list-inside ml-6">
          <li>
            <b>Au hasard</b>.
          </li>
          <li>
            <b>Par score du plus faible au plus élevé</b>.
          </li>
          <li>
            <b>Par date de dernière révision, de la plus ancienne à la plus récente</b>.
          </li>
        </ol>
      </li>
    </ol>
  </UContainer>
</template>
