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
    html_body: `<div style="font-size: 16px;">${html_body}</div>`,
    sender: sender || 'OptiLeague <support@optileague.com>',
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
    'https://api.smtp2go.com/v3/email/send',
    data,
    {
      headers: {
        'Content-Type': 'application/json',
        'X-Smtp2go-Api-Key': useRuntimeConfig().SMTP2GO_API_KEY,
        'accept': 'application/json',
      },
    });
};

export {
  sendEmail,
};
