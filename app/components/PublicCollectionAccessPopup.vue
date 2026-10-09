<script setup>
const props = defineProps({
  handling_checkout_request: {
    type: Boolean,
    default: false,
  },
  logged_in: {
    type: Boolean,
    default: false,
  },
  price_label: {
    type: String,
    default: '',
  },
  reason: {
    type: String,
    required: true,
  },
  user_is_premium_or_admin: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['checkout']);

const { t } = useI18n();

const popup_title = computed(() => {
  if (props.reason === 'login' || props.reason === 'login_copy_only') {
    return t('t_account_required');
  }

  if (props.reason === 'purchase') {
    return t('t_purchase_required');
  }

  return t('t_limited_feature_title');
});

const popup_message = computed(() => {
  if (props.reason === 'login_copy_only') {
    return t('t_you_must_log_in_or_sign_up_to_copy_these_notes');
  }

  if (props.reason === 'login') {
    return t('t_you_must_log_in_or_sign_up_to_copy_this_collection');
  }

  if (props.reason === 'purchase' && !props.user_is_premium_or_admin) {
    return t('t_you_must_have_a_premium_account_and_buy_this_collection');
  }

  if (props.reason === 'purchase') {
    return t('t_you_must_buy_this_collection');
  }

  return t('t_you_must_have_a_premium_account_to_access_this_collection');
});

const show_auth_buttons = computed(() => {
  if (props.reason === 'login' || props.reason === 'login_copy_only') {
    return true;
  }

  return !props.logged_in;
});

const show_become_premium = computed(() => {
  if (!props.logged_in) {
    return false;
  }

  if (props.reason === 'premium') {
    return true;
  }

  return props.reason === 'purchase' && !props.user_is_premium_or_admin;
});

const show_buy_button = computed(() => {
  return props.reason === 'purchase'
    && props.logged_in
    && props.user_is_premium_or_admin;
});
</script>

<template>
  <!-- PublicCollectionAccessPopup.vue -->
  <LimitedFeaturePopup :title="popup_title">
    <slot />

    <template #content>
      <p class="m-0">
        {{ popup_message }}
      </p>
    </template>

    <template #footer>
      <section
        v-if="show_auth_buttons"
        class="flex justify-end gap-12"
      >
        <UButton
          color="neutral"
          variant="outline"
          to="/a/log-in"
        >
          {{ $t('t_log_in') }}
        </UButton>

        <UButton
          color="neutral"
          variant="outline"
          to="/a/sign-up-1"
        >
          {{ $t('t_sign_up') }}
        </UButton>
      </section>

      <section
        v-else-if="show_become_premium"
        class="flex justify-end"
      >
        <BecomePremiumButtonElement />
      </section>

      <section
        v-else-if="show_buy_button"
        class="flex justify-end"
      >
        <UButton
          :loading="handling_checkout_request"
          @click="emit('checkout')"
        >
          <span>{{ $t('t_buy_collection') }} - {{ price_label }}</span>
        </UButton>
      </section>
    </template>
  </LimitedFeaturePopup>
</template>
