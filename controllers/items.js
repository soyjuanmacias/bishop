const { Router } = require('express');
const providersList = require('../providers/providersList');
const redisClient = require('../redis-client');
const Gateway = require('../services/gateway.service');

module.exports = new Router()
  .get('/', async (req, res) => {
    const result = await Gateway.getAll();
    if (result) {
      res.json(result);
    } else {
      res.sendStatus(404);
    }
  })
  .get('/:id', async (req, res) => {
    const result = await Gateway.getById(req.params.id);
    if(result) {
      res.json(result);
    } else {
      res.sendStatus(404);
    }
  });
