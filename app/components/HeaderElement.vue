<script setup>
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap',
    },
  ],
});

const {
  loggedIn: logged_in,
  clear,
} = useUserSession();

const { locale } = useI18n();

const route = useRoute();

const logOut = async () => {
  await $fetch('/a/log-out', { method: 'POST' });
  await clear();
  navigateTo('/a/log-in');
};

const public_items = computed(() => [
  {
    active: route.path === '/',
    label: $t('t_homepage'),
    to: '/',
  },
  {
    active: route.path === '/pricing',
    label: $t('t_pricing'),
    to: locale.value === 'fr' ? '/prix' : '/pricing',
  },
  {
    active: route.path.startsWith('/a/log-in'),
    label: $t('t_log_in'),
    to: '/a/log-in',
  },
  {
    active: route.path.startsWith('/a/join-waiting-list'),
    label: $t('t_join_waiting_list'),
    to: '/a/join-waiting-list',
  },
  // {
  //   active: route.path.startsWith('/a/sign-up-1'),
  //   label: $t('t_sign_up'),
  //   to: '/a/sign-up-1',
  // },
]);

const private_items = computed(() => [
  {
    active: route.path.startsWith('/manage-notes/page'),
    label: $t('t_manage_notes'),
    to: CONNECTED_USER_LANDING_PAGE,
  },
  {
    active: route.path.startsWith('/manage-tags/page'),
    label: $t('t_manage_tags'),
    to: '/manage-tags/page/1',
  },
  {
    active: route.path.startsWith('/manage-collections/page'),
    label: $t('t_manage_collections'),
    to: '/manage-collections/page/1',
  },
  // {
  //   active: route.path.startsWith('/pc'),
  //   label: $t('t_library'),
  //   to: '/pc',
  // },
  // {
  //   active: route.path.startsWith('/review'),
  //   label: $t('t_review'),
  //   to: '/review',
  // },
  // {
  //   active: route.path.startsWith('/share'),
  //   label: $t('t_share'),
  //   to: '/share',
  // },
  {
    label: $t('t_my_account'),
    active: route.path.startsWith('/account'),
    children: [
      {
        active: route.path.startsWith('/account/information'),
        label: $t('t_my_information'),
        to: '/account/information',
      },
      {
        active: route.path.startsWith('/account/information'),
        class: 'cursor-pointer text-warning',
        label: $t('t_log_out'),
        onSelect: logOut,
      },
    ],
  },
]);
</script>

<template>
  <!-- HeaderElement.vue -->
  <UHeader toggle-side="left">
    <template #title>
      <span class="header-element-title-font">NotyLoops</span>
    </template>

    <UNavigationMenu
      v-if="!logged_in"
      :items="public_items"
    />

    <UNavigationMenu
      v-else
      content-orientation="vertical"
      :items="private_items"
    />

    <template #right>
      <section class="flex items-center gap-4">
        <UColorModeButton class="cursor-pointer" />

        <!-- <LanguageSelectorElement /> -->
      </section>
    </template>

    <template #body>
      <UNavigationMenu
        v-if="!logged_in"
        :items="public_items"
        orientation="vertical"
      />

      <UNavigationMenu
        v-else
        :items="private_items"
        orientation="vertical"
      />
    </template>
  </UHeader>
</template>

<style scoped>
.header-element-title-font {
  font-family: 'Permanent Marker', cursive;
  font-size: 1.7rem;
}
</style>
