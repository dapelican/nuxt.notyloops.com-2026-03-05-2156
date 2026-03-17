<script setup>
const props = defineProps({
  item_type: {
    type: String,
    required: true,
  },
});

const {
  current_page_item_list,
  selected_item_id_set,
} = useSearchAndSelectItems(props.item_type);

const route = useRoute();

const page_number = computed(() => route.params.page_number);

const emit = defineEmits(['toggle_item_selection']);

const isItemSelected = (item_id) => selected_item_id_set.value.has(item_id);

const show_details = ref(false);
</script>

<template>
  <!-- ItemListForMobileElement.vue -->
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
    >
      <template #header>
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
      </template>

      <section
        v-if="item.tag_list && item.tag_list.length > 0"
        class="item-card-tags"
      >
        <span
          v-for="tag in item.tag_list"
          :key="tag.id"
          class="tag-badge"
        >
          {{ tag.label }}
        </span>
      </section>

      <section class="item-card-actions">
        <div
          class="chevron-zone"
          @click="show_details = !show_details"
        >
          <span>
            {{ $t('t-details') }}
          </span>

          <UIcon
            :name="show_details ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
            class="icon-right"
          />
        </div>

        <NuxtLink
          class="primary-link"
          :to="`/manage-${props.item_type}s/edit/${item.id}?page_number=${page_number}`"
        >
          {{ $t('t_edit') }}
        </NuxtLink>
      </section>

      <section v-if="show_details">
        <ul>
          <li v-if="props.item_type === ITEM_TYPE_TAG">
            {{ $t('t_attached_note_count_with_colon') }} {{ item.attached_note_count }}
          </li>
          <li>
            {{ $t('t_created_at_with_colon') }} {{ formatDate(item.created_at) }}
          </li>
          <li>
            {{ $t('t_updated_at_with_colon') }} {{ formatDate(item.updated_at) }}
          </li>
        </ul>
      </section>
    </UCard>
  </section>
</template>

<style scoped>
.chevron-zone {
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
}

.item-card-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.item-card-actions {
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
}

.card-selected {
  background: var(--color-alert-info-bg);
  border-color: var(--color-alert-info-border);
}

.item-card-header {
  align-items: center;
  display: flex;
  gap: 0.5rem;
}

.item-card-header input {
  cursor: pointer;
  flex-shrink: 0;
  height: 16px;
  width: 16px;
}

.item-card-title {
  font-size: 1rem;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.item-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-top: 0.4rem;
  padding-left: 1.6rem;
}

.tag-badge {
  background: var(--color-pagination-hover);
  border-radius: 10px;
  display: inline-block;
  font-size: 0.75rem;
  padding: 2px 8px;
  white-space: nowrap;
}
</style>
