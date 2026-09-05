<script setup>
const { t } = useI18n();
const { loggedIn: logged_in } = useUserSession();

const meta_description = 'Contactez-nous pour toute question ou suggestion.';

useSeoMeta({
  title: `${t('t_contact')} | NotyLoops`,
  description: meta_description,
});

const contact_email = computed(() =>
  logged_in.value ? 'support@notyloops.com' : 'contact@notyloops.com'
);

// useGoogleTag();
</script>

<template>
  <UContainer class="max-w-md">
    <h1 class="center mb-8">
      {{ $t('t_contact_us') }}
    </h1>

    <p>
      {{ $t('t_contact_us_description') }}
    </p>

    <p class="mt-4">
      <a :href="`mailto:${contact_email}`">
        {{ contact_email }}
      </a>
    </p>
  </UContainer>
</template>
