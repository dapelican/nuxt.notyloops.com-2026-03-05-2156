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

  return axios.post(
    'https://api.smtp2go.com/v3/email/send',
    data,
    {
      headers: {
        'Content-Type': 'application/json',
        'X-Smtp2go-Api-Key': useRuntimeConfig().SMTP2GO_API_KEY,
      },
    })
    .catch((error) => {
      console.error('================= ERROR =====================');
      console.error('file:', 'server/services/smtp2go/send-email.js');
      console.error('Error from SMTP2Go:', error);
      console.error('=============================================');
      throw error;
    });
};

export {
  sendEmail,
};
