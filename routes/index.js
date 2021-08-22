var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/inicio', function(req, res, next) {
  res.render('inicio');
});

router.get('/menu', function(req, res, next) {
  res.render('menu');
});


module.exports = router;
