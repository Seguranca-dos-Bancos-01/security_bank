var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");



router.get("/ultimasPercentCPU/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidasCPU(req, res);
});
router.get("/ultimasPercentRAM/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidasRAM(req, res);
});
router.get("/ultimasPercentDISK/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidasDISK(req, res);
});
router.get("/ultimasQTD/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidasQTD(req, res);
});
router.get("/ultimas24h/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidas24h(req, res);
});
router.get("/sInstaveis/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidasInstaveis(req, res);
});
router.get("/UltimoAlerta/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidasUltimoAlerta(req, res);
});
router.get("/ServerEmergencia/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidasServidorEmergencia(req, res);
});



router.get("/ultimas/:idServidor", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});



router.get("/tempo-real/:idServidor", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})
router.get("/ultimas2/:idServidor2", function (req, res) {
    medidaController.buscarUltimasMedidas2(req, res);
});

router.get("/tempo-real2/:idServidor2", function (req, res) {
    medidaController.buscarMedidasEmTempoReal2(req, res);
})


module.exports = router;