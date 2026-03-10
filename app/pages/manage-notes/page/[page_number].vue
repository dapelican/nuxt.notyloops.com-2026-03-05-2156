<script setup>
definePageMeta({ middleware: 'auth' });

const { t } = useI18n();

useSeoMeta({
  title: `${t('t_manage_notes')} | OptiLeague`,
});

const total_user_note_count = ref(0);

const {
  data: count_data,
  error: count_error,
} = await useFetch('/notes/count-user-notes');

if (count_error.value) {
  handleFrontendError(null, count_error.value.data?.error_message);
}

if (count_data.value) {
  total_user_note_count.value = count_data.value.total_user_note_count;
}

const {
  all_user_tag_list,
  handling_request,
  page_number,
  reinitializeSearch,
  search_criteria_tag_id_set,
  sort_option,
  search_criteria_term,
  searchItems,
} = useSearchAndSelectItems(ITEM_TYPE_NOTE);

const {
  data: tag_data,
  error: tag_error,
} = await useFetch('/tags/get-user-tags');

if (tag_error.value) {
  handleFrontendError(null, tag_error.value.data?.error_message);
}

if (tag_data.value) {
  all_user_tag_list.value = tag_data.value.all_user_tag_list;
}

// Action bar actions
const search_criteria_tag_id_list = computed(() => Array.from(search_criteria_tag_id_set.value));

const onTagFilterChange = (new_selected_tag_id_list) => {
  search_criteria_tag_id_set.value = new Set(new_selected_tag_id_list);
  if (page_number.value !== 1) {
    navigateTo('/manage-notes/page/1');
  } else {
    searchItems();
  }
};

const show_order_options = ref(false);

const show_filter_tags_input = ref(false);

const show_search_input = ref(false);

const show_master_checkbox = ref(false);

const action_bar_refs = {
  show_order_options,
  show_filter_tags_input,
  show_search_input,
  show_master_checkbox,
};

const handleActionBarClick = (target_key) => {
  const target = action_bar_refs[target_key];
  const new_value = !target.value;
  Object.values(action_bar_refs).forEach((r) => (r.value = false));
  target.value = new_value;
};

const sort_option_list = [
  {
    id: 'label:asc',
    label: t('t_label_a_to_z'),
    value: 'label:asc',
  },
  {
    id: 'label:desc',
    label: t('t_label_z_to_a'),
    value: 'label:desc',
  },
  {
    id: 'attached_note_count:desc',
    label: t('t_most_attached_notes_first'),
    value: 'attached_note_count:desc',
  },
  {
    id: 'attached_note_count:asc',
    label: t('t_fewest_attached_notes_first'),
    value: 'attached_note_count:asc',
  },
  {
    id: 'created_at:desc',
    label: t('t_newest_created_at_first'),
    value: 'created_at:desc',
  },
  {
    id: 'created_at:asc',
    label: t('t_oldest_created_at_first'),
    value: 'created_at:asc',
  },
  {
    id: 'updated_at:desc',
    label: t('t_newest_updated_at_first'),
    value: 'updated_at:desc',
  },
  {
    id: 'updated_at:asc',
    label: t('t_oldest_updated_at_first'),
    value: 'updated_at:asc',
  },
];

const onSortChange = () => {
  if (page_number.value !== 1) {
    navigateTo('/manage-notes/page/1');
  } else {
    searchItems();
  }
};

let search_timeout = null;

const onSearchInput = () => {
  clearTimeout(search_timeout);
  search_timeout = setTimeout(() => {
    if (page_number.value !== 1) {
      navigateTo('/manage-notes/page/1');
    } else {
      searchItems();
    }
  }, 400);
};

const onClearingInput = () => {
  search_criteria_term.value = '';
  searchItems();
};

onMounted(() => {
  searchItems();
});

watch(page_number, searchItems);

onUnmounted(() => {
  clearTimeout(search_timeout);
});
</script>

<template>
  <UContainer class="centered-max-width-1200">
    <header class="center">
      <h1>{{ $t('t_manage_notes') }}</h1>

      <hr class="separator-1">

      <UButton
        class="cursor-pointer"
        icon="i-lucide-plus"
        @click="navigateTo('/manage-notes/add')"
      >
        <span>{{ $t('t_add_note') }}</span>
      </UButton>
    </header>

    <hr class="separator-2">

    <template v-if="total_user_note_count > 0">
      <LoadingElement v-if="handling_request" />

      <template v-if="!handling_request">
        <div class="action-bar">
          <section class="action-bar-left">
            <UButton
              class="cursor-pointer"
              icon="i-lucide-search"
              :variant="show_search_input ? 'solid' : 'outline'"
              @click="handleActionBarClick('show_search_input')"
            >
              <span class="desktop-only">
                {{ $t('t_search') }}
              </span>
            </UButton>

            <UButton
              class="cursor-pointer"
              icon="i-lucide-tag"
              :variant="show_search_input ? 'solid' : 'outline'"
              @click="handleActionBarClick('show_filter_tags_input')"
            >
              <span class="desktop-only">
                {{ $t('t_filter_by_tags') }}
              </span>
            </UButton>

            <UButton
              class="cursor-pointer"
              icon="i-lucide-arrow-down-wide-narrow"
              :variant="show_order_options ? 'solid' : 'outline'"
              @click="handleActionBarClick('show_order_options')"
            >
              <span class="desktop-only">
                {{ $t('t_reorder') }}
              </span>
            </UButton>

            <UButton
              class="cursor-pointer"
              icon="i-lucide-square-check"
              :variant="show_master_checkbox ? 'solid' : 'outline'"
              @click="handleActionBarClick('show_master_checkbox')"
            >
              <span class="desktop-only">
                {{ $t('t_select_all') }}
              </span>
            </UButton>
          </section>

          <section
            class="action-bar-right"
            @click="reinitializeSearch"
          >
            <UIcon
              name="i-lucide-refresh-cw"
            />
            <span class="desktop-only">
              {{ $t('t_reset_filters') }}
            </span>
          </section>
        </div>

        <div class="action-bar-details">
          <UInput
            v-if="show_search_input"
            v-model="search_criteria_term"
            icon="i-lucide-search"
            :placeholder="$t('t_search_notes')"
            @input="onSearchInput"
          >
            <template
              v-if="search_criteria_term?.length > 0"
              #trailing
            >
              <UButton
                color="neutral"
                variant="link"
                size="sm"
                icon="i-lucide-circle-x"
                :aria-label="$t('t_clear_input')"
                @click="onClearingInput"
              />
            </template>
          </UInput>

          <SelectTagsInputElements
            v-if="show_filter_tags_input"
            :tag_list="all_user_tag_list"
            :selected_tag_id_list="search_criteria_tag_id_list"
            @update:selected_tag_id_list="onTagFilterChange"
          />

          <URadioGroup
            v-if="show_order_options"
            v-model="sort_option"
            :items="sort_option_list"
            value-key="id"
            @change="onSortChange"
          />
        </div>

        <SelectableItemsElement
          :item_type="ITEM_TYPE_NOTE"
          :show_master_checkbox
        />
      </template>
    </template>
  </UContainer>
</template>

<style scoped>
.action-bar {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.action-bar-left {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.action-bar-right {
  align-items: center;
  color: var(--color-primary);
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
</style>
