import { sendEmailToExtendPremium } from '../scripts/send-email-to-extend-premium.js';

export default defineTask({
  meta: {
    name: 'tasks:send-email-to-extend-premium',
    description: 'Email premium users whose access expires in 7 or 3 days',
  },
  async run() {
    await sendEmailToExtendPremium();
    return { result: 'success' };
  },
});
