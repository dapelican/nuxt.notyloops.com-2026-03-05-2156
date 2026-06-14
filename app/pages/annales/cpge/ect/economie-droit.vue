<script setup>
let meta_description = 'Les annales BCE et Ecricome d\'économie et de droit pour les CPGE ECT (voie technologique).';
meta_description += ' Les sujets et rapports des dernières années.';

const breadcrumb_items = [
  {
    name: 'Ressources',
    url: 'https://fr.optileague.com/ressources',
  },
  {
    name: 'Annales CPGE ECT',
    url: 'https://fr.optileague.com/ressources/annales-cpge-ect',
  },
  {
    name: 'Économie et droit',
    url: 'https://fr.optileague.com/ressources/annales-cpge-ect-economie-droit',
  },
];

const breadcrumb_schema = useBreadcrumbSchema(breadcrumb_items);

useHead({
  title: () => 'Annales CPGE ECT : économie et droit | NotyLoops',
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
      >
      <NuxtLink
        to="/ressources/annales-cpge-ect"
      >
        Annales CPGE ECT
      </NuxtLink>
      > Économie et droit
    </p>

    <h1>
      Annales CPGE ECT :
      économie et droit
    </h1>

    <h2>
      2025
    </h2>

    <figure class="ml-0">
      <table>
        <thead>
          <tr>
            <th>
              Épreuve
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
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2025-ect-ecricome-bs-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Essec
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2025-ect-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              South Champagne BS
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2025-ect-south-champagne-bs-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h2>
      2024
    </h2>

    <figure class="ml-0">
      <table>
        <thead>
          <tr>
            <th>
              Épreuve
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
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2024-ect-ecricome-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2024-ect-ecricome-rapport.pdf"
                target="_blank"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Essec
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2024-ect-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2024-ect-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              South Champagne
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2024-ect-south-champagne-bs-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2024-ect-south-champagne-bs-rapport.pdf"
                target="_blank"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h2>
      2023
    </h2>

    <figure class="ml-0">
      <table>
        <thead>
          <tr>
            <th>
              Épreuve
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
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2023-ect-ecricome-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2023-ect-ecricome-rapport.pdf"
                target="_blank"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Essec
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2023-ect-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2023-ect-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              South Champagne
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2023-ect-south-champagne-bs-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2023-ect-south-champagne-bs-rapport.pdf"
                target="_blank"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h2>
      2022
    </h2>

    <figure class="ml-0">
      <table>
        <thead>
          <tr>
            <th>
              Épreuve
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
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2022-ect-ecricome-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2022-ect-ecricome-rapport.pdf"
                target="_blank"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Essec
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2022-ect-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2022-ect-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              South Champagne
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2022-ect-south-champagne-bs-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2022-ect-south-champagne-bs-rapport.pdf"
                target="_blank"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h2>
      2021
    </h2>

    <figure class="ml-0">
      <table>
        <thead>
          <tr>
            <th>
              Épreuve
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
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2021-ect-ecricome-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2021-ect-ecricome-rapport.pdf"
                target="_blank"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Essec
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2021-ect-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2021-ect-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              South Champagne
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2021-ect-south-champagne-bs-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2021-ect-south-champagne-bs-rapport.pdf"
                target="_blank"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h2>
      2020
    </h2>

    <figure class="ml-0">
      <table>
        <thead>
          <tr>
            <th>
              Épreuve
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
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2020-ect-ecricome-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2020-ect-ecricome-rapport.pdf"
                target="_blank"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Essec
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2020-ect-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2020-ect-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              South Champagne
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2020-ect-south-champagne-bs-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2020-ect-south-champagne-bs-rapport.pdf"
                target="_blank"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h2>
      2019
    </h2>

    <figure class="ml-0">
      <table>
        <thead>
          <tr>
            <th>
              Épreuve
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
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2019-ect-ecricome-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2019-ect-ecricome-rapport.pdf"
                target="_blank"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Essec
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2019-ect-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2019-ect-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              South Champagne
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2019-ect-south-champagne-bs-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-economie-droit-2019-ect-south-champagne-bs-rapport.pdf"
                target="_blank"
              >
                Rapport
              </NuxtLink>
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
          <NuxtLink
            to="https://www.concours-bce.com/annales"
            target="_blank"
          >
            Les annales des épreuves écrites BCE
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="https://www.ecricome.org/ecricome-prepa-economie-et-droit/"
            target="_blank"
          >
            Ecricome : l'épreuve d'économie et de droit
          </NuxtLink>
        </li>
      </ul> -->
  </main>
</template>
