<script setup>
const { locale } = useI18n();
</script>

<template>
  <!-- app/pages/pc/index.vue -->
  <UContainer
    v-if="locale === 'fr'"
    class="ml-auto mr-auto max-w-xl"
  >
    <h1 class="text-center">
      Bibliothèque
    </h1>

    <ul class="mt-4">
      <li>
        <ULink
          class="text-primary"
          to="/pc/40000000-0000-4000-8000-000000000001"
        >Drapeaux des pays d'Afrique</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/pc/40000000-0000-4000-8000-000000000002"
        >Drapeaux des pays d'Amérique du Nord</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/pc/40000000-0000-4000-8000-000000000003"
        >Drapeaux des pays d'Amérique du Sud</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/pc/40000000-0000-4000-8000-000000000004"
        >Drapeaux des pays d'Asie (Payant)</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/pc/40000000-0000-4000-8000-000000000005"
        >Drapeaux des pays d'Europe</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/pc/40000000-0000-4000-8000-000000000006"
        >Drapeaux des pays d'Océanie</ULink>
      </li>
    </ul>
  </UContainer>
</template>
