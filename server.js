const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

const mongoose = require('mongoose');
const Task = require('./api/models/todoListModel');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

const routes = require('./api/routes/todoListRoutes')
routes(app)

app.listen(port);

console.log(`Escuchando en ${port}`);