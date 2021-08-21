var express = require('express');
var router = express.Router();
const controller = require("../controllers/Invisivel");
const autorizacao = require("../middlewares/Autorizacao");

router.get("/inicio", autorizacao, controller.inicio);

module.exports = router;
