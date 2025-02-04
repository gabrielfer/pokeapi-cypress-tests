import HttpMethods from './enums/HttpMethods.js';
import HttpStatusCodes from './enums/HttpStatusCodes.js';

describe('PokéAPI Tests', () => {
  it('should return details for Pikachu', () => {
    cy.pokeApi(HttpMethods.GET, 'v2/pokemon/pikachu').then((response) => {
      expect(response.status).to.eq(HttpStatusCodes.OK.code);
      expect(response.body.name).to.eq('pikachu');
      expect(response.body.id).to.eq(25);
    });
  });

  it('should return 404 for an invalid Pokémon', () => {
    cy.pokeApi(HttpMethods.GET, 'v2/pokemon/invalidPokemon').then((response) => {
      expect(response.status).to.eq(HttpStatusCodes.NOT_FOUND.code);
    });
  });

  it('should return 404 Not Found for a POST request', () => {
    cy.pokeApi(HttpMethods.POST, 'v2/pokemon/invalidPokemon').then((response) => {
      expect(response.status).to.eq(HttpStatusCodes.NOT_FOUND.code);
    });
  });

  it('should return 404 for a Pokémon with special characters in the name', () => {
    cy.pokeApi(HttpMethods.GET, 'v2/pokemon/@#$%^').then((response) => {
      expect(response.status).to.eq(HttpStatusCodes.NOT_FOUND.code);
    });
  });

  it('should return 404 for a negative Pokémon ID', () => {
    cy.pokeApi(HttpMethods.GET, 'v2/pokemon/-1').then((response) => {
      expect(response.status).to.eq(HttpStatusCodes.NOT_FOUND.code);
    });
  });

  it('should return 404 for an excessively large Pokémon ID', () => {
    cy.pokeApi(HttpMethods.GET, 'v2/pokemon/99999999').then((response) => {
      expect(response.status).to.eq(HttpStatusCodes.NOT_FOUND.code);
    });
  });
});