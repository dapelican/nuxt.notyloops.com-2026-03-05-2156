import {
  CURRENCY_EUR,
  CURRENCY_USD,
  DEFAULT_CURRENCY,
} from '#shared/utils/constants.js';

const CURRENCY_STORAGE_KEY = 'notyloops-currency';

const formatAmountForCurrency = (amount, amount_currency) => {
  if (amount_currency === CURRENCY_USD) {
    return `$ ${amount}`;
  }

  return `${amount} €`;
};

export const useCurrency = () => {
  const currency = useState('notyloops-currency', () => DEFAULT_CURRENCY);

  onMounted(() => {
    const stored_currency = localStorage.getItem(CURRENCY_STORAGE_KEY);
    const normalized_currency = (stored_currency === 'eur' || stored_currency === 'usd')
      ? stored_currency.toUpperCase()
      : stored_currency;

    if (normalized_currency === CURRENCY_EUR || normalized_currency === CURRENCY_USD) {
      currency.value = normalized_currency;

      if (normalized_currency !== stored_currency) {
        localStorage.setItem(CURRENCY_STORAGE_KEY, normalized_currency);
      }
    }
  });

  const setCurrency = (next_currency) => {
    if (next_currency !== CURRENCY_EUR && next_currency !== CURRENCY_USD) {
      return;
    }

    currency.value = next_currency;
    localStorage.setItem(CURRENCY_STORAGE_KEY, next_currency);
  };

  const collectionPriceText = (price_list) => {
    return price_list?.find((price) => price.currency === currency.value)?.text ?? '';
  };

  const formatStoredAmount = (amount, amount_currency) => {
    const charged_currency = String(amount_currency).toUpperCase() === CURRENCY_USD
      ? CURRENCY_USD
      : DEFAULT_CURRENCY;

    return formatAmountForCurrency(amount, charged_currency);
  };

  return {
    collectionPriceText,
    currency,
    formatStoredAmount,
    setCurrency,
  };
};
