var express = require('express');
var router = express.Router();
var app = require('../client/src/App.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express'});
});

module.exports = router;
