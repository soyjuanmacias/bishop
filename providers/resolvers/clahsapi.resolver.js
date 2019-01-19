const BaseResolver = require('./base.resolver');

/**
 * @class ClashapiResolver
 * Define specific resolver for Clash API Provider.
 */

module.exports = class ClashapiResolver extends BaseResolver {

  /**
  * @method getRoute
  * Recive an url and build the specific url with queries or wathever it need.
  *
  * @param {string} url Specific url for this provider.
  */

  static getRoute(url) {
    return `${url}`;
  }

  /**
   * @method getRouteById
   * Return builded url with base url, id and quereis or wathever it need.
   *
   * @param {string} url Base url from provider.
   * @param {*} id Specific id from provider.
   */

  static getRouteById(url, id) {
    return `${url}/${id}`;
  }
}
