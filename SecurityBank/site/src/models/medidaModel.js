var database = require("../database/config");

function buscarUltimasMedidasCPU(idServidor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select dadosCaptados from registros where fkComponentesReg =1 order by idRegistros desc limit 1;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select dadosCaptados as asd from registros where fkComponentesReg =1 order by idRegistros desc limit 1;
    
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarUltimasMedidasRAM(idServidor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select dadosCaptados as ads from registros where fkComponentesReg =2 order by idRegistros desc limit 1;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select dadosCaptados as ads from registros where fkComponentesReg =2 order by idRegistros desc limit 1;
    
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasDISK(idServidor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select dadosCaptados as sda from registros where fkComponentesReg =3 order by idRegistros desc limit 1;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select dadosCaptados as sda from registros where fkComponentesReg =3 order by idRegistros desc limit 1;
    
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function buscarUltimasMedidas(idServidor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT
        (SELECT MAX(dadosCaptados) FROM registros WHERE fkComponentesReg = 1) AS proc,
        (SELECT MAX(dadosCaptados) FROM registros WHERE fkComponentesReg = 2) AS RAM,
        (SELECT MAX(dadosCaptados) FROM registros WHERE fkComponentesReg = 3) AS disco,
        dataHorario AS horario
    FROM registros
    JOIN Componentes ON fkComponentesReg = idComponentes
    LIMIT 0, 50;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT
        (SELECT MAX(dadosCaptados) FROM registros WHERE fkComponentesReg = 1) AS proc,
        (SELECT MAX(dadosCaptados) FROM registros WHERE fkComponentesReg = 2) AS RAM,
        (SELECT MAX(dadosCaptados) FROM registros WHERE fkComponentesReg = 3) AS disco,
        dataHorario AS horario
    FROM registros
    JOIN Componentes ON fkComponentesReg = idComponentes
    LIMIT 0, 50;
    
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idServidor) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT
        (SELECT MAX(dadosCaptados) FROM registros WHERE fkComponentesReg = 1) AS proc,
        (SELECT MAX(dadosCaptados) FROM registros WHERE fkComponentesReg = 2) AS RAM,
        (SELECT MAX(dadosCaptados) FROM registros WHERE fkComponentesReg = 3) AS disco,
        dataHorario AS horario
    FROM registros
    JOIN Componentes ON fkComponentesReg = idComponentes
    LIMIT 0, 50;
    
    `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT
        (SELECT MAX(dadosCaptados) FROM registros WHERE fkComponentesReg = 1) AS proc,
        (SELECT MAX(dadosCaptados) FROM registros WHERE fkComponentesReg = 2) AS RAM,
        (SELECT MAX(dadosCaptados) FROM registros WHERE fkComponentesReg = 3) AS disco,
        dataHorario AS horario
    FROM registros
    JOIN Componentes ON fkComponentesReg = idComponentes
    LIMIT 0, 50;
    
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}







function buscarUltimasMedidas2(idUsuario2, limite_linhas) {

    instrucaoSql2 = ''
//COLOCAR O ID DO USUARIO

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql2 = `select nome as statuss, count(fkStatus) as num from Servidor join statusMaquina on fkStatus = idStatus where fkBanco = 1 group by fkStatus;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql2 = `select nome as statuss, count(fkStatus) as num from Servidor join statusMaquina on fkStatus = idStatus where fkBanco = 1 group by fkStatus;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql2);
    return database.executar(instrucaoSql2);
}

function buscarMedidasEmTempoReal2(idUsuario2) {

    instrucaoSql2 = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql2 = `select nome as statuss, count(fkStatus) as num from Servidor join statusMaquina on fkStatus = idStatus where fkBanco = 1 group by fkStatus;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql2 = `select nome as statuss, count(fkStatus) as num from Servidor join statusMaquina on fkStatus = idStatus where fkBanco = 1 group by fkStatus;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql2);
    return database.executar(instrucaoSql2);
}



module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarUltimasMedidas2,
    buscarMedidasEmTempoReal2,
    buscarUltimasMedidasCPU,
    buscarUltimasMedidasRAM,
    buscarUltimasMedidasDISK,
}
