const express = require('express');

const router = express.Router();

const response = require('../../../network/response')
const Controller = require('./index'); 
const user = require('./index');

router.get('/', function(req, res) {
  Controller.list()
    .then((lista) => {
      response.success(req, res, lista, 200)
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    })
});

router.get('/:id', function(req, res) {
  Controller.get(req.params.id)
    .then((user) => {
      response.success(req, res, user, 200)
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    })
});

router.get('/upsert/id/:name', function(req, res) {
  Controller.upsert(req.params.id, req.params.name)
    .then((user) => {
      response.success(req, res, user, 200)
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    })

})

module.exports = router;