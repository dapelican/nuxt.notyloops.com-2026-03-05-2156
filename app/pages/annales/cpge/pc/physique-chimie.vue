<script setup>
const page_title = 'Annales prépa PC : physique - chimie';

let meta_description = 'Les annales de physique - chimie pour les CPGE PC.';
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
    label: 'PC',
    to: '/annales/cpge/pc',
    url: 'https://fr.notyloops.com/annales/cpge/pc',
  },
  {
    label: 'Physique - Chimie',
    to: '/annales/cpge/pc/physique-chimie',
    url: 'https://fr.notyloops.com/annales/cpge/pc/physique-chimie',
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
</script>

<template>
  <!-- app/pages/annales/cpge/pc/physique-chimie.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales CPGE PC : physique - chimie
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
              X / ESPCI
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2026-pc-x-espci-sujet-physique-a.pdf"
                target="_blank"
              >
                Sujet physique A
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2026-pc-x-espci-rapport-physique-a.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              X / ESPCI / ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2026-pc-x-espci-ens-sujet-physique-b.pdf"
                target="_blank"
              >
                Sujet physique B
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2026-pc-x-espci-ens-rapport-physique-b.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2026-pc-x-espci-ens-sujet-chimie-a.pdf"
                target="_blank"
              >
                Sujet chimie A
              </ULink>
            <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2026-pc-x-espci-ens-rapport-chimie-a.pdf"
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
              X / ESPCI
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2025-pc-x-espci-sujet-physique-a.pdf"
                target="_blank"
              >
                Sujet physique A
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2025-pc-x-espci-rapport-physique-a.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              X / ESPCI / ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2025-pc-x-espci-ens-sujet-physique-b.pdf"
                target="_blank"
              >
                Sujet physique B
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2025-pc-x-espci-ens-rapport-physique-b.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2025-pc-x-espci-ens-sujet-chimie-a.pdf"
                target="_blank"
              >
                Sujet chimie A
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2025-pc-x-espci-ens-rapport-chimie-a.pdf"
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
              X / ESPCI
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2024-pc-x-espci-sujet-physique-a.pdf"
                target="_blank"
              >
                Sujet physique A
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2024-pc-x-espci-rapport-physique-a.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              X / ESPCI / ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2024-pc-x-espci-ens-sujet-physique-b.pdf"
                target="_blank"
              >
                Sujet physique B
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2024-pc-x-espci-ens-rapport-physique-b.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2024-pc-x-espci-ens-sujet-chimie-a.pdf"
                target="_blank"
              >
                Sujet chimie A
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2024-pc-x-espci-ens-rapport-chimie-a.pdf"
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
              X / ESPCI
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2023-pc-x-espci-sujet-physique-a.pdf"
                target="_blank"
              >
                Sujet physique A
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2023-pc-x-espci-rapport-physique-a.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              X / ESPCI / ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2023-pc-x-espci-ens-sujet-physique-b.pdf"
                target="_blank"
              >
                Sujet physique B
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2023-pc-x-espci-ens-rapport-physique-b.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2023-pc-x-espci-ens-sujet-chimie-a.pdf"
                target="_blank"
              >
                Sujet chimie A
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2023-pc-x-espci-ens-rapport-chimie-a.pdf"
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
              X / ESPCI
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2022-pc-x-espci-sujet-physique-a.pdf"
                target="_blank"
              >
                Sujet physique A
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2022-pc-x-espci-rapport-physique-a.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              X / ESPCI / ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2022-pc-x-espci-ens-sujet-physique-b.pdf"
                target="_blank"
              >
                Sujet physique B
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2022-pc-x-espci-ens-rapport-physique-b.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2022-pc-x-espci-ens-sujet-chimie-a.pdf"
                target="_blank"
              >
                Sujet chimie A
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2022-pc-x-espci-ens-rapport-chimie-a.pdf"
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
              X / ESPCI
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2021-pc-x-espci-sujet-physique-a.pdf"
                target="_blank"
              >
                Sujet physique A
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2021-pc-x-espci-rapport-physique-a.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              X / ESPCI / ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2021-pc-x-espci-ens-sujet-physique-b.pdf"
                target="_blank"
              >
                Sujet physique B
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2021-pc-x-espci-ens-rapport-physique-b.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2021-pc-x-espci-ens-sujet-chimie-a.pdf"
                target="_blank"
              >
                Sujet chimie A
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2021-pc-x-espci-ens-rapport-chimie-a.pdf"
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
              X / ESPCI
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2020-pc-x-espci-sujet-physique-a.pdf"
                target="_blank"
              >
                Sujet physique A
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2020-pc-x-espci-rapport-physique-a.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              X / ESPCI / ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2020-pc-x-espci-ens-sujet-physique-b.pdf"
                target="_blank"
              >
                Sujet physique B
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2020-pc-x-espci-ens-rapport-physique-b.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2020-pc-x-espci-ens-sujet-chimie-a.pdf"
                target="_blank"
              >
                Sujet chimie A
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2020-pc-x-espci-ens-rapport-chimie-a.pdf"
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
              X / ESPCI
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2019-pc-x-espci-sujet-physique-a.pdf"
                target="_blank"
              >
                Sujet physique A
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2019-pc-x-espci-rapport-physique-a.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              X / ESPCI / ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2019-pc-x-espci-ens-sujet-physique-b.pdf"
                target="_blank"
              >
                Sujet physique B
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2019-pc-x-espci-ens-rapport-physique-b.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2019-pc-x-espci-ens-sujet-chimie-a.pdf"
                target="_blank"
              >
                Sujet chimie A
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2019-pc-x-espci-ens-rapport-chimie-a.pdf"
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
      2018
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
              X / ESPCI
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2018-pc-x-espci-sujet-physique-a.pdf"
                target="_blank"
              >
                Sujet physique A
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2018-pc-x-espci-rapport-physique-a.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              X / ESPCI / ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2018-pc-x-espci-ens-sujet-physique-b.pdf"
                target="_blank"
              >
                Sujet physique B
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2018-pc-x-espci-ens-rapport-physique-b.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2018-pc-x-espci-ens-sujet-chimie-a.pdf"
                target="_blank"
              >
                Sujet chimie A
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2018-pc-x-espci-ens-rapport-chimie-a.pdf"
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
