<script setup>
const { t } = useI18n();

useSeoMeta({
  title: `${t('t_public_notes')} | NotyLoops`,
});

const {
  data: public_collection_list_payload,
  error: public_collection_list_error,
} = await useFetch('/public-collection/all');

if (public_collection_list_error.value) {
  const error_message = public_collection_list_error.value.data?.error_message;

  handleFrontendError(null, error_message);
}

const collection_list = computed(
  () => public_collection_list_payload.value?.collection_list ?? []
);
</script>

<template>
  <!-- app/pages/pc/index.vue -->
  <UContainer class="centered-max-width-650">
    <h1>{{ $t('t_public_notes') }}</h1>

    <ul class="mt-6 flex list-none flex-col gap-3 p-0">
      <li
        v-for="collection in collection_list"
        :key="collection.id"
      >
        <NuxtLink
          class="text-primary font-medium hover:underline"
          :to="`/pc/${collection.id}`"
        >
          {{ collection.title }}
        </NuxtLink>

        <span v-if="collection.type === 'public_paywalled'">
          ({{ collection.price_without_tax }} €)
        </span>
      </li>
    </ul>
  </UContainer>
</template>
