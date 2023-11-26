var database = require("../database/config");


function kpiIndividual(servidorSelecionado) {
   
    var instrucao = `
    select qtdNucleos, qtdThreads, especificacaoCpu from qtdNucleosThreads where fkServidor = ${servidorSelecionado};`
    return database.executar(instrucao);
}

function PorcentagemTotalProcessador(servidorSelecionado) {
   
    var instrucao = `
    SELECT dadosCaptados
    FROM registros
    WHERE fkServidorReg = ${servidorSelecionado}
    ORDER BY dataHorario DESC 
    LIMIT 1;`
    return database.executar(instrucao);
}

function PorcentagemThreads(servidorSelecionado) {
   
    var instrucao = `
    SELECT mt.*
FROM monitoramentoThreads AS mt
JOIN (
    SELECT numeroThreads, MAX(idcaptacao) AS ultimaCaptacao
    FROM monitoramentoThreads
    GROUP BY numeroThreads
) AS ultimos ON mt.idcaptacao = ultimos.ultimaCaptacao
ORDER BY mt.numeroThreads asc; 
   `
    return database.executar(instrucao);
}


module.exports = {
    kpiIndividual,
    PorcentagemTotalProcessador,
    PorcentagemThreads
    
}