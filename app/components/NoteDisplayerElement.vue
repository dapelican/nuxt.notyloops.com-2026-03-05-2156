<script setup>
import {
  NOTE_FORMAT_FLASHCARD,
  NOTE_FORMAT_FREE,
  NOTE_FORMAT_MULTIPLE_CHOICE,
} from '#shared/utils/constants.js';

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
  note_format: {
    type: String,
    default: NOTE_FORMAT_FREE,
    validator: (value) => [NOTE_FORMAT_FLASHCARD, NOTE_FORMAT_FREE, NOTE_FORMAT_MULTIPLE_CHOICE].includes(value),
  },
  title: {
    type: String,
    default: '',
  },
});

const mc_submitted = ref(false);
const mc_selection_correct = ref(false);
const checkbox_selected = ref({});
const flashcard_back_revealed = ref(false);

const position_groups = computed(() => {
  const list = props.note_detail_list;

  if (!Array.isArray(list) || list.length === 0) {
    return new Map();
  }

  const groups = new Map();

  for (const item of list) {
    if (Array.isArray(item)) {
      const content_position = item.at(0)?.content_position;

      if (content_position != null) {
        groups.set(content_position, item);
      }

      continue;
    }

    const content_position = item.content_position;

    if (content_position == null) {
      continue;
    }

    if (!groups.has(content_position)) {
      groups.set(content_position, []);
    }

    groups.get(content_position).push(item);
  }

  return groups;
});

const details_at_position = (content_position) => {
  const group = position_groups.value.get(content_position);

  if (!group) {
    return [];
  }

  return Array.isArray(group) ? group : [group];
};

const ordered_detail_list = computed(() => {
  const list = props.note_detail_list;

  if (!Array.isArray(list) || list.length === 0) {
    return [];
  }

  const ordered = [];

  for (const item of list) {
    if (Array.isArray(item)) {
      ordered.push(...item);
      continue;
    }

    ordered.push(item);
  }

  return ordered;
});

const flashcard_front_details = computed(() => details_at_position(1));
const flashcard_back_details = computed(() => details_at_position(2));
const mc_question_details = computed(() => details_at_position(1));
const mc_proposition_details = computed(() => details_at_position(2));
const mc_explanation_details = computed(() => details_at_position(3));

const reset_interaction_state = () => {
  mc_submitted.value = false;
  mc_selection_correct.value = false;
  flashcard_back_revealed.value = false;

  const next_checkbox = {};

  if (props.note_format === NOTE_FORMAT_MULTIPLE_CHOICE) {
    for (const detail of mc_proposition_details.value) {
      next_checkbox[detail.id] = false;
    }
  }

  checkbox_selected.value = next_checkbox;
};

watch(
  () => [props.note_detail_list, props.note_format],
  () => {
    nextTick(reset_interaction_state);
  },
  { deep: true, immediate: true }
);

const toggle_flashcard_back = () => {
  flashcard_back_revealed.value = !flashcard_back_revealed.value;
};

const row_matches_answer = (detail) => {
  const checked = Boolean(checkbox_selected.value[detail.id]);
  const should_check = Boolean(detail.is_correct);

  return checked === should_check;
};

const evaluate_mc_submission = () => {
  let all_match = true;

  for (const detail of mc_proposition_details.value) {
    if (!row_matches_answer(detail)) {
      all_match = false;
    }
  }

  mc_submitted.value = true;
  mc_selection_correct.value = all_match;
};

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
    <template v-if="note_format === NOTE_FORMAT_FREE">
      <div
        v-for="(detail, detail_idx) in ordered_detail_list"
        :key="detail.id ?? `free-${detail_idx}`"
        class="mb-6"
      >
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
    </template>

    <template v-else-if="note_format === NOTE_FORMAT_FLASHCARD">
      <div
        v-for="(detail, detail_idx) in flashcard_front_details"
        :key="detail.id ?? `flashcard-front-${detail_idx}`"
        class="mb-6"
      >
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

      <div
        v-if="flashcard_back_details.length > 0"
        class="flex justify-center my-8"
      >
        <UButton
          class="cursor-pointer"
          color="primary"
          @click="toggle_flashcard_back"
        >
          {{ flashcard_back_revealed ? $t('t_hide') : $t('t_show') }}
        </UButton>
      </div>

      <div v-show="flashcard_back_revealed">
        <div
          v-for="(detail, detail_idx) in flashcard_back_details"
          :key="detail.id ?? `flashcard-back-${detail_idx}`"
          class="mb-6"
        >
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
    </template>

    <template v-else-if="note_format === NOTE_FORMAT_MULTIPLE_CHOICE">
      <div
        v-for="(detail, detail_idx) in mc_question_details"
        :key="detail.id ?? `mc-question-${detail_idx}`"
        class="mb-6"
      >
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

      <template v-if="mc_proposition_details.length > 0">
        <template v-if="!mc_submitted">
          <div
            v-for="(detail, detail_idx) in mc_proposition_details"
            :key="detail.id ?? `mc-proposition-${detail_idx}`"
            class="flex gap-3 items-start mb-4"
          >
            <div class="shrink-0 pt-1">
              <UCheckbox
                v-model="checkbox_selected[detail.id]"
                :ui="{
                  root: 'cursor-pointer',
                  container: 'cursor-pointer',
                  base: 'cursor-pointer',
                }"
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

          <div class="flex justify-center my-8">
            <UButton
              class="cursor-pointer"
              color="primary"
              @click="evaluate_mc_submission"
            >
              {{ $t('t_validate') }}
            </UButton>
          </div>
        </template>

        <template v-else>
          <div
            v-for="(detail, detail_idx) in mc_proposition_details"
            :key="detail.id ?? `mc-proposition-user-${detail_idx}`"
            class="flex gap-3 items-start mb-4"
          >
            <div class="shrink-0 pt-1">
              <UCheckbox
                :model-value="Boolean(checkbox_selected[detail.id])"
                disabled
                :ui="{
                  root: 'cursor-default',
                  container: 'cursor-default',
                  base: 'cursor-default',
                }"
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

          <div class="mt-8">
            <div
              v-for="(detail, detail_idx) in mc_proposition_details"
              :key="detail.id ?? `mc-proposition-answer-${detail_idx}`"
              class="flex gap-3 items-start mb-4"
            >
              <div
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
          </div>

          <p class="my-6">
            <template v-if="mc_selection_correct">
              {{ $t('t_selection_of_checkboxes_is_correct') }}
            </template>
            <template v-else>
              {{ $t('t_selection_of_checkboxes_is_incorrect') }}
            </template>
          </p>
        </template>
      </template>

      <div v-if="mc_submitted">
        <div
          v-for="(detail, detail_idx) in mc_explanation_details"
          :key="detail.id ?? `mc-explanation-${detail_idx}`"
          class="mb-6"
        >
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
    </template>
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
 * Style links consistently with site links.
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
