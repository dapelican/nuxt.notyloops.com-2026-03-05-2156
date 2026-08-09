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

useHead({
  script: [
    {
      textContent: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K3HP9GQ2');`,
    },
  ],
  noscript: [
    {
      innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K3HP9GQ2"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      tagPosition: 'bodyOpen',
    },
  ],
});
</script>

<template>
  <UContainer class="centered-max-width-650">
    <h1 class="center">
      {{ $t('t_contact_us') }}
    </h1>

    <p class="center">
      <a :href="`mailto:${contact_email}`">
        {{ contact_email }}
      </a>
    </p>
  </UContainer>
</template>
