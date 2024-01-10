const express = require('express');
const bodyParse = require('body-parser');

const config = require('../config');
const router = require('./network');

const app = express();

app.use(bodyParse.json());

//ROUTE
app.use('/', router)

app.listen(config.mysqlService.port, () => {
  console.log('Servicio de mysql escuchando en el puerto', config.mysqlService.port);
})