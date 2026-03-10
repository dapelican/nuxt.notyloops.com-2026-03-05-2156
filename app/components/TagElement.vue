<script setup>
defineProps({
  color: {
    type: String,
    default: 'neutral',
  },
  label: {
    type: String,
    required: true,
  },
});

defineEmits(['remove_tag']);
</script>

<template>
  <UBadge :color>
    {{ label }}
    <template #trailing>
      <UButton
        color="neutral"
        variant="ghost"
        size="xs"
        icon="i-lucide-x"
        :aria-label="$t('t_remove_tag')"
        @click.stop="$emit('remove_tag')"
      />
    </template>
  </UBadge>
</template>
