const publicCollectionFields = (collection, price_list) => {
  return {
    description_html: collection.description_html,
    description_markdown: collection.description_markdown,
    id: collection.id,
    price_list,
    title: collection.title,
    type: collection.type,
  };
};

export {
  publicCollectionFields,
};
