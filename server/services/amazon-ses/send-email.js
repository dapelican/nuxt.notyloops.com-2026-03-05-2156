'use strict';

import {
  DateTime,
} from 'luxon';

import axios from 'axios';

import crypto from 'crypto';

import {
  renderTemplate,
} from '../../helpers/email-templates/render-template.js';

const SERVICE_NAME = 'ses';

const hmac = (key, value) => crypto.createHmac('sha256', key).update(value, 'utf8').digest();

const hashHex = (value) => crypto.createHash('sha256').update(value, 'utf8').digest('hex');

const getSignatureKey = (secret_access_key, date_stamp, region) => {
  const k_date = hmac(`AWS4${secret_access_key}`, date_stamp);
  const k_region = hmac(k_date, region);
  const k_service = hmac(k_region, SERVICE_NAME);

  return hmac(k_service, 'aws4_request');
};

const toAddressList = (value) => {
  if (!value) {
    return [];
  }

  if (Array.isArray(value)) {
    return value;
  }

  return value
    .split(',')
    .map((address) => address.trim())
    .filter(Boolean);
};

const sendEmail = async (input) => {
  const {
    bcc,
    cc,
    subdomain,
    template_name,
    template_params,
    to,
  } = input;

  const { html_body, subject } = await renderTemplate(template_name, subdomain, template_params);

  const {
    AMAZON_SES_ACCESS_KEY_ID,
    AMAZON_SES_REGION,
    AMAZON_SES_SECRET_ACCESS_KEY,
  } = useRuntimeConfig();

  const destination = {
    ToAddresses: toAddressList(to),
  };

  const cc_address_list = toAddressList(cc);
  const bcc_address_list = toAddressList(bcc);

  if (cc_address_list.length > 0) {
    destination.CcAddresses = cc_address_list;
  }

  if (bcc_address_list.length > 0) {
    destination.BccAddresses = bcc_address_list;
  }

  const data = {
    Content: {
      Simple: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: `<div style="font-size: 16px;">${html_body}</div>`,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: subject,
        },
      },
    },
    Destination: destination,
    FromEmailAddress: 'support@notyloops.com',
  };

  const body = JSON.stringify(data);
  const host = `email.${AMAZON_SES_REGION}.amazonaws.com`;
  const path = '/v2/email/outbound-emails';
  const now = DateTime.utc();
  const amz_date = now.toFormat('yyyyMMdd\'T\'HHmmss\'Z\'');
  const date_stamp = now.toFormat('yyyyMMdd');
  const payload_hash = hashHex(body);
  const canonical_headers = [
    `content-type:application/json`,
    `host:${host}`,
    `x-amz-content-sha256:${payload_hash}`,
    `x-amz-date:${amz_date}`,
  ].join('\n') + '\n';
  const signed_headers = 'content-type;host;x-amz-content-sha256;x-amz-date';
  const canonical_request = [
    'POST',
    path,
    '',
    canonical_headers,
    signed_headers,
    payload_hash,
  ].join('\n');
  const credential_scope = `${date_stamp}/${AMAZON_SES_REGION}/${SERVICE_NAME}/aws4_request`;
  const string_to_sign = [
    'AWS4-HMAC-SHA256',
    amz_date,
    credential_scope,
    hashHex(canonical_request),
  ].join('\n');
  const signature = crypto
    .createHmac('sha256', getSignatureKey(AMAZON_SES_SECRET_ACCESS_KEY, date_stamp, AMAZON_SES_REGION))
    .update(string_to_sign, 'utf8')
    .digest('hex');
  const authorization_header = [
    `AWS4-HMAC-SHA256 Credential=${AMAZON_SES_ACCESS_KEY_ID}/${credential_scope}`,
    `SignedHeaders=${signed_headers}`,
    `Signature=${signature}`,
  ].join(', ');

  return axios.post(
    `https://${host}${path}`,
    body,
    {
      headers: {
        'Authorization': authorization_header,
        'Content-Type': 'application/json',
        'Host': host,
        'X-Amz-Content-Sha256': payload_hash,
        'X-Amz-Date': amz_date,
      },
    });
};

export {
  sendEmail,
};
