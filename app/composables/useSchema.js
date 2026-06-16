const SITE_NAME = 'NotyLoops';

const createBreadcrumbSchema = (items) => {
  return {
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.label ?? item.name,
      'item': item.url,
    })),
  };
};

export const useSchema = (page_options) => {
  const page_schema = useState('schema-page', () => ({}));

  if (page_options) {
    const { breadcrumb_items, graph = [], ...rest } = page_options;
    const schema_graph = [...graph];

    if (breadcrumb_items) {
      schema_graph.push(createBreadcrumbSchema(breadcrumb_items));
    }

    page_schema.value = {
      ...rest,
      graph: schema_graph,
    };
    return;
  }

  const { locale } = useI18n();
  const request_url = useRequestURL();
  const route = useRoute();

  watch(() => route.fullPath, () => {
    page_schema.value = {};
  });

  const schema_ld_json = computed(() => {
    const site_url = request_url.origin;
    const page_url = `${site_url}${route.path}`;
    const in_language = locale.value === 'fr' ? 'fr-FR' : 'en-US';
    const { name, description, webpage_type, graph = [] } = page_schema.value;

    const webpage = {
      '@type': webpage_type || 'WebPage',
      '@id': `${page_url}#webpage`,
      'url': page_url,
      'inLanguage': in_language,
      'isPartOf': { '@id': `${site_url}/#website` },
      'about': { '@id': `${site_url}/#webapp` },
      ...(name && { name }),
      ...(description && { description }),
    };

    return JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${site_url}/#website`,
          'url': site_url,
          'name': SITE_NAME,
          'inLanguage': in_language,
        },
        {
          '@type': 'WebApplication',
          '@id': `${site_url}/#webapp`,
          'name': SITE_NAME,
          'url': site_url,
          'applicationCategory': 'EducationalApplication',
          'operatingSystem': 'Web',
          'inLanguage': in_language,
          'image': `${site_url}/images/notyloops-0512x0512.png`,
          'isPartOf': { '@id': `${site_url}/#website` },
        },
        webpage,
        ...graph,
      ],
    });
  });

  useHead({
    script: [
      {
        key: 'schema-org',
        type: 'application/ld+json',
        innerHTML: schema_ld_json,
      },
    ],
  });
};
