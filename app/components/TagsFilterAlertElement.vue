<script setup>
const props = defineProps({
  tag_id_list_to_include: {
    type: Array,
    default: () => [],
  },
  tag_id_list_to_exclude: {
    type: Array,
    default: () => [],
  },
  all_user_tag_list: {
    type: Array,
    default: () => [],
  },
  inclusion_type: {
    type: String,
    default: 'AND',
  },
  exclusion_type: {
    type: String,
    default: 'OR',
  },
});

const { t } = useI18n();

const tag_name_list_to_include = computed(() => {
  return props.tag_id_list_to_include
    .map((tag_id) => {
      return props.all_user_tag_list
        .find((tag) => tag.id === tag_id)
        ?.label;
    });
});

const tag_name_list_to_exclude = computed(() => {
  return props.tag_id_list_to_exclude
    .map((tag_id) => {
      return props.all_user_tag_list
        .find((tag) => tag.id === tag_id)
        ?.label;
    });
});

const buildTagsAlertSentence = () => {
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

  const include_id_count = props.tag_id_list_to_include.length;
  const exclude_id_count = props.tag_id_list_to_exclude.length;
  const sentence_part_list = [];

  if (include_id_count === 0) {
    sentence_part_list.push(
      t('t_all_notes_will_be_included').replace(/\.$/, '')
    );
  } else {
    sentence_part_list.push(
      `${buildNotesWithTagsPhrase(
        tag_name_list_to_include.value,
        props.inclusion_type
      )} ${t('t_will_be_included')}`
    );
  }

  if (exclude_id_count > 0) {
    const exclusion_notes_phrase = buildNotesWithTagsPhrase(
      tag_name_list_to_exclude.value,
      props.exclusion_type
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

const tags_alert_sentence = computed(() => {
  return buildTagsAlertSentence();
});

const sentence_part_list = computed(() => {
  const tag_label_list = [
    ...tag_name_list_to_include.value,
    ...tag_name_list_to_exclude.value,
  ].filter((tag_label) => tag_label);
  const unique_tag_label_list = [...new Set(tag_label_list)]
    .sort((first_label, second_label) => second_label.length - first_label.length);

  if (unique_tag_label_list.length === 0) {
    return [{
      text: tags_alert_sentence.value,
      is_tag_label: false,
    }];
  }

  const escaped_tag_label_list = unique_tag_label_list.map((tag_label) => {
    return tag_label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  });
  const tag_label_pattern = new RegExp(`(${escaped_tag_label_list.join('|')})`, 'g');
  const tag_label_set = new Set(unique_tag_label_list);

  return tags_alert_sentence.value
    .split(tag_label_pattern)
    .filter((text) => text)
    .map((text) => ({
      text,
      is_tag_label: tag_label_set.has(text),
    }));
});
</script>

<template>
  <UAlert
    color="info"
    variant="subtle"
    icon="i-lucide-info"
  >
    <template #description>
      <span
        v-for="(sentence_part, sentence_part_index) in sentence_part_list"
        :key="sentence_part_index"
        :class="{ underline: sentence_part.is_tag_label }"
      >{{ sentence_part.text }}</span>
    </template>
  </UAlert>
</template>
