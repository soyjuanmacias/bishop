// redis-client.js
const redis = require('redis');
const { promisify } = require('util');
const client = redis.createClient(process.env.REDIS_URL);

module.exports = {
  ...client,
  getAsync: promisify(client.get).bind(client),
  setAsync: promisify(client.set).bind(client),
  keysAsync: promisify(client.keys).bind(client),
  existsAsync: promisify(client.exists).bind(client),
  deleteAllAsync: promisify(client.flushall).bind(client)
};

const Gateway = require('./services/gateway.service');

// Let's hot the cache when server start
client.on("connect", () => {
  Gateway.loadDataAndCache();
});