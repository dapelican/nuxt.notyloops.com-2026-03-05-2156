<script setup>
import {
  EUR_TO_USD_EXCHANGE_RATE,
} from '#shared/utils/constants.js';

const { collection_id } = useRoute().params;

const { locale } = useI18n();

const handling_request = ref(true);

const {
  loggedIn: logged_in,
} = useUserSession();

const user_fetch = logged_in.value
  ? await useCurrentUser(USER_FETCH_KEY_PUBLIC_COLLECTION)
  : null;

const user_data = user_fetch?.data ?? ref(null);
const user_error = user_fetch?.error ?? ref(null);

if (user_error.value) {
  handleFrontendError(null, user_error.value.data?.error_message);
}

const user_is_premium = computed(() => {
  return user_data.value?.status === USER_STATUS_PREMIUM;
});

const user_is_premium_or_admin = computed(() => {
  const status = user_data.value?.status;

  return status === USER_STATUS_PREMIUM || status === USER_STATUS_ADMIN;
});

const {
  data: collection_data,
  error: collection_error,
} = await useFetch(`/public-collection/${collection_id}`);

if (collection_error.value) {
  const error_message = collection_error.value.data?.error_message;

  handleFrontendError(null, error_message);
}

const collection = ref(collection_data.value?.collection);
const collection_belongs_to_connected_user = ref(collection_data.value?.collection_belongs_to_connected_user);
const note_list = ref(collection_data.value?.note_list);

const user_has_purchased_collection = ref(false);

const handling_checkout_request = ref(false);

const goToStripeCheckout = async () => {
  if (!user_is_premium_or_admin.value) {
    return;
  }

  if (handling_checkout_request.value) {
    return;
  }

  handling_checkout_request.value = true;

  try {
    const response = await $fetch('/payments/create-stripe-checkout', {
      body: {
        collection_id,
        locale: locale.value,
      },
      method: 'POST',
    });

    if (response.checkout_url) {
      await navigateTo(
        response.checkout_url,
        {
          external: true,
          open: {
            target: '_blank',
          },
        }
      );
    }
  } catch (error) {
    handleFrontendError(error, error?.data?.error_message);
  } finally {
    handling_checkout_request.value = false;
  }
};

if (collection.value?.type === COLLECTION_TYPE_PUBLIC_PAYWALLLED && logged_in.value) {
  try {
    const payment_check_payload = await $fetch('/payments/check', {
      method: 'POST',
      body: {
        collection_id,
      },
    });

    user_has_purchased_collection.value = payment_check_payload?.has_purchased;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (___) {
    user_has_purchased_collection.value = false;
  }
}

handling_request.value = false;

const collection_price = computed(() => {
  const price = collection.value?.pre_tax_price_in_cents / 100;

  if (locale.value === 'fr') {
    return `${price} €`;
  }

  return `$ ${Math.ceil(price * EUR_TO_USD_EXCHANGE_RATE)}`;
});

const can_review = computed(() => {
  if (collection_belongs_to_connected_user.value) {
    return true;
  }

  const collection_type = collection.value?.type;

  if (collection_type === COLLECTION_TYPE_PUBLIC_WITHOUT_ACCOUNT) {
    return true;
  }

  if (collection_type === COLLECTION_TYPE_PUBLIC_FREE) {
    return logged_in.value;
  }

  if (collection_type === COLLECTION_TYPE_PUBLIC_PREMIUM) {
    return user_is_premium.value;
  }

  if (collection_type === COLLECTION_TYPE_PUBLIC_PAYWALLLED) {
    return user_has_purchased_collection.value;
  }

  return false;
});

const can_copy = computed(() => {
  if (collection_belongs_to_connected_user.value) {
    return false;
  }

  const collection_type = collection.value?.type;

  if (collection_type === COLLECTION_TYPE_PUBLIC_WITHOUT_ACCOUNT) {
    return logged_in.value;
  }

  if (collection_type === COLLECTION_TYPE_PUBLIC_FREE) {
    return logged_in.value;
  }

  if (collection_type === COLLECTION_TYPE_PUBLIC_PREMIUM) {
    return user_is_premium.value;
  }

  if (collection_type === COLLECTION_TYPE_PUBLIC_PAYWALLLED) {
    return user_has_purchased_collection.value;
  }

  return false;
});

const review_lock_reason = computed(() => {
  const collection_type = collection.value?.type;

  if (collection_type === COLLECTION_TYPE_PUBLIC_PAYWALLLED) {
    return 'purchase';
  }

  if (collection_type === COLLECTION_TYPE_PUBLIC_PREMIUM) {
    return 'premium';
  }

  return 'login';
});

const copy_lock_reason = computed(() => {
  const collection_type = collection.value?.type;

  if (collection_type === COLLECTION_TYPE_PUBLIC_WITHOUT_ACCOUNT) {
    return 'login_copy_only';
  }

  if (collection_type === COLLECTION_TYPE_PUBLIC_PAYWALLLED) {
    return 'purchase';
  }

  if (collection_type === COLLECTION_TYPE_PUBLIC_PREMIUM) {
    return 'premium';
  }

  return 'login';
});

const note_is_locked = (note) => {
  if (collection_belongs_to_connected_user.value) {
    return false;
  }

  const collection_type = collection.value?.type;

  if (collection_type === COLLECTION_TYPE_PUBLIC_WITHOUT_ACCOUNT) {
    return false;
  }

  if (collection_type === COLLECTION_TYPE_PUBLIC_FREE) {
    return !logged_in.value;
  }

  if (collection_type === COLLECTION_TYPE_PUBLIC_PREMIUM) {
    return !user_is_premium.value;
  }

  if (collection_type === COLLECTION_TYPE_PUBLIC_PAYWALLLED) {
    if (note.is_preview) {
      return false;
    }

    return !user_has_purchased_collection.value;
  }

  return true;
};
</script>

<template>
  <!-- app/pages/pc/[collection_id].vue -->
  <section>
    <UContainer class="centered-max-width-650">
      <LoadingElement v-if="handling_request" />

      <div v-else>
        <h1>{{ collection?.title }}</h1>

        <section
          v-if="collection?.description_markdown || collection?.description_html"
          class="mt-4"
        >
          <MarkdownContent
            :markdown="collection.description_markdown"
            :html="collection.description_html"
          />
        </section>

        <hr class="separator-1">

        <nav class="flex flex-wrap gap-12">
          <UButton
            v-if="can_review"
            :to="`/review/collection/${collection_id}`"
          >
            <span>{{ $t('t_review') }}</span>
          </UButton>

          <PublicCollectionAccessPopup
            v-else
            :handling_checkout_request="handling_checkout_request"
            :logged_in="logged_in"
            :price_label="collection_price"
            :reason="review_lock_reason"
            :user_is_premium_or_admin="user_is_premium_or_admin"
            @checkout="goToStripeCheckout"
          >
            <UButton icon="i-lucide-lock">
              <span>{{ $t('t_review') }}</span>
            </UButton>
          </PublicCollectionAccessPopup>

          <LimitedFeaturePopup
            v-if="collection_belongs_to_connected_user"
          >
            <UButton>
              <span>{{ $t('t_copy_collection') }}</span>
            </UButton>

            <template #content>
              <p class="m-0">
                {{ $t('t_you_own_this_collection_you_cannot_copy_it') }}
              </p>
            </template>
          </LimitedFeaturePopup>

          <CopyCollectionPopup
            v-else-if="can_copy"
            :collection_title="collection?.title"
          />

          <PublicCollectionAccessPopup
            v-else
            :handling_checkout_request="handling_checkout_request"
            :logged_in="logged_in"
            :price_label="collection_price"
            :reason="copy_lock_reason"
            :user_is_premium_or_admin="user_is_premium_or_admin"
            @checkout="goToStripeCheckout"
          >
            <UButton icon="i-lucide-lock">
              <span>{{ $t('t_copy_collection') }}</span>
            </UButton>
          </PublicCollectionAccessPopup>
        </nav>

        <hr class="separator-1">

        <section
          v-for="(note, index) in note_list ?? []"
          :key="note.id"
        >
          <hr
            v-if="index > 0"
            class="note-list-separator"
          >

          <NoteCollapsibleContentElement
            :collection_id="collection_id"
            :collection_type="collection?.type ?? COLLECTION_TYPE_PUBLIC_FREE"
            :note_id="note.id"
            :show_lock="note_is_locked(note)"
            :title="note.title"
          />
        </section>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.note-list-separator {
  border: none;
  border-top: 1px solid var(--ui-border);
  height: 0;
  margin: 0.75rem 0;
}
</style>
