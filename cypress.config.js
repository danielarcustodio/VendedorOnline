const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qa-vendedoronline.viavarejo.com.br',
    viewportWidth: 1072,
    viewportHeight: 893,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});