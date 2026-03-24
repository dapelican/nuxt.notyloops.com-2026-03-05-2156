<script setup>
definePageMeta({ middleware: 'auth' });

const { t } = useI18n();

useSeoMeta({
  title: `${t('t_end_of_review_session')} | NotyLoops`,
});

const total_card_count = computed(() => {
  const raw = localStorage.getItem(LOCAL_STORAGE_KEY_SPACED_REPETITION_NOTE_ID_LIST);
  const parsed = JSON.parse(raw);
  return parsed.length;
});

const reviewed_card_count = computed(() => {
  const raw = localStorage.getItem(LOCAL_STORAGE_KEY_SPACED_REPETITION_CURRENT_INDEX);
  const parsed = Number.parseInt(raw ?? '0', 10);
  return Number.isNaN(parsed) ? 0 : parsed;
});

const score = computed(() =>
  Number(localStorage.getItem(LOCAL_STORAGE_KEY_SPACED_REPETITION_SCORE)));

const percentage = computed(() => {
  if (score.value) {
    return Math.round((score.value / reviewed_card_count.value) * 100);
  }

  return 0;
});
</script>

<template>
  <UContainer class="centered-max-width-650">
    <h1>
      {{ $t('t_end_of_review_session') }}
    </h1>

    <p>
      {{ $t('t_number_of_notes_reviewed_with_colon') }} {{ reviewed_card_count }}
      / {{ total_card_count }}
    </p>

    <ClientOnly>
      <p v-if="track_scores_enabled">
        {{ $t('t_percentage_of_mastered_notes_with_colon') }}
        {{ $t('t_x_percentage', { percentage }) }}
        ({{ score }} / {{ reviewed_card_count }})
      </p>
    </ClientOnly>

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
