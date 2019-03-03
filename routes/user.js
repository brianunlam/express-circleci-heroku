const express = require('express');
const models = require('../db/models');

const router = express.Router();

router.get('/', (req, res) => {
  models.User.findAll()
    .then((users) => {
      res.send({ users });
    });
});

module.exports = router;
