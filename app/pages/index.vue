<script setup>
const { t } = useI18n();

useSeoMeta({
  title: `${t('t_the_notes_made_to_be_reviewed')} | NotyLoops`,
});
</script>

<template>
  <UContainer>
    <h1 class="center">
      {{ $t('t_the_notes_made_to_be_reviewed') }}
    </h1>

    <hr class="separator-2">

    <section class="centered-max-width-650">
      <h2 class="flex items-center gap-4">
        <UIcon
          name="i-lucide-notebook-pen"
          class="text-success"
        />
        <span>
          1. {{ $t('t_feature_1_title') }}
        </span>
      </h2>

      <p>
        {{ $t('t_feature_1_description') }}
      </p>
    </section>

    <hr class="separator-2">

    <section class="centered-max-width-650">
      <h2 class="flex items-center gap-4">
        <UIcon
          name="i-lucide-tags"
          class="text-success"
        />
        <span>
          2. {{ $t('t_feature_2_title') }}
        </span>
      </h2>

      <p>
        {{ $t('t_feature_2_description') }}
      </p>
    </section>

    <hr class="separator-2">

    <section class="centered-max-width-650">
      <h2 class="flex items-center gap-4">
        <UIcon
          name="i-lucide-recycle"
          class="text-success"
        />
        <span>
          3. {{ $t('t_feature_3_title') }}
        </span>
      </h2>

      <p>
        {{ $t('t_feature_3_description') }}
      </p>
    </section>

    <hr class="separator-2">

    <hr class="separator-2">

    <nav class="flex justify-center">
      <!-- <UButton
        class="cursor-pointer hover:text-inverted!"
        :to="'/a/sign-up-1'"
      >
        <span>{{ $t('t_sign_up_for_free') }}</span>
      </UButton> -->

      <UButton
        class="cursor-pointer hover:text-inverted!"
        :to="'/a/join-waiting-list'"
      >
        <span>{{ $t('t_join_waiting_list') }}</span>
      </UButton>
    </nav>

    <hr class="separator-2">
  </UContainer>
</template>
