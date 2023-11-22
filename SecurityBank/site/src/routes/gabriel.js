var express = require("express");
var router = express.Router();

var gabrielController = require("../controllers/gabrielController");

router.post("/cadastrarAlertaCPUAtencao", function (req, res) {
    gabrielControllerController.cadastrarAlertaCPUAtencao(req, res);
})



module.exports = router;