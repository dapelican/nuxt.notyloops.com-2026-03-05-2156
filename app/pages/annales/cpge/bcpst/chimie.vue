<script setup>
const page_title = 'Annales prépa BCPST : chimie';

let meta_description = 'Les annales de chimie pour les CPGE BCPST. ';
meta_description += ' Les sujets et rapports des dernières années pour les épreuves Agro-Véto, ENS et G2E.';

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
    label: 'BCPST',
    to: '/annales/cpge/bcpst',
    url: 'https://fr.notyloops.com/annales/cpge/bcpst',
  },
  {
    label: 'Chimie',
    to: '/annales/cpge/bcpst/chimie',
    url: 'https://fr.notyloops.com/annales/cpge/bcpst/chimie',
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
  <!-- app/pages/annales/cpge/bcpst/chimie.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales CPGE BCPST : chimie
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
              Agro-Véto
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2026-bcpst-agro-veto-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2026-bcpst-agro-veto-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              ENS / ENPC / Mines / Ecole centrale
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2026-bcpst-ens-enpc-mines-ec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2026-bcpst-ens-enpc-mines-ec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              G2E
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2026-bcpst-g2e-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2026-bcpst-g2e-rapport.pdf"
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
              Agro-Véto
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2025-bcpst-agro-veto-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2025-bcpst-agro-veto-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ENS / ENPC / Mines / Ecole centrale
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2025-bcpst-ens-enpc-mines-ec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2025-bcpst-ens-enpc-mines-ec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              G2E
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2025-bcpst-g2e-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2025-bcpst-g2e-rapport.pdf"
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
              Agro-Véto
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2024-bcpst-agro-veto-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2024-bcpst-agro-veto-sujet-annexe.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Annexe
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2024-bcpst-agro-veto-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ENS / ENPC / Mines
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2024-bcpst-ens-enpc-mines-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2024-bcpst-ens-enpc-mines-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              G2E
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2024-bcpst-g2e-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2024-bcpst-g2e-rapport.pdf"
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
              Agro-Véto
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2023-bcpst-agro-veto-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2023-bcpst-agro-veto-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ENS / ENPC / Mines
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2023-bcpst-ens-enpc-mines-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2023-bcpst-ens-enpc-mines-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              G2E
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2023-bcpst-g2e-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2023-bcpst-g2e-rapport.pdf"
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
              Agro-Véto
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2022-bcpst-agro-veto-sujet-rdp.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2022-bcpst-agro-veto-rapport-rdp.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ENS / ENPC
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2022-bcpst-ens-enpc-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2022-bcpst-ens-enpc-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              G2E
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2022-bcpst-g2e-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2022-bcpst-g2e-rapport.pdf"
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
              Agro-Véto
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2021-bcpst-agro-veto-sujet-rdp.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2021-bcpst-agro-veto-rapport-rdp.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ENS / ENPC
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2021-bcpst-ens-enpc-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2021-bcpst-ens-enpc-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              G2E
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2021-bcpst-g2e-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2021-bcpst-g2e-rapport.pdf"
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
              Agro-Véto
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2020-bcpst-agro-veto-sujet-rdp.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-physique-chimie-2020-bcpst-agro-veto-rapport-rdp.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ENS / ENPC
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2020-bcpst-ens-enpc-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2020-bcpst-ens-enpc-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              G2E
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2020-bcpst-g2e-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-chimie-2020-bcpst-g2e-rapport.pdf"
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
  </UContainer>
</template>
