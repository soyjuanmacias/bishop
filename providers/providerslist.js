let request = require('../services/request.service');
const ProvidersFactory = require('./providers.factory');
const { PokeapiResolver, ClashapiResolver, DriversResolver } = require('./resolvers');

module.exports = {
  "pokeapi": ProvidersFactory.create('https://pokeapi.co/api/v2/pokemon', PokeapiResolver, request),
  "clashapi": ProvidersFactory.create('http://www.clashapi.xyz/api/cards', ClashapiResolver, request),
  "drivers": ProvidersFactory.create('http://ergast.com/api/f1/drivers', DriversResolver, request),
}