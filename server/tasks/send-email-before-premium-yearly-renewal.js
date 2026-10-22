import { sendEmailBeforePremiumYearlyRenewal } from '../scripts/send-email-before-premium-yearly-renewal.js';

export default defineTask({
  meta: {
    name: 'send-email-before-premium-yearly-renewal',
    description: 'Email yearly premium users seven days before renewal',
  },
  async run() {
    await sendEmailBeforePremiumYearlyRenewal();
    return { result: 'success' };
  },
});
