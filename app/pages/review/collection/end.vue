<script setup>
definePageMeta({ middleware: 'auth' });

const { t } = useI18n();

useSeoMeta({
  title: `${t('t_collection_end')} | OptiLeague`,
});

const reviewed_card_count = computed(() => {
  const raw = localStorage.getItem(LOCAL_STORAGE_KEY_REVIEW_COLLECTION_NOTE_ID_LIST);
  const parsed = JSON.parse(raw);
  return parsed.length;
});

const score = computed(() =>
  Number(localStorage.getItem(LOCAL_STORAGE_KEY_REVIEW_COLLECTION_SCORE)));

const percentage = computed(() =>
  Math.round((score.value / reviewed_card_count.value) * 100));
</script>

<template>
  <UContainer class="centered-max-width-650">
    <h1>
      {{ $t('t_collection_end') }}
    </h1>

    <p>
      {{ $t('t_you_have_reviewed_of_cards_of_the_collection') }}
    </p>

    <p>
      {{ $t('t_number_of_cards_reviewed_with_colon') }} {{ reviewed_card_count }}
    </p>

    <p>
      {{ $t('t_score_of_mastered_notes_with_colon') }} {{ percentage }}
    </p>

    <hr class="separator-1">

    <nav class="flex justify-center">
      <UButton
        class="cursor-pointer hover:text-inverted!"
        :to="'/manage-collections/page/1'"
      >
        {{ $t('t_go_back_to_collections') }}
      </UButton>
    </nav>
  </UContainer>
</template>
