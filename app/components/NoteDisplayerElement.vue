<script setup>
const props = defineProps({
  hide_title: {
    type: Boolean,
    default: true,
  },
  note_detail_list: {
    type: Array,
    default: () => [],
  },
  title: {
    type: String,
    default: '',
  },
});

const mc_block_submitted = ref({});
const mc_block_selection_correct = ref({});

const checkbox_selected = ref({});
const detail_revealed = ref({});

const grouped_blocks = computed(() => {
  const list = props.note_detail_list;
  if (!Array.isArray(list) || list.length === 0) {
    return [];
  }

  const is_nested_api_shape = list.some((item) => Array.isArray(item));

  if (is_nested_api_shape) {
    return list;
  }

  const blocks = [];
  let idx = 0;

  while (idx < list.length) {
    const content_position = list[idx].content_position;
    const group = [];

    while (
      idx < list.length
      && list[idx].content_position === content_position
    ) {
      group.push(list[idx]);
      idx += 1;
    }

    blocks.push(group.length > 1 ? group : group.at(0));
  }

  return blocks;
});

const detail_is_concealed = (detail) =>
  detail.is_hidden === true || detail.to_be_hidden === true;

const reset_interaction_state = () => {
  mc_block_submitted.value = {};
  mc_block_selection_correct.value = {};

  const next_checkbox = {};
  const next_revealed = {};

  for (const block of grouped_blocks.value) {
    const items = Array.isArray(block) ? block : [block];
    const is_mc = Array.isArray(block) && block.length > 1;

    for (const detail of items) {
      if (is_mc) {
        next_checkbox[detail.id] = false;
      } else if (detail_is_concealed(detail)) {
        next_revealed[detail.id] = false;
      }
    }
  }

  checkbox_selected.value = next_checkbox;
  detail_revealed.value = next_revealed;
};

watch(
  () => props.note_detail_list,
  () => {
    nextTick(reset_interaction_state);
  },
  { deep: true, immediate: true }
);

const toggle_detail_reveal = (detail_id) => {
  const current = detail_revealed.value[detail_id];
  detail_revealed.value = {
    ...detail_revealed.value,
    [detail_id]: !current,
  };
};

const row_matches_answer = (detail) => {
  const checked = Boolean(checkbox_selected.value[detail.id]);
  const should_check = Boolean(detail.is_correct);
  return checked === should_check;
};

const evaluate_submission_for_block = (block_idx) => {
  const block = grouped_blocks.value[block_idx];

  if (!Array.isArray(block)) {
    return;
  }

  let all_match = true;

  for (const detail of block) {
    if (!row_matches_answer(detail)) {
      all_match = false;
    }
  }

  mc_block_submitted.value = {
    ...mc_block_submitted.value,
    [block_idx]: true,
  };
  mc_block_selection_correct.value = {
    ...mc_block_selection_correct.value,
    [block_idx]: all_match,
  };
};

const content_visible = (detail) =>
  !detail_is_concealed(detail) || detail_revealed.value[detail.id];
</script>

<template>
  <section class="note-displayer">
    <h1
      v-if="title && !hide_title"
      class="text-center text-2xl font-semibold mb-6"
    >
      {{ title }}
    </h1>

    <div
      v-for="(block, block_idx) in grouped_blocks"
      :key="`block-${block_idx}`"
      class="mb-6"
    >
      <template v-if="Array.isArray(block)">
        <div
          v-for="(detail, sub_idx) in block"
          :key="detail.id ?? `${block_idx}-${sub_idx}`"
          class="flex gap-3 items-start mb-4"
        >
          <div
            v-if="!mc_block_submitted[block_idx]"
            class="shrink-0 pt-1"
          >
            <UCheckbox
              v-model="checkbox_selected[detail.id]"
              :ui="{
                root: 'cursor-pointer',
                container: 'cursor-pointer',
                base: 'cursor-pointer',
              }"
            />
          </div>
          <div
            v-else
            class="shrink-0 pt-1 w-6 flex justify-center"
            aria-hidden="true"
          >
            <UIcon
              v-if="detail.is_correct === true"
              name="i-lucide-square-check-big"
              class="size-5 text-success shrink-0"
            />
            <UIcon
              v-else
              name="i-lucide-square-x"
              class="size-5 text-error shrink-0"
            />
          </div>

          <div class="min-w-0 flex-1">
            <div
              v-if="detail.content_type === 'text' && detail.html_content"
              class="note-displayer-html wrap-break-word"
              v-html="detail.html_content"
            />
            <AudioPlayerElement
              v-else-if="detail.content_type === 'audio' && detail.file_url?.trim()"
              :audio_url="detail.file_url"
            />
            <ImageDisplayerElement
              v-else-if="detail.content_type === 'image' && detail.file_url?.trim()"
              :image_url="detail.file_url"
            />
          </div>
        </div>

        <div
          v-if="!mc_block_submitted[block_idx]"
          class="flex justify-center my-8"
        >
          <UButton
            class="cursor-pointer"
            color="primary"
            @click="evaluate_submission_for_block(block_idx)"
          >
            {{ $t('t_submit') }}
          </UButton>
        </div>

        <p
          v-if="mc_block_submitted[block_idx]"
          class="my-6"
        >
          <template v-if="mc_block_selection_correct[block_idx]">
            {{ $t('t_selection_of_checkboxes_is_correct') }}
          </template>
          <template v-else>
            {{ $t('t_selection_of_checkboxes_is_incorrect') }}
          </template>
        </p>
      </template>

      <template v-else>
        <div :key="block.id ?? `single-${block_idx}`">
          <div
            v-if="detail_is_concealed(block)"
            class="flex justify-center my-8"
          >
            <UButton
              class="cursor-pointer"
              color="primary"
              @click="toggle_detail_reveal(block.id)"
            >
              {{ detail_revealed[block.id] ? 'Hide' : 'Show' }}
            </UButton>
          </div>
          <div v-show="content_visible(block)">
            <div
              v-if="block.content_type === 'text' && block.html_content"
              class="note-displayer-html wrap-break-word"
              v-html="block.html_content"
            />
            <AudioPlayerElement
              v-else-if="block.content_type === 'audio' && block.file_url?.trim()"
              :audio_url="block.file_url"
            />
            <ImageDisplayerElement
              v-else-if="block.content_type === 'image' && block.file_url?.trim()"
              :image_url="block.file_url"
            />
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<style scoped>
/* Undo Tailwind Preflight (@layer base) for injected HTML so UA defaults apply. */
.note-displayer-html :deep(*),
.note-displayer-html :deep(*::before),
.note-displayer-html :deep(*::after) {
  all: revert-layer;
}
</style>
