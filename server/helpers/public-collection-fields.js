'use strict';

const publicCollectionFields = (collection) => {
  return {
    description_html: collection.description_html,
    description_markdown: collection.description_markdown,
    id: collection.id,
    pre_tax_price_in_cents: collection.pre_tax_price_in_cents,
    title: collection.title,
    type: collection.type,
  };
};

export {
  publicCollectionFields,
};
