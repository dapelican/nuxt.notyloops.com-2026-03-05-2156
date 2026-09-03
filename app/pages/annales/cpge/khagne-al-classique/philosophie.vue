<script setup>
const page_title = 'Annales khâgne A/L classique : philosophie';

let meta_description = 'Les annales de philosophie pour les CPGE littéraires A/L classique.';
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
    label: 'Khâgne A/L classique',
    to: '/annales/cpge/khagne-al-classique',
    url: 'https://fr.notyloops.com/annales/cpge/khagne-al-classique',
  },
  {
    label: 'Philosophie',
    to: '/annales/cpge/khagne-al-classique/philosophie',
    url: 'https://fr.notyloops.com/annales/cpge/khagne-al-classique/philosophie',
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

// useGoogleTag();
</script>

<template>
  <!-- app/pages/annales/cpge/khagne-al-classique/philosophie.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales khâgne A/L classique : philosophie
    </h1>

    <h2 class="mt-12">
      2027 - La politique, le droit
    </h2>

    <h2 class="mt-12">
      2026 - La science
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Banque d'épreuve
            </th>
            <th>
              Sujet
            </th>
            <th>
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              BCE
            </td>
            <td>
              La résistance du réel.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2026-al-bce-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2026-al-bce-rapport-philosophique.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              BEL
            </td>
            <td>
              L'autorité de la science.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2026-al-bel-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2026-al-bel-rapport.pdf"
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
      2025 - La morale
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Banque d'épreuve
            </th>
            <th>
              Sujet
            </th>
            <th>
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              BCE
            </td>
            <td>
              Le prix de la vertu.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2025-al-bce-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2025-al-bce-rapport-philosophique.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              BEL
            </td>
            <td>
              « Tu dois ».
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2025-al-bel-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2025-al-bel-rapport.pdf"
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
      2024 - La métaphysique
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Banque d'épreuve
            </th>
            <th>
              Sujet
            </th>
            <th>
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              BCE
            </td>
            <td>
              Être, c'est agir.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2024-al-bce-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2024-al-bce-rapport-philosophique.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              BEL
            </td>
            <td>
              Qu'est-ce que la réalité ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2024-al-bel-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2024-al-bel-rapport.pdf"
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
      2023 - Les sciences humaines : homme, langage, société
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Banque d'épreuve
            </th>
            <th>
              Sujet
            </th>
            <th>
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              BCE
            </td>
            <td>
              Communiquer.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2023-al-bce-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2023-al-bce-rapport-philosophique.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              BEL
            </td>
            <td>
              Quand y-a-t-il art ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2023-al-bel-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2023-al-bel-rapport.pdf"
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
      2022 - L'art, la technique
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Banque d'épreuve
            </th>
            <th>
              Sujet
            </th>
            <th>
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              BCE
            </td>
            <td>
              Les règles de l'art.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2022-al-bce-sujet-philosophique.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2022-al-bce-rapport-philosophique.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              BEL
            </td>
            <td>
              Toute conception de l'humain est-elle particulière ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2022-al-bel-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2022-al-bel-rapport.pdf"
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
              Sujet
            </th>
            <th>
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              BCE
            </td>
            <td>
              Le travail de la politique.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2021-al-bce-sujet-philosophique.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2021-al-bce-rapport-philosophique.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              BEL
            </td>
            <td>
              « L'État, c'est moi. »
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2021-al-bel-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2021-al-bel-rapport.pdf"
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
              Sujet
            </th>
            <th>
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              BCE
            </td>
            <td>
              Qu'est-ce qui gouverne la science ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2020-al-bce-sujet-philosophique.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2020-al-bce-rapport-philosophique.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2020-al-bce-bonne-copie-philosophique.pdf"
                target="_blank"
              >
                Bonne copie
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              BEL
            </td>
            <td>
              Science et objectivité.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2020-al-bel-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2020-al-bel-rapport.pdf"
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
              Sujet
            </th>
            <th>
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              BCE
            </td>
            <td>
              Qu'est-ce qui n'existe pas ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2019-al-bce-sujet-philosophique.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2019-al-bce-rapport-philosophique.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              BEL
            </td>
            <td>
              Peut-il y avoir des expériences métaphysiques ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2019-al-bel-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2019-al-bel-rapport.pdf"
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
              Sujet
            </th>
            <th>
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr>
            <td>
              BCE
            </td>
            <td>
              Le prix de la vertu.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2018-al-bce-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2018-al-bce-rapport-philosophique.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr> -->
          <tr>
            <td>
              BEL
            </td>
            <td>
              La responsabilité.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2018-al-bel-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2018-al-bel-rapport.pdf"
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
              Sujet
            </th>
            <th>
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr>
            <td>
              BCE
            </td>
            <td>
              Le prix de la vertu.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2017-al-bce-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2017-al-bce-rapport-philosophique.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr> -->
          <tr>
            <td>
              BEL
            </td>
            <td>
              Peut-on délimiter l'humain ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2017-al-bel-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2017-al-bel-rapport.pdf"
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
              Sujet
            </th>
            <th>
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr>
            <td>
              BCE
            </td>
            <td>
              Le prix de la vertu.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2016-al-bce-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2016-al-bce-rapport-philosophique.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr> -->
          <tr>
            <td>
              BEL
            </td>
            <td>
              Que peut-on interdire ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2016-al-bel-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2016-al-bel-rapport.pdf"
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
              Sujet
            </th>
            <th>
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr>
            <td>
              BCE
            </td>
            <td>
              Le prix de la vertu.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2015-al-bce-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2015-al-bce-rapport-philosophique.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr> -->
          <tr>
            <td>
              BEL
            </td>
            <td>
              Expliquer.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2015-al-bel-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2015-al-bel-rapport.pdf"
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
              Sujet
            </th>
            <th>
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr>
            <td>
              BCE
            </td>
            <td>
              Le prix de la vertu.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2014-al-bce-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2014-al-bce-rapport-philosophique.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr> -->
          <tr>
            <td>
              BEL
            </td>
            <td>
              Le corps peut-il être objet d'art ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2014-al-bel-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2014-al-bel-rapport.pdf"
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
              Sujet
            </th>
            <th>
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr>
            <td>
              BCE
            </td>
            <td>
              Le prix de la vertu.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2013-al-bce-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2013-al-bce-rapport-philosophique.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr> -->
          <tr>
            <td>
              BEL
            </td>
            <td>
              La cause.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2013-al-bel-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2013-al-bel-rapport.pdf"
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
              Sujet
            </th>
            <th>
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr>
            <td>
              BCE
            </td>
            <td>
              Le prix de la vertu.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2012-al-bce-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2012-al-bce-rapport-philosophique.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr> -->
          <tr>
            <td>
              BEL
            </td>
            <td>
              Qu'est-ce qui est hors la loi ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2012-al-bel-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2012-al-bel-rapport.pdf"
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
              Sujet
            </th>
            <th>
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr>
            <td>
              BCE
            </td>
            <td>
              Le prix de la vertu.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2011-al-bce-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2011-al-bce-rapport-philosophique.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr> -->
          <tr>
            <td>
              BEL
            </td>
            <td>
              Les sciences sont-elles une description du monde ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2011-al-bel-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2011-al-bel-rapport.pdf"
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
              Sujet
            </th>
            <th>
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr>
            <td>
              BCE
            </td>
            <td>
              Le prix de la vertu.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2010-al-bce-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2010-al-bce-rapport-philosophique.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr> -->
          <tr>
            <td>
              BEL
            </td>
            <td>
              L'imitation.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2010-al-bel-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2010-al-bel-rapport.pdf"
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
              Sujet
            </th>
            <th>
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr>
            <td>
              BCE
            </td>
            <td>
              Le prix de la vertu.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2009-al-bce-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2009-al-bce-rapport-philosophique.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr> -->
          <tr>
            <td>
              BEL
            </td>
            <td>
              Pourquoi punir ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2009-al-bel-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2009-al-bel-rapport.pdf"
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
              Sujet
            </th>
            <th>
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr>
            <td>
              BCE
            </td>
            <td>
              Le prix de la vertu.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2008-al-bce-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2008-al-bce-rapport-philosophique.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr> -->
          <tr>
            <td>
              ENS
            </td>
            <td>
              L'égalité.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2008-al-classique-ens-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2008-al-classique-ens-rapport.pdf"
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
              Sujet
            </th>
            <th>
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr>
            <td>
              BCE
            </td>
            <td>
              Le prix de la vertu.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2007-al-bce-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2007-al-bce-rapport-philosophique.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr> -->
          <tr>
            <td>
              ENS
            </td>
            <td>
              Peut-on tout dire ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2007-al-classique-ens-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2007-al-classique-ens-rapport.pdf"
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
              Sujet
            </th>
            <th>
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr>
            <td>
              BCE
            </td>
            <td>
              Le prix de la vertu.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2006-al-bce-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2006-al-bce-rapport-philosophique.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr> -->
          <tr>
            <td>
              ENS
            </td>
            <td>
              Faut-il avoir peur de la nature ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2006-al-classique-ens-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2006-al-classique-ens-rapport.pdf"
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
              Sujet
            </th>
            <th>
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr>
            <td>
              BCE
            </td>
            <td>
              Le prix de la vertu.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2005-al-bce-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2005-al-bce-rapport-philosophique.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr> -->
          <tr>
            <td>
              ENS
            </td>
            <td>
              Pourquoi y a-t-il des lois ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2005-al-classique-ens-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2005-al-classique-ens-rapport.pdf"
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
              Sujet
            </th>
            <th>
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr>
            <td>
              BCE
            </td>
            <td>
              Le prix de la vertu.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2004-al-bce-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2004-al-bce-rapport-philosophique.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr> -->
          <tr>
            <td>
              ENS
            </td>
            <td>
              Qu'est-ce que mourir ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2004-al-classique-ens-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2004-al-classique-ens-rapport.pdf"
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
              Sujet
            </th>
            <th>
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr>
            <td>
              BCE
            </td>
            <td>
              Le prix de la vertu.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2003-al-bce-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2003-al-bce-rapport-philosophique.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr> -->
          <tr>
            <td>
              ENS
            </td>
            <td>
              Peut-on s'en tenir au présent ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2003-al-classique-ens-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2003-al-classique-ens-rapport.pdf"
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
              Sujet
            </th>
            <th>
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr>
            <td>
              BCE
            </td>
            <td>
              Le prix de la vertu.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2002-al-bce-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2002-al-bce-rapport-philosophique.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr> -->
          <tr>
            <td>
              ENS
            </td>
            <td>
              Comment dire la vérité ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2002-al-classique-ens-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-philosophie-2002-al-classique-ens-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>
  </UContainer>
</template>
