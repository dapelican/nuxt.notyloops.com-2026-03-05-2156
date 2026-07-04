<script setup>
const page_title = 'Annales prépa ECT : économie et droit';

let meta_description = 'Les annales BCE et Ecricome d\'économie et de droit pour les CPGE ECT (voie technologique).';
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
    label: 'ECT',
    to: '/annales/cpge/ect',
    url: 'https://fr.notyloops.com/annales/cpge/ect',
  },
  {
    label: 'Économie et droit',
    to: '/annales/cpge/ect/economie-droit',
    url: 'https://fr.notyloops.com/annales/cpge/ect/economie-droit',
  },
];

useSchema({
  name: page_title,
  description: meta_description,
  webpage_type: 'CollectionPage',
  breadcrumb_items,
});

useSeoMeta({
  title: `${page_title} | NotyLoops`,
  description: meta_description,
});
</script>

<template>
  <!-- app/pages/annales/cpge/ect/economie-droit.vue -->
  <UContainer class="max-w-2xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales CPGE ECT :
      économie et droit
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
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Ecricome
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2026-ect-ecricome-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2026-ect-ecricome-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              Essec
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2026-ect-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2026-ect-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              South Champagne BS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2026-ect-south-champagne-bs-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2026-ect-south-champagne-bs-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

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
              Ecricome
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2025-ect-ecricome-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2025-ect-ecricome-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Essec
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2025-ect-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2025-ect-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              South Champagne BS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2025-ect-south-champagne-bs-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2025-ect-south-champagne-bs-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h2 class="mt-12">
      2024
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
              Ecricome
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2024-ect-ecricome-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2024-ect-ecricome-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Essec
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2024-ect-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2024-ect-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              South Champagne
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2024-ect-south-champagne-bs-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2024-ect-south-champagne-bs-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h2 class="mt-12">
      2023
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
              Ecricome
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2023-ect-ecricome-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2023-ect-ecricome-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Essec
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2023-ect-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2023-ect-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              South Champagne
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2023-ect-south-champagne-bs-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2023-ect-south-champagne-bs-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h2 class="mt-12">
      2022
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
              Ecricome
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2022-ect-ecricome-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2022-ect-ecricome-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Essec
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2022-ect-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2022-ect-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              South Champagne
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2022-ect-south-champagne-bs-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2022-ect-south-champagne-bs-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h2 class="mt-12">
      2021
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
              Ecricome
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2021-ect-ecricome-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2021-ect-ecricome-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Essec
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2021-ect-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2021-ect-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              South Champagne
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2021-ect-south-champagne-bs-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2021-ect-south-champagne-bs-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h2 class="mt-12">
      2020
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
              Ecricome
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2020-ect-ecricome-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2020-ect-ecricome-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Essec
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2020-ect-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2020-ect-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              South Champagne
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2020-ect-south-champagne-bs-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2020-ect-south-champagne-bs-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h2 class="mt-12">
      2019
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
              Ecricome
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2019-ect-ecricome-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2019-ect-ecricome-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Essec
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2019-ect-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2019-ect-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              South Champagne
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2019-ect-south-champagne-bs-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-economie-droit-2019-ect-south-champagne-bs-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <!-- <hr class="separator-1">

      <p class="mb-0">
        Sources :
      </p>

      <ul>
        <li>
          <ULink
            class="text-primary"
            to="https://www.concours-bce.com/annales"
            target="_blank"
          >
            Les annales des épreuves écrites BCE
          </ULink>
        </li>
        <li>
          <ULink
            class="text-primary"
            to="https://www.ecricome.org/ecricome-prepa-economie-et-droit/"
            target="_blank"
          >
            Ecricome : l'épreuve d'économie et de droit
          </ULink>
        </li>
      </ul> -->
  </UContainer>
</template>
