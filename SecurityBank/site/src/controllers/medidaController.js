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


function buscarUltimasMedidasSituSelected(req, res) {
    const limite_linhas = 50;
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasSituSelected(idUsuario, limite_linhas).then(function (resultado) {
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



function ultimoUpload(req, res) {
    const limite_linhas = 50;
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.ultimoUpload(idUsuario, limite_linhas).then(function (resultado) {
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


function BuscarIpServidor(req, res) {
    const limite_linhas = 50;
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.BuscarIpServidor(idUsuario, limite_linhas).then(function (resultado) {
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







function buscarUltimasMedidasValidade(req, res) {
    const limite_linhas = 50;
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasValidade(idUsuario, limite_linhas).then(function (resultado) {
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



function buscarUltimasMedidasBola(req, res) {
    var idUsuario = req.params.idUsuario;
    medidaModel.buscarUltimasMedidasBola(idUsuario).then(function (resultado) {
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

function buscarUltimasMedidasSelectContaPerfil(req, res) {
    const limite_linhas = 50;
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasSelectContaPerfil(idUsuario, limite_linhas).then(function (resultado) {
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

function buscarUltimosAlertas1(req, res) {
    const limite_linhas = 30;
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimosAlertas1(idUsuario, limite_linhas).then(function (resultado) {
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

function buscarUltimosAlertas2(req, res) {
    const limite_linhas = 30;
    var idUsuarioServer = req.params.idUsuarioServer;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimosAlertas2(idUsuarioServer, limite_linhas).then(function (resultado) {
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

function buscarUltimasMedidasTemperatura(req, res) {
    const limite_linhas = 50;
    var servidor = req.params.servidor;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasTemperatura(servidor, limite_linhas).then(function (resultado) {
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
function buscarMedidasEmTempoRealTemperatura(req, res) {
    var servidor = req.params.servidor;
    console.log(`Recuperando medidas em tempo real`);
    medidaModel.buscarMedidasEmTempoReal(servidor).then(function (resultado) {
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







function buscarUltimasMedidasCPU2(req, res) {
    const limite_linhas = 50;
    var servidor = req.params.servidor;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasCPU2(servidor, limite_linhas).then(function (resultado) {
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
function buscarMedidasEmTempoRealCPU2(req, res) {
    var servidor = req.params.servidor;
    console.log(`Recuperando medidas em tempo real`);
    medidaModel.buscarMedidasEmTempoRealCPU(servidor).then(function (resultado) {
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



function buscarDiasFaltando(req, res) {
    const limite_linhas = 50;
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarDiasFaltando(idUsuario).then(function (resultado) {
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

function buscarUltimasUltAlertasSelected(req, res) {
    const limite_linhas = 50;
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasUltAlertasSelected(idUsuario).then(function (resultado) {
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

function buscarUltimasUltAlertasSelected2(req, res) {
    const limite_linhas = 50;
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasUltAlertasSelected2(idUsuario).then(function (resultado) {
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


function buscarUltimasUsbConectadas(req, res) {
    const limite_linhas = 50;
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasUsbConectadas(idUsuario).then(function (resultado) {
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

function componenteMetricaCPU(req, res) {
    const limite_linhas = 50;
    var idSelect = req.params.selectedServer;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.componenteMetricaCPU(idSelect).then(function (resultado) {
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

function componenteMetricaRAM(req, res) {
    const limite_linhas = 50;
    var idSelect = req.params.selectedServer;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.componenteMetricaRAM(idSelect).then(function (resultado) {
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

function componenteMetricaDISCO(req, res) {
    const limite_linhas = 50;
    var idSelect = req.params.selectedServer;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.componenteMetricaDISCO(idSelect).then(function (resultado) {
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

function estadoFrequenteCPU(req, res) {
    const limite_linhas = 50;
    var idSelect = req.params.selectedServer;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.estadoFrequenteCPU(idSelect).then(function (resultado) {
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

function estadoFrequenteDISCO(req, res) {
    const limite_linhas = 50;
    var idSelect = req.params.selectedServer;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.estadoFrequenteDISCO(idSelect).then(function (resultado) {
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

function estadoFrequenteRAM(req, res) {
    const limite_linhas = 50;
    var idSelect = req.params.selectedServer;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.estadoFrequenteRAM(idSelect).then(function (resultado) {
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

function totalAlertas(req, res) {
    const limite_linhas = 50;
    var idSelect = req.params.selectedServer;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.totalAlertas(idSelect).then(function (resultado) {
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



function totalAlertasCPU(req, res) {
    const limite_linhas = 50;
    var idSelect = req.params.selectedServer;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.totalAlertasCPU(idSelect).then(function (resultado) {
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

function totalAlertasRAM(req, res) {
    const limite_linhas = 50;
    var idSelect = req.params.selectedServer;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.totalAlertasRAM(idSelect).then(function (resultado) {
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

function totalAlertasDISCO(req, res) {
    const limite_linhas = 50;
    var idSelect = req.params.selectedServer;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.totalAlertasDISCO(idSelect).then(function (resultado) {
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

function totalAlertasAtencao(req, res) {
    const limite_linhas = 50;
    var idSelect = req.params.selectedServer;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.totalAlertasAtencao(idSelect).then(function (resultado) {
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

function totalAlertasAtencaoCPU(req, res) {
    const limite_linhas = 50;
    var idSelect = req.params.selectedServer;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.totalAlertasAtencaoCPU(idSelect).then(function (resultado) {
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

function totalAlertasAtencaoRAM(req, res) {
    const limite_linhas = 50;
    var idSelect = req.params.selectedServer;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.totalAlertasAtencaoRAM(idSelect).then(function (resultado) {
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

function totalAlertasAtencaoDISCO(req, res) {
    const limite_linhas = 50;
    var idSelect = req.params.selectedServer;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.totalAlertasAtencaoDISCO(idSelect).then(function (resultado) {
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


function totalAlertasEmergencia(req, res) {
    const limite_linhas = 50;
    var idSelect = req.params.selectedServer;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.totalAlertasEmergencia(idSelect).then(function (resultado) {
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

function totalAlertasEmergenciaCPU(req, res) {
    const limite_linhas = 50;
    var idSelect = req.params.selectedServer;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.totalAlertasEmergenciaCPU(idSelect).then(function (resultado) {
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

function totalAlertasEmergenciaRAM(req, res) {
    const limite_linhas = 50;
    var idSelect = req.params.selectedServer;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.totalAlertasEmergenciaRAM(idSelect).then(function (resultado) {
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

function totalAlertasEmergenciaDISCO(req, res) {
    const limite_linhas = 50;
    var idSelect = req.params.selectedServer;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.totalAlertasEmergenciaDISCO(idSelect).then(function (resultado) {
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

function totalAlertasUrgencia(req, res) {
    const limite_linhas = 50;
    var idSelect = req.params.selectedServer;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.totalAlertasUrgencia(idSelect).then(function (resultado) {
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

function totalAlertasUrgenciaCPU(req, res) {
    const limite_linhas = 50;
    var idSelect = req.params.selectedServer;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.totalAlertasUrgenciaCPU(idSelect).then(function (resultado) {
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

function totalAlertasUrgenciaRAM(req, res) {
    const limite_linhas = 50;
    var idSelect = req.params.selectedServer;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.totalAlertasUrgenciaRAM(idSelect).then(function (resultado) {
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

function totalAlertasUrgenciaDISCO(req, res) {
    const limite_linhas = 50;
    var idSelect = req.params.selectedServer;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.totalAlertasUrgenciaDISCO(idSelect).then(function (resultado) {
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

function buscarUltimasMedidasAlertasConsumo1(req, res) {

    const limite_linhas = 7;

    var idSelect = req.params.selectedServer;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasAlertasConsumo1(idSelect, limite_linhas).then(function (resultado) {
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


function buscarMedidasEmTempoRealAlertasConsumo1(req, res) {

    var idSelect = req.params.selectedServer;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoRealAlertasConsumo1(idSelect).then(function (resultado) {
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

function buscarUltimasMedidasAlertasConsumo2(req, res) {

    const limite_linhas = 7;

    var idSelect = req.params.selectedServer;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasAlertasConsumo2(idSelect, limite_linhas).then(function (resultado) {
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


function buscarMedidasEmTempoRealAlertasConsumo2(req, res) {

    var idSelect = req.params.selectedServer;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoRealAlertasConsumo2(idSelect).then(function (resultado) {
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

function buscarUltimasMedidasAlertasConsumoCPU(req, res) {

    const limite_linhas = 7;

    var idSelect = req.params.selectedServer;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasAlertasConsumoCPU(idSelect, limite_linhas).then(function (resultado) {
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


function buscarMedidasEmTempoRealAlertasConsumoCPU(req, res) {

    var idSelect = req.params.selectedServer;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoRealAlertasConsumoCPU(idSelect).then(function (resultado) {
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


function buscarUltimasMedidasAlertasConsumoRAM(req, res) {

    const limite_linhas = 7;

    var idSelect = req.params.selectedServer;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasAlertasConsumoRAM(idSelect, limite_linhas).then(function (resultado) {
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


function buscarMedidasEmTempoRealAlertasConsumoRAM(req, res) {

    var idSelect = req.params.selectedServer;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoRealAlertasConsumoRAM(idSelect).then(function (resultado) {
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

function buscarUltimasMedidasAlertasConsumoDISCO(req, res) {

    const limite_linhas = 7;

    var idSelect = req.params.selectedServer;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasAlertasConsumoDISCO(idSelect, limite_linhas).then(function (resultado) {
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


function buscarMedidasEmTempoRealAlertasConsumoDISCO(req, res) {

    var idSelect = req.params.selectedServer;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoRealAlertasConsumoDISCO(idSelect).then(function (resultado) {
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













function buscarUltimasUltAlertasRede(req, res) {
    const limite_linhas = 50;
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasUltAlertasRede(idUsuario).then(function (resultado) {
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





function buscarUltimasMedidasPing(req, res) {
    
    var idUsuario = req.params.idUsuario;

    

    medidaModel.buscarUltimasMedidasPing(idUsuario).then(function (resultado) {
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



function buscarMedidasEmTempoRealPing(req, res) {
    var idUsuario = req.params.idUsuario;
    console.log(`Recuperando medidas em tempo real`);
    medidaModel.buscarMedidasEmTempoRealPing(idUsuario).then(function (resultado) {
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










function UltimasRedeUpload(req, res) {
    
    var idUsuario = req.params.idUsuario;

    

    medidaModel.UltimasRedeUpload(idUsuario).then(function (resultado) {
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



function TempoRealRedeUpload(req, res) {
    var idUsuario = req.params.idUsuario;
    console.log(`Recuperando medidas em tempo real`);
    medidaModel.TempoRealRedeUpload(idUsuario).then(function (resultado) {
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












function UltimasRedeDownload(req, res) {
    
    var idUsuario = req.params.idUsuario;

    

    medidaModel.UltimasRedeDownload(idUsuario).then(function (resultado) {
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



function TempoRealRedeDownload(req, res) {
    var idUsuario = req.params.idUsuario;
    console.log(`Recuperando medidas em tempo real`);
    medidaModel.TempoRealRedeDownload(idUsuario).then(function (resultado) {
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




function UltimasRedeConnect(req, res) {
    
    var idUsuario = req.params.idUsuario;

    

    medidaModel.UltimasRedeConnect(idUsuario).then(function (resultado) {
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


function BuscarConnect(req, res) {
    
    var idUsuario = req.params.idUsuario;

    

    medidaModel.BuscarConnect(idUsuario).then(function (resultado) {
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









function TempoRealRedeConnect(req, res) {
    var idUsuario = req.params.idUsuario;
    console.log(`Recuperando medidas em tempo real`);
    medidaModel.TempoRealRedeConnect(idUsuario).then(function (resultado) {
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











function kpiIndividual(req, res) {
    var  servidorSelecionado = req.params.servidorSelecionado;

    medidaModel.kpiIndividual(servidorSelecionado).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function PorcentagemTotalProcessador(req, res) {
    var  servidorSelecionado = req.params.servidorSelecionado;

    medidaModel.PorcentagemTotalProcessador(servidorSelecionado).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}




function obterDadosGraficoThreads(req, res) {

    var servidorSelecionado = req.params.servidorSelecionado;


    medidaModel.obterDadosGraficoThreads(servidorSelecionado).then(function (resultado) {
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


function atualizarGraficoThreads(req, res) {

    var servidorSelecionado = req.params.servidorSelecionado;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.atualizarGraficoThreads(servidorSelecionado).then(function (resultado) {
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





function buscarUltimasMedidasPRT(req, res) {
    const limite_linhas = 50;
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasPRT(idUsuario).then(function (resultado) {
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




function buscarUltimasMedidasTOT(req, res) {
    const limite_linhas = 50;
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasTOT(idUsuario).then(function (resultado) {
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
    buscarUltimasMedidasREDE,
    buscarUltimasMedidasValidade,
    buscarUltimosAlertas1,
    buscarUltimosAlertas2,
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
    buscarDiasFaltando,
    buscarUltimasMedidasSituSelected,
    buscarUltimasUltAlertasSelected,
    buscarUltimasUsbConectadas,
    buscarUltimasUltAlertasSelected2, 
    buscarUltimasMedidasBola,
    buscarUltimasMedidasSelectContaPerfil,
    componenteMetricaCPU,
    componenteMetricaRAM,
    componenteMetricaDISCO,
    estadoFrequenteCPU,
    estadoFrequenteDISCO,
    estadoFrequenteRAM,
    totalAlertas,
    totalAlertasCPU,
    totalAlertasRAM,
    totalAlertasDISCO,
    totalAlertasAtencao,
    totalAlertasAtencaoCPU,
    totalAlertasAtencaoRAM,
    totalAlertasAtencaoDISCO,
    totalAlertasEmergencia,
    totalAlertasEmergenciaCPU,
    totalAlertasEmergenciaRAM,
    totalAlertasEmergenciaDISCO,
    totalAlertasUrgencia,
    totalAlertasUrgenciaCPU,
    totalAlertasUrgenciaRAM,
    totalAlertasUrgenciaDISCO,
    buscarUltimasMedidasAlertasConsumo1,
    buscarMedidasEmTempoRealAlertasConsumo1,
    buscarUltimasMedidasAlertasConsumo2,
    buscarMedidasEmTempoRealAlertasConsumo2,    
    buscarUltimasMedidasAlertasConsumoCPU,
    buscarMedidasEmTempoRealAlertasConsumoCPU,
    buscarUltimasMedidasAlertasConsumoRAM,
    buscarMedidasEmTempoRealAlertasConsumoRAM,
    buscarUltimasMedidasAlertasConsumoDISCO,
    buscarMedidasEmTempoRealAlertasConsumoDISCO,
    ultimoUpload,
    BuscarIpServidor,
    UltimasRedeConnect,
    TempoRealRedeConnect,
    TempoRealRedeDownload,
    UltimasRedeDownload,
    UltimasRedeUpload,
    TempoRealRedeUpload,
    BuscarConnect,
    buscarUltimasMedidasPing,
    buscarMedidasEmTempoRealPing,
    buscarUltimasUltAlertasRede,
    buscarUltimasMedidasTemperatura,
    buscarMedidasEmTempoRealTemperatura,
    buscarUltimasMedidasCPU2,
    buscarMedidasEmTempoRealCPU2,
    kpiIndividual,
    PorcentagemTotalProcessador,
    atualizarGraficoThreads,
    obterDadosGraficoThreads,
    buscarUltimasMedidasPRT,
    buscarUltimasMedidasTOT
};
