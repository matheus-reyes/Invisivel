var express = require('express');
var router = express.Router();
const controller = require("../controllers/Invisivel");
const autorizacao = require("../middlewares/Autorizacao");
const upload = require("../lib/upload");

// router.get("/inicio", autorizacao, controller.inicio);

router.get("mapa/inicio", autorizacao, controller.inicio)

router.post("/reporte", upload.single("img"), autorizacao, controller.criarReporte);

router.get("/reportes", controller.consultarReportes);

module.exports = router;
