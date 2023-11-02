var medidaModel = require("../models/medidaModel");

function cadastrarAlertaCPUAtencao(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var servidorFK = req.body.servidorFKServer;
    var planoFK = req.body.planoFKServer;
    var bancoFK =req.body.bancoFKServer;
    
    
    // Faça as validações dos valores
    if (servidorFK == undefined) {
        res.status(400).send("Seu servidorFK está undefined!");
    } else if (planoFK == undefined) {
        res.status(400).send("Seu planoFK está undefined!");
    } else if (bancoFK == undefined) {
        res.status(400).send("Sua bancoFK está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        medidaModel.cadastrarAlertaCPUAtencao(servidorFK, planoFK, bancoFK)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarAlertaCPUEmergencia(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var servidorFK = req.body.servidorFKServer;
    var planoFK = req.body.planoFKServer;
    var bancoFK =req.body.bancoFKServer;

        // Faça as validações dos valores
        if (servidorFK == undefined) {
            res.status(400).send("Seu servidorFK está undefined!");
        } else if (planoFK == undefined) {
            res.status(400).send("Seu planoFK está undefined!");
        } else if (bancoFK == undefined) {
            res.status(400).send("Sua bancoFK está undefined!");
        }else {
    
            // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
            medidaModel.cadastrarAlertaCPUEmergencia(servidorFK, planoFK, bancoFK)
                .then(
                    function (resultado) {
                        res.json(resultado);
                    }
                ).catch(
                    function (erro) {
                        console.log(erro);
                        console.log(
                            "\nHouve um erro ao realizar o cadastro! Erro: ",
                            erro.sqlMessage
                        );
                        res.status(500).json(erro.sqlMessage);
                    }
                );
        }
    }

    function cadastrarAlertaCPUUrgencia(req, res) {
        // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
        var servidorFK = req.body.servidorFKServer;
        var planoFK = req.body.planoFKServer;
        var bancoFK =req.body.bancoFKServer;

        // Faça as validações dos valores
        if (servidorFK == undefined) {
            res.status(400).send("Seu servidorFK está undefined!");
        } else if (planoFK == undefined) {
            res.status(400).send("Seu planoFK está undefined!");
        } else if (bancoFK == undefined) {
            res.status(400).send("Sua bancoFK está undefined!");
        }else {
    
            // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
            medidaModel.cadastrarAlertaCPUUrgencia(servidorFK, planoFK, bancoFK)
                .then(
                    function (resultado) {
                        res.json(resultado);
                    }
                ).catch(
                    function (erro) {
                        console.log(erro);
                        console.log(
                            "\nHouve um erro ao realizar o cadastro! Erro: ",
                            erro.sqlMessage
                        );
                        res.status(500).json(erro.sqlMessage);
                    }
                );
        }
    }
    

    
function cadastrarAlertaRAMAtencao(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var servidorFK = req.body.servidorFKServer;
    var planoFK = req.body.planoFKServer;
    var bancoFK =req.body.bancoFKServer;
    
    
    // Faça as validações dos valores
    if (servidorFK == undefined) {
        res.status(400).send("Seu servidorFK está undefined!");
    } else if (planoFK == undefined) {
        res.status(400).send("Seu planoFK está undefined!");
    } else if (bancoFK == undefined) {
        res.status(400).send("Sua bancoFK está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        medidaModel.cadastrarAlertaRAMAtencao(servidorFK, planoFK, bancoFK)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarAlertaRAMEmergencia(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var servidorFK = req.body.servidorFKServer;
    var planoFK = req.body.planoFKServer;
    var bancoFK =req.body.bancoFKServer;

        // Faça as validações dos valores
        if (servidorFK == undefined) {
            res.status(400).send("Seu servidorFK está undefined!");
        } else if (planoFK == undefined) {
            res.status(400).send("Seu planoFK está undefined!");
        } else if (bancoFK == undefined) {
            res.status(400).send("Sua bancoFK está undefined!");
        }else {
    
            // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
            medidaModel.cadastrarAlertaRAMEmergencia(servidorFK, planoFK, bancoFK)
                .then(
                    function (resultado) {
                        res.json(resultado);
                    }
                ).catch(
                    function (erro) {
                        console.log(erro);
                        console.log(
                            "\nHouve um erro ao realizar o cadastro! Erro: ",
                            erro.sqlMessage
                        );
                        res.status(500).json(erro.sqlMessage);
                    }
                );
        }
    }

    function cadastrarAlertaRAMUrgencia(req, res) {
        // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
        var servidorFK = req.body.servidorFKServer;
        var planoFK = req.body.planoFKServer;
        var bancoFK =req.body.bancoFKServer;

        // Faça as validações dos valores
        if (servidorFK == undefined) {
            res.status(400).send("Seu servidorFK está undefined!");
        } else if (planoFK == undefined) {
            res.status(400).send("Seu planoFK está undefined!");
        } else if (bancoFK == undefined) {
            res.status(400).send("Sua bancoFK está undefined!");
        }else {
    
            // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
            medidaModel.cadastrarAlertaRAMUrgencia(servidorFK, planoFK, bancoFK)
                .then(
                    function (resultado) {
                        res.json(resultado);
                    }
                ).catch(
                    function (erro) {
                        console.log(erro);
                        console.log(
                            "\nHouve um erro ao realizar o cadastro! Erro: ",
                            erro.sqlMessage
                        );
                        res.status(500).json(erro.sqlMessage);
                    }
                );
        }
    }
    

    
    
function cadastrarAlertaDISCOAtencao(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var servidorFK = req.body.servidorFKServer;
    var planoFK = req.body.planoFKServer;
    var bancoFK =req.body.bancoFKServer;
    
    
    // Faça as validações dos valores
    if (servidorFK == undefined) {
        res.status(400).send("Seu servidorFK está undefined!");
    } else if (planoFK == undefined) {
        res.status(400).send("Seu planoFK está undefined!");
    } else if (bancoFK == undefined) {
        res.status(400).send("Sua bancoFK está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        medidaModel.cadastrarAlertaDISCOAtencao(servidorFK, planoFK, bancoFK)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarAlertaDISCOEmergencia(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var servidorFK = req.body.servidorFKServer;
    var planoFK = req.body.planoFKServer;
    var bancoFK =req.body.bancoFKServer;

        // Faça as validações dos valores
        if (servidorFK == undefined) {
            res.status(400).send("Seu servidorFK está undefined!");
        } else if (planoFK == undefined) {
            res.status(400).send("Seu planoFK está undefined!");
        } else if (bancoFK == undefined) {
            res.status(400).send("Sua bancoFK está undefined!");
        }else {
    
            // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
            medidaModel.cadastrarAlertaDISCOEmergencia(servidorFK, planoFK, bancoFK)
                .then(
                    function (resultado) {
                        res.json(resultado);
                    }
                ).catch(
                    function (erro) {
                        console.log(erro);
                        console.log(
                            "\nHouve um erro ao realizar o cadastro! Erro: ",
                            erro.sqlMessage
                        );
                        res.status(500).json(erro.sqlMessage);
                    }
                );
        }
    }

    function cadastrarAlertaDISCOUrgencia(req, res) {
        // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
        var servidorFK = req.body.servidorFKServer;
        var planoFK = req.body.planoFKServer;
        var bancoFK =req.body.bancoFKServer;

        // Faça as validações dos valores
        if (servidorFK == undefined) {
            res.status(400).send("Seu servidorFK está undefined!");
        } else if (planoFK == undefined) {
            res.status(400).send("Seu planoFK está undefined!");
        } else if (bancoFK == undefined) {
            res.status(400).send("Sua bancoFK está undefined!");
        }else {
    
            // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
            medidaModel.cadastrarAlertaDISCOUrgencia(servidorFK, planoFK, bancoFK)
                .then(
                    function (resultado) {
                        res.json(resultado);
                    }
                ).catch(
                    function (erro) {
                        console.log(erro);
                        console.log(
                            "\nHouve um erro ao realizar o cadastro! Erro: ",
                            erro.sqlMessage
                        );
                        res.status(500).json(erro.sqlMessage);
                    }
                );
        }
    }
    

function buscarMedidasEmTempoRealAlerta(req, res) {
    var idAlerta = req.params.idAlerta;
    console.log(`Recuperando medidas em tempo real`);
    medidaModel.buscarMedidasEmTempoRealAlerta(idAlerta).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado! NOS ALERTASSSSSSS");
        }
    }).catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao buscar as medidas em tempo real NOS ALERTASSSSSSSSSS.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

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

function buscarHistoricoAlertas(req, res) {
    const limite_linhas = 30;
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarHistoricoAlertas(idUsuario, limite_linhas).then(function (resultado) {
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
    buscarMedidasEmTempoRealAlerta,
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
    cadastrarAlertaCPUAtencao,
    cadastrarAlertaCPUEmergencia,
    cadastrarAlertaCPUUrgencia,
    cadastrarAlertaRAMAtencao,
    cadastrarAlertaRAMEmergencia,
    cadastrarAlertaRAMUrgencia,
     cadastrarAlertaDISCOAtencao,
     cadastrarAlertaDISCOEmergencia,
     cadastrarAlertaDISCOUrgencia,
     buscarHistoricoAlertas,
};
