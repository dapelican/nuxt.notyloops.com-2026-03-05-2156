<script setup>
const { t } = useI18n();
const { currency } = useCurrency();

const meta_description = 'Les 2 offres pour utiliser NotyLoops : ofrre gratuite limitée ou offre payante illimitée.';

useSeoMeta({
  title: `${t('t_pricing')} | ${WEBSITE_NAME}`,
  description: meta_description,
});

const is_yearly = ref(false);

const premium_yearly_price = computed(() => {
  return PREMIUM.YEARLY[currency.value].text;
});

const premium_monthly_price = computed(() => {
  return PREMIUM.MONTHLY[currency.value].text;
});

const premium_price = computed(() => {
  return is_yearly.value ? premium_yearly_price.value : premium_monthly_price.value;
});

const premium_interval_label = computed(() => {
  return is_yearly.value ? t('t_per_year') : t('t_per_month');
});

const yearly_discount_percent = computed(() => {
  const monthly_amount = PREMIUM.MONTHLY[currency.value].amount;
  const yearly_amount = PREMIUM.YEARLY[currency.value].amount;
  const yearly_at_monthly_rate = monthly_amount * 12;

  return Math.round((1 - yearly_amount / yearly_at_monthly_rate) * 100);
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

      <div class="mb-6 flex items-center justify-center gap-3">
        <span>{{ $t('t_monthly') }}</span>
        <USwitch v-model="is_yearly" />
        <span>{{ $t('t_yearly') }}</span>
        <UBadge
          color="success"
          :label="$t('t_yearly_discount', { percent: yearly_discount_percent })"
        />
      </div>

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
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-primary"
              />
              <span>{{ $t('t_comparison_csv_export') }}</span>
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
              <span>{{ $t('t_comparison_csv_export') }}</span>
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

          <h3 class="center">
            {{ premium_price }} {{ premium_interval_label }}
          </h3>
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

.strikethrough {
  text-decoration: line-through;
}
</style>
