<script setup>
defineProps({
  alt_text: {
    type: String,
    default: '',
  },
  clickable: {
    type: Boolean,
    default: false,
  },
  image_url: {
    type: String,
    required: true,
    validator: (value) => value.trim().length > 0,
  },
});
</script>

<template>
  <section class="my-2">
    <figure
      v-if="image_url"
      class="responsive-image-container"
    >
      <NuxtLink
        v-if="clickable"
        :to="image_url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          :src="image_url"
          :alt="alt_text"
          class="responsive-image"
        >
      </NuxtLink>

      <img
        v-else
        :src="image_url"
        :alt="alt_text"
        class="responsive-image"
      >
    </figure>
  </section>
</template>

<style scoped>
.responsive-image-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
}

.responsive-image {
  max-width: 100%;
  width: auto;
  height: auto;
  max-width: min(100%, 650px);
}
</style>
