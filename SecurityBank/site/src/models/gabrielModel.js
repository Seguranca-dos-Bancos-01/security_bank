var database = require("../database/config");


function kpiIndividual(servidorSelecionado) {
   
    var instrucao = `
    select qtdNucleos, qtdThreads, especificacaoCpu from qtdNucleosThreads where fkServidor = ${servidorSelecionado};`
    return database.executar(instrucao);
}


module.exports = {
    kpiIndividual
}