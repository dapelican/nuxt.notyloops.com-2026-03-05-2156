<script setup>
import {
  CURRENCY_EUR,
  CURRENCY_USD,
} from '#shared/utils/constants.js';

const { currency, setCurrency } = useCurrency();

const currency_items = computed(() => [
  [
    {
      active: currency.value === CURRENCY_EUR,
      label: 'EUR',
      onSelect: () => setCurrency(CURRENCY_EUR),
    },
    {
      active: currency.value === CURRENCY_USD,
      label: 'USD',
      onSelect: () => setCurrency(CURRENCY_USD),
    },
  ],
]);
</script>

<template>
  <UDropdownMenu :items="currency_items">
    <UButton
      color="neutral"
      icon="i-lucide-coins"
      :label="currency"
      variant="ghost"
    />
  </UDropdownMenu>
</template>
