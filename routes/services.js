var express = require('express');
var router = express.Router();
var servicesData = require('../data/services.json');

router.get('/', function(req, res, next) {
  res.json(servicesData);
});

module.exports = router;
