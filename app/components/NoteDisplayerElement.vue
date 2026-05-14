<script setup>
import {
  renderNoteMarkdownToHtml,
} from '#shared/render-note-markdown.js';

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

const text_detail_visible = (detail) =>
  detail.content_type === 'text'
  && (Boolean(detail.markdown_content?.trim()) || Boolean(detail.html_content?.trim()));

const viewer_html = (detail) => {
  const md = detail.markdown_content?.trim();

  if (md) {
    return renderNoteMarkdownToHtml(md);
  }

  return detail.html_content ?? '';
};

/** CSS cannot set target="_blank"; this runs after v-html updates. */
const patchNoteExternalLinks = (root_el) => {
  if (!root_el?.querySelectorAll) {
    return;
  }

  for (const anchor of root_el.querySelectorAll('a[href]')) {
    const href = anchor.getAttribute('href') ?? '';

    if (/^\s*javascript:/iu.test(href)) {
      continue;
    }

    anchor.setAttribute('target', '_blank');
    anchor.setAttribute('rel', 'noopener noreferrer');
  }
};

const vNoteExternalLinks = {
  mounted: (el) => {
    patchNoteExternalLinks(el);
  },
  updated: (el) => {
    patchNoteExternalLinks(el);
  },
};
</script>

<template>
  <!-- app/components/NoteDisplayerElement.vue -->
  <section class="note-displayer">
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
            <ClientOnly>
              <template #default>
                <div
                  v-if="text_detail_visible(detail)"
                  v-note-external-links
                  class="note-displayer-html wrap-break-word"
                  v-html="viewer_html(detail)"
                />
              </template>
              <template #fallback>
                <div
                  v-if="text_detail_visible(detail)"
                  v-note-external-links
                  class="note-displayer-html wrap-break-word"
                  v-html="detail.html_content || ''"
                />
              </template>
            </ClientOnly>

            <AudioPlayerElement
              v-if="detail.content_type === 'audio' && detail.file_url?.trim()"
              :audio_url="detail.file_url"
            />

            <ImageDisplayerElement
              v-if="detail.content_type === 'image' && detail.file_url?.trim()"
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
            {{ $t('t_validate') }}
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
              {{ detail_revealed[block.id] ? $t('t_hide') : $t('t_show') }}
            </UButton>
          </div>

          <div v-show="content_visible(block)">
            <ClientOnly>
              <template #default>
                <div
                  v-if="text_detail_visible(block)"
                  v-note-external-links
                  class="note-displayer-html wrap-break-word"
                  v-html="viewer_html(block)"
                />
              </template>
              <template #fallback>
                <div
                  v-if="text_detail_visible(block)"
                  v-note-external-links
                  class="note-displayer-html wrap-break-word"
                  v-html="block.html_content || ''"
                />
              </template>
            </ClientOnly>

            <AudioPlayerElement
              v-if="block.content_type === 'audio' && block.file_url?.trim()"
              :audio_url="block.file_url"
            />

            <ImageDisplayerElement
              v-if="block.content_type === 'image' && block.file_url?.trim()"
              :image_url="block.file_url"
            />
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<style scoped>
/*
 * Undo Tailwind Preflight for injected HTML; exclude KaTeX (revert breaks its layout).
 * Use :where() so this stays low-specificity — otherwise :not(.katex) beats the code/pre rules below.
 */
.note-displayer-html :deep(:where(*:not(.katex):not(.katex *))),
.note-displayer-html :deep(:where(*:not(.katex):not(.katex *)::before)),
.note-displayer-html :deep(:where(*:not(.katex):not(.katex *)::after)) {
  all: revert;
}

/* Drop UA / prose top margin on the first injected node so blocks align with the row (checkbox / icon). */
.note-displayer-html :deep(> *:first-child) {
  margin-top: 0;
}

/* Inline and other <code> inside rendered HTML (after revert). */
.note-displayer-html :deep(code) {
  background-color: rgb(45, 45, 45);
  color: rgb(248, 248, 242);
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  font-size: 0.9em;
}

.note-displayer-html :deep(pre code) {
  background-color: rgb(45, 45, 45);
  color: rgb(248, 248, 242);
  padding: 0;
  border-radius: 0;
  font-size: inherit;
}

.note-displayer-html :deep(pre) {
  background-color: rgb(45, 45, 45);
  color: rgb(248, 248, 242);
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  overflow-x: auto;
}

/* KaTeX defaults display math to text-align:center (.katex-display); align with prose. */
.note-displayer-html :deep(.katex-display) {
  text-align: left;
}

.note-displayer-html :deep(.katex-display > .katex) {
  text-align: left;
}

/*
 * target/_blank/rel are applied by v-note-external-links (CSS cannot set attributes).
 * Style links consistently with site links (main.css .primary-link).
 */
.note-displayer-html :deep(a[target="_blank"]) {
  color: var(--ui-text-primary);
  text-decoration: underline;
}

/* @media (hover: hover) {
  .note-displayer-html :deep(a[target="_blank"]:hover) {
    color: var(--ui-secondary);
  }
} */
</style>
