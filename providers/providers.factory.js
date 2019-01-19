/**
 * @typedef {*} Resolver
 * It contains own providers methods to resolve specific routes and paths.
 * 
 * @property {function} getRoute Build full route.
 * @property {function} getRouteById Build route with a given id.
 */

/**
 * @class ProviderFactory
 * Handle creation of new providers
 */

module.exports = class ProvidersFactory {
  /**
   * @memberof ProviderFactory
   * Handle create method with received params
   * 
   * @param {string} url Base URL from external provider.
   * @param {Resolver} resolver 
   * @param {*} request Service assigned to make http requests ex(axios, superagent...)
   */
  static create(url, resolver, request) {
    return new Provider(url, resolver, request);
  }
}

/**
 * @class Provider
 * This class do http requests to given source.
 */

class Provider {

  /**
   * @memberof Provider
   * @constructor
   * Create a Provider for a url using provided resolver and request
   * 
   * @param {string} url Base API url.
   * @param {Resolver} resolver
   * @param {*} request Service assigned to make http requests ex(axios, superagent...)
   */

  constructor(url, resolver, request) {
    this._url = url;
    this._resolver = resolver;
    this._request = request;
  }

  /**
   * @method get
   * It return a URL builded with base url + id
   * 
   * @param {*} id External API id.
   */

  get(id) {
    return this._request(this._resolver.getRouteById(this._url, id));
  }

  /**
   * @method getAll
   * It return a URL builded with base url.
   */

  getAll() {
    return this._request(this._resolver.getRoute(this._url));
  }
}