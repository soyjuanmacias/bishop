const CacheService = require('./cache.service');
const Normalize = require('./normalize');
const providersList = require('../providers/providersList');

module.exports = class Gateway {
  static async loadDataAndCache() {
    const allProvidersData = await this._getDataFromProviders();
    CacheService.set('all', JSON.stringify(allProvidersData))
  }

  static async getAll() {
    if (await CacheService.has('all')) {
      return await Normalize.getIdAndNameFromCache();
    } else {
      await this.loadDataAndCache();
      return await Normalize.getIdAndNameFromCache();
    }
  }

  static async getById(id) {
    const cached = JSON.parse(await CacheService.get('all'));
    let item = cached && cached.filter(item => id === item.id);
    if (item && item.length) {
      item = item.shift(1);
      return Normalize.getIdAndNameAndImage(item);
    } else {
      this.loadDataAndCache();
    }
  }

  static async _getDataFromProviders() {
    const providersData = await Object.keys(providersList).map(async (provider, index) => {
      let providerRequest = await providersList[provider].getAll();
      let providerResult = await Normalize.all(provider, JSON.parse(providerRequest.body));
      return await Promise.all(providerResult);
    });
    const providersDataMerge = [].concat.apply([], await Promise.all(providersData))
    return providersDataMerge;
  }
}