const redisClient = require('./../redis-client');

/**
 * @class CacheService
 * Handle and wrap cache provider.
 */
module.exports = class CacheService {

  /**
   * @method get
   * Search in cache storage for the key provided.
   * 
   * @param {*} key Parameter to search as a key in the storage.
   */
  
  static async get(key) {
    return await redisClient.getAsync(key)
  }

  /**
   * @method has
   * Return true if has results for the key provided
   *
   * @param {*} key Parameter to search as a key in the storage.
   */

  static async has(key) {
    return await redisClient.existsAsync(key);
  }

  /**
   * @method set
   * Save provided data in cache system.
   * 
   * @param {*} key Parameter to save as key in the storage.
   * @param {string} value Value to storage in cache
   */

  static async set(key, value) {
    return await redisClient.setAsync(key, value)
  }

  /**
   * @method getAll
   * Returns all values stored in cache.
   */

  static async getAll() {
    return await redisClient.keysAsync('*');
  }

  /**
   * @method deleteAll
   * Delete all data stored in cache system.
   */
  
  static async deleteAll() {
    return await redisClient.deleteAllAsync();
  }
}