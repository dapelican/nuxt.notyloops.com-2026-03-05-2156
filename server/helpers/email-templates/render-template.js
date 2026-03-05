'use strict';

import ejs from 'ejs';

import { join } from 'path';

import { readFile } from 'fs/promises';

const TEMPLATES_DIR = join(process.cwd(), 'server/helpers/email-templates');

const getLanguageFolder = (subdomain) => {
  if (subdomain === 'fr') {
    return 'fr';
  }

  return 'en';
};

const renderTemplate = async (template_name, subdomain, template_params) => {
  const language_folder = getLanguageFolder(subdomain);

  const data = {
    ...template_params,
  };

  const html_body_raw = await readFile(
    join(TEMPLATES_DIR, language_folder, `${template_name}-html-body.html`),
    'utf-8'
  );
  const html_body = ejs.render(html_body_raw, data);

  const subject_raw = await readFile(
    join(TEMPLATES_DIR, language_folder, `${template_name}-subject.html`),
    'utf-8'
  );
  const subject = ejs.render(subject_raw, data);

  return {
    html_body,
    subject: subject.trim(),
  };
};

export {
  renderTemplate,
};
