<script setup>
const page_title = 'Apprendre à apprendre';

const meta_description = 'Les meilleures ressources pour apprendre à apprendre.';

const breadcrumb_items = [
  {
    label: 'Ressources',
    to: '/ressources',
    url: 'https://fr.notyloops.com/ressources',
  },
  {
    label: 'Apprendre à apprendre',
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
  <!-- app/pages/ressources/apprendre-a-apprendre.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Apprendre à apprendre
    </h1>

    <p class="mb-4">
      Voici les meilleures ressources pour apprendre à apprendre :
    </p>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <ULink
          to="https://www.coursera.org/learn/learning-how-to-learn"
          target="_blank"
          rel="noopener noreferrer"
          class="text-primary"
        >Learning how to learn</ULink>, de Barbara Oakley.
        Il s'agit d'un cours en ligne gratuit (en anglais) dispensé sur le site Coursera.
        C'est le cours le plus populaire de la plateforme
        et il constitue une bonne introduction à l'apprentissage.
      </li>
      <li>
        <ULink
          to="https://www.amazon.fr/dp/2091845345/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-primary"
        >Comment travailler plus efficacement ?</ULink>
        C'est un excellent livre, avec des témoignagnes d'ancien étudiants de grandes écoles françaises,
        ayant dû passer des concours difficiles (classes préparatoires, l'ancienne ENA).
      </li>
      <li>
        <ULink
          to="https://www.amazon.fr/dp/2091845345/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-primary"
        >Mastery</ULink>, de George Leonard.
        C'est un ouvrage en anglais qui se concentre sur l'aspect mental de l'apprentissage,
        pour ceux qui veulent exceller dans un domaine en particulier.
        Le progès dans n'importe qul domaine n'est jamais linéaire,
        mais est fait de moments d'ascension et de moments de stagnation.
        L'essentiel est de ne jamais abandonner dans les phases de staganation (les plateaux)
        quelque soit le temps que cela dure.
      </li>
      <li>
        <ULink
          to="https://www.amazon.fr/rien-peut-tout-changer/dp/2035969204/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-primary"
        >Un rien peut tout changer</ULink>, de James Clear.
        Un livre référence pour structurer sa vie autour d'habitudes.
        L'idée principale du livre : l'environnement fait tout.
        Si voulez étudier dans les meilleures conditions, faites en sorte d'avoir un enviromment propice :
        environnement matériel mais aussi environnement humain.
      </li>
    </ol>
  </UContainer>
</template>
