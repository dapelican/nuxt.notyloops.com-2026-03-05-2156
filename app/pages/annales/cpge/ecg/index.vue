<script setup>
let meta_description = 'Les annales BCE et Ecricome de toutes les matières de CPGE ECG (voie générale).';
meta_description += ' Les sujets et rapports des dernières années.';

const breadcrumb_items = [
  {
    name: 'Ressources',
    url: 'https://fr.optileague.com/ressources',
  },
  {
    name: 'Annales CPGE ECG',
    url: 'https://fr.optileague.com/ressources/annales-cpge-ecg',
  },
];

const breadcrumb_schema = useBreadcrumbSchema(breadcrumb_items);

useHead({
  title: () => 'Annales CPGE ECG | OptiLeague',
  meta: [
    {
      name: 'description',
      content: () => meta_description,
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(breadcrumb_schema),
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
      > Annales CPGE ECG
    </p>

    <h1>
      Annales CPGE ECG
    </h1>

    <ol>
      <li>
        <NuxtLink
          to="/ressources/annales-cpge-ecg-culture-generale"
          class="pseudo-link"
        >
          Culture générale (dissertation)
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/ressources/annales-cpge-ecg-esh"
          class="pseudo-link"
        >
          Économie, sociologie et histoire du monde contemporain (ESH)
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/ressources/annales-cpge-ecg-hgg"
          class="pseudo-link"
        >
          Histoire, géographie et géopolitique du monde contemporain (HGG)
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/ressources/annales-cpge-ecg-lettres"
          class="pseudo-link"
        >
          Lettres (résumé de texte, étude et synthèse de textes)
        </NuxtLink>
      </li>
      <li>
        LVA :
        <NuxtLink
          to="/ressources/annales-cpge-ecg-lva-allemand"
          class="pseudo-link"
        >
          allemand
        </NuxtLink>
        |
        <NuxtLink
          to="/ressources/annales-cpge-ecg-lva-anglais"
          class="pseudo-link"
        >
          anglais
        </NuxtLink>
        <!-- |
          <NuxtLink to="" class="pseudo-link">
            arabe littéral
          </NuxtLink> -->
        |
        <NuxtLink
          to="/ressources/annales-cpge-ecg-lva-espagnol"
          class="pseudo-link"
        >
          espagnol
        </NuxtLink>
      </li>
      <li>
        LVB :
        <NuxtLink
          to="/ressources/annales-cpge-ecg-lvb-allemand"
          class="pseudo-link"
        >
          allemand
        </NuxtLink>
        |
        <NuxtLink
          to="/ressources/annales-cpge-ecg-lvb-anglais"
          class="pseudo-link"
        >
          anglais
        </NuxtLink>
        |
        <NuxtLink
          to="/ressources/annales-cpge-ecg-lvb-espagnol"
          class="pseudo-link"
        >
          espagnol
        </NuxtLink>
        <!-- |
          <NuxtLink to="" class="pseudo-link">
            italien
          </NuxtLink> -->
      </li>
      <li>
        <NuxtLink
          to="/ressources/annales-cpge-ecg-mathematiques-appliquees"
          class="pseudo-link"
        >
          Mathématiques appliquées
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/ressources/annales-cpge-ecg-mathematiques-approfondies"
          class="pseudo-link"
        >
          Mathématiques appronfondies
        </NuxtLink>
      </li>
    </ol>
  </main>
</template>
