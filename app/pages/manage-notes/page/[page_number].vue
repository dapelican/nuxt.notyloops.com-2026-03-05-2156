<script setup>
definePageMeta({ middleware: 'auth' });

const { t } = useI18n();

useSeoMeta({
  title: `${t('t_manage_notes')} | NotyLoops`,
});

const {
  all_user_tag_list,
  handling_request,
  page_number,
  reinitializeSearch,
  search_criteria_tag_id_set,
  sort_option,
  search_criteria_term,
  searchItems,
} = provideSearchAndSelectItems(ITEM_TYPE_NOTE);

const {
  data: user_data,
  error: user_error,
} = await useFetch('/a/user', { key: 'notes-manage-user' });

if (user_error.value) {
  handleFrontendError(null, user_error.value.data?.error_message);
}

const total_user_note_count = ref(0);

const {
  data: count_data,
  error: count_error,
} = await useFetch('/notes/count-user-notes', { key: 'notes-manage-count' });

if (count_error.value) {
  handleFrontendError(null, count_error.value.data?.error_message);
}

if (count_data.value) {
  total_user_note_count.value = count_data.value.total_user_note_count;
}

const {
  data: tag_data,
  error: tag_error,
} = await useFetch('/tags/get-user-tags', { key: 'tags-manage-all' });

if (tag_error.value) {
  handleFrontendError(null, tag_error.value.data?.error_message);
}

if (tag_data.value) {
  all_user_tag_list.value = tag_data.value.all_user_tag_list;
}

const user_is_premium_or_admin = computed(() => {
  const s = user_data.value?.status;

  return s === USER_STATUS_PREMIUM || s === USER_STATUS_ADMIN;
});

const user_can_create_notes = computed(() => {
  return user_is_premium_or_admin.value || total_user_note_count.value < FREEMIUM_NOTE_LIMIT;
});

// Action bar actions
const show_search_input = ref(false);

const show_filter_tags_input = ref(false);

const show_order_options = ref(false);

const show_master_checkbox = ref(false);

const action_bar_refs = {
  show_search_input,
  show_filter_tags_input,
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
    id: 'title:asc',
    label: t('t_title_a_to_z'),
    value: 'title:asc',
  },
  {
    id: 'title:desc',
    label: t('t_title_z_to_a'),
    value: 'title:desc',
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

const search_criteria_tag_id_list = computed(() => Array.from(search_criteria_tag_id_set.value));

const onTagFilterChange = (new_selected_tag_id_list) => {
  search_criteria_tag_id_set.value = new Set(new_selected_tag_id_list);
  if (page_number.value !== 1) {
    navigateTo('/manage-notes/page/1');
  } else {
    searchItems();
  }
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
  <!-- app/pages/manage-notes/page/[page_number].vue -->
  <section>
    <LoadingElement v-if="handling_request" />

    <div v-else>
      <UContainer class="centered-max-width-1200">
        <header class="center">
          <h1>{{ $t('t_manage_notes') }}</h1>

          <hr class="separator-1">

          <div class="flex flex-wrap justify-center gap-2">
            <UButton
              v-if="user_can_create_notes"
              class="cursor-pointer hover:text-inverted!"
              icon="i-lucide-plus"
              :to="'/manage-notes/add'"
            >
              <span>{{ $t('t_add_note') }}</span>
            </UButton>

            <LimitedFeaturePopup v-if="!user_can_create_notes">
              <UButton
                class="cursor-pointer hover:text-inverted!"
                icon="i-lucide-lock"
              >
                <span>{{ $t('t_add_note') }}</span>
              </UButton>

              <template #content>
                <p class="m-0">
                  {{ $t('t_you_have_reached_the_freemium_limit_for_creating_notes') }}
                </p>
              </template>

              <template #footer>
                <section class="flex justify-end">
                  <BecomePremiumButtonElement />
                </section>
              </template>
            </LimitedFeaturePopup>

            <ImportNotesPopup v-if="user_is_premium_or_admin">
              <UButton
                class="cursor-pointer hover:text-inverted!"
                icon="i-lucide-file-up"
              >
                <span>{{ $t('t_import_notes') }}</span>
              </UButton>
            </ImportNotesPopup>

            <LimitedFeaturePopup v-else>
              <UButton
                class="cursor-pointer hover:text-inverted!"
                icon="i-lucide-lock"
              >
                <span>{{ $t('t_import_notes') }}</span>
              </UButton>

              <template #content>
                <p class="m-0">
                  {{ $t('t_this_feature_is_reserved_to_premium_users') }}
                </p>
              </template>

              <template #footer>
                <section class="flex justify-end">
                  <BecomePremiumButtonElement />
                </section>
              </template>
            </LimitedFeaturePopup>
          </div>
        </header>

        <hr class="separator-2">

        <template v-if="total_user_note_count > 0">
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
                icon="i-lucide-tag"
                :variant="show_filter_tags_input ? 'solid' : 'outline'"
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

            <div class="ml-auto mr-auto max-w-[800px]">
              <UInput
                v-if="show_search_input"
                v-model="search_criteria_term"
                class="w-full"
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

              <SelectTagsInputElement
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
          </section>
        </template>
      </UContainer>

      <SelectableItemsElement
        v-if="total_user_note_count > 0"
        :item_type="ITEM_TYPE_NOTE"
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
