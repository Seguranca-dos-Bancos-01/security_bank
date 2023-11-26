var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.post("/cadastrarAlertaCPUAtencao", function (req, res) {
    medidaController.cadastrarAlertaCPUAtencao(req, res);
})


router.post("/cadastrarAlertaCPUEmergencia", function (req, res) {
    medidaController.cadastrarAlertaCPUEmergencia(req, res);
})


router.post("/cadastrarAlertaCPUUrgencia", function (req, res) {
    medidaController.cadastrarAlertaCPUUrgencia(req, res);
})



router.post("/cadastrarAlertaRAMAtencao", function (req, res) {
    medidaController.cadastrarAlertaRAMAtencao(req, res);
})


router.post("/cadastrarAlertaRAMEmergencia", function (req, res) {
    medidaController.cadastrarAlertaRAMEmergencia(req, res);
})


router.post("/cadastrarAlertaRAMUrgencia", function (req, res) {
    medidaController.cadastrarAlertaRAMUrgencia(req, res);
})


router.post("/cadastrarAlertaDISCOAtencao", function (req, res) {
    medidaController.cadastrarAlertaDISCOAtencao(req, res);
})


router.post("/cadastrarAlertaDISCOEmergencia", function (req, res) {
    medidaController.cadastrarAlertaDISCOEmergencia(req, res);
})


router.post("/cadastrarAlertaDISCOUrgencia", function (req, res) {
    medidaController.cadastrarAlertaDISCOUrgencia(req, res);
})



router.get("/tempo-real/:idAlerta", function (req, res) {
    medidaController.buscarMedidasEmTempoRealAlerta(req, res);
})

router.get("/ultimasPercentCPU/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidasCPU(req, res);
});

router.get("/ultimasPercentREDE/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidasREDE(req, res);
});

router.get("/ultimasSituSelected/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidasSituSelected(req, res);
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

router.get("/ultimasBolaStatus/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidasBola(req, res);
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

router.get("/HistoricoAlertas/:idUsuario", function (req, res) {
    medidaController.buscarHistoricoAlertas(req, res);});





router.get("/UltimosAlertas1/:idUsuario", function (req, res) {
    medidaController.buscarUltimosAlertas1(req, res);});

router.get("/UltimosAlertas2/:idUsuarioServer", function (req, res) {
     medidaController.buscarUltimosAlertas2(req, res);});

router.get("/diasFaltando/:idUsuario", function (req, res) {
    medidaController.buscarDiasFaltando(req, res);})

router.get("/ultimasUltAlertasSelected/:idUsuario", function (req, res) {
    medidaController.buscarUltimasUltAlertasSelected(req, res);})
    router.get("/ultimasUltAlertasSelected2/:idUsuario", function (req, res) {
        medidaController.buscarUltimasUltAlertasSelected2(req, res);})
    
    router.get("/ultimasUsbConectadas/:idUsuario", function (req, res) {
        medidaController.buscarUltimasUsbConectadas(req, res);})
    
    

router.get("/ultimasValidadeServer/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidasValidade(req, res);
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

router.get("/Temperatura/:servidor", function (req, res) {
    medidaController.buscarUltimasMedidasTemperatura(req, res);
});
router.get("/tempo-realTemperatura/:servidor", function (req, res) {
    medidaController.buscarMedidasEmTempoRealTemperatura(req, res);
})


router.get("/tempo-real/:idUsuario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})
router.get("/ultimas2/:idUsuario2", function (req, res) {
    medidaController.buscarUltimasMedidas2(req, res);
});

router.get("/tempo-real2/:idUsuario2", function (req, res) {
    medidaController.buscarMedidasEmTempoReal2(req, res);
});

module.exports = router;