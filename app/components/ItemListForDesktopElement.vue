<script setup>
const props = defineProps({
  item_type: {
    type: String,
    required: true,
  },
});

const { t } = useI18n();

const {
  current_page_item_list,
  selected_item_id_set,
} = useSearchAndSelectItems(props.item_type);

let column_list = [];

if (props.item_type === ITEM_TYPE_TAG) {
  column_list = [
    { column_name: t('t_label'), column_key: 'label', column_type: 'neutral' },
    { column_name: t('t_attached_note_count'), column_key: 'attached_note_count', column_type: 'neutral' },
    { column_name: t('t_created'), column_key: 'created_at', column_type: 'date' },
    { column_name: t('t_updated'), column_key: 'updated_at', column_type: 'date' },
  ];
}

if (props.item_type === ITEM_TYPE_NOTE) {
  column_list = [
    { column_name: t('t_title'), column_key: 'title', column_type: 'neutral' },
    { column_name: t('t_tags'), column_key: 'tag_list', column_type: 'tag' },
    { column_name: t('t_created'), column_key: 'created_at', column_type: 'date' },
    { column_name: t('t_updated'), column_key: 'updated_at', column_type: 'date' },
  ];
}

const route = useRoute();

const page_number = computed(() => route.params.page_number);

const emit = defineEmits(['toggle_item_selection']);

const isItemSelected = (item_id) => selected_item_id_set.value.has(item_id);

const table_columns = [
  {
    id: 'select',
    header: '',
    meta: { class: { th: 'col-checkbox', td: 'col-checkbox' } },
  },
  ...column_list.map((col) => ({
    accessorKey: col.column_key,
    header: col.column_name,
    meta: { class: { th: `col-${col.column_type}`, td: `col-${col.column_type}` } },
  })),
  {
    id: 'actions',
    header: t('t_actions'),
  },
];
</script>

<template>
  <!-- ItemListForDesktopElement.vue -->
  <section v-if="current_page_item_list.length === 0">
    {{ $t('t_no_result_matching_your_search') }}
  </section>

  <UTable
    v-else
    :columns="table_columns"
    :data="current_page_item_list"
  >
    <template
      #select-cell="{
        row,
      }"
    >
      <UCheckbox
        class="cursor-pointer"
        :model-value="isItemSelected(row.original.id)"
        :ui="{
          root: 'cursor-pointer',
          container: 'cursor-pointer',
          base: 'cursor-pointer',
          label: 'cursor-pointer',
        }"
        @update:model-value="emit('toggle_item_selection', row.original.id)"
      />
    </template>

    <template
      #created_at-cell="{
        row,
      }"
    >
      {{ formatDate(row.original.created_at) }}
    </template>

    <template
      #updated_at-cell="{
        row,
      }"
    >
      {{ formatDate(row.original.updated_at) }}
    </template>

    <template
      #tag_list-cell="{
        row,
      }"
    >
      <span
        v-for="tag in row.original.tag_list"
        :key="tag.id"
        class="tag-badge"
      >
        {{ tag.label }}
      </span>
    </template>

    <template
      #actions-cell="{
        row,
      }"
    >
      <NuxtLink
        class="primary-link"
        :to="`/manage-${props.item_type}s/edit/${row.original.id}?page_number=${page_number}`"
      >
        {{ $t('t_edit') }}
      </NuxtLink>
    </template>
  </UTable>
</template>

<style scoped>
:deep(.col-checkbox) {
  width: 40px;
}

:deep(.col-neutral) {
  max-width: 350px;
  /* overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; */
}

:deep(.col-tag) {
  max-width: 200px;
}

:deep(.col-date) {
  white-space: nowrap;
}

.tag-badge {
  background: var(--color-pagination-hover);
  border-radius: 10px;
  display: inline-block;
  font-size: 0.75rem;
  padding: 2px 8px;
  white-space: nowrap;
}
</style>
