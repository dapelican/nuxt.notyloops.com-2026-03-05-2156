<script setup>
const page_title = 'Annales khâgne A/L classique : histoire';

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
    label: 'khâgne A/L classique',
    to: '/annales/cpge/khagne-al-classique',
    url: 'https://fr.notyloops.com/annales/cpge/khagne-al-classique',
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
  <!-- app/pages/annales/cpge/khagne-al-classique/histoire.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales khâgne A/L classique : histoire
    </h1>

    <h2 class="mt-12">
      2027
    </h2>

    <h3 class="mt-4">
      Programme
    </h3>

    <p>
      Voter en France de 1848 à 2002.
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
              En quoi la Seconde Guerre mondiale a-t-elle fait évoluer la situation
              économique et politique du Moyen-Orient ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-histoire-2026-al-bce-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-histoire-2026-al-bce-rapport.pdf"
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
              Construire l'État, transformer les sociétés au Moyen-Orient 1920-2011.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-histoire-2026-al-bel-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-histoire-2026-al-bel-rapport.pdf"
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
      La construction des États au Moyen-Orient (1920-2011).
    </p>
  </UContainer>
</template>
