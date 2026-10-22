import axios from 'axios';

const SITEVERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

const DUMMY_SECRET_ALWAYS_PASS = '1x0000000000000000000000000000000AA';
const DUMMY_SECRET_ALWAYS_FAIL = '2x0000000000000000000000000000000AA';

const verifyTurnstileToken = async (turnstile_token) => {
  if (typeof turnstile_token !== 'string' || turnstile_token === '') {
    return false;
  }

  const secret_key = useRuntimeConfig().turnstile?.secretKey;

  if (secret_key === DUMMY_SECRET_ALWAYS_PASS) {
    return true;
  }

  if (secret_key === DUMMY_SECRET_ALWAYS_FAIL) {
    return false;
  }

  try {
    const { data } = await axios.post(SITEVERIFY_URL, {
      response: turnstile_token,
      secret: secret_key,
    });

    return data?.success === true;
  } catch {
    return false;
  }
};

export {
  verifyTurnstileToken,
};
