import axios from 'axios';

const verifyEmail = async (email) => {
  const emailable_url = 'https://api.emailable.com/v1/verify';

  const response = await axios.get(
    emailable_url,
    {
      params: {
        api_key: useRuntimeConfig().EMAILABLE_API_KEY,
        email,
      },
    })
    .catch((error) => {
      console.error('================= ERROR =====================');
      console.error('file:', 'server/services/emailable/verify-email.js');
      console.error('Error from Emailable:', error);
      console.error('=============================================');
      return 'error';
    });

  if (response?.data?.state === 'undeliverable') {
    return false;
  }

  return true;
};

export {
  verifyEmail,
};
