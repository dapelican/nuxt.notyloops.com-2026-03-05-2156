<script setup>
const page_title = 'Annales prépa MPI : Français - Philosophie';

let meta_description = 'Les annales de français - philosophie pour les CPGE MPI.';
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
    label: 'MPI',
    to: '/annales/cpge/mpi',
    url: 'https://fr.notyloops.com/annales/cpge/mpi',
  },
  {
    label: 'Français - Philosophie',
    to: '/annales/cpge/mpi/francais-philosophie',
    url: 'https://fr.notyloops.com/annales/cpge/mpi/francais-philosophie',
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
  <!-- app/pages/annales/cpge/mpi/francais-philosophie.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales CPGE MPI : français - philosophie
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
              CCINP / e3a-Polytech
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2026-ccinp-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2026-ccinp-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              CCMP
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2026-ccmp-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-2026-ccmp-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              CCS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2026-ccs-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-2026-ccs-mp-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              X / ESPCI / ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2026-x-espci-ens-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-2026-x-espci-ens-mp-rapport.pdf"
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
              CCINP / e3a-Polytech
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2025-ccinp-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2025-ccinp-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              CCMP
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2025-ccmp-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2025-ccmp-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              CCS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2025-ccs-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2025-ccs-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              X / ESPCI / ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2025-x-espci-ens-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2025-x-espci-ens-rapport.pdf"
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
              CCINP / e3a-Polytech
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2024-ccinp-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2024-ccinp-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              CCMP
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2024-ccmp-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2024-ccmp-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              CCS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2024-ccs-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2024-ccs-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              X / ESPCI / ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2024-x-espci-ens-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2024-x-espci-ens-rapport.pdf"
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
              CCINP / e3a-Polytech
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2023-ccinp-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2023-ccinp-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              CCMP
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2023-ccmp-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2023-ccmp-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              CCS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2023-ccs-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2023-ccs-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              X / ESPCI / ENS
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2023-x-espci-ens-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-francais-philosophie-2023-x-espci-ens-rapport.pdf"
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
  </UContainer>
</template>
