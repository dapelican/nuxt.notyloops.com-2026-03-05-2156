<script setup>
let meta_description = 'Les annales BCE et Ecricome de LVB allemand pour les CPGE ECG (voie générale).';
meta_description += ' Les sujets et rapports des dernières années.';

const breadcrumb_items = [
  {
    name: 'Ressources',
    url: 'https://fr.optileague.com/ressources',
  },
  {
    name: 'Annales CPGE ECG',
    url: 'https://fr.optileague.com/ressources/annales-cpge-ecg',
  },
  {
    name: 'LVB allemand',
    url: 'https://fr.optileague.com/ressources/annales-cpge-ecg-lvb-allemand',
  },
];

const breadcrumb_schema = useBreadcrumbSchema(breadcrumb_items);

useHead({
  title: () => 'Annales CPGE ECG : LVB allemand | NotyLoops',
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
        to="/ressources/annales-cpge-ecg"
      >
        Annales CPGE ECG
      </NuxtLink>
      > LVB allemand
    </p>

    <h1>
      Annales CPGE ECG :
      LVB allemand
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
                to="https://annales.notyloops.com/cpge-lvb-2025-ec-ecricome-sujet-allemand-anglais-espagnol.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Elvi
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-lvb-2025-ec-elvi-sujet-allemand-anglais-espagnol.pdf"
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
                to="https://annales.notyloops.com/cpge-lvb-2024-ec-ecricome-sujet-allemand-anglais-espagnol.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-lvb-2024-ec-ecricome-rapport-allemand.pdf"
                target="_blank"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Elvi
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-lvb-2024-ec-elvi-sujet-allemand-anglais-espagnol.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-lvb-2024-ec-elvi-rapport-allemand.pdf"
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
                to="https://annales.notyloops.com/cpge-lvb-2023-ec-ecricome-sujet-allemand-anglais-espagnol.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-lvb-2023-ec-ecricome-rapport-allemand.pdf"
                target="_blank"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Elvi
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-lvb-2023-ec-elvi-sujet-allemand-anglais-espagnol.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-lvb-2023-ec-elvi-rapport-allemand.pdf"
                target="_blank"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Iena
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-lvb-2023-ec-iena-rapport-allemand.pdf"
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
                to="https://annales.notyloops.com/cpge-lvb-2022-ec-ecricome-sujet-allemand-anglais-espagnol.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-lvb-2022-ec-ecricome-rapport-allemand.pdf"
                target="_blank"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Elvi
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-lvb-2022-ec-elvi-sujet-allemand-anglais-espagnol.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-lvb-2022-ec-elvi-rapport-allemand.pdf"
                target="_blank"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Iena
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-lvb-2022-ec-iena-sujet-al-an-ar-es-it-po-ru-la-gran.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-lvb-2022-ec-iena-rapport-allemand.pdf"
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
                to="https://annales.notyloops.com/cpge-lvb-2021-ec-ecricome-sujet-allemand-anglais-espagnol.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-lvb-2021-ec-ecricome-rapport-allemand.pdf"
                target="_blank"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Elvi
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-lvb-2021-ec-elvi-sujet-allemand-anglais-espagnol.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-lvb-2021-ec-elvi-rapport-allemand-1-traductions.pdf"
                target="_blank"
              >
                Rapport 1
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-lvb-2021-ec-elvi-rapport-allemand-2-expression-ecrite.pdf"
                target="_blank"
              >
                Rapport 2
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Iena
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-lvb-2021-ec-iena-sujet-al-an-ar-es-it-po-ru-la-gran.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-lvb-2021-ec-iena-rapport-allemand.pdf"
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
                to="https://annales.notyloops.com/cpge-lvb-2020-ec-ecricome-sujet-allemand-anglais-espagnol.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-lvb-2020-ec-ecricome-rapport-allemand.pdf"
                target="_blank"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Elvi
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-lvb-2020-ec-elvi-sujet-allemand-anglais-espagnol.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-lvb-2020-ec-elvi-rapport-allemand.pdf"
                target="_blank"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Iena
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-lvb-2020-ec-iena-sujet-al-an-ar-es-it-po-ru-la-gran.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-lvb-2020-ec-iena-rapport-allemand.pdf"
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
                to="https://annales.notyloops.com/cpge-lvb-2019-ec-ecricome-sujet-allemand-anglais-espagnol.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-lvb-2019-ec-ecricome-rapport-allemand.pdf"
                target="_blank"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Elvi
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-lvb-2019-ec-elvi-sujet-allemand-anglais-espagnol.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-lvb-2019-ec-elvi-rapport-allemand-1-traductions.pdf"
                target="_blank"
              >
                Rapport 1
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-lvb-2019-ec-elvi-rapport-allemand-2-expression-ecrite.pdf"
                target="_blank"
              >
                Rapport 2
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Iena
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-lvb-2019-ec-iena-sujet-al-an-ar-es-it-po-ru-la-gran.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-lvb-2019-ec-iena-rapport-allemand.pdf"
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
            to="https://www.ecricome.org/ecricome-prepa-langues-vivantes/"
            target="_blank"
          >
            Ecricome : les épreuves de langues vivantes
          </NuxtLink>
        </li>
      </ul> -->
  </main>
</template>
