<script setup>
const page_title = 'Annales prépa ECT : LVB espagnol';

let meta_description = 'Les annales BCE et Ecricome de LVB espagnol pour les CPGE ECT (voie technologique).';
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
    label: 'LVB espagnol',
    to: '/annales/cpge/ect/lvb-espagnol',
    url: 'https://fr.notyloops.com/annales/cpge/ect/lvb-espagnol',
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
      LVB espagnol
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
                to="https://annales.notyloops.com/cpge-lvb-2026-ec-ecricome-sujet-allemand-anglais-espagnol.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-lvb-2026-ec-ecricome-rapport-espagnol.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              Elvi
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-lvb-2026-ec-elvi-sujet-allemand-anglais-espagnol.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-lvb-2026-ec-elvi-rapport-espagnol.pdf"
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
                to="https://annales.notyloops.com/cpge-lvb-2025-ec-ecricome-sujet-allemand-anglais-espagnol.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-lvb-2025-ec-ecricome-rapport-espagnol.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Elvi
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-lvb-2025-ec-elvi-sujet-allemand-anglais-espagnol.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-lvb-2025-ec-elvi-rapport-espagnol.pdf"
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
                to="https://annales.notyloops.com/cpge-lvb-2024-ec-ecricome-sujet-allemand-anglais-espagnol.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-lvb-2024-ec-ecricome-rapport-espagnol.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Elvi
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-lvb-2024-ec-elvi-sujet-allemand-anglais-espagnol.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-lvb-2024-ec-elvi-rapport-espagnol.pdf"
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
                to="https://annales.notyloops.com/cpge-lvb-2023-ec-ecricome-sujet-allemand-anglais-espagnol.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-lvb-2023-ec-ecricome-rapport-espagnol.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Elvi
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-lvb-2023-ec-elvi-sujet-allemand-anglais-espagnol.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-lvb-2023-ec-elvi-rapport-espagnol.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Iena
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-lvb-2023-ec-iena-rapport-espagnol.pdf"
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
                to="https://annales.notyloops.com/cpge-lvb-2022-ec-ecricome-sujet-allemand-anglais-espagnol.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-lvb-2022-ec-ecricome-rapport-espagnol.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Elvi
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-lvb-2022-ec-elvi-sujet-allemand-anglais-espagnol.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-lvb-2022-ec-elvi-rapport-espagnol.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Iena
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-lvb-2022-ec-iena-sujet-al-an-ar-es-it-po-ru-la-gran.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-lvb-2022-ec-iena-rapport-espagnol.pdf"
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
                to="https://annales.notyloops.com/cpge-lvb-2021-ec-ecricome-sujet-allemand-anglais-espagnol.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-lvb-2021-ec-ecricome-rapport-espagnol.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Elvi
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-lvb-2021-ec-elvi-sujet-allemand-anglais-espagnol.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-lvb-2021-ec-elvi-rapport-espagnol.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Iena
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-lvb-2021-ec-iena-sujet-al-an-ar-es-it-po-ru-la-gran.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-lvb-2021-ec-iena-rapport-espagnol.pdf"
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
                to="https://annales.notyloops.com/cpge-lvb-2020-ec-ecricome-sujet-allemand-anglais-espagnol.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-lvb-2020-ec-ecricome-rapport-espagnol.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Elvi
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-lvb-2020-ec-elvi-sujet-allemand-anglais-espagnol.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-lvb-2020-ec-elvi-rapport-espagnol.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Iena
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-lvb-2020-ec-iena-sujet-al-an-ar-es-it-po-ru-la-gran.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-lvb-2020-ec-iena-rapport-espagnol.pdf"
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
                to="https://annales.notyloops.com/cpge-lvb-2019-ec-ecricome-sujet-allemand-anglais-espagnol.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-lvb-2019-ec-ecricome-rapport-espagnol.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Elvi
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-lvb-2019-ec-elvi-sujet-allemand-anglais-espagnol.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-lvb-2019-ec-elvi-rapport-espagnol.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Iena
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-lvb-2019-ec-iena-sujet-al-an-ar-es-it-po-ru-la-gran.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-lvb-2019-ec-iena-rapport-espagnol.pdf"
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
          <ULink class="text-primary"
            to="https://www.concours-bce.com/annales"
            target="_blank"
          >
            Les annales des épreuves écrites BCE
          </ULink>
        </li>
        <li>
          <ULink class="text-primary"
            to="https://www.ecricome.org/ecricome-prepa-langues-vivantes/"
            target="_blank"
          >
            Ecricome : les épreuves de langues vivantes
          </ULink>
        </li>
      </ul> -->
  </UContainer>
</template>
