<script setup>
const page_title = 'Annales prépa PSI : physique - chimie';

let meta_description = 'Les annales de physique - chimie pour les CPGE PSI.';
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
    label: 'PSI',
    to: '/annales/cpge/psi',
    url: 'https://fr.notyloops.com/annales/cpge/psi',
  },
  {
    label: 'Physique - Chimie',
    to: '/annales/cpge/psi/physique-chimie',
    url: 'https://fr.notyloops.com/annales/cpge/psi/physique-chimie',
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
  <!-- app/pages/annales/cpge/psi/physique-chimie.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales CPGE PSI : physique - chimie
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
              ENS Ulm
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2025-psi-ens-x-sujet-physique-u.pdf"
                target="_blank"
              >
                Sujet physique U
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2025-psi-ens-x-rapport-physique-u.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              ENS / X
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2025-psi-ens-x-sujet-physique-xsr.pdf"
                target="_blank"
              >
                Sujet physique XSR
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2025-psi-ens-x-rapport-physique-xsr.pdf"
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
          <!-- <tr>
            <td>
              ENS Ulm
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2024-psi-ens-x-sujet-physique-u.pdf"
                target="_blank"
              >
                Sujet physique U
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2024-psi-ens-x-rapport-physique-u.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr> -->
          <tr>
            <td>
              ENS / X
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2024-psi-ens-x-sujet-physique-xsr.pdf"
                target="_blank"
              >
                Sujet physique XSR
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2024-psi-ens-x-rapport-physique-xsr.pdf"
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
              ENS Ulm
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2023-psi-ens-x-sujet-physique-u.pdf"
                target="_blank"
              >
                Sujet physique U
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2023-psi-ens-x-rapport-physique-u.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              ENS / X
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2023-psi-ens-x-sujet-physique-xsr.pdf"
                target="_blank"
              >
                Sujet physique XSR
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2023-psi-ens-x-rapport-physique-xsr.pdf"
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
              ENS Ulm
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2022-psi-ens-x-sujet-physique-u.pdf"
                target="_blank"
              >
                Sujet physique U
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2022-psi-ens-x-rapport-physique-u.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              ENS / X
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2022-psi-ens-x-sujet-physique-xsr.pdf"
                target="_blank"
              >
                Sujet physique XSR
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2022-psi-ens-x-rapport-physique-xsr.pdf"
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
