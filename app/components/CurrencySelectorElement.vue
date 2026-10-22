<script setup>
import {
  CURRENCY_LIST,
} from '#shared/utils/constants.js';

const { currency, setCurrency } = useCurrency();

const currency_items = computed(() => [
  CURRENCY_LIST.map((currency_code) => ({
    active: currency.value === currency_code,
    label: currency_code,
    onSelect: () => setCurrency(currency_code),
  })),
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
