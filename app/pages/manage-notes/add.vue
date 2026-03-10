<script setup>
definePageMeta({ middleware: 'auth' });

const { t } = useI18n();

useSeoMeta({
  title: `${t('t_add_note')} | OptiLeague`,
});

const handling_request = ref(false);
const note_details = ref([]);
const selected_tag_id_list = ref([]);
const title = ref('');

const {
  all_user_tag_list,
} = useSearchAndSelectItems(ITEM_TYPE_TAG);

const {
  data: tag_data,
  error: tag_error,
} = await useFetch('/tags/get-user-tags');

if (tag_error.value) {
  handleFrontendError(null, tag_error.value.data?.error_message);
}

if (tag_data.value) {
  all_user_tag_list.value = tag_data.value.all_user_tag_list;
}

const addText = () => {
  note_details.value.push({
    content_type: 'text',
    markdown_content: '',
    file_url: null,
    to_be_hidden: false,
    multiple_choice: false,
    is_correct: false,
  });
};

const addFileUrl = (file_info) => {
  note_details.value.push({
    content_type: file_info.file_type,
    markdown_content: null,
    file_url: file_info.file_url,
    to_be_hidden: false,
    multiple_choice: false,
    is_correct: false,
  });
};

const moveBlock = (index, direction) => {
  const target = index + direction;
  const items = note_details.value;
  [items[index], items[target]] = [items[target], items[index]];
};

const deleteBlock = (index) => {
  note_details.value.splice(index, 1);
};

const computed_details = computed(() => {
  let content_position = 0;
  let sub_position = 0;
  let prev_was_multiple = false;

  return note_details.value.map((detail) => {
    if (detail.multiple_choice) {
      if (!prev_was_multiple) {
        content_position += 1;
        sub_position = 1;
      } else {
        sub_position += 1;
      }
      prev_was_multiple = true;
      return { ...detail, content_position, sub_position, display_label: `${content_position}-${sub_position}` };
    }

    content_position += 1;
    sub_position = 0;
    prev_was_multiple = false;
    return { ...detail, content_position, sub_position, display_label: `${content_position}` };
  });
});

const updateSelectedTagIdList = (new_tag_id_list) => {
  selected_tag_id_list.value = new_tag_id_list;
};

const createNote = async () => {
  handling_request.value = true;

  try {
    await $fetch('/notes/create', {
      method: 'POST',
      body: {
        title: title.value,
        note_details: computed_details.value.map((d) => ({
          content_position: d.content_position,
          content_sub_position: d.sub_position,
          content_type: d.content_type,
          markdown_content: d.markdown_content,
          file_url: d.file_url,
          to_be_hidden: d.to_be_hidden,
          is_correct: d.is_correct,
        })),
        tag_id_list: selected_tag_id_list.value,
      },
    });

    return navigateTo(CONNECTED_USER_LANDING_PAGE);
  } catch (error) {
    const error_message = error?.data?.error_message;
    handleFrontendError(error, error_message);
  } finally {
    handling_request.value = false;
  }
};
</script>

<template>
  <main class="centered-max-width-650">
    <h1 class="center">
      {{ $t('t_add_note') }}
    </h1>

    <form @submit.prevent="createNote">
      <h2>
        {{ $t('t_title') }}
      </h2>

      <UInput
        v-model="title"
        class="w-full"
        required
      />

      <hr class="separator-2">

      <h2>
        {{ $t('t_content') }}
      </h2>

      <div
        v-for="(detail, index) in computed_details"
        :key="index"
      >
        <h3 class="detail-header">
          {{ detail.display_label }}
          <span class="detail-actions">
            <UIcon
              v-if="index > 0"
              name="i-lucide-arrow-up"
              class="cursor-pointer"
              @click="moveBlock(index, -1)"
            />
            <UIcon
              v-if="index < note_details.length - 1"
              name="i-lucide-arrow-down"
              class="cursor-pointer"
              @click="moveBlock(index, 1)"
            />
          </span>
        </h3>

        <UTextarea
          v-if="detail.content_type === 'text'"
          v-model="note_details[index].markdown_content"
          autoresize
          class="w-full"
          :rows="5"
        />

        <ImageDisplayerElement
          v-if="detail.content_type === 'image' && note_details[index].file_url"
          :image_url="note_details[index].file_url"
        />

        <AudioPlayerElement
          v-if="detail.content_type === 'audio' && note_details[index].file_url"
          :audio_url="note_details[index].file_url"
        />

        <hr class="separator-0-5">

        <div class="checkboxes-with-trash">
          <div>
            <UCheckbox
              v-model="note_details[index].to_be_hidden"
              :label="$t('t_to_be_hidden')"
              :ui="{
                root: 'cursor-pointer',
                container: 'cursor-pointer',
                base: 'cursor-pointer',
                label: 'cursor-pointer',
              }"
              @change="note_details[index].multiple_choice = false"
            />

            <UCheckbox
              v-model="note_details[index].multiple_choice"
              :label="$t('t_multiple_choice')"
              :ui="{
                root: 'cursor-pointer',
                container: 'cursor-pointer',
                base: 'cursor-pointer',
                label: 'cursor-pointer',
              }"
              @change="note_details[index].to_be_hidden = false; note_details[index].is_correct = false"
            />

            <UCheckbox
              v-if="detail.multiple_choice"
              v-model="note_details[index].is_correct"
              :label="$t('t_correct_proposition')"
              :ui="{
                root: 'cursor-pointer',
                container: 'cursor-pointer',
                base: 'cursor-pointer',
                label: 'cursor-pointer',
              }"
            />
          </div>

          <UIcon
            name="i-lucide-trash-2"
            class="cursor-pointer size-5 text-error"
            @click="deleteBlock(index)"
          />
        </div>

        <hr class="separator-1">
      </div>

      <hr
        v-if="note_details.length > 0"
        class="separator-1"
      >

      <div class="flex-ce-ce-gap-2">
        <DashedAreaElement @click="addText">
          {{ $t('t_add_text') }}
        </DashedAreaElement>

        <FileUploaderPopup
          file_type="image"
          @file_url="addFileUrl"
        />

        <FileUploaderPopup
          file_type="audio"
          @file_url="addFileUrl"
        />

        <DashedAreaElement>
          {{ $t('t_add_audio') }}  (popup)
        </DashedAreaElement>
      </div>

      <h2>
        {{ $t('t_tags') }}
      </h2>

      <SelectTagsInputElement
        :tag_list="all_user_tag_list"
        :selected_tag_id_list="selected_tag_id_list"
        @update:selected_tag_id_list="updateSelectedTagIdList"
      />

      <ul>
        <li>
          Free users are limited to 2 blocks, and they cannot generate audio.
        </li>
      </ul>

      <nav class="flex-ce-ce-gap-2">
        <UButton
          color="error"
          variant="outline"
          @click="navigateTo(CONNECTED_USER_LANDING_PAGE)"
        >
          {{ $t('t_cancel') }}
        </UButton>

        <UButton
          color="primary"
          variant="solid"
          :disabled="handling_request"
          :loading="handling_request"
          type="submit"
        >
          {{ $t('t_save') }}
        </UButton>
      </nav>
    </form>
  </main>
</template>

<style scoped>
.action-icon {
  cursor: pointer;
  font-size: 1.25rem;
}

.checkboxes-with-trash {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dashed-area {
  border: 2px dashed var(--color-uploader-border);
  border-radius: 5px;
  cursor: pointer;
  padding: 1rem 3rem;
  transition: border-color 0.2s, background-color 0.2s;
}

.dashed-area:hover {
  border-color: var(--color-uploader-border-active);
}

.delete-icon {
  color: red;
  margin-left: auto;
}

.detail-actions {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.detail-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
