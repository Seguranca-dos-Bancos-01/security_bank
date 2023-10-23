var database = require("../database/config");

function buscarUltimasMedidasCPU(idServidor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select dadosCaptados from registros where fkComponentesReg =1 and fkBancoReg = 1 order by idRegistros desc limit 1;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select dadosCaptados as asd from registros where fkComponentesReg =1 and fkBancoReg = 1 order by idRegistros desc limit 1;
    
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
        instrucaoSql = `select dadosCaptados as ads from registros where fkComponentesReg =2 and fkBancoReg = 1 order by idRegistros desc limit 1;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select dadosCaptados as ads from registros where fkComponentesReg =2 and fkBancoReg = 1 order by idRegistros desc limit 1;
    
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
        instrucaoSql = `select dadosCaptados as sda from registros where fkComponentesReg =3 and fkBancoReg = 1 order by idRegistros desc limit 1;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select dadosCaptados as sda from registros where fkComponentesReg =3 and fkBancoReg = 1 order by idRegistros desc limit 1;
    
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarUltimasMedidasQTD(idServidor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select idServidor AS qtd from servidor where fkBanco = 1 order by idServidor desc  limit 1;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select idServidor AS qtd from servidor where fkBanco = 1 order by idServidor desc  limit 1;
    
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas24h(idServidor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT IFNULL((SELECT idAlertas FROM Alertas WHERE dataRegistro  >= NOW()  and fkBancoAlertas   = 1 - INTERVAL 1 DAY ORDER BY idAlertas DESC LIMIT 1), 0) AS Al;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT IFNULL((SELECT idAlertas FROM Alertas WHERE dataRegistro  >= NOW()  and fkBancoAlertas   = 1 - INTERVAL 1 DAY ORDER BY idAlertas DESC LIMIT 1), 0) AS Al;
    
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarUltimasMedidasInstaveis(idServidor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT IFNULL((SELECT idServidor FROM servidor JOIN statusMaquina ON fkStatus = idStatus WHERE nome = 'Instavel' and fkBanco = 1 ORDER BY idServidor DESC LIMIT 1), 0) AS qtdS;
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT IFNULL((SELECT idServidor FROM servidor JOIN statusMaquina ON fkStatus = idStatus WHERE nome = 'Instavel' and fkBanco = 1 ORDER BY idServidor DESC LIMIT 1), 0) AS qtdS;
    
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasUltimoAlerta(idServidor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT IFNULL(fkServidorAlertas, 0) AS numBanco,  IFNULL(descricaoAlerta, 'Nenhum') AS descr, IFNULL(dataRegistro, 'Sem Alertas') hr FROM Alertas WHERE fkBancoAlertas = 1 UNION ALL SELECT 0, 'Nenhum', 'Sem Alertas' WHERE NOT EXISTS (
            SELECT 1
            FROM Alertas
            WHERE fkBancoAlertas = 1
        );
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT IFNULL(fkServidorAlertas, 0) AS numBanco,  IFNULL(descricaoAlerta, 'Nenhum') AS descr, IFNULL(dataRegistro, 'Sem Alertas') hr FROM Alertas WHERE fkBancoAlertas = 1 UNION ALL SELECT 0, 'Nenhum', 'Sem Alertas' WHERE NOT EXISTS (
            SELECT 1
            FROM Alertas
            WHERE fkBancoAlertas = 1
        );
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasServidorEmergencia(idServidor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT IFNULL((SELECT idServidor FROM servidor JOIN statusMaquina ON fkStatus = idStatus WHERE nome = 'Emergencia' and fkBanco = 1 ORDER BY idServidor DESC LIMIT 1), 0) AS qtdE;
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT IFNULL((SELECT idServidor FROM servidor JOIN statusMaquina ON fkStatus = idStatus WHERE nome = 'Emergencia' and fkBanco = 1 ORDER BY idServidor DESC LIMIT 1), 0) AS qtdE;
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function buscarUltimasMedidasSelectContas(idServidor, limite_linhas) {

    let instrucaoSql = '';

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT email AS mail, fkEscalonamento AS Esca FROM funcionarios WHERE fkBanco = 1;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT email AS mail, fkEscalonamento AS Esca FROM funcionarios WHERE fkBanco = 1;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return null; // Retornando nulo se nenhuma condição for satisfeita
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
    buscarUltimasMedidasQTD,
    buscarUltimasMedidas24h,
    buscarUltimasMedidasInstaveis,
    buscarUltimasMedidasUltimoAlerta,
    buscarUltimasMedidasServidorEmergencia,
    buscarUltimasMedidasSelectContas,
}
