var express = require("express");
var router = express.Router();

var gabrielController = require("../controllers/gabrielController");

router.get("/kpiINdividual", function (req, res) {
    gabrielController.kpiINdividual(req, res);
})



module.exports = router;