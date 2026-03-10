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
const menu_open = ref(false);

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
  // nextTick(() => {
  //   menu_open.value = false;
  // });
};
</script>

<template>
  <UInputMenu
    v-model="selected_tag_list_ref"
    v-model:open="menu_open"
    class="w-full my-2"
    delete-icon="i-lucide-x"
    :items="tag_list"
    multiple
    @update:model-value="onUpdateSelectedTagList"
  />
</template>
