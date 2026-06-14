const SITE_NAME = 'NotyLoops';

const empty_page_schema = () => ({
  name: undefined,
  description: undefined,
  graph: [],
  webpage_type: undefined,
  main_entity: undefined,
});

export const usePageSchema = ({
  name,
  description,
  graph = [],
  webpage_type,
  main_entity,
} = {}) => {
  const page_schema = useState('page-schema', empty_page_schema);

  page_schema.value = {
    name,
    description,
    graph,
    webpage_type,
    main_entity,
  };
};

export const useSchema = () => {
  const { locale } = useI18n();
  const request_url = useRequestURL();
  const route = useRoute();
  const router = useRouter();
  const page_schema = useState('page-schema', empty_page_schema);

  router.beforeEach(() => {
    page_schema.value = empty_page_schema();
  });

  const schema_ld_json = computed(() => {
    const site_url = request_url.origin;
    const page_url = `${site_url}${route.path}`;
    const in_language = locale.value === 'fr' ? 'fr-FR' : 'en-US';

    const webpage = {
      '@type': page_schema.value.webpage_type || 'WebPage',
      '@id': `${page_url}#webpage`,
      'url': page_url,
      'inLanguage': in_language,
      'isPartOf': {
        '@id': `${site_url}/#website`,
      },
      'about': {
        '@id': `${site_url}/#webapp`,
      },
    };

    if (page_schema.value.name) {
      webpage.name = page_schema.value.name;
    }

    if (page_schema.value.description) {
      webpage.description = page_schema.value.description;
    }

    if (page_schema.value.main_entity) {
      webpage.mainEntity = page_schema.value.main_entity;
    }

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
          'isPartOf': {
            '@id': `${site_url}/#website`,
          },
        },
        webpage,
        ...page_schema.value.graph,
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
