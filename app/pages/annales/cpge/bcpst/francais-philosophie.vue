<script setup>
const page_title = 'Annales prépa BCPST : Français - Philosophie';

let meta_description = 'Les annales de Français - Philosophie pour les CPGE BCPST.';
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
    label: 'Français - Philosophie',
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
      Annales CPGE BCPST : Français - Philosophie
    </h1>

    <h2 class="mt-12">
      2027 - Les arcanes de la création
    </h2>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">Ion</span>, de Platon.
        <br>Traduction de Monique Canto.
      </li>
      <li>
        <span class="underline">La République</span>, de Platon.
        <br>Livre X, 595a-608b, traduction de Georges Leroux.
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
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2026-bcpst-ens-enpc-mines-ec-sujet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sujet
              </ULink>
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
      <li>
        <span class="underline">Les Suppliantes</span>, d'Eschyle.
      </li>
      <li>
        <span class="underline">Les Sept contre Thèbes</span>, d'Eschyle.
      </li>
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

    <h2 class="mt-12">
      2019 - L'amour
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
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2019-bcpst-agro-veto-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2019-bcpst-agro-veto-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-francais-philosophie-2019-bcpst-ens-enpc-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2019-bcpst-ens-enpc-rapport.pdf"
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
                to="https://annales.notyloops.com/cpge-francais-philosophie-2019-bcpst-g2e-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2019-bcpst-g2e-rapport.pdf"
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
        <span class="underline">Le banquet</span>, de Platon.
        <br>Traduction de Luc Brisson, éditions GF Poche.
      </li>
      <li>
        <span class="underline">Le songe d'une nuit d'été</span>, de William Shakespeare.
        <br>Traduction de Jean-Michel Déprats, collection « Folio théâtre », éditions Gallimard.
      </li>
      <li>
        <span class="underline">La Chartreuse de Parme</span>, de Stendhal.
      </li>
    </ol>

    <h2 class="mt-12">
      2018 - L'aventure
    </h2>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">L'aventure, l'ennui, le sérieux</span>, de Vladimir Jankélévitch.
        <br>Chapitre 1 , collection GF.
      </li>
      <li>
        <span class="underline">L'Odyssée</span>, d'Homère.
        <br>Traduction de Philippe Jaccottet, éditions La découverte/Poche.
      </li>
      <li>
        <span class="underline">Au cœur des ténèbres</span>, de Joseph Conrad.
        <br> Traduction de Jean-Jacques Mayoux, collection GF.
      </li>
    </ol>

    <h2 class="mt-12">
      2017 - Servitude et soumission
    </h2>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">Discours de la servitude volontaire</span>, de La Boétie.
      </li>
      <li>
        <span class="underline">Une maison de poupée</span>, d'Ibsen.
        <br>Traduction d'Eloi Recoing, babel n° 1400, éditions Actes Sud.
      </li>
      <li>
        <span class="underline">Lettres persanes</span>, de Montesquieu.
      </li>
    </ol>

    <h2 class="mt-12">
      2016 - Le monde des passions
    </h2>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">La cousine Bette</span>, d'Honoré de Balzac.
      </li>
      <li>
        <span class="underline">Andromaque</span>, de Jean Racine.
      </li>
      <li>
        <span class="underline">Dissertation sur les passions</span>, de David Hume.
        <br>Traduction de Jean-Pierre Cléro, éditions GF Flammarion.
      </li>
    </ol>

    <h2 class="mt-12">
      2015 - La guerre
    </h2>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">Les Perses</span>, d'Eschyle.
        <br>Traduction de Danielle Sonnier, éditions GF Flammarion.
      </li>
      <li>
        <span class="underline">Le feu</span>, d'Henri Barbusse.
      </li>
      <li>
        <span class="underline">De la guerre</span>, de Carl von Clausewitz.
        <br>Traduction de Nicolas Waquet, éditions Rivages Poche.
        <br>Livre 1 : « Sur la nature de la guerre », pages 17 à 114.
      </li>
    </ol>

    <h2 class="mt-12">
      2014 - Le temps vécu
    </h2>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">Sylvie</span>, de Gérard de Nerval.
      </li>
      <li>
        <span class="underline">Mrs Dalloway</span>, de Virginia Woolf.
        <br>Traduction de Marie-Claire Pasquier, éditions Folio classique.
      </li>
      <li>
        <span class="underline">Essai sur les données immédiates de la conscience</span>, d'Henri Bergson.
        <br>Chapitre II : « De la multiplicité des états de conscience. L'idée de durée. »
      </li>
    </ol>

    <h2 class="mt-12">
      2013 - La parole
    </h2>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">Phèdre</span>, de Platon.
        <br>Introduction, traduction et notes de Létitia Mouze, livre de poche.
      </li>
      <li>
        <span class="underline">Les fausses confidences</span>, de Marivaux.
      </li>
      <li>
        <span class="underline">Romances sans paroles</span>, de Paul Verlaine.
      </li>
    </ol>

    <h2 class="mt-12">
      2012 - La justice
    </h2>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">Pensées</span>, de Blaise Pascal.
        <br>Textes établis par Louis Lafuma.
        <ol class="list-decimal list-inside ml-4">
          <li>
            Liasse II, Vanité, de 13 à 52.
          </li>
          <li>
            Liasse III, Misère, de 53 à 76.
          </li>
          <li>
            Liasse V, Raisons des effets : de 80 à 104.
          </li>
          <li>
            Liasse VI, Grandeur : de 105 à 118.
          </li>
          <li>
            Liasse VII, Contrariétés : de 125 à 130.
          </li>
          <li>
            Liasse X, Le Souverain Bien : de 147 à 148.
          </li>
          <li>
            Liasse XIII, Soumission et usage de la raison, de 170 à 174.
          </li>
          <li>
            Liasse XV, 199.
          </li>
          <li>
            Série XXIII, 518, 520, de 525 à 533, 540.
          </li>
          <li>
            Série XXIV, 597 et 617.
          </li>
          <li>
            Série XXV, 645 et 665.
          </li>
          <li>
            Trois discours sur la condition des grands.
          </li>
        </ol>
      </li>
      <li>
        <span class="underline">L'Orestie</span>, d'Eschyle.
        <br>Traduction et présentation de Daniel Loayza, éditions GF-Flammarion.
        <br>« Les Choéphores » et « Les Euménides ».
      </li>
      <li>
        <span class="underline">Les raisins de la colère</span>, de John Steinbeck.
        <br>Traduction de Marcel Duhamel et Maurice-Edgar Coindreau, éditions Folio.
      </li>
    </ol>

    <h2 class="mt-12">
      2011 - Le mal
    </h2>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">Émile ou de l'éducation</span>, de Jean-Jacques Rousseau.
        <br>Livre 4, la profession de foi du vicaire savoyard.
        <br>Depuis « Mon enfant, n'attendez de moi ni des discours savants ni de profonds raisonnements. Je ne suis pas un grand philosophe, et je me soucie peu de l'être. » jusqu'à « J'ai fait ce que j'ai pu pour atteindre à la vérité ; mais sa source est trop élevée : quand les forces me manquent pour aller plus loin, de quoi puis-je être coupable ? C'est à elle à s'approcher. »
      </li>
      <li>
        <span class="underline">Macbeth</span>, de William Shakespeare.
        <br>Traduction de Pierre-Jean Jouve, préface de G. Wilson Knight, éditions Garnier-Flammarion.
      </li>
      <li>
        <span class="underline">Les âmes fortes</span>, de  Jean Giono.
      </li>
    </ol>

    <h2 class="mt-12">
      2010 - L'argent
    </h2>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">La philosophie de l'argent</span>, de Georg Simmel.
        <br>Traduction de Sabine Cornille et Philippe Ivernel, collection Quadrige, éditions PUF.
        <br>Partie analytique, 3ème chapitre, sections 1 et 2.
      </li>
      <li>
        <span class="underline">L'argent</span>, d'Émile Zola.
      </li>
      <li>
        <span class="underline">L'avare</span>, de Molière.
      </li>
    </ol>

    <h2 class="mt-12">
      2009 - Énigmes du moi
    </h2>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">L'âge d'homme</span>, de Michel Leiris.
      </li>
      <li>
        <span class="underline">Les confessions</span>, de Saint Augustin.
        <br>Traduction d'Arnaud d'Andilly, collection Folio classique, éditions Gallimard.
        <br>Livre X.
      </li>
      <li>
        <span class="underline">Lorenzaccio</span>, d'Alfred de Musset.
      </li>
    </ol>

    <h2 class="mt-12">
      2008 - Penser l'histoire
    </h2>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">Mémoires d'outre-tombe</span>, de Chateaubriand.
        <br>livres IX à XII.
      </li>
      <li>
        <span class="underline">Le 18 Brumaire de Louis Bonaparte</span>, de Karl Marx.
        <br>Traduction de M. Rubel, collection Folio Histoire, éditions Gallimard.
      </li>
      <li>
        <span class="underline">Horace</span>, de Corneille.
      </li>
    </ol>

    <h2 class="mt-12">
      2007 - Puissances de l'imagination
    </h2>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">Don Quichotte</span>, de Cervantès.
        <br>Traduction d'Aline Schulman, collection Points Seuil, éditions du Seuil.
        <br>Volume I, jusqu'au chapitre 32 inclus.
      </li>
      <li>
        <span class="underline">Un amour de Swann</span>, de Marcel Proust.
      </li>
      <li>
        <span class="underline">Recherche de la vérité</span>, de Malebranche.
        <br>Livre I, parties II et III.
      </li>
    </ol>

    <h2 class="mt-12">
      2006 - La recherche du bonheur
    </h2>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">Le Chercheur d'or</span>, de Jean-Marie Le Clézio.
      </li>
      <li>
        <span class="underline">La Vie heureuse</span> et <span class="underline">La Brièveté de la vie</span>, de Sénèque.
        <br>Traduction de François Rosso, éditions Arléa.
      </li>
      <li>
        <span class="underline">Oncle Vania</span>, d'Anton Tchekhov.
        <br>Traduction d'André Markowicz et Françoise Morvan, éditions Actes Sud Babel.
      </li>
    </ol>

    <h2 class="mt-12">
      2005 - L'animal et l'homme
    </h2>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">Le traité des animaux</span>, de Condillac,
        accompagné de l'étude de M. François Dagognet.
        <br>Format poche, éditions Vrin.
      </li>
      <li>
        <span class="underline">Les Fables</span>, de La Fontaine.
        <br>livres VII à XI.
      </li>
      <li>
        <span class="underline">La métamorphose</span>, de Kafka.
        <br>Traduction de Bernard Lortholary, éditions Flammarion, collection GF.
      </li>
    </ol>

    <h2 class="mt-12">
      2004 - Mesure et démesure
    </h2>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">Gorgias</span>, de Platon.
        <br>Traduction de Monique Canto Sperber, éditions Garnier Flammarion.
      </li>
      <li>
        <span class="underline">Gargantua</span>, de Rabelais.
        <br>Editions Gérard Defaux, collection bibliothèque classique en livre de poche.
      </li>
      <li>
        <span class="underline">Dom Juan</span>, de Molière.
      </li>
    </ol>

    <h2 class="mt-12">
      2003 - La paix
    </h2>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">La paix</span>, d'Aristophane.
        <br>Théâtre complet I, traduction de Debidour, éditions Folio.
      </li>
      <li>
        <span class="underline">Quatre-vingt-treize</span>, de Victor Hugo.
      </li>
      <li>
        <span class="underline">Projet de paix perpétuelle</span>, de Kant.
      </li>
    </ol>

    <h2 class="mt-12">
      2002 - L'amitié
    </h2>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">Ethique à Nicomaque</span>, d'Aristote.
      </li>
      <li>
        <span class="underline">Les faux-monnayeurs</span>, d'André Gide.
      </li>
      <li>
        <span class="underline">En attendant Godot</span>, de Beckett.
      </li>
    </ol>

    <h2 class="mt-12">
      2001 - L'héroïsme
    </h2>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">L'Iliade</span>, d'Homère.
        <br>Traduction de Paul Mazon, éditions Folio, n°700.
        <br>Chants 11 à 24.
      </li>
      <li>
        <span class="underline">Henri V</span>, de Shakespeare.
        <br>Editions Folio Théâtre, n°59.
      </li>
      <li>
        <span class="underline">La Chartreuse de Parme</span>, de Stendhal.
      </li>
    </ol>

    <h2 class="mt-12">
      2000 - Savoir et ignorer
    </h2>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">Ménon</span>, de Platon.
      </li>
      <li>
        <span class="underline">Bouvard et Pécuchet</span>, de Gustave Flaubert.
      </li>
      <li>
        <span class="underline">La vie de Galilée</span>, de Bertolt Brecht.
        <br>Traduction d'Eloi Reloing, éditions Arche, collection Brecht-Poche.
      </li>
    </ol>

    <h2 class="mt-12">
      1999 - Expériences du présent
    </h2>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">Noces</span>, d'Albert Camus.
      </li>
      <li>
        <span class="underline">Les grands chemins</span>, de Giono.
      </li>
      <li>
        <span class="underline">La pensée et le mouvant</span>, d'Henri Bergson.
        <br>Chapitre V, la perception du changement (deuxième conférence).
      </li>
    </ol>

    <h2 class="mt-12">
      1998 - L'humain et l'inhumain
    </h2>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">Frankenstein</span>, de Mary Shelley.
        <br>Traduction de Germain d'Hangest, éditée chez Garnier-Flammarion.
      </li>
      <li>
        <span class="underline">W ou le souvenir d'enfance</span>, de Georges Pérec.
      </li>
      <li>
        <span class="underline">Médée</span>, de Sénèque.
        <br>Traduction de Florence Dupont, éditée par l'Imprimerie nationale.
      </li>
    </ol>

    <h2 class="mt-12">
      1997 - L'écriture de soi
    </h2>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">Les Confessions</span>, de Jean-Jacques Rousseau.
        <br>LEs 4 premiers livres.
      </li>
      <li>
        <span class="underline">Les mots</span>, de Jean-Paul Sartre.
      </li>
      <li>
        <span class="underline">Mémoires d'Hadrien</span>, de Marguerite Yourcenar.
      </li>
    </ol>

    <h2 class="mt-12">
      1996 - La ville
    </h2>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">Les villes tentaculaires</span>, d'Emile Verhaeren.
      </li>
      <li>
        <span class="underline">Dans la jungle des villes</span>, de Bertolt Brecht.
      </li>
      <li>
        <span class="underline">L'emploi du temps</span>, de Michel Butor.
      </li>
    </ol>

    <h2 class="mt-12">
      1995 - Figures du pouvoir
    </h2>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">Gorgias</span>, de Platon.
        <br>Traduction de Mme Monique Canto.
      </li>
      <li>
        <span class="underline">Britannicus</span>, de Jean Racine.
      </li>
      <li>
        <span class="underline">La fortune des Rougon</span>, d'Emile Zola.
      </li>
    </ol>

    <h2 class="mt-12">
      1994 - L'œuvre d'art
    </h2>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">Le Chef-d'œuvre inconnu</span>, d'Honoré de Balzac.
      </li>
      <li>
        <span class="underline">Lettres à un jeune poète</span>, de Rainer Maria Rilke.
      </li>
      <li>
        <span class="underline">À l'ombre des jeunes filles en fleurs</span>, de Marcel Proust.
      </li>
    </ol>

    <h2 class="mt-12">
      1993 - L'autre et l'ailleurs
    </h2>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">Odyssée</span>, d'Homère.
        <br>Traduction de Philippe Jaccottet.
      </li>
      <li>
        <span class="underline">Un barbare en Asie</span>, d'Henri Michaux.
      </li>
      <li>
        <span class="underline">Tristes tropiques</span>, de Claude Lévi-Strauss.
      </li>
    </ol>

    <h2 class="mt-12">
      1992 - La passion amoureuse
    </h2>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">Le roman de Tristan et Iseut</span>, de Joseph Bédier.
      </li>
      <li>
        <span class="underline">Roméo et Juliette</span>, de William Shakespeare.
      </li>
      <li>
        <span class="underline">Les liaisons dangereuses</span>, de Pierre Choderlos de Laclos.
      </li>
    </ol>

    <h2 class="mt-12">
      1991 - L'hymne à l'univers
    </h2>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">De la nature</span>, de Lucrèce.
      </li>
      <li>
        <span class="underline">Le second Faust</span>, de Goethe.
      </li>
      <li>
        <span class="underline">Les vrilles de la vigne et Sido</span>, de Colette.
      </li>
      <li>
        <span class="underline">Sido</span>, de Colette.
      </li>
    </ol>

    <h2 class="mt-12">
      1990 - L'Histoire
    </h2>

    <h3 class="mt-4">
      Œuvres
    </h3>

    <ol class="list-decimal list-inside space-y-4">
      <li>
        <span class="underline">Esquisse d'un tableau historique des progrès de l'esprit humain</span>, de Nicolas de Condorcet.
      </li>
      <li>
        <span class="underline">L'éducation sentimentale</span>, de Gustave Flaubert.
      </li>
      <li>
        <span class="underline">La guerre de Troie n'aura pas lieu</span>, de Jean Giraudoux.
      </li>
    </ol>

    <!-- <hr class="separator-1">

    <p>
      Sources :
    </p>

    <ul>
      <li>
        <ULink
          class="text-primary"
          to="https://www.concours-agro-veto.fr/archives-sujets-rapports/sujets-rapports-concours-cpge-bcpst/epreuves-ecrites-concours-cpge-bcpst#Humanit%C3%A9s"
          target="_blank"
        >
          Agro-Véto : les sujets
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://www.ens.psl.eu/une-formation-d-exception/admission-concours/concours-voie-cpge/concours-voie-cpge-sciences-0"
          target="_blank"
        >
          ENS : sujets et rapports à partir de 2007
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://concoursg2e.univ-lorraine.fr/concours-precedents/"
          target="_blank"
        >
          G2E : les sujets et rapports
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://banques-ecoles.fr/cms/filiere-bcpst/"
          target="_blank"
        >
          Sujets à partir de 2003
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://www.education.gouv.fr/bo/2024/Hebdo29/ESRS2418417A"
          target="_blank"
        >
          Programme de français et de philosophie pour l'année scolaire 2024-2025 (bulletin officiel)
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://www.education.gouv.fr/bo/2023/Hebdo28/ESRS2317934A"
          target="_blank"
        >
          Programme de français et de philosophie pour l'année scolaire 2023-2024 (bulletin officiel)
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://www.education.gouv.fr/bo/22/Hebdo20/ESRS2213517A.htm"
          target="_blank"
        >
          Programme de français et de philosophie pour l'année scolaire 2022-2023 (bulletin officiel)
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://www.enseignementsup-recherche.gouv.fr/fr/bo/21/Hebdo28/ESRS2119554A.htm"
          target="_blank"
        >
          Programme de français et de philosophie pour l'année scolaire 2021-2022 (bulletin officiel)
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://www.education.gouv.fr/bo/20/Hebdo32/ESRS2014851A.htm"
          target="_blank"
        >
          Programme de français et de philosophie pour l'année scolaire 2020-2021 (bulletin officiel)
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://www.education.gouv.fr/bo/19/Hebdo27/ESRS1900148A.htm"
          target="_blank"
        >
          Programme de français et de philosophie pour l'année scolaire 2019-2020 (bulletin officiel)
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://fr.wikipedia.org/wiki/Fran%C3%A7ais-philosophie#%C3%89tude_des_%C5%93uvres"
          target="_blank"
        >
          Thèmes et oeuvres de Français - Philosophie depuis 1969
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://www.enseignementsup-recherche.gouv.fr/fr/bo/18/Hebdo24/ESRS1800091A.htm"
          target="_blank"
        >
          Programme de français et de philosophie pour l'année scolaire 2018-2019 (bulletin officiel)
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://www.education.gouv.fr/bo/17/Hebdo26/ESRS1700064A.htm"
          target="_blank"
        >
          Programme de français et de philosophie pour l'année scolaire 2017-2018 (bulletin officiel)
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://www.education.gouv.fr/bo/16/Hebdo26/MENS1600411A.htm"
          target="_blank"
        >
          Programme de français et de philosophie pour l'année scolaire 2016-2017 (bulletin officiel)
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://www.education.gouv.fr/bo/15/Hebdo23/MENS1501166A.htm"
          target="_blank"
        >
          Programme de français et de philosophie pour l'année scolaire 2015-2016 (bulletin officiel)
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://www.education.gouv.fr/bo/14/Hebdo24/MENS1401052A.htm"
          target="_blank"
        >
          Programme de français et de philosophie pour l'année scolaire 2014-2015 (bulletin officiel)
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://www.education.gouv.fr/bo/13/Hebdo26/ESRS1300172A.htm"
          target="_blank"
        >
          Programme de français et de philosophie pour l'année scolaire 2013-2014 (bulletin officiel)
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://www.education.gouv.fr/bo/12/Hebdo26/ESRS1200215A.htm"
          target="_blank"
        >
          Programme de français et de philosophie pour l'année scolaire 2012-2013 (bulletin officiel)
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://www.education.gouv.fr/bo/2011/24/esrs1100188a.htm"
          target="_blank"
        >
          Programme de français et de philosophie pour l'année scolaire 2011-2012 (bulletin officiel)
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://www.education.gouv.fr/bo/2010/17/esrs1000116a.htm"
          target="_blank"
        >
          Programme de français et de philosophie pour l'année scolaire 2010-2011 (bulletin officiel)
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://www.enseignementsup-recherche.gouv.fr/fr/bo/2009/27/esrs0900270a.html"
          target="_blank"
        >
          Programme de français et de philosophie pour l'année scolaire 2009-2010 (bulletin officiel)
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000019116992/"
          target="_blank"
        >
          Programme de français et de philosophie pour l'année scolaire 2008-2009 (bulletin officiel)
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000000650646"
          target="_blank"
        >
          Programme de français et de philosophie pour l'année scolaire 2007-2008 (bulletin officiel)
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000000818342"
          target="_blank"
        >
          Programme de français et de philosophie pour l'année scolaire 2006-2007 (bulletin officiel)
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000000451389"
          target="_blank"
        >
          Programme de français et de philosophie pour l'année scolaire 2005-2006 (bulletin officiel)
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000000252109"
          target="_blank"
        >
          Programme de français et de philosophie pour l'année scolaire 2004-2005 (bulletin officiel)
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000000602572"
          target="_blank"
        >
          Programme de français et de philosophie pour l'année scolaire 2003-2004 (bulletin officiel)
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000000228933"
          target="_blank"
        >
          Programme de français et de philosophie pour l'année scolaire 2002-2003 (bulletin officiel)
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000000207891"
          target="_blank"
        >
          Programme de français et de philosophie pour l'année scolaire 2001-2002 (bulletin officiel)
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000000400745"
          target="_blank"
        >
          Programme de français et de philosophie pour l'année scolaire 2000-2001 (bulletin officiel)
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000000393558"
          target="_blank"
        >
          Programme de français et de philosophie pour l'année scolaire 1999-2000 (bulletin officiel)
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://www.education.gouv.fr/bo/1998/31/sup.htm"
          target="_blank"
        >
          Programme de français et de philosophie pour l'année scolaire 1998-1999 (bulletin officiel)
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000000182033"
          target="_blank"
        >
          Programme de français et de philosophie pour l'année scolaire 1997-1998 (bulletin officiel)
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000000367529"
          target="_blank"
        >
          Programme de français et de philosophie pour l'année scolaire 1996-1997 (bulletin officiel)
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000000721816"
          target="_blank"
        >
          Programme de français et de philosophie pour l'année scolaire 1995-1996 (bulletin officiel)
        </ULink>
      </li>
    </ul> -->
  </UContainer>
</template>
