<script setup>
const page_title = 'Annales prépa BCPST : SVT';

let meta_description = 'Les annales de SVT pour les CPGE BCPST.';
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
    label: 'SVT',
    to: '/annales/cpge/bcpst/svt',
    url: 'https://fr.notyloops.com/annales/cpge/bcpst/svt',
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
  <!-- app/pages/annales/cpge/bcpst/svt.vue -->
  <UContainer class="max-w-2xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales CPGE BCPST : SVT
    </h1>

    <h2 class="mt-12">
      2026
    </h2>

    <figure>
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
              Agro-Véto
            </td>
            <td>
              <ul class="space-y-4">
                <li>
                  <span>Biologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2026-bcpst-agro-veto-sujet-biologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  <!-- |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2026-bcpst-agro-veto-rapport-biologie.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink> -->
                </li>
                <li class="mt-1">
                  <span>SVT</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2026-bcpst-agro-veto-sujet-svt.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2026-bcpst-agro-veto-sujet-svt-annexes.pdf"
                    target="_blank"
                  >
                    Annexes
                  </ULink>
                  <!-- <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2026-bcpst-agro-veto-rapport.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink> -->
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              ENS / ENPC / Mines / Ecole centrale
            </td>
            <td>
              Pas encore disponible
              <!-- <ul class="space-y-4">
                <li>
                  <span>Biologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2026-bcpst-ens-snpc-mines-ec-sujet-biologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2026-bcpst-ens-snpc-mines-ec-rapport-biologie.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
                <li class="mt-1">
                  <span>Sciences de la terre</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2026-bcpst-ens-snpc-mines-ec-sujet-st.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2026-bcpst-ens-snpc-mines-ec-rapport-st.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
              </ul> -->
            </td>
          </tr>
          <tr>
            <td>
              G2E
            </td>
            <td>
              <ul class="space-y-4">
                <li>
                  <span>Biologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2026-bcpst-g2e-sujet-biologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  <!-- |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2026-bcpst-g2e-rapport-biologie.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink> -->
                </li>
                <li class="mt-1">
                  <span>Géologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2026-bcpst-g2e-sujet-geologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  <!-- |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2026-bcpst-g2e-rapport-geologie.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink> -->
                </li>
              </ul>
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
              Agro-Véto
            </td>
            <td>
              <ul class="space-y-4">
                <li>
                  <span>Biologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2025-bcpst-agro-veto-sujet-biologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2025-bcpst-agro-veto-rapport-biologie.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
                <li class="mt-1">
                  <span>SVT</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2025-bcpst-agro-veto-sujet-svt.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2025-bcpst-agro-veto-sujet-svt-annexe-biologie.pdf"
                    target="_blank"
                  >
                    Annexe biologie
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2025-bcpst-agro-veto-sujet-svt-annexe-geologie.pdf"
                    target="_blank"
                  >
                    Annexe géologie
                  </ULink>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2025-bcpst-agro-veto-rapport.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              ENS / ENPC / Mines / Ecole centrale
            </td>
            <td>
              <ul class="space-y-4">
                <li>
                  <span>Biologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2025-bcpst-ens-snpc-mines-ec-sujet-biologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2025-bcpst-ens-snpc-mines-ec-rapport-biologie.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
                <li class="mt-1">
                  <span>Sciences de la terre</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2025-bcpst-ens-snpc-mines-ec-sujet-st.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2025-bcpst-ens-snpc-mines-ec-rapport-st.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              G2E
            </td>
            <td>
              <ul class="space-y-4">
                <li>
                  <span>Biologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2025-bcpst-g2e-sujet-biologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2025-bcpst-g2e-rapport-biologie.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
                <li class="mt-1">
                  <span>Géologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2025-bcpst-g2e-sujet-geologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2025-bcpst-g2e-rapport-geologie.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
              </ul>
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
              Agro-Véto
            </td>
            <td>
              <ul class="space-y-4">
                <li>
                  <span>Biologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2024-bcpst-agro-veto-sujet-biologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2024-bcpst-agro-veto-rapport-biologie.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
                <li class="mt-1">
                  <span>SVT</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2024-bcpst-agro-veto-sujet-svt.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2024-bcpst-agro-veto-sujet-svt-annexe-1.pdf"
                    target="_blank"
                  >
                    Annexe 1
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2024-bcpst-agro-veto-sujet-svt-annexe-2.pdf"
                    target="_blank"
                  >
                    Annexe 2
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2024-bcpst-agro-veto-rapport-svt.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              ENS / ENPC / Mines
            </td>
            <td>
              <ul class="space-y-4">
                <li>
                  <span>Biologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2024-bcpst-ens-snpc-mines-sujet-biologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2024-bcpst-ens-snpc-mines-rapport-biologie.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
                <li class="mt-1">
                  <span>Sciences de la terre</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2024-bcpst-ens-snpc-mines-sujet-st.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2024-bcpst-ens-snpc-mines-rapport-st.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              G2E
            </td>
            <td>
              <ul class="space-y-4">
                <li>
                  <span>Biologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2024-bcpst-g2e-sujet-biologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2024-bcpst-g2e-rapport-biologie.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
                <li class="mt-1">
                  <span>Géologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2024-bcpst-g2e-sujet-geologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2024-bcpst-g2e-rapport-geologie.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
              </ul>
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
              Agro-Véto
            </td>
            <td>
              <ul class="space-y-4">
                <li>
                  <span>Biologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2023-bcpst-agro-veto-sujet-biologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2023-bcpst-agro-veto-rapport-biologie.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
                <li class="mt-1">
                  <span>SVT</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2023-bcpst-agro-veto-sujet-svt.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2023-bcpst-agro-veto-sujet-svt-annexe.pdf"
                    target="_blank"
                  >
                    Annexe
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2023-bcpst-agro-veto-rapport-svt.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              ENS / ENPC / Mines
            </td>
            <td>
              <ul class="space-y-4">
                <li>
                  <span>Biologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2023-bcpst-ens-snpc-mines-sujet-biologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2023-bcpst-ens-snpc-mines-rapport-biologie.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
                <li class="mt-1">
                  <span>Sciences de la terre</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2023-bcpst-ens-snpc-mines-sujet-st.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2023-bcpst-ens-snpc-mines-rapport-st.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              G2E
            </td>
            <td>
              <ul class="space-y-4">
                <li>
                  <span>Biologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2023-bcpst-g2e-sujet-biologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2023-bcpst-g2e-rapport-biologie.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
                <li class="mt-1">
                  <span>Géologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2023-bcpst-g2e-sujet-geologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2023-bcpst-g2e-rapport-geologie.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
              </ul>
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
              Agro-Véto
            </td>
            <td>
              <ul class="space-y-4">
                <li>
                  <span>Biologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2022-bcpst-agro-veto-sujet-biologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2022-bcpst-agro-veto-rapport-biologie.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
                <li class="mt-1">
                  <span>SVT - biologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2022-bcpst-agro-veto-sujet-svt-biologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2022-bcpst-agro-veto-sujet-svt-biologie-annexe.pdf"
                    target="_blank"
                  >
                    Annexe
                  </ULink>
                </li>
                <li class="mt-1">
                  <span>SVT - géologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2022-bcpst-agro-veto-sujet-svt-geologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2022-bcpst-agro-veto-sujet-svt-geologie-annexe.pdf"
                    target="_blank"
                  >
                    Annexe
                  </ULink>
                </li>
                <li class="mt-1">
                  <span>SVT</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2023-bcpst-agro-veto-rapport-svt.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              ENS / ENPC
            </td>
            <td>
              <ul class="space-y-4">
                <li>
                  <span>Biologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2022-bcpst-ens-snpc-sujet-biologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2022-bcpst-ens-snpc-rapport-biologie.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
                <li class="mt-1">
                  <span>Sciences de la terre</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2022-bcpst-ens-snpc-sujet-st.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2022-bcpst-ens-snpc-rapport-st.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              G2E
            </td>
            <td>
              <ul class="space-y-4">
                <li>
                  <span>Biologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2022-bcpst-g2e-sujet-biologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2022-bcpst-g2e-rapport-biologie.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
                <li class="mt-1">
                  <span>Géologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2022-bcpst-g2e-sujet-geologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2022-bcpst-g2e-rapport-geologie.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
              </ul>
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
              Agro-Véto
            </td>
            <td>
              <ul class="space-y-4">
                <li>
                  <span>Biologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2021-bcpst-agro-veto-sujet-biologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2021-bcpst-agro-veto-rapport-biologie.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
                <li class="mt-1">
                  <span>SVT - biologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2021-bcpst-agro-veto-sujet-svt-biologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2021-bcpst-agro-veto-sujet-svt-biologie-annexe.pdf"
                    target="_blank"
                  >
                    Annexe
                  </ULink>
                </li>
                <li class="mt-1">
                  <span>SVT - géologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2021-bcpst-agro-veto-sujet-svt-geologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2021-bcpst-agro-veto-sujet-svt-geologie-annexe.pdf"
                    target="_blank"
                  >
                    Annexe
                  </ULink>
                </li>
                <li class="mt-1">
                  <span>SVT</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2021-bcpst-agro-veto-rapport-svt.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              ENS / ENPC
            </td>
            <td>
              <ul class="space-y-4">
                <li>
                  <span>Biologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2021-bcpst-ens-snpc-sujet-biologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2021-bcpst-ens-snpc-rapport-biologie.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
                <li class="mt-1">
                  <span>Sciences de la terre</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2021-bcpst-ens-snpc-sujet-st.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2021-bcpst-ens-snpc-rapport-st.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              G2E
            </td>
            <td>
              <ul class="space-y-4">
                <li>
                  <span>Biologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2021-bcpst-g2e-sujet-biologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2021-bcpst-g2e-rapport-biologie.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
                <li class="mt-1">
                  <span>Géologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2021-bcpst-g2e-sujet-geologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2021-bcpst-g2e-rapport-geologie.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
              </ul>
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
              Agro-Véto
            </td>
            <td>
              <ul class="space-y-4">
                <li>
                  <span>Biologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2020-bcpst-agro-veto-sujet-biologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2020-bcpst-agro-veto-rapport-biologie.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
                <li class="mt-1">
                  <span>SVT - biologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2020-bcpst-agro-veto-sujet-svt-biologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2020-bcpst-agro-veto-sujet-svt-biologie-annexe.pdf"
                    target="_blank"
                  >
                    Annexe
                  </ULink>
                </li>
                <li class="mt-1">
                  <span>SVT - géologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2020-bcpst-agro-veto-sujet-svt-geologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2020-bcpst-agro-veto-sujet-svt-geologie-annexe-1.pdf"
                    target="_blank"
                  >
                    Annexe 1
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2020-bcpst-agro-veto-sujet-svt-geologie-annexe-2.pdf"
                    target="_blank"
                  >
                    Annexe 2
                  </ULink>
                </li>
                <li class="mt-1">
                  <span>SVT</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2020-bcpst-agro-veto-rapport-svt.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              ENS / ENPC
            </td>
            <td>
              <ul class="space-y-4">
                <li>
                  <span>Biologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2020-bcpst-ens-snpc-sujet-biologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2020-bcpst-ens-snpc-rapport-biologie.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
                <li class="mt-1">
                  <span>Sciences de la terre</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2020-bcpst-ens-snpc-sujet-st.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2020-bcpst-ens-snpc-rapport-st.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              G2E
            </td>
            <td>
              <ul class="space-y-4">
                <li>
                  <span>Biologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2020-bcpst-g2e-sujet-biologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2020-bcpst-g2e-rapport-biologie.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
                <li class="mt-1">
                  <span>Géologie</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2020-bcpst-g2e-sujet-geologie.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-svt-2020-bcpst-g2e-rapport-geologie.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <!-- <hr class="separator-1">

      <p>
        Sources :
      </p>

      <ul>
        <li>
          <ULink class="text-primary"
            to="https://www.concours-agro-veto.net/spip.php?rubrique257"
            target="_blank"
          >
            Agro-Véto : les sujets
          </ULink>
        </li>
        <li>
          <ULink class="text-primary"
            to="https://www.ens.psl.eu/une-formation-d-exception/admission-concours/concours-voie-cpge/concours-voie-cpge-sciences-0"
            target="_blank"
          >
            ENS : sujets et rapports à partir de 2007
          </ULink>
        </li>
        <li>
          <ULink class="text-primary"
            to="https://banques-ecoles.fr/cms/filiere-bcpst/"
            target="_blank"
          >
            Sujets à partir de 2003
          </ULink>
        </li>
        <li>
          <ULink class="text-primary"
            to="https://concoursg2e.univ-lorraine.fr/concours-precedents/"
            target="_blank"
          >
            G2E : les sujets et rapports
          </ULink>
        </li>
        <li>
          <ULink class="text-primary"
            to="https://www.education.gouv.fr/bo/2024/Hebdo29/ESRS2418417A"
            target="_blank"
          >
            Programme de français et de philosophie pour l'année scolaire 2024-2025 (bulletin officiel)
          </ULink>
        </li>
        <li>
          <ULink class="text-primary"
            to="https://www.education.gouv.fr/bo/2023/Hebdo28/ESRS2317934A"
            target="_blank"
          >
            Programme de français et de philosophie pour l'année scolaire 2023-2024 (bulletin officiel)
          </ULink>
        </li>
        <li>
          <ULink class="text-primary"
            to="https://www.education.gouv.fr/bo/22/Hebdo20/ESRS2213517A.htm"
            target="_blank"
          >
            Programme de français et de philosophie pour l'année scolaire 2022-2023 (bulletin officiel)
          </ULink>
        </li>
        <li>
          <ULink class="text-primary"
            to="https://www.enseignementsup-recherche.gouv.fr/fr/bo/21/Hebdo28/ESRS2119554A.htm"
            target="_blank"
          >
            Programme de français et de philosophie pour l'année scolaire 2021-2022 (bulletin officiel)
          </ULink>
        </li>

        <li>
          <ULink class="text-primary"
            to="https://fr.wikipedia.org/wiki/Fran%C3%A7ais-philosophie#%C3%89tude_des_%C5%93uvres"
            target="_blank"
          >
            Thèmes et oeuvres de français-philosophie depuis 1969
          </ULink>
        </li>
        <li>
          <ULink class="text-primary"
            to="https://oldccp.scei-concours.fr/sccp.php?page=cpge/sujet/sujet_accueil_cpge.html"
            target="_blank"
          >
            e3a-Polytech : sujets à partir de 2018
          </ULink>
        </li>
        <li>
          <ULink class="text-primary"
            to="https://astucesweb.fr/cpge/annales/"
            target="_blank"
          >
            Annales concours CPGE
          </ULink>
        </li>
      </ul> -->
  </UContainer>
</template>
