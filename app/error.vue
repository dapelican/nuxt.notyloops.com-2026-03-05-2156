<script setup>
const props = defineProps({
  error: {
    type: Object,
    required: true,
  },
});

const { locale, locales, t } = useI18n();

const current_language = computed(() => (
  locales.value.find((item) => item.code === locale.value)?.language || locale.value
));

useHead(() => ({
  htmlAttrs: {
    lang: current_language.value,
  },
}));

const status_code = computed(() => {
  const code = Number(props.error?.statusCode ?? props.error?.status);

  return Number.isFinite(code) ? code : 500;
});

const is_not_found = computed(() => status_code.value === 404);

const page_title = computed(() => (
  is_not_found.value ? t('t_page_not_found') : t('t_unexpected_error')
));

useSeoMeta({
  title: computed(() => `${page_title.value} | ${WEBSITE_NAME}`),
});

const clear_button = computed(() => ({
  label: t('t_back_to_home'),
}));

const not_found_error = computed(() => ({
  message: t('t_page_not_found_message'),
  statusCode: 404,
  statusMessage: t('t_page_not_found'),
}));

const fallback_error = computed(() => ({
  message: t('t_unexpected_error_message'),
  statusCode: status_code.value,
  statusMessage: t('t_unexpected_error'),
}));
</script>

<template>
  <UApp>
    <div>
      <HeaderElement />

      <UMain class="mt-4">
        <UError
          v-if="is_not_found"
          :as="{ root: 'div' }"
          :clear="clear_button"
          :error="not_found_error"
          icon="i-lucide-file-x"
          redirect="/"
        />

        <UError
          v-else
          :as="{ root: 'div' }"
          :clear="clear_button"
          :error="fallback_error"
          redirect="/"
        />
      </UMain>

      <FooterElement />
    </div>
  </UApp>
</template>
