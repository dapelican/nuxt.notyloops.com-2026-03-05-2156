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
      Annales TeSciA
    </h1>

    <h2>
      2026
    </h2>

    <ul class="list-disc list-inside">
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2026-epreuve-1-sujet.pdf"
          target="_blank"
        >
          Sujet 1
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2026-epreuve-1-corrige-qcm.pdf"
          target="_blank"
        >
          Corrigé QCM
        </ULink>
        <!-- |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2026-epreuve-1-corrige-ronds.pdf"
          target="_blank"
        >
          Corrigé ronds
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2026-epreuve-1-corrige-triangles.pdf"
          target="_blank"
        >
          Corrigé triangles
        </ULink> -->
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2026-epreuve-2a-sujet.pdf"
          target="_blank"
        >
          Sujet 2a
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2026-epreuve-2a-corrige-qcm.pdf"
          target="_blank"
        >
          Corrigé QCM
        </ULink>
        <!-- |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2026-epreuve-2a-corrige-ronds.pdf"
          target="_blank"
        >
          Corrigé ronds
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2026-epreuve-2a-corrige-triangles.pdf"
          target="_blank"
        >
          Corrigé triangles
        </ULink> -->
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2026-epreuve-2b-sujet.pdf"
          target="_blank"
        >
          Sujet 2b
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2026-epreuve-2b-corrige-qcm.pdf"
          target="_blank"
        >
          Corrigé QCM
        </ULink>
        <!-- |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2026-epreuve-2b-corrige-ronds.pdf"
          target="_blank"
        >
          Corrigé ronds
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2026-epreuve-2b-corrige-triangles.pdf"
          target="_blank"
        >
          Corrigé triangles
        </ULink> -->
      </li>
    </ul>

    <h2 class="mt-8">
      2025
    </h2>

    <ul class="list-disc list-inside">
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2025-epreuve-1-sujet.pdf"
          target="_blank"
        >
          Sujet 1
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2025-epreuve-1-corrige-qcm.pdf"
          target="_blank"
        >
          Corrigé QCM
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2025-epreuve-1-corrige-ronds.pdf"
          target="_blank"
        >
          Corrigé ronds
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2025-epreuve-1-corrige-triangles.pdf"
          target="_blank"
        >
          Corrigé triangles
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2025-epreuve-2a-sujet.pdf"
          target="_blank"
        >
          Sujet 2a
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2025-epreuve-2a-corrige-qcm.pdf"
          target="_blank"
        >
          Corrigé QCM
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2025-epreuve-2a-corrige-ronds.pdf"
          target="_blank"
        >
          Corrigé ronds
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2025-epreuve-2a-corrige-triangles.pdf"
          target="_blank"
        >
          Corrigé triangles
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2025-epreuve-2b-sujet.pdf"
          target="_blank"
        >
          Sujet 2b
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2025-epreuve-2b-corrige-qcm.pdf"
          target="_blank"
        >
          Corrigé QCM
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2025-epreuve-2b-corrige-ronds.pdf"
          target="_blank"
        >
          Corrigé ronds
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2025-epreuve-2b-corrige-triangles.pdf"
          target="_blank"
        >
          Corrigé triangles
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2025-rapport.pdf"
          target="_blank"
        >
          Rapport
        </ULink>
      </li>
    </ul>

    <h2 class="mt-8">
      2024
    </h2>

    <ul class="list-disc list-inside">
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2024-epreuve-1-sujet.pdf"
          target="_blank"
        >
          Sujet 1
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2024-epreuve-1-corrige-qcm.pdf"
          target="_blank"
        >
          Corrigé QCM
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2024-epreuve-1-corrige-ronds.pdf"
          target="_blank"
        >
          Corrigé ronds
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2024-epreuve-1-corrige-triangles.pdf"
          target="_blank"
        >
          Corrigé triangles
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2024-epreuve-2a-sujet.pdf"
          target="_blank"
        >
          Sujet 2a
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2024-epreuve-2a-corrige-qcm.pdf"
          target="_blank"
        >
          Corrigé QCM
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2024-epreuve-2a-corrige-ronds.pdf"
          target="_blank"
        >
          Corrigé ronds
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2024-epreuve-2a-corrige-triangles.pdf"
          target="_blank"
        >
          Corrigé triangles
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2024-epreuve-2b-sujet.pdf"
          target="_blank"
        >
          Sujet 2b
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2024-epreuve-2b-corrige-qcm.pdf"
          target="_blank"
        >
          Corrigé QCM
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2024-epreuve-2b-corrige-ronds.pdf"
          target="_blank"
        >
          Corrigé ronds
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2024-epreuve-2b-corrige-triangles.pdf"
          target="_blank"
        >
          Corrigé triangles
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2024-rapport.pdf"
          target="_blank"
        >
          Rapport
        </ULink>
      </li>
    </ul>

    <h2 class="mt-8">
      2023
    </h2>

    <ul class="list-disc list-inside">
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2023-epreuve-1-sujet.pdf"
          target="_blank"
        >
          Sujet 1
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2023-epreuve-1-corrige-qcm.pdf"
          target="_blank"
        >
          Corrigé QCM
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2023-epreuve-1-corrige-ronds.pdf"
          target="_blank"
        >
          Corrigé ronds
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2023-epreuve-1-corrige-triangles.pdf"
          target="_blank"
        >
          Corrigé triangles
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2023-epreuve-2a-sujet.pdf"
          target="_blank"
        >
          Sujet 2a
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2023-epreuve-2a-corrige-qcm.pdf"
          target="_blank"
        >
          Corrigé QCM
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2023-epreuve-2a-corrige-ronds.pdf"
          target="_blank"
        >
          Corrigé ronds
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2023-epreuve-2a-corrige-triangles.pdf"
          target="_blank"
        >
          Corrigé triangles
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2023-epreuve-2b-sujet.pdf"
          target="_blank"
        >
          Sujet 2b
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2023-epreuve-2b-corrige-qcm.pdf"
          target="_blank"
        >
          Corrigé QCM
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2023-epreuve-2b-corrige-ronds.pdf"
          target="_blank"
        >
          Corrigé ronds
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2023-epreuve-2b-corrige-triangles.pdf"
          target="_blank"
        >
          Corrigé triangles
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2023-rapport.pdf"
          target="_blank"
        >
          Rapport
        </ULink>
      </li>
    </ul>

    <h2 class="mt-8">
      2022
    </h2>

    <ul class="list-disc list-inside">
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2022-epreuve-1-sujet.pdf"
          target="_blank"
        >
          Sujet 1
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2022-epreuve-1-corrige-qcm.pdf"
          target="_blank"
        >
          Corrigé QCM
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2022-epreuve-1-corrige-ronds.pdf"
          target="_blank"
        >
          Corrigé ronds
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2022-epreuve-1-corrige-triangles.pdf"
          target="_blank"
        >
          Corrigé triangles
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2022-epreuve-2a-sujet.pdf"
          target="_blank"
        >
          Sujet 2a
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2022-epreuve-2a-corrige-qcm.pdf"
          target="_blank"
        >
          Corrigé QCM
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2022-epreuve-2a-corrige-ronds.pdf"
          target="_blank"
        >
          Corrigé ronds
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2022-epreuve-2a-corrige-triangles.pdf"
          target="_blank"
        >
          Corrigé triangles
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2022-epreuve-2b-sujet.pdf"
          target="_blank"
        >
          Sujet 2b
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2022-epreuve-2b-corrige-qcm.pdf"
          target="_blank"
        >
          Corrigé QCM
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2022-epreuve-2b-corrige-ronds.pdf"
          target="_blank"
        >
          Corrigé ronds
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2022-epreuve-2b-corrige-triangles.pdf"
          target="_blank"
        >
          Corrigé triangles
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-2022-rapport.pdf"
          target="_blank"
        >
          Rapport
        </ULink>
      </li>
    </ul>

    <h2 class="mt-8">
      0000
    </h2>

    <ul class="list-disc list-inside">
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-0000-epreuve-1-sujet.pdf"
          target="_blank"
        >
          Sujet 1
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-0000-epreuve-1-corrige-qcm.pdf"
          target="_blank"
        >
          Corrigé QCM
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-0000-epreuve-1-corrige-ronds.pdf"
          target="_blank"
        >
          Corrigé ronds
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-0000-epreuve-1-corrige-triangles.pdf"
          target="_blank"
        >
          Corrigé triangles
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-0000-epreuve-2a-sujet.pdf"
          target="_blank"
        >
          Sujet 2a
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-0000-epreuve-2a-corrige-qcm.pdf"
          target="_blank"
        >
          Corrigé QCM
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-0000-epreuve-2a-corrige-ronds.pdf"
          target="_blank"
        >
          Corrigé ronds
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-0000-epreuve-2a-corrige-triangles.pdf"
          target="_blank"
        >
          Corrigé triangles
        </ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-0000-epreuve-2b-sujet.pdf"
          target="_blank"
        >
          Sujet 2b
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-0000-epreuve-2b-corrige-qcm.pdf"
          target="_blank"
        >
          Corrigé QCM
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-0000-epreuve-2b-corrige-ronds.pdf"
          target="_blank"
        >
          Corrigé ronds
        </ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/tescia-0000-epreuve-2b-corrige-triangles.pdf"
          target="_blank"
        >
          Corrigé triangles
        </ULink>
      </li>
    </ul>
  </UContainer>
</template>
