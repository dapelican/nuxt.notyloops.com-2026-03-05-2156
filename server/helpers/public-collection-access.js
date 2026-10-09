'use strict';

import {
  COLLECTION_TYPE_PUBLIC_FREE,
  COLLECTION_TYPE_PUBLIC_PAYWALLLED,
  COLLECTION_TYPE_PUBLIC_PREMIUM,
  COLLECTION_TYPE_PUBLIC_WITHOUT_ACCOUNT,
  USER_STATUS_PREMIUM,
} from '#shared/utils/constants.js';

import {
  executeSQLQuery,
} from '../database/query.js';

const user_is_collection_owner = (user, collection) => {
  return Boolean(user?.id && user.id === collection.user_id);
};

const user_has_premium_status = (user) => {
  return user?.status === USER_STATUS_PREMIUM;
};

const user_has_purchased_collection = async (user_id, collection_id) => {
  const {
    rows: payment_row_list,
  } = await executeSQLQuery(
    `SELECT 1 FROM payments
    WHERE user_id = $1 AND collection_id = $2
    LIMIT 1`,
    [user_id, collection_id]
  );

  return payment_row_list.length > 0;
};

const public_collection_requires_account = (collection_type) => {
  return collection_type === COLLECTION_TYPE_PUBLIC_FREE
    || collection_type === COLLECTION_TYPE_PUBLIC_PAYWALLLED
    || collection_type === COLLECTION_TYPE_PUBLIC_PREMIUM;
};

const user_can_review_public_collection = async (user, collection) => {
  if (user_is_collection_owner(user, collection)) {
    return true;
  }

  if (collection.type === COLLECTION_TYPE_PUBLIC_WITHOUT_ACCOUNT) {
    return true;
  }

  if (collection.type === COLLECTION_TYPE_PUBLIC_FREE) {
    return Boolean(user?.id);
  }

  if (collection.type === COLLECTION_TYPE_PUBLIC_PREMIUM) {
    return user_has_premium_status(user);
  }

  if (collection.type === COLLECTION_TYPE_PUBLIC_PAYWALLLED) {
    if (!user?.id) {
      return false;
    }

    return user_has_purchased_collection(user.id, collection.id);
  }

  return false;
};

const user_can_read_public_note = async (user, collection, note_id) => {
  if (user_is_collection_owner(user, collection)) {
    return true;
  }

  if (collection.type === COLLECTION_TYPE_PUBLIC_WITHOUT_ACCOUNT) {
    return true;
  }

  if (collection.type === COLLECTION_TYPE_PUBLIC_FREE) {
    return Boolean(user?.id);
  }

  if (collection.type === COLLECTION_TYPE_PUBLIC_PREMIUM) {
    return user_has_premium_status(user);
  }

  if (collection.type === COLLECTION_TYPE_PUBLIC_PAYWALLLED) {
    const preview_note_id_list = Array.isArray(collection.preview_note_id_list)
      ? collection.preview_note_id_list
      : [];

    if (preview_note_id_list.includes(note_id)) {
      return true;
    }

    if (!user?.id) {
      return false;
    }

    return user_has_purchased_collection(user.id, collection.id);
  }

  return false;
};

export {
  public_collection_requires_account,
  user_can_read_public_note,
  user_can_review_public_collection,
  user_has_premium_status,
};
