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

    var instrucaoSql = ''

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



function buscarUltimasMedidasREDE(idUsuario, limite_linhas) {
    var instrucaoSql = ''
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select StatusRede as cnc from Rede where fkServidorRede = ${idUsuario} order by idRede desc limit 1;
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select StatusRede as cnc from Rede where fkServidorRede = ${idUsuario} order by idRede desc limit 1;
    
    
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");

    }
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarUltimasMedidasSituSelected(idUsuario, limite_linhas) {
    var instrucaoSql = ''
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select nome as UltimasSituSelected from servidor join statusMaquina on fkStatus = idStatus where idServidor = ${idUsuario};
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select nome as UltimasSituSelected from servidor join statusMaquina on fkStatus = idStatus where idServidor = ${idUsuario};
    
    
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");

    }
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}






function buscarDiasFaltando(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT
        DATEDIFF(l.dateValidade, CURDATE()) AS diasRestantes
      FROM
        servidor as s
      INNER JOIN
        locacao as l ON s.fkLocacao = l.idLocacao
      WHERE
        s.idServidor = ${idUsuario};
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT
        DATEDIFF(l.dateValidade, CURDATE()) AS diasRestantes
      FROM
        servidor as s
      INNER JOIN
        locacao as l ON s.fkLocacao = l.idLocacao
      WHERE
        s.idServidor = ${idUsuario};`

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");

    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarUltimasUltAlertasSelected(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT
        situacao as situ,
        componentes.modelo AS nomeComponente,
        DATE_FORMAT(alerta.dataAlerta, '%d/%m/%Y') AS dataAlerta,
        alerta.horaAlerta AS horaAlerta
        
      FROM
        alerta
      JOIN
        servidor ON alerta.fkServidor = servidor.idServidor
      JOIN
        componentes ON alerta.fkComponente = componentes.idComponentes
      WHERE
        alerta.fkServidor = ${idUsuario}
      ORDER BY
        alerta.idAlertas DESC
      LIMIT 3;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT
        situacao as situ,
        componentes.modelo AS nomeComponente,
        DATE_FORMAT(alerta.dataAlerta, '%d/%m/%Y') AS dataAlerta,
        alerta.horaAlerta AS horaAlerta
        
      FROM
        alerta
      JOIN
        servidor ON alerta.fkServidor = servidor.idServidor
      JOIN
        componentes ON alerta.fkComponente = componentes.idComponentes
      WHERE
        alerta.fkServidor = ${idUsuario}
      ORDER BY
        alerta.idAlertas DESC
      LIMIT 3;`

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");

    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarUltimasUltAlertasSelected2(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT
        situacao as situ,
        componentes.modelo AS nomeComponente,
        DATE_FORMAT(alerta.dataAlerta, '%d/%m/%Y') AS dataAlerta,
        alerta.horaAlerta AS horaAlerta
        
      FROM
        alerta
      JOIN
        servidor ON alerta.fkServidor = servidor.idServidor
      JOIN
        componentes ON alerta.fkComponente = componentes.idComponentes
      WHERE
        alerta.fkServidor = ${idUsuario}
      ORDER BY
        alerta.idAlertas DESC
      LIMIT 1;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT
        situacao as situ,
        componentes.modelo AS nomeComponente,
        DATE_FORMAT(alerta.dataAlerta, '%d/%m/%Y') AS dataAlerta,
        alerta.horaAlerta AS horaAlerta
        
      FROM
        alerta
      JOIN
        servidor ON alerta.fkServidor = servidor.idServidor
      JOIN
        componentes ON alerta.fkComponente = componentes.idComponentes
      WHERE
        alerta.fkServidor = ${idUsuario}
      ORDER BY
        alerta.idAlertas DESC
      LIMIT 1;`

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");

    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function buscarUltimasUsbConectadas(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select nomeDispositivo as nome,
        qtdPorta as qtdPortasTotal,
        qtdConectada as qtdConnect from usb where fkServidorUSB = ${idUsuario};
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select nomeDispositivo as nome,
        qtdPorta as qtdPortasTotal,
        qtdConectada as qtdConnect from usb where fkServidorUSB = ${idUsuario};`

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");

    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}









function ultimoUpload(idUsuario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select PotenciaUpload as Upload from Rede where fkServidorRede = ${idUsuario}  order by idRede desc limit 1;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select PotenciaUpload as Upload from Rede where fkServidorRede = ${idUsuario}  order by idRede desc limit 1;
    
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function BuscarIpServidor(idUsuario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select ip as redeIP from Rede where fkServidor =${idUsuario} order by idRede desc limit 1;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select ip as redeIP from Rede where fkServidor =${idUsuario} order by idRede desc limit 1;

    
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
        instrucaoSql = `SELECT  COUNT(*) AS NumeroDeServidores
        FROM servidor
        WHERE fkBanco = ${idUsuario}
        GROUP BY fkBanco;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT  COUNT(*) AS NumeroDeServidores
        FROM servidor
        WHERE fkBanco = ${idUsuario}
        GROUP BY fkBanco;
    
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
        instrucaoSql = `
        SELECT IFNULL((SELECT idAlertas 
                       FROM alerta 
                       WHERE dataAlerta >= CURDATE() - INTERVAL 1 DAY
                         AND fkBanco = 1 
                       ORDER BY idAlertas DESC 
                       LIMIT 1), 0) AS Al;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT IFNULL((SELECT idAlertas 
                       FROM alerta 
                       WHERE dataAlerta >= CURDATE() - INTERVAL 1 DAY
                         AND fkBanco = 1 
                       ORDER BY idAlertas DESC 
                       LIMIT 1), 0) AS Al;
    
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
        instrucaoSql = `SELECT COUNT(*) AS QuantidadeDeMaquinasInstaveis
        FROM servidor
        WHERE fkStatus = (SELECT idStatus FROM statusMaquina WHERE nome = 'Instavel')
          AND fkBanco = ${idUsuario};
        
        
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT COUNT(*) AS QuantidadeDeMaquinasInstaveis
        FROM servidor
        WHERE fkStatus = (SELECT idStatus FROM statusMaquina WHERE nome = 'Instavel')
          AND fkBanco = ${idUsuario};
        
        
    
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
        instrucaoSql = `
        SELECT IFNULL(
            (SELECT COUNT(*) 
             FROM servidor 
             JOIN statusMaquina ON fkStatus = idStatus 
             WHERE nome = 'Emergencia' AND fkBanco = ${idUsuario}
            ), 0) AS qtdE,
            GROUP_CONCAT(servidor.apelido) AS nomesServidores
        FROM servidor
        JOIN statusMaquina ON servidor.fkStatus = statusMaquina.idStatus
        WHERE nome = 'Emergencia' AND fkBanco = ${idUsuario};
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT IFNULL(
            (SELECT COUNT(*) 
             FROM servidor 
             JOIN statusMaquina ON fkStatus = idStatus 
             WHERE nome = 'Emergencia' AND fkBanco = ${idUsuario}
            ), 0) AS qtdE,
            GROUP_CONCAT(servidor.apelido) AS nomesServidores
        FROM servidor
        JOIN statusMaquina ON servidor.fkStatus = statusMaquina.idStatus
        WHERE nome = 'Emergencia' AND fkBanco = ${idUsuario};
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
        instrucaoSql = `SELECT email AS mail, 
        cargo AS Cargo, nivelAcesso as Esca FROM funcionarios join escalonamentoFuncionarios on fkEscalonamento = idEscalonamento WHERE fkBanco = ${idUsuario};`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT email AS mail, 
        cargo AS Cargo, nivelAcesso as Esca FROM funcionarios join escalonamentoFuncionarios on fkEscalonamento = idEscalonamento WHERE fkBanco = ${idUsuario};`;
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

























function buscarUltimasUltAlertasRede(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
        SELECT
                alertaRede.situacao AS situ,
               
                DATE_FORMAT(alertaRede.dataAlerta, '%d/%m/%Y') AS dataAlerta,
                alertaRede.horaAlerta AS horaAlerta
            FROM
                alertaRede
            JOIN
                Rede ON alertaRede.fkRede = Rede.idRede
            WHERE
                Rede.fkServidorRede = ${idUsuario}
            ORDER BY
                alertaRede.idAlertas desc
            LIMIT 4;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT
                alertaRede.status AS situ,
               
                DATE_FORMAT(alertaRede.data, '%d/%m/%Y') AS dataAlerta,
                alertaRede.hora AS horaAlerta
            FROM
                alertaRede
            JOIN
                Rede ON alertaRede.fkRede = Rede.idRede
            WHERE
                Rede.fkServidor = ${idUsuario}
            ORDER BY
                alertaRede.idAlertas desc
            LIMIT 4;`

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");

    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function UltimasRedeUpload(idUsuario, limite_linhas) {

    instrucaoSql2 = ''
    //COLOCAR O ID DO USUARIO

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql2 = `SELECT PotenciaUpload AS Upl  FROM rede  WHERE fkServidor = ${idUsuario}  ORDER BY idRede DESC LIMIT 1;`;


    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql2 = `SELECT PotenciaUpload AS Upl  FROM rede  WHERE fkServidor = ${idUsuario}  ORDER BY idRede DESC LIMIT 1;`;




    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql2);
    return database.executar(instrucaoSql2);
}





function TempoRealRedeUpload(idUsuario) {

    instrucaoSql2 = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql2 = `SELECT PotenciaUpload AS Upl  FROM rede  WHERE fkServidor = ${idUsuario}  ORDER BY idRede DESC LIMIT 1;`;




    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql2 = `SELECT PotenciaUpload AS Upl  FROM rede  WHERE fkServidor = ${idUsuario}  ORDER BY idRede DESC LIMIT 1;`;



    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql2);
    return database.executar(instrucaoSql2);
}








function BuscarConnect(idUsuario, limite_linhas) {

    instrucaoSql2 = ''
    //COLOCAR O ID DO USUARIO

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql2 = `select status as connectOrN from rede where fkServidor = ${idUsuario} order by idRede desc limit 1;;`;


    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql2 = `select status as connectOrN from rede where fkServidor = ${idUsuario} order by idRede desc limit 1;;`;




    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql2);
    return database.executar(instrucaoSql2);
}







function UltimasRedeDownload(idUsuario, limite_linhas) {

    instrucaoSql2 = ''
    //COLOCAR O ID DO USUARIO

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql2 = `SELECT PotenciaDownload AS Down  FROM rede  WHERE fkServidor = ${idUsuario}  ORDER BY idRede DESC LIMIT 1;`;


    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql2 = `SELECT PotenciaDownload AS Down  FROM rede  WHERE fkServidor = ${idUsuario}  ORDER BY idRede DESC LIMIT 1;`;



    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql2);
    return database.executar(instrucaoSql2);
}










function TempoRealRedeDownload(idUsuario) {

    instrucaoSql2 = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql2 = `SELECT PotenciaDownload AS Down  FROM rede  WHERE fkServidor = ${idUsuario}  ORDER BY idRede DESC LIMIT 1;`;



    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql2 = `SELECT PotenciaDownload AS Down  FROM rede  WHERE fkServidor = ${idUsuario}  ORDER BY idRede DESC LIMIT 1;`;


    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql2);
    return database.executar(instrucaoSql2);
}





function UltimasRedeConnect(idUsuario, limite_linhas) {

    instrucaoSql2 = ''
    //COLOCAR O ID DO USUARIO

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql2 = `    SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS Ligado, SUM(CASE WHEN status = 0 THEN 1 ELSE 0 END) AS Desligado,COUNT(*) AS Total FROM rede WHERE fkServidor = ${idUsuario};`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql2 = `    SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS Ligado, SUM(CASE WHEN status = 0 THEN 1 ELSE 0 END) AS Desligado,COUNT(*) AS Total FROM rede WHERE fkServidor = ${idUsuario};`;


    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql2);
    return database.executar(instrucaoSql2);
}

function TempoRealRedeConnect(idUsuario) {

    instrucaoSql2 = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql2 = `    SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS Ligado, SUM(CASE WHEN statusRede = 0 THEN 1 ELSE 0 END) AS Desligado,COUNT(*) AS Total FROM rede WHERE fkServidor = ${idUsuario};`;


    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql2 = `    SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS Ligado, SUM(CASE WHEN statusRede = 0 THEN 1 ELSE 0 END) AS Desligado,COUNT(*) AS Total FROM rede WHERE fkServidor = ${idUsuario};`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql2);
    return database.executar(instrucaoSql2);
}



function buscarUltimasMedidasPing(idUsuario, limite_linhas) {

    instrucaoSql2 = ''
    //COLOCAR O ID DO USUARIO

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql2 = `SELECT Ping as Ping, dtHora as DataHora
        FROM Rede
        WHERE fkServidor = ${idUsuario}
        ORDER BY DataHora DESC
        LIMIT 6;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql2 = `SELECT Ping as Ping, dtHora as DataHora
        FROM Rede
        WHERE fkServidor = ${idUsuario}
        ORDER BY DataHora DESC
        LIMIT 6;`;


    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql2);
    return database.executar(instrucaoSql2);
}

function buscarMedidasEmTempoRealPing(idUsuario) {

    instrucaoSql2 = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql2 = `SELECT Ping as Ping, dtHora as DataHora
        FROM Rede
        WHERE fkServidor = ${idUsuario}
        ORDER BY DataHora DESC;`;


    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql2 = ` SELECT Ping as Ping, dtHora as DataHora
        FROM Rede
        WHERE fkServidor = ${idUsuario}
        ORDER BY DataHora DESC;`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql2);
    return database.executar(instrucaoSql2);
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
    buscarUltimasMedidasSituSelected,
    buscarUltimasUltAlertasSelected,
    buscarUltimasUsbConectadas,
    buscarUltimasUltAlertasSelected2, 
    ultimoUpload,
    BuscarIpServidor,
    TempoRealRedeConnect,
    UltimasRedeConnect,
    UltimasRedeDownload,
    TempoRealRedeDownload,
    UltimasRedeUpload,
    TempoRealRedeUpload,
    BuscarConnect,
    buscarUltimasMedidasPing,
    buscarMedidasEmTempoRealPing,
    buscarUltimasUltAlertasRede
}
