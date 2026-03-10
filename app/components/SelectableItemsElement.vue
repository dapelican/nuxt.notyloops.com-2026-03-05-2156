<script setup>
const props = defineProps({
  item_type: {
    type: String,
    required: true,
  },
  show_master_checkbox: {
    type: Boolean,
    required: true,
  },
});

const {
  current_page_item_list,
  handling_request,
  items_per_page,
  page_number,
  searched_item_id_set,
  selected_item_id_set,
  search_criteria_term,
} = useSearchAndSelectItems(props.item_type);

const searched_item_count = computed(() => {
  return searched_item_id_set.value.size;
});

const total_pages = computed(() => {
  return Math.max(1, Math.ceil(searched_item_id_set.value.size / items_per_page.value));
});

const all_pages_selected = computed(() => {
  return selected_item_id_set.value.size === searched_item_id_set.value.size;
});

const current_page_item_id_list = computed(() => {
  return current_page_item_list.value.map((item) => item.id);
});

const current_page_all_selected = computed(() => {
  if (current_page_item_list.value.length === 0) {
    return false;
  }

  return current_page_item_id_list.value.every((id) => {
    return selected_item_id_set.value.has(id);
  });
});

const current_page_some_selected = computed(() => {
  return current_page_item_id_list.value.some((id) => {
    return selected_item_id_set.value.has(id);
  });
});

const selected_count = computed(() => selected_item_id_set.value.size);

const has_selection = computed(() => selected_item_id_set.value.size > 0);

const master_checked = computed(() => {
  return all_pages_selected.value || current_page_all_selected.value || has_selection.value;
});

const master_indeterminate = computed(() => {
  if (all_pages_selected.value || current_page_all_selected.value) {
    return false;
  }
  return current_page_some_selected.value;
});

const toggleMasterCheckbox = () => {
  if (all_pages_selected.value) {
    selected_item_id_set.value = new Set();
  } else if (current_page_all_selected.value) {
    selected_item_id_set.value = new Set(searched_item_id_set.value);
  } else {
    const new_set = new Set(selected_item_id_set.value);
    current_page_item_id_list.value.forEach((id) => new_set.add(id));
    selected_item_id_set.value = new_set;
  }
};

const handleCheckboxClick = (item_id) => {
  if (all_pages_selected.value) {
    const new_set = new Set(searched_item_id_set.value);
    new_set.delete(item_id);
    selected_item_id_set.value = new_set;
    return;
  }

  const new_set = new Set(selected_item_id_set.value);
  if (new_set.has(item_id)) {
    new_set.delete(item_id);
  } else {
    new_set.add(item_id);
  }
  selected_item_id_set.value = new_set;
};

const clearSelection = () => {
  selected_item_id_set.value = new Set();
};

const selectCurrentPage = () => {
  const new_set = new Set(selected_item_id_set.value);
  current_page_item_id_list.value.forEach((id) => new_set.add(id));
  selected_item_id_set.value = new_set;
};

const selectAllPages = () => {
  selected_item_id_set.value = new Set(searched_item_id_set.value);
};
</script>

<template>
  <!-- SelectableItemsElement.vue -->
  <UContainer>
    <div
      v-if="!handling_request && searched_item_count === 0 && search_criteria_term"
      class="empty-state"
    >
      <Icon
        name="i-lucide-search"
        class="empty-icon"
      />
      <p>{{ $t('t_no_tags_match_your_search') }}</p>
    </div>

    <UAlert
      v-if="!handling_request && searched_item_count > 0
        && (show_master_checkbox || has_selection)"
      class="selection-banner"
      color="primary"
      variant="subtle"
    >
      <template #description>
        <div class="selection-banner-content">
          <section class="master-checkbox">
            <UCheckbox
              :model-value="master_checked"
              :indeterminate="master_indeterminate"
              :ui="{
                root: 'cursor-pointer',
                container: 'cursor-pointer',
                base: 'cursor-pointer',
                label: 'cursor-pointer',
              }"
              @update:model-value="toggleMasterCheckbox"
            />

            <span
              v-if="has_selection"
              class="selection-count"
            >
              {{ selected_count }} / {{ searched_item_count }}
            </span>
          </section>

          <section class="desktop-only">
            <a
              v-if="all_pages_selected || (total_pages === 1 && current_page_all_selected)"
              class="banner-link"
              @click="clearSelection"
            >
              {{ $t('t_clear_selection') }}
            </a>

            <a
              v-else-if="current_page_all_selected && total_pages > 1"
              class="banner-link"
              @click="selectAllPages"
            >
              {{ $t('t_select_all_pages') }}
            </a>

            <a
              v-else
              class="banner-link"
              @click="selectCurrentPage"
            >
              {{ $t('t_select_page') }}
            </a>
          </section>

          <section
            v-if="item_type === ITEM_TYPE_TAG"
            class="actions-on-selected-actions"
          >
            <DeleteSelectedTagsPopup />
          </section>

          <section
            v-if="item_type === ITEM_TYPE_NOTE"
            class="actions-on-selected-actions"
          >
            <AddTagsToNotesPopup :selected_note_id_set="selected_item_id_set" />

            <RemoveTagsFromNotesPopup :selected_note_id_set="selected_item_id_set" />

            <DeleteSelectedNotesPopup />
          </section>
        </div>
      </template>
    </UAlert>

    <div class="desktop-only">
      <ItemListForDesktopElement
        :item_list="current_page_item_list"
        :item_type
        @toggle_item_selection="handleCheckboxClick"
      />
    </div>

    <div class="mobile-only">
      <ItemListForMobileElement
        :item_list="current_page_item_list"
        :item_type
        @toggle_item_selection="handleCheckboxClick"
      />
    </div>

    <hr class="separator-2">

    <div
      v-if="total_pages > 1"
      class="flex justify-center"
    >
      <UPagination
        v-model:page="page_number"
        :items-per-page="items_per_page"
        :to="(p) => `/manage-${item_type}s/page/${p}`"
        :total="searched_item_count"
      />
    </div>
  </UContainer>
</template>

<style scoped>
.action-bar {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.actions-on-selected-actions {
  align-items: center;
  display: flex;
  gap: 0.75rem;
}

.banner-link {
  color: var(--color-main);
  cursor: pointer;
  font-weight: 600;
  text-decoration: underline;
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.empty-state {
  align-items: center;
  color: var(--color-disabled);
  display: flex;
  flex-direction: column;
  padding: 3rem 1rem;
}

.empty-state p {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.master-checkbox {
  align-items: center;
  display: flex;
  gap: 0.5rem;
}

.selection-banner {
  margin-bottom: 0.5rem;
}

.selection-banner-content {
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.selection-count {
  color: var(--color-text);
  font-size: 0.9rem;
  font-weight: 500;
}

.sort-radio-buttons {
  background: var(--color-background-contrasting);
  border: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
