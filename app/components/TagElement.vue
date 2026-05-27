<script setup>
defineProps({
  color: {
    type: String,
    default: 'secondary',
  },
  label: {
    type: String,
    required: true,
  },
  removable: {
    type: Boolean,
    default: false,
  },
  selectable: {
    type: Boolean,
    default: false,
  },
});

defineEmits(['remove_tag']);
</script>

<template>
  <UBadge :color>
    <template #leading>
      <UIcon
        color="white"
        name="i-lucide-tag"
        variant="solid"
      />
    </template>

    <span>
      {{ label }}
    </span>

    <template
      v-if="removable || selectable"
      #trailing
    >
      <UIcon
        v-if="removable"
        class="cursor-pointer"
        color="neutral"
        name="i-lucide-x"
        @click.stop="$emit('remove_tag')"
      />

      <UIcon
        v-if="selectable"
        class="cursor-pointer"
        color="neutral"
        name="i-lucide-mouse-pointer"
      />
    </template>
  </UBadge>
</template>
