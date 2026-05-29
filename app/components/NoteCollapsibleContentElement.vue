<script setup>
const props = defineProps({
  collection_id: {
    type: String,
    default: '',
  },
  collection_type: {
    type: String,
    required: true,
  },
  note_id: {
    type: String,
    required: true,
  },
  preview_note_id_list: {
    type: Array,
    default: undefined,
  },
  show_lock: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: '',
  },
});

const content_open = ref(false);
const note_detail_list = ref(undefined);
const note_detail_loading = ref(false);
const note_type = ref(NOTE_FORMAT_FREE);

const { loggedIn: logged_in } = useUserSession();

const show_locked_preview = computed(() => {
  if (!props.show_lock) {
    return false;
  }

  if (!logged_in.value) {
    return true;
  }

  if (props.collection_type === COLLECTION_TYPE_PUBLIC_FREE) {
    return false;
  }

  const list = props.preview_note_id_list;

  if (!Array.isArray(list)) {
    return true;
  }

  return !list.includes(props.note_id);
});

const note_detail_fetch_url = computed(() => {
  if (props.collection_type === COLLECTION_TYPE_PRIVATE) {
    return `/note_details/${props.note_id}`;
  }

  if (props.collection_type.startsWith('public_')) {
    return `/public-collection/${props.collection_id}/note/${props.note_id}`;
  }

  return `/note_details/${props.note_id}`;
});

const load_note_detail_list = async () => {
  if (note_detail_list.value !== undefined) {
    return;
  }

  note_detail_loading.value = true;

  try {
    const data = await $fetch(note_detail_fetch_url.value);

    if (data?.error_message) {
      handleFrontendError(null, data.error_message);
      return;
    }

    note_detail_list.value = data.note_detail_list ?? [];
    note_type.value = data.note_type ?? NOTE_FORMAT_FREE;
  } catch (error) {
    handleFrontendError(error, error?.data?.error_message);
  } finally {
    note_detail_loading.value = false;
  }
};

const on_content_open_change = async (is_open) => {
  content_open.value = is_open;

  if (is_open && !show_locked_preview.value && logged_in.value) {
    await load_note_detail_list();
  }
};
</script>

<template>
  <!-- NoteCollapsibleContentElement.vue -->
  <section
    v-if="show_locked_preview"
    class="chevron-zone preview-locked"
  >
    <span class="preview-locked-title">
      {{ title }}
    </span>

    <UIcon
      class="icon-right"
      name="i-lucide-lock"
    />
  </section>

  <UCollapsible
    v-else
    :open="content_open"
    @update:open="on_content_open_change"
  >
    <div class="chevron-zone">
      <span>
        {{ collection_type.startsWith('public_') ? title : $t('t_content') }}
      </span>

      <UIcon
        :name="content_open ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
        class="icon-right"
      />
    </div>

    <template #content>
      <LoadingElement
        v-if="note_detail_loading"
        class="py-4 w-full max-w-md mx-auto"
      />
      <NoteDisplayerElement
        v-else
        :hide_title="false"
        :note_detail_list="note_detail_list ?? []"
        :note_type="note_type"
        :title="title"
      />
    </template>
  </UCollapsible>
</template>

<style scoped>
.chevron-zone {
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}

.preview-locked {
  cursor: default;
}

.preview-locked-title {
  flex: 1;
  min-width: 0;
}

.icon-right {
  flex-shrink: 0;
}
</style>
