<script setup>
definePageMeta({ middleware: 'auth' });

const { t } = useI18n();

useSeoMeta({
  title: `${t('t_manage_collections')} | OptiLeague`,
});

const total_user_collection_count = ref(0);

const {
  data: count_data,
  error: count_error,
} = await useFetch('/collections/count-user-collections');

if (count_error.value) {
  handleFrontendError(null, count_error.value.data?.error_message);
}

if (count_data.value) {
  total_user_collection_count.value = count_data.value.total_user_collection_count;
}

const {
  handling_request,
  page_number,
  reinitializeSearch,
  sort_option,
  search_criteria_term,
  searchItems,
} = useSearchAndSelectItems(ITEM_TYPE_COLLECTION);

const show_order_options = ref(false);

const show_search_input = ref(false);

const show_master_checkbox = ref(false);

const action_bar_refs = {
  show_order_options,
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
    navigateTo('/manage-collections/page/1');
  } else {
    searchItems();
  }
};

let search_timeout = null;

const onSearchInput = () => {
  clearTimeout(search_timeout);
  search_timeout = setTimeout(() => {
    if (page_number.value !== 1) {
      navigateTo('/manage-collections/page/1');
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
      <h1>{{ $t('t_manage_collections') }}</h1>

      <hr class="separator-1">

      <UButton
        class="cursor-pointer"
        icon="i-lucide-plus"
        @click="navigateTo('/manage-collections/add')"
      >
        <span>{{ $t('t_add_collection') }}</span>
      </UButton>
    </header>

    <hr class="separator-2">

    <template v-if="total_user_collection_count > 0">
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
            :placeholder="$t('t_search_collections')"
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

        <SelectableItemsElement
          :item_type="ITEM_TYPE_COLLECTION"
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
