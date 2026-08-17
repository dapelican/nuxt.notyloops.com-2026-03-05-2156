<script setup>
const page_title = 'Annales khâgne A/L LSH : géographie';

let meta_description = 'Les annales de géographie pour les CPGE littéraires LSH.';
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
    label: 'khâgne A/L LSH',
    to: '/annales/cpge/khagne-al-lsh',
    url: 'https://fr.notyloops.com/annales/cpge/khagne-al-lsh',
  },
  {
    label: 'Géographie',
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
  <!-- app/pages/annales/cpge/khagne-al-lsh/geographie.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales khâgne A/L LSH : géographie
    </h1>

    <h2 class="mt-12">
      2027
    </h2>

    <h3>
      Programme
    </h3>

    <p>
      Mobilités et transports urbains dans le monde.
    </p>

    <h2 class="mt-12">
      2026
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Banque d'épreuve
            </th>
            <th>
              Sujet
            </th>
            <th>
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              BCE
            </td>
            <td>
              Mondes indiens et changements globaux.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-geographie-2026-al-lsh-bce-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-geographie-2026-al-lsh-bce-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              BEL
            </td>
            <td>
              Habiter les espaces ruraux dans les mondes indiens.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-geographie-2026-al-lsh-bel-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-geographie-2026-al-lsh-bel-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h3 class="mt-4">
      Programme
    </h3>

    <p>
      Mondes indiens.
    </p>
  </UContainer>
</template>
