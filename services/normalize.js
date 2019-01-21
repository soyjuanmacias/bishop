const CacheService = require('./cache.service');


const apiProvidersPath = {
  "pokeapi": (data) => data['results'],
  "clashapi": (data) => data,
  "drivers": (data) => data['MRData']['DriverTable']['Drivers'],
}

const apiModels = {
  "pokeapi": (apiName, item) => pokeapiModel(apiName, item),
  "clashapi": (apiName, item) => clashapiModel(apiName, item),
  "drivers": (apiName, item) => driversModel(apiName, item),
}

module.exports = class Normalize {
  static async all(apiName, data) {
    const items = apiProvidersPath[apiName](data);
    return items.map(async item => {
      return apiModels[apiName](apiName, item);
    });
  }

  static async getIdAndNameFromCache() {
    if (await CacheService.has('all')) {
      const results = await CacheService.get('all');
      return await JSON.parse(results).map(item  => {
        return {
          id: item.id,
          name: item.name,
        }
      })
    }
  }
  static async getIdAndNameAndImage(item) {
    const {id, name, url} = item;
    return {id, name, url};
  }
}

const pokeapiModel = (apiName, item) => {
  const pokemonId = getPokemonId(item.url);
  return {
    id: pokemonId,
    name: item.name,
    url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
    apiName,
  }
}

const getPokemonId = (url) => {
  return url && url.split('/')[url.split('/').length - 2];
}

const clashapiModel = (apiName, item) => {
  return {
    id: item._id,
    name: item.name,
    url: `http://www.clashapi.xyz/images/cards/${item.idName}.png`,
    apiName,
  }
}

const driversModel = (apiName, item) => {
  return {
    id: item.driverId,
    name: `${item["givenName"]} ${item["familyName"]}`,
    url: item.url,
    apiName,
  }
}