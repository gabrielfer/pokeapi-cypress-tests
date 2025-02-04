const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/api/**/*.cy.{js,ts,jsx,tsx}",
    supportFile: "cypress/support/api.js",
    downloadsFolder: false,
    fixturesFolder: false,
    baseUrl: 'https://pokeapi.co/api/',
    setupNodeEvents(on, config) {
    },
  },
});
