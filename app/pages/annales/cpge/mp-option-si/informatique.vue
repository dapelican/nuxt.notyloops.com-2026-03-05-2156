<script setup>
const page_title = 'Annales prépa MP option SI : informatique';

let meta_description = 'Les annales d\'informatique pour les CPGE MP option SI.';
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
    label: 'Informatique',
    to: '/annales/cpge/mp-option-si/informatique',
    url: 'https://fr.notyloops.com/annales/cpge/mp-option-si/informatique',
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
  <!-- app/pages/annales/cpge/mp-option-si/informatique.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales CPGE MP option SI : informatique
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
              X / ESPCI / ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2026-mp-pc-psi-x-espci-ens-sujet-b.pdf"
                target="_blank"
              >
                Sujet (B)
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2026-mp-pc-psi-x-espci-ens-rapport-b.pdf"
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
              X / ESPCI / ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2025-mp-pc-psi-x-espci-ens-sujet-b.pdf"
                target="_blank"
              >
                Sujet (B - XELSR)
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2025-mp-pc-psi-x-espci-ens-rapport-b.pdf"
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
              X / ESPCI / ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2024-mp-mpi-pc-psi-x-espci-ens-sujet-b.pdf"
                target="_blank"
              >
                Sujet (B - XELSR)
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2024-mp-mpi-pc-psi-x-espci-ens-rapport-b.pdf"
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
              X / ESPCI / ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2023-mp-pc-psi-x-espci-ens-sujet-b.pdf"
                target="_blank"
              >
                Sujet (B - XELSR)
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2023-mp-pc-psi-x-espci-ens-rapport-b.pdf"
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
              X / ESPCI / ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2022-mp-pc-psi-x-espci-ens-sujet-b.pdf"
                target="_blank"
              >
                Sujet (B - XELSR)
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2022-mp-pc-psi-x-espci-ens-rapport-b.pdf"
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
              X / ESPCI / ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2021-mp-pc-psi-x-espci-ens-sujet-b.pdf"
                target="_blank"
              >
                Sujet (B - XELCR)
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2021-mp-pc-psi-x-espci-ens-rapport-b.pdf"
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
              X / ESPCI / ENS
            </td>
            <td>
              Epreuve supprimée pour la session 2020
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
              X / ESPCI / ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2019-mp-pc-psi-x-espci-ens-sujet-b.pdf"
                target="_blank"
              >
                Sujet (B - XELCR)
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2019-mp-pc-psi-x-espci-ens-rapport-b.pdf"
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
              X / ESPCI / ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2018-mp-pc-psi-x-espci-ens-sujet-b.pdf"
                target="_blank"
              >
                Sujet (B - XELCR)
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2018-mp-pc-psi-x-espci-ens-rapport-b.pdf"
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
      2017
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
              X / ESPCI / ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2017-mp-pc-psi-x-espci-ens-sujet-b.pdf"
                target="_blank"
              >
                Sujet (B - XELCR)
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2017-mp-pc-psi-x-espci-ens-rapport-b.pdf"
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
      2016
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
              X / ESPCI / ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2016-mp-pc-psi-x-espci-ens-sujet-b.pdf"
                target="_blank"
              >
                Sujet (B - XELCR)
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2016-mp-pc-psi-x-espci-ens-rapport-b.pdf"
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
      2015
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
              X / ESPCI / ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2015-mp-pc-x-espci-ens-sujet-b.pdf"
                target="_blank"
              >
                Sujet (B - XELCR)
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2015-mp-pc-x-espci-ens-rapport-b.pdf"
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
      2014
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
              X / ESPCI / ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2014-mp-pc-x-espci-ens-sujet-b.pdf"
                target="_blank"
              >
                Sujet (B - XEC)
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2014-mp-pc-x-espci-ens-rapport-b.pdf"
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
      2013
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
              X / ESPCI / ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2013-mp-pc-x-espci-ens-sujet-b.pdf"
                target="_blank"
              >
                Sujet (B - XEC)
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2013-mp-pc-x-espci-ens-rapport-b.pdf"
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
      2012
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
              X / ESPCI / ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2012-mp-pc-x-espci-ens-sujet-b.pdf"
                target="_blank"
              >
                Sujet (B - XEC)
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2012-mp-pc-x-espci-ens-rapport-b.pdf"
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
      2011
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
              X / ESPCI / ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2011-mp-pc-x-espci-ens-sujet-b.pdf"
                target="_blank"
              >
                Sujet (B - XEC)
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2011-mp-pc-x-espci-ens-rapport-b.pdf"
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
      2010
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
              X / ESPCI / ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2010-mp-pc-x-espci-ens-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2010-mp-pc-x-espci-ens-rapport.pdf"
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
      2009
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
                to="https://annales.notyloops.com/cpge-informatique-2009-mp-pc-x-espci-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2009-mp-pc-x-espci-rapport.pdf"
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
      2008
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
                to="https://annales.notyloops.com/cpge-informatique-2008-mp-pc-x-espci-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2008-mp-pc-x-espci-rapport.pdf"
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
      2007
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
                to="https://annales.notyloops.com/cpge-informatique-2007-mp-pc-x-espci-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2007-mp-pc-x-espci-rapport.pdf"
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
      2006
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
                to="https://annales.notyloops.com/cpge-informatique-2006-mp-pc-x-espci-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2006-mp-pc-x-espci-rapport.pdf"
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
      2005
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
                to="https://annales.notyloops.com/cpge-informatique-2005-mp-pc-x-espci-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2005-mp-pc-x-espci-rapport.pdf"
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
      2004
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
                to="https://annales.notyloops.com/cpge-informatique-2004-mp-pc-x-espci-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2004-mp-pc-x-espci-rapport.pdf"
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
      2003
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
                to="https://annales.notyloops.com/cpge-informatique-2003-mp-pc-x-espci-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2003-mp-pc-x-espci-rapport.pdf"
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
      2002
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
                to="https://annales.notyloops.com/cpge-informatique-2002-mp-pc-x-espci-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-informatique-2002-mp-pc-x-espci-rapport.pdf"
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
