const express = require('express');

const secure = require('./secure')
const response = require('../../../network/response');
const Controller = require('./index'); 

const router = express.Router();

// Router
router.get('/', list);
router.get('/:id', get);
router.post('/', upsert);
router.put('/',secure('update'), upsert);



// function
function list(req, res, next) {
  Controller.list()
    .then(data => {
      response.success(req, res, data, 200);
    })
    .catch(next);
}

function get(req, res, next) {
  Controller.get(req.params.id)
    .then((post) => {
      response.success(req, res, post, 200)
    })
    .catch(next)
};

function upsert(req, res, next) {
  Controller.upsert(req.body)
      .then((user) => {
          response.success(req, res, user, 201);
      })
      .catch(next);
}


module.exports = router;