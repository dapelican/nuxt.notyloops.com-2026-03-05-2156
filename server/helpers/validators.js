'use strict';

import { z } from 'zod';

const validateEmail = (email) => z.email().safeParse(email).success;

const validateNonEmptyInputFieldList = (field_list) => {
  for (const field of field_list) {
    if (!field) {
      return false;
    }
  }
  return true;
};

const validateUUID = (uuid) =>
  z.uuid().safeParse(uuid).success;

export {
  validateEmail,
  validateNonEmptyInputFieldList,
  validateUUID,
};
