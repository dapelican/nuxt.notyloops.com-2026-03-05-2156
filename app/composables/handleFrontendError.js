'use strict';

const serializeError = (error) => {
  if (error instanceof Error) {
    return {
      name: error.name,
      message: error.message,
      stack: error.stack,
      status_code: error.statusCode ?? error.status,
      data: error.data,
    };
  }

  return error;
};

export const handleFrontendError = (error, message) => {
  switch (message) {
    case 'error_no_user_found':
      navigateTo('/a/log-in');
      break;
    case 'error_unauthorized':
      navigateTo('/a/log-in');
      break;
    default:
      if (import.meta.dev) {
        $fetch('/monitoring/save-log', {
          method: 'POST',
          body: {
            content: JSON.stringify({
              error: serializeError(error),
              message,
            }),
          },
        }).catch((log_error) => {
          console.error('Failed to save frontend error log:', log_error);
        });
      }

      throw createError({
        statusCode: 500,
        statusMessage: 'Internal Server Error',
        message: 'An unexpected error occurred',
        fatal: true,
        cause: error,
      });
  }
};
