'use strict';

export const handleFrontendError = (error, message) => {
  switch (message) {
    case 'error_no_user_found':
      return navigateTo('/a/log-in');
    case 'error_unauthorized':
      return navigateTo('/a/log-in');
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
