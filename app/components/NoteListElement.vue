<script setup>
const props = defineProps({
  collection_type: {
    type: String,
    default: COLLECTION_TYPE_PRIVATE,
  },
  collection_id: {
    type: String,
    default: '',
  },
  preview_note_id_list: {
    type: Array,
    default: undefined,
  },
});

const {
  current_page_item_list,
  page_number,
  search_criteria_tag_id_set,
  searchItems,
  selected_item_id_set,
} = useSearchAndSelectItemsOrInject(ITEM_TYPE_NOTE);

const addTagToFilter = (tag_id) => {
  if (search_criteria_tag_id_set.value.has(tag_id)) {
    return;
  }

  search_criteria_tag_id_set.value = new Set([
    ...search_criteria_tag_id_set.value,
    tag_id,
  ]);

  if (page_number.value !== 1) {
    navigateTo('/manage-notes/page/1');
  } else {
    searchItems();
  }
};

const emit = defineEmits(['toggle_item_selection']);

const isItemSelected = (item_id) => selected_item_id_set.value.has(item_id);

const statistics_open_by_note_id = ref({});

const set_statistics_open = (note_id, is_open) => {
  statistics_open_by_note_id.value = {
    ...statistics_open_by_note_id.value,
    [note_id]: is_open,
  };
};

const calculateScore = (score, review_count) => {
  const count = Number(review_count);

  if (count === 0) {
    return 0;
  }

  return Math.round((Number(score) / count) * 100);
};
</script>

<template>
  <!-- NoteListElement.vue -->
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
          <NuxtLink
            class="text-primary"
            :to="`/manage-${ITEM_TYPE_NOTE}s/edit/${item.id}?page_number=${page_number}`"
          >
            {{ $t('t_edit') }}
          </NuxtLink>

          <DeleteNotePopup
            :note_id="item.id"
            :note_title="item.title"
          />
        </section>

        <section
          v-if="item.tag_list.length > 0"
          class="tags"
        >
          <span
            v-for="tag in item.tag_list"
            :key="tag.id"
            class="tag-filter-trigger"
            @click="addTagToFilter(tag.id)"
          >
            <TagElement
              :label="tag.label"
            />
          </span>
        </section>

        <UCollapsible
          :open="!!statistics_open_by_note_id[item.id]"
          @update:open="(is_open) => set_statistics_open(item.id, is_open)"
        >
          <div class="chevron-zone">
            <span>
              {{ $t('t_statistics') }}
            </span>

            <UIcon
              :name="statistics_open_by_note_id[item.id] ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
              class="icon-right"
            />
          </div>

          <template #content>
            <ul>
              <li>
                {{ $t('t_created_at_with_colon') }} {{ formatDate(item.created_at) }}
              </li>
              <li>
                {{ $t('t_updated_at_with_colon') }} {{ formatDate(item.updated_at) }}
              </li>
              <li>
                <span>
                  {{ $t('t_first_revision_at_with_colon') }}
                </span>
                <span v-if="item.first_review_date">
                  {{ formatDate(item.first_review_date) }}
                </span>
                <span v-else>
                  -
                </span>
              </li>
              <li>
                <span>
                  {{ $t('t_last_revision_at_with_colon') }}
                </span>
                <span v-if="item.last_review_date">
                  {{ formatDate(item.last_review_date) }}
                </span>
                <span v-else>
                  -
                </span>
              </li>
              <li>
                {{ $t('t_revisions_count_with_colon') }} {{ item.review_count }}
              </li>
              <li>
                <span>
                  {{ $t('t_score_with_colon') }}
                </span>
                <span v-if="item.review_count">
                  {{ $t('t_x_percentage', { percentage: calculateScore(item.score, item.review_count) }) }}
                </span>
                <span v-else>
                  -
                </span>
              </li>
            </ul>
          </template>
        </UCollapsible>

        <NoteCollapsibleContentElement
          :collection_id="props.collection_id"
          :collection_type="props.collection_type"
          :note_id="item.id"
          :preview_note_id_list="props.preview_note_id_list"
          :show_lock="false"
          :title="item.title"
        />
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
  justify-content: space-between;
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
  gap: 0.5rem;
}

.tag-filter-trigger {
  cursor: pointer;
  display: inline-flex;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}
</style>
