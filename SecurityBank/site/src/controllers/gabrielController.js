var gabrielmodel = require("../models/gabrielModel");

function kpiIndividual(req, res) {
    var  servidorSelecionado = req.params.servidorSelecionado;

    gabrielmodel.kpiIndividual(servidorSelecionado).then(function (resultado) {
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

    gabrielmodel.PorcentagemTotalProcessador(servidorSelecionado).then(function (resultado) {
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

// function PorcentagemThreads(req, res) {
//     var  servidorSelecionado = req.params.servidorSelecionado;

//     gabrielmodel.PorcentagemThreads(servidorSelecionado).then(function (resultado) {
//         if (resultado.length > 0) {
//             res.status(200).json(resultado);
//         } else {
//             res.status(204).send("Nenhum resultado encontrado!")
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//         console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
//         res.status(500).json(erro.sqlMessage);
//     });
// }


function obterDadosGraficoThreads(req, res) {

    const limite_linhas = 7;

    var servidorSelecionado = req.params.servidorSelecionado;


    gabrielModel.obterDadosGraficoThreads(servidorSelecionado, limite_linhas).then(function (resultado) {
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

    gabrielModel.atualizarGraficoThreads(servidorSelecionado).then(function (resultado) {
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
    kpiIndividual,
    PorcentagemTotalProcessador,
    obterDadosGraficoThreads,
    // PorcentagemThreads
    atualizarGraficoThreads
};