export const USER_FETCH_KEY_COLLECTIONS = 'fetch-user-for-collections';

export const USER_FETCH_KEY_MANAGE_NOTES_PAGE = 'fetch-user-manage-notes-page';

export const USER_FETCH_KEY_MANAGE_NOTES_ADD = 'fetch-user-manage-notes-add';

export const USER_FETCH_KEY_MANAGE_NOTES_EDIT = 'fetch-user-manage-notes-edit';

export const USER_FETCH_KEY_MANAGE_COLLECTIONS_ADD = 'fetch-user-manage-collections-add';

export const USER_FETCH_KEY_MANAGE_COLLECTIONS_EDIT = 'fetch-user-manage-collections-edit';

export const USER_FETCH_KEY_ACCOUNT_INFORMATION = 'fetch-user-account-information';

export const USER_FETCH_KEY_PUBLIC_COLLECTION = 'fetch-user-public-collection-page';

export const useCurrentUser = (key) => {
  return useFetch('/a/user', {
    key,
    getCachedData: () => undefined,
  });
};
