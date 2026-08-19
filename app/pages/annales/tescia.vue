<script setup>
const page_title = 'Annales TeSciA';

let meta_description = 'Les annales des épreuves mathématiques du TeSciA (Test Scientifique Avancé).';
meta_description += ' Tous les sujets depuis 2022.';

const breadcrumb_items = [
  {
    label: 'Annales',
    to: '/annales',
    url: 'https://fr.notyloops.com/annales',
  },
  {
    label: 'TeSciA',
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
  <!-- app/pages/annales/tescia.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales TeSciA (Test Scientifique Avancé)
    </h1>

    <figure>
      <table>
        <thead>
          <tr>
            <th>
              Année
            </th>
            <th>
              Documents
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              2026
            </td>
            <td>
              Sujets pas encore disponibles.
              <!-- <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-2025-epreuve-1-sujet.pdf"
                target="_blank"
              >
                Sujet 1
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-2025-epreuve-2a-sujet.pdf"
                target="_blank"
              >
                Sujet 2a
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-2025-epreuve-2b-sujet.pdf"
                target="_blank"
              >
                Sujet 2b
              </ULink> -->
            </td>
          </tr>
          <tr>
            <td>
              2025
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-2025-epreuve-1-sujet.pdf"
                target="_blank"
              >
                Sujet 1
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-2025-epreuve-2a-sujet.pdf"
                target="_blank"
              >
                Sujet 2a
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-2025-epreuve-2b-sujet.pdf"
                target="_blank"
              >
                Sujet 2b
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              2024
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-2024-epreuve-1-sujet.pdf"
                target="_blank"
              >
                Sujet 1
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-2024-epreuve-2a-sujet.pdf"
                target="_blank"
              >
                Sujet 2a
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-2024-epreuve-2b-sujet.pdf"
                target="_blank"
              >
                Sujet 2b
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              2023
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-2023-epreuve-1-sujet.pdf"
                target="_blank"
              >
                Sujet 1
              </ULink>
              |
              Corrigé :
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-2023-epreuve-1-corrige-1.pdf"
                target="_blank"
              >
                1 sur 3
              </ULink>
              ,
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-2023-epreuve-1-corrige-2.pdf"
                target="_blank"
              >
                2 sur 3
              </ULink>
              ,
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-2023-epreuve-1-corrige-3.pdf"
                target="_blank"
              >
                3 sur 3
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-2023-epreuve-2a-sujet.pdf"
                target="_blank"
              >
                Sujet 2a
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-2023-epreuve-2b-sujet.pdf"
                target="_blank"
              >
                Sujet 2b
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              2022
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-2022-epreuve-1-sujet.pdf"
                target="_blank"
              >
                Sujet 1
              </ULink>
              |
              Corrigé :
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-2022-epreuve-1-corrige-1.pdf"
                target="_blank"
              >
                1 sur 3
              </ULink>
              ,
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-2022-epreuve-1-corrige-2.pdf"
                target="_blank"
              >
                2 sur 3
              </ULink>
              ,
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-2022-epreuve-1-corrige-3.pdf"
                target="_blank"
              >
                3 sur 3
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-2022-epreuve-2a-sujet.pdf"
                target="_blank"
              >
                Sujet 2a
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-2022-epreuve-2b-sujet.pdf"
                target="_blank"
              >
                Sujet 2b
              </ULink>
              |
              Corrigé :
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-2022-epreuve-2b-corrige-1.pdf"
                target="_blank"
              >
                1 sur 2
              </ULink>
              ,
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-2022-epreuve-2b-corrige-2.pdf"
                target="_blank"
              >
                2 sur 2
              </ULink>
            </td>
          </tr>
          <tr>
            <td>
              0000
            </td>
            <td>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-0000-epreuve-1-sujet.pdf"
                target="_blank"
              >
                Sujet 1
              </ULink>
              |
              Corrigé :
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-0000-epreuve-1-corrige-1.pdf"
                target="_blank"
              >
                1 sur 3
              </ULink>
              ,
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-0000-epreuve-1-corrige-2.pdf"
                target="_blank"
              >
                2 sur 3
              </ULink>
              ,
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-0000-epreuve-1-corrige-3.pdf"
                target="_blank"
              >
                3 sur 3
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-0000-epreuve-2a-sujet.pdf"
                target="_blank"
              >
                Sujet 2a
              </ULink>
              |
              Corrigé :
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-0000-epreuve-2a-corrige-1.pdf"
                target="_blank"
              >
                1 sur 3
              </ULink>
              ,
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-0000-epreuve-2a-corrige-2.pdf"
                target="_blank"
              >
                2 sur 3
              </ULink>
              ,
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-0000-epreuve-2a-corrige-3.pdf"
                target="_blank"
              >
                3 sur 3
              </ULink>
              <br>
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-0000-epreuve-2b-sujet.pdf"
                target="_blank"
              >
                Sujet 2b
              </ULink>
              |
              Corrigé :
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-0000-epreuve-2b-corrige-1.pdf"
                target="_blank"
              >
                1 sur 3
              </ULink>
              ,
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-0000-epreuve-2b-corrige-2.pdf"
                target="_blank"
              >
                2 sur 3
              </ULink>
              ,
              <ULink
                class="text-primary"
                to="https://annales.notyloops.com/tescia-0000-epreuve-2b-corrige-3.pdf"
                target="_blank"
              >
                3 sur 3
              </ULink>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>
  </UContainer>
</template>
