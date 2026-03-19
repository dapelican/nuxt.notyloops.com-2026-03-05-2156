import {
  ITEM_TYPE_COLLECTION,
  ITEM_TYPE_NOTE,
  ITEM_TYPE_TAG,
} from '~/utils/constants';

const MAX_ITEMS_PER_PAGE = 10;

export const MANAGE_LIST_ITEMS_KEY = Symbol('manageListItems');

const LIST_PREFERENCE_AREA_LIST = [
  ITEM_TYPE_NOTE,
  ITEM_TYPE_TAG,
  ITEM_TYPE_COLLECTION,
];

const applyPreferencePayloadToArea = (raw, refs) => {
  if (raw == null || typeof raw !== 'object') {
    return;
  }

  if (typeof raw.sort_option === 'string') {
    refs.sort_option.value = raw.sort_option;
  }

  if (typeof raw.search_criteria_term === 'string') {
    refs.search_criteria_term.value = raw.search_criteria_term;
  }

  if (Array.isArray(raw.search_criteria_tag_id_list)) {
    const tag_id_list = raw.search_criteria_tag_id_list.filter(
      (id) => typeof id === 'string' && id.length > 0
    );
    refs.search_criteria_tag_id_set.value = new Set(tag_id_list);
  }
};

const registerListPreferencesFetchOnce = () => {
  const fetch_registered = useState('list_preferences_fetch_registered', () => false);

  if (fetch_registered.value) {
    return;
  }

  fetch_registered.value = true;

  const preference_ref_by_area = Object.fromEntries(
    LIST_PREFERENCE_AREA_LIST.map((area) => [
      area,
      {
        sort_option: useState(`sort_option_${area}`, () => 'created_at:desc'),
        search_criteria_term: useState(`search_criteria_term_${area}`, () => ''),
        search_criteria_tag_id_set: useState(`search_criteria_tag_id_set_${area}`, () => new Set()),
      },
    ])
  );

  const is_applying_from_server = useState('is_applying_list_preferences_from_server', () => false);
  const list_preferences_hydrated = useState('list_preferences_hydrated', () => false);

  const {
    data: preference_fetch_data,
    error: preference_fetch_error,
    pending: preference_fetch_pending,
  } = useFetch('/user-preferences');

  const applyListPreferencesFromFetch = () => {
    if (preference_fetch_error.value) {
      return;
    }

    const body = preference_fetch_data.value;

    if (!body?.preference_by_area) {
      return;
    }

    is_applying_from_server.value = true;

    for (const area of LIST_PREFERENCE_AREA_LIST) {
      applyPreferencePayloadToArea(body.preference_by_area[area], preference_ref_by_area[area]);
    }

    nextTick(() => {
      is_applying_from_server.value = false;
    });
  };

  watch(
    () => [
      preference_fetch_pending.value,
      preference_fetch_data.value,
      preference_fetch_error.value,
    ],
    () => {
      if (preference_fetch_pending.value) {
        return;
      }

      applyListPreferencesFromFetch();
      list_preferences_hydrated.value = true;
    },
    { immediate: true, flush: 'sync' }
  );
};

export const useSearchAndSelectItems = (key) => {
  const route = useRoute();

  for (const area of LIST_PREFERENCE_AREA_LIST) {
    useState(`sort_option_${area}`, () => 'created_at:desc');
    useState(`search_criteria_term_${area}`, () => '');
    useState(`search_criteria_tag_id_set_${area}`, () => new Set());
  }

  registerListPreferencesFetchOnce();

  const list_preferences_hydrated = useState('list_preferences_hydrated', () => false);

  const waitForListPreferencesHydration = async () => {
    if (list_preferences_hydrated.value) {
      return;
    }

    await new Promise((resolve) => {
      const stop = watch(
        list_preferences_hydrated,
        (v) => {
          if (v) {
            stop();
            resolve();
          }
        }
      );
    });
  };

  const all_user_tag_list = useState('all_user_tag_list', () => []);

  const total_user_note_count = useState('total_user_note_count', () => 0);

  const total_user_collection_count = useState('total_user_collection_count', () => 0);

  const page_number = computed(() => {
    const n = Number(route.params.page_number);
    if (!Number.isInteger(n) || n < 1) {
      handleFrontendError(null, 'invalid_url');
    }
    return n;
  });

  const items_per_page = useState(`items_per_page_${key}`, () => MAX_ITEMS_PER_PAGE);

  const offset = computed(() => (page_number.value - 1) * items_per_page.value);

  const selected_item_id_set = useState(`selected_item_id_set_${key}`, () => new Set());

  const sort_option = useState(`sort_option_${key}`, () => 'created_at:desc');

  const search_criteria_sort_by = computed(() => sort_option.value.split(':').at(0));
  const search_criteria_sort_order = computed(() => sort_option.value.split(':').at(1));

  const search_criteria_tag_id_set = useState(`search_criteria_tag_id_set_${key}`, () => new Set());

  const search_criteria_term = useState(`search_criteria_term_${key}`, () => '');

  const handling_request = useState(`handling_request_${key}`, () => false);

  const current_page_item_list = useState(`current_page_item_list_${key}`, () => []);
  const searched_item_id_set = useState(`searched_item_id_set_${key}`, () => new Set());

  const is_applying_from_server = useState('is_applying_list_preferences_from_server', () => false);

  const persist_debounce_timeout_id = useState(
    `list_preferences_persist_timeout_id_${key}`,
    () => null
  );

  const schedulePersistListPreferences = () => {
    if (!import.meta.client) {
      return;
    }

    const { loggedIn } = useUserSession();

    if (!loggedIn.value || is_applying_from_server.value) {
      return;
    }

    if (persist_debounce_timeout_id.value !== null) {
      clearTimeout(persist_debounce_timeout_id.value);
    }

    persist_debounce_timeout_id.value = setTimeout(() => {
      persist_debounce_timeout_id.value = null;

      void $fetch('/user-preferences', {
        method: 'PATCH',
        body: {
          area: key,
          payload: {
            search_criteria_tag_id_list: Array.from(search_criteria_tag_id_set.value),
            search_criteria_term: search_criteria_term.value,
            sort_option: sort_option.value,
          },
        },
      });
    }, 400);
  };

  watch(
    [sort_option, search_criteria_term, search_criteria_tag_id_set],
    () => {
      schedulePersistListPreferences();
    },
    { deep: true }
  );

  let fetch_counter = 0;

  const searchItems = async () => {
    await waitForListPreferencesHydration();

    const current_fetch = ++fetch_counter;
    handling_request.value = true;

    try {
      const data = await $fetch(`/${key}s/search`, {
        method: 'POST',
        body: {
          limit: items_per_page.value,
          offset: offset.value,
          search_term: search_criteria_term.value || '',
          sort_by: search_criteria_sort_by.value,
          sort_order: search_criteria_sort_order.value,
          tag_id_list: Array.from(search_criteria_tag_id_set.value),
        },
      });

      if (current_fetch !== fetch_counter) {
        return;
      }

      searched_item_id_set.value = new Set(data[`searched_${key}_id_list`]);
      current_page_item_list.value = data[`current_page_${key}_list`];

      if (current_page_item_list.value.length === 0
        && searched_item_id_set.value.size > 0
        && page_number.value > 1
      ) {
        const max_page = Math.ceil(searched_item_id_set.value.size / items_per_page);
        navigateTo(`/manage-${key}s/page/${max_page}`);
      }
    } catch (error) {
      if (current_fetch !== fetch_counter) {
        return;
      }
      handleFrontendError(error, error?.data?.error_message);
    } finally {
      if (current_fetch === fetch_counter) {
        handling_request.value = false;
      }
    }
  };

  const clearSelection = () => {
    selected_item_id_set.value = new Set();
  };

  const reinitializeSearch = () => {
    clearSelection();

    search_criteria_term.value = '';

    if (key === ITEM_TYPE_COLLECTION) {
      sort_option.value = 'title:asc';

      if (page_number.value === 1) {
        searchItems();
      } else {
        navigateTo('/manage-collections/page/1');
      }
    }

    if (key === ITEM_TYPE_NOTE) {
      search_criteria_tag_id_set.value = new Set([]);

      sort_option.value = 'title:asc';

      if (page_number.value === 1) {
        searchItems();
      } else {
        navigateTo('/manage-notes/page/1');
      }
    }

    if (key === ITEM_TYPE_TAG) {
      sort_option.value = 'label:asc';
      if (page_number.value === 1) {
        searchItems();
      } else {
        navigateTo('/manage-tags/page/1');
      }
    }
  };

  return {
    all_user_tag_list,
    clearSelection,
    current_page_item_list,
    handling_request,
    items_per_page,
    page_number,
    reinitializeSearch,
    selected_item_id_set,
    sort_option,
    search_criteria_sort_by,
    search_criteria_sort_order,
    search_criteria_tag_id_set,
    search_criteria_term,
    searched_item_id_set,
    searchItems,
    total_user_collection_count,
    total_user_note_count,
  };
};

export const provideSearchAndSelectItems = (key) => {
  const api = useSearchAndSelectItems(key);
  provide(MANAGE_LIST_ITEMS_KEY, api);
  return api;
};

export const useSearchAndSelectItemsOrInject = (fallback_key) => {
  const injected = inject(MANAGE_LIST_ITEMS_KEY, null);

  if (injected != null) {
    return injected;
  }

  return useSearchAndSelectItems(fallback_key);
};
