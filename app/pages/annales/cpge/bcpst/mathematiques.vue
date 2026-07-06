<script setup>
const page_title = 'Annales prépa BCPST : mathématiques';

let meta_description = 'Les annales de mathématiques pour les CPGE BCPST.';
meta_description += ' Les sujets et rapports des dernières années pour les épreuves Agro-Véto, ENS et G2E.';

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
    label: 'BCPST',
    to: '/annales/cpge/bcpst',
    url: 'https://fr.notyloops.com/annales/cpge/bcpst',
  },
  {
    label: 'Mathématiques',
    to: '/annales/cpge/bcpst/mathematiques',
    url: 'https://fr.notyloops.com/annales/cpge/bcpst/mathematiques',
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
</script>

<template>
  <!-- app/pages/annales/cpge/bcpst/mathematiques.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales CPGE BCPST : mathématiques
    </h1>

    <h2 class="mt-12">
      2026
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Banque d'épreuve
            </th>
            <th>
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Agro-Véto
            </td>
            <td>
              <ul class="space-y-4">
                <li>
                  <span>Méthodes de calcul et raisonnement</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-mathematiques-2026-bcpst-agro-veto-sujet-methodes.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  <!-- |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-mathematiques-2026-bcpst-agro-veto-rapport-methodes.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink> -->
                </li>
                <li class="mt-1">
                  <span>Modélisation mathématique et informatique</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-mathematiques-2026-bcpst-agro-veto-sujet-modelisation.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  <!-- |
                    <ULink class="text-primary"
                      to="https://annales.notyloops.com/cpge-mathematiques-2026-bcpst-agro-veto-corrige-modelisation.pdf"
                      target="_blank"
                    >
                      Corrigé
                    </ULink> -->
                  <!-- |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-mathematiques-2026-bcpst-agro-veto-rapport-modelisation.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink> -->
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              ENS / ENPC / Mines /
              <br>Ecole centrale
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2026-bcpst-ens-enpc-mines-ec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2026-bcpst-ens-enpc-mines-ec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              G2E
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2026-bcpst-g2e-ec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2026-bcpst-g2e-ec-rapport.pdf"
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
      2025
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Banque d'épreuve
            </th>
            <th>
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Agro-Véto
            </td>
            <td>
              <ul class="space-y-4">
                <li>
                  <span>Méthodes de calcul et raisonnement</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-mathematiques-2025-bcpst-agro-veto-sujet-methodes.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-mathematiques-2025-bcpst-agro-veto-rapport-methodes.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
                <li class="mt-1">
                  <span>Modélisation mathématique et informatique</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-mathematiques-2025-bcpst-agro-veto-sujet-modelisation.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  <!-- |
                    <ULink class="text-primary"
                      to="https://annales.notyloops.com/cpge-mathematiques-2025-bcpst-agro-veto-corrige-modelisation.pdf"
                      target="_blank"
                    >
                      Corrigé
                    </ULink> -->
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-mathematiques-2025-bcpst-agro-veto-rapport-modelisation.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              ENS / ENPC / Mines /
              <br>Ecole centrale
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2025-bcpst-ens-enpc-mines-ec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2025-bcpst-ens-enpc-mines-ec-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              G2E
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2025-bcpst-g2e-ec-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2025-bcpst-g2e-ec-rapport.pdf"
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
      2024
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Banque d'épreuve
            </th>
            <th>
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Agro-Véto
            </td>
            <td>
              <ul class="space-y-4">
                <li>
                  <span>Méthodes de calcul et raisonnement</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-mathematiques-2024-bcpst-agro-veto-sujet-methodes.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-mathematiques-2024-bcpst-agro-veto-rapport-methodes.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
                <li class="mt-1">
                  <span>Modélisation mathématique et informatique</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-mathematiques-2024-bcpst-agro-veto-sujet-modelisation.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-mathematiques-2024-bcpst-agro-veto-corrige-modelisation.pdf"
                    target="_blank"
                  >
                    Corrigé
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-mathematiques-2024-bcpst-agro-veto-rapport-modelisation.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              ENS / ENPC / Mines
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2024-bcpst-ens-enpc-mines-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2024-bcpst-ens-enpc-mines-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              G2E
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2024-bcpst-g2e-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2024-bcpst-g2e-rapport.pdf"
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
      2023
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Banque d'épreuve
            </th>
            <th>
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Agro-Véto
            </td>
            <td>
              <ul class="space-y-4">
                <li>
                  <span>Méthodes de calcul et raisonnement</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-mathematiques-2023-bcpst-agro-veto-sujet-methodes.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-mathematiques-2023-bcpst-agro-veto-rapport-methodes.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
                <li class="mt-1">
                  <span>Modélisation mathématique et informatique</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-mathematiques-2023-bcpst-agro-veto-sujet-modelisation.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-mathematiques-2023-bcpst-agro-veto-rapport-modelisation.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              ENS / ENPC / Mines
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2023-bcpst-ens-enpc-mines-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2023-bcpst-ens-enpc-mines-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              G2E
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2023-bcpst-g2e-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2023-bcpst-g2e-rapport.pdf"
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
      2022
    </h2>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Banque d'épreuve
            </th>
            <th>
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Agro-Véto
            </td>
            <td>
              <ul class="space-y-4">
                <li>
                  <span>Méthodes de calcul et raisonnement</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-mathematiques-2022-bcpst-agro-veto-sujet-methodes.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-mathematiques-2022-bcpst-agro-veto-rapport-methodes.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
                <li class="mt-1">
                  <span>Modélisation mathématique et informatique</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-mathematiques-2022-bcpst-agro-veto-sujet-modelisation.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  <!-- |
                    <ULink class="text-primary"
                      to="https://annales.notyloops.com/cpge-mathematiques-2023-bcpst-agro-veto-rapport-modelisation.pdf"
                      target="_blank"
                    >
                      Rapport
                    </ULink> -->
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              ENS / ENPC
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2022-bcpst-ens-enpc-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2022-bcpst-ens-enpc-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              G2E
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2022-bcpst-g2e-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2022-bcpst-g2e-rapport.pdf"
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
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Agro-Véto
            </td>
            <td>
              <ul class="space-y-4">
                <li>
                  <span>Méthodes de calcul et raisonnement</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-mathematiques-2021-bcpst-agro-veto-sujet-methodes.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-mathematiques-2021-bcpst-agro-veto-rapport-methodes.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
                <li class="mt-1">
                  <span>Modélisation mathématique et informatique</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-mathematiques-2021-bcpst-agro-veto-sujet-modelisation.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-mathematiques-2021-bcpst-agro-veto-rapport-modelisation.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              ENS / ENPC
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2021-bcpst-ens-enpc-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2021-bcpst-ens-enpc-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              G2E
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2021-bcpst-g2e-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2021-bcpst-g2e-rapport.pdf"
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
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Agro-Véto
            </td>
            <td>
              <ul class="space-y-4">
                <li>
                  <span>Méthodes de calcul et raisonnement</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-mathematiques-2020-bcpst-agro-veto-sujet-methodes.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-mathematiques-2020-bcpst-agro-veto-rapport-methodes.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
                <li class="mt-1">
                  <span>Modélisation mathématique et informatique</span>
                  <br>
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-mathematiques-2020-bcpst-agro-veto-sujet-modelisation.pdf"
                    target="_blank"
                  >
                    Sujet
                  </ULink>
                  |
                  <ULink
                    class="text-primary"
                    to="https://annales.notyloops.com/cpge-mathematiques-2020-bcpst-agro-veto-rapport-modelisation.pdf"
                    target="_blank"
                  >
                    Rapport
                  </ULink>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              ENS / ENPC
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2020-bcpst-ens-enpc-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2020-bcpst-ens-enpc-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              G2E
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2020-bcpst-g2e-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-mathematiques-2020-bcpst-g2e-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <!-- <hr class="separator-1">

      <p>
        Sources :
      </p>

      <ul>
        <li>
          <ULink class="text-primary"
            to="https://www.concours-agro-veto.fr/archives-sujets-rapports/sujets-rapports-concours-cpge-bcpst/epreuves-ecrites-concours-cpge-bcpst"
            target="_blank"
          >
            Agro-Véto : les sujets
          </ULink>
        </li>
        <li>
          <ULink class="text-primary"
            to="https://www.ens.psl.eu/une-formation-d-exception/admission-concours/concours-voie-cpge/concours-voie-cpge-sciences-0"
            target="_blank"
          >
            ENS : sujets et rapports à partir de 2007
          </ULink>
        </li>
        <li>
          <ULink class="text-primary"
            to="https://banques-ecoles.fr/cms/filiere-bcpst/"
            target="_blank"
          >
            Sujets à partir de 2003
          </ULink>
        </li>
        <li>
          <ULink class="text-primary"
            to="https://concoursg2e.univ-lorraine.fr/concours-precedents/"
            target="_blank"
          >
            G2E : les sujets et rapports
          </ULink>
        </li>
        <li>
          <ULink class="text-primary"
            to="https://astucesweb.fr/cpge/annales/"
            target="_blank"
          >
            Annales concours CPGE
          </ULink>
        </li>
      </ul> -->
  </UContainer>
</template>
