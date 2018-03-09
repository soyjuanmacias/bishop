const app = require('./app');

app
  .use('/items', require('./controllers/items'))
  .use('/taxonomies', require('./controllers/taxonomies'))
  .all('*', (req, res) => res.sendStatus(404))
  .listen(3000);
