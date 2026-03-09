import {
  ITEM_TYPE_NOTE,
  ITEM_TYPE_TAG,
} from '~/utils/constants';

export const useSearchAndSelectItems = (key) => {
  const route = useRoute();

  const all_user_tag_list = useState('all_user_tag_list', () => []);

  const page_number = computed(() => {
    const n = Number(route.params.page_number);
    if (!Number.isInteger(n) || n < 1) {
      handleFrontendError(null, 'invalid_url');
    }
    return n;
  });

  const items_per_page = useState(`items_per_page_${key}`, () => 2);

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

  let fetch_counter = 0;

  const searchItems = async () => {
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

    if (key === ITEM_TYPE_TAG) {
      sort_option.value = 'label:asc';
      if (page_number.value === 1) {
        searchItems();
      } else {
        navigateTo('/manage-tags/page/1');
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
  };
};
