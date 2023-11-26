var express = require("express");
var router = express.Router();

var gabrielController = require("../controllers/gabrielController");

router.get("/kpiIndividual/:servidorSelecionado", function (req, res) {
    gabrielController.kpiIndividual(req, res);
})

router.get("/PorcentagemTotalProcessador/:servidorSelecionado", function (req, res) {
    gabrielController.PorcentagemTotalProcessador(req, res);
})

// router.get("/PorcentagemThreads/:servidorSelecionado", function (req, res) {
//     gabrielController.PorcentagemThreads(req, res);
// })

router.get("/obterDadosGraficoThreads/:servidorSelecionado", function (req, res) {
    gabrielController.obterDadosGraficoThreads(req, res);
});

router.get("/atualizarGraficoThreads/:servidorSelecionado", function (req, res) {
    gabrielController.atualizarGraficoThreads(req, res);
})



module.exports = router;