import { deleteNotesPermanently } from '../scripts/delete-notes-permanently.js';

export default defineTask({
  meta: {
    name: 'delete-notes-permanently',
    description: 'Permanently delete notes soft-deleted more than a year ago',
  },
  async run() {
    await deleteNotesPermanently();
    return { result: 'success' };
  },
});
