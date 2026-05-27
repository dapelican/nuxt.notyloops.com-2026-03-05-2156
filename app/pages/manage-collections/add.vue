<script setup>
import * as z from 'zod';

definePageMeta({ middleware: 'auth' });

const { t } = useI18n();

useSeoMeta({
  title: `${t('t_add_collection')} | NotyLoops`,
});

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

const {
  data: user_data,
  error: user_error,
} = await useFetch('/a/user', { key: 'notes-manage-user' });

if (user_error.value) {
  handleFrontendError(null, user_error.value.data?.error_message);
}

const user_status = computed(() => {
  return user_data.value?.status;
});

const handling_request = ref(false);

const collection_form_state = reactive({
  title: '',
  tag_id_list_to_include: [],
  tag_id_list_to_exclude: [],
  type: COLLECTION_TYPE_PRIVATE,
  review_strategy: REVIEW_STRATEGY_BY_CREATION_DATE_OLDEST_TO_NEWEST,
  track_scores: true,
  description: '',
  pre_tax_price_in_cents: 0,
  inclusion_type: 'AND',
  exclusion_type: 'OR',
});

const collection_form_schema = z.object({
  title: z
    .string({ invalid_type_error: t('t_schema_error_empty_string') })
    .min(1, t('t_schema_error_empty_string')),
});

const collection_form_error = ref('');

const tag_list_for_include = computed(() => {
  const exclude_set = new Set(collection_form_state.tag_id_list_to_exclude);
  return all_user_tag_list.value.filter((tag) => !exclude_set.has(tag.id));
});

const tag_list_for_exclude = computed(() => {
  const include_set = new Set(collection_form_state.tag_id_list_to_include);
  return all_user_tag_list.value.filter((tag) => !include_set.has(tag.id));
});

const tag_name_list_to_include = computed(() => {
  return collection_form_state.tag_id_list_to_include
    .map((tag_id) => {
      return all_user_tag_list.value
        .find((tag) => tag.id === tag_id)
        ?.label;
    });
});

const tag_name_list_to_exclude = computed(() => {
  return collection_form_state.tag_id_list_to_exclude
    .map((tag_id) => {
      return all_user_tag_list.value
        .find((tag) => tag.id === tag_id)
        ?.label;
    });
});

const updateSelectedTagIdListToInclude = (new_tag_id_list) => {
  collection_form_state.tag_id_list_to_include = Array.isArray(new_tag_id_list)
    ? [...new_tag_id_list]
    : [];
};

const updateSelectedTagIdListToExclude = (new_tag_id_list) => {
  collection_form_state.tag_id_list_to_exclude = Array.isArray(new_tag_id_list)
    ? [...new_tag_id_list]
    : [];
};

const collection_type_list = ref(
  COLLECTION_TYPE_LIST.map((value) => ({
    label: t(`t_${value}_collection`),
    value,
  }))
);

const review_strategy_list = ref(
  REVIEW_STRATEGY_LIST.map((value) => ({
    label: t(`t_${value}`),
    value,
  }))
);

const yes_no_list = ref([
  {
    label: t('t_yes'),
    value: true,
  },
  {
    label: t('t_no'),
    value: false,
  },
]);

const and_or_list = ref([
  {
    label: t('t_and'),
    value: 'AND',
  },
  {
    label: t('t_or'),
    value: 'OR',
  },
]);

watch(
  () => collection_form_state.review_strategy,
  (next, prev) => {
    if (next === REVIEW_STRATEGY_SPACED_REPETITION) {
      collection_form_state.track_scores = true;
      return;
    }

    if (next === REVIEW_STRATEGY_DIARY) {
      collection_form_state.track_scores = false;
      return;
    }

    if (
      prev === REVIEW_STRATEGY_SPACED_REPETITION
      || prev === REVIEW_STRATEGY_DIARY
    ) {
      collection_form_state.track_scores = true;
    }
  }
);

const track_scores_disabled = computed(() => {
  return collection_form_state.review_strategy === REVIEW_STRATEGY_SPACED_REPETITION
    || collection_form_state.review_strategy === REVIEW_STRATEGY_DIARY;
});

const buildCollectionTagsAlertSentence = () => {
  const joinTagNameList = (tag_name_list, join_type) => {
    const connector = join_type === 'AND' ? t('t_and') : t('t_or');
    const filtered_name_list = tag_name_list.filter((name) => name);

    if (filtered_name_list.length <= 1) {
      return filtered_name_list.at(0) ?? '';
    }

    if (filtered_name_list.length === 2) {
      return `${filtered_name_list.at(0)} ${connector} ${filtered_name_list.at(1)}`;
    }

    const last_two_name_list = filtered_name_list.slice(-2);
    const first_name_list = filtered_name_list.slice(0, -2);
    const last_two_tags = `${last_two_name_list.at(0)} ${connector} ${last_two_name_list.at(1)}`;

    return `${first_name_list.join(', ')}, ${last_two_tags}`;
  };

  const buildNotesWithTagsPhrase = (tag_name_list, join_type) => {
    const filtered_name_list = tag_name_list.filter((name) => name);
    const tag_count = filtered_name_list.length;

    if (tag_count === 0) {
      return '';
    }

    const notes_with_tags_label = tag_count === 1
      ? t('t_notes_with_tag')
      : t('t_notes_with_tags');

    const tag_names_text = tag_count === 1
      ? filtered_name_list.at(0)
      : joinTagNameList(filtered_name_list, join_type);

    return `${notes_with_tags_label} ${tag_names_text}`;
  };

  const capitalizeFirstLetter = (text) => {
    if (!text) {
      return text;
    }

    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const joinSentenceParts = (sentence_part_list) => {
    if (sentence_part_list.length === 0) {
      return '';
    }

    const first_part = capitalizeFirstLetter(sentence_part_list.at(0));
    const remaining_part_list = sentence_part_list.slice(1);

    if (remaining_part_list.length === 0) {
      return `${first_part}.`;
    }

    return `${first_part}, ${remaining_part_list.join(', ')}.`;
  };

  const include_id_count = collection_form_state.tag_id_list_to_include.length;
  const exclude_id_count = collection_form_state.tag_id_list_to_exclude.length;
  const sentence_part_list = [];

  if (include_id_count === 0) {
    sentence_part_list.push(
      t('t_all_notes_will_be_included').replace(/\.$/, '')
    );
  } else {
    sentence_part_list.push(
      `${buildNotesWithTagsPhrase(
        tag_name_list_to_include.value,
        collection_form_state.inclusion_type
      )} ${t('t_will_be_included')}`
    );
  }

  if (exclude_id_count > 0) {
    const exclusion_notes_phrase = buildNotesWithTagsPhrase(
      tag_name_list_to_exclude.value,
      collection_form_state.exclusion_type
    );

    if (include_id_count === 0) {
      sentence_part_list.push(`${t('t_except')} ${exclusion_notes_phrase}`);
    } else {
      sentence_part_list.push(
        `${t('t_but')} ${exclusion_notes_phrase} ${t('t_will_be_excluded')}`
      );
    }
  }

  return joinSentenceParts(sentence_part_list);
};

const collection_tags_alert_sentence = computed(() => {
  return buildCollectionTagsAlertSentence();
});

const createCollection = async () => {
  handling_request.value = true;

  try {
    await $fetch('/collections/create', {
      method: 'POST',
      body: collection_form_state,
    });

    return navigateTo('/manage-collections/page/1');
  } catch (error) {
    const error_message = error?.data?.error_message;

    handleFrontendError(error, error_message);
  } finally {
    handling_request.value = false;
  }
};
</script>

<template>
  <!-- app/pages/manage-collections/add.vue -->
  <UContainer class="centered-max-width-650">
    <h1 class="center">
      {{ $t('t_add_collection') }}
    </h1>

    <UForm
      class="space-y-4 flex flex-col gap-4"
      :schema="collection_form_schema"
      :state="collection_form_state"
      @input="collection_form_error = ''"
      @submit="createCollection"
    >
      <UFormField
        :label="$t('t_title')"
        name="title"
        required
      >
        <UInput
          v-model="collection_form_state.title"
          :disabled="handling_request"
          class="w-full"
        />
      </UFormField>

      <UFormField
        :label="$t('t_tags_to_include')"
        name="tag_id_list_to_include"
      >
        <section class="border-l-2 border-secondary pl-4">
          <SelectTagsInputElement
            :tag_list="tag_list_for_include"
            :selected_tag_id_list="collection_form_state.tag_id_list_to_include"
            @update:selected_tag_id_list="updateSelectedTagIdListToInclude"
          />

          <UFormField
            v-if="collection_form_state.tag_id_list_to_include.length > 1"
            :label="$t('t_inclusion_type')"
            name="inclusion_type"
          >
            <URadioGroup
              v-model="collection_form_state.inclusion_type"
              :items="and_or_list"
              orientation="horizontal"
            />
          </UFormField>
        </section>
      </UFormField>

      <UFormField
        :label="$t('t_tags_to_exclude')"
        name="tag_id_list_to_exclude"
      >
        <section class="border-l-2 border-secondary pl-4">
          <SelectTagsInputElement
            :tag_list="tag_list_for_exclude"
            :selected_tag_id_list="collection_form_state.tag_id_list_to_exclude"
            @update:selected_tag_id_list="updateSelectedTagIdListToExclude"
          />
          <UFormField
            v-if="collection_form_state.tag_id_list_to_exclude.length > 1"
            :label="$t('t_exclusion_type')"
            name="exclusion_type"
          >
            <URadioGroup
              v-model="collection_form_state.exclusion_type"
              :items="and_or_list"
              orientation="horizontal"
            />
          </UFormField>
        </section>
      </UFormField>

      <UAlert
        color="info"
        variant="subtle"
        icon="i-lucide-info"
      >
        <template #description>
          {{ collection_tags_alert_sentence }}
        </template>
      </UAlert>

      <UFormField
        v-if="user_status === USER_STATUS_ADMIN"
        :label="$t('t_collection_type')"
        name="type"
      >
        <URadioGroup
          v-model="collection_form_state.type"
          :items="collection_type_list"
        />
      </UFormField>

      <UFormField
        v-if="collection_form_state.type === COLLECTION_TYPE_PRIVATE"
        :label="$t('t_review_strategy')"
        name="review_strategy"
      >
        <URadioGroup
          v-model="collection_form_state.review_strategy"
          :items="review_strategy_list"
        />
      </UFormField>

      <UFormField
        v-if="collection_form_state.type === COLLECTION_TYPE_PRIVATE"
        :label="$t('t_track_scores')"
        name="track_scores"
      >
        <URadioGroup
          v-model="collection_form_state.track_scores"
          :disabled="track_scores_disabled"
          :items="yes_no_list"
          orientation="horizontal"
        />
      </UFormField>

      <UFormField
        v-if="collection_form_state.type === COLLECTION_TYPE_PUBLIC_PAYWALLLED"
        :label="$t('t_pre_tax_price_in_cents')"
        name="pre_tax_price_in_cents"
      >
        <UInputNumber
          v-model="collection_form_state.pre_tax_price_in_cents"
          :decrement="{ class: 'cursor-pointer' }"
          :format-options="{
            style: 'currency',
            currency: 'EUR',
            currencyDisplay: 'code',
            currencySign: 'accounting',
          }"
          :increment="{ class: 'cursor-pointer' }"
          :min="5"
        />
      </UFormField>

      <UFormField
        v-if="user_status === USER_STATUS_ADMIN
          && [COLLECTION_TYPE_PUBLIC_FREE, COLLECTION_TYPE_PUBLIC_PAYWALLLED]
            .includes(collection_form_state.type)"
        :label="`${$t('t_description')} (HTML)`"
        name="description"
      >
        <UTextarea
          v-model="collection_form_state.description"
          autoresize
          class="w-full"
          :rows="2"
        />
      </UFormField>

      <UAlert
        v-if="collection_form_error"
        color="error"
        :description="collection_form_error"
        icon="i-lucide-info"
      />

      <hr class="separator-1">

      <nav class="flex-ce-ce-gap-2">
        <UButton
          class="cursor-pointer"
          color="neutral"
          variant="outline"
          to="/manage-collections/page/1"
        >
          {{ $t('t_cancel') }}
        </UButton>

        <UButton
          class="cursor-pointer"
          :disabled="handling_request"
          :loading="handling_request"
          type="submit"
          variant="solid"
        >
          {{ $t('t_save') }}
        </UButton>
      </nav>
    </UForm>
  </UContainer>
</template>
