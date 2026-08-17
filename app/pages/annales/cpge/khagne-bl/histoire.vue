<script setup>
const page_title = 'Annales khâgne B/L : histoire';

let meta_description = 'Les annales de histoire pour les CPGE littéraires A/L classiques.';
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
    label: 'khâgne B/L',
    to: '/annales/cpge/khagne-bl',
    url: 'https://fr.notyloops.com/annales/cpge/khagne-bl',
  },
  {
    label: 'Histoire',
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
  <!-- app/pages/annales/cpge/khagne-bl/histoire.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales khâgne B/L : histoire
    </h1>

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
              Quel rôle a joué la IVe République dans la modernisation de la
              France ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-histoire-2026-bl-bce-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-histoire-2026-bl-bce-rapport.pdf"
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
              Les Français et les guerres (1870-1995).
            </td>
            <td>
              <!-- <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-histoire-2026-bl-bel-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink> -->
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-histoire-2026-bl-bel-rapport.pdf"
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
