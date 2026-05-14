'use strict';

export default defineAppConfig({
  ui: {
    colors: {
      primary: 'brand',
    },
    // This guarantees that short pages do not need a scrollbar to show the footer.
    main: {
      base: 'flex-1 min-h-0',
    },
  },
});
