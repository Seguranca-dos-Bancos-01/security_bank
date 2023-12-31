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
router.post("/ultimasUploadREDE/:idUsuario", function (req, res) {
    medidaController.ultimoUpload(req, res);
})

router.get("/ultimasIpREDE/:idUsuario", function (req, res) {
    medidaController.BuscarIpServidor(req, res);
})

router.get("/ultimasConnect/:idUsuario", function (req, res) {
    medidaController.BuscarConnect(req, res);
})


router.get("/ultimasRedeConnect/:idUsuario", function (req, res) {
    medidaController.UltimasRedeConnect(req, res);
})
router.get("/tempo-realRedeConnect/:idUsuario", function (req, res) {
    medidaController.TempoRealRedeConnect(req, res);
})


router.get("/ultimasDownload/:idUsuario", function (req, res) {
    medidaController.UltimasRedeDownload(req, res);
})
router.get("/tempo-real-Download/:idUsuario", function (req, res) {
    medidaController.TempoRealRedeDownload(req, res);
})

router.get("/ultimasUpload/:idUsuario", function (req, res) {
    medidaController.UltimasRedeUpload(req, res);
})
router.get("/tempo-real-Upload/:idUsuario", function (req, res) {
    medidaController.TempoRealRedeUpload(req, res);
})

router.get("/ultimasPing/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidasPing(req, res);
});

router.get("/tempo-realPing/:idUsuario", function (req, res) {
    medidaController.buscarMedidasEmTempoRealPing(req, res);
})

router.get("/ultimasUltAlertasRede/:idUsuario", function (req, res) {
    medidaController.buscarUltimasUltAlertasRede(req, res);})
   








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

router.get("/SelectContaPerfil/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidasSelectContaPerfil(req, res);
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

router.get("/CPU2/:servidor", function (req, res) {
    medidaController.buscarUltimasMedidasCPU2(req, res);
});
router.get("/tempo-realCPU2/:servidor", function (req, res) {
    medidaController.buscarMedidasEmTempoRealCPU2(req, res);
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

router.get("/componenteMetricaCPU/:selectedServer", function (req, res) {
    medidaController.componenteMetricaCPU(req, res);
})

router.get("/componenteMetricaDISCO/:selectedServer", function (req, res) {
    medidaController.componenteMetricaDISCO(req, res);
})

router.get("/componenteMetricaRAM/:selectedServer", function (req, res) {
    medidaController.componenteMetricaRAM(req, res);
})

router.get("/estadoFrequenteCPU/:selectedServer", function (req, res) {
    medidaController.estadoFrequenteCPU(req, res);
})

router.get("/estadoFrequenteDISCO/:selectedServer", function (req, res) {
    medidaController.estadoFrequenteDISCO(req, res);
})

router.get("/estadoFrequenteRAM/:selectedServer", function (req, res) {
    medidaController.estadoFrequenteRAM(req, res);
})

router.get("/totalAlertas/:selectedServer", function (req, res) {
    medidaController.totalAlertas(req, res);
})


router.get("/totalAlertasCPU/:selectedServer", function (req, res) {
    medidaController.totalAlertasCPU(req, res);
})

router.get("/totalAlertasRAM/:selectedServer", function (req, res) {
    medidaController.totalAlertasRAM(req, res);
})

router.get("/totalAlertasDISCO/:selectedServer", function (req, res) {
    medidaController.totalAlertasDISCO(req, res);
})

router.get("/totalAlertasAtencao/:selectedServer", function (req, res) {
    medidaController.totalAlertasAtencao(req, res);
})

router.get("/totalAlertasAtencaoCPU/:selectedServer", function (req, res) {
    medidaController.totalAlertasAtencaoCPU(req, res);
})

router.get("/totalAlertasAtencaoRAM/:selectedServer", function (req, res) {
    medidaController.totalAlertasAtencaoRAM(req, res);
})

router.get("/totalAlertasAtencaoDISCO/:selectedServer", function (req, res) {
    medidaController.totalAlertasAtencaoDISCO(req, res);
})

router.get("/totalAlertasEmergencia/:selectedServer", function (req, res) {
    medidaController.totalAlertasEmergencia(req, res);
})

router.get("/totalAlertasEmergenciaCPU/:selectedServer", function (req, res) {
    medidaController.totalAlertasEmergenciaCPU(req, res);
})

router.get("/totalAlertasEmergenciaRAM/:selectedServer", function (req, res) {
    medidaController.totalAlertasEmergenciaRAM(req, res);
})

router.get("/totalAlertasEmergenciaDISCO/:selectedServer", function (req, res) {
    medidaController.totalAlertasEmergenciaDISCO(req, res);
})

router.get("/totalAlertasUrgencia/:selectedServer", function (req, res) {
    medidaController.totalAlertasUrgencia(req, res);
})

router.get("/totalAlertasUrgenciaCPU/:selectedServer", function (req, res) {
    medidaController.totalAlertasUrgenciaCPU(req, res);
})

router.get("/totalAlertasUrgenciaRAM/:selectedServer", function (req, res) {
    medidaController.totalAlertasUrgenciaRAM(req, res);
})

router.get("/totalAlertasUrgenciaDISCO/:selectedServer", function (req, res) {
    medidaController.totalAlertasUrgenciaDISCO(req, res);
})

router.get("/ultimasAlertasConsumo1/:selectedServer", function (req, res) {
    medidaController.buscarUltimasMedidasAlertasConsumo1(req, res);
});

router.get("/tempo-realAlertasConsumo1/:selectedServer", function (req, res) {
    medidaController.buscarMedidasEmTempoRealAlertasConsumo1(req, res);
})

router.get("/ultimasAlertasConsumo2/:selectedServer", function (req, res) {
    medidaController.buscarUltimasMedidasAlertasConsumo2(req, res);
});

router.get("/tempo-realAlertasConsumo2/:selectedServer", function (req, res) {
    medidaController.buscarMedidasEmTempoRealAlertasConsumo2(req, res);
})

router.get("/ultimasAlertasConsumoCPU/:selectedServer", function (req, res) {
    medidaController.buscarUltimasMedidasAlertasConsumoCPU(req, res);
});

router.get("/tempo-realAlertasConsumoCPU/:selectedServer", function (req, res) {
    medidaController.buscarMedidasEmTempoRealAlertasConsumoCPU(req, res);
})

router.get("/ultimasAlertasConsumoRAM/:selectedServer", function (req, res) {
    medidaController.buscarUltimasMedidasAlertasConsumoRAM(req, res);
});

router.get("/tempo-realAlertasConsumoRAM/:selectedServer", function (req, res) {
    medidaController.buscarMedidasEmTempoRealAlertasConsumoRAM(req, res);
})

router.get("/ultimasAlertasConsumoDISCO/:selectedServer", function (req, res) {
    medidaController.buscarUltimasMedidasAlertasConsumoDISCO(req, res);
});

router.get("/tempo-realAlertasConsumoDISCO/:selectedServer", function (req, res) {
    medidaController.buscarMedidasEmTempoRealAlertasConsumoDISCO(req, res);
})






router.get("/kpiIndividual/:servidorSelecionado", function (req, res) {
    medidaController.kpiIndividual(req, res);
})

router.get("/PorcentagemTotalProcessador/:servidorSelecionado", function (req, res) {
    medidaController.PorcentagemTotalProcessador(req, res);
})


router.get("/obterDadosGraficoThreads/:servidorSelecionado", function (req, res) {
    medidaController.obterDadosGraficoThreads(req, res);
});

router.get("/atualizarGraficoThreads/:servidorSelecionado", function (req, res) {
    medidaController.atualizarGraficoThreads(req, res);
})




router.get("/ultimasPje/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidasPRT(req, res);
})

router.get("/ultimasPje2/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidasTOT(req, res);
})

module.exports = router;