<script setup>
const page_title = 'Annales prépa MP option SI : mathématiques';

let meta_description = 'Les annales de mathématiques pour les CPGE MP option SI.';
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
    label: 'MP option SI',
    to: '/annales/cpge/mp-option-si',
    url: 'https://fr.notyloops.com/annales/cpge/mp-option-si',
  },
  {
    label: 'mathématiques',
    to: '/annales/cpge/mp-option-si/mathematiques',
    url: 'https://fr.notyloops.com/annales/cpge/mp-option-si/mathematiques',
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

useGoogleTag();
</script>

<template>
  <!-- app/pages/annales/cpge/mp-option-si/mathematiques.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales CPGE MP option SI : mathématiques
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
              CCINP
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2026-mp-ccinp-sujet-1.pdf"
                target="_blank"
              >
                Sujet 1
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2026-mp-ccinp-rapport-1.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2026-mp-ccinp-sujet-2.pdf"
                target="_blank"
              >
                Sujet 2
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2026-mp-ccinp-rapport-2.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              CCMP
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2026-mp-ccmp-sujet-1.pdf"
                target="_blank"
              >
                Sujet 1
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2026-mp-ccmp-rapport-1.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2026-mp-ccmp-sujet-2.pdf"
                target="_blank"
              >
                Sujet 2
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2026-mp-ccmp-rapport-2.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              CCS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2026-mp-mpi-ccs-sujet-1.pdf"
                target="_blank"
              >
                Sujet 1
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2026-mp-mpi-ccs-rapport-1.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2026-mp-mpi-ccs-sujet-2.pdf"
                target="_blank"
              >
                Sujet 2
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2026-mp-mpi-ccs-rapport-2.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              e3a-Polytech
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2026-mp-e3a-polytech-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2026-mp-e3a-polytech-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ENS
            </td>
            <td>
              Sujet C (Pas encore disponible)
              <!-- <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2026-mp-mpi-ens-sujet-c.pdf"
                target="_blank"
              >
                Sujet D
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2026-mp-mpi-ens-rapport-c.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
              <br>
              Sujet D (Pas encore disponible)
              <!-- <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2026-mp-mpi-ens-sujet-d.pdf"
                target="_blank"
              >
                Sujet D
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2026-mp-mpi-ens-rapport-d.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              X / ESPCI
            </td>
            <td>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2026-mp-ccmp-rapport-2.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2026-mp-mpi-x-espci-sujet-b.pdf"
                target="_blank"
              >
                Sujet B
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2026-mp-mpi-x-espci-rapport-b.pdf"
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
                to="https://annales.notyloops.com/cpge-mathematiques-2026-mp-mpi-x-espci-ens-sujet-a.pdf"
                target="_blank"
              >
                Sujet A
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2026-mp-mpi-x-espci-ens-rapport-a.pdf"
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
              CCINP
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2025-mp-ccinp-sujet-1.pdf"
                target="_blank"
              >
                Sujet 1
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2025-mp-ccinp-rapport-1.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2025-mp-ccinp-sujet-2.pdf"
                target="_blank"
              >
                Sujet 2
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2025-mp-ccinp-rapport-2.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              CCMP
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2025-mp-ccmp-sujet-1.pdf"
                target="_blank"
              >
                Sujet 1
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2025-mp-ccmp-rapport-1.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2025-mp-ccmp-sujet-2.pdf"
                target="_blank"
              >
                Sujet 2
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2025-mp-ccmp-rapport-2.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              CCS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2025-mp-mpi-ccs-sujet-1.pdf"
                target="_blank"
              >
                Sujet 1
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2025-mp-mpi-ccs-rapport-1.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2025-mp-mpi-ccs-sujet-2.pdf"
                target="_blank"
              >
                Sujet 2
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2025-mp-mpi-ccs-rapport-2.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              e3a-Polytech
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2025-mp-e3a-polytech-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2025-mp-e3a-polytech-rapport.pdf"
                target="_blank"
              >
                Rapport et corrigé
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2025-mp-mpi-ens-sujet-c.pdf"
                target="_blank"
              >
                Sujet C
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2025-mp-mpi-ens-rapport-c.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2025-mp-ens-sujet-d.pdf"
                target="_blank"
              >
                Sujet D
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2025-mp-ens-rapport-d.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              X
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2025-mp-mpi-x-sujet-b.pdf"
                target="_blank"
              >
                Sujet B
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2025-mp-mpi-x-rapport-b.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              X / ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2025-mp-mpi-x-ens-sujet-a.pdf"
                target="_blank"
              >
                Sujet A
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2025-mp-mpi-x-ens-rapport-a.pdf"
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
              X
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2024-mp-mpi-x-sujet-b.pdf"
                target="_blank"
              >
                Sujet (B)
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2024-mp-mpi-x-rapport-b.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              X / ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2024-mp-mpi-x-ens-sujet-a.pdf"
                target="_blank"
              >
                Sujet (A)
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2024-mp-mpi-x-ens-rapport-a.pdf"
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
              X
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2023-mp-mpi-x-sujet-b.pdf"
                target="_blank"
              >
                Sujet (B)
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2023-mp-mpi-x-rapport-b.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              X / ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2023-mp-mpi-x-ens-sujet-a.pdf"
                target="_blank"
              >
                Sujet (A)
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2023-mp-mpi-x-ens-rapport-a.pdf"
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
              X
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2022-mp-x-sujet-b.pdf"
                target="_blank"
              >
                Sujet (B)
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2022-mp-x-rapport-b.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              X / ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2022-mp-x-ens-sujet-a.pdf"
                target="_blank"
              >
                Sujet (A)
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2022-mp-x-ens-rapport-a.pdf"
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
