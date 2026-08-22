<script setup>
const page_title = 'Annales khâgne B/L : option arabe';

let meta_description = 'Les annales de l\'option arabe pour les CPGE littéraires B/L.';
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
    label: 'Khâgne B/L',
    to: '/annales/cpge/khagne-bl',
    url: 'https://fr.notyloops.com/annales/cpge/khagne-bl',
  },
  {
    label: 'Option arabe',
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
  <!-- app/pages/annales/cpge/khagne-bl/option-arabe.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales khâgne B/L : option arabe
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
              ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-option-2025-bl-ens-sujet-arabe.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-option-2025-bl-ens-rapport-arabe.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
            </td>
          </tr>
        </tbody>
      </table>
    </figure>
  </UContainer>
</template>
