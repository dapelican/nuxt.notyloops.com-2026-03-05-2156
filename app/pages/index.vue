<script setup>
import { PREMIUM_ACCESS_PRE_TAX_AMOUNT_IN_CENTS } from '#shared/utils/constants.js';

const { locale, t } = useI18n();
const request_url = useRequestURL();

let meta_description = '';

if (locale.value === 'fr') {
  meta_description = 'L\'application pour créer des notes et les revoir en utilisant la répétition espacée, le hasard ou une autre stratégie.';
}

const premium_price_amount = PREMIUM_ACCESS_PRE_TAX_AMOUNT_IN_CENTS / 100;
const price_currency = locale.value === 'fr' ? 'EUR' : 'USD';

usePageSchema({
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
          'name': t('t_premium_plan'),
          'price': String(premium_price_amount),
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
  title: `${t('t_the_notes_made_to_be_reviewed')} | NotyLoops`,
  description: meta_description,
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
          class="text-primary"
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
        {{ $t('t_feature_3_description') }}
      </p>
    </section>

    <hr class="separator-2">

    <hr class="separator-2">

    <nav class="flex justify-center">
      <!-- <UButton
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
