import {
  WEBSITE_DOMAIN_NAME,
} from '#shared/utils/constants.js';

import axios from 'axios';

import {
  renderTemplate,
} from '../../helpers/email-templates/render-template.js';

const toAddressList = (addresses) => {
  if (!addresses) {
    return undefined;
  }

  return Array.isArray(addresses) ? addresses : [addresses];
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
    html_body: `<div style="font-size: 16px;">${html_body}</div>`,
    sender: sender || `support@${WEBSITE_DOMAIN_NAME}`,
    subject,
    to: toAddressList(to),
  };

  if (cc) {
    data.cc = toAddressList(cc);
  }

  if (bcc) {
    data.bcc = toAddressList(bcc);
  }

  return axios.post(
    'https://api.smtp2go.com/v3/email/send',
    data,
    {
      headers: {
        'Content-Type': 'application/json',
        'X-Smtp2go-Api-Key': useRuntimeConfig().SMTP2GO_API_KEY,
      },
    });
};

export {
  sendEmail,
};
