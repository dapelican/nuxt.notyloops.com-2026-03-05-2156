<script setup>
import * as z from 'zod';

definePageMeta({ middleware: 'auth' });

const { t } = useI18n();

useSeoMeta({
  title: `${t('t_add_collection')} | OptiLeague`,
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

const handling_request = ref(false);

const collection_form_state = reactive({
  title: '',
  tag_id_list_to_include: [],
  tag_id_list_to_exclude: [],
  type: 'private',
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

const collection_type_list = ref([
  {
    label: t('t_private'),
    value: 'private',
  },
  {
    label: t('t_public'),
    value: 'public',
  },
]);

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
  <UContainer class="centered-max-width-650">
    <h1 class="center">
      {{ $t('t_add_collection') }}
    </h1>

    <UForm
      class="space-y-4"
      :schema="collection_form_schema"
      :state="collection_form_state"
      @input="collection_form_error = ''"
      @submit="createCollection"
    >
      <UFormField
        :label="$t('t_title')"
        name="title"
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
        <SelectTagsInputElement
          :tag_list="tag_list_for_include"
          :selected_tag_id_list="collection_form_state.tag_id_list_to_include"
          @update:selected_tag_id_list="updateSelectedTagIdListToInclude"
        />
      </UFormField>

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
        :label="$t('t_collection_type')"
        name="type"
      >
        <URadioGroup
          v-model="collection_form_state.type"
          :items="collection_type_list"
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
        <NuxtLink
          :to="'/manage-collections/page/1'"
        >
          {{ $t('t_cancel') }}
        </NuxtLink>

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
