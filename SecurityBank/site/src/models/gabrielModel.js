var database = require("../database/config");


function kpiIndividual(servidorSelecionado) {
   
    var instrucao = `
    select qtdNucleos, qtdThreads, especificacaoCpu from qtdNucleosThreads where fkServidor = ${servidorSelecionado};`
    return database.executar(instrucao);
}

function PorcentagemTotalProcessador(servidorSelecionado) {
   
    var instrucao = `
    SELECT dadoCaptado
    FROM registros
    WHERE fkServidorReg = ${servidorSelecionado}
    ORDER BY dataHorario DESC 
    LIMIT 1;`   
    return database.executar(instrucao);
}

// function PorcentagemThreads(servidorSelecionado) {
   
//     var instrucao = `
//     select round(avg(porcentagem), 2) as media, numeroThreads from monitoramentoThreads group by numeroThreads;
//    `
//     return database.executar(instrucao);
// }


function obterDadosGraficoThreads(servidorSelecionado, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select round(avg(porcentagem), 2) as media, numeroThreads from monitoramentoThreads group by numeroThreads;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select round(avg(porcentagem), 2) as media, numeroThreads from monitoramentoThreads group by numeroThreads;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizarGraficoThreads(servidorSelecionado) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select round(avg(porcentagem), 2) as media, numeroThreads from monitoramentoThreads group by numeroThreads;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select round(avg(porcentagem), 2) as media, numeroThreads from monitoramentoThreads group by numeroThreads;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    kpiIndividual,
    PorcentagemTotalProcessador,
    // PorcentagemThreads
    obterDadosGraficoThreads,
    atualizarGraficoThreads
    
}