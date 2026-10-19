import { deleteUnusedBackblazeFiles } from '../scripts/delete-unused-backblaze-files.js';

export default defineTask({
  meta: {
    name: 'delete-unused-backblaze-files',
    description: 'Delete unused Backblaze files',
  },
  async run() {
    await deleteUnusedBackblazeFiles();
    return { result: 'success' };
  },
});
