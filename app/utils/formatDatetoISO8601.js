import { DateTime } from 'luxon';

export const formatDate = (date_string) => {
  if (!date_string) {
    return '';
  }
  return DateTime.fromISO(date_string).toFormat('yyyy-MM-dd');
};
