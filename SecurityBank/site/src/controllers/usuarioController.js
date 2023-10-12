var usuarioModel = require("../models/usuarioModel");


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
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

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
        res.status(400).send("Seu telefoe está undefined!");
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

module.exports = {
    autenticar,
    cadastrar,
    atualizarPerfil
}