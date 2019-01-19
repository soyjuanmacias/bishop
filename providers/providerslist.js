let request = require('../services/request.service');
const PokeapiResolver = require('./resolvers/pokeapi.resolver');
const ClashapiResolver = require('./resolvers/clahsapi.resolver');
const DriversResolver = require('./resolvers/drivers.resolver');
const ProvidersFactory = require('./providers.factory');

module.exports = {
  "pokeapi": ProvidersFactory.create('https://pokeapi.co/api/v2/pokemon', PokeapiResolver, request),
  "clashapi": ProvidersFactory.create('http://www.clashapi.xyz/api/cards', ClashapiResolver, request),
  "drivers": ProvidersFactory.create('http://ergast.com/api/f1/drivers', DriversResolver, request),
}