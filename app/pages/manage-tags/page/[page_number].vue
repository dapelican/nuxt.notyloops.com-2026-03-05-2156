<script setup>
definePageMeta({ middleware: 'auth' });

const { t } = useI18n();

useSeoMeta({
  title: `${t('t_manage_tags')} | OptiLeague`,
});

const total_user_tag_count = ref(0);

const {
  data: count_data,
  error: count_error,
} = await useFetch('/tags/count-user-tags');

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
} = useSearchAndSelectItems(ITEM_TYPE_TAG);

// Action bar actions
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
});

watch(page_number, searchItems);

onUnmounted(() => {
  clearTimeout(search_timeout);
});
</script>

<template>
  <UContainer class="centered-max-width-1200">
    <header class="center">
      <h1>{{ $t('t_manage_tags') }}</h1>

      <hr class="separator-1">

      <UButton
        class="cursor-pointer"
        icon="i-lucide-plus"
        @click="navigateTo('/manage-tags/add')"
      >
        <span>{{ $t('t_add_tag') }}</span>
      </UButton>
    </header>

    <hr class="separator-2">

    <template v-if="total_user_tag_count > 0">
      <LoadingElement v-if="handling_request" />

      <template v-if="!handling_request">
        <div class="action-bar">
          <UInput
            v-model="search_criteria_term"
            icon="i-lucide-search"
            :placeholder="$t('t_search_tag')"
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
        </div>
      </template>
    </template>
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
</style>
