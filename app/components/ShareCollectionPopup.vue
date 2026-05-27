<script setup>
const props = defineProps({
  collection_id: {
    type: String,
    required: true,
  },
  collection_title: {
    type: String,
    required: true,
  },
  collection_type: {
    type: String,
    required: true,
  },
});

const show_popup = ref(false);
</script>

<template>
  <!-- ShareCollectionPopup.vue -->
  <UModal
    v-model:open="show_popup"
    :close="{ class: 'cursor-pointer' }"
    :title="$t('t_share_the_collection')"
  >
    <section>
      <span class="cursor-pointer text-secondary">{{ $t('t_share') }}</span>
    </section>

    <template #body>
      <section v-if="props.collection_type === 'public_free'">
        <p>
          {{ $t('t_you_can_share_your_collection_with_this_link') }}
        </p>

        <NuxtLink
          :to="`/review/${collection_id}`"
          class="cursor-pointer text-primary"
        >
          {{ `/review/${collection_id}` }}
        </NuxtLink>
      </section>

      <section v-if="props.collection_type === 'shared'">
        <p>
          {{ $t('t_you_can_share_your_collection_with_this_link') }}
        </p>

        <NuxtLink
          :to="`/review/${collection_id}`"
          class="cursor-pointer text-primary"
        >
          {{ `/review/${collection_id}` }}
        </NuxtLink>
      </section>
    </template>

    <template
      #footer="{ close }"
    >
      <div class="popup-actions">
        <UButton
          :label="$t('t_cancel')"
          variant="outline"
          @click="close"
        />

        <UButton
          color="error"
          :disabled="is_deleting"
          icon="i-lucide-trash-2"
          :label="$t('t_delete')"
          :loading="is_deleting"
          variant="solid"
          @click="deleteNote"
        />
      </div>
    </template>
  </UModal>
</template>

<style scoped>
.popup-actions {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>
