<script setup>
const page_title = 'Annales CPGE BCPST : français-philosophie';

let meta_description = 'Les annales de français-philosophie pour les CPGE BCPST.';
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
    label: 'Français-philosophie',
    to: '/annales/cpge/bcpst/francais-philosophie',
    url: 'https://fr.notyloops.com/annales/cpge/bcpst/francais-philosophie',
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
  <!-- app/pages/annales/cpge/bcpst/francais-philosophie.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales CPGE BCPST : français-philosophie
    </h1>

    <h2 class="mt-12">
      Thèmes
    </h2>

    <h2 class="mt-12">
      2027 - Les arcanes de la création
    </h2>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">Ion</span>, traduction de Monique Canto
        et <span class="underline">La République</span>, livre X, 595a-608b, traduction de Georges Leroux, de Platon.
      </li>
      <li>
        <span class="underline">L'œuvre</span>, d'Émile Zola.
      </li>
      <li>
        <span class="underline">Un lieu à soi</span>, de Marlen Haushofer.
        <br>Traduction de Marie Darrieussecq.
      </li>
    </ol>

    <h2 class="mt-12">
      2026 - Expériences de la nature
    </h2>

    <figure>
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
              Agro-Véto
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2026-bcpst-agro-veto-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2026-bcpst-agro-veto-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              ENS / ENPC / Mines / EC
            </td>
            <td>
              Pas encore disponible              <!-- <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2026-bcpst-ens-enpc-mines-ec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink> -->
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2026-bcpst-ens-enpc-mines-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-francais-philosophie-2026-bcpst-g2e-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2026-bcpst-g2e-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h3 class="mt-4">
      Œuvres
    </h3>
    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">La connaissance de la vie</span>, de Georges Canguilhem.
        <ol class="list-decimal list-inside ml-4">
          <li>"Introduction : La pensée et le vivant".</li>
          <li>"I. Méthode".</li>
          <li>"III. Philosophie", chapitres  II, III, IV et V.</li>
        </ol>
      </li>
      <li>
        <span class="underline">Vingt mille lieues sous les mers </span>, de Jules Verne.
      </li>
      <li>
        <span class="underline">Le Mur invisible</span>, de Marlen Haushofer.
        <br>Traduction de Liselotte Bodo et Jacqueline Chambon.
      </li>
    </ol>

    <h2 class="mt-12">
      2025 - Individu et communauté
    </h2>

    <figure>
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
              Agro-Véto
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2025-bcpst-agro-veto-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2025-bcpst-agro-veto-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ENS / ENPC / Mines / EC
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2025-bcpst-ens-enpc-mines-ec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2025-bcpst-ens-enpc-mines-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-francais-philosophie-2025-bcpst-g2e-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2025-bcpst-g2e-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li><span class="underline">Les Suppliantes</span> et <span class="underline">Les Sept contre Thèbes</span>, d'Eschyle.</li>
      <li>
        <span class="underline">Traité théologico-politique</span>, de Baruch de Spinoza.<br>
        Préface et chapitres 16 à 20.
      </li>
      <li><span class="underline">Le Temps de l'innocence</span>, d'Edith Wharton.</li>
    </ol>

    <h2 class="mt-12">
      2024 - Faire croire
    </h2>

    <figure>
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
              Agro-Véto
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2024-bcpst-agro-veto-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2024-bcpst-agro-veto-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ENS / ENPC / Mines
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2024-bcpst-ens-enpc-mines-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2024-bcpst-ens-enpc-mines-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-francais-philosophie-2024-bcpst-g2e-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2024-bcpst-g2e-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">La crise de la culture</span>, d'Hannah Arendt.<br>
        Chapitre 7, "Vérité et politique", partie "Du mensonge en politique".
      </li>
      <li><span class="underline">Lorenzaccio</span>, d'Alfred de Musset.</li>
      <li><span class="underline">Les Liaisons dangereuses</span>, de Pierre-Ambroise-François Choderlos de Laclos.</li>
    </ol>

    <h2 class="mt-12">
      2023 - Le travail
    </h2>

    <figure>
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
              Agro-Véto
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2023-bcpst-agro-veto-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2023-bcpst-agro-veto-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ENS / ENPC / Mines
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2023-bcpst-ens-enpc-mines-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2023-bcpst-ens-enpc-mines-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-francais-philosophie-2023-bcpst-g2e-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2023-bcpst-g2e-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">La condition ouvrière</span>, de Simone Weil.<br>
        Éditions Gallimard, collection Folio Essais, 2002, n° 409.
        <ol class="list-decimal list-inside ml-4">
          <li>"L'usine, le travail, les machines" (pages 49 à 76 et 205 à 351).</li>
          <li>"La condition ouvrière" (pages 389 à 397).</li>
          <li>"Condition première d'un travail non servile" (pages 418 à 434).</li>
        </ol>
      </li>
      <li>
        <span class="underline">Par-dessus bord</span>, de Michel Vinaver.<br>
        Version hyper-brève, éditions Actes Sud, 2003.
      </li>
      <li><span class="underline">Géorgiques</span>, de Virgile.</li>
    </ol>

    <h2 class="mt-12">
      2022 - L'enfance
    </h2>

    <figure>
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
              Agro-Véto
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2022-bcpst-agro-veto-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2022-bcpst-agro-veto-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ENS / ENPC
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2022-bcpst-ens-enpc-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2022-bcpst-ens-enpc-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-francais-philosophie-2022-bcpst-g2e-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2022-bcpst-g2e-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h3 class="mt-4">
      Œuvres
    </h3>
    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">Aké, les années d'enfance</span>, de Wole Soyinka.
        <br>Traduction Etienne Galle, éditions Flammarion (collection GF).
      </li>
      <li>
        <span class="underline">Émile ou De l'éducation</span>, de Jean-Jacques Rousseau.
        <br>Livres I et II.
      </li>
      <li>
        <span class="underline">Contes</span>, de Hans Christian Andersen.
        <br>Traduction Marc Auchet, Le Livre de Poche Classiques.
      </li>
    </ol>

    <h2 class="mt-12">
      2021 - La force de vivre
    </h2>

    <figure>
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
              Agro-Véto
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2021-bcpst-agro-veto-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2021-bcpst-agro-veto-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ENS / ENPC
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2021-bcpst-ens-enpc-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2021-bcpst-ens-enpc-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-francais-philosophie-2021-bcpst-g2e-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2021-bcpst-g2e-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h3 class="mt-4">
      Œuvres
    </h3>
    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">La Supplication</span>, de Svetlana Alexievitch.
        <br>Traduction Galia Ackerman et Pierre Lorrain, éditions J'ai lu.
      </li>
      <li>
        <span class="underline">Les Contemplations</span>, de Victor Hugo.
        <br>Livres IV (Pauca meae) et V (En marche).
      </li>
      <li>
        <span class="underline">Le Gai Savoir</span>, de Friedrich Nietzsche.
        <br>Préface à la seconde édition et Livre IV.
        <br>Traduction Patrick Wotling, éditions Flammarion (collection GF).
      </li>
    </ol>

    <h2 class="mt-12">
      2020 - La démocratie
    </h2>

    <figure>
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
              Agro-Véto
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2020-bcpst-agro-veto-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2020-bcpst-agro-veto-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              ENS / ENPC
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2020-bcpst-ens-enpc-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2020-bcpst-ens-enpc-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-francais-philosophie-2020-bcpst-g2e-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2020-bcpst-g2e-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <h3 class="mt-4">
      Œuvres
    </h3>
    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">De la démocratie en Amérique</span>, d'Alexis de Tocqueville.
      </li>
      <li>
        <span class="underline">L'assemblée des femmes - Les cavaliers</span>, d'Aristophane.
        <br>Traduction Marc-Jean Alfonsi, éditions GF Poche.
      </li>
      <li>
        <span class="underline">Complot contre l'Amérique</span>, de Philip Roth.
        <br>Traduction Josée Kamoun, éditions Folio.
      </li>
    </ol>

    <!-- <hr class="separator-1">

      <p>
        Sources :
      </p>

      <ul>
        <li>
          <ULink class="text-primary"
            to="https://www.concours-agro-veto.fr/archives-sujets-rapports/sujets-rapports-concours-cpge-bcpst/epreuves-ecrites-concours-cpge-bcpst#Humanit%C3%A9s"
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
            to="https://concoursg2e.univ-lorraine.fr/concours-precedents/"
            target="_blank"
          >
            G2E : les sujets et rapports
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
            to="https://www.education.gouv.fr/bo/2024/Hebdo29/ESRS2418417A"
            target="_blank"
          >
            Programme de français et de philosophie pour l'année scolaire 2024-2025 (bulletin officiel)
          </ULink>
        </li>
        <li>
          <ULink class="text-primary"
            to="https://www.education.gouv.fr/bo/2023/Hebdo28/ESRS2317934A"
            target="_blank"
          >
            Programme de français et de philosophie pour l'année scolaire 2023-2024 (bulletin officiel)
          </ULink>
        </li>
        <li>
          <ULink class="text-primary"
            to="https://www.education.gouv.fr/bo/22/Hebdo20/ESRS2213517A.htm"
            target="_blank"
          >
            Programme de français et de philosophie pour l'année scolaire 2022-2023 (bulletin officiel)
          </ULink>
        </li>
        <li>
          <ULink class="text-primary"
            to="https://www.enseignementsup-recherche.gouv.fr/fr/bo/21/Hebdo28/ESRS2119554A.htm"
            target="_blank"
          >
            Programme de français et de philosophie pour l'année scolaire 2021-2022 (bulletin officiel)
          </ULink>
        </li>
        <li>
          <ULink class="text-primary"
            to="https://www.education.gouv.fr/bo/20/Hebdo32/ESRS2014851A.htm"
            target="_blank"
          >
            Programme de français et de philosophie pour l'année scolaire 2020-2021 (bulletin officiel)
          </ULink>
        </li>
        <li>
          <ULink class="text-primary"
            to="https://fr.wikipedia.org/wiki/Fran%C3%A7ais-philosophie#%C3%89tude_des_%C5%93uvres"
            target="_blank"
          >
            Thèmes et oeuvres de français-philosophie depuis 1969
          </ULink>
        </li>
      </ul> -->
  </UContainer>
</template>
