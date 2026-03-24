<script setup>
import * as z from 'zod';

definePageMeta({ middleware: 'auth' });

const { t } = useI18n();

useSeoMeta({
  title: `${t('t_edit_collection')} | NotyLoops`,
});

const route = useRoute();

const collection_id = route.params.collection_id;

const page_number = route.query.page_number ?? '1';

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

const handling_request_1 = ref(true);

const {
  data: collection_data,
  error: collection_error,
} = await useFetch(`/collections/${collection_id}`);

if (collection_error.value) {
  handleFrontendError(null, collection_error.value.data?.error_message);
}

const collection_form_state = reactive({
  title: '',
  tag_id_list_to_include: [],
  tag_id_list_to_exclude: [],
  type: COLLECTION_TYPE_PRIVATE,
  review_strategy: '',
  track_scores: true,
  description: '',
  price_without_tax: 0,
  inclusion_type: 'AND',
  exclusion_type: 'OR',
});

if (collection_data.value) {
  const c = collection_data.value;

  collection_form_state.title = c.title;
  collection_form_state.tag_id_list_to_include = c.tag_id_list_to_include;
  collection_form_state.tag_id_list_to_exclude = c.tag_id_list_to_exclude;
  collection_form_state.type = c.type;
  collection_form_state.review_strategy = c.review_strategy;
  collection_form_state.track_scores = c.review_strategy === REVIEW_STRATEGY_SPACED_REPETITION
    ? true
    : c.review_strategy === REVIEW_STRATEGY_DIARY
      ? false
      : c.track_scores;
  collection_form_state.description = c.description;
  collection_form_state.price_without_tax = c.price_without_tax;
  collection_form_state.inclusion_type = c.inclusion_type ?? 'AND';
  collection_form_state.exclusion_type = c.exclusion_type ?? 'OR';
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

handling_request_1.value = false;

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
    label: t(`t_${value}`),
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

const handling_request_2 = ref(false);

const updateCollection = async () => {
  handling_request_2.value = true;

  try {
    await $fetch('/collections/update', {
      method: 'PATCH',
      body: {
        id: collection_id,
        title: collection_form_state.title,
        tag_id_list_to_include: collection_form_state.tag_id_list_to_include,
        tag_id_list_to_exclude: collection_form_state.tag_id_list_to_exclude,
        inclusion_type: collection_form_state.inclusion_type,
        exclusion_type: collection_form_state.exclusion_type,
        type: collection_form_state.type,
        review_strategy: collection_form_state.review_strategy,
        track_scores: collection_form_state.track_scores,
        description: collection_form_state.description,
        price_without_tax: collection_form_state.price_without_tax,
      },
    });

    return navigateTo(`/manage-collections/page/${page_number}`);
  } catch (error) {
    const error_message = error?.data?.error_message;

    handleFrontendError(error, error_message);
  } finally {
    handling_request_2.value = false;
  }
};
</script>

<template>
  <UContainer class="centered-max-width-650">
    <LoadingElement v-if="handling_request_1" />

    <template v-if="!handling_request_1">
      <h1 class="center">
        {{ $t('t_edit_collection') }}
      </h1>

      <UForm
        class="space-y-4"
        :schema="collection_form_schema"
        :state="collection_form_state"
        @input="collection_form_error = ''"
        @submit="updateCollection"
      >
        <UFormField
          :label="$t('t_title')"
          name="title"
          required
        >
          <UInput
            v-model="collection_form_state.title"
            :disabled="handling_request_2"
            class="w-full"
          />
        </UFormField>

        <UFormField
          :label="$t('t_tags_to_include')"
          name="tag_id_list_to_include"
        >
          <SelectTagsInputElement
            :tag_list="tag_list_for_include"
            :selected_tag_id_list="collection_form_state.tag_id_list_to_include"
            @update:selected_tag_id_list="updateSelectedTagIdListToInclude"
          />
        </UFormField>

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

        <UAlert
          color="info"
          variant="subtle"
          icon="i-lucide-info"
        >
          <template #description>
            <span v-if="collection_form_state.tag_id_list_to_include.length === 0">
              {{ $t('t_all_notes_will_be_included') }}
            </span>

            <span v-if="collection_form_state.tag_id_list_to_include.length === 1">
              {{ $t('t_notes_with_tag') }}
              {{ tag_name_list_to_include.at(0) }}
              {{ $t('t_will_be_included') }}
            </span>

            <span
              v-if="collection_form_state.tag_id_list_to_include.length > 1
                && collection_form_state.inclusion_type === 'AND'"
            >
              {{ $t('t_notes_with_tag') }}
              {{ tag_name_list_to_include.join(` ${$t('t_and')} `) }}
              {{ $t('t_will_be_included') }}
            </span>

            <span
              v-if="collection_form_state.tag_id_list_to_include.length > 1
                && collection_form_state.inclusion_type === 'OR'"
            >
              {{ $t('t_notes_with_tag') }}
              {{ tag_name_list_to_include.join(` ${$t('t_or')} `) }}
              {{ $t('t_will_be_included') }}
            </span>
          </template>
        </UAlert>

        <UFormField
          :label="$t('t_tags_to_exclude')"
          name="tag_id_list_to_exclude"
        >
          <SelectTagsInputElement
            :tag_list="tag_list_for_exclude"
            :selected_tag_id_list="collection_form_state.tag_id_list_to_exclude"
            @update:selected_tag_id_list="updateSelectedTagIdListToExclude"
          />
        </UFormField>

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

        <UAlert
          v-if="collection_form_state.tag_id_list_to_exclude.length > 0"
          color="info"
          variant="subtle"
          icon="i-lucide-info"
        >
          <template #description>
            <span v-if="collection_form_state.tag_id_list_to_exclude.length === 1">
              {{ $t('t_notes_with_tag') }}
              {{ tag_name_list_to_exclude.at(0) }}
              {{ $t('t_will_be_excluded') }}
            </span>

            <span
              v-if="collection_form_state.tag_id_list_to_exclude.length > 1
                && collection_form_state.exclusion_type === 'AND'"
            >
              {{ $t('t_notes_with_tag') }}
              {{ tag_name_list_to_exclude.join(` ${$t('t_and')} `) }}
              {{ $t('t_will_be_excluded') }}
            </span>

            <span
              v-if="collection_form_state.tag_id_list_to_exclude.length > 1
                && collection_form_state.exclusion_type === 'OR'"
            >
              {{ $t('t_notes_with_tag') }}
              {{ tag_name_list_to_exclude.join(` ${$t('t_or')} `) }}
              {{ $t('t_will_be_excluded') }}
            </span>
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
          :label="$t('t_price_without_tax')"
          name="price_without_tax"
        >
          <UInputNumber
            v-model="collection_form_state.price_without_tax"
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
          v-if="user_status === USER_STATUS_ADMIN"
          :label="$t('t_description')"
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
            :to="`/manage-collections/page/${page_number}`"
          >
            {{ $t('t_cancel') }}
          </UButton>

          <UButton
            class="cursor-pointer"
            :disabled="handling_request_2"
            :loading="handling_request_2"
            type="submit"
            variant="solid"
          >
            {{ $t('t_save') }}
          </UButton>
        </nav>
      </UForm>
    </template>
  </UContainer>
</template>
