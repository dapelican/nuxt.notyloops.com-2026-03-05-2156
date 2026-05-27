<script setup>
definePageMeta({ middleware: 'auth' });

const { t } = useI18n();

useSeoMeta({
  title: `${t('t_end_of_review_session')} | NotyLoops`,
});

const total_card_count = computed(() => {
  const raw = localStorage.getItem(LOCAL_STORAGE_KEY_DIARY_NOTE_ID_LIST);
  const parsed = JSON.parse(raw);
  return parsed.length;
});

const reviewed_card_count = computed(() => {
  const raw = localStorage.getItem(LOCAL_STORAGE_KEY_DIARY_CURRENT_INDEX);
  const parsed = Number.parseInt(raw ?? '0', 10);
  return Number.isNaN(parsed) ? 0 : parsed;
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

    <hr class="separator-1">

    <nav class="flex justify-center">
      <UButton
        :to="'/manage-collections/page/1'"
      >
        {{ $t('t_go_back_to_collections') }}
      </UButton>
    </nav>
  </UContainer>
</template>
