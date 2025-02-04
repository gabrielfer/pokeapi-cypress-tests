const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    downloadsFolder: false,
    fixturesFolder: false,
    baseUrl: 'https://pokeapi.co/api/',
    setupNodeEvents(on, config) {
    },
  },
});
