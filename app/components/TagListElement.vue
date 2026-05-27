<script setup>
const {
  current_page_item_list,
  selected_item_id_set,
} = useSearchAndSelectItemsOrInject(ITEM_TYPE_TAG);

const route = useRoute();

const page_number = computed(() => route.params.page_number);

const emit = defineEmits(['toggle_item_selection']);

const isItemSelected = (item_id) => selected_item_id_set.value.has(item_id);
</script>

<template>
  <!-- TagListElement.vue -->
  <section v-if="current_page_item_list.length === 0">
    {{ $t('t_no_result_matching_your_search') }}
  </section>

  <section
    v-else
    class="item-card-list"
  >
    <UCard
      v-for="item in current_page_item_list"
      :key="item.id"
      class="ring-accented divide-accented"
    >
      <template #header>
        <section class="header">
          <UCheckbox
            class="cursor-pointer"
            :label="item.label"
            :model-value="isItemSelected(item.id)"
            :ui="{
              root: 'cursor-pointer',
              container: 'cursor-pointer',
              base: 'cursor-pointer',
              label: 'cursor-pointer',
            }"
            @update:model-value="emit('toggle_item_selection', item.id)"
          />

          <span>
            {{ item.title }}
          </span>
        </section>
      </template>

      <main class="main">
        <section class="actions">
          <UButton
            class="text-secondary"
            color="secondary"
            :to="`/manage-${ITEM_TYPE_TAG}s/edit/${item.id}?page_number=${page_number}`"
            variant="outline"
          >
            {{ $t('t_edit') }}
          </UButton>

          <DeleteTagPopup
            :tag_id="item.id"
            :tag_label="item.label"
          />
        </section>

        <section>
          {{ $t('t_attached_note_count_with_colon') }} {{ item.attached_note_count }}
        </section>
      </main>
    </UCard>
  </section>
</template>

<style scoped>
.actions {
  align-items: center;
  display: flex;
  gap: 2rem;
}

.chevron-zone {
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 1rem;
}

.item-card-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.header {
  align-items: center;
  display: flex;
  gap: 0.5rem;
}

.main {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}
</style>
