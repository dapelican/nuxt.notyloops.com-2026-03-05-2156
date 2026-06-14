<script setup>
let meta_description = 'Les annales BCE et Ecricome d\'économie, sociologie et histoire du monde contemporain';
meta_description += ' (ESH) pour les CPGE ECG (voie générale). Les sujets et rapports des dernières années.';

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
    name: 'Économie, sociologie et histoire du monde contemporain (ESH)',
    url: 'https://fr.optileague.com/ressources/annales-cpge-ecg-esh',
  },
];

const breadcrumb_schema = useBreadcrumbSchema(breadcrumb_items);

useHead({
  title: () => 'Annales CPGE ECG : ESH | OptiLeague',
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
      > Économie, sociologie et histoire du monde contemporain (ESH)
    </p>

    <h1>
      Annales CPGE ECG :
      économie, sociologie et histoire du monde contemporain (ESH)
    </h1>

    <h2>
      2025
    </h2>

    <figure class="ml-0">
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
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2025-ecg-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <!-- <br>
                <NuxtLink
                  to="https://annales.notyloops.com/cpge-esh-2025-ecg-ecricome-rapport.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rapport
                </NuxtLink> -->
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
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2025-ecg-escp-skema-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <!-- <br>
                <NuxtLink
                  to="https://annales.notyloops.com/cpge-esh-2025-ecg-escp-skema-rapport.pdf"
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
              Les fractures sociales affectent-elles la réalisation des équilibres économiques ?
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2025-ecg-essec-hec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <!-- <br>
                <NuxtLink
                  to="https://annales.notyloops.com/cpge-esh-2025-ecg-essec-hec-rapport.pdf"
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
      2024
    </h2>

    <figure class="ml-0">
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
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2024-ecg-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2024-ecg-ecricome-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
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
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2024-ecg-escp-skema-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2024-ecg-escp-skema-rapport.pdf"
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
              Pourquoi et comment évaluer les politiques publiques ?
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2024-ecg-essec-hec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2024-ecg-essec-hec-rapport.pdf"
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
      2023
    </h2>

    <figure class="ml-0">
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
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2023-ecg-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2023-ecg-ecricome-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
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
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2023-ecg-escp-skema-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2023-ecg-escp-skema-rapport.pdf"
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
              La décroissance peut-elle être compatible avec l'état-providence ?
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2023-ecg-essec-hec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2023-ecg-essec-hec-rapport.pdf"
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
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2022-ece-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2022-ece-ecricome-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
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
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2022-ece-escp-skema-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2022-ece-escp-skema-rapport.pdf"
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
              L'ouverture commerciale est-elle toujours facteur de prospérité économique et sociale ?
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2022-ece-hec-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2022-ece-hec-essec-rapport.pdf"
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
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2021-ece-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2021-ece-ecricome-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
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
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2021-ece-escp-skema-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <!-- <br>
                <NuxtLink
                  to="https://annales.notyloops.com/cpge-esh-2021-ece-hec-essec-rapport.pdf"
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
              La désindustrialisation : une fatalité ? La réindustrialisation : une utopie ?
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2021-ece-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2021-ece-essec-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
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
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2021-ece-hec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2021-ece-hec-rapport.pdf"
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
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2020-ece-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2020-ece-ecricome-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
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
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2020-ece-escp-skema-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <!-- <br>
                <NuxtLink
                  to="https://annales.notyloops.com/cpge-esh-2020-ece-escp-skema-rapport.pdf"
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
              Le modèle social français est-il à bout de souffle ?
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2020-ece-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2020-ece-essec-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
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
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2020-ece-hec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2020-ece-hec-rapport.pdf"
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
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2019-ece-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2019-ece-ecricome-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
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
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2019-ece-escp-skema-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2019-ece-escp-skema-rapport.pdf"
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
              Les prélèvements obligatoires nuisent-ils à la croissance et à la compétitivité ?
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2019-ece-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2019-ece-essec-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
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
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2019-ece-hec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-esh-2019-ece-hec-rapport.pdf"
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
            to="https://www.ecricome.org/ecricome-prepa-esh/"
            target="_blank"
          >
            Ecricome : l'épreuve de culture générale
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="https://www.annales-prepa.fr/esh/ecrits/par-annee/"
            target="_blank"
          >
            Annales-Prépa
          </NuxtLink>
        </li>
      </ul> -->
  </main>
</template>
