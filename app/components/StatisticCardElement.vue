<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: [String, Number],
    required: true,
  },
  delta: {
    type: Number,
    default: null,
  },
  icon: {
    type: String,
    default: '',
  },
  icon_class: {
    type: String,
    default: 'text-muted',
  },
  hint: {
    type: String,
    default: '',
  },
});

const delta_label = computed(() => {
  if (props.delta === null || props.delta === undefined) {
    return '';
  }

  if (props.delta > 0) {
    return `+${props.delta}`;
  }

  return String(props.delta);
});

const delta_class = computed(() => {
  if (props.delta === null || props.delta === undefined || props.delta === 0) {
    return 'text-muted';
  }

  return props.delta > 0 ? 'text-success' : 'text-error';
});
</script>

<template>
  <!-- StatisticCardElement.vue -->
  <UCard class="ring-accented">
    <div class="flex items-start justify-between gap-2">
      <p class="text-sm text-muted">
        {{ label }}
      </p>

      <UIcon
        v-if="icon"
        :name="icon"
        class="size-5 shrink-0"
        :class="icon_class"
      />
    </div>

    <p class="mt-2 text-2xl font-bold sm:text-3xl">
      {{ value }}
    </p>

    <p
      v-if="delta !== null && delta !== undefined"
      class="mt-1 text-sm"
      :class="delta_class"
    >
      {{ delta_label }}
      <span class="text-muted">
        {{ $t('t_versus_previous_period') }}
      </span>
    </p>

    <p
      v-else-if="hint"
      class="mt-1 text-sm text-muted"
    >
      {{ hint }}
    </p>
  </UCard>
</template>
