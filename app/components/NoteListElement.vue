<script setup>
const {
  current_page_item_list,
  selected_item_id_set,
} = useSearchAndSelectItemsOrInject(ITEM_TYPE_NOTE);

const route = useRoute();

const page_number = computed(() => route.params.page_number);

const emit = defineEmits(['toggle_item_selection']);

const isItemSelected = (item_id) => selected_item_id_set.value.has(item_id);

const statistics_open_by_note_id = ref({});
const content_open_by_note_id = ref({});

const note_detail_list_by_note_id = ref({});
const note_detail_loading = ref({});

const load_note_detail_list = async (note_id) => {
  if (Array.isArray(note_detail_list_by_note_id.value[note_id])) {
    return;
  }

  note_detail_loading.value = {
    ...note_detail_loading.value,
    [note_id]: true,
  };

  try {
    const data = await $fetch(`/note_details/${note_id}`);

    if (data?.error_message) {
      handleFrontendError(null, data.error_message);
      return;
    }

    note_detail_list_by_note_id.value = {
      ...note_detail_list_by_note_id.value,
      [note_id]: data.note_detail_list ?? [],
    };
  } catch (error) {
    handleFrontendError(error, error?.data?.error_message);
  } finally {
    note_detail_loading.value = {
      ...note_detail_loading.value,
      [note_id]: false,
    };
  }
};

const set_statistics_open = (note_id, is_open) => {
  statistics_open_by_note_id.value = {
    ...statistics_open_by_note_id.value,
    [note_id]: is_open,
  };
};

const on_content_open_change = async (note_id, is_open) => {
  content_open_by_note_id.value = {
    ...content_open_by_note_id.value,
    [note_id]: is_open,
  };

  if (is_open) {
    await load_note_detail_list(note_id);
  }
};
</script>

<template>
  <!-- NoteListElement.vue -->
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
            class="primary-link"
            :to="`/manage-${ITEM_TYPE_NOTE}s/edit/${item.id}?page_number=${page_number}`"
          >
            {{ $t('t_edit') }}
          </NuxtLink>

          <DeleteNotePopup
            :note_id="item.id"
            :note_title="item.title"
          />
        </section>

        <section
          v-if="item.tag_list.length > 0"
          class="tags"
        >
          <TagElement
            v-for="tag in item.tag_list"
            :key="tag.id"
            :label="tag.label"
          />
        </section>

        <UCollapsible
          :open="!!statistics_open_by_note_id[item.id]"
          @update:open="(is_open) => set_statistics_open(item.id, is_open)"
        >
          <div class="chevron-zone">
            <span>
              {{ $t('t_statistics') }}
            </span>

            <UIcon
              :name="statistics_open_by_note_id[item.id] ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
              class="icon-right"
            />
          </div>

          <template #content>
            <ul>
              <li>
                {{ $t('t_created_at_with_colon') }} {{ formatDate(item.created_at) }}
              </li>
              <li>
                {{ $t('t_updated_at_with_colon') }} {{ formatDate(item.updated_at) }}
              </li>
              <li>
                {{ $t('t_first_revision_at_with_colon') }} {{ formatDate(item.first_revision_at) }}
              </li>
              <li>
                {{ $t('t_last_revision_at_with_colon') }} {{ formatDate(item.last_revision_at) }}
              </li>
              <li>
                {{ $t('t_revisions_count_with_colon') }} {{ item.revision_count }}
              </li>
              <li>
                {{ $t('t_score_with_colon') }} {{ item.score }}
              </li>
            </ul>
          </template>
        </UCollapsible>

        <UCollapsible
          :open="!!content_open_by_note_id[item.id]"
          @update:open="(is_open) => on_content_open_change(item.id, is_open)"
        >
          <div class="chevron-zone">
            <span>
              {{ $t('t_content') }}
            </span>

            <UIcon
              :name="content_open_by_note_id[item.id] ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
              class="icon-right"
            />
          </div>

          <template #content>
            <LoadingElement
              v-if="note_detail_loading[item.id]"
              class="py-4 w-full max-w-md mx-auto"
            />
            <NoteDisplayerElement
              v-else
              :hide_title="false"
              :note_detail_list="note_detail_list_by_note_id[item.id] ?? []"
              :title="item.title"
            />
          </template>
        </UCollapsible>
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
