const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://pokeapi.co/api/',
    setupNodeEvents(on, config) {
    },
  },
});
