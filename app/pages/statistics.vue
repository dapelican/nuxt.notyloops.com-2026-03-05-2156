<script setup>
import { DateTime } from 'luxon';

definePageMeta({ middleware: 'auth' });

const { t } = useI18n();

useSeoMeta({
  title: `${t('t_statistics')} | NotyLoops`,
});

const period_in_days = ref(7);
const time_zone = ref('UTC');

onMounted(() => {
  time_zone.value = DateTime.local().zoneName || 'UTC';
});

const period_item_list = computed(() => [
  {
    label: t('t_last_7_days'),
    value: 7,
  },
  {
    label: t('t_last_30_days'),
    value: 30,
  },
  {
    label: t('t_last_90_days'),
    value: 90,
  },
]);

const {
  data: statistics_data,
  error: statistics_error,
  pending: statistics_pending,
} = await useFetch('/statistics/get-user-statistics', {
  query: {
    period_in_days,
    time_zone,
  },
  server: false,
  watch: [period_in_days, time_zone],
});

watch(statistics_error, (error) => {
  if (error) {
    handleFrontendError(error, error.data?.error_message);
  }
});

const has_statistics = computed(() => {
  return (statistics_data.value?.all_time?.review_count ?? 0) > 0;
});

const formatSuccessRateValue = (success_rate) => {
  if (success_rate === null || success_rate === undefined) {
    return '-';
  }

  return t('t_x_percentage', { percentage: success_rate });
};

const formatSuccessRateDeltaValue = (delta) => {
  if (delta === null || delta === undefined) {
    return '-';
  }

  if (delta > 0) {
    return `+${t('t_x_percentage', { percentage: delta })}`;
  }

  return t('t_x_percentage', { percentage: delta });
};

const success_rate_delta = computed(() => {
  const current_rate = statistics_data.value?.current_period?.success_rate;
  const previous_rate = statistics_data.value?.previous_period?.success_rate;

  if (current_rate === null || current_rate === undefined) {
    return null;
  }

  if (previous_rate === null || previous_rate === undefined) {
    return null;
  }

  return current_rate - previous_rate;
});

const reviews_per_active_day = computed(() => {
  const current_period = statistics_data.value?.current_period;

  if (!current_period?.active_day_count) {
    return null;
  }

  const average = current_period.review_count / current_period.active_day_count;

  return Math.round(average * 10) / 10;
});

const metric_row_list = computed(() => {
  const current_period = statistics_data.value?.current_period;
  const streak = statistics_data.value?.streak;

  return [
    {
      id: 'mastery_rate',
      label: t('t_mastery_rate'),
      value: formatSuccessRateValue(current_period?.success_rate),
    },
    {
      id: 'mastery_rate_evolution',
      label: t('t_mastery_rate_evolution'),
      value: formatSuccessRateDeltaValue(success_rate_delta.value),
    },
    {
      id: 'current_streak',
      label: t('t_consecutive_review_days_until_today'),
      value: streak?.current_day_count ?? 0,
    },
    {
      id: 'longest_streak',
      label: t('t_longest_consecutive_review_days'),
      value: streak?.longest_day_count ?? 0,
    },
    {
      id: 'review_count',
      label: t('t_scored_reviews'),
      value: current_period?.review_count ?? 0,
    },
    {
      id: 'reviews_per_active_day',
      label: t('t_average_reviews_per_active_day'),
      value: reviews_per_active_day.value ?? '-',
    },
    {
      id: 'distinct_note_count',
      label: t('t_distinct_notes_reviewed'),
      value: current_period?.distinct_note_count ?? 0,
    },
    {
      id: 'active_day_count',
      label: t('t_active_days'),
      value: current_period?.active_day_count ?? 0,
    },
  ];
});

const getStrategyLabel = (review_strategy) => {
  const key = `t_${review_strategy}`;
  const translated = t(key);

  if (translated === key) {
    return review_strategy;
  }

  return translated;
};

const collection_item_list = computed(() => {
  const breakdown = statistics_data.value?.collection_breakdown ?? [];

  return breakdown.map((item) => ({
    id: item.collection_id ?? 'spaced_repetition',
    label: item.collection_id
      ? (item.title || t('t_note_without_title'))
      : t('t_spaced_repetition'),
    review_count: item.review_count,
    success_rate: item.success_rate,
  }));
});

const strategy_item_list = computed(() => {
  const breakdown = statistics_data.value?.strategy_breakdown ?? [];

  return breakdown.map((item) => ({
    id: item.review_strategy,
    label: getStrategyLabel(item.review_strategy),
    review_count: item.review_count,
    success_rate: item.success_rate,
  }));
});

const note_item_list = computed(() => {
  const list = statistics_data.value?.note_to_work_on_list ?? [];

  return list.map((item) => ({
    id: item.note_id,
    label: item.title || t('t_note_without_title'),
    review_count: item.review_count,
    success_rate: item.success_rate,
  }));
});

const empty_state_action_list = computed(() => [
  {
    label: t('t_go_back_to_collections'),
    to: '/manage-collections/page/1',
  },
]);

const all_time_summary = computed(() => {
  const all_time = statistics_data.value?.all_time;

  if (!all_time?.first_review_date) {
    return '';
  }

  return t('t_since_x_date', {
    date: formatDate(all_time.first_review_date),
    review_count: all_time.review_count,
    distinct_note_count: all_time.distinct_note_count,
  });
});
</script>

<template>
  <!-- app/pages/statistics.vue -->
  <UContainer class="centered-max-width-900">
    <header class="mb-4 flex flex-wrap items-center justify-between gap-2">
      <h1 class="mb-0">
        {{ $t('t_statistics') }}
      </h1>

      <USelect
        v-model="period_in_days"
        :items="period_item_list"
        class="w-44"
        value-key="value"
      />
    </header>

    <LoadingElement v-if="statistics_pending && !statistics_data" />

    <UEmpty
      v-else-if="!statistics_pending && !has_statistics"
      :actions="empty_state_action_list"
      icon="i-lucide-chart-column"
      :title="$t('t_no_statistics_yet')"
    />

    <template v-else-if="statistics_data">
      <section class="grid gap-4 lg:grid-cols-2">
        <StatisticCardElement
          v-for="row in metric_row_list"
          :key="row.id"
          :label="row.label"
          :value="row.value"
        />
      </section>

      <hr class="separator-2">

      <ReviewActivityChartElement
        :activity_series="statistics_data.activity_series"
        :granularity="statistics_data.granularity"
      />

      <hr class="separator-2">

      <section class="grid gap-4 lg:grid-cols-2">
        <StatisticBreakdownListElement
          :item_list="collection_item_list"
          :title="$t('t_by_collection')"
        />

        <StatisticBreakdownListElement
          :item_list="strategy_item_list"
          :title="$t('t_by_review_strategy')"
        />
      </section>

      <hr class="separator-2">

      <StatisticBreakdownListElement
        :empty_label="$t('t_notes_least_mastered_empty')"
        :item_list="note_item_list"
        :title="$t('t_notes_least_mastered')"
      />

      <p
        v-if="all_time_summary"
        class="mt-6 text-center text-sm text-muted"
      >
        {{ all_time_summary }}
      </p>
    </template>
  </UContainer>
</template>
