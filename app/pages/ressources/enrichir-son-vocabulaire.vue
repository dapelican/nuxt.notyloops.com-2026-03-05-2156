<script setup>
const page_title = 'Enrichir son vocabulaire';

const meta_description = 'Enrichir son vocabulaire';

const breadcrumb_items = [
  {
    label: 'Ressources',
    to: '/ressources',
    url: 'https://fr.notyloops.com/ressources',
  },
  {
    label: 'Enrichir son vocabulaire',
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
  <!-- app/pages/ressources/markdown.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Enrichir son vocabulaire
    </h1>

    <h2>
      Comment découvrir de nouveaux mots ?
    </h2>

    <ol>
      <li>
        En explorant des listes de mots.
        En explorant des champs lexicaux déjà faits.
        Le language écrit et parlé: pérorer, galimatias, amphigouri, diatribe, palinodie, antienne, psittacisme, sophisme.
        Le désir : chaste, pudibond, prude, lubrique, lascif, concupiscent.
        L'eau : effluent, lacustre, étiage.
      </li>
      <li>
        En lisant (beaucoup) de livres de la littérature française.
        Avantage : on découvre les mots dans leurs contextes, employés dans des phrases,et on peut avoir des exemples précis et variés.
      </li>
      <li>
        En cherchant systématiquement des synonymes et antonymes des mots que l'on connait déjà.
        De cette façon, on se crée soi-même un champs lexical.
      </li>
    </ol>

    <h2>
      Comment retenir les nouveaux mots ?
    </h2>

    <ol>
      <li>
        En les notant avec leurs sens.
        Outils nécessaires : un dictionnaire en ligne, une application de flashcards (NotyLoops).
      </li>
      <li>
        En se testant à les retrouver à partir de leurs sens.
      </li>
      <li>
        En recréant de mémoire un champs lexical déjà exploré.
      </li>
      <li>
        En se forçant à les utiliser, à l'écrit et à l'oral.
      </li>
    </ol>
  </UContainer>
</template>
