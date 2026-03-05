'use strict';

export const handleFrontendError = (error, message) => {
  console.log('!!!!!!!!!error', error);
  console.log('!!!!!!!!!message', message);

  switch (message) {
    case 'error_no_user_found':
      navigateTo('/a/log-in');
      break;
    case 'error_unauthorized':
      navigateTo('/a/log-in');
      break;
    case 'invalid_url':
      throw createError({ statusCode: 404, fatal: true });
    default:
      $fetch('/monitoring/save-log', {
        method: 'POST',
        body: {
          content: JSON.stringify({
            error,
            message,
          }),
        },
      });

      throw createError({
        statusCode: 500,
        statusMessage: message ?? 'Internal Server Error',
        message: message ?? error?.message ?? 'An unexpected error occurred',
        fatal: true,
      });
  }
};
