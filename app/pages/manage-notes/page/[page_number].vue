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
  search_criteria_tag_id_set_to_include,
  search_criteria_tag_id_set_to_exclude,
  search_criteria_tag_id_list_to_include,
  search_criteria_tag_id_list_to_exclude,
  search_criteria_inclusion_type,
  search_criteria_exclusion_type,
  sort_option,
  search_criteria_term,
  searchItems,
  total_user_note_count,
} = provideSearchAndSelectItems(ITEM_TYPE_NOTE);

const {
  data: user_data,
  error: user_error,
} = await useCurrentUser(USER_FETCH_KEY_MANAGE_NOTES_PAGE);

if (user_error.value) {
  handleFrontendError(null, user_error.value.data?.error_message);
}

const {
  data: count_data,
  error: count_error,
} = await useFetch('/notes/count-user-notes', { key: NOTE_COUNT_FETCH_KEY });

if (count_error.value) {
  handleFrontendError(null, count_error.value.data?.error_message);
}

watch(count_data, (data) => {
  if (data?.total_user_note_count != null) {
    total_user_note_count.value = data.total_user_note_count;
  }
}, { immediate: true });

const {
  data: tag_data,
  error: tag_error,
} = await useFetch('/tags/get-user-tags', { key: USER_TAG_LIST_FETCH_KEY });

if (tag_error.value) {
  handleFrontendError(null, tag_error.value.data?.error_message);
}

watch(tag_data, (data) => {
  if (data?.all_user_tag_list) {
    all_user_tag_list.value = data.all_user_tag_list;
  }
}, { immediate: true });

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

const action_bar_refs = {
  show_search_input,
  show_filter_tags_input,
  show_order_options,
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

const and_or_list = [
  {
    label: t('t_and'),
    value: 'AND',
  },
  {
    label: t('t_or'),
    value: 'OR',
  },
];

const tag_list_for_include = computed(() => {
  const exclude_set = new Set(search_criteria_tag_id_list_to_exclude.value);
  return all_user_tag_list.value.filter((tag) => !exclude_set.has(tag.id));
});

const tag_list_for_exclude = computed(() => {
  const include_set = new Set(search_criteria_tag_id_list_to_include.value);
  return all_user_tag_list.value.filter((tag) => !include_set.has(tag.id));
});

const has_tag_filters = computed(() => {
  return search_criteria_tag_id_list_to_include.value.length > 0
    || search_criteria_tag_id_list_to_exclude.value.length > 0;
});

const navigateOrSearch = () => {
  if (page_number.value !== 1) {
    navigateTo('/manage-notes/page/1');
  } else {
    searchItems();
  }
};

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

const updateSelectedTagIdListToInclude = (new_tag_id_list) => {
  search_criteria_tag_id_set_to_include.value = new Set(Array.isArray(new_tag_id_list) ? new_tag_id_list : []);
  navigateOrSearch();
};

const updateSelectedTagIdListToExclude = (new_tag_id_list) => {
  search_criteria_tag_id_set_to_exclude.value = new Set(Array.isArray(new_tag_id_list) ? new_tag_id_list : []);
  navigateOrSearch();
};

const onInclusionTypeChange = () => {
  navigateOrSearch();
};

const onExclusionTypeChange = () => {
  navigateOrSearch();
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
    <UContainer class="centered-max-width-1200">
      <header class="center">
        <h1>{{ $t('t_manage_notes') }}</h1>

        <hr class="separator-1">

        <div class="flex flex-wrap justify-center gap-2">
          <UButton
            v-if="user_can_create_notes"
            icon="i-lucide-plus"
            :to="`/manage-notes/add?page_number=${page_number}`"
          >
            <span>{{ $t('t_add_note') }}</span>
          </UButton>

          <LimitedFeaturePopup v-if="!user_can_create_notes">
            <UButton
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
              icon="i-lucide-file-up"
            >
              <span>{{ $t('t_import_notes') }}</span>
            </UButton>
          </ImportNotesPopup>

          <LimitedFeaturePopup v-else>
            <UButton
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
        <section class="ml-auto mr-auto mb-4 w-full max-w-2xl">
          <div class="flex justify-center gap-2 mb-4">
            <UButton
              icon="i-lucide-search"
              :variant="search_criteria_term?.length > 0 ? 'solid' : 'outline'"
              @click="handleActionBarClick('show_search_input')"
            >
              <span class="desktop-only">
                {{ $t('t_search') }}
              </span>
            </UButton>

            <UButton
              icon="i-lucide-tag"
              :variant="has_tag_filters ? 'solid' : 'outline'"
              @click="handleActionBarClick('show_filter_tags_input')"
            >
              <span class="desktop-only">
                {{ $t('t_filter_by_tags') }}
              </span>
            </UButton>

            <UButton
              icon="i-lucide-arrow-down-wide-narrow"
              variant="outline"
              @click="handleActionBarClick('show_order_options')"
            >
              <span class="desktop-only">
                {{ $t('t_reorder') }}
              </span>
            </UButton>

            <UButton
              icon="i-lucide-brush-cleaning"
              size="sm"
              variant="ghost"
              @click="reinitializeSearch"
            >
              <span class="desktop-only">
                {{ $t('t_reset_filters') }}
              </span>
            </UButton>
          </div>

          <div class="ml-auto mr-auto max-w-2xl">
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

            <section
              v-if="show_filter_tags_input"
              class="
                border-2
                border-dashed
                border-default
                rounded
                px-4
                py-2
                space-y-4
              "
            >
              <div>
                <p class="text-sm font-medium mb-1">
                  {{ $t('t_tags_to_include') }}
                </p>
                <section class="border-l-2 border-secondary pl-4">
                  <SelectTagsInputElement
                    :tag_list="tag_list_for_include"
                    :selected_tag_id_list="search_criteria_tag_id_list_to_include"
                    @update:selected_tag_id_list="updateSelectedTagIdListToInclude"
                  />

                  <div
                    v-if="search_criteria_tag_id_list_to_include.length > 1"
                    class="mt-2"
                  >
                    <p class="text-sm font-medium mb-1">
                      {{ $t('t_inclusion_type') }}
                    </p>
                    <URadioGroup
                      v-model="search_criteria_inclusion_type"
                      :items="and_or_list"
                      orientation="horizontal"
                      @change="onInclusionTypeChange"
                    />
                  </div>
                </section>
              </div>

              <div>
                <p class="text-sm font-medium mb-1">
                  {{ $t('t_tags_to_exclude') }}
                </p>
                <section class="border-l-2 border-secondary pl-4">
                  <SelectTagsInputElement
                    :tag_list="tag_list_for_exclude"
                    :selected_tag_id_list="search_criteria_tag_id_list_to_exclude"
                    @update:selected_tag_id_list="updateSelectedTagIdListToExclude"
                  />

                  <div
                    v-if="search_criteria_tag_id_list_to_exclude.length > 1"
                    class="mt-2"
                  >
                    <p class="text-sm font-medium mb-1">
                      {{ $t('t_exclusion_type') }}
                    </p>
                    <URadioGroup
                      v-model="search_criteria_exclusion_type"
                      :items="and_or_list"
                      orientation="horizontal"
                      @change="onExclusionTypeChange"
                    />
                  </div>
                </section>
              </div>

              <TagsFilterAlertElement
                :tag_id_list_to_include="search_criteria_tag_id_list_to_include"
                :tag_id_list_to_exclude="search_criteria_tag_id_list_to_exclude"
                :all_user_tag_list="all_user_tag_list"
                :inclusion_type="search_criteria_inclusion_type"
                :exclusion_type="search_criteria_exclusion_type"
              />
            </section>

            <section
              v-if="show_order_options"
              class="
                border-2
                border-dashed
                border-default
                rounded
                px-4
                py-2
              "
            >
              <URadioGroup

                v-model="sort_option"
                :items="sort_option_list"
                value-key="id"
                @change="onSortChange"
              />
            </section>
          </div>
        </section>
      </template>
    </UContainer>

    <LoadingElement v-if="handling_request" />

    <SelectableItemsElement
      v-else-if="total_user_note_count > 0"
      :item_type="ITEM_TYPE_NOTE"
    />
  </section>
</template>
