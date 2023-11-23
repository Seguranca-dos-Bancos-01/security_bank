var express = require("express");
var router = express.Router();

var gabrielController = require("../controllers/gabrielController");

router.get("/kpiINdividual/:servidorSelecionado", function (req, res) {
    gabrielController.kpiIndividual(req, res);
})



module.exports = router;