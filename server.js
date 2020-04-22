const express = require('express');

express.application.prefix = express.Router.prefix = function (
  path,
  configure
) {
  var router = express.Router();
  this.use(path, router);
  configure(router);
  return router;
}; 

const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Store = require('./api/models/storeModel');
const Variant = require('./api/models/variantModelModel');
const bodyParser = require('body-parser');

const storeRoutes = require('./api/routes/storeRoutes');
const variantRoutes = require('./api/routes/variantRoutes');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Shopify');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.prefix('/api/v1', function(home){
    storeRoutes(home)
})

app.listen(port);

console.log(`Escuchando en ${port}`);