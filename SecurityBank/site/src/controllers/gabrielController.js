var gabrielmodel = require("../models/gabrielModel");

function kpiIndividual(req, res) {
    var  servidorSelecionado = req.params.servidorSelecionado;

    gabrielmodel.kpiIndividual(selectedServer).then(function (resultado) {
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

    gabrielmodel.PorcentagemTotalProcessador(selectedServer).then(function (resultado) {
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

function PorcentagemThreads(req, res) {
    var  servidorSelecionado = req.params.servidorSelecionado;

    gabrielmodel.PorcentagemThreads(selectedServer).then(function (resultado) {
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

module.exports = {
    kpiIndividual,
    PorcentagemTotalProcessador,
    PorcentagemThreads
};