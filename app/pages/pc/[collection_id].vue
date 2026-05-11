<script setup>
const { collection_id } = useRoute().params;

const { locale } = useI18n();

const handling_request = ref(true);

const {
  loggedIn: logged_in,
} = useUserSession();

const {
  data: user_data,
  error: user_error,
} = await useFetch('/a/user');

if (user_error.value) {
  handleFrontendError(null, user_error.value.data?.error_message);
}

const user_is_premium = computed(() => {
  return user_data.value?.status === USER_STATUS_PREMIUM;
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

const stripe_payment_link = computed(() => {
  let url = `https://buy.stripe.com/${collection.value?.stripe_payment_link_id}`;

  url += `?client_reference_id=${user_data.value.id}`;
  url += `&prefilled_email=${encodeURIComponent(user_data.value.email)}`;
  url += `&locale=${locale.value}`;

  return url;
});

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
</script>

<template>
  <!-- app/pages/pc/[collection_id].vue -->
  <section>
    <UContainer class="centered-max-width-650">
      <LoadingElement v-if="handling_request" />

      <div v-else>
        <h1>{{ collection?.title }}</h1>

        <p>{{ collection?.description }}</p>

        <hr class="separator-1">

        <UAlert
          v-if="!logged_in"
          color="info"
          variant="subtle"
          icon="i-lucide-info"
        >
          <template #description>
            <p class="m-0">
              {{ $t('t_you_must_log_in_or_sign_up_to_copy_this_collection') }}
            </p>
          </template>
        </UAlert>

        <LimitedFeaturePopup
          v-else-if="logged_in
            && user_is_premium
            && collection_belongs_to_connected_user"
        >
          <UButton
            class="cursor-pointer"
            color="primary"
            variant="solid"
          >
            <span>{{ $t('t_copy_collection') }}</span>
          </UButton>

          <template #content>
            <p class="m-0">
              {{ $t('t_you_own_this_collection_you_cannot_copy_it') }}
            </p>
          </template>
        </LimitedFeaturePopup>

        <LimitedFeaturePopup
          v-else-if="logged_in
            && !user_is_premium
            && collection?.type === COLLECTION_TYPE_PUBLIC_PAYWALLLED
            && !user_has_purchased_collection"
        >
          <UButton
            class="cursor-pointer"
            color="primary"
            variant="solid"
          >
            <span>{{ $t('t_copy_collection') }}</span>
          </UButton>

          <template #content>
            <p class="m-0">
              {{ $t('t_you_must_have_a_premium_account_to_buy_this_collection') }}
            </p>
          </template>
        </LimitedFeaturePopup>

        <UButton
          v-else-if="logged_in
            && user_is_premium
            && collection?.type === COLLECTION_TYPE_PUBLIC_PAYWALLLED
            && !user_has_purchased_collection"
          class="cursor-pointer hover:text-inverted!"
          color="primary"
          variant="solid"
          :to="stripe_payment_link"
        >
          <span>{{ $t('t_buy_collection') }} - {{ collection?.price_without_tax }} €</span>
        </UButton>

        <CopyCollectionPopup
          v-else
          :collection_title="collection?.title"
        />

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
            :collection_type="collection?.type ?? 'public_free'"
            :note_id="note.id"
            :preview_note_id_list="collection?.preview_note_id_list"
            :show_lock="true"
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
