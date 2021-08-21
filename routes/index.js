var express = require('express');
var router = express.Router();
const controller = require("../controllers/Index");

router.get("/", controller.index);

module.exports = router;
