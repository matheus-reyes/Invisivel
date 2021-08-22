var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/inicio', function(req, res, next) {
  res.render('inicio');
});

router.get('/basico', function(req, res, next) {
  res.render('basico');
});


module.exports = router;
