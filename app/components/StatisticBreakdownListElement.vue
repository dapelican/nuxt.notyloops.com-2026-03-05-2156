<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  item_list: {
    type: Array,
    required: true,
  },
  empty_label: {
    type: String,
    default: '',
  },
  get_item_to: {
    type: Function,
    default: null,
  },
});

const getItemLabel = (item) => item.label || '';

const formatSuccessRate = (success_rate) => {
  if (success_rate === null || success_rate === undefined) {
    return '-';
  }

  return `${success_rate} %`;
};
</script>

<template>
  <!-- StatisticBreakdownListElement.vue -->
  <UCard class="ring-accented">
    <h2 class="mb-4 text-base font-semibold sm:text-lg">
      {{ title }}
    </h2>

    <p
      v-if="item_list.length === 0"
      class="text-sm text-muted"
    >
      {{ empty_label || $t('t_no_result_matching_your_search') }}
    </p>

    <ul
      v-else
      class="space-y-3"
    >
      <li
        v-for="(item, index) in item_list"
        :key="item.id || index"
        class="flex flex-wrap items-center justify-between gap-2"
      >
        <div class="min-w-0 flex-1">
          <NuxtLink
            v-if="get_item_to"
            class="truncate font-medium hover:underline"
            :to="get_item_to(item)"
          >
            {{ getItemLabel(item) }}
          </NuxtLink>

          <p
            v-else
            class="truncate font-medium"
          >
            {{ getItemLabel(item) }}
          </p>

          <p class="text-sm text-muted">
            {{ item.review_count }}
          </p>
        </div>

        <div class="flex w-full items-center gap-2 sm:w-40">
          <UProgress
            :model-value="item.success_rate ?? 0"
            class="flex-1"
            color="primary"
            size="sm"
          />

          <span class="w-12 shrink-0 text-right text-sm">
            {{ formatSuccessRate(item.success_rate) }}
          </span>
        </div>
      </li>
    </ul>
  </UCard>
</template>
