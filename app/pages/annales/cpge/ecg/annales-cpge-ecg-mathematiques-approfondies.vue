<script setup>
let meta_description = 'Les annales BCE et Ecricome de mathématiques approfondies pour les CPGE ECG (voie générale).';
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
    name: 'Mathématiques approfondies',
    url: 'https://fr.optileague.com/ressources/annales-cpge-ecg-mathematiques-approfondies',
  },
];

useSchema({
  breadcrumb_items,
});

useHead({
  title: () => 'Annales CPGE ECG : mathématiques approfondies | NotyLoops',
  meta: [
    {
      name: 'description',
      content: () => meta_description,
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
      > Mathématiques approfondies
    </p>

    <h1>
      Annales CPGE ECG :
      mathématiques approfondies
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
                to="https://annales.notyloops.com/cpge-mathematiques-approfondies-2025-ecg-ecricome-sujet.pdf"
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
                to="https://annales.notyloops.com/cpge-mathematiques-approfondies-2025-ecg-edhec-sujet.pdf"
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
                to="https://annales.notyloops.com/cpge-mathematiques-approfondies-2025-ecg-emlyon-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP / HEC
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-approfondies-2025-ecg-escp-hec-sujet.pdf"
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
                to="https://annales.notyloops.com/cpge-mathematiques-approfondies-2025-ecg-essec-hec-sujet.pdf"
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
                to="https://annales.notyloops.com/cpge-mathematiques-approfondies-2024-ecg-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-approfondies-2024-ecg-ecricome-corrige-et-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-mathematiques-approfondies-2024-ecg-edhec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-approfondies-2024-ecg-edhec-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-mathematiques-approfondies-2024-ecg-emlyon-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-approfondies-2024-ecg-emlyon-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP / HEC
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-approfondies-2024-ecg-escp-hec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-approfondies-2024-ecg-escp-hec-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-mathematiques-approfondies-2024-ecg-essec-hec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-approfondies-2024-ecg-essec-hec-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-mathematiques-approfondies-2023-ecg-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-approfondies-2023-ecg-ecricome-corrige-et-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-mathematiques-approfondies-2023-ecg-edhec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-approfondies-2023-ecg-edhec-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-mathematiques-approfondies-2023-ecg-emlyon-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-approfondies-2023-ecg-emlyon-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP / HEC
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-approfondies-2023-ecg-escp-hec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <!-- |
                <NuxtLink
                  to="https://annales.notyloops.com/cpge-mathematiques-approfondies-2023-ecg-escp-hec-rapport.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rapport
                </NuxtLink> -->
            </td>
          </tr>
          <tr>
            <td>
              Essec / HEC
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-approfondies-2023-ecg-essec-hec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-approfondies-2023-ecg-essec-hec-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-mathematiques-2022-ecs-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2022-ecs-ecricome-corrige-et-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-mathematiques-2022-ecs-edhec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2022-ecs-edhec-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-mathematiques-2022-ecs-emlyon-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <!-- |
                <NuxtLink
                  to="https://annales.notyloops.com/cpge-mathematiques-2022-ecs-emlyon-rapport.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rapport
                </NuxtLink> -->
            </td>
          </tr>
          <tr>
            <td>
              HEC / ESCP
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2022-ecs-hec-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2022-ecs-hec-escp-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-mathematiques-2022-ecs-hec-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2022-ecs-hec-essec-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-mathematiques-2021-ecs-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2021-ecs-ecricome-corrige-et-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-mathematiques-2021-ecs-edhec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2021-ecs-edhec-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-mathematiques-2021-ecs-emlyon-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2021-ecs-emlyon-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              HEC / ESCP
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2021-ecs-hec-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2021-ecs-hec-escp-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-mathematiques-2021-ecs-hec-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2021-ecs-hec-essec-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-mathematiques-2020-ecs-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2020-ecs-ecricome-corrige-et-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-mathematiques-2020-ecs-edhec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2020-ecs-edhec-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-mathematiques-2020-ecs-emlyon-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2020-ecs-emlyon-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              HEC / ESCP
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2020-ecs-hec-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2020-ecs-hec-escp-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-mathematiques-2020-ecs-hec-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2020-ecs-hec-essec-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-mathematiques-2019-ecs-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2019-ecs-ecricome-corrige-et-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-mathematiques-2019-ecs-edhec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2019-ecs-edhec-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-mathematiques-2019-ecs-emlyon-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2019-ecs-emlyon-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              HEC / ESCP
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2019-ecs-hec-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2019-ecs-hec-escp-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-mathematiques-2019-ecs-hec-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2019-ecs-hec-essec-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-mathematiques-2018-ecs-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2018-ecs-ecricome-corrige-et-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-mathematiques-2018-ecs-edhec-sujet-epreuve-annulee.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet épreuve annulée
              </NuxtLink>
              <!-- |
                <NuxtLink
                  to="https://annales.notyloops.com/cpge-mathematiques-2019-ecs-edhec-rapport.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rapport
                </NuxtLink> -->
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2018-ecs-edhec-sujet-epreuve-valide.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet 2ème épreuve
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2018-ecs-edhec-corrige-epreuve-valide.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé 2ème épreuve
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              emlyon
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2018-ecs-emlyon-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <!-- |
                <NuxtLink
                  to="https://annales.notyloops.com/cpge-mathematiques-2018-ecs-emlyon-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-mathematiques-2018-ecs-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <!-- |
                <NuxtLink
                  to="https://annales.notyloops.com/cpge-mathematiques-2019-ecs-hec-escp-rapport.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rapport
                </NuxtLink> -->
            </td>
          </tr>
          <tr>
            <td>
              HEC / ESCP
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2018-ecs-hec-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <!-- |
                <NuxtLink
                  to="https://annales.notyloops.com/cpge-mathematiques-2018-ecs-hec-escp-rapport.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rapport
                </NuxtLink> -->
            </td>
          </tr>
          <tr>
            <td>
              HEC
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2018-ecs-hec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <!-- |
                <NuxtLink
                  to="https://annales.notyloops.com/cpge-mathematiques-2018-ecs-hec-rapport.pdf"
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
            to="https://www.annales-prepa.fr/maths/ecrits/s/par-annee/"
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
