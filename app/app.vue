<template>
  <UApp>
    <div class="flex min-h-dvh flex-col">
      <HeaderElement />

      <UMain class="page">
        <NuxtPage />
      </UMain>

      <FooterElement />
    </div>
  </UApp>
</template>

<style scoped>
.page {
  margin-top: 1rem;
}
</style>
