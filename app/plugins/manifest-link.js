'use strict';

export default defineNuxtPlugin(() => {
  const runtime_config = useRuntimeConfig();
  const request_url = useRequestURL();
  const domain = runtime_config.public.domain;

  const manifest_href = domain && request_url.hostname === `fr.${domain}`
    ? '/manifest-fr.webmanifest'
    : '/manifest-en.webmanifest';

  useHead({
    link: [
      {
        rel: 'manifest',
        href: manifest_href,
      },
    ],
  });
});
