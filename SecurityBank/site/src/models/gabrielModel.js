var database = require("../database/config");


function kpiIndividual(servidorSelecionado) {
   
    var instrucao = `
    select qtdNucleos, qtdThreads, especificacaoCpu from qtdNucleosThreads where fkServidor = 1;`
    return database.executar(instrucao);
}

function PorcentagemTotalProcessador(servidorSelecionado) {
   
    var instrucao = `
    SELECT dadosCaptados
    FROM registros
    WHERE fkServidorReg = 1
    ORDER BY dataHorario DESC 
    LIMIT 1;`
    return database.executar(instrucao);
}


module.exports = {
    kpiIndividual,
    PorcentagemTotalProcessador
}