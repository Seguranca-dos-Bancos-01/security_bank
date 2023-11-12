var usuarioModel = require("../models/usuarioModel");
var bancoModel = require("../models/bancoModel")

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
        .then(
            function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                if (resultadoAutenticar.length == 1) {
                    console.log(resultadoAutenticar);
                    bancoModel.buscarAquariosPorEmpresa(resultadoAutenticar[0])
                        .then((resultadoBanco) => {
                            if (resultadoBanco.length > 0) {
                                bancoModel.buscarAquariosPorEmpresa(resultadoBanco[0])
                                    .then((resultadoServidor) => {
                                        if (resultadoServidor.length > 0) {
                                            res.json({
                                                idFuncionarios: resultadoAutenticar[0].idFuncionarios,
                                                email: resultadoAutenticar[0].email,
                                                nome: resultadoAutenticar[0].nome,
                                                cpf: resultadoAutenticar[0].cpf,
                                                telefone: resultadoAutenticar[0].telefone,
                                                senha: resultadoAutenticar[0].senha,
                                                fkBanco: resultadoAutenticar[0].fkBanco,
                                                fkEscalonamento: resultadoAutenticar[0].fkEscalonamento,
                                                server: resultadoBanco,
                                            });
                                        } else {
                                            res.status(204).json({ banco: [] });
                                        }
                                    })
                            }
                        })
                        .catch(
                            function (erro) {
                                console.log(erro);
                                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                                res.status(500).json(erro.sqlMessage);
                            }
                        );
                }
            }
        );
    }
}




function UpdateValidadeNova(req, res) {
  
    var validadeNova = req.body.validadeServidorServer;
    var server = req.body.ServerS;


    usuarioModel.UpdateValidadeNova(validadeNova, server).then(function (resultado) {
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

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var cpf =req.body.cpfServer;
    var telefone = req.body.telefoneServer
    var senha = req.body.senhaServer;
    var empresaId = req.body.empresaServer;
    var conf = req.body.confServer;
    
    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (empresaId == undefined) {
        res.status(400).send("Sua empresa está undefined!");
    } else if (cpf == undefined) {
        res.status(400).send("Seu CPF está undefined!");
    } else if (conf == undefined) {
        res.status(400).send("Sua confirmação de senha está undefined!");
    } else if (telefone == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, cpf, telefone, senha, empresaId)
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

function cadastrarServidor(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var apelidoServidor = req.body.apelidoServidorServer;
    var soServidor = req.body.soServidorServer;
    var cpfRespServidor =req.body.cpfRespServidorServer;
    var ipServidor = req.body.ipServidorServer;
    var fkBanco = req.body.fkBancoServer;
    var fkPlano = req.body.fkPlanoServer;
    
    // Faça as validações dos valores
    if (apelidoServidor == undefined) {
        res.status(400).send("Seu apelidoServidor está undefined!");
    } else if (soServidor == undefined) {
        res.status(400).send("Seu soServidor está undefined!");
    } else if (cpfRespServidor == undefined) {
        res.status(400).send("Sua cpfRespServidor está undefined!");
    } else if (ipServidor == undefined) {
        res.status(400).send("Sua ipServidor está undefined!");
    }  else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarServidor(apelidoServidor, soServidor, cpfRespServidor, ipServidor, fkBanco, fkPlano)
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


function cadastrarServidorNuvem(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var apelidoServidor = req.body.apelidoServidorServer;
    var soServidor = req.body.soServidorServer;
    var cpfRespServidor =req.body.cpfRespServidorServer;
    var ipServidor = req.body.ipServidorServer;
    var fkBanco = req.body.fkBancoServer;
    var fkPlano = req.body.fkPlanoServer;
    var compra = req.body.CompraServer;
    var vali = req.body.ValidadeServer
    
    // Faça as validações dos valores
    if (apelidoServidor == undefined) {
        res.status(400).send("Seu apelidoServidor está undefined!");
    } else if (soServidor == undefined) {
        res.status(400).send("Seu soServidor está undefined!");
    } else if (cpfRespServidor == undefined) {
        res.status(400).send("Sua cpfRespServidor está undefined!");
    } else if (ipServidor == undefined) {
        res.status(400).send("Sua ipServidor está undefined!");
    } else if (compra == undefined) {
        res.status(400).send("Sua data compra está undefined!");
    } else if (vali == undefined) {
        res.status(400).send("Sua validade está undefined!");
    }  else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarServidorNuvem(apelidoServidor, soServidor, cpfRespServidor, ipServidor, fkBanco, fkPlano,compra, vali)
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



function atualizarPerfil(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomePerfil = req.body.nomePerfilServer;
    var emailPerfil = req.body.emailPerfilServer;
    var cpfPerfil =req.body.cpfPerfilServer;
    var telefonePerfil = req.body.telefonePerfilServer
    var senhaPerfil = req.body.senhaPerfilServer;
    var idPerfil = req.body.idPerfilServer;
    
    // Faça as validações dos valores
    if (nomePerfil == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (emailPerfil == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senhaPerfil == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (cpfPerfil == undefined) {
        res.status(400).send("Seu CPF está undefined!");
    } else if (telefonePerfil == undefined) {
        res.status(400).send("Seu telefoe está undefined!");
    }else if (idPerfil == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.atualizarPerfil(nomePerfil, emailPerfil, cpfPerfil, telefonePerfil, senhaPerfil, idPerfil)
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



function atualizarNivelAcesso(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nivelAcesso = req.body.NovoNivel;
    var emailPerfil = req.body.Email;
    
    // Faça as validações dos valores
    if (nivelAcesso == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (emailPerfil == undefined) {
        res.status(400).send("Seu email está undefined!");
    }  else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.atualizarNivelAcesso(nivelAcesso, emailPerfil)
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


function excluirConta(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nivelAcesso = req.body.Nivel;
    var emailPerfil = req.body.Email;
    
    // Faça as validações
    // Faça as validações dos valores
    if (nivelAcesso == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (emailPerfil == undefined) {
        res.status(400).send("Seu email está undefined!");
    }  else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.excluirConta(nivelAcesso, emailPerfil)
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


module.exports = {
    autenticar,
    cadastrar,
    atualizarPerfil,
    cadastrarServidor,
    atualizarNivelAcesso,
    excluirConta,
    UpdateValidadeNova,
    cadastrarServidorNuvem,
}