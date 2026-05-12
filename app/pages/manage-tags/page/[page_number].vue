<script setup>
definePageMeta({ middleware: 'auth' });

const { t } = useI18n();

useSeoMeta({
  title: `${t('t_manage_tags')} | NotyLoops`,
});

const total_user_tag_count = ref(0);

const {
  data: count_data,
  error: count_error,
} = await useFetch('/tags/count-user-tags', { key: 'tags-manage-count' });

if (count_error.value) {
  handleFrontendError(null, count_error.value.data?.error_message);
}

if (count_data.value) {
  total_user_tag_count.value = count_data.value.total_user_tag_count;
}

const {
  handling_request,
  page_number,
  reinitializeSearch,
  sort_option,
  search_criteria_term,
  searchItems,
} = provideSearchAndSelectItems(ITEM_TYPE_TAG);

// Action bar actions
const show_search_input = ref(false);

const show_order_options = ref(false);

const show_master_checkbox = ref(false);

const action_bar_refs = {
  show_search_input,
  show_order_options,
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
    label: t('t_created_at_from_newest_to_oldest'),
    value: 'created_at:desc',
  },
  {
    id: 'created_at:asc',
    label: t('t_created_at_from_oldest_to_newest'),
    value: 'created_at:asc',
  },
  {
    id: 'updated_at:desc',
    label: t('t_updated_at_from_newest_to_oldest'),
    value: 'updated_at:desc',
  },
  {
    id: 'updated_at:asc',
    label: t('t_updated_at_from_oldest_to_newest'),
    value: 'updated_at:asc',
  },
];

const onSortChange = () => {
  if (page_number.value !== 1) {
    navigateTo('/manage-tags/page/1');
  } else {
    searchItems();
  }
};

let search_timeout = null;

const onSearchInput = () => {
  clearTimeout(search_timeout);
  search_timeout = setTimeout(() => {
    if (page_number.value !== 1) {
      navigateTo('/manage-tags/page/1');
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
  watch(page_number, searchItems);
});

onUnmounted(() => {
  clearTimeout(search_timeout);
});
</script>

<template>
  <!-- app/pages/manage-tags/page/[page_number].vue -->
  <section>
    <LoadingElement v-if="handling_request" />

    <div v-else>
      <UContainer class="centered-max-width-1200">
        <header class="center">
          <h1>{{ $t('t_manage_tags') }}</h1>

          <hr class="separator-1">

          <UButton
            class="cursor-pointer hover:text-inverted!"
            icon="i-lucide-plus"
            :to="'/manage-tags/add'"
          >
            <span>{{ $t('t_add_tag') }}</span>
          </UButton>
        </header>

        <hr class="separator-2">

        <template v-if="total_user_tag_count > 0">
          <section class="ml-auto mr-auto mb-4 max-w-fit">
            <div class="flex justify-center gap-2 mb-4">
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
                  {{ $t('t_select') }}
                </span>
              </UButton>

              <section
                class="reinitialize-button text-sm"
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

            <div class="ml-auto mr-auto">
              <UInput
                v-if="show_search_input"
                v-model="search_criteria_term"
                class="w-full"
                icon="i-lucide-search"
                :placeholder="$t('t_search_tags')"
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

              <URadioGroup
                v-if="show_order_options"
                v-model="sort_option"
                :items="sort_option_list"
                value-key="id"
                @change="onSortChange"
              />
            </div>
          </section>
        </template>
      </UContainer>

      <SelectableItemsElement
        v-if="total_user_tag_count > 0"
        :item_type="ITEM_TYPE_TAG"
        :show_master_checkbox
      />
    </div>
  </section>
</template>

<style scoped>
.reinitialize-button {
  align-items: center;
  color: var(--color-primary);
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
