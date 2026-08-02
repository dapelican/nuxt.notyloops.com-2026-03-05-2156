<script setup>
import { DateTime } from 'luxon';

const props = defineProps({
  activity_series: {
    type: Array,
    required: true,
  },
  granularity: {
    type: String,
    default: 'day',
  },
});

const { locale, t } = useI18n();

const max_review_count = computed(() => {
  const count_list = props.activity_series.map((item) => item.review_count);

  return Math.max(0, ...count_list);
});

const getBarWidthPercent = (review_count) => {
  if (!max_review_count.value || !review_count) {
    return 0;
  }

  return Math.max(4, Math.round((review_count / max_review_count.value) * 100));
};

const getPositiveWidthPercent = (item) => {
  if (!item.review_count) {
    return 0;
  }

  return Math.round((item.positive_count / item.review_count) * 100);
};

const formatBucketDate = (bucket_start) => {
  if (!bucket_start) {
    return '';
  }

  const dt = DateTime.fromISO(String(bucket_start)).setLocale(locale.value || 'en');

  if (!dt.isValid) {
    return String(bucket_start);
  }

  return dt.toLocaleString(DateTime.DATE_FULL);
};

const formatBucketLabel = (bucket_start) => {
  const formatted_date = formatBucketDate(bucket_start);

  if (!formatted_date) {
    return '';
  }

  if (props.granularity === 'week') {
    return t('t_week_of_x_date', { date: formatted_date });
  }

  return formatted_date;
};

const getTooltipText = (item) => {
  const negative_count = item.review_count - item.positive_count;

  return `${formatBucketLabel(item.bucket_start)}: ${item.review_count} (+${item.positive_count} / -${negative_count})`;
};
</script>

<template>
  <!-- ReviewActivityChartElement.vue -->
  <UCard class="ring-accented">
    <h2 class="mb-4 text-base font-semibold sm:text-lg">
      {{ $t('t_activity') }}
    </h2>

    <div class="flex flex-col gap-2">
      <UTooltip
        v-for="item in activity_series"
        :key="item.bucket_start"
        :text="getTooltipText(item)"
      >
        <div class="flex min-w-0 items-center gap-2">
          <span
            class="shrink-0 truncate text-xs text-muted"
            :class="granularity === 'week' ? 'w-52' : 'w-36'"
          >
            {{ formatBucketLabel(item.bucket_start) }}
          </span>

          <div class="h-4 min-w-0 flex-1 overflow-hidden rounded-r bg-elevated">
            <div
              class="flex h-full overflow-hidden rounded-r"
              :style="{ width: `${getBarWidthPercent(item.review_count)}%` }"
            >
              <div
                class="h-full bg-success"
                :style="{ width: `${getPositiveWidthPercent(item)}%` }"
              />
              <div
                class="h-full bg-error"
                :style="{ width: `${100 - getPositiveWidthPercent(item)}%` }"
              />
            </div>
          </div>
        </div>
      </UTooltip>
    </div>

    <div class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted">
      <div class="flex items-center gap-2">
        <span class="size-2.5 shrink-0 rounded-sm bg-success" />
        <span>{{ $t('t_mastered_notes') }}</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="size-2.5 shrink-0 rounded-sm bg-error" />
        <span>{{ $t('t_notes_to_master') }}</span>
      </div>
    </div>
  </UCard>
</template>
