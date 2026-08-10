export function useGoogleTag() {
  useHead({
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=GT-TNFNJNVD',
        async: true,
      },
      {
        textContent: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GT-TNFNJNVD');`,
      },
    ],
  });
}
