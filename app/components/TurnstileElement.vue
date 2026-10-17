<script setup>
const turnstile_token = defineModel({
  default: '',
  type: String,
});

const turnstile_widget = ref(null);

const reset = () => {
  turnstile_token.value = '';
  turnstile_widget.value?.reset();
};

defineExpose({
  reset,
});
</script>

<template>
  <NuxtTurnstile
    ref="turnstile_widget"
    v-model="turnstile_token"
  />
</template>
