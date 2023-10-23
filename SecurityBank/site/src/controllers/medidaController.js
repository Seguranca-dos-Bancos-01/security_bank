var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidasCPU(req, res) {
    const limite_linhas = 50;
    var idServidor = req.params.idServidor;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasCPU(idServidor, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao buscar as últimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function buscarUltimasMedidasRAM(req, res) {
    const limite_linhas = 50;
    var idServidor = req.params.idServidor;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasRAM(idServidor, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao buscar as últimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function buscarUltimasMedidasDISK(req, res) {
    const limite_linhas = 50;
    var idServidor = req.params.idServidor;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasDISK(idServidor, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao buscar as últimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidasQTD(req, res) {
    const limite_linhas = 50;
    var idServidor = req.params.idServidor;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasQTD(idServidor, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao buscar as últimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidas24h(req, res) {
    const limite_linhas = 50;
    var idServidor = req.params.idServidor;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas24h(idServidor, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao buscar as últimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function buscarUltimasMedidasInstaveis(req, res) {
    const limite_linhas = 50;
    var idServidor = req.params.idServidor;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasInstaveis(idServidor, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao buscar as últimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidasUltimoAlerta(req, res) {
    const limite_linhas = 50;
    var idServidor = req.params.idServidor;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasUltimoAlerta(idServidor, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao buscar as últimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function buscarUltimasMedidasServidorEmergencia(req, res) {
    const limite_linhas = 50;
    var idServidor = req.params.idServidor;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasServidorEmergencia(idServidor, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao buscar as últimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}



function buscarUltimasMedidasSelectContas(req, res) {
    const limite_linhas = 50;
    var idServidor = req.params.idServidor;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasSelectContas(idServidor, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao buscar as últimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}





function buscarUltimasMedidas(req, res) {
    const limite_linhas = 50;
    var idServidor = req.params.idServidor;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(idServidor, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao buscar as últimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoReal(req, res) {
    var idServidor = req.params.idServidor;
    console.log(`Recuperando medidas em tempo real`);
    medidaModel.buscarMedidasEmTempoReal(idServidor).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao buscar as medidas em tempo real.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidas2(req, res) {

    const limite_linhas = 7;

    var idUsuario2 = req.params.idUsuario2;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas2(idUsuario2, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal2(req, res) {

    var idUsuario2 = req.params.idUsuario2;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal2(idUsuario2).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarUltimasMedidas2,
    buscarMedidasEmTempoReal2,
    buscarUltimasMedidasCPU,
    buscarUltimasMedidasRAM,
    buscarUltimasMedidasDISK,
    buscarUltimasMedidasQTD,
    buscarUltimasMedidas24h,
    buscarUltimasMedidasInstaveis,
    buscarUltimasMedidasUltimoAlerta,
    buscarUltimasMedidasServidorEmergencia,
    buscarUltimasMedidasSelectContas

};
