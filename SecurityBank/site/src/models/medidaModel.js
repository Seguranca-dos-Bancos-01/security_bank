var database = require("../database/config");

function cadastrarAlertaCPUAtencao(servidorFK, planoFK, bancoFK) {
    // console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    INSERT INTO alerta (dataAlerta, horaAlerta, situacao, fkRegistro, fkComponente, fkMetrica, fkServidor, fkBanco, fkPlano, fkLocacao) VALUES (CURDATE(), CURTIME(), "Atenção", 1, 1, 1, 1, ${bancoFK}, ${planoFK}, 1);
`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function cadastrarAlertaCPUEmergencia(servidorFK, planoFK, bancoFK) {
    // console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    INSERT INTO alerta (dataAlerta, horaAlerta, situacao, fkRegistro, fkComponente, fkMetrica, fkServidor, fkBanco,fkPlano, fkLocacao) VALUES (CURDATE(), CURTIME(), "Emergência", 1, 1, 2, 1, ${bancoFK}, ${planoFK}, 1);
`;

console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function cadastrarAlertaCPUUrgencia(servidorFK, planoFK, bancoFK) {
    // console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    INSERT INTO alerta (dataAlerta, horaAlerta, situacao, fkRegistro, fkComponente, fkMetrica, fkServidor, fkBanco, fkPlano, fkLocacao) VALUES (CURDATE(), CURTIME(), "Urgência", 1, 1, 3, ${servidorFK}, ${bancoFK},${planoFK}, 1);
`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}





function cadastrarAlertaRAMAtencao(servidorFK, planoFK, bancoFK) {
    // console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    INSERT INTO alerta (dataAlerta, horaAlerta, situacao, fkRegistro, fkComponente, fkMetrica, fkServidor, fkBanco, fkPlano, fkLocacao) VALUES (CURDATE(), CURTIME(),"Atenção", 1, 2, 1, 1, ${bancoFK}, ${planoFK}, 1);
`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function cadastrarAlertaRAMEmergencia(servidorFK, planoFK, bancoFK) {
    // console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    INSERT INTO alerta (dataAlerta, horaAlerta, situacao, fkRegistro, fkComponente, fkMetrica, fkServidor, fkBanco,fkPlano, fkLocacao) VALUES (CURDATE(), CURTIME(), "Emergência", 1, 2, 2, 1, ${bancoFK}, ${planoFK}, 1);
`;

console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function cadastrarAlertaRAMUrgencia(servidorFK, planoFK, bancoFK) {
    // console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    INSERT INTO alerta (dataAlerta, horaAlerta, situacao, fkRegistro, fkComponente, fkMetrica, fkServidor, fkBanco, fkPlano, fkLocacao) VALUES (CURDATE(), CURTIME(), "Urgência", 1, 2, 3, 1, ${bancoFK},${planoFK}, 1);
`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}






function cadastrarAlertaDISCOAtencao(servidorFK, planoFK, bancoFK) {
    // console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    INSERT INTO alerta (dataAlerta, horaAlerta, situacao, fkRegistro, fkComponente, fkMetrica, fkServidor, fkBanco, fkPlano, fkLocacao) VALUES (CURDATE(), CURTIME(), "Atenção", 1, 3, 1, 1, ${bancoFK}, ${planoFK}, 1);
`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function cadastrarAlertaDISCOEmergencia(servidorFK, planoFK, bancoFK) {
    // console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    INSERT INTO alerta (dataAlerta, horaAlerta, situacao, fkRegistro, fkComponente, fkMetrica, fkServidor, fkBanco,fkPlano, fkLocacao) VALUES (CURDATE(), CURTIME(), "Emergência", 1, 3, 2, 1, ${bancoFK}, ${planoFK}, 1);
`;

console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function cadastrarAlertaDISCOUrgencia(servidorFK, planoFK, bancoFK) {
    // console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    INSERT INTO alerta (dataAlerta, horaAlerta, situcao, fkRegistro, fkComponente, fkMetrica, fkServidor, fkBanco, fkPlano, fkLocacao) VALUES (CURDATE(), CURTIME(), "Urgência", 1, 3, 3, 1, ${bancoFK},${planoFK}, 1);
`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function buscarMedidasEmTempoRealAlerta(idAlerta) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT 
        (SELECT dadosCaptados FROM registros WHERE fkComponentesReg = 1 order by idRegistros desc limit 1) AS PROC,
        (SELECT dadosCaptados FROM registros WHERE fkComponentesReg = 2 order by idRegistros desc limit 1) AS RAM,
        (SELECT dadosCaptados FROM registros WHERE fkComponentesReg = 3 order by idRegistros desc limit 1) AS disco,
        dataHorario AS horario
    FROM registros
    JOIN componentes ON fkComponentesReg = idComponentes
    ;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        (SELECT dadosCaptados FROM registros WHERE fkComponentesReg = 1 order by idRegistros desc limit 1) AS PROC,
        (SELECT dadosCaptados FROM registros WHERE fkComponentesReg = 2 order by idRegistros desc limit 1) AS RAM,
        (SELECT dadosCaptados FROM registros WHERE fkComponentesReg = 3 order by idRegistros desc limit 1) AS disco,
        dataHorario AS horario
    FROM registros
    JOIN componentes ON fkComponentesReg = idComponentes
    ;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js NOS ALERTASSSSSSSSSSSSSSSs\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasCPU(idUsuario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select dadosCaptados from registros where fkComponentesReg =1 and fkServidorReg = ${idUsuario} order by idRegistros desc limit 1;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select dadosCaptados as asd from registros where fkComponentesReg =1 and fkServidorReg = ${idUsuario} order by idRegistros desc limit 1;
    
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function buscarUltimasMedidasREDE(idUsuario, limite_linhas) {}



function buscarDiasFaltando(idSelect) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select dadosCaptados as cnc from registros where fkComponentesReg =4 and fkServidorReg = ${idUsuario} order by idRegistros desc limit 1;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select dadosCaptados as cnc from registros where fkComponentesReg =4 and fkServidorReg = ${idUsuario} order by idRegistros desc limit 1;`
        instrucaoSql = `SELECT 
        DATEDIFF(dateValidade, CURDATE()) AS dias_restantes, 
        DATE_FORMAT(dataCompraLocacao, '%d/%m/%Y') AS DtC,
        DATE_FORMAT(dateValidade, '%d/%m/%Y') AS DtV
    FROM 
        servidor
    WHERE 
        dateValidade >= CURDATE();
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        DATEDIFF(dateValidade, CURDATE()) AS dias_restantes, 
        DATE_FORMAT(dataCompraLocacao, '%d/%m/%Y') AS DtC,
        DATE_FORMAT(dateValidade, '%d/%m/%Y') AS DtV
    FROM 
        servidor
    WHERE 
        dateValidade >= CURDATE();
    
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function buscarUltimasMedidasRAM(idUsuario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select dadosCaptados as ads from registros where fkComponentesReg = 2 and fkServidorReg = ${idUsuario} order by idRegistros desc limit 1;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select dadosCaptados as ads from registros where fkComponentesReg = 2 and fkServidorReg = ${idUsuario} order by idRegistros desc limit 1;
    
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasDISK(idUsuario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select dadosCaptados as sda from registros where fkComponentesReg =3 and fkServidorReg = ${idUsuario} order by idRegistros desc limit 1;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select dadosCaptados as sda from registros where fkComponentesReg =3 and fkServidorReg = ${idUsuario} order by idRegistros desc limit 1;
    
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarUltimasMedidasValidade(idUsuario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select dataCompraLocacao as val from servidor where  fkBanco = 1;

    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select dataCompraLocacao as val from servidor where  fkBanco = 1;
    
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasQTD(idUsuario, limite_linhas) {

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

function buscarUltimasMedidas24h(idUsuario, limite_linhas) {

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
function buscarUltimasMedidasInstaveis(idUsuario, limite_linhas) {

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

function buscarUltimasMedidasUltimoAlerta(idUsuario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT IFNULL(fkServidor, 0) AS numBanco, 
        IFNULL(descricaoAlerta, 'Nenhum') AS descr, 
        IFNULL(CONCAT(dataAlerta, ' ', horaAlerta), 'Sem Alertas') AS hr 
 FROM alerta 
 WHERE fkBanco = 1
 
 UNION
 
 SELECT 0 AS numBanco, 
        'Nenhum' AS descr, 
        'Sem Alertas' AS hr 
 WHERE NOT EXISTS (
     SELECT 1
     FROM alerta
     WHERE fkBanco = 1
 );
 
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT IFNULL(fkServidor, 0) AS numBanco, 
        IFNULL(descricaoAlerta, 'Nenhum') AS descr, 
        IFNULL(CONCAT(dataAlerta, ' ', horaAlerta), 'Sem Alertas') AS hr 
 FROM alerta 
 WHERE fkBanco = 1
 
 UNION
 
 SELECT 0 AS numBanco, 
        'Nenhum' AS descr, 
        'Sem Alertas' AS hr 
 WHERE NOT EXISTS (
     SELECT 1
     FROM alerta
     WHERE fkBanco = 1
 );
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasServidorEmergencia(idUsuario, limite_linhas) {

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



function buscarUltimasMedidasSelectContas(idUsuario, limite_linhas) {

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


function buscarUltimosAlertas1(idUsuario, limite_linhas) {

    let instrucaoSql = '';

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `-- nome servidor, nome componente, data, hora e status
        select servidor.apelido as nomeServidor, componentes.modelo as nomeComponente, DATE_FORMAT(alerta.dataAlerta, '%d/%m/%Y') as dataAlerta, alerta.horaAlerta as horaAlerta, alerta.situacao as situacaoAlerta
from alerta join servidor on fkServidor = idServidor
join componentes on fkComponente = idComponentes order by idAlertas desc LIMIT  1;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `-- nome servidor, nome componente, data, hora e status
        select servidor.apelido as nomeServidor, componentes.modelo as nomeComponente, DATE_FORMAT(alerta.dataAlerta, '%d/%m/%Y') as dataAlerta, alerta.horaAlerta as horaAlerta, alerta.situacao as situacaoAlerta
from alerta join servidor on fkServidor = idServidor
join componentes on fkComponente = idComponentes order by idAlertas desc LIMIT 1;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return null; // Retornando nulo se nenhuma condição for satisfeita
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimosAlertas2(idUsuarioServer, limite_linhas) {

    let instrucaoSql = '';

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `-- nome servidor, nome componente, data, hora e status
        select servidor.apelido as nomeServidor, componentes.modelo as nomeComponente, DATE_FORMAT(alerta.dataAlerta, '%d/%m/%Y') as dataAlerta, alerta.horaAlerta as horaAlerta, alerta.situacao as situacaoAlerta
from alerta join servidor on fkServidor = idServidor
join componentes on fkComponente = idComponentes order by idAlertas desc LIMIT  3;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `-- nome servidor, nome componente, data, hora e status
        select servidor.apelido as nomeServidor, componentes.modelo as nomeComponente, DATE_FORMAT(alerta.dataAlerta, '%d/%m/%Y') as dataAlerta, alerta.horaAlerta as horaAlerta, alerta.situacao as situacaoAlerta
from alerta join servidor on fkServidor = idServidor
join componentes on fkComponente = idComponentes order by idAlertas desc LIMIT 3;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return null; // Retornando nulo se nenhuma condição for satisfeita
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function buscarHistoricoAlertas(idUsuario, limite_linhas) {

    let instrucaoSql = '';

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `-- nome servidor, nome componente, data, hora e status
        select servidor.apelido as nomeServidor, componentes.modelo as nomeComponente, DATE_FORMAT(alerta.dataAlerta, '%d/%m/%Y') as dataAlerta, alerta.horaAlerta as horaAlerta, alerta.situacao as situacaoAlerta
from alerta join servidor on fkServidor = idServidor
join componentes on fkComponente = idComponentes order by idAlertas desc LIMIT  ${limite_linhas};`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `-- nome servidor, nome componente, data, hora e status
        select servidor.apelido as nomeServidor, componentes.modelo as nomeComponente, DATE_FORMAT(alerta.dataAlerta, '%d/%m/%Y') as dataAlerta, alerta.horaAlerta as horaAlerta, alerta.situacao as situacaoAlerta
from alerta join servidor on fkServidor = idServidor
join componentes on fkComponente = idComponentes order by idAlertas desc LIMIT ${limite_linhas};`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return null; // Retornando nulo se nenhuma condição for satisfeita
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}






function buscarUltimasMedidas(idUsuario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
        SELECT 
        (CASE WHEN fkComponentesReg = 1 THEN dadosCaptados END) AS proc,
        (CASE WHEN fkComponentesReg = 2 THEN dadosCaptados END) AS RAM,
        (CASE WHEN fkComponentesReg = 3 THEN dadosCaptados END) AS disco,
        DATE_FORMAT(dataHorario, '%d/%m/%Y') AS horario
    FROM registros
    WHERE fkBancoReg = 1
    LIMIT 90;
    
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT 
        (CASE WHEN fkComponentesReg = 1 THEN dadosCaptados END) AS proc,
        (CASE WHEN fkComponentesReg = 2 THEN dadosCaptados END) AS RAM,
        (CASE WHEN fkComponentesReg = 3 THEN dadosCaptados END) AS disco,
        DATE_FORMAT(dataHorario, '%d/%m/%Y') AS horario
    FROM registros
    WHERE fkBancoReg = 1
    LIMIT 90;
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
        SELECT 
        (SELECT MAX(dadosCaptados) FROM registros WHERE fkComponentesReg = 1 and fkBancoReg = 1) AS proc,
        (SELECT MAX(dadosCaptados) FROM registros WHERE fkComponentesReg = 2 and fkBancoReg = 1) AS RAM,
        (SELECT MAX(dadosCaptados) FROM registros WHERE fkComponentesReg = 3 and fkBancoReg = 1) AS disco,
        dataHorario AS horario
    FROM registros
    JOIN Componentes ON fkComponentesReg = idComponentes
    WHERE fkBancoReg = ${idUsuario}
    LIMIT 0, 50;
    `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT 
    (SELECT MAX(dadosCaptados) FROM registros WHERE fkComponentesReg = 1 and fkBancoReg = 1) AS proc,
    (SELECT MAX(dadosCaptados) FROM registros WHERE fkComponentesReg = 2 and fkBancoReg = 1) AS RAM,
    (SELECT MAX(dadosCaptados) FROM registros WHERE fkComponentesReg = 3 and fkBancoReg = 1) AS disco,
    dataHorario AS horario
FROM registros
JOIN Componentes ON fkComponentesReg = idComponentes
WHERE fkBancoReg = ${idUsuario}
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
        instrucaoSql2 = `select nome as statuss, count(fkStatus) as num from Servidor join statusMaquina on fkStatus = idStatus where fkBanco = ${idUsuario2} group by fkStatus;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql2 = `select nome as statuss, count(fkStatus) as num from Servidor join statusMaquina on fkStatus = idStatus where fkBanco = ${idUsuario2} group by fkStatus;`;
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
        instrucaoSql2 = `select nome as statuss, count(fkStatus) as num from Servidor join statusMaquina on fkStatus = idStatus where fkBanco = ${idUsuario2} group by fkStatus;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql2 = `select nome as statuss, count(fkStatus) as num from Servidor join statusMaquina on fkStatus = idStatus where fkBanco = ${idUsuario2} group by fkStatus;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql2);
    return database.executar(instrucaoSql2);
}





function buscarUltimasMedidasServidores(idUsuario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
        SELECT dadosCaptados AS proc, 
               dataHorario AS horario 
        FROM registros 
        JOIN Componentes ON fkComponentesReg = idComponentes
        WHERE fkComponentesReg = 1 
        AND fkServidorReg = ${idUsuario}
        ORDER BY idRegistros DESC 
        LIMIT 10;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT dadosCaptados AS proc, 
               dataHorario AS horario 
        FROM registros 
        JOIN Componentes ON fkComponentesReg = idComponentes
        WHERE fkComponentesReg = 1 
        AND fkServidorReg = ${idUsuario}
        ORDER BY idRegistros DESC 
        LIMIT 10;
    
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealServidores(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
        SELECT dadosCaptados AS proc, 
               dataHorario AS horario 
        FROM registros 
        JOIN Componentes ON fkComponentesReg = idComponentes
        WHERE fkComponentesReg = 1 
        AND fkServidorReg = ${idUsuario}
        ORDER BY idRegistros DESC 
        LIMIT 10;
    
    `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT dadosCaptados AS proc, 
               dataHorario AS horario 
        FROM registros 
        JOIN Componentes ON fkComponentesReg = idComponentes
        WHERE fkComponentesReg = 1 
        AND fkServidorReg = ${idUsuario}
        ORDER BY idRegistros DESC 
        LIMIT 10;
    
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




function buscarUltimasMedidasServidores2(idUsuario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
        SELECT dadosCaptados AS ram, 
        dataHorario AS horario 
        FROM registros 
        JOIN Componentes ON fkComponentesReg = idComponentes
        WHERE fkComponentesReg = 2 
        AND fkServidorReg = ${idUsuario} -- Add the extra condition here
        ORDER BY idRegistros DESC 
        LIMIT 10;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        
SELECT dadosCaptados AS ram, 
dataHorario AS horario 
FROM registros 
JOIN Componentes ON fkComponentesReg = idComponentes
WHERE fkComponentesReg = 2 
AND fkServidorReg = ${idUsuario} -- Add the extra condition here
ORDER BY idRegistros DESC 
LIMIT 10;
    
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealServidores2(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
        SELECT dadosCaptados AS ram, 
               dataHorario AS horario 
        FROM registros 
        JOIN Componentes ON fkComponentesReg = idComponentes
        WHERE fkComponentesReg = 2
        ORDER BY idRegistros DESC 
        LIMIT 10;
    
    `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT dadosCaptados AS ram, 
               dataHorario AS horario 
        FROM registros 
        JOIN Componentes ON fkComponentesReg = idComponentes
        WHERE fkComponentesReg = 2
        ORDER BY idRegistros DESC 
        LIMIT 10;
    
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function buscarUltimasMedidasServidores3(idUsuario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
        SELECT dadosCaptados AS DISK, 
               dataHorario AS horario 
        FROM registros 
        JOIN Componentes ON fkComponentesReg = idComponentes
        WHERE fkComponentesReg = 3 
        AND fkServidorReg = ${idUsuario}
        ORDER BY idRegistros DESC 
        LIMIT 10;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT dadosCaptados AS DISK, 
               dataHorario AS horario 
        FROM registros 
        JOIN Componentes ON fkComponentesReg = idComponentes
        WHERE fkComponentesReg = 3 
        AND fkServidorReg = ${idUsuario}
        ORDER BY idRegistros DESC 
        LIMIT 10;
    
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealServidores3(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
        SELECT dadosCaptados AS DISK, 
               dataHorario AS horario 
        FROM registros 
        JOIN Componentes ON fkComponentesReg = idComponentes
        WHERE fkComponentesReg = 2
        AND fkServidorReg = ${idUsuario}
        ORDER BY idRegistros DESC 
        LIMIT 10;
    
    `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT dadosCaptados AS DISK, 
               dataHorario AS horario 
        FROM registros 
        JOIN Componentes ON fkComponentesReg = idComponentes
        WHERE fkComponentesReg = 2
        AND fkServidorReg = ${idUsuario}
        ORDER BY idRegistros DESC 
        LIMIT 10;
    
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




function buscarUltimasMedidasServidores4(idUsuario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
        SELECT
        COALESCE((SELECT dadosCaptados FROM registros WHERE fkComponentesReg = 1 ORDER BY dataHorario DESC LIMIT 1), 0) AS proc,
        COALESCE((SELECT dadosCaptados FROM registros WHERE fkComponentesReg = 2 ORDER BY dataHorario DESC LIMIT 1), 0) AS RAM,
        COALESCE((SELECT dadosCaptados FROM registros WHERE fkComponentesReg = 3 ORDER BY dataHorario DESC LIMIT 1), 0) AS disco,
        COALESCE((SELECT dadosCaptados FROM registros WHERE fkComponentesReg = 4 ORDER BY dataHorario DESC LIMIT 1), 0) AS rede,
    FROM registros
    JOIN Componentes ON fkComponentesReg = idComponentes
    WHERE registros.idRegistros = (SELECT MAX(idRegistros) FROM registros);
    
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT
        COALESCE((SELECT dadosCaptados FROM registros WHERE fkComponentesReg = 1 ORDER BY dataHorario DESC LIMIT 1), 0) AS proc,
        COALESCE((SELECT dadosCaptados FROM registros WHERE fkComponentesReg = 2 ORDER BY dataHorario DESC LIMIT 1), 0) AS RAM,
        COALESCE((SELECT dadosCaptados FROM registros WHERE fkComponentesReg = 3 ORDER BY dataHorario DESC LIMIT 1), 0) AS disco,
        COALESCE((SELECT dadosCaptados FROM registros WHERE fkComponentesReg = 4 ORDER BY dataHorario DESC LIMIT 1), 0) AS rede,
        COALESCE((SELECT dadosCaptados FROM registros WHERE fkComponentesReg = 5 ORDER BY dataHorario DESC LIMIT 1), 0) AS porta
    FROM registros
    JOIN Componentes ON fkComponentesReg = idComponentes
    WHERE registros.idRegistros = (SELECT MAX(idRegistros) FROM registros);
    
    
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealServidores4(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
        SELECT         COALESCE((SELECT dadosCaptados FROM registros WHERE fkComponentesReg = 1 ORDER BY dataHorario DESC LIMIT 1), 0) AS proc,         COALESCE((SELECT dadosCaptados FROM registros WHERE fkComponentesReg = 2 ORDER BY dataHorario DESC LIMIT 1), 0) AS RAM,         COALESCE((SELECT dadosCaptados FROM registros WHERE fkComponentesReg = 3 ORDER BY dataHorario DESC LIMIT 1), 0) AS disco,         COALESCE((SELECT dadosCaptados FROM registros WHERE fkComponentesReg = 4 ORDER BY dataHorario DESC LIMIT 1), 0) AS rede,     FROM registros     JOIN Componentes ON fkComponentesReg = idComponentes     WHERE registros.idRegistros = (SELECT MAX(idRegistros) FROM registros);
    
    
    `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT         COALESCE((SELECT dadosCaptados FROM registros WHERE fkComponentesReg = 1 ORDER BY dataHorario DESC LIMIT 1), 0) AS proc,         COALESCE((SELECT dadosCaptados FROM registros WHERE fkComponentesReg = 2 ORDER BY dataHorario DESC LIMIT 1), 0) AS RAM,         COALESCE((SELECT dadosCaptados FROM registros WHERE fkComponentesReg = 3 ORDER BY dataHorario DESC LIMIT 1), 0) AS disco,         COALESCE((SELECT dadosCaptados FROM registros WHERE fkComponentesReg = 4 ORDER BY dataHorario DESC LIMIT 1), 0) AS rede,     FROM registros     JOIN Componentes ON fkComponentesReg = idComponentes     WHERE registros.idRegistros = (SELECT MAX(idRegistros) FROM registros);
    
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}







module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoRealAlerta,
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
    buscarMedidasEmTempoRealServidores,
    buscarUltimasMedidasServidores,
    buscarMedidasEmTempoRealServidores2,
    buscarUltimasMedidasServidores2,
    buscarMedidasEmTempoRealServidores3,
    buscarUltimasMedidasServidores3,
    buscarMedidasEmTempoRealServidores4,
    buscarUltimasMedidasServidores4,
    buscarUltimasMedidasREDE,
    cadastrarAlertaCPUAtencao,
    cadastrarAlertaCPUEmergencia,
    cadastrarAlertaCPUUrgencia,
    cadastrarAlertaRAMAtencao,
    cadastrarAlertaRAMEmergencia,
    cadastrarAlertaRAMUrgencia,
     cadastrarAlertaDISCOAtencao,
     cadastrarAlertaDISCOEmergencia,
     cadastrarAlertaDISCOUrgencia,
     buscarHistoricoAlertas,
    buscarDiasFaltando,
    buscarUltimosAlertas1,
    buscarUltimosAlertas2,
    buscarUltimasMedidasValidade,
}
