<script setup>
const page_title = 'Annales CPGE ECG : ESH';

let meta_description = 'Les annales BCE et Ecricome d\'économie, sociologie et histoire du monde contemporain';
meta_description += ' (ESH) pour les CPGE ECG (voie générale). Les sujets et rapports des dernières années.';

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
    label: 'ECG',
    to: '/annales/cpge/ecg',
    url: 'https://fr.notyloops.com/annales/cpge/ecg',
  },
  {
    label: 'ESH',
    to: '/annales/cpge/ecg/esh',
    url: 'https://fr.notyloops.com/annales/cpge/ecg/esh',
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
  <!-- app/pages/annales/cpge/ecg/esh.vue -->
  <UContainer class="max-w-2xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales CPGE ECG :
      économie, sociologie et histoire du monde contemporain (ESH)
    </h1>

    <h2 class="mt-12">
      2026
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th scope="col">
              Épreuve
            </th>
            <th scope="col">
              Sujet
            </th>
            <th scope="col">
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
              <ul class="unstyled-list mt-0 mb-0">
                <li>
                  <b>Sujet 1</b>
                  <br>Innovation et croissance (depuis le 19e siècle)
                </li>
                <li class="mt-1">
                  <b>Sujet 2</b>
                  <br>L'expérience historique nous a-t-elle appris ce qu'était une bonne stratégie de développement ?
                </li>
              </ul>
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2026-ecg-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <!-- <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2026-ecg-ecricome-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              ESCP / Skema
            </td>
            <td>
              Y a-t-il une limite à l'endettement public ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2026-ecg-escp-skema-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <!-- <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2026-ecg-escp-skema-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              Essec / HEC
            </td>
            <td>
              Le court terme est-il l'ennemi du long terme ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2026-ecg-essec-hec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <!-- <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2026-ecg-essec-hec-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
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
            <th scope="col">
              Épreuve
            </th>
            <th scope="col">
              Sujet
            </th>
            <th scope="col">
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
              <ul class="unstyled-list mt-0 mb-0">
                <li>
                  <b>Sujet 1</b>
                  <br>Le pouvoir d'achat, instrument ou objectif ?
                </li>
                <li class="mt-1">
                  <b>Sujet 2</b>
                  <br>Quelles sont les limites de la responsabilité des entreprises ?
                </li>
              </ul>
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2025-ecg-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2025-ecg-ecricome-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP / Skema
            </td>
            <td>
              Comment la théorie économique appréhende-t-elle l'entreprise ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2025-ecg-escp-skema-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2025-ecg-escp-skema-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Essec / HEC
            </td>
            <td>
              Les fractures sociales affectent-elles la réalisation des équilibres économiques ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2025-ecg-essec-hec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2025-ecg-essec-hec-rapport.pdf"
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
      2024
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th scope="col">
              Épreuve
            </th>
            <th scope="col">
              Sujet
            </th>
            <th scope="col">
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
              <ul class="unstyled-list mt-0 mb-0">
                <li>
                  <b>Sujet 1</b>
                  <br>La consommation, moteur principal de la croissance depuis le XIXe siècle ?
                </li>
                <li class="mt-1">
                  <b>Sujet 2</b>
                  <br>Faut-il lutter contre les délocalisations ?
                </li>
              </ul>
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2024-ecg-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2024-ecg-ecricome-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP / Skema
            </td>
            <td>
              L'ouverture au commerce international appartient-elle au passé ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2024-ecg-escp-skema-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2024-ecg-escp-skema-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Essec / HEC
            </td>
            <td>
              Pourquoi et comment évaluer les politiques publiques ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2024-ecg-essec-hec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2024-ecg-essec-hec-rapport.pdf"
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
            <th scope="col">
              Épreuve
            </th>
            <th scope="col">
              Sujet
            </th>
            <th scope="col">
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
              <ul class="unstyled-list mt-0 mb-0">
                <li>
                  <b>Sujet 1</b>
                  <br>Dans une large perspective historique, vous vous interrogerez sur le rôle des banques centrales dans les économies développées.
                </li>
                <li class="mt-1">
                  <b>Sujet 2</b>
                  <br>Qu'est-ce qu'un bon SMI ?
                </li>
              </ul>
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2023-ecg-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2023-ecg-ecricome-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP / Skema
            </td>
            <td>
              « Le premier objectif de la Banque centrale est d'assurer la stabilité des prix »,
              Traité sur le fonctionnement de l'Union européenne (TFEU).
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2023-ecg-escp-skema-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2023-ecg-escp-skema-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Essec / HEC
            </td>
            <td>
              La décroissance peut-elle être compatible avec l'état-providence ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2023-ecg-essec-hec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2023-ecg-essec-hec-rapport.pdf"
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
            <th scope="col">
              Épreuve
            </th>
            <th scope="col">
              Sujet
            </th>
            <th scope="col">
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
              <ul class="unstyled-list mt-0 mb-0">
                <li>
                  <b>Sujet 1</b>
                  <br>Le libre échange est-il « une théorie sans réalité et le protectionnisme, une réalité sans théorie » ?
                  (citation de Paul Bairoch)
                </li>
                <li class="mt-1">
                  <b>Sujet 2</b>
                  <br>Inégalités et croissance.
                </li>
              </ul>
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2022-ece-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2022-ece-ecricome-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP / Skema
            </td>
            <td>
              Comment les révolutions technologiques influent-elles sur la croissance économique ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2022-ece-escp-skema-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2022-ece-escp-skema-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              HEC / Essec
            </td>
            <td>
              L'ouverture commerciale est-elle toujours facteur de prospérité économique et sociale ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2022-ece-hec-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2022-ece-hec-essec-rapport.pdf"
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
            <th scope="col">
              Épreuve
            </th>
            <th scope="col">
              Sujet
            </th>
            <th scope="col">
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
              <ul class="unstyled-list mt-0 mb-0">
                <li>
                  <b>Sujet 1</b>
                  <br>La Division Internationale des Processus Productifs fragilise-t-elle les économies nationales ?
                </li>
                <li class="mt-1">
                  <b>Sujet 2</b>
                  <br>Les assurances chômage ont-elles de l'influence sur le niveau du chômage ?
                </li>
              </ul>
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2021-ece-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2021-ece-ecricome-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP / Skema
            </td>
            <td>
              Un monde sans inflation.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2021-ece-escp-skema-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <!-- <br>
                <ULink class="text-primary"
                  to="https://annales.notyloops.com/cpge-esh-2021-ece-hec-essec-rapport.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rapport
                </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              Essec
            </td>
            <td>
              La désindustrialisation : une fatalité ? La réindustrialisation : une utopie ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2021-ece-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2021-ece-essec-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              HEC
            </td>
            <td>
              Toute destruction est-elle créatrice ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2021-ece-hec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2021-ece-hec-rapport.pdf"
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
            <th scope="col">
              Épreuve
            </th>
            <th scope="col">
              Sujet
            </th>
            <th scope="col">
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
              <ul class="unstyled-list mt-0 mb-0">
                <li>
                  <b>Sujet 1</b>
                  <br>Les politiques économiques peuvent-elles éviter les crises économiques ?
                </li>
                <li class="mt-1">
                  <b>Sujet 2</b>
                  <br>Peut-on réguler le commerce international ?
                </li>
              </ul>
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2020-ece-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2020-ece-ecricome-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP / Skema
            </td>
            <td>
              Faut-il craindre le retour de la concentration industrielle ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2020-ece-escp-skema-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <!-- <br>
                <ULink class="text-primary"
                  to="https://annales.notyloops.com/cpge-esh-2020-ece-escp-skema-rapport.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rapport
                </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              Essec
            </td>
            <td>
              Le modèle social français est-il à bout de souffle ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2020-ece-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2020-ece-essec-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              HEC
            </td>
            <td>
              Le capitalisme est-il soutenable ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2020-ece-hec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2020-ece-hec-rapport.pdf"
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
      2019
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th scope="col">
              Épreuve
            </th>
            <th scope="col">
              Sujet
            </th>
            <th scope="col">
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
              <ul class="unstyled-list mt-0 mb-0">
                <li>
                  <b>Sujet 1</b>
                  <br>Qu'est-ce qui a fait et qui fait du dollar une monnaie internationale ?
                </li>
                <li class="mt-1">
                  <b>Sujet 2</b>
                  <br>Protection sociale et croissance économique depuis le XIXe siècle.
                </li>
              </ul>
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2019-ece-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2019-ece-ecricome-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP / Skema
            </td>
            <td>
              Dans quelle mesure la contrainte environnementale peut-elle modifier les conditions de la croissance ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2019-ece-escp-skema-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2019-ece-escp-skema-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Essec
            </td>
            <td>
              Les prélèvements obligatoires nuisent-ils à la croissance et à la compétitivité ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2019-ece-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2019-ece-essec-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              HEC
            </td>
            <td>
              Performances économiques et justice sociale.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2019-ece-hec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-esh-2019-ece-hec-rapport.pdf"
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
            to="https://www.ecricome.org/ecricome-prepa-esh/"
            target="_blank"
          >
            Ecricome : l'épreuve de culture générale
          </ULink>
        </li>
        <li>
          <ULink class="text-primary"
            to="https://www.annales-prepa.fr/esh/ecrits/par-annee/"
            target="_blank"
          >
            Annales-Prépa
          </ULink>
        </li>
      </ul> -->
  </UContainer>
</template>
