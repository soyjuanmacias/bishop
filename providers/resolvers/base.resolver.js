/**
 * @class BaseResolver
 * Base class to ensure that specific resolvers has required methods implemented.
 */

module.exports = class BaseResolver {

  /**
   * @method getRoute
   * Throws an error if method is not implemented in child classes.
   */

  static getRoute() {
    throw new Error('Not implemented')
  }

  /**
  * @method getRouteById
  * Throws an error if method is not implemented in child classes.
  */

  static getRouteById() {
    throw new Error('Not implemented')
  }
}