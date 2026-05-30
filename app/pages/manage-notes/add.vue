<script setup>
definePageMeta({ middleware: 'auth' });

const { t } = useI18n();

useSeoMeta({
  title: `${t('t_add_note')} | NotyLoops`,
});

const handling_request = ref(false);
const note_details = ref([]);
const selected_tag_id_list = ref([]);
const title = ref('');

const {
  all_user_tag_list,
  refreshTotalUserNoteCount,
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

const {
  data: user_data,
  error: user_error,
} = await useCurrentUser(USER_FETCH_KEY_MANAGE_NOTES_ADD);

if (user_error.value) {
  handleFrontendError(null, user_error.value.data?.error_message);
}

const user_is_premium_or_admin = computed(() => {
  const s = user_data.value?.status;

  return s === USER_STATUS_PREMIUM || s === USER_STATUS_ADMIN;
});

const note_format_list = [
  {
    label: t('t_flashcard'),
    value: NOTE_FORMAT_FLASHCARD,
  },
  {
    label: t('t_free'),
    value: NOTE_FORMAT_FREE,
  },
  {
    label: t('t_mc'),
    value: NOTE_FORMAT_MULTIPLE_CHOICE,
  },
];

const last_note_format_used = localStorage.getItem(LOCAL_STORAGE_KEY_LAST_NOTE_FORMAT_USED);

const note_format = ref(last_note_format_used ?? NOTE_FORMAT_FLASHCARD);
const swappable_sides = ref(false);

const swappable_sides_list = [
  {
    label: t('t_no'),
    value: false,
  },
  {
    label: t('t_yes'),
    value: true,
  },
];

const checkbox_ui = {
  root: 'cursor-pointer',
  container: 'cursor-pointer',
  base: 'cursor-pointer',
  label: 'cursor-pointer',
};

const disabled_checkbox_ui = {
  root: '',
  container: '',
  base: '',
  label: '',
};

const createEmptyDetail = (file_info = null) => {
  const index = note_details.value.length;

  const base = file_info
    ? {
        content_type: file_info.file_type,
        markdown_content: null,
        file_url: file_info.file_url,
      }
    : {
        content_type: 'text',
        markdown_content: '',
        file_url: null,
      };

  return {
    ...base,
    part_1: index === 0 && note_format.value === NOTE_FORMAT_FLASHCARD,
    mc_part: index === 0 ? 1 : (note_details.value[index - 1]?.mc_part ?? 1),
    is_correct: false,
  };
};

const addText = () => {
  note_details.value.push(createEmptyDetail());
};

const addFileUrl = (file_info) => {
  note_details.value.push(createEmptyDetail(file_info));
};

const moveBlock = (index, direction) => {
  const target = index + direction;
  const items = note_details.value;
  [items[index], items[target]] = [items[target], items[index]];

  if (note_format.value === NOTE_FORMAT_FLASHCARD) {
    note_details.value[0].part_1 = true;

    for (let next_index = 1; next_index < note_details.value.length; next_index += 1) {
      if (note_details.value[next_index].part_1 && !note_details.value[next_index - 1].part_1) {
        note_details.value[next_index].part_1 = false;
      }
    }
  }

  if (note_format.value === NOTE_FORMAT_MULTIPLE_CHOICE) {
    note_details.value[0].mc_part = 1;
    reconcileMcPartsFrom(1);
  }
};

const deleteBlock = (index) => {
  note_details.value.splice(index, 1);

  if (note_details.value.length === 0) {
    return;
  }

  if (note_format.value === NOTE_FORMAT_FLASHCARD) {
    note_details.value[0].part_1 = true;

    for (let next_index = 1; next_index < note_details.value.length; next_index += 1) {
      if (note_details.value[next_index].part_1 && !note_details.value[next_index - 1].part_1) {
        note_details.value[next_index].part_1 = false;
      }
    }
  }

  if (note_format.value === NOTE_FORMAT_MULTIPLE_CHOICE) {
    note_details.value[0].mc_part = 1;
    reconcileMcPartsFrom(1);
  }
};

const reconcileMcPartsFrom = (start_index) => {
  for (let index = start_index; index < note_details.value.length; index += 1) {
    if (index === 0) {
      note_details.value[index].mc_part = 1;
      continue;
    }

    const prev_part = note_details.value[index - 1].mc_part ?? 1;
    let current_part = note_details.value[index].mc_part ?? prev_part;

    if (current_part < prev_part) {
      current_part = prev_part;
    }

    if (current_part > prev_part + 1) {
      current_part = prev_part + 1;
    }

    note_details.value[index].mc_part = current_part;
  }
};

const toggleFlashcardPart1 = (index, checked) => {
  if (index === 0) {
    return;
  }

  if (checked && !note_details.value[index - 1]?.part_1) {
    return;
  }

  note_details.value[index].part_1 = checked;

  if (!checked) {
    for (let next_index = index + 1; next_index < note_details.value.length; next_index += 1) {
      note_details.value[next_index].part_1 = false;
    }
  }
};

const setMcPart = (index, part) => {
  if (index === 0 && part !== 1) {
    return;
  }

  if (index > 0) {
    const prev_part = note_details.value[index - 1].mc_part ?? 1;
    const allowed_parts = prev_part < 3 ? [prev_part, prev_part + 1] : [prev_part];

    if (!allowed_parts.includes(part)) {
      return;
    }
  }

  note_details.value[index].mc_part = part;
  reconcileMcPartsFrom(index + 1);
};

const computed_details = computed(() => {
  const details = note_details.value;

  if (note_format.value === NOTE_FORMAT_FREE) {
    return details.map((detail, index) => {
      const position = index + 1;

      return {
        ...detail,
        content_position: position,
        sub_position: position,
        display_label: `${position}`,
      };
    });
  }

  if (note_format.value === NOTE_FORMAT_FLASHCARD) {
    let part_1_count = 0;
    let part_2_count = 0;

    return details.map((detail, index) => {
      const is_part_1 = index === 0 ? true : Boolean(detail.part_1);

      let content_position;
      let sub_position;

      if (is_part_1) {
        part_1_count += 1;
        content_position = 1;
        sub_position = part_1_count;
      } else {
        part_2_count += 1;
        content_position = 2;
        sub_position = part_2_count;
      }

      return {
        ...detail,
        part_1: is_part_1,
        content_position,
        sub_position,
        display_label: `${content_position}-${sub_position}`,
        part_1_disabled: index === 0,
        show_part_1_checkbox: index === 0 || Boolean(details[index - 1]?.part_1),
      };
    });
  }

  const resolved_mc_parts = details.map((detail, index) => {
    const mc_part = index === 0 ? 1 : (detail.mc_part ?? 1);
    return mc_part;
  });

  const sub_counters = { 1: 0, 2: 0, 3: 0 };

  return details.map((detail, index) => {
    const mc_part = resolved_mc_parts[index];
    sub_counters[mc_part] += 1;

    const prev_part = index > 0 ? resolved_mc_parts[index - 1] : 1;
    const available_mc_parts = index === 0
      ? [1]
      : (prev_part < 3 ? [prev_part, prev_part + 1] : [prev_part]);

    return {
      ...detail,
      mc_part,
      content_position: mc_part,
      sub_position: sub_counters[mc_part],
      display_label: `${mc_part}-${sub_counters[mc_part]}`,
      available_mc_parts,
      mc_parts_before_is_correct: available_mc_parts.filter((part) => part < 2),
      show_mc_part_2_checkbox: available_mc_parts.includes(2),
      mc_parts_after_is_correct: available_mc_parts.filter((part) => part > 2),
      mc_part_disabled: index === 0,
      show_is_correct: mc_part === 2,
    };
  });
});

watch(note_format, () => {
  note_details.value.forEach((detail, index) => {
    if (note_format.value === NOTE_FORMAT_FLASHCARD) {
      detail.part_1 = index === 0;
    }

    if (note_format.value === NOTE_FORMAT_MULTIPLE_CHOICE) {
      detail.mc_part = index === 0 ? 1 : (note_details.value[index - 1]?.mc_part ?? 1);
    }
  });

  if (note_format.value === NOTE_FORMAT_MULTIPLE_CHOICE) {
    reconcileMcPartsFrom(1);
  }
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
        format: note_format.value,
        note_details: computed_details.value.map((d) => ({
          content_position: d.content_position,
          content_sub_position: d.sub_position,
          content_type: d.content_type,
          markdown_content: d.markdown_content,
          file_url: d.file_url,
          is_correct: note_format.value === NOTE_FORMAT_MULTIPLE_CHOICE ? d.is_correct : false,
        })),
        tag_id_list: selected_tag_id_list.value,
        swappable_sides: note_format.value === NOTE_FORMAT_FLASHCARD ? swappable_sides.value : null,
      },
    });

    await refreshTotalUserNoteCount();

    localStorage.setItem(LOCAL_STORAGE_KEY_LAST_NOTE_FORMAT_USED, note_format.value);

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
  <!-- app/pages/manage-notes/add.vue -->
  <UContainer class="centered-max-width-650">
    <h1 class="center">
      {{ $t('t_add_note') }}
    </h1>

    <form @submit.prevent="createNote">
      <h2>
        {{ $t('t_note_format') }}<span class="text-error">*</span>
      </h2>

      <URadioGroup
        v-model="note_format"
        :items="note_format_list"
        orientation="vertical"
        required
      />

      <hr class="separator-2">

      <h2>
        {{ $t('t_title') }}<span class="text-error">*</span>
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
              v-if="note_format === NOTE_FORMAT_FLASHCARD && detail.show_part_1_checkbox"
              :model-value="detail.part_1"
              :disabled="detail.part_1_disabled"
              :label="$t('t_part_1')"
              :ui="checkbox_ui"
              @update:model-value="(checked) => toggleFlashcardPart1(index, checked)"
            />

            <template v-if="note_format === NOTE_FORMAT_MULTIPLE_CHOICE">
              <UCheckbox
                v-for="part in detail.mc_parts_before_is_correct"
                :key="part"
                :model-value="detail.mc_part === part"
                :disabled="detail.mc_part_disabled"
                :label="$t(`t_part_${part}`)"
                :ui="detail.mc_part_disabled ? disabled_checkbox_ui : checkbox_ui"
                @update:model-value="(checked) => checked && setMcPart(index, part)"
              />

              <UCheckbox
                v-if="detail.show_mc_part_2_checkbox"
                :model-value="detail.mc_part === 2"
                :disabled="detail.mc_part_disabled"
                :label="$t('t_part_2')"
                :ui="detail.mc_part_disabled ? disabled_checkbox_ui : checkbox_ui"
                @update:model-value="(checked) => checked && setMcPart(index, 2)"
              />

              <UCheckbox
                v-if="detail.show_is_correct"
                v-model="note_details[index].is_correct"
                :label="$t('t_correct_proposition')"
                :ui="checkbox_ui"
              />

              <UCheckbox
                v-for="part in detail.mc_parts_after_is_correct"
                :key="part"
                :model-value="detail.mc_part === part"
                :disabled="detail.mc_part_disabled"
                :label="$t(`t_part_${part}`)"
                :ui="detail.mc_part_disabled ? disabled_checkbox_ui : checkbox_ui"
                @update:model-value="(checked) => checked && setMcPart(index, part)"
              />
            </template>
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
          v-if="user_is_premium_or_admin"
          file_type="image"
          @file_url="addFileUrl"
        />

        <LimitedFeaturePopup
          v-if="!user_is_premium_or_admin"
        >
          <DashedAreaElement>
            <div class="flex gap-4 items-center">
              <UIcon
                name="i-lucide-lock"
              />
              <span>
                {{ $t('t_add_image') }}
              </span>
            </div>
          </DashedAreaElement>

          <template #content>
            <p class="m-0">
              {{ $t('t_this_feature_is_reserved_to_premium_users') }}
            </p>
          </template>

          <template #footer>
            <section class="flex justify-end">
              <BecomePremiumButtonElement />
            </section>
          </template>
        </LimitedFeaturePopup>

        <FileUploaderPopup
          v-if="user_is_premium_or_admin"
          file_type="audio"
          @file_url="addFileUrl"
        />

        <LimitedFeaturePopup
          v-if="!user_is_premium_or_admin"
        >
          <DashedAreaElement>
            <div class="flex gap-4 items-center">
              <UIcon
                name="i-lucide-lock"
              />
              <span>
                {{ $t('t_add_audio_file') }}
              </span>
            </div>
          </DashedAreaElement>

          <template #content>
            <p class="m-0">
              {{ $t('t_this_feature_is_reserved_to_premium_users') }}
            </p>
          </template>

          <template #footer>
            <section class="flex justify-end">
              <BecomePremiumButtonElement />
            </section>
          </template>
        </LimitedFeaturePopup>

        <TextToSpeechPopup
          v-if="user_is_premium_or_admin"
          file_type="audio"
          @file_url="addFileUrl"
        />

        <LimitedFeaturePopup
          v-if="!user_is_premium_or_admin"
        >
          <DashedAreaElement>
            <div class="flex gap-4 items-center">
              <UIcon
                name="i-lucide-lock"
              />
              <span>
                {{ $t('t_generate_audio_from_text') }}
              </span>
            </div>
          </DashedAreaElement>

          <template #content>
            <p class="m-0">
              {{ $t('t_this_feature_is_reserved_to_premium_users') }}
            </p>
          </template>

          <template #footer>
            <section class="flex justify-end">
              <BecomePremiumButtonElement />
            </section>
          </template>
        </LimitedFeaturePopup>
      </div>

      <hr class="separator-2">

      <h2>
        {{ $t('t_tags') }}
      </h2>

      <AddTagPopup />

      <hr class="separator-1">

      <SelectTagsInputElement
        v-if="all_user_tag_list.length > 0"
        :tag_list="all_user_tag_list"
        :selected_tag_id_list="selected_tag_id_list"
        @update:selected_tag_id_list="updateSelectedTagIdList"
      />

      <hr class="separator-1">

      <template v-if="note_format === NOTE_FORMAT_FLASHCARD">
        <h3>
          {{ $t('t_swappable_sides') }}
        </h3>

        <URadioGroup
          v-model="swappable_sides"
          :items="swappable_sides_list"
          orientation="horizontal"
        />
      </template>

      <hr class="separator-2">

      <nav class="flex-ce-ce-gap-2">
        <UButton
          color="neutral"
          variant="outline"
          :to="CONNECTED_USER_LANDING_PAGE"
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
  </UContainer>
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
