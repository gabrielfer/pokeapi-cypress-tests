Cypress.Commands.add('pokeApi', (method, endpoint, options = {}) => {
    cy.api({
      method: method,
      url: endpoint,
      failOnStatusCode: false,
      ...options,
    });
  });
  