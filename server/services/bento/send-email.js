import {
  WEBSITE_DOMAIN_NAME,
} from '#shared/utils/constants.js';

import axios from 'axios';

import {
  renderTemplate,
} from '../../helpers/email-templates/render-template.js';

const toAddressList = (addresses) => {
  if (!addresses) {
    return [];
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

  const {
    BENTO_PUBLISHABLE_KEY,
    BENTO_SECRET_KEY,
    BENTO_SITE_UUID,
  } = useRuntimeConfig();

  const from = sender || `support@${WEBSITE_DOMAIN_NAME}`;
  const wrapped_html_body = `<div style="font-size: 16px;">${html_body}</div>`;

  const data = {
    emails: toAddressList(to).map((address) => ({
      to: address,
      from,
      subject,
      html_body: wrapped_html_body,
      transactional: true,
    })),
  };

  return axios.post(
    'https://app.bentonow.com/api/v1/batch/emails',
    data,
    {
      auth: {
        username: BENTO_PUBLISHABLE_KEY,
        password: BENTO_SECRET_KEY,
      },
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Notyloops',
      },
      params: {
        site_uuid: BENTO_SITE_UUID,
      },
    })
    .catch((error) => {
      console.error('================= ERROR =====================');
      console.error('file:', 'server/services/bento/send-email.js');
      console.error('Error from Bento:', error);
      console.error('=============================================');
      throw error;
    });
};

export {
  sendEmail,
};
