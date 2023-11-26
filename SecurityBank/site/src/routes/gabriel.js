var express = require("express");
var router = express.Router();

var gabrielController = require("../controllers/gabrielController");

router.get("/kpiIndividual/:selectedServer", function (req, res) {
    gabrielController.kpiIndividual(req, res);
})

router.get("/PorcentagemTotalProcessador/:selectedServer", function (req, res) {
    gabrielController.PorcentagemTotalProcessador(req, res);
})

router.get("/PorcentagemThreads/:selectedServer", function (req, res) {
    gabrielController.PorcentagemThreads(req, res);
})



module.exports = router;