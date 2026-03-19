<template>
  <UApp>
    <HeaderElement />

    <UMain class="page">
      <NuxtPage :key="$route.fullPath" />
    </UMain>

    <FooterElement />
  </UApp>
</template>

<style scoped>
.page {
  margin-top: 1rem;
}
</style>
