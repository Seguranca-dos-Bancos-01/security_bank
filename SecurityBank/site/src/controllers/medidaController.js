var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidasCPU(req, res) {
    const limite_linhas = 50;
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasCPU(idUsuario, limite_linhas).then(function (resultado) {
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

function buscarUltimasMedidasREDE(req, res) {
    const limite_linhas = 50;
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasREDE(idUsuario, limite_linhas).then(function (resultado) {
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
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasRAM(idUsuario, limite_linhas).then(function (resultado) {
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
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasDISK(idUsuario, limite_linhas).then(function (resultado) {
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
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasQTD(idUsuario, limite_linhas).then(function (resultado) {
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
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas24h(idUsuario, limite_linhas).then(function (resultado) {
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
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasInstaveis(idUsuario, limite_linhas).then(function (resultado) {
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
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasUltimoAlerta(idUsuario, limite_linhas).then(function (resultado) {
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
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasServidorEmergencia(idUsuario, limite_linhas).then(function (resultado) {
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
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasSelectContas(idUsuario, limite_linhas).then(function (resultado) {
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





function buscarUltimasMedidasServidores(req, res) {
    const limite_linhas = 50;
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasServidores(idUsuario, limite_linhas).then(function (resultado) {
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

function buscarMedidasEmTempoRealServidores(req, res) {
    var idUsuario = req.params.idUsuario;
    console.log(`Recuperando medidas em tempo real`);
    medidaModel.buscarMedidasEmTempoRealServidores(idUsuario).then(function (resultado) {
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



function buscarUltimasMedidas(req, res) {
    const limite_linhas = 50;
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(idUsuario, limite_linhas).then(function (resultado) {
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
    var idUsuario = req.params.idUsuario;
    console.log(`Recuperando medidas em tempo real`);
    medidaModel.buscarMedidasEmTempoReal(idUsuario).then(function (resultado) {
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










function buscarUltimasMedidasServidores2(req, res) {
    const limite_linhas = 50;
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasServidores2(idUsuario, limite_linhas).then(function (resultado) {
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

function buscarMedidasEmTempoRealServidores2(req, res) {
    var idUsuario = req.params.idUsuario;
    console.log(`Recuperando medidas em tempo real`);
    medidaModel.buscarMedidasEmTempoRealServidores2(idUsuario).then(function (resultado) {
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



function buscarUltimasMedidasServidores3(req, res) {
    const limite_linhas = 50;
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasServidores3(idUsuario, limite_linhas).then(function (resultado) {
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

function buscarMedidasEmTempoRealServidores3(req, res) {
    var idUsuario = req.params.idUsuario;
    console.log(`Recuperando medidas em tempo real`);
    medidaModel.buscarMedidasEmTempoRealServidores3(idUsuario).then(function (resultado) {
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




function buscarUltimasMedidasServidores4(req, res) {
    const limite_linhas = 50;
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasServidores4(idUsuario, limite_linhas).then(function (resultado) {
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

function buscarMedidasEmTempoRealServidores4(req, res) {
    var idUsuario = req.params.idUsuario;
    console.log(`Recuperando medidas em tempo real`);
    medidaModel.buscarMedidasEmTempoRealServidores4(idUsuario).then(function (resultado) {
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
    buscarUltimasMedidasSelectContas,
    buscarUltimasMedidasServidores,
    buscarMedidasEmTempoRealServidores,
    buscarUltimasMedidasServidores2,
    buscarMedidasEmTempoRealServidores2,
    buscarUltimasMedidasServidores3,
    buscarMedidasEmTempoRealServidores3,
    buscarUltimasMedidasServidores4,
    buscarMedidasEmTempoRealServidores4,
    buscarUltimasMedidasREDE
    
};
