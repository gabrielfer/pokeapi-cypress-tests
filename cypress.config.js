const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    fixturesFolder: false,
    baseUrl: 'https://pokeapi.co/api/',
    setupNodeEvents(on, config) {
    },
  },
});
