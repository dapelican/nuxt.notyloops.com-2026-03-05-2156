<script setup>
let meta_description = 'Les annales BCE et Ecricome de mathématiques pour les CPGE ECT (voie technologique).';
meta_description += ' Les sujets, rapports et corrigés des dernières années.';

const breadcrumb_items = [
  {
    name: 'Ressources',
    url: 'https://fr.optileague.com/ressources',
  },
  {
    name: 'Annales CPGE ECT',
    url: 'https://fr.optileague.com/ressources/annales-cpge-ect',
  },
  {
    name: 'Mathématiques',
    url: 'https://fr.optileague.com/ressources/annales-cpge-ect-mathematiques',
  },
];

useSchema({
  breadcrumb_items,
});

useHead({
  title: () => 'Annales CPGE ECT : mathématiques | NotyLoops',
  meta: [
    {
      name: 'description',
      content: () => meta_description,
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
        to="/ressources/annales-cpge-ect"
      >
        Annales CPGE ECT
      </NuxtLink>
      > Mathématiques
    </p>

    <h1>
      Annales CPGE ECT :
      mathématiques
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
              BSB
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2025-ect-bsb-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Ecricome
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2025-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2025-ect-escp-sujet.pdf"
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
              BSB
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2024-ect-bsb-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2024-ect-bsb-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Ecricome
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2024-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2024-ect-ecricome-corrige-et-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé et rapport de jury
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2024-ect-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2024-ect-escp-rapport.pdf"
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
              BSB
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2023-ect-bsb-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2023-ect-bsb-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Ecricome
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2023-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2023-ect-ecricome-corrige-et-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé et rapport de jury
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2023-ect-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2023-ect-escp-rapport.pdf"
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
              BSB
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2022-ect-bsb-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2022-ect-bsb-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Ecricome
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2022-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2022-ect-ecricome-corrige-et-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé et rapport de jury
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2022-ect-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2022-ect-escp-rapport.pdf"
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
              BSB
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2021-ect-bsb-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2021-ect-bsb-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Ecricome
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2021-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2021-ect-ecricome-corrige-et-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé et rapport de jury
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2021-ect-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2021-ect-escp-rapport.pdf"
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
              BSB
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2020-ect-bsb-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2020-ect-bsb-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Ecricome
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2020-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2020-ect-ecricome-corrige-et-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé et rapport de jury
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2020-ect-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2020-ect-escp-rapport.pdf"
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
              BSB
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2019-ect-bsb-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2019-ect-bsb-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Ecricome
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2019-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2019-ect-ecricome-corrige-et-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé et rapport de jury
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2019-ect-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2019-ect-escp-rapport.pdf"
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
              BSB
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2018-ect-bsb-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2018-ect-bsb-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Ecricome
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2018-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2018-ect-ecricome-corrige-et-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé et rapport de jury
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2018-ect-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2018-ect-escp-rapport.pdf"
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
      2017
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
              BSB
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2017-ect-bsb-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Ecricome
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2017-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2017-ect-ecricome-corrige-et-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé et rapport de jury
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2017-ect-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2017-ect-escp-rapport.pdf"
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
      2016
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
                to="https://annales.notyloops.com/cpge-mathematiques-2016-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2016-ect-ecricome-corrige-et-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé et rapport de jury
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESC Dijon
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2016-ect-esc-dijon-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2016-ect-esc-dijon-rapport.pdf"
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
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2016-ect-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2016-ect-escp-rapport.pdf"
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
      2015
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
              ESCP
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2015-ect-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2015-ect-escp-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Inseec
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2015-ect-inseec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2015-ect-inseec-rapport.pdf"
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
      2014
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
                to="https://annales.notyloops.com/cpge-mathematiques-2014-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2014-ect-escp-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              Inseec
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2014-ect-inseec-sujet.pdf"
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
      2013 (nouveau programme)
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
                to="https://annales.notyloops.com/cpge-mathematiques-2013-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESC Chambéry
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2013-ect-esc-chambery-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2013-ect-escp-sujet.pdf"
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
      2012
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
                to="https://annales.notyloops.com/cpge-mathematiques-2012-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESC Chambéry
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2012-ect-esc-chambery-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2012-ect-escp-sujet.pdf"
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
      2011
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
                to="https://annales.notyloops.com/cpge-mathematiques-2011-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESC Chambéry
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2011-ect-esc-chambery-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2011-ect-escp-sujet.pdf"
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
      2010
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
                to="https://annales.notyloops.com/cpge-mathematiques-2010-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESC Chambéry
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2010-ect-esc-chambery-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2010-ect-escp-sujet.pdf"
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
      2009
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
                to="https://annales.notyloops.com/cpge-mathematiques-2009-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESC Chambéry
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2009-ect-esc-chambery-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESCP
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2009-ect-escp-sujet.pdf"
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
      2008
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
                to="https://annales.notyloops.com/cpge-mathematiques-2008-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2008-ect-ecricome-corrige-et-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé et rapport de jury
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESC Chambéry
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2008-ect-esc-chambery-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              HEC - ESCP
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2008-ect-hec-escp-sujet-2.pdf"
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
      2007
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
                to="https://annales.notyloops.com/cpge-mathematiques-2007-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2007-ect-ecricome-corrige-et-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé et rapport de jury
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESC Chambéry
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2007-ect-esc-chambery-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              HEC - ESCP
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2007-ect-hec-escp-sujet-2.pdf"
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
      2006
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
                to="https://annales.notyloops.com/cpge-mathematiques-2006-ect-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2006-ect-ecricome-corrige-et-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corrigé et rapport de jury
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              ESC
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2006-ect-esc-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td>
              HEC - ESCP
            </td>
            <td>
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2006-ect-hec-escp-sujet-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet 1
              </NuxtLink>
              |
              <NuxtLink
                to="https://annales.notyloops.com/cpge-mathematiques-2006-ect-hec-escp-sujet-2.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet 2
              </NuxtLink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <!-- <h2>
        2007
      </h2>

      <h2>
        2006
      </h2>

      <h2>
        2005 (nouveau programme)
      </h2> -->

    <!-- <h2>
        Sources
      </h2>

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
            Ecricome : l'épreuve de mathématiques
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="https://www.education.gouv.fr/bo/21/Special1/ESRS2035788A.htm"
            target="_blank"
          >
            Programme 2023
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="https://www.education.gouv.fr/pid285/bulletin_officiel.html?pid_bo=29620"
            target="_blank"
          >
            Programme 2013
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="https://prepa-ect.alexgelin.fr/Annales/"
            target="_blank"
          >
            Page d'Alex Gélin
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="https://alainguichet.fr/ecs-touchard/wiki/doku.php?id=math:2:sujets"
            target="_blank"
          >
            Page d'Alain Guichet
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="https://www.lemondeprepa.fr/HEC.html"
            target="_blank"
          >
            LeMondePrépa.Fr
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="https://www.praqsi.com/mathematiques"
            target="_blank"
          >
            Annales de mathématiques
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="https://www.hec.edu/fr/epreuves-ecrites/mathematiques"
            target="_blank"
          >
            HEC
          </NuxtLink>
        </li>
      </ul> -->
  </main>
</template>
