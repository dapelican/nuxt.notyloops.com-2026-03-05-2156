<script setup>
const page_title = 'Enrichir son vocabulaire';

let meta_description = 'Comment découvrir de nouveaux mots et les retenir';
meta_description += ' : listes de vocabulaire, synonymes, lecture, répétition espacée et champs lexicaux.';

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
      Comment enrichir son vocabulaire ?
    </h1>

    <p>
      Pour répondre à cette question, nous allons répondre à 2 sous-questions :
    </p>

    <ol class="list-decimal list-inside">
      <li>
        Comment découvrir de nouveaux mots ?
      </li>
      <li>
        Comment retenir ces nouveaux mots ?
      </li>
    </ol>

    <p class="mt-4">
      Pour chacune de ces sous-questions, nous allons détailler différentes techniques possibles,
      de la plus efficace à la moins efficace.
    </p>

    <h2 class="mt-8">
      1. Comment découvrir de nouveaux mots ?
    </h2>

    <ol class="list-inside space-y-4">
      <li>
        <span class="underline">1ère technique</span> :
        en explorant des listes de mots déjà faites.
        Le plus difficile est de trouver de "bonnes listes", c'est-à-dire des listes proposant
        du vocabulaire soutenu ou littéraire, sans être trop spécifique à un domaine ni trop technique.
        C'est une méthode assez "brute", mais c'est la plus rapide
        pour enrichir significativement son vocabulaire.
        A ce titre, vous pouvez utiliser <ULink
          class="text-primary"
          to="/pc/01a070cc-3c7a-7bba-a424-070b4413aab4"
          target="_blank"
        >la liste de mots NotyLoops</ULink>, qui est une liste de flashcards déjà prêtes à l'emploi.
      </li>
      <li>
        <span class="underline">2ème technique</span> :
        en cherchant systématiquement des synonymes et antonymes des mots que l'on connaît déjà.
        De cette façon, on se crée soi-même un champ lexical
        et on apprend de nouveaux mots en liaison avec des mots qui nous sont déjà familiers.
        C'est la technique parfaitement complémentaire à la technique précédente.
        Vous pouvez vous servir de ces <ULink
          class="text-primary"
          to="/ressources/champs-lexicaux"
        >champs lexicaux</ULink> comme point de départ.
      </li>
      <li>
        <span class="underline">3ème technique</span> :
        en lisant (beaucoup). C'est la technique à laquelle on pense en premier car c'est la plus naturelle.
        Idéalement lire beaucoup de romans de la littérature française et des essais.
        Avantage : on découvre les mots dans leurs contextes, employés dans des phrases originales et authentiques,
        qui peuvent servir d'exemples précis et variés.
        Inconvénient : cette technique a un "rendement" bien plus faible que les 2 techniques précédentes,
        dans la mesure où le temps passé à lire pour découvrir de nouveaux mots est bien plus élevé.
      </li>
    </ol>

    <h2 class="mt-8">
      2. Comment retenir ces nouveaux mots ?
    </h2>

    <ol class="list-inside space-y-4">
      <li>
        <span class="underline">1ère technique</span> :
        en se testant à les retrouver à partir de leur sens.
        Pour cela, le plus pratique est d'utiliser la statégie de révision en répétition espacée
        dans une application de <ULink
          class="text-primary"
          to="/"
          target="_blank"
        >flashcards</ULink>.
      </li>
      <li>
        <span class="underline">2ème technique</span> :
        en se forçant à les réutiliser à l'écrit ou à l'oral.
        Technique beaucoup plus difficle à exécuter, car cela présuppose d'avoir
        en mémoire immédiate les mots que l'on souhaite utiliser.
        On peut viser d'en utiliser au mieux quelques-uns par jour.
      </li>
    </ol>
  </UContainer>
</template>
