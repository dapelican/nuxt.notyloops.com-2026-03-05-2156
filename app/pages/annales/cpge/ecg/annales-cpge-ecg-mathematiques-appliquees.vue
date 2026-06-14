<script setup>
let meta_description = 'Les annales BCE et Ecricome de mathématiques appliquées pour les CPGE ECG (voie générale).';
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
    name: 'Mathématiques appliquées',
    url: 'https://fr.optileague.com/ressources/annales-cpge-ecg-mathematiques-appliquees',
  },
];

const breadcrumb_schema = useBreadcrumbSchema(breadcrumb_items);

useHead({
  title: () => 'Annales CPGE ECG : mathématiques appliquées | OptiLeague',
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
  <main class="padding-lr centered-max-width-750">
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
      > Mathématiques appliquées
    </p>

    <h1>
      Annales CPGE ECG :
      mathématiques appliquées
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
                to="https://annales.notyloops.com/cpge-mathematiques-appliquees-2025-ecg-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Edhec
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-appliquees-2025-ecg-edhec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              emlyon
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-appliquees-2025-ecg-emlyon-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Essec / HEC
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-appliquees-2025-ecg-essec-hec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Essec
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-appliquees-2025-ecg-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
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
                to="https://annales.notyloops.com/cpge-mathematiques-appliquees-2024-ecg-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-appliquees-2024-ecg-ecricome-corrige-et-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé et rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Edhec
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-appliquees-2024-ecg-edhec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-appliquees-2024-ecg-edhec-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              emlyon
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-appliquees-2024-ecg-emlyon-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-appliquees-2024-ecg-emlyon-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Essec / HEC
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-appliquees-2024-ecg-essec-hec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-appliquees-2024-ecg-essec-hec-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Essec
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-appliquees-2024-ecg-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-appliquees-2024-ecg-essec-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h2>
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
              Ecricome
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-appliquees-2023-ecg-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-appliquees-2023-ecg-ecricome-corrige-et-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé et rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Edhec
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-appliquees-2023-ecg-edhec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-appliquees-2023-ecg-edhec-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              emlyon
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-appliquees-2023-ecg-emlyon-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-appliquees-2023-ecg-emlyon-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Essec / HEC
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-appliquees-2023-ecg-essec-hec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-appliquees-2023-ecg-essec-hec-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Essec
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-appliquees-2023-ecg-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-appliquees-2023-ecg-essec-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
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
                to="https://annales.notyloops.com/cpge-mathematiques-2022-ece-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2022-ece-ecricome-corrige-et-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé et rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Edhec
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2022-ece-edhec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2022-ece-edhec-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              emlyon
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2022-ece-emlyon-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <!-- |
                <NuxtLink
                  to="https://annales.notyloops.com/cpge-mathematiques-2022-ece-emlyon-rapport.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rapport
                </NuxtLink> -->
            </td>
          </tr>
          <tr>
            <td>
              Essec
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2022-ece-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2022-ece-essec-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              HEC / Essec
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2022-ece-hec-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2022-ece-hec-essec-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
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
                to="https://annales.notyloops.com/cpge-mathematiques-2021-ece-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2021-ece-ecricome-corrige-et-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé et rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Edhec
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2021-ece-edhec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2021-ece-edhec-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              emlyon
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2021-ece-emlyon-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2021-ece-emlyon-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Essec
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2021-ece-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2021-ece-essec-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              HEC / Essec
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2021-ece-hec-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2021-ece-hec-essec-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
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
                to="https://annales.notyloops.com/cpge-mathematiques-2020-ece-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2020-ece-ecricome-corrige-et-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé et rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Edhec
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2020-ece-edhec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2020-ece-edhec-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              emlyon
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2020-ece-emlyon-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2020-ece-emlyon-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Essec
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2020-ece-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2020-ece-essec-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              HEC / Essec
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2020-ece-hec-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2020-ece-hec-essec-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
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
                to="https://annales.notyloops.com/cpge-mathematiques-2019-ece-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2019-ece-ecricome-corrige-et-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé et rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Edhec
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2019-ece-edhec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2019-ece-edhec-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              emlyon
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2019-ece-emlyon-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2019-ece-emlyon-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Essec
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2019-ece-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2019-ece-essec-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              HEC / Essec
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2019-ece-hec-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <!-- |
                <NuxtLink
                  to="https://annales.notyloops.com/cpge-mathematiques-2019-ece-hec-essec-rapport.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rapport
                </NuxtLink> -->
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h2>
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
              Ecricome
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2018-ece-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2018-ece-ecricome-corrige-et-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé et rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Edhec
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2018-ece-edhec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2018-ece-edhec-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              emlyon
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2018-ece-emlyon-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2018-ece-emlyon-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Essec
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2018-ece-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet épreuve 1
              </NuxtLink>
              <!-- |
                <NuxtLink
                  to="https://annales.notyloops.com/cpge-mathematiques-2018-ece-essec-rapport.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rapport
                </NuxtLink> -->
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2018-ece-essec-sujet-2.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet épreuve 2
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2018-ece-essec-rapport-2.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport épreuve 2
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              HEC
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2018-ece-hec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2018-ece-hec-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
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
            to="https://www.ecricome.org/ecricome-prepa-mathematiques/"
            target="_blank"
          >
            Ecricome : l'épreuve de culture générale
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="https://www.annales-prepa.fr/maths/ecrits/e/par-annee/"
            target="_blank"
          >
            Annales-Prépa
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="https://alainguichet.fr/ecs-touchard/wiki/doku.php?id=math:2:sujets"
            target="_blank"
          >
            Sujets depuis 2008
          </NuxtLink>
        </li>
      </ul> -->
  </main>
</template>
