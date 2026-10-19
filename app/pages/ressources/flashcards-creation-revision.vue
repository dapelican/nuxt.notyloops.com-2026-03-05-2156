<script setup>
const page_title = 'Comment créer et revoir des flashcards sur NotyLoops ?';

let meta_description = 'Une vidéo explicatique montrant comment créer des flashcards avec du texte, avec de la synthèse vocale et avec une image';
meta_description += ', et comment les réviser sur NotyLoops.';

const breadcrumb_items = [
  {
    label: 'Ressources',
    to: '/ressources',
    url: 'https://fr.notyloops.com/ressources',
  },
  {
    label: page_title,
  },
];

useSchema({
  name: page_title,
  description: meta_description,
  breadcrumb_items,
});

useSeoMeta({
  title: `${page_title} | ${WEBSITE_NAME}`,
  description: meta_description,
});

// useGoogleTag();
</script>

<template>
  <!-- app/pages/ressources/flashcards-creation-revision.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Comment créer et revoir des flashcards sur NotyLoops ?
    </h1>

    <hr class="separator-2">

    <iframe
      class="responsive-video"
      src="https://www.youtube-nocookie.com/embed/Tc8m9kj2YWE?rel=0&showinfo=0"
      title="Créer et revoir des flashcards sur NotyLoops"
      frameborder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
      loading="lazy"
    />
  </UContainer>
</template>

<style scoped>
.responsive-video {
  aspect-ratio: 16 / 9;
  margin-top: 1rem;
  width: 100%;
}
</style>
