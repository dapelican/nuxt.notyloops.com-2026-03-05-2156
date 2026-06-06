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
      {{ $t('t_library') }}
    </h1>

    <!-- production library -->

    <ul class="mt-4">
      <li>
        <ULink
          class="text-primary"
          to="/pc/019e9c1d-a281-720b-857f-608257e5060b"
        >Drapeaux des pays d'Afrique</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/pc/019e9c1d-e17e-7b8c-8cf5-b53e6c68f9eb"
        >Drapeaux des pays d'Amérique du Nord</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/pc/019e9c1e-14d5-7fa5-ba99-6d3f87bc8d73"
        >Drapeaux des pays d'Amérique du Sud</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/pc/019e9c1e-4acd-7882-aa3e-f05ce60efa4e"
        >Drapeaux des pays d'Asie</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/pc/019e9c1e-786c-7ca3-93ff-b53f581fe3a8"
        >Drapeaux des pays d'Europe</ULink>
      </li>
      <li>
        <ULink
          class="text-primary"
          to="/pc/019e9c1e-ac16-740b-b855-8cfe5a7c8771"
        >Drapeaux des pays d'Océanie</ULink>
      </li>
      <li class="flex items-center gap-2">
        <ULink
          class="text-primary"
          to="/pc/019e93c8-3397-7121-995f-378c3100fa2c"
        >JavaScript quiz: browser side</ULink>
        <span>(en anglais)</span>
      </li>
      <li class="flex items-center gap-2">
        <ULink
          class="text-primary"
          to="/pc/019e9c1c-09ba-75a0-be19-31f894ec3245"
        >JavaScript quiz: server side</ULink>
        <span>(en anglais)</span>
      </li>
      <li class="flex items-center gap-2">
        <ULink
          class="text-primary"
          to="/pc/019e9c17-5004-71c7-bbf9-bbc5e4af79ed"
        >Le secret au quotidien, de Rhonda Byrnes</ULink>
        <span>({{ $t('t_paid') }})</span>
      </li>
    </ul>

    <!-- local library -->

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
