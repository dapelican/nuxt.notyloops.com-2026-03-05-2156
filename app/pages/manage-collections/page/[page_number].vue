<script setup>
import { DateTime } from 'luxon';

definePageMeta({ middleware: 'auth' });

const { locale, t } = useI18n();

useSeoMeta({
  title: `${t('t_manage_collections')} | NotyLoops`,
});

const {
  data: user_data,
  error: user_error,
} = await useFetch('/a/user', { key: 'notes-manage-user' });

if (user_error.value) {
  handleFrontendError(null, user_error.value.data?.error_message);
}

const {
  all_user_tag_list,
  handling_request,
  page_number,
  reinitializeSearch,
  sort_option,
  search_criteria_term,
  searchItems,
  total_user_collection_count,
  total_user_note_count,
} = provideSearchAndSelectItems(ITEM_TYPE_COLLECTION);

const {
  data: note_count_data,
  error: note_count_error,
} = await useFetch('/notes/count-user-notes', { key: 'notes-manage-count' });

if (note_count_error.value) {
  handleFrontendError(null, note_count_error.value.data?.error_message);
}

if (note_count_data.value) {
  total_user_note_count.value = note_count_data.value.total_user_note_count;
}

const {
  data: count_data,
  error: count_error,
} = await useFetch('/collections/count-user-collections', { key: 'collections-manage-count' });

if (count_error.value) {
  handleFrontendError(null, count_error.value.data?.error_message);
}

if (count_data.value) {
  total_user_collection_count.value = count_data.value.total_user_collection_count;
}

const diary_due_notes_data = ref(null);

const load_diary_due_notes = async () => {
  try {
    diary_due_notes_data.value = await $fetch('/review/diaries/get-due-notes', {
      query: { date: DateTime.local().toISODate() },
    });
  } catch (error) {
    handleFrontendError(error, error?.data?.error_message);
  }
};

const diary_due_note_count = computed(() =>
  diary_due_notes_data.value?.diary_due_note_count ?? 0
);

const diary_note_id_list = computed(() =>
  diary_due_notes_data.value?.diary_note_id_list ?? []
);

watch(
  diary_due_notes_data,
  (payload) => {
    if (!import.meta.client || !payload) {
      return;
    }

    localStorage.setItem(
      LOCAL_STORAGE_KEY_DIARY_NOTE_ID_LIST,
      JSON.stringify(payload.diary_note_id_list ?? [])
    );

    localStorage.setItem(
      LOCAL_STORAGE_KEY_DIARY_CURRENT_INDEX,
      '0'
    );
  },
  { deep: true, immediate: true }
);

const spaced_repetition_due_notes_data = ref(null);

const load_spaced_repetition_due_notes = async () => {
  try {
    spaced_repetition_due_notes_data.value = await $fetch('/review/spaced-repetition/get-due-notes', {
      query: { date: DateTime.local().toISODate() },
    });
  } catch (error) {
    handleFrontendError(error, error?.data?.error_message);
  }
};

const spaced_repetition_due_note_count = computed(() =>
  spaced_repetition_due_notes_data.value?.spaced_repetition_due_note_count ?? 0
);

const spaced_repetition_note_id_list = computed(() =>
  spaced_repetition_due_notes_data.value?.spaced_repetition_note_id_list ?? []
);

const next_due_date = computed(() =>
  spaced_repetition_due_notes_data.value?.next_due_date ?? null
);

watch(
  spaced_repetition_due_notes_data,
  (payload) => {
    if (!import.meta.client || !payload) {
      return;
    }

    localStorage.setItem(
      LOCAL_STORAGE_KEY_SPACED_REPETITION_NOTE_ID_LIST,
      JSON.stringify(payload.spaced_repetition_note_id_list ?? [])
    );

    localStorage.setItem(
      LOCAL_STORAGE_KEY_SPACED_REPETITION_CURRENT_INDEX,
      '0'
    );

    localStorage.setItem(
      LOCAL_STORAGE_KEY_SPACED_REPETITION_SCORE,
      '0'
    );
  },
  { deep: true, immediate: true }
);

const parse_next_due_date_input = (date_value) => {
  if (date_value === null || date_value === undefined) {
    return null;
  }

  const dt = DateTime.fromISO(String(date_value).slice(0, 10));

  return dt.isValid ? dt : null;
};

const calendar_day_diff_from_today = (dt) =>
  Math.round(dt.startOf('day').diff(DateTime.local().startOf('day'), 'days').days);

const format_next_due_date_1 = (date_value) => {
  const target = parse_next_due_date_input(date_value);

  if (!target) {
    return '';
  }

  const diff = calendar_day_diff_from_today(target);

  if (diff === 1) {
    return t('t_tomorrow');
  }

  if (diff === 2) {
    return t('t_after_tomorrow');
  }

  if (diff > 2) {
    return t('t_in_x_days', { days: diff });
  }

  return t('t_today');
};

const format_next_due_date_2 = (date_value) => {
  const target = parse_next_due_date_input(date_value);

  if (!target) {
    return '';
  }

  return new Intl.DateTimeFormat(locale.value || 'en', {
    day: 'numeric',
    month: 'long',
    weekday: 'long',
  }).format(target.toJSDate());
};

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

const user_can_review_notes = computed(() => {
  return user_is_premium_or_admin.value || total_user_note_count.value < FREEMIUM_NOTE_LIMIT;
});

// Action bar actions
const show_search_input = ref(false);

const show_order_options = ref(false);

const action_bar_refs = {
  show_search_input,
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
  load_spaced_repetition_due_notes();
  load_diary_due_notes();
  searchItems();
  watch(page_number, searchItems);
});

onUnmounted(() => {
  clearTimeout(search_timeout);
});
</script>

<template>
  <!-- app/pages/manage-collections/page/[page_number].vue -->
  <section>
    <LoadingElement v-if="handling_request" />

    <div v-else>
      <UContainer class="centered-max-width-1200">
        <header class="center mb-8">
          <h1>{{ $t('t_manage_collections') }}</h1>

          <hr class="separator-1">

          <UButton
            icon="i-lucide-plus"
            :to="'/manage-collections/add'"
          >
            <span>{{ $t('t_add_collection') }}</span>
          </UButton>
        </header>

        <template v-if="total_user_collection_count > 0">
          <section
            v-if="spaced_repetition_due_note_count > 0
              || next_due_date
              || diary_due_note_count > 0"
            class="space-y-8 mb-8"
          >
            <UAlert
              v-if="spaced_repetition_due_note_count > 0"
              class="mx-auto w-fit"
              color="neutral"
              variant="subtle"
            >
              <template #description>
                <section class="flex flex-col items-center justify-center">
                  <h2>
                    {{ $t('t_spaced_repetition') }}
                  </h2>

                  <p>
                    {{ $t('t_note_count_due_for_review_with_colon') }} {{ spaced_repetition_due_note_count }}
                  </p>
                </section>
              </template>

              <template #actions>
                <div class="flex w-full justify-center">
                  <UButton
                    v-if="user_can_review_notes"
                    icon="i-lucide-refresh-cw"
                    :to="`/review/spaced-repetition/note/${spaced_repetition_note_id_list.at(0)}`"
                  >
                    {{ $t('t_review') }}
                  </UButton>

                  <LimitedFeaturePopup v-if="!user_can_review_notes">
                    <UButton
                      icon="i-lucide-lock"
                    >
                      {{ $t('t_review') }}
                    </UButton>

                    <template #content>
                      <p class="m-0">
                        {{ $t('t_you_have_reached_the_freemium_limit_for_reviewing_notes') }}
                      </p>
                    </template>

                    <template #footer>
                      <section class="flex justify-end">
                        <BecomePremiumButtonElement />
                      </section>
                    </template>
                  </LimitedFeaturePopup>
                </div>
              </template>
            </UAlert>

            <UAlert
              v-if="next_due_date"
              class="mx-auto w-fit"
              color="neutral"
              variant="subtle"
            >
              <template #description>
                <section class="flex flex-col items-center justify-center">
                  <h2>
                    {{ $t('t_spaced_repetition') }}
                  </h2>

                  <p>
                    {{ $t('t_no_notes_due_for_review_for_today') }}
                  </p>

                  <p>
                    {{ $t('t_next_review date') }} {{ format_next_due_date_1(next_due_date) }}
                    ({{ format_next_due_date_2(next_due_date) }})
                  </p>
                </section>
              </template>
            </UAlert>

            <UAlert
              v-if="diary_due_note_count > 0"
              class="mx-auto w-fit"
              color="neutral"
              variant="subtle"
            >
              <template #description>
                <section class="flex flex-col items-center justify-center">
                  <h2>
                    {{ $t('t_diaries') }}
                  </h2>

                  <p>
                    {{ $t('t_note_count_due_for_review_with_colon') }} {{ diary_due_note_count }}
                  </p>
                </section>
              </template>

              <template #actions>
                <div class="flex w-full justify-center">
                  <UButton
                    v-if="user_can_review_notes"
                    icon="i-lucide-refresh-cw"
                    :to="`/review/diaries/note/${diary_note_id_list.at(0)}`"
                  >
                    {{ $t('t_review') }}
                  </UButton>

                  <LimitedFeaturePopup v-if="!user_can_review_notes">
                    <UButton
                      icon="i-lucide-lock"
                    >
                      {{ $t('t_review') }}
                    </UButton>

                    <template #content>
                      <p class="m-0">
                        {{ $t('t_you_have_reached_the_freemium_limit_for_reviewing_notes') }}
                      </p>
                    </template>

                    <template #footer>
                      <section class="flex justify-end">
                        <BecomePremiumButtonElement />
                      </section>
                    </template>
                  </LimitedFeaturePopup>
                </div>
              </template>
            </UAlert>
          </section>

          <section class="ml-auto mr-auto max-w-fit">
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
                icon="i-lucide-arrow-down-wide-narrow"
                :variant="show_order_options ? 'solid' : 'outline'"
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

            <div class="ml-auto mr-auto">
              <UInput
                v-if="show_search_input"
                v-model="search_criteria_term"
                class="w-full"
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
          </section>
        </template>
      </UContainer>

      <SelectableItemsElement
        v-if="total_user_collection_count > 0"
        :item_type="ITEM_TYPE_COLLECTION"
      />
    </div>
  </section>
</template>
