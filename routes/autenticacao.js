var express = require('express');
var router = express.Router();
const controller = require("../controllers/Autenticacao");

router.post("/cadastro", controller.cadastro);

router.post("/login", controller.login);

module.exports = router;
