<script setup>
let meta_description = 'Les annales Agro-Véto, ENS et G2E de toutes les matières de CPGE BCPST.';
meta_description += ' Les sujets et rapports des dernières années.';

useHead({
  title: () => 'Annales CPGE BCPST | NotyLoops',
  meta: [
    {
      name: 'description',
      content: () => meta_description,
    },
  ],
});
</script>

<template>
  <main class="padding-lr centered-max-width-650">
    <p>
      <NuxtLink
        to="/ressources"
      >
        Ressources
      </NuxtLink>
      > Annales CPGE BCPST
    </p>

    <h1>
      Annales CPGE BCPST
    </h1>

    <ol>
      <li>
        <NuxtLink
          to="/ressources/annales-cpge-bcpst-chimie"
          class="pseudo-link"
        >
          Chimie
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/ressources/annales-cpge-bcpst-francais-philosophie"
          class="pseudo-link"
        >
          Français-philosphie
        </NuxtLink>
      </li>
      <li>
        LVA :
        <NuxtLink
          to="/ressources/annales-cpge-bcpst-lva-allemand"
          class="pseudo-link"
        >
          allemand
        </NuxtLink>
        |
        <NuxtLink
          to="/ressources/annales-cpge-bcpst-lva-anglais"
          class="pseudo-link"
        >
          anglais
        </NuxtLink>
        |
        <NuxtLink
          to="/ressources/annales-cpge-bcpst-lva-espagnol"
          class="pseudo-link"
        >
          espagnol
        </NuxtLink>
      </li>
      <li>
        LVB :
        <NuxtLink
          to="/ressources/annales-cpge-bcpst-lvb-allemand"
          class="pseudo-link"
        >
          allemand
        </NuxtLink>
        |
        <NuxtLink
          to="/ressources/annales-cpge-bcpst-lvb-espagnol"
          class="pseudo-link"
        >
          espagnol
        </NuxtLink>
        |
        <NuxtLink
          to="/ressources/annales-cpge-bcpst-lvb-italien"
          class="pseudo-link"
        >
          italien
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/ressources/annales-cpge-bcpst-mathematiques"
          class="pseudo-link"
        >
          Mathématiques
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/ressources/annales-cpge-bcpst-physique"
          class="pseudo-link"
        >
          Physique
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/ressources/annales-cpge-bcpst-svt"
          class="pseudo-link"
        >
          SVT (sciences de la vie et de la terre)
        </NuxtLink>
      </li>
    </ol>
  </main>
</template>
