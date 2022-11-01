const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'yb48wr',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
