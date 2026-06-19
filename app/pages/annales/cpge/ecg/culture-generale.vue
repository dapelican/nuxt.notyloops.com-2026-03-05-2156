<script setup>
const page_title = 'Annales CPGE ECG : culture générale (dissertation)';

let meta_description = 'Les annales BCE et Ecricome de culture générale (dissertation) pour les CPGE ECG (voie technologique).';
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
    label: 'ECG',
    to: '/annales/cpge/ecg',
    url: 'https://fr.notyloops.com/annales/cpge/ECG',
  },
  {
    label: 'Culture générale',
    to: '/annales/cpge/ecg/culture-generale',
    url: 'https://fr.notyloops.com/annales/cpge/ecg/culture-generale',
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
  <!-- app/pages/annales/cpge/ECG/culture-generale.vue -->
  <UContainer class="max-w-2xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales CPGE ECG :
      culture générale (dissertation)
    </h1>

    <h2 class="mt-12">
      2027 - L'humanité
    </h2>

    <h2 class="mt-12">
      2026 - Juger
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
              <ul>
                <li>
                  <b>Sujet 1 (dans le thème)</b>
                  <br>De quoi ne peut-on juger ?
                </li>
                <li class="mt-1">
                  <b>Sujet 2 (hors thème)</b>
                  <br>Vouloir l'impossible.
                </li>
              </ul>
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2026-ec-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Edhec / Essec
            </td>
            <td>
              Juger en toute liberté.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2026-ecg-edhec-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              emlyon / HEC
            </td>
            <td>
              À trop juger.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2026-ecg-emlyon-hec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h2 class="mt-12">
      2025 - L'image
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
              <ul>
                <li>
                  <b>Sujet 1 (dans le thème)</b>
                  <br>Qu'est-ce qui apparaît dans l'image ?
                </li>
                <li class="mt-1">
                  <b>Sujet 2 (hors thème)</b>
                  <br>L'inhumain.
                </li>
              </ul>
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2025-ec-ecricome-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2025-ec-ecricome-rapport.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Edhec / Essec
            </td>
            <td>
              Le mystère des images.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2025-ecg-edhec-essec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2025-ecg-edhec-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              emlyon / HEC
            </td>
            <td>
              Sauver les images.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2025-ecg-emlyon-hec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2025-ecg-emlyon-hec-rapport.pdf"
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
      2024 - La violence
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Épreuve
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
              Ecricome
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet 1 (dans le thème)</b>
                  <br>Y a-t-il une violence rationnelle ?
                </li>
                <li class="mt-1">
                  <b>Sujet 2 (hors thème)</b>
                  <br>Nécessité fait loi.
                </li>
              </ul>
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2024-ec-ecricome-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2024-ec-ecricome-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Edhec / Essec
            </td>
            <td>
              La violence peut-elle être mesurée ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2024-ecg-edhec-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2024-ecg-edhec-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              emlyon / HEC
            </td>
            <td>
              Sois sage, Ô ma violence.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2024-ecg-emlyon-hec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2024-ecg-emlyon-hec-rapport.pdf"
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
      2023 - Le monde
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Épreuve
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
              Ecricome
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet 1 (dans le thème)</b>
                  <br>Être hors du monde.
                </li>
                <li class="mt-1">
                  <b>Sujet 2 (hors thème)</b>
                  <br>Avoir de l'esprit.
                </li>
              </ul>
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2023-ec-ecricome-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2023-ec-ecricome-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Edhec / Essec
            </td>
            <td>
              Le nouveau monde.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2023-ecg-edhec-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2023-ecg-edhec-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              emlyon / HEC
            </td>
            <td>
              L'épreuve du monde.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2023-ecg-emlyon-hec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2023-ecg-emlyon-hec-rapport.pdf"
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
      2022 - Aimer
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Épreuve
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
              Ecricome
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet 1 (dans le thème)</b>
                  <br>Peut-on ne rien aimer ?
                </li>
                <li class="mt-1">
                  <b>Sujet 2 (hors thème)</b>
                  <br>Qu'est-ce que perdre son temps ?
                </li>
              </ul>
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2022-ec-ecricome-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2022-ec-ecricome-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Edhec / Essec
            </td>
            <td>
              Pensez-vous, comme l'a écrit La Rochefoucauld, qu' « il y a des gens
              qui n'auraient jamais été amoureux s'ils n'avaient jamais entendu parler de l'amour » ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2022-ec-edhec-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2022-ec-edhec-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              emlyon / HEC
            </td>
            <td>
              Aimer, est-ce perdre ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2022-ec-emlyon-hec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2022-ec-emlyon-hec-rapport.pdf"
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
      2021 - L'animal
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Épreuve
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
              Ecricome
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet 1 (dans le thème)</b>
                  <br>Qu'est-ce qu'une vie animale ?
                </li>
                <li class="mt-1">
                  <b>Sujet 2 (hors thème)</b>
                  <br>Les droits de l'État.
                </li>
              </ul>
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2021-ec-ecricome-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2021-ec-ecricome-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Edhec / Essec
            </td>
            <td>
              <b>Sujet de secours</b>
              <br>
              Pensez-vous, comme l'a écrit Montaigne, qu' « il se trouve plus de différence
              de tel homme à tel homme que de tel animal à tel homme » ?
              <br><br>
              <b>Sujet initial</b>
              <br>La communication animale est-elle un langage ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2021-ec-edhec-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2021-ec-edhec-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              emlyon / HEC
            </td>
            <td>
              Dire l'animal.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2021-ec-emlyon-hec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2021-ec-emlyon-hec-rapport.pdf"
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
      2020 - Le désir
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Épreuve
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
              Ecricome
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet 1 (dans le thème)</b>
                  <br>Nos désirs nous divisent-ils ?
                </li>
                <li class="mt-1">
                  <b>Sujet 2 (hors thème)</b>
                  <br>La croyance échappe-t-elle à toute logique ?
                </li>
              </ul>
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2020-ec-ecricome-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2020-ec-ecricome-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Edhec / Essec
            </td>
            <td>
              Désir et réalité.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2020-ec-edhec-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2020-ec-edhec-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              emlyon / HEC
            </td>
            <td>
              Peut-il y avoir une civilisation du désir ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2020-ec-emlyon-hec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2020-ec-emlyon-hec-rapport.pdf"
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
      2019 - La mémoire
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Épreuve
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
              Ecricome
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet 1 (dans le thème)</b>
                  <br>Mémoire et répétition.
                </li>
                <li class="mt-1">
                  <b>Sujet 2 (hors thème)</b>
                  <br>Faut-il tout critiquer ?
                </li>
              </ul>
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2019-ec-ecricome-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2019-ec-ecricome-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Edhec / Essec
            </td>
            <td>
              Que perd-on quand on perd la mémoire ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2019-ec-edhec-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2019-ec-edhec-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              emlyon / HEC
            </td>
            <td>
              Les blessures de la mémoire.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2019-ec-emlyon-hec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2019-ec-emlyon-hec-rapport.pdf"
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
      2018 - Le corps
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Épreuve
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
              Ecricome
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet 1 (dans le thème)</b>
                  <br>Qu'est-ce qui fait qu'un corps est humain ?
                </li>
                <li class="mt-1">
                  <b>Sujet 2 (hors thème)</b>
                  <br>Rester soi-même.
                </li>
              </ul>
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2018-ec-ecricome-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2018-ec-ecricome-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Edhec / Essec
            </td>
            <td>
              Qu'est-ce qui fait qu'un corps est humain ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2018-ec-edhec-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2018-ec-edhec-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              emlyon
            </td>
            <td>
              Que faire de notre corps ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2018-ec-emlyon-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2018-ec-emlyon-rapport.pdf"
                target="_blank"
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
              Mon corps et moi.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2018-ec-hec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2018-ec-hec-rapport.pdf"
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
      2017 - La parole
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Épreuve
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
              Ecricome
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet 1 (dans le thème)</b>
                  <br>Parler peut-il être créateur ?
                </li>
                <li class="mt-1">
                  <b>Sujet 2 (hors thème)</b>
                  <br>Est-il raisonnable d'espérer ?
                </li>
              </ul>
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2017-ec-ecricome-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2017-ec-ecricome-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              Edhec / Essec
            </td>
            <td>
              La force de la parole.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2017-ec-edhec-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2017-ec-edhec-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              emlyon
            </td>
            <td>
              Une parole peut-elle faire événement ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2017-ec-emlyon-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2017-ec-emlyon-rapport.pdf"
                target="_blank"
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
              Faire parler un texte.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2017-ec-hec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2017-ec-hec-rapport.pdf"
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
      2016 - La nature
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Épreuve
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
              Ecricome
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet 1 (dans le thème)</b>
                  <br>Le spECGacle de la nature nous révèle-t-il quelque chose de nous-mêmes ?
                </li>
                <li class="mt-1">
                  <b>Sujet 2 (hors thème)</b>
                  <br>Les rêveurs sont-ils inutiles ?
                </li>
              </ul>
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2016-ec-ecricome-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- <br>
                <ULink
                  class="text-primary"
                  to=""
                  target="_blank"
                >
                  Rapport
                </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              Edhec / Essec
            </td>
            <td>
              Le livre de la nature.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2016-ec-edhec-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2016-ec-edhec-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              emlyon
            </td>
            <td>
              Peut-on renoncer à l'idée de nature ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2016-ec-emlyon-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2016-ec-emlyon-rapport.pdf"
                target="_blank"
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
              Un monde sans nature.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2016-ec-hec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2016-ec-hec-rapport.pdf"
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
      2015 - La vérité
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Épreuve
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
              Ecricome
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet 1 (dans le thème)</b>
                  <br>En quel sens peut-on dire d'une chose qu'elle est vraie ?
                </li>
                <li class="mt-1">
                  <b>Sujet 2 (hors thème)</b>
                  <br>Pourquoi punir ?
                </li>
              </ul>
            </td>
            <td>
              <!-- <ULink
                  class="text-primary"
                  to=""
                  target="_blank"
                >
                  Sujet
                </ULink> -->
              <!-- <br>
                <ULink
                  class="text-primary"
                  to=""
                  target="_blank"
                >
                  Rapport
                </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              Edhec / Essec
            </td>
            <td>
              Faut-il toujours préférer la vérité ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2015-ec-edhec-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2015-ec-edhec-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              emlyon
            </td>
            <td>
              La fidélité au réel définit-elle le vrai ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2015-ec-emlyon-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2015-ec-emlyon-rapport.pdf"
                target="_blank"
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
              Crépuscule de la vérité.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2015-ec-hec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2015-ec-hec-rapport.pdf"
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
      2014 - L'espace
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Épreuve
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
              Ecricome
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet 1 (dans le thème)</b>
                  <br>Habiter un espace, est-ce se l'approprier ?
                </li>
                <li class="mt-1">
                  <b>Sujet 2 (hors thème)</b>
                  <br>Qu'est-ce qu'un humaniste ?
                </li>
              </ul>
            </td>
            <td>
              <!-- <ULink
                  class="text-primary"
                  to=""
                  target="_blank"
                >
                  Sujet
                </ULink> -->
              <!-- <br>
                <ULink
                  class="text-primary"
                  to=""
                  target="_blank"
                >
                  Rapport
                </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              Edhec / Essec
            </td>
            <td>
              L'occupation de l'espace.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2014-ec-edhec-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2014-ec-edhec-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              emlyon
            </td>
            <td>
              Peut-on s'approprier l'espace ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2014-ec-emlyon-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2014-ec-emlyon-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESC La Rochelle
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet n°1</b>
                  <br>L'espace peut-il se partager ?
                </li>
                <li class="mt-1">
                  <b>Sujet n°2</b>
                  <br>« Nos transports et nos rencontres, nos habitats, désormais, se font virtuels plus souvent que réels.
                  Pourrons-nous séjourner en de telles virtualités ? »
                  <br>Michel Serres, <i>Atlas</i>
                </li>
              </ul>
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2014-ec-esc-la-rochelle-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2015-ec-emlyon-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              HEC
            </td>
            <td>
              Ouvrir un espace.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2014-ec-hec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2014-ec-hec-rapport.pdf"
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
      2013 - Le plaisir
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Épreuve
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
              Ecricome
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet 1 (dans le thème)</b>
                  <br>Le plaisir se partage-t-il ?
                </li>
                <li class="mt-1">
                  <b>Sujet 2 (hors thème)</b>
                  <br>La science nous guérit-elle de l'illusion ?
                </li>
              </ul>
            </td>
            <td>
              <!-- <ULink
                  class="text-primary"
                  to=""
                  target="_blank"
                >
                  Sujet
                </ULink> -->
              <!-- <br>
                <ULink
                  class="text-primary"
                  to=""
                  target="_blank"
                >
                  Rapport
                </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              Edhec / Essec
            </td>
            <td>
              Le plaisir de penser.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2013-ec-edhec-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2013-ec-edhec-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              emlyon
            </td>
            <td>
              Y a-t-il une unité du plaisir ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2013-ec-emlyon-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2013-ec-emlyon-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESC La Rochelle
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet n°1</b>
                  <br>La recherche du plaisir constitue-t-elle une entrave a la liberté ?
                </li>
                <li class="mt-1">
                  <b>Sujet n°2</b>
                  <br>« Le plaisir le plus délicat est de faire celui d'autrui. »
                  <br>La Bruyère, <i>Les Caractères XI</i>, II
                </li>
              </ul>
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2013-ec-esc-la-rochelle-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2013-ec-esc-la-rochelle-rapport.pdf"
                target="_blank"
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
              Le plaisir se mérite-t-il ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2013-ec-hec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2013-ec-hec-rapport.pdf"
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
      2012 - La société
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Épreuve
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
              Ecricome
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet 1 (dans le thème)</b>
                  <br>La société des individus.
                </li>
                <li class="mt-1">
                  <b>Sujet 2 (hors thème)</b>
                  <br>Les héros sont-ils morts ?
                </li>
              </ul>
            </td>
            <td>
              <!-- <ULink
                  class="text-primary"
                  to=""
                  target="_blank"
                >
                  Sujet
                </ULink> -->
              <!-- <br>
                <ULink
                  class="text-primary"
                  to=""
                  target="_blank"
                >
                  Rapport
                </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              Edhec / Essec
            </td>
            <td>
              Solitude et société.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2012-ec-edhec-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2012-ec-edhec-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              emlyon
            </td>
            <td>
              Une société peut-elle être internationale ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2012-ec-emlyon-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2012-ec-emlyon-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESC La Rochelle
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet n°1</b>
                  <br>La société peut-elle être une menace ?
                </li>
                <li class="mt-1">
                  <b>Sujet n°2</b>
                  <br>« Les hommes, nés pour vivre ensemble, sont nés aussi pour se plaire. »
                  <br>Montesquieu, <i>De l'esprit des lois</i>.
                </li>
              </ul>
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2012-ec-esc-la-rochelle-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2013-ec-esc-la-rochelle-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              HEC
            </td>
            <td>
              L'ordre de la société.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2012-ec-hec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2012-ec-hec-rapport.pdf"
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
      2011 - L'imagination
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Épreuve
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
              Ecricome
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet 1 (dans le thème)</b>
                  <br>Pauvreté des images, richesse de l'imagination.
                </li>
                <li class="mt-1">
                  <b>Sujet 2 (hors thème)</b>
                  <br>La souffrance peut-elle avoir un sens ?
                </li>
              </ul>
            </td>
            <td>
              <!-- <ULink
                  class="text-primary"
                  to=""
                  target="_blank"
                >
                  Sujet
                </ULink> -->
              <!-- <br>
                <ULink
                  class="text-primary"
                  to=""
                  target="_blank"
                >
                  Rapport
                </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              Edhec / Essec
            </td>
            <td>
              L'imagination, est-ce la liberté de pensée ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2011-ec-edhec-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2011-ec-edhec-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              emlyon
            </td>
            <td>
              L'imagination est-elle une puissance incontrôlable ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2011-ec-emlyon-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2011-ec-emlyon-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESC La Rochelle
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet n°1</b>
                  <br>Le progrès technique menace-t-il l'imaginaire ?
                </li>
                <li class="mt-1">
                  <b>Sujet n°2</b>
                  <br>« Quand une fois l'imagination est en train, malheur à l'esprit qu'elle gouverne ! »
                  <br>Marivaux, <i>La vie de Marianne</i>.
                </li>
              </ul>
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2011-ec-esc-la-rochelle-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2013-ec-esc-la-rochelle-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              HEC
            </td>
            <td>
              Les images auront-elles toujours raison de nous ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2011-ec-hec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2011-ec-hec-rapport.pdf"
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
      2010 - La vie
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Épreuve
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
              Ecricome
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet 1 (dans le thème)</b>
                  <br>Peut-on maîtriser le cours de sa vie ?
                </li>
                <li class="mt-1">
                  <b>Sujet 2 (hors thème)</b>
                  <br>La rigueur des lois.
                </li>
              </ul>
            </td>
            <td>
              <!-- <ULink
                  class="text-primary"
                  to=""
                  target="_blank"
                >
                  Sujet
                </ULink> -->
              <!-- <br>
                <ULink
                  class="text-primary"
                  to=""
                  target="_blank"
                >
                  Rapport
                </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              Edhec / Essec
            </td>
            <td>
              La vraie vie.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2010-ec-edhec-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2010-ec-edhec-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              emlyon
            </td>
            <td>
              Y a-t-il une vie de l'esprit ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2010-ec-emlyon-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2011-ec-emlyon-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              ESC La Rochelle
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet n°1</b>
                  <br>Peut-on vivre sans risque ?
                </li>
                <li class="mt-1">
                  <b>Sujet n°2</b>
                  <br>« On vit plus dans la vie qu'on n'a pas que dans la vie qu'on a. »
                  <br>Barbey d'Aurevilly, <i>Les Diaboliques</i>.
                </li>
              </ul>
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2010-ec-esc-la-rochelle-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2013-ec-esc-la-rochelle-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              HEC
            </td>
            <td>
              La vie est-elle autre chose que le théâtre de la cruauté ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2010-ec-hec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2010-ec-hec-rapport.pdf"
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
      2009 - La beauté
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Épreuve
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
              Ecricome
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet 1 (dans le thème)</b>
                  <br>« La vie n'est pas belle, les images de la vie sont belles. »
                </li>
                <li class="mt-1">
                  <b>Sujet 2 (hors thème)</b>
                  <br>Faut-il se comparer ?
                </li>
              </ul>
            </td>
            <td>
              <!-- <ULink
                  class="text-primary"
                  to=""
                  target="_blank"
                >
                  Sujet
                </ULink> -->
              <!-- <br>
                <ULink
                  class="text-primary"
                  to=""
                  target="_blank"
                >
                  Rapport
                </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              Edhec / Essec
            </td>
            <td>
              « Rien n'est beau que le vrai. »
              <br>Boileau, (<i>Epître IX</i>).
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2009-ec-edhec-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2009-ec-edhec-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              emlyon
            </td>
            <td>
              La beauté n'est-elle qu'apparence ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2009-ec-emlyon-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2009-ec-emlyon-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ESC La Rochelle
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet n°1</b>
                  <br>La beauté est-elle un luxe ?
                </li>
                <li class="mt-1">
                  <b>Sujet n°2</b>
                  <br>« La beauté déteste les idées. Elle se suffit à elle-même. »
                  <br>Cocteau, <i>Poésie et critique</i>.
                </li>
              </ul>
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2009-ec-esc-la-rochelle-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2013-ec-esc-la-rochelle-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              HEC
            </td>
            <td>
              Est-ce faire honneur à la beauté que de la traiter comme symbole ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2009-ec-hec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2009-ec-hec-rapport.pdf"
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
      2008 - L'action
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Épreuve
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
              Ecricome
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet 1 (dans le thème)</b>
                  <br>Que gagne l'action à être dite ?
                </li>
                <li class="mt-1">
                  <b>Sujet 2 (hors thème)</b>
                  <br>L'autorité de la tradition.
                </li>
              </ul>
            </td>
            <td>
              <!-- <ULink
                  class="text-primary"
                  to=""
                  target="_blank"
                >
                  Sujet
                </ULink> -->
              <!-- <br>
                <ULink
                  class="text-primary"
                  to=""
                  target="_blank"
                >
                  Rapport
                </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              Edhec / Essec
            </td>
            <td>
              L'action est-elle une nécessité ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2008-ec-edhec-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2008-ec-edhec-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              EM Lyon
            </td>
            <td>
              Le temps de l'action est-il le présent ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2008-ec-em-lyon-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2009-ec-emlyon-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              ESC La Rochelle
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet n°1</b>
                  <br>Peut-on agir sans espoir ?
                </li>
                <li class="mt-1">
                  <b>Sujet n°2</b>
                  <br>« L'homme est libre, en ce sens que, dans les actions non machinales, il se détermine de lui-même. »
                  <br>d'Alembert, <i>Correspondance</i>.
                </li>
              </ul>
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2008-ec-esc-la-rochelle-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2013-ec-esc-la-rochelle-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              HEC
            </td>
            <td>
              Les paroles et les actes.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2008-ec-hec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2008-ec-hec-rapport.pdf"
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
      2007 - La science
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Épreuve
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
              Ecricome
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet 1 (dans le thème)</b>
                  <br>« Science d'où prévoyance. »
                </li>
                <li class="mt-1">
                  <b>Sujet 2 (hors thème)</b>
                  <br>Le temps perdu.
                </li>
              </ul>
            </td>
            <td>
              <!-- <ULink
                  class="text-primary"
                  to=""
                  target="_blank"
                >
                  Sujet
                </ULink> -->
              <!-- <br>
                <ULink
                  class="text-primary"
                  to=""
                  target="_blank"
                >
                  Rapport
                </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              Edhec / Essec
            </td>
            <td>
              Les sciences transforment-elles le monde ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2007-ec-edhec-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2007-ec-edhec-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              EM Lyon
            </td>
            <td>
              La science est-elle contre-nature ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2007-ec-em-lyon-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2009-ec-emlyon-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              ESC La Rochelle
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet n°1</b>
                  <br>La science : pour le meilleur ou pour le pire ?
                </li>
                <li class="mt-1">
                  <b>Sujet n°2</b>
                  <br>« La science est la seule manière légitime de connaître. »
                  <br>Ernest Renan, <i>L'Avenir de la science</i>.
                </li>
              </ul>
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2007-ec-esc-la-rochelle-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2013-ec-esc-la-rochelle-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              HEC
            </td>
            <td>
              La science a-t-elle quelque chose à nous dire ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2007-ec-hec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2007-ec-hec-rapport.pdf"
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
      2006 - La justice
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Épreuve
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
              Ecricome
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet 1 (dans le thème)</b>
                  <br>Suffit-il d'être juste ?
                </li>
                <li class="mt-1">
                  <b>Sujet 2 (hors thème)</b>
                  <br>« Rien de nouveau sous le soleil ».
                </li>
              </ul>
            </td>
            <td>
              <!-- <ULink
                  class="text-primary"
                  to=""
                  target="_blank"
                >
                  Sujet
                </ULink> -->
              <!-- <br>
                <ULink
                  class="text-primary"
                  to=""
                  target="_blank"
                >
                  Rapport
                </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              Edhec / Essec
            </td>
            <td>
              Qu'est ce qu'un juste salaire ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2006-ec-edhec-essec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2006-ec-edhec-essec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              EM Lyon
            </td>
            <td>
              Pourquoi faut-il rendre la justice ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2006-ec-em-lyon-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2009-ec-emlyon-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              ESC La Rochelle
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet n°1</b>
                  <br>Pourquoi la justice ?
                </li>
                <li class="mt-1">
                  <b>Sujet n°2</b>
                  <br>« L'amour de la justice n'est en la plupart des hommes que la crainte de souffrir l'injustice. »
                  <br>La Rochefoucauld, <i>Maximes</i>.
                </li>
              </ul>
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2006-ec-esc-la-rochelle-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2013-ec-esc-la-rochelle-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              HEC
            </td>
            <td>
              A qui la faute ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2006-ec-hec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2007-ec-hec-rapport.pdf"
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
      2005 - La passion
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Épreuve
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
              Ecricome
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet 1 (dans le thème)</b>
                  <br>La passion, libre destin.
                </li>
                <li class="mt-1">
                  <b>Sujet 2 (hors thème)</b>
                  <br>Le mauvais goût.
                </li>
              </ul>
            </td>
            <td>
              <!-- <ULink
                  class="text-primary"
                  to=""
                  target="_blank"
                >
                  Sujet
                </ULink> -->
              <!-- <br>
                <ULink
                  class="text-primary"
                  to=""
                  target="_blank"
                >
                  Rapport
                </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              Edhec
            </td>
            <td>
              Les passions unissent-elles les hommes ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-edhec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-edhec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              EM Lyon
            </td>
            <td>
              La passion est-elle naturelle ?
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-em-lyon-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2009-ec-emlyon-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              ESC La Rochelle
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet n°1</b>
                  <br>Qu'y a-t-il d'humain dans la passion ?
                </li>
                <li class="mt-1">
                  <b>Sujet n°2</b>
                  <br>« Il n'est guère de passion sans lutte. »
                  <br>Albert Camus, <i>Le Mythe de Sisyphe</i>.
                </li>
              </ul>
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-esc-la-rochelle-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2013-ec-esc-la-rochelle-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              HEC
            </td>
            <td>
              Les passions inutiles.
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-hec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-hec-rapport.pdf"
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
      2004 - La croyance
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Épreuve
            </th>
            <th>
              Sujet
            </th>
            <!-- <th>
                Documents
              </th> -->
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Ecricome
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet 1 (dans le thème)</b>
                  <br>Nous savons que nous sommes mortels, mais nous n'y croyons pas.
                </li>
                <li class="mt-1">
                  <b>Sujet 2 (hors thème)</b>
                  <br>L'inégalité des talents est-elles scandaleuse ?
                </li>
              </ul>
            </td>
            <!-- <td>
                <ULink
                  class="text-primary"
                  to=""
                  target="_blank"
                >
                  Sujet
                </ULink>
                <br>
                <ULink
                  class="text-primary"
                  to=""
                  target="_blank"
                >
                  Rapport
                </ULink>
              </td> -->
          </tr>
          <tr>
            <td>
              Edhec
            </td>
            <td>
              Devons-nous respECGer toutes les croyances ?
            </td>
            <!-- <td>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-edhec-sujet.pdf"
                  target="_blank"
                >
                  Sujet
                </ULink>
                <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-edhec-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink>
              </td> -->
          </tr>
          <tr>
            <td>
              EM Lyon
            </td>
            <td>
              Comment peut-on à la fois croire et savoir ?
            </td>
            <!-- <td>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-em-lyon-sujet.pdf"
                  target="_blank"
                >
                  Sujet
                </ULink>
                <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2009-ec-emlyon-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink>
              </td> -->
          </tr>
          <tr>
            <td>
              ESC La Rochelle
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet n°1</b>
                  <br>Croire peut-il être dangereux ?
                </li>
                <li class="mt-1">
                  <b>Sujet n°2</b>
                  <br>« Je ne partage pas la croyance à un progrès indéfini ;
                  quant aux sociétés, je crois aux progrès de l'homme sur lui-même. »
                  <br>Balzac.
                </li>
              </ul>
            </td>
            <!-- <td>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-esc-la-rochelle-sujet.pdf"
                  target="_blank"
                >
                  Sujet
                </ULink>
                <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2013-ec-esc-la-rochelle-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink>
              </td> -->
          </tr>
          <tr>
            <td>
              HEC
            </td>
            <td>
              Celui qui ne croit pas.
            </td>
            <!-- <td>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-hec-sujet.pdf"
                  target="_blank"
                >
                  Sujet
                </ULink>
                <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-hec-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink>
              </td> -->
          </tr>
        </tbody>
      </table>
    </figure>

    <h2 class="mt-12">
      2003 - L'échange
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Épreuve
            </th>
            <th>
              Sujet
            </th>
            <!-- <th>
                Documents
              </th> -->
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Ecricome
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet 1 (dans le thème)</b>
                  <br>Puis-je honorer toutes mes dettes ?
                </li>
                <li class="mt-1">
                  <b>Sujet 2 (hors thème)</b>
                  <br>Peut-on lutter contre la bêtise ?
                </li>
              </ul>
            </td>
            <!-- <td>
                <ULink
                  class="text-primary"
                  to=""
                  target="_blank"
                >
                  Sujet
                </ULink>
                <br>
                <ULink
                  class="text-primary"
                  to=""
                  target="_blank"
                >
                  Rapport
                </ULink>
              </td> -->
          </tr>
          <tr>
            <td>
              Edhec
            </td>
            <td>
              Qu'est ce qu'un échange libre ?
            </td>
            <!-- <td>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-edhec-sujet.pdf"
                  target="_blank"
                >
                  Sujet
                </ULink>
                <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-edhec-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink>
              </td> -->
          </tr>
          <tr>
            <td>
              EM Lyon
            </td>
            <td>
              Peut-on échanger si l'on incapable de donner ?
            </td>
            <!-- <td>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-em-lyon-sujet.pdf"
                  target="_blank"
                >
                  Sujet
                </ULink>
                <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2009-ec-emlyon-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink>
              </td> -->
          </tr>
          <tr>
            <td>
              ESC La Rochelle
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet n°1</b>
                  <br>L'échange est-il la voie de la culture ?
                </li>
                <li class="mt-1">
                  <b>Sujet n°2</b>
                  <br>« Toute discussion est le commencement d'une guerre. »
                  <br>Alain.
                </li>
              </ul>
            </td>
            <!-- <td>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-esc-la-rochelle-sujet.pdf"
                  target="_blank"
                >
                  Sujet
                </ULink>
                <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2013-ec-esc-la-rochelle-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink>
              </td> -->
          </tr>
          <tr>
            <td>
              HEC
            </td>
            <td>
              Le temps de l'échange.
            </td>
            <!-- <td>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-hec-sujet.pdf"
                  target="_blank"
                >
                  Sujet
                </ULink>
                <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-hec-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink>
              </td> -->
          </tr>
        </tbody>
      </table>
    </figure>

    <h2 class="mt-12">
      2002 - La représentation
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Épreuve
            </th>
            <th>
              Sujet
            </th>
            <!-- <th>
                Documents
              </th> -->
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Ecricome
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet 1 (dans le thème)</b>
                  <br>L'inimaginable.
                </li>
                <li class="mt-1">
                  <b>Sujet 2 (hors thème)</b>
                  <br>Le choix d'un destin.
                </li>
              </ul>
            </td>
            <!-- <td>
                <ULink
                  class="text-primary"
                  to=""
                  target="_blank"
                >
                  Sujet
                </ULink>
                <br>
                <ULink
                  class="text-primary"
                  to=""
                  target="_blank"
                >
                  Rapport
                </ULink>
              </td> -->
          </tr>
          <tr>
            <td>
              Edhec
            </td>
            <td>
              Peut-on se fier à la représentation ?
            </td>
            <!-- <td>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-edhec-sujet.pdf"
                  target="_blank"
                >
                  Sujet
                </ULink>
                <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-edhec-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink>
              </td> -->
          </tr>
          <tr>
            <td>
              EM Lyon
            </td>
            <td>
              Une représentation peut-elle être fausse ?
            </td>
            <!-- <td>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-em-lyon-sujet.pdf"
                  target="_blank"
                >
                  Sujet
                </ULink>
                <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2009-ec-emlyon-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink>
              </td> -->
          </tr>
          <tr>
            <td>
              ESC La Rochelle
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet n°1</b>
                  <br>Toute représentation passe-t-elle nécessairement par des conventions ?
                </li>
                <li class="mt-1">
                  <b>Sujet n°2</b>
                  <br>« Tout l'univers visible n'est qu'un magasin d'images et de signes auxquels l'imagination donnera une place et une valeur relative. »
                  <br>Baudelaire.
                </li>
              </ul>
            </td>
            <!-- <td>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-esc-la-rochelle-sujet.pdf"
                  target="_blank"
                >
                  Sujet
                </ULink>
                <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2013-ec-esc-la-rochelle-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink>
              </td> -->
          </tr>
          <tr>
            <td>
              HEC
            </td>
            <td>
              L'irreprésentable.
            </td>
            <!-- <td>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-hec-sujet.pdf"
                  target="_blank"
                >
                  Sujet
                </ULink>
                <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-hec-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink>
              </td> -->
          </tr>
        </tbody>
      </table>
    </figure>

    <h2 class="mt-12">
      2001 - Le mal
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Épreuve
            </th>
            <th>
              Sujet
            </th>
            <!-- <th>
                Documents
              </th> -->
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Ecricome
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet 1 (dans le thème)</b>
                  <br>Voir le mal partout.
                </li>
                <li class="mt-1">
                  <b>Sujet 2 (hors thème)</b>
                  <br>Question et problème.
                </li>
              </ul>
            </td>
            <!-- <td>
                <ULink
                  class="text-primary"
                  to=""
                  target="_blank"
                >
                  Sujet
                </ULink>
                <br>
                <ULink
                  class="text-primary"
                  to=""
                  target="_blank"
                >
                  Rapport
                </ULink>
              </td> -->
          </tr>
          <tr>
            <td>
              Edhec
            </td>
            <td>
              D'un mal peut-il naître un bien ?
            </td>
            <!-- <td>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-edhec-sujet.pdf"
                  target="_blank"
                >
                  Sujet
                </ULink>
                <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-edhec-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink>
              </td> -->
          </tr>
          <tr>
            <td>
              EM Lyon
            </td>
            <td>
              Faut-il chercher en l'homme l'origine du mal ?
            </td>
            <!-- <td>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-em-lyon-sujet.pdf"
                  target="_blank"
                >
                  Sujet
                </ULink>
                <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2009-ec-emlyon-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink>
              </td> -->
          </tr>
          <tr>
            <td>
              ESC La Rochelle
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet n°1</b>
                  <br>Pourquoi le mal venant de l'homme est-il encore moins supportable ?
                </li>
                <li class="mt-1">
                  <b>Sujet n°2</b>
                  <br>« On n'est jamais excusable d'être méchant, mais il y a quelque mérite à savoir qu'on l'est […] »
                  <br>Baudelaire.
                </li>
              </ul>
            </td>
            <!-- <td>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-esc-la-rochelle-sujet.pdf"
                  target="_blank"
                >
                  Sujet
                </ULink>
                <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2013-ec-esc-la-rochelle-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink>
              </td> -->
          </tr>
          <tr>
            <td>
              HEC
            </td>
            <td>
              Le mal existe, et pourtant il n'a pas d'être.
            </td>
            <!-- <td>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-hec-sujet.pdf"
                  target="_blank"
                >
                  Sujet
                </ULink>
                <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-hec-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink>
              </td> -->
          </tr>
        </tbody>
      </table>
    </figure>

    <h2 class="mt-12">
      2000 - Autrui
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Épreuve
            </th>
            <th>
              Sujet
            </th>
            <!-- <th>
                Documents
              </th> -->
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Ecricome
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet 1 (dans le thème)</b>
                  <br>Pourquoi le dialogue peut-il échouer ?
                </li>
                <li class="mt-1">
                  <b>Sujet 2 (hors thème)</b>
                  <br>L'événement.
                </li>
              </ul>
            </td>
            <!-- <td>
                <ULink
                  class="text-primary"
                  to=""
                  target="_blank"
                >
                  Sujet
                </ULink>
                <br>
                <ULink
                  class="text-primary"
                  to=""
                  target="_blank"
                >
                  Rapport
                </ULink>
              </td> -->
          </tr>
          <tr>
            <td>
              Edhec
            </td>
            <td>
              La peine d'autrui.
            </td>
            <!-- <td>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-edhec-sujet.pdf"
                  target="_blank"
                >
                  Sujet
                </ULink>
                <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-edhec-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink>
              </td> -->
          </tr>
          <tr>
            <td>
              EM Lyon
            </td>
            <td>
              Autrui est-il ce qui reste quand on a dépouillé l'autre de tout ce qui fait sa singularité ?
            </td>
            <!-- <td>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-em-lyon-sujet.pdf"
                  target="_blank"
                >
                  Sujet
                </ULink>
                <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2009-ec-emlyon-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink>
              </td> -->
          </tr>
          <tr>
            <td>
              ESC La Rochelle
            </td>
            <td>
              <ul>
                <li>
                  <b>Sujet n°1</b>
                  <br>La perception de l'autre évolue-t-elle avec le progrès technique ?
                </li>
                <li class="mt-1">
                  <b>Sujet n°2</b>
                  <br>« Dans le bonheur d'autrui  je cherche mon bonheur. »
                  <br>Corneille, <i>La mort de Pompée</i>, II, 3.
                </li>
              </ul>
            </td>
            <!-- <td>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-esc-la-rochelle-sujet.pdf"
                  target="_blank"
                >
                  Sujet
                </ULink>
                <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2013-ec-esc-la-rochelle-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink>
              </td> -->
          </tr>
          <tr>
            <td>
              HEC
            </td>
            <td>
              Autrui est-il seulement celui que je vois ?
            </td>
            <!-- <td>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-hec-sujet.pdf"
                  target="_blank"
                >
                  Sujet
                </ULink>
                <br>
                <ULink
                  class="text-primary"
                  to="https://annales.notyloops.com/cpge-culture-generale-dissertation-2005-ec-hec-rapport.pdf"
                  target="_blank"
                >
                  Rapport
                </ULink>
              </td> -->
          </tr>
        </tbody>
      </table>
    </figure>

    <h2 class="mt-12">
      Liste des thèmes par année
    </h2>

    <ul class="unstyled-list">
      <li>
        2027 - L'humanité
      </li>
      <li>
        2026 - Juger
      </li>
      <li>
        2025 - L'image
      </li>
      <li>
        2024 - La violence
      </li>
      <li>
        2023 - Le monde
      </li>
      <li>
        2022 - La santé
      </li>
      <li>
        2021 - L'animal
      </li>
      <li>
        2020 - Le désir
      </li>
      <li>
        2019 - La mémoire
      </li>
      <li>
        2018 - Le corps
      </li>
      <li>
        2017 - La parole
      </li>
      <li>
        2016 - La nature
      </li>
      <li>
        2015 - La vérité
      </li>
      <li>
        2014 - L'espace
      </li>
      <li>
        2013 - Le plaisir
      </li>
      <li>
        2012 - La société
      </li>
      <li>
        2011 - L'imagination
      </li>
      <li>
        2010 - La vie
      </li>
      <li>
        2009 - La beauté
      </li>
      <li>
        2008 - L'action
      </li>
      <li>
        2007 - La science
      </li>
      <li>
        2006 - La justice
      </li>
      <li>
        2005 - La passion
      </li>
      <li>
        2004 - La croyance
      </li>
      <li>
        2003 - L'échange
      </li>
      <li>
        2002 - La représentation
      </li>
      <li>
        2001 - Le mal
      </li>
      <li>
        2000 - Autrui
      </li>
      <li>
        1999 - La sensibilité
      </li>
      <li>
        1998 - Le bonheur
      </li>
      <li>
        1997 - Le temps
      </li>
      <li>
        1996 et 1995 - Le pouvoir
      </li>
      <li>
        1994 et 1993 - Le corps
      </li>
      <li>
        1992 et 1991 - La nature
      </li>
    </ul>

    <!-- <hr class="separator-1">

      <p class="mb-0">
        Sources :
      </p>

      <ul>
        <li>
          <ULink
            class="text-primary"
            to="https://www.concours-bce.com/annales"
            target="_blank"
          >
            Les annales des épreuves écrites BCE
          </ULink>
        </li>
        <li>
          <ULink
            class="text-primary"
            to="https://www.ecricome.org/ecricome-prepa-culture-generale/"
            target="_blank"
          >
            Ecricome : l'épreuve de culture générale
          </ULink>
        </li>
        <li>
          <ULink
            class="text-primary"
            to="https://www.annales-prepa.fr/culture-generale/ecrits/dissertation/par-annee-theme/"
            target="_blank"
          >
            Annales-Prépa
          </ULink>
        </li>
        <li>
          <ULink
            class="text-primary"
            to="https://misterprepa.net/les-themes-de-culture-generale-depuis-2000/"
            target="_blank"
          >
            Les thèmes de culture générale depuis 2000
          </ULink>
        </li>
        <li>
          <ULink
            class="text-primary"
            to="hhttps://grandes-ecoles.studyrama.com/espace-prepas/concours/ecrits/culture-generale/culture-generale-en-prepa-les-themes-tombes-aux-concours-depuis-1991-6491.html"
            target="_blank"
          >
            Les thèmes de culture générale depuis 1991
          </ULink>
        </li>
        <li>
          <ULink
            class="text-primary"
            to="https://major-prepa.com/grange-copies/#elementor-toc__heading-anchor-1"
            target="_blank"
          >
            La grange à copies de Major Prépa.
          </ULink>
        </li>
        <li>
          <ULink
            class="text-primary"
            to="https://misterprepa.net/bonnes-copies/"
            target="_blank"
          >
            Les bonnes copies de Mister Prépa.
          </ULink>
        </li>
      </ul> -->
  </UContainer>
</template>
