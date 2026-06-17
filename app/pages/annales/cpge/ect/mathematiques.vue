<script setup>
const page_title = 'Annales CPGE ECT : mathématiques';

let meta_description = 'Les annales BCE et Ecricome de mathématiques pour les CPGE ECT (voie technologique).';
meta_description += ' Les sujets, rapports et corrigés des dernières années.';

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
    label: 'Mathématiques',
    to: '/annales/cpge/ect/mathematiques',
    url: 'https://fr.notyloops.com/annales/cpge/ect/mathematiques',
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
  <UContainer class="max-w-2xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales CPGE ECT :
      mathématiques
    </h1>

    <h2 class="mt-12">
      2026
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
              BSB
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2026-ect-bsb-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2026-ect-bsb-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              Ecricome
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2026-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2026-ect-ecricome-corrige-et-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé et rapport de jury
              </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2026-ect-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2026-ect-escp-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
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
              BSB
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2025-ect-bsb-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2025-ect-bsb-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Ecricome
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2025-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2025-ect-ecricome-corrige-et-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé et rapport de jury
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2025-ect-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2025-ect-escp-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
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
              BSB
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2024-ect-bsb-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2024-ect-bsb-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Ecricome
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2024-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2024-ect-ecricome-corrige-et-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé et rapport de jury
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2024-ect-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2024-ect-escp-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h2 class="mt-12">
      2023 (nouveau programme)
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
              BSB
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2023-ect-bsb-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2023-ect-bsb-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Ecricome
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2023-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2023-ect-ecricome-corrige-et-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé et rapport de jury
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2023-ect-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2023-ect-escp-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
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
              BSB
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2022-ect-bsb-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2022-ect-bsb-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Ecricome
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2022-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2022-ect-ecricome-corrige-et-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé et rapport de jury
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2022-ect-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2022-ect-escp-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
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
              BSB
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2021-ect-bsb-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2021-ect-bsb-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Ecricome
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2021-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2021-ect-ecricome-corrige-et-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé et rapport de jury
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2021-ect-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2021-ect-escp-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
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
              BSB
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2020-ect-bsb-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2020-ect-bsb-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Ecricome
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2020-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2020-ect-ecricome-corrige-et-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé et rapport de jury
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2020-ect-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2020-ect-escp-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
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
              BSB
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2019-ect-bsb-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2019-ect-bsb-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Ecricome
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2019-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2019-ect-ecricome-corrige-et-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé et rapport de jury
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2019-ect-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2019-ect-escp-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h2 class="mt-12">
      2018
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
              BSB
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2018-ect-bsb-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2018-ect-bsb-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Ecricome
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2018-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2018-ect-ecricome-corrige-et-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé et rapport de jury
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2018-ect-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2018-ect-escp-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h2 class="mt-12">
      2017
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
              BSB
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2017-ect-bsb-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Ecricome
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2017-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2017-ect-ecricome-corrige-et-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé et rapport de jury
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2017-ect-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2017-ect-escp-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h2 class="mt-12">
      2016
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
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2016-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2016-ect-ecricome-corrige-et-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé et rapport de jury
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESC Dijon
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2016-ect-esc-dijon-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2016-ect-esc-dijon-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2016-ect-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2016-ect-escp-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h2 class="mt-12">
      2015
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
              ESCP
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2015-ect-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2015-ect-escp-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Inseec
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2015-ect-inseec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2015-ect-inseec-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h2 class="mt-12">
      2014
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
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2014-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2014-ect-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Inseec
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2014-ect-inseec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h2 class="mt-12">
      2013 (nouveau programme)
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
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2013-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESC Chambéry
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2013-ect-esc-chambery-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2013-ect-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h2 class="mt-12">
      2012
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
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2012-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESC Chambéry
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2012-ect-esc-chambery-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2012-ect-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h2 class="mt-12">
      2011
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
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2011-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESC Chambéry
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2011-ect-esc-chambery-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2011-ect-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h2 class="mt-12">
      2010
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
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2010-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESC Chambéry
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2010-ect-esc-chambery-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2010-ect-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h2 class="mt-12">
      2009
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
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2009-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESC Chambéry
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2009-ect-esc-chambery-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2009-ect-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h2 class="mt-12">
      2008
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
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2008-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2008-ect-ecricome-corrige-et-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé et rapport de jury
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESC Chambéry
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2008-ect-esc-chambery-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              HEC - ESCP
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2008-ect-hec-escp-sujet-2.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h2 class="mt-12">
      2007
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
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2007-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2007-ect-ecricome-corrige-et-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé et rapport de jury
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESC Chambéry
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2007-ect-esc-chambery-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              HEC - ESCP
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2007-ect-hec-escp-sujet-2.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h2 class="mt-12">
      2006
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
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2006-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2006-ect-ecricome-corrige-et-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé et rapport de jury
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESC
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2006-ect-esc-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              HEC - ESCP
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2006-ect-hec-escp-sujet-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet 1
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2006-ect-hec-escp-sujet-2.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet 2
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <!-- <h2 class="mt-12">
        2007
      </h2>

      <h2 class="mt-12">
        2006
      </h2>

      <h2 class="mt-12">
        2005 (nouveau programme)
      </h2> -->

    <!-- <h2 class="mt-12">
        Sources
      </h2>

      <ul>
        <li>
          <ULink class="text-primary"
            to="https://www.concours-bce.com/annales"
            target="_blank"
          >
            Les annales des épreuves écrites BCE
          </ULink>
        </li>
        <li>
          <ULink class="text-primary"
            to="https://www.ecricome.org/ecricome-prepa-mathematiques/"
            target="_blank"
          >
            Ecricome : l'épreuve de mathématiques
          </ULink>
        </li>
        <li>
          <ULink class="text-primary"
            to="https://www.education.gouv.fr/bo/21/Special1/ESRS2035788A.htm"
            target="_blank"
          >
            Programme 2023
          </ULink>
        </li>
        <li>
          <ULink class="text-primary"
            to="https://www.education.gouv.fr/pid285/bulletin_officiel.html?pid_bo=29620"
            target="_blank"
          >
            Programme 2013
          </ULink>
        </li>
        <li>
          <ULink class="text-primary"
            to="https://prepa-ect.alexgelin.fr/Annales/"
            target="_blank"
          >
            Page d'Alex Gélin
          </ULink>
        </li>
        <li>
          <ULink class="text-primary"
            to="https://alainguichet.fr/ecs-touchard/wiki/doku.php?id=math:2:sujets"
            target="_blank"
          >
            Page d'Alain Guichet
          </ULink>
        </li>
        <li>
          <ULink class="text-primary"
            to="https://www.lemondeprepa.fr/HEC.html"
            target="_blank"
          >
            LeMondePrépa.Fr
          </ULink>
        </li>
        <li>
          <ULink class="text-primary"
            to="https://www.praqsi.com/mathematiques"
            target="_blank"
          >
            Annales de mathématiques
          </ULink>
        </li>
        <li>
          <ULink class="text-primary"
            to="https://www.hec.edu/fr/epreuves-ecrites/mathematiques"
            target="_blank"
          >
            HEC
          </ULink>
        </li>
      </ul> -->
  </UContainer>
</template>
