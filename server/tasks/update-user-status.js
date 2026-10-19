import { updateUserStatus } from '../scripts/update-user-status.js';

export default defineTask({
  meta: {
    name: 'update-user-status',
    description: 'Set expired premium users back to pending',
  },
  async run() {
    await updateUserStatus();
    return { result: 'success' };
  },
});
