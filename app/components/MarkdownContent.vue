<script setup>
import {
  getNoteDomPurify,
  sanitizeNoteHtml,
} from '#shared/note-html-policy.js';

import {
  renderNoteMarkdownToHtml,
} from '#shared/render-note-markdown.js';

const props = defineProps({
  html: {
    type: String,
    default: '',
  },
  markdown: {
    type: String,
    default: '',
  },
});

const note_dompurify = await getNoteDomPurify();

const viewer_html = computed(() => {
  const md = props.markdown?.trim();

  if (md) {
    return renderNoteMarkdownToHtml(md, note_dompurify);
  }

  return sanitizeNoteHtml(props.html || '', note_dompurify);
});

const fallback_html = computed(() => {
  if (props.html?.trim()) {
    return sanitizeNoteHtml(props.html, note_dompurify);
  }

  return viewer_html.value;
});

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
  <!-- app/components/MarkdownContent.vue -->
  <ClientOnly>
    <template #default>
      <div
        v-if="viewer_html"
        v-note-external-links
        class="note-displayer-html wrap-break-word"
        v-html="viewer_html"
      />
    </template>
    <template #fallback>
      <div
        v-if="fallback_html"
        v-note-external-links
        class="note-displayer-html wrap-break-word"
        v-html="fallback_html"
      />
    </template>
  </ClientOnly>
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
