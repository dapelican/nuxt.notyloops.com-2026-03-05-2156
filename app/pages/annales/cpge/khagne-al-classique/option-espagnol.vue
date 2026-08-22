<script setup>
const page_title = 'Annales khâgne A/L classique : option espagnol';

let meta_description = 'Les annales de l\'option espagnol pour les CPGE littéraires A/L classique.';
meta_description += ' Les sujets et rapports des dernières années.';

const breadcrumb_items = [
  {
    label: 'Annales',
    to: '/annales',
    url: 'https://fr.notyloops.com/annales',
  },
  {
    label: 'CPGE',
    to: '/annales/cpge',
    url: 'https://fr.notyloops.com/annales/cpge',
  },
  {
    label: 'Khâgne A/L classique',
    to: '/annales/cpge/khagne-al-classique',
    url: 'https://fr.notyloops.com/annales/cpge/khagne-al-classique',
  },
  {
    label: 'Option espagnol',
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
  <!-- app/pages/annales/cpge/khagne-al-classique/option-espagnol.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales khâgne A/L classique : option espagnol
    </h1>

    <h2 class="mt-12">
      2025
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Banque d'épreuve
            </th>
            <th>
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              BEL
            </td>
            <td>
              Commentaire et thème
              <!-- <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-option-2025-al-classique-bel-sujet-espagnol-commentaire-et-theme.pdf"
                target="_blank"
              >
                Commentaire et thème
              </ULink> -->
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-option-2025-al-classique-bel-rapport-espagnol-commentaire-et-theme.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
              <br>
              Version et thème
              <!-- <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-option-2025-al-classique-bel-sujet-espagnol-version-et-theme.pdf"
                target="_blank"
              >
                Version et thème
              </ULink> -->
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-option-2025-al-classique-bel-rapport-espagnol-version-et-theme.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>
  </UContainer>
</template>
