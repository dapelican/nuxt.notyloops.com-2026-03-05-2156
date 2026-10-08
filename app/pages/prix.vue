<script setup>
import { PREMIUM_ACCESS_PRE_TAX_AMOUNT_IN_CENTS } from '#shared/utils/constants.js';

const { locale, t } = useI18n();

const meta_description = 'Les 2 offres pour utiliser NotyLoops : ofrre gratuite limitée ou offre payante illimitée.';

useSeoMeta({
  title: `${t('t_pricing')} | NotyLoops`,
  description: meta_description,
});

const premium_price = computed(() => {
  const price = PREMIUM_ACCESS_PRE_TAX_AMOUNT_IN_CENTS / 100;

  if (locale.value === 'fr') {
    return `${price} €`;
  }
  return `$ ${price}`;
});

const monthly_premium_price = computed(() => {
  const price = PREMIUM_ACCESS_PRE_TAX_AMOUNT_IN_CENTS / 100 / 12;

  if (locale.value === 'fr') {
    return `${price} €`;
  }
  return `$ ${price}`;
});

// useGoogleTag();
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
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-primary"
              />
              <span>{{ $t('t_comparison_text_free') }}</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-x"
                class="size-5 shrink-0 text-error"
              />
              <span>{{ $t('t_comparison_images_free') }}</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-x"
                class="size-5 shrink-0 text-error"
              />
              <span>{{ $t('t_comparison_audio_free') }}</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-x"
                class="size-5 shrink-0 text-error"
              />
              <span>{{ $t('t_comparison_tts_free') }}</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-x"
                class="size-5 shrink-0 text-error"
              />
              <span>{{ $t('t_comparison_notes_free', { note_count: FREEMIUM_NOTE_LIMIT }) }}</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-primary"
              />
              <span>{{ $t('t_comparison_reviews') }}</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-primary"
              />
              <span>{{ $t('t_comparison_no_distraction') }}</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-primary"
              />
              <ULink
                to="/ressources/strategies-de-revision"
                class="text-primary"
              >
                {{ $t('t_comparison_strategies') }}
              </ULink>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-x"
                class="size-5 shrink-0 text-error"
              />
              <span>{{ $t('t_comparison_csv_import_free') }}</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-primary"
              />
              <span>{{ $t('t_comparison_public_notes') }}</span>
            </li>
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
              <span>{{ $t('t_comparison_text_premium') }}</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-primary"
              />
              <span>{{ $t('t_comparison_images_premium') }}</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-primary"
              />
              <span>{{ $t('t_comparison_audio_premium') }}</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-primary"
              />
              <ULink
                to="/ressources/langues-synthese-vocale"
                class="text-primary"
              >
                {{ $t('t_comparison_tts_premium') }}
              </ULink>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-primary"
              />
              <span>{{ $t('t_comparison_notes_premium') }}</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-primary"
              />
              <span>{{ $t('t_comparison_reviews') }}</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-primary"
              />
              <span>{{ $t('t_comparison_no_distraction') }}</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-primary"
              />
              <ULink
                to="/ressources/strategies-de-revision"
                class="text-primary"
              >
                {{ $t('t_comparison_strategies') }}
              </ULink>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-primary"
              />
              <span>{{ $t('t_comparison_csv_import_premium') }}</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-primary"
              />
              <span>{{ $t('t_comparison_public_notes') }}</span>
            </li>
          </ul>

          <hr class="separator-1">

          <h3 class="numbers">
            <span>
              {{ premium_price }}
            </span>
          </h3>

          <p class="center">
            ({{ monthly_premium_price }} {{ $t('t_per_month') }})
          </p>
        </div>
      </section>
    </div>

    <hr class="separator-2">

    <nav class="flex justify-center">
      <UButton
        :to="'/a/sign-up-1'"
      >
        <span>{{ $t('t_sign_up_for_free') }}</span>
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
