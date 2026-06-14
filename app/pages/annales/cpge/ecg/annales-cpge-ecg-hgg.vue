<script setup>
let meta_description = 'Les annales BCE et Ecricome d\'histoire, géographie et géopolitique du monde';
meta_description += '  contemporain (HGG) pour les CPGE ECG (voie générale). Les sujets et rapports des dernières années.';

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
    name: 'Histoire, géographie et géopolitique du monde contemporain (HGG)',
    url: 'https://fr.optileague.com/ressources/annales-cpge-ecg-hgg',
  },
];

const breadcrumb_schema = useBreadcrumbSchema(breadcrumb_items);

useHead({
  title: () => 'Annales CPGE ECG : HGG | OptiLeague',
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
      > Histoire, géographie et géopolitique du monde contemporain (HGG)
    </p>

    <h1>
      Annales CPGE ECG :
      histoire, géographie et géopolitique du monde contemporain (HGG)
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
                  <br>Construire une Europe de la défense depuis les années 1950.
                </li>
                <li class="mt-1">
                  <b>Sujet 2</b>
                  <br>L'eau douce, enjeu de développement durable et de paix ?
                </li>
              </ul>
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2025-ecg-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <!-- <br>
                <NuxtLink
                  to="https://annales.notyloops.com/cpge-hgg-2025-ecg-ecricome-rapport.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rapport
                </NuxtLink> -->
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              La Chine, puissance rattrapée par ses vulnérabilités ?
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2025-ecg-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <!-- <br>
                <NuxtLink
                  to="https://annales.notyloops.com/cpge-hgg-2025-ecg-escp-rapport.pdf"
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
              Les arcs de crise dans le monde depuis le début de la guerre froide.
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2025-ecg-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <!-- <br>
                <NuxtLink
                  to="https://annales.notyloops.com/cpge-hgg-2025-ecg-essec-rapport.pdf"
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
                  <br>L'Afrique au XXIème siècle : de nouvelles dépendances post-coloniales ?
                </li>
                <li class="mt-1">
                  <b>Sujet 2</b>
                  <br>Sommes nous entrés dans l'ère de la démondialisation ?
                </li>
              </ul>
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2024-ecg-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2024-ecg-ecricome-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              Le changement climatique, un facteur de recomposition de la mondialisation.
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2024-ecg-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2024-ecg-escp-rapport.pdf"
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
              Globalisation et multiplication des frontières depuis 1990 : un paradoxe ?
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2024-ecg-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2024-ecg-essec-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Grenoble EM
            </td>
            <td>
              Globalisation et multiplication des frontières depuis 1990 : un paradoxe ?
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2024-ecg-grenoble-em-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2024-ecg-grenoble-em-rapport.pdf"
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
                  <br>FTN, auxiliaires ou concurrentes de la puissance des États ?
                </li>
                <li class="mt-1">
                  <b>Sujet 2</b>
                  <br>Chine et Inde, partenaires ou rivales ?
                </li>
              </ul>
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2023-ecg-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2023-ecg-ecricome-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              Instabilités et violences en Amérique latine.
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2023-ecg-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2023-ecg-escp-rapport.pdf"
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
              La France, puissance d'influence mondiale ?
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2023-ecg-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2023-ecg-essec-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Grenoble EM
            </td>
            <td>
              Une guerre économique permet-elle de régler un différend international ?
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2023-ecg-grenoble-em-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2023-ecg-grenoble-em-rapport.pdf"
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
                  <br>Le nucléaire dans les relations internationales.
                </li>
                <li class="mt-1">
                  <b>Sujet 2</b>
                  <br>Le Pacifique : de nouvelles réalités stratégiques ?
                </li>
              </ul>
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2022-ecs-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2022-ecs-ecricome-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              Vers un retour des frontières ?
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2022-ecs-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2022-ecs-escp-rapport.pdf"
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
              Le contrôle des routes stratégiques depuis 1913, vecteur de domination mondiale pour les États.
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2022-ecs-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2022-ecs-essec-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Grenoble EM
            </td>
            <td>
              Une gouvernance mondiale de plus en plus efficace ?
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2022-ecs-grenoble-em-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2022-ecs-grenoble-em-rapport.pdf"
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
                  <br>Le monde arabe entre intégration et fragmentations.
                </li>
                <li class="mt-1">
                  <b>Sujet 2</b>
                  <br>Agriculture et alimentation : comment assurer la sécurité alimentaire aujourd'hui et demain ?
                </li>
              </ul>
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2021-ecs-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2021-ecs-ecricome-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              Mondialisation et mise en concurrence des pays et des territoires pour attirer les activités économiques.
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2021-ecs-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2021-ecs-escp-rapport.pdf"
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
              La maîtrise des espaces communs (maritime, aérien, extra-atmosphérique et numérique), enjeu de puissance par les États depuis 1945.
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2021-ecs-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2021-ecs-essec-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Grenoble EM
            </td>
            <td>
              La politique commerciale, vecteur de la puissance américaine ?
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2021-ecs-grenoble-em-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2021-ecs-grenoble-em-rapport.pdf"
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
                  <br>L'influence de la France en Europe : héritages et mutations contemporaines.
                </li>
                <li class="mt-1">
                  <b>Sujet 2</b>
                  <br>La recherche et les nouvelles technologies introduisent-elles de nouveaux rapports de force mondiaux ?
                </li>
              </ul>
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2020-ecs-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2020-ecs-ecricome-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              La France dans la recomposition des puissances dominantes.
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2020-ecs-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <!-- <br>
                <NuxtLink
                  to="https://annales.notyloops.com/cpge-hgg-2020-ecs-escp-rapport.pdf"
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
              Le bassin méditerranéen : un espace de crises et de rivalités internationales depuis la fin de la guerre froide.
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2020-ecs-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2020-ecs-essec-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Grenoble EM
            </td>
            <td>
              La Chine est-elle un colosse aux pieds d'argile ?
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2020-ecs-grenoble-em-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2020-ecs-grenoble-em-rapport.pdf"
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
                  <br>La Chine installe-t-elle un nouvel ordre mondial ?
                </li>
                <li class="mt-1">
                  <b>Sujet 2</b>
                  <br>Les Etats-Unis et l'Union européenne dans le nouvel ordre économique et géopolitique mondial : la fin de l'Occident ?
                </li>
              </ul>
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2019-ecs-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2019-ecs-ecricome-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              Les matières premières dans la stratégie de puissance des Etats.
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2019-ecs-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2019-ecs-escp-rapport.pdf"
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
              La puissance chinoise en Asie orientale.
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2019-ecs-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2019-ecs-essec-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Grenoble EM
            </td>
            <td>
              Le multilatéralisme est-il menacé ?
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2019-ecs-grenoble-em-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              <br>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-hgg-2019-ecs-grenoble-em-rapport.pdf"
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
            to="https://www.ecricome.org/ecricome-prepa-hggmc/"
            target="_blank"
          >
            Ecricome : l'épreuve de culture générale
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="https://www.annales-prepa.fr/hgg/ecrits/par-annee/"
            target="_blank"
          >
            Annales-Prépa
          </NuxtLink>
        </li>
      </ul> -->
  </main>
</template>
