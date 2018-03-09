const { Router } = require('express');

module.exports = new Router()
  .get('/', (req, res) => {
    // Code here
    res.sendStatus(200);
  })
  .get('/:id', (req, res) => {
    // Code here
    res.sendStatus(200);
  });
