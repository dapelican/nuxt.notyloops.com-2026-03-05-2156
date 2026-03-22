<script setup>
const {
  all_user_tag_list,
  current_page_item_list,
  selected_item_id_set,
} = useSearchAndSelectItemsOrInject(ITEM_TYPE_COLLECTION);

const route = useRoute();

const page_number = computed(() => route.params.page_number);

const emit = defineEmits(['toggle_item_selection']);

const isItemSelected = (item_id) => selected_item_id_set.value.has(item_id);

const tag_name_list = (tag_id_list) => {
  return tag_id_list
    .map((tag_id) => {
      return all_user_tag_list.value
        .find((tag) => tag.id === tag_id)
        ?.label;
    });
};
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
            v-if="!['spaced_repetition', 'diary'].includes(item.review_strategy)"
            class="text-primary"
            :to="`/review/collection/${item.id}`"
          >
            {{ $t('t_review') }}
          </NuxtLink>

          <NuxtLink
            v-if="item.review_strategy === 'diary'"
            class="text-primary"
            :to="`/review/diary/${item.id}`"
          >
            {{ $t('t_review') }}
          </NuxtLink>

          <ShareCollectionPopup
            v-if="['shared', 'public'].includes(item.type)"
            :collection_id="item.id"
            :collection_title="item.title"
            :collection_type="item.type"
          />

          <NuxtLink
            class="text-secondary"
            :to="`/manage-${ITEM_TYPE_COLLECTION}s/edit/${item.id}?page_number=${page_number}`"
          >
            {{ $t('t_edit') }}
          </NuxtLink>

          <DeleteCollectionPopup
            :collection_id="item.id"
            :collection_title="item.title"
          />
        </section>

        <section v-if="item.tag_id_list_to_include.length > 0">
          <span>
            {{ $t('t_tags_to_include_with_colon') }}
            {{ tag_name_list(item.tag_id_list_to_include).join(` ${$t(item.inclusion_type)} `) }}
          </span>
        </section>

        <section v-if="item.tag_id_list_to_exclude.length > 0">
          <span>
            {{ $t('t_tags_to_exclude_with_colon') }}
            {{ tag_name_list(item.tag_id_list_to_exclude).join(` ${$t(item.exclusion_type)} `) }}
          </span>
        </section>

        <section>
          {{ $t('type_with_colon') }} {{ item.type }}
        </section>

        <section>
          {{ $t('t_review_strategy_with_colon') }} {{ $t(`t_${item.review_strategy}`) }}
        </section>

        <section v-if="item.type === 'private'">
          {{ item.hide_note_titles ? $t('t_hide_note_titles') : $t('t_show_note_titles') }}
        </section>

        <section v-if="!['spaced_repetition', 'diary'].includes(item.review_strategy)">
          {{ item.track_scores ? $t('t_track_progress') : $t('t_do_not_track_progress') }}
        </section>
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
  gap: 0.5rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}
</style>
