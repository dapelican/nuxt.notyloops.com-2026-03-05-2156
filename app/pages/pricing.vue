<script setup>
import { PREMIUM_ACCESS_PRE_TAX_AMOUNT_IN_CENTS } from '#shared/utils/constants.js';

const { locale, t } = useI18n();
const request_url = useRequestURL();

const meta_description = 'Compare NotyLoops free and premium plans for spaced repetition note-taking.';

const premium_price_amount = PREMIUM_ACCESS_PRE_TAX_AMOUNT_IN_CENTS / 100;
const price_currency = locale.value === 'fr' ? 'EUR' : 'USD';

useSchema({
  name: t('t_pricing'),
  description: meta_description,
  graph: [
    {
      '@type': 'WebApplication',
      '@id': `${request_url.origin}/#webapp`,
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
  title: `${t('t_pricing')} | NotyLoops`,
  description: meta_description,
});

const premium_price = computed(() => {
  if (locale.value === 'fr') {
    return `${premium_price_amount} €`;
  }
  return `$ ${premium_price_amount}`;
});
</script>

<template>
  <!-- app/pages/pricing.vue -->
  <UContainer>
    <div class="center">
      <h1 class="center">
        {{ $t('t_pricing') }}
      </h1>

      <hr class="separator-2">

      <section class="pricing">
        <div class="pricing-unit">
          <h3>
            {{ $t('t_free_plan') }}
          </h3>

          <ul class="no-bullets">
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-x"
                class="size-5 shrink-0 text-error"
              />
              <span>{{ $t('t_free_plan_1', { note_count: FREEMIUM_NOTE_LIMIT }) }}</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-x"
                class="size-5 shrink-0 text-error"
              />
              <span>{{ $t('t_free_plan_2', { note_count: FREEMIUM_NOTE_LIMIT }) }}</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-primary"
              />
              <span>{{ $t('t_free_plan_3') }}</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-x"
                class="size-5 shrink-0 text-error"
              />
              <span>{{ $t('t_free_plan_4') }}</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-x"
                class="size-5 shrink-0 text-error"
              />
              <span>{{ $t('t_free_plan_5') }}</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-x"
                class="size-5 shrink-0 text-error"
              />
              <span>{{ $t('t_free_plan_6') }}</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-x"
                class="size-5 shrink-0 text-error"
              />
              <span>{{ $t('t_free_plan_7') }}</span>
            </li>
            <!-- <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-primary"
              />
              <span>{{ $t('t_free_plan_8') }}</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-x"
                class="size-5 shrink-0 text-error"
              />
              <span>{{ $t('t_free_plan_9') }}</span>
            </li> -->
          </ul>

          <hr class="separator-1">

          <h3 class="center">
            {{ $t('t_free_price') }}
          </h3>
        </div>

        <div class="pricing-unit">
          <h3>
            {{ $t('t_premium_plan') }}
          </h3>

          <ul class="no-bullets">
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-primary"
              />
              <span>{{ $t('t_premium_plan_1') }}</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-primary"
              />
              <span>{{ $t('t_premium_plan_2') }}</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-primary"
              />
              <span>{{ $t('t_premium_plan_3') }}</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-primary"
              />
              <span>{{ $t('t_premium_plan_4') }}</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-primary"
              />
              <span>{{ $t('t_premium_plan_5') }}</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-primary"
              />
              <span>{{ $t('t_premium_plan_6') }}</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-primary"
              />
              <span>{{ $t('t_premium_plan_7') }}</span>
            </li>
            <!-- <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-primary"
              />
              <span>{{ $t('t_premium_plan_8') }}</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-primary"
              />
              <span>{{ $t('t_premium_plan_9') }}</span>
            </li> -->
          </ul>

          <hr class="separator-1">

          <h3 class="numbers">
            <span>
              {{ premium_price }}
            </span>
          </h3>
        </div>
      </section>
    </div>

    <hr class="separator-2">

    <nav class="flex justify-center">
      <!-- <UButton
        :to="'/a/sign-up-1'"
      >
        <span>{{ $t('t_sign_up_for_free') }}</span>
      </UButton> -->

      <UButton
        :to="'/a/join-waiting-list'"
      >
        <span>{{ $t('t_join_waiting_list') }}</span>
      </UButton>
    </nav>

    <hr class="separator-2">
  </UContainer>
</template>

<style scoped>
.pricing {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.pricing-unit {
  text-align: left;
  width: fit-content;
}

.no-bullets {
  list-style: none;
  padding: 0;
  margin: 0;
}

.no-bullets li {
  padding-left: 0;
  margin-left: 0;
}

.numbers {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.strikethrough {
  text-decoration: line-through;
}
</style>
