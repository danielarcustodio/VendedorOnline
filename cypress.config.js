module.exports = {
  viewportWidth: 1072,
  viewportHeight: 893,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://qa-vendedoronline.viavarejo.com.br',
  },
}
