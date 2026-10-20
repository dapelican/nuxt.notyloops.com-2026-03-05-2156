'use strict';

import {
  WEBSITE_DOMAIN_NAME,
} from '#shared/utils/constants.js';

import axios from 'axios';

import {
  renderTemplate,
} from '../../helpers/email-templates/render-template.js';

const toAddressString = (addresses) => {
  if (!addresses) {
    return undefined;
  }

  return Array.isArray(addresses) ? addresses.join(', ') : addresses;
};

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
    From: sender || `support@${WEBSITE_DOMAIN_NAME}`,
    HtmlBody: `<div style="font-size: 16px;">${html_body}</div>`,
    MessageStream: 'outbound',
    Subject: subject,
    To: toAddressString(to),
  };

  if (cc) {
    data.Cc = toAddressString(cc);
  }

  if (bcc) {
    data.Bcc = toAddressString(bcc);
  }

  return axios.post(
    'https://api.smtp2goapp.com/email',
    data,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': useRuntimeConfig().POSTMARK_SERVER_TOKEN,
      },
    });
};

export {
  sendEmail,
};
