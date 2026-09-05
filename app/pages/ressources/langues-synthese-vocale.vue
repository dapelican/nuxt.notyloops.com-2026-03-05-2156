<script setup>
const page_title = 'Les langues pour la synthèse vocale';

const meta_description = 'Les langues disponibles pour la synthèse vocale sur NotyLoops.';

const breadcrumb_items = [
  {
    label: 'Ressources',
    to: '/ressources',
    url: 'https://fr.notyloops.com/ressources',
  },
  {
    label: 'Les langues pour la synthèse vocale',
  },
];

const { locale } = useI18n();

const language_list = GOOGLE_TEXT_TO_SPEECH_LANGUAGE_LIST
  .map((language) => ({
    id: language.code,
    label: language.name[locale.value],
  }))
  .toSorted((a, b) => a.label.localeCompare(b.label));

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
  <!-- app/pages/ressources/langues-synthese-vocale.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Les langues disponibles sur NotyLoops pour la synthèse vocale
    </h1>

    <p class="mb-4 mt-4">
      Sur NotyLoops, vous pouvez généner de l'audio à partir de n'importe quel texte
      (synthèse vocale) dans l'une des langues suivantes :
    </p>

    <ul class="list-disc list-inside">
      <li
        v-for="language in language_list"
        :key="language?.id"
      >
        {{ language?.label }}
      </li>
    </ul>
  </UContainer>
</template>
