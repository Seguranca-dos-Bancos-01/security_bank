var database = require("../database/config");


function QtdNucleos() {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function QtdNucleos()");
    var instrucao = `

    select qtdNucleos from qtdNucleosThreads;
    `

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}




function QtdThreads() {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function QtdThreads()");
    var instrucao = `

    select qtdThreads from qtdNucleosThreads;

    `

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function EspecificacaoCPU() {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function EspecificacaoCPU()");
    var instrucao = `

    select especificacaoCpu from qtdNucleosThreads;

    `

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function PorcentagemThreads() {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function PorcentagemThreads()");
    var instrucao = `

    select especificacaoCpu from qtdNucleosThreads;

    `

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}










module.exports = {
    
    QtdNucleos,
    QtdThreads,
    EspecificacaoCPU,
    PorcentagemThreads
    
}