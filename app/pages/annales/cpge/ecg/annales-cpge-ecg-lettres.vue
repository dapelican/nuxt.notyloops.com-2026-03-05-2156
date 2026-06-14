<script setup>
let meta_description = 'Les annales BCE de lettres (résumé de texte, étude et synthèse de textes)';
meta_description += '  pour les CPGE ECG (voie générale). Les sujets et rapports des dernières années.';

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
    name: 'Lettres (résumé de texte, étude et synthèse de textes)',
    url: 'https://fr.optileague.com/ressources/annales-cpge-ecg-lettres',
  },
];

const breadcrumb_schema = useBreadcrumbSchema(breadcrumb_items);

useHead({
  title: () => 'Annales CPGE ECG : lettres (résumé et synthèse de textes) | OptiLeague',
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
      > Lettres (résumé de texte, étude et synthèse de textes)
    </p>

    <h1>
      Annales CPGE ECG :
      lettres (résumé de texte, étude et synthèse de textes)
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
                to="https://annales.notyloops.com/cpge-resume-de-texte-2025-ecg-ecricome-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP - HEC
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-etude-et-synthese-de-textes-2024-ec-escp-hec-sujet.pdf"
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
                to="https://annales.notyloops.com/cpge-resume-de-texte-2024-ecg-ecricome-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-resume-de-texte-2024-ecg-ecricome-rapport.pdf"
                target="_blank"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP - HEC
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-etude-et-synthese-de-textes-2024-ec-escp-hec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-etude-et-synthese-de-textes-2024-ec-escp-hec-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-resume-de-texte-2023-ecg-ecricome-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-resume-de-texte-2023-ecg-ecricome-rapport.pdf"
                target="_blank"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP - HEC
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-etude-et-synthese-de-textes-2023-ec-escp-hec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-etude-et-synthese-de-textes-2023-ec-escp-hec-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-resume-de-texte-2022-ecs-ece-ecricome-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-resume-de-texte-2022-ecs-ece-ecricome-rapport.pdf"
                target="_blank"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP - HEC
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-etude-et-synthese-de-textes-2022-ec-escp-hec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-etude-et-synthese-de-textes-2022-ec-escp-hec-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-resume-de-texte-2021-ecs-ece-ecricome-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-resume-de-texte-2021-ecs-ece-ecricome-rapport.pdf"
                target="_blank"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP - HEC
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-etude-et-synthese-de-textes-2021-ec-escp-hec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-etude-et-synthese-de-textes-2021-ec-escp-hec-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-resume-de-texte-2020-ecs-ece-ecricome-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-resume-de-texte-2020-ecs-ece-ecricome-rapport.pdf"
                target="_blank"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP - HEC
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-etude-et-synthese-de-textes-2020-ec-escp-hec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-etude-et-synthese-de-textes-2020-ec-escp-hec-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-resume-de-texte-2019-ecs-ece-ecricome-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-resume-de-texte-2019-ecs-ece-ecricome-rapport.pdf"
                target="_blank"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP - HEC
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-etude-et-synthese-de-textes-2019-ec-escp-hec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-etude-et-synthese-de-textes-2019-ec-escp-hec-rapport.pdf"
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
            to="https://www.ecricome.org/ecricome-prepa-resume-de-texte/"
            target="_blank"
          >
            Ecricome : l'épreuve du résumé de texte
          </NuxtLink>
        </li>
      </ul> -->
  </main>
</template>
