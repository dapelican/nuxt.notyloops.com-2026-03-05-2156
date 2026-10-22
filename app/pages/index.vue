<script setup>
const { locale, t } = useI18n();
const request_url = useRequestURL();

let meta_description = '';

if (locale.value === 'fr') {
  meta_description = 'L\'application pour créer des notes et les revoir en utilisant la répétition espacée, le hasard ou une autre stratégie.';
}

const price_currency = locale.value === 'fr' ? 'EUR' : 'USD';
const monthly_premium_price_amount = PREMIUM.MONTHLY[price_currency].amount;
const yearly_premium_price_amount = PREMIUM.YEARLY[price_currency].amount;

useSchema({
  name: t('t_the_notes_made_to_be_reviewed'),
  description: meta_description,
  graph: [
    {
      '@type': 'WebApplication',
      '@id': `${request_url.origin}/#webapp`,
      'description': meta_description,
      'offers': [
        {
          '@type': 'Offer',
          'name': t('t_free_plan'),
          'price': '0',
          'priceCurrency': price_currency,
          'url': `${request_url.origin}${request_url.pathname}`,
          'availability': 'https://schema.org/OnlineOnly',
        },
        {
          '@type': 'Offer',
          'name': t('t_premium_monthly_plan'),
          'price': String(monthly_premium_price_amount),
          'priceCurrency': price_currency,
          'url': `${request_url.origin}${request_url.pathname}`,
          'availability': 'https://schema.org/OnlineOnly',
          'eligibleDuration': {
            '@type': 'QuantitativeValue',
            'value': 1,
            'unitCode': 'MON',
          },
        },
        {
          '@type': 'Offer',
          'name': t('t_premium_yearly_plan'),
          'price': String(yearly_premium_price_amount),
          'priceCurrency': price_currency,
          'url': `${request_url.origin}${request_url.pathname}`,
          'availability': 'https://schema.org/OnlineOnly',
          'eligibleDuration': {
            '@type': 'QuantitativeValue',
            'value': 1,
            'unitCode': 'ANN',
          },
        },
      ],
    },
  ],
});

useSeoMeta({
  title: `${t('t_the_notes_made_to_be_reviewed')} | ${WEBSITE_NAME}`,
  description: meta_description,
});

// useGoogleTag();
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
          class="text-primary"
        />
        <span>
          1. {{ $t('t_feature_1_title') }}
        </span>
      </h2>

      <p>
        {{ $t('t_feature_1_description_a') }}
        (<NuxtLink
          to="/ressources/langues-synthese-vocale"
          class="text-primary"
        >
          {{ $t('t_feature_1_description_b') }}
        </NuxtLink>).
      </p>
    </section>

    <hr class="separator-2">

    <section class="centered-max-width-650">
      <h2 class="flex items-center gap-4">
        <UIcon
          name="i-lucide-tags"
          class="text-primary"
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
          class="text-primary"
        />
        <span>
          3. {{ $t('t_feature_3_title') }}
        </span>
      </h2>

      <p>
        {{ $t('t_feature_3_description_a') }}
        <NuxtLink
          to="/ressources/strategies-de-revision"
          class="text-primary"
        >
          {{ $t('t_feature_3_description_b') }}
        </NuxtLink>,
        {{ $t('t_feature_3_description_c') }}
      </p>

      <hr class="separator-2">

      <nav class="flex justify-center">
        <UButton
          :to="'/a/sign-up-1'"
        >
          <span>{{ $t('t_sign_up_for_free') }}</span>
        </UButton>
      </nav>

      <hr class="separator-2">

      <h2>
        Démo
      </h2>

      <iframe
        class="responsive-video"
        src="https://www.youtube-nocookie.com/embed/Tc8m9kj2YWE?rel=0&showinfo=0"
        title="Créer et revoir des flashcards sur NotyLoops"
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        loading="lazy"
      />

      <hr class="separator-2">
    </section>
  </UContainer>
</template>

<style scoped>
.responsive-video {
  aspect-ratio: 16 / 9;
  margin-top: 1rem;
  width: 100%;
}
</style>
