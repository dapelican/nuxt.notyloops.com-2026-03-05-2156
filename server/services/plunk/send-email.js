'use strict';

import axios from 'axios';

import {
  renderTemplate,
} from '../../helpers/email-templates/render-template.js';

const sendEmail = async (input) => {
  const {
    bcc,
    cc,
    sender,
    subdomain,
    template_name,
    template_params,
    to,
  } = input;

  const { html_body, subject } = await renderTemplate(template_name, subdomain, template_params);

  const data = {
    body: `<div style="font-size: 16px;">${html_body}</div>`,
    from: sender || 'support@notyloops.com',
    subject,
    to,
  };

  if (cc) {
    data.cc = cc;
  }

  if (bcc) {
    data.bcc = bcc;
  }

  return axios.post(
    'https://next-api.useplunk.com/v1/send',
    data,
    {
      headers: {
        'Authorization': `Bearer ${useRuntimeConfig().PLUNK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
    });
};

export {
  sendEmail,
};
