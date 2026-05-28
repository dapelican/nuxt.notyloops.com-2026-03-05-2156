<script setup>
const props = defineProps({
  total_user_note_count: {
    type: Number,
    required: true,
  },
});

const {
  all_user_tag_list,
  current_page_item_list,
  selected_item_id_set,
} = useSearchAndSelectItemsOrInject(ITEM_TYPE_COLLECTION);

const route = useRoute();

const page_number = computed(() => route.params.page_number);

const {
  data: user_data,
  error: user_error,
} = await useFetch('/a/user', { key: 'notes-manage-user' });

if (user_error.value) {
  handleFrontendError(null, user_error.value.data?.error_message);
}

const user_status = computed(() => {
  return user_data.value?.status;
});

const emit = defineEmits(['toggle_item_selection']);

const isItemSelected = (item_id) => selected_item_id_set.value.has(item_id);

const getTagLabelForTagId = (tag_id) => {
  return all_user_tag_list.value
    .find((tag) => tag.id === tag_id)
    ?.label;
};

const reviewStrategyForTranslationKey = (strategy) => {
  if (strategy == null || strategy === '') {
    return strategy ?? '';
  }

  const s = String(strategy);

  return s.at(0).toLowerCase() + s.slice(1);
};

const config = useRuntimeConfig();

const is_exporting_collection_id = ref(null);

const exportCollection = async (collection_id) => {
  is_exporting_collection_id.value = collection_id;

  try {
    const blob = await $fetch('/collections/export', {
      body: {
        collection_id,
      },
      method: 'POST',
      responseType: 'blob',
    });

    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `${collection_id}.csv`;
    anchor.click();
    URL.revokeObjectURL(url);
  } catch (error) {
    let message = error?.data?.error_message;

    if (error?.data instanceof Blob) {
      try {
        const text = await error.data.text();
        const parsed = JSON.parse(text);

        message = parsed.error_message ?? message;
      } catch {
        /* ignore parse errors */
      }
    }

    handleFrontendError(error, message);
  } finally {
    is_exporting_collection_id.value = null;
  }
};

const user_is_premium_or_admin = computed(() => {
  const s = user_data.value?.status;

  return s === USER_STATUS_PREMIUM || s === USER_STATUS_ADMIN;
});

const user_can_review_notes = computed(() => {
  return user_is_premium_or_admin.value || props.total_user_note_count < FREEMIUM_NOTE_LIMIT;
});
</script>

<template>
  <!-- CollectionListElement.vue -->
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
          <UButton
            v-if="user_can_review_notes && item.type === COLLECTION_TYPE_PRIVATE
              && ![REVIEW_STRATEGY_SPACED_REPETITION, REVIEW_STRATEGY_DIARY].includes(item.review_strategy)"
            color="secondary"
            icon="i-lucide-refresh-cw"
            :to="`/review/collection/${item.id}`"
            variant="outline"
          >
            <span class="desktop-only">{{ $t('t_review') }}</span>
          </UButton>

          <LimitedFeaturePopup
            v-if="!user_can_review_notes && item.type === COLLECTION_TYPE_PRIVATE
              && ![REVIEW_STRATEGY_SPACED_REPETITION, REVIEW_STRATEGY_DIARY].includes(item.review_strategy)"
          >
            <div>
              <UButton
                color="secondary"
                icon="i-lucide-lock"
                variant="outline"
              >
                {{ $t('t_review') }}
              </UButton>
            </div>

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

          <UButton
            color="secondary"
            :disabled="is_exporting_collection_id === item.id"
            icon="i-lucide-file-down"
            variant="outline"
            @click="exportCollection(item.id)"
          >
            {{ $t('t_export_collection') }}
          </UButton>

          <UButton
            color="secondary"
            icon="i-lucide-pencil"
            :to="`/manage-${ITEM_TYPE_COLLECTION}s/edit/${item.id}?page_number=${page_number}`"
            variant="outline"
          >
            <span class="desktop-only">{{ $t('t_edit') }}</span>
          </UButton>

          <DeleteCollectionPopup
            :collection_id="item.id"
            :collection_title="item.title"
          />
        </section>

        <section
          v-if="item.tag_id_list_to_include.length > 0"
          class="tags"
        >
          <span>
            {{ $t('t_tags_to_include_with_colon') }}
          </span>

          <template
            v-for="(tag_id, index) in item.tag_id_list_to_include"
            :key="tag_id"
          >
            <TagElement
              v-if="getTagLabelForTagId(tag_id)"
              :label="getTagLabelForTagId(tag_id)"
            />

            <span
              v-if="item.tag_id_list_to_include.length >= 3 && index < item.tag_id_list_to_include.length - 2"
            >
              ,
            </span>

            <span
              v-else-if="item.tag_id_list_to_include.length >= 2 && index === item.tag_id_list_to_include.length - 2"
            >
              {{ $t(`t_${item.inclusion_type.toLowerCase()}`) }}
            </span>
          </template>
        </section>

        <section
          v-if="item.tag_id_list_to_exclude.length > 0"
          class="tags"
        >
          <span>
            {{ $t('t_tags_to_exclude_with_colon') }}
          </span>

          <template
            v-for="(tag_id, index) in item.tag_id_list_to_exclude"
            :key="tag_id"
          >
            <TagElement
              v-if="getTagLabelForTagId(tag_id)"
              :label="getTagLabelForTagId(tag_id)"
            />

            <span
              v-if="item.tag_id_list_to_exclude.length >= 3 && index < item.tag_id_list_to_exclude.length - 2"
            >
              ,
            </span>

            <span
              v-else-if="item.tag_id_list_to_exclude.length >= 2 && index === item.tag_id_list_to_exclude.length - 2"
            >
              {{ $t(`t_${item.exclusion_type.toLowerCase()}`) }}
            </span>
          </template>
        </section>

        <section v-if="user_status === USER_STATUS_ADMIN">
          {{ $t('t_type_with_colon') }} {{ item.type }}
        </section>

        <section v-if="item.type === COLLECTION_TYPE_PRIVATE">
          {{ $t('t_review_strategy_with_colon') }} {{ reviewStrategyForTranslationKey($t(`t_${item.review_strategy}`)) }}
        </section>

        <section v-if="item.type !== COLLECTION_TYPE_PRIVATE">
          {{ $t('t_public_url_with_column') }}
          <NuxtLink
            class="text-primary"
            :to="`${config.public.domain}/pc/${item.id}`"
          >
            {{ `${config.public.domain}/pc/${item.id}` }}
          </NuxtLink>
        </section>
      </main>
    </UCard>
  </section>
</template>

<style scoped>
.actions {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.chevron-zone {
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 1rem;
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
  gap: 1rem;
}

.tags {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
