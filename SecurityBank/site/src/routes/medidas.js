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
router.get("/SelectContas/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidasSelectContas(req, res);
});
router.get("/diasFaltando/:selectedServer", function (req, res) {
    medidaController.buscarDiasFaltando(req, res);
});


router.get("/ultimasServidores/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidasServidores(req, res);
});

router.get("/tempo-realServidores/:idUsuario", function (req, res) {
    medidaController.buscarMedidasEmTempoRealServidores(req, res);
})

router.get("/ultimasServidores2/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidasServidores2(req, res);
});

router.get("/tempo-realServidores2/:idUsuario", function (req, res) {
    medidaController.buscarMedidasEmTempoRealServidores2(req, res);
})

router.get("/ultimasServidores3/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidasServidores3(req, res);
});

router.get("/tempo-realServidores3/:idUsuario", function (req, res) {
    medidaController.buscarMedidasEmTempoRealServidores3(req, res);
})
router.get("/ultimasServidores4/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidasServidores4(req, res);
});

router.get("/tempo-realServidores4/:idUsuario", function (req, res) {
    medidaController.buscarMedidasEmTempoRealServidores4(req, res);
})




router.get("/ultimas/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});



router.get("/tempo-real/:idUsuario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})
router.get("/ultimas2/:idUsuario2", function (req, res) {
    medidaController.buscarUltimasMedidas2(req, res);
});

router.get("/tempo-real2/:idUsuario2", function (req, res) {
    medidaController.buscarMedidasEmTempoReal2(req, res);
})


module.exports = router;