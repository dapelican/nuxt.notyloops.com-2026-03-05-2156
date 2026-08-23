<script setup>
const page_title = 'Annales du concours de médecine et de dentisterie de Wallonie-Bruxelles';

let meta_description = 'Les sujets des épreuves du concours d\'entrée et d\'accès en ';
meta_description += 'sciences médecales et sciences dentaires de la fédération Wallonie-Bruxelles.';

const breadcrumb_items = [
  {
    label: 'Annales',
    to: '/annales',
    url: 'https://fr.notyloops.com/annales',
  },
  {
    label: 'Médecine et dentisterie Wallonie-Bruxelles',
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
  <!-- app/pages/annales/medecine-dentisterie-wallonie-bruxelles.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1 class="center">
      Annales médecine et dentisterie de Wallonie-Bruxelles
    </h1>

    <h2 class="mt-12">
      2025
    </h2>

    <ol class="list-decimal list-inside">
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2025-08-28-matin.pdf"
          target="_blank"
        >Biologie, chimie, mathématiques, physique</ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2025-08-28-matin-corrige.pdf"
          target="_blank"
        >Corrigé</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2025-08-28-apres-midi.pdf"
          target="_blank"
        >Capacités transversales</ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2025-08-28-apres-midi-corrige.pdf"
          target="_blank"
        >Corrigé</ULink>
      </li>
    </ol>

    <h2 class="mt-12">
      2024
    </h2>

    <ol class="list-decimal list-inside">
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2024-08-28-matin.pdf"
          target="_blank"
        >Biologie, chimie, mathématiques, physique</ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2024-08-28-matin-corrige.pdf"
          target="_blank"
        >Corrigé</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2024-08-28-apres-midi.pdf"
          target="_blank"
        >Capacités transversales</ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2024-08-28-apres-midi-corrige.pdf"
          target="_blank"
        >Corrigé</ULink>
      </li>
    </ol>

    <h2 class="mt-12">
      2023
    </h2>

    <ol class="list-decimal list-inside">
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2023-08-25-matin.pdf"
          target="_blank"
        >Biologie, chimie, mathématiques, physique</ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2023-08-25-matin-corrige.pdf"
          target="_blank"
        >Corrigé</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2023-08-25-apres-midi.pdf"
          target="_blank"
        >Capacités transversales</ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2023-08-25-apres-midi-corrige.pdf"
          target="_blank"
        >Corrigé</ULink>
      </li>
    </ol>

    <h2 class="mt-12">
      2022
    </h2>

    <ol class="list-decimal list-inside">
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2022-07-05-matin.pdf"
          target="_blank"
        >Physique, chimie, raisonnement, communication</ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2022-07-05-matin-corrige.pdf"
          target="_blank"
        >Corrigé</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2022-07-05-apres-midi.pdf"
          target="_blank"
        >Mathématiques, biologie, éthique, empathie</ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2022-07-05-apres-midi-corrige.pdf"
          target="_blank"
        >Corrigé</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2022-08-27-matin.pdf"
          target="_blank"
        >Physique, chimie, raisonnement, communication</ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2022-08-27-matin-corrige.pdf"
          target="_blank"
        >Corrigé</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2022-08-27-apres-midi.pdf"
          target="_blank"
        >Mathématiques, biologie, éthique, empathie</ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2022-08-27-apres-midi-corrige.pdf"
          target="_blank"
        >Corrigé</ULink>
      </li>
    </ol>

    <h2 class="mt-12">
      2021
    </h2>

    <ol class="list-decimal list-inside">
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2021-07-06-matin.pdf"
          target="_blank"
        >Physique, chimie, raisonnement, communication</ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2021-07-06-matin-corrige.pdf"
          target="_blank"
        >Corrigé</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2021-07-06-apres-midi.pdf"
          target="_blank"
        >Mathématiques, biologie, éthique, empathie</ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2021-07-06-apres-midi-corrige.pdf"
          target="_blank"
        >Corrigé</ULink>
      </li>
      <li>
        Physique, chimie, raisonnement, communication
        <!-- <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2021-08-28-matin.pdf"
          target="_blank"
        >Physique, chimie, raisonnement, communication</ULink>
        | -->
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2021-08-28-matin-corrige.pdf"
          target="_blank"
        >Corrigé</ULink>
      </li>
      <li>
        Mathématiques, biologie, éthique, empathie
        <!-- <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2021-08-28-apres-midi.pdf"
          target="_blank"
        >Mathématiques, biologie, éthique, empathie</ULink> -->
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2021-08-28-apres-midi-corrige.pdf"
          target="_blank"
        >Corrigé</ULink>
      </li>
    </ol>

    <h2 class="mt-12">
      2020
    </h2>

    <ol class="list-decimal list-inside">
      <li>
        Physique, chimie, raisonnement, communication
        <!-- <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2020-08-28-matin.pdf"
          target="_blank"
        >Physique, chimie, raisonnement, communication</ULink> -->
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2020-08-28-matin-corrige.pdf"
          target="_blank"
        >Corrigé</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2020-08-28-apres-midi.pdf"
          target="_blank"
        >Mathématiques, biologie, éthique, empathie</ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2020-08-28-apres-midi-corrige.pdf"
          target="_blank"
        >Corrigé</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2020-09-12-matin.pdf"
          target="_blank"
        >Physique, chimie, raisonnement, communication</ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2020-09-12-matin-corrige.pdf"
          target="_blank"
        >Corrigé</ULink>
      </li>
      <li>
        Mathématiques, biologie, éthique, empathie
        <!-- <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2020-09-12-apres-midi.pdf"
          target="_blank"
        >Mathématiques, biologie, éthique, empathie</ULink> -->
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2020-09-12-apres-midi-corrige.pdf"
          target="_blank"
        >Corrigé</ULink>
      </li>
    </ol>

    <h2 class="mt-12">
      2019
    </h2>

    <ol class="list-decimal list-inside">
      <li>
        Physique, chimie, raisonnement, communication
        <!-- <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2019-07-10-matin.pdf"
          target="_blank"
        >Physique, chimie, raisonnement, communication</ULink> -->
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2019-07-10-matin-corrige.pdf"
          target="_blank"
        >Corrigé</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2019-07-10-apres-midi.pdf"
          target="_blank"
        >Mathématiques, biologie, éthique, empathie</ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2019-07-10-apres-midi-corrige.pdf"
          target="_blank"
        >Corrigé</ULink>
      </li>
      <li>
        Physique, chimie, raisonnement, communication
        <!-- <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2019-09-04-matin.pdf"
          target="_blank"
        >Physique, chimie, raisonnement, communication</ULink>
        | -->
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2019-09-04-matin-corrige.pdf"
          target="_blank"
        >Corrigé</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2019-09-04-apres-midi.pdf"
          target="_blank"
        >Mathématiques, biologie, éthique, empathie</ULink>
        |
        <ULink
          class="text-primary"
          to="https://annales.notyloops.com/medecine-dentisterie-2019-09-04-apres-midi-corrige.pdf"
          target="_blank"
        >Corrigé</ULink>
      </li>
    </ol>
  </UContainer>
</template>
