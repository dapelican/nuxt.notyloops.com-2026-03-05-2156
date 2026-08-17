<script setup>
const page_title = 'Annales khâgne A/L classique : français';

let meta_description = 'Les annales de français pour les CPGE littéraires A/L classiques.';
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
    label: 'khâgne A/L classique',
    to: '/annales/cpge/khagne-al-classique',
    url: 'https://fr.notyloops.com/annales/cpge/khagne-al-classique',
  },
  {
    label: 'Français',
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
  <!-- app/pages/annales/cpge/khagne-al-classique/francais.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales khâgne A/L classique : français
    </h1>

    <h2 class="mt-12">
      2027
    </h2>

    <section>
      <h3 class="mt-8">
        Programme
      </h3>

      <h4 class="mt-4">
        Axe 1 : genres et mouvements
      </h4>

      <ul class="list-disc list-inside">
        <li>
          Domaine 4 : l'écriture de l'histoire
        </li>
      </ul>

      <h4 class="mt-4">
        Axe 2 : questions
      </h4>

      <ul class="list-disc list-inside">
        <li>
          Domaine 5 : littérature et morale
        </li>
        <li>
          Domaine 6 : littérature et politique
        </li>
      </ul>

      <h4 class="mt-4">
        Oeuvres
      </h4>

      <ul class="list-disc list-inside">
        <li>
          Tristan L'Hermite, <span class="italic">La Mort de Sénèque</span>,
          dans <span class="italic">Tristan L'Hermite, Les Tragédies</span>,
          éd. R. Guichemerre et al., Champion Classiques, 2009 ;
          ISBN : 9782745319678.
        </li>
        <li>
          Madame de La Fayette, <span class="italic">La Princesse de Clèves</span>,
          éd. P. Sellier, Le Livre de Poche « classiques », 1973 ;
          ISBN : 9782253006725.
        </li>
        <li>
          Émile Zola, <span class="italic">Le Ventre de Paris</span>,
          éd. M.-A. Fougère, GF Flammarion, 2023 ;
          ISBN : 9782081492592.
        </li>
        <li>
          Georges Perec, <span class="italic">W ou le souvenir d'enfance</span>,
          Gallimard, coll. « L'Imaginaire », 1993 ;
          ISBN : 9782070733163.
        </li>
      </ul>
    </section>

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
              BCE
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2026-al-bce-sujet.pdf"
                target="_blank"
              >
                Dissertation littéraire
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2026-al-bce-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-etude-et-synthese-de-textes-2026-ec-escp-hec-sujet.pdf"
                target="_blank"
              >
                Etude et synthèse de textes
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-etude-et-synthese-de-textes-2026-ec-escp-hec-rapport.pdf"
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
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-al-classique-francais-2026-bel-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              <!-- |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-al-classique-francais-2026-bel-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink> -->
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <section>
      <h3 class="mt-8">
        Programme
      </h3>

      <h4 class="mt-4">
        Axe 1 : genres et mouvements
      </h4>

      <ul class="list-disc list-inside">
        <li>
          Domaine 4 : le merveilleux
        </li>
      </ul>

      <h4 class="mt-4">
        Axe 2 : questions
      </h4>

      <ul class="list-disc list-inside">
        <li>
          Domaine 3 : l'œuvre littéraire et le lecteur
        </li>
        <li>
          Domaine 4 : la représentation littéraire
        </li>
      </ul>

      <h4 class="mt-4">
        Oeuvres
      </h4>

      <ul class="list-disc list-inside">
        <li>
          Jean de Léry, <span class="italic">Histoire d'un voyage faict en la terre du Brésil</span>, éd. F. Lestringant, Le Livre de Poche
          « classiques », 1994 ; ISBN : 9782253907077.
        </li>
        <li>
          Madame d'Aulnoy, <span class="italic">Contes des Fées</span>,
          tomes 1 et 2, p. 107-383, éd. N. Jasmin, hampion lassiques,
          2008 ; ISBN : 9782745317032.
        </li>
        <li>
          Gérard de Nerval, <span class="italic">Aurélia</span>, dans Gérard de Nerval,
          <span class="italic">Aurélia. Les Nuits d'octobre. Pandora. Promenades et souvenirs</span>,
          éd. J.-N. Illouz, Gallimard, coll. Folio classique, 2005 ; ISBN : 9782070314768.
        </li>
        <li>
          Aragon, <span class="italic">Le Paysan de Paris</span>,
          Gallimard, coll. Folio, 1972 ; ISBN : 9782070367825.
        </li>
      </ul>
    </section>

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
              BCE
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2025-al-bce-sujet.pdf"
                target="_blank"
              >
                Dissertation littéraire
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-dissertation-2025-al-bce-rapport-litteraire.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-etude-et-synthese-de-textes-2025-ec-escp-hec-sujet.pdf"
                target="_blank"
              >
                Etude et synthèse de textes
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/cpge-etude-et-synthese-de-textes-2025-ec-escp-hec-rapport.pdf"
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
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-francais-2025-al-bel-sujet.pdf"
                target="_blank"
              >
                Sujet
              </ULink>
              |
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/khagne-francais-2025-al-bel-rapport.pdf"
                target="_blank"
              >
                Rapport
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>

    <section>
      <h3 class="mt-8">
        Programme
      </h3>

      <h4 class="mt-4">
        Axe 1 : genres et mouvements
      </h4>

      <ul class="list-disc list-inside">
        <li>
          Domaine 1 : le roman.
        </li>
      </ul>

      <h4 class="mt-4">
        Axe 2 : questions
      </h4>

      <ul class="list-disc list-inside">
        <li>
          Domaine 1 : l'œuvre littéraire, ses propriétés, sa valeur.
        </li>
        <li>
          Domaine 2 : l'œuvre littéraire et l'auteur.
        </li>
      </ul>

      <h4 class="mt-4">
        Oeuvres
      </h4>

      <ul class="list-disc list-inside">
        <li>
          Guilleragues, <span class="italic">Lettres portugaises</span>,
          éd. A. Brunn, GF Flammarion, 2009.
        </li>
        <li>
          Bernardin de Saint-Pierre, <span class="italic">Paul et Virginie</span>,
          éd. J.-M. Racault, Le Livre de Poche, Classiques, 2019.
        </li>
        <li>
          Flaubert, <span class="italic">Madame Bovary</span>,
          éd. G. Séginger, GF, 2018.
        </li>
        <li>
          Marguerite Duras, <span class="italic">Le ravissement de Lol V. Stein</span>, Folio, 1976.
        </li>
      </ul>
    </section>
  </UContainer>
</template>
