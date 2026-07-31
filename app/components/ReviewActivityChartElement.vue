<script setup>
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

const max_review_count = computed(() => {
  const count_list = props.activity_series.map((item) => item.review_count);

  return Math.max(0, ...count_list);
});

const getBarHeightPercent = (review_count) => {
  if (!max_review_count.value || !review_count) {
    return 0;
  }

  return Math.max(4, Math.round((review_count / max_review_count.value) * 100));
};

const getPositiveHeightPercent = (item) => {
  if (!item.review_count) {
    return 0;
  }

  return Math.round((item.positive_count / item.review_count) * 100);
};

const shouldShowLabel = (index) => {
  if (props.activity_series.length <= 7) {
    return true;
  }

  return index % 5 === 0 || index === props.activity_series.length - 1;
};

const formatBucketLabel = (bucket_start) => {
  if (!bucket_start) {
    return '';
  }

  return String(bucket_start).slice(5);
};

const getTooltipText = (item) => {
  const negative_count = item.review_count - item.positive_count;

  return `${item.bucket_start}: ${item.review_count} (+${item.positive_count} / -${negative_count})`;
};
</script>

<template>
  <!-- ReviewActivityChartElement.vue -->
  <UCard class="ring-accented">
    <h2 class="mb-4 text-base font-semibold sm:text-lg">
      {{ $t('t_activity') }}
    </h2>

    <div class="flex h-32 items-end gap-px sm:h-44 sm:gap-1">
      <UTooltip
        v-for="item in activity_series"
        :key="item.bucket_start"
        :text="getTooltipText(item)"
      >
        <div class="flex h-full min-w-0 flex-1 flex-col justify-end">
          <div
            class="flex w-full flex-col justify-end overflow-hidden rounded-t bg-elevated"
            :style="{ height: `${getBarHeightPercent(item.review_count)}%` }"
          >
            <div
              class="w-full bg-error"
              :style="{ height: `${100 - getPositiveHeightPercent(item)}%` }"
            />
            <div
              class="w-full bg-success"
              :style="{ height: `${getPositiveHeightPercent(item)}%` }"
            />
          </div>
        </div>
      </UTooltip>
    </div>

    <div class="mt-2 hidden gap-px sm:flex sm:gap-1">
      <div
        v-for="(item, index) in activity_series"
        :key="`label-${item.bucket_start}`"
        class="min-w-0 flex-1 text-center text-xs text-muted"
      >
        <span v-if="shouldShowLabel(index)">
          {{ formatBucketLabel(item.bucket_start) }}
        </span>
      </div>
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
