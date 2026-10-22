import {
  CURRENCY_LIST,
  CURRENCY_USD,
} from '#shared/utils/constants.js';

import {
  executeSQLQuery,
} from '../database/query.js';

import { z } from 'zod';

const price_list_schema = z.array(z.object({
  amount: z.number().int().positive(),
  currency: z.enum(CURRENCY_LIST),
})).length(CURRENCY_LIST.length).refine((price_list) => {
  const currency_set = new Set(price_list.map((price) => price.currency));

  return CURRENCY_LIST.every((currency) => currency_set.has(currency));
});

const collectionPriceText = (currency, amount) => {
  if (currency === CURRENCY_USD) {
    return `$${amount}`;
  }

  return `${amount} €`;
};

const parseCollectionPriceList = (price_list) => {
  const parse_result = price_list_schema.safeParse(price_list);

  if (!parse_result.success) {
    return null;
  }

  return parse_result.data.map(({ amount, currency }) => {
    return {
      amount,
      currency,
      text: collectionPriceText(currency, amount),
    };
  });
};

const replaceCollectionPriceList = async (client, collection_id, price_list) => {
  await client.query(
    'DELETE FROM collection_prices WHERE collection_id = $1',
    [collection_id]
  );

  if (price_list.length === 0) {
    return;
  }

  await client.query(
    `INSERT INTO collection_prices (collection_id, currency, amount, text)
    SELECT $1, currency, amount, text
    FROM UNNEST($2::text[], $3::integer[], $4::text[]) AS price(currency, amount, text)`,
    [
      collection_id,
      price_list.map((price) => price.currency),
      price_list.map((price) => price.amount),
      price_list.map((price) => price.text),
    ]
  );
};

const selectCollectionPriceList = async (collection_id) => {
  const { rows } = await executeSQLQuery(
    `SELECT currency, amount, text
    FROM collection_prices
    WHERE collection_id = $1
    ORDER BY currency`,
    [collection_id]
  );

  return rows;
};

export {
  parseCollectionPriceList,
  replaceCollectionPriceList,
  selectCollectionPriceList,
};
