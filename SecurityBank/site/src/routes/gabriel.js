var express = require("express");
var router = express.Router();

var gabrielController = require("../controllers/gabrielController");

router.get("/kpiIndividual/:servidorSelecionado", function (req, res) {
    gabrielController.kpiIndividual(req, res);
})

router.get("/PorcentagemTotalProcessador/:servidorSelecionado", function (req, res) {
    gabrielController.PorcentagemTotalProcessador(req, res);
})

router.get("/PorcentagemThreads/:servidorSelecionado", function (req, res) {
    gabrielController.PorcentagemThreads(req, res);
})



module.exports = router;