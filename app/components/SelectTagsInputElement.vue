<script setup>
const props = defineProps({
  tag_list: {
    type: Array,
    required: true,
  },
  selected_tag_id_list: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(['update:selected_tag_id_list']);

const selected_tag_list_ref = ref([]);
const tag_search_query = ref('');

const syncFromProps = () => {
  selected_tag_list_ref.value = props.selected_tag_id_list
    .map((tag_id) => props.tag_list.find((tag) => tag.id === tag_id))
    .filter(Boolean);
};

watch(
  () => [props.selected_tag_id_list, props.tag_list],
  syncFromProps,
  { immediate: true }
);

const onUpdateSelectedTagList = (new_value) => {
  const list = new_value ?? selected_tag_list_ref.value;
  emit('update:selected_tag_id_list', list.map((tag) => tag.id));
};

const selected_tag_id_set = computed(() => {
  return new Set(selected_tag_list_ref.value.map((tag) => tag.id));
});

const available_tag_list = computed(() => {
  return props.tag_list.filter((tag) => !selected_tag_id_set.value.has(tag.id));
});

const normalized_search = computed(() => {
  return tag_search_query.value.trim().toLowerCase();
});

const filtered_available_tag_list = computed(() => {
  const query = normalized_search.value;
  const list = available_tag_list.value;
  if (!query) {
    return list;
  }
  return list.filter((tag) =>
    String(tag.label).toLowerCase().includes(query)
  );
});

const select_tag = (tag) => {
  if (selected_tag_id_set.value.has(tag.id)) {
    return;
  }
  selected_tag_list_ref.value = [...selected_tag_list_ref.value, tag];
  onUpdateSelectedTagList();
};

const remove_tag = (tag) => {
  selected_tag_list_ref.value = selected_tag_list_ref.value.filter(
    (t) => t.id !== tag.id
  );
  onUpdateSelectedTagList();
};
</script>

<template>
  <div class="w-full my-2 space-y-4">
    <section class="space-y-2">
      <h3 class="text-sm font-medium text-highlighted">
        {{ $t('t_selected_tags') }}
      </h3>

      <div
        v-if="selected_tag_list_ref.length > 0"
        class="flex min-h-8 flex-wrap gap-2"
      >
        <TagElement
          v-for="tag in selected_tag_list_ref"
          :key="tag.id"
          removable
          :label="tag.label"
          @remove_tag="remove_tag(tag)"
        />
      </div>

      <p
        v-else
        class="text-sm text-muted"
      >
        {{ $t('t_please_select_a_tag_below') }}
      </p>
    </section>

    <section class="space-y-2">
      <h3 class="text-sm font-medium text-highlighted">
        {{ $t('t_available_tags') }}
      </h3>

      <UInput
        v-model="tag_search_query"
        class="w-full"
        icon="i-lucide-search"
        :placeholder="$t('t_search_tags')"
        :ui="{ trailing: 'pe-1' }"
      >
        <template
          v-if="tag_search_query?.length"
          #trailing
        >
          <UButton
            color="neutral"
            variant="link"
            size="sm"
            icon="i-lucide-circle-x"
            :aria-label="$t('t_clear_input')"
            @click="tag_search_query = ''"
          />
        </template>
      </UInput>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in filtered_available_tag_list"
          :key="tag.id"
          class="inline-flex cursor-pointer rounded-md ring-offset-background transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          role="button"
          tabindex="0"
          @click="select_tag(tag)"
          @keydown.enter.prevent="select_tag(tag)"
          @keydown.space.prevent="select_tag(tag)"
        >
          <TagElement :label="tag.label" />
        </span>
      </div>
    </section>
  </div>
</template>
