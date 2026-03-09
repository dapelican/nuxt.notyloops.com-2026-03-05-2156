<script setup>
const model = defineModel({
  required: true,
  type: String,
});

defineProps({
  label: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const show_password = ref(false);
</script>

<template>
  <UFormField
    :label="label"
    :name="name"
  >
    <UInput
      v-model="model"
      :disabled="disabled"
      :type="show_password ? 'text' : 'password'"
      class="w-full"
    >
      <template #trailing>
        <UButton
          type="button"
          color="neutral"
          size="sm"
          variant="link"
          :icon="show_password ? 'i-lucide-eye-off' : 'i-lucide-eye'"
          @click="show_password = !show_password"
        />
      </template>
    </UInput>
  </UFormField>
</template>
