var express = require('express');
var router = express.Router();
const controller = require("../controllers/Index");

router.get("/", controller.index);

router.get('/basico', function(req, res, next) {
  res.render('basico');
});


module.exports = router;
