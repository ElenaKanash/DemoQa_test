const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  retries:{
    runMode: 1,
    openMode: 1
  },
  e2e: {
    baseUrl: 'https://demoqa.com/',
    setupNodeEvents(on, config) {      
      // implement node event listeners here
    },
  },
});
