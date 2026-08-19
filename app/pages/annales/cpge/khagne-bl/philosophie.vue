<script setup>
const page_title = 'Annales khâgne B/L : philosophie';

let meta_description = 'Les annales de philosophie pour les CPGE littéraires B/L.';
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
    label: 'Philosophie',
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
  <!-- app/pages/annales/cpge/khagne-bl/philosophie.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales khâgne B/L : philosophie
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
              La beauté du geste.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2026-bl-bce-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2026-bl-bce-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              ENS
            </td>
            <td>
              Peut-on cesser de croire ?
            </td>
            <td>
              <!-- <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2026-bl-ens-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink> -->
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2026-bl-ens-rapport.pdf"
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
