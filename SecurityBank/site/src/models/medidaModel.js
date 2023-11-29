var database = require("../database/config");

function cadastrarAlertaCPUAtencao(servidorFK, planoFK, bancoFK) {
    // console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    instrucaoSql = ``
    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `INSERT INTO alerta (dataAlerta, horaAlerta, situacao, fkRegistro, fkComponente, fkMetrica, fkServidor, fkBanco, fkPlano) VALUES (CURDATE(), CURTIME(), "Atenção", 1, 1, 1, 1, ${bancoFK}, ${planoFK});`;
    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `INSERT INTO alerta (dataAlerta, horaAlerta, situacao, fkRegistro, fkComponente, fkMetrica, fkServidor, fkBanco, fkPlano) VALUES (CAST(GETDATE() AS DATE), CAST(GETDATE() AS TIME), 'Atenção', 1, 1, 1, 1, ${bancoFK}, ${planoFK});`
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function cadastrarAlertaCPUEmergencia(servidorFK, planoFK, bancoFK) {
    instrucaoSql = ``
    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `INSERT INTO alerta (dataAlerta, horaAlerta, situacao, fkRegistro, fkComponente, fkMetrica, fkServidor, fkBanco, fkPlano) VALUES (CURDATE(), CURTIME(), "Emergência", 1, 1, 2, 1, ${bancoFK}, ${planoFK});`;
    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `INSERT INTO alerta (dataAlerta, horaAlerta, situacao, fkRegistro, fkComponente, fkMetrica, fkServidor, fkBanco, fkPlano) VALUES (CAST(GETDATE() AS DATE), CAST(GETDATE() AS TIME), 'Emergência', 1, 1, 2, 1, ${bancoFK}, ${planoFK});`
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarAlertaCPUUrgencia(servidorFK, planoFK, bancoFK) {
    instrucaoSql = ``
    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `INSERT INTO alerta (dataAlerta, horaAlerta, situacao, fkRegistro, fkComponente, fkMetrica, fkServidor, fkBanco, fkPlano) VALUES (CURDATE(), CURTIME(), "Urgência", 1, 1, 3, ${servidorFK}, ${bancoFK}, ${planoFK});`;
    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `INSERT INTO alerta (dataAlerta, horaAlerta, situacao, fkRegistro, fkComponente, fkMetrica, fkServidor, fkBanco, fkPlano) VALUES (CAST(GETDATE() AS DATE), CAST(GETDATE() AS TIME), 'Urgência', 1, 1, 3, ${servidorFK}, ${bancoFK}, ${planoFK});`
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function cadastrarAlertaRAMAtencao(servidorFK, planoFK, bancoFK) {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `INSERT INTO alerta (dataAlerta, horaAlerta, situacao, fkRegistro, fkComponente, fkMetrica, fkServidor, fkBanco, fkPlano) VALUES (CURDATE(), CURTIME(),"Atenção", 1, 2, 1, 1, ${bancoFK}, ${planoFK});
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `INSERT INTO alerta (dataAlerta, horaAlerta, situacao, fkRegistro, fkComponente, fkMetrica, fkServidor, fkBanco, fkPlano) VALUES (CAST(GETDATE() AS DATE), CAST(GETDATE() AS TIME,'Atenção', 1, 2, 1, 1, ${bancoFK}, ${planoFK});
        `
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function cadastrarAlertaRAMEmergencia(servidorFK, planoFK, bancoFK) {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `INSERT INTO alerta (dataAlerta, horaAlerta, situacao, fkRegistro, fkComponente, fkMetrica, fkServidor, fkBanco, fkPlano) VALUES (CURDATE(), CURTIME(),"Emergência", 1, 2, 2, 1, ${bancoFK}, ${planoFK});
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `INSERT INTO alerta (dataAlerta, horaAlerta, situacao, fkRegistro, fkComponente, fkMetrica, fkServidor, fkBanco, fkPlano) VALUES (CAST(GETDATE() AS DATE), CAST(GETDATE() AS TIME,'Emergência', 1, 2, 2, 1, ${bancoFK}, ${planoFK});
        `
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarAlertaRAMUrgencia(servidorFK, planoFK, bancoFK) {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `INSERT INTO alerta (dataAlerta, horaAlerta, situacao, fkRegistro, fkComponente, fkMetrica, fkServidor, fkBanco, fkPlano) VALUES (CURDATE(), CURTIME() ,"Urgência", 1, 2, 3, 1, ${bancoFK}, ${planoFK});
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `INSERT INTO alerta (dataAlerta, horaAlerta, situacao, fkRegistro, fkComponente, fkMetrica, fkServidor, fkBanco, fkPlano) VALUES (CAST(GETDATE() AS DATE), CAST(GETDATE() AS TIME,'Urgência', 1, 2, 3, 1, ${bancoFK}, ${planoFK});
        `
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}






function cadastrarAlertaDISCOAtencao(servidorFK, planoFK, bancoFK) {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `INSERT INTO alerta (dataAlerta, horaAlerta, situacao, fkRegistro, fkComponente, fkMetrica, fkServidor, fkBanco, fkPlano) VALUES (CURDATE(), CURTIME(), "Atenção", 1, 3, 1, 1, ${bancoFK}, ${planoFK});
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `INSERT INTO alerta (dataAlerta, horaAlerta, situacao, fkRegistro, fkComponente, fkMetrica, fkServidor, fkBanco, fkPlano) VALUES (CAST(GETDATE() AS DATE), CAST(GETDATE() AS TIME, "Atenção", 1, 3, 1, 1, ${bancoFK}, ${planoFK});`
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function cadastrarAlertaDISCOEmergencia(servidorFK, planoFK, bancoFK) {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `INSERT INTO alerta (dataAlerta, horaAlerta, situacao, fkRegistro, fkComponente, fkMetrica, fkServidor, fkBanco, fkPlano) VALUES (CURDATE(), CURTIME(), "Emergência", 1, 3, 1, 1, ${bancoFK}, ${planoFK});
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `INSERT INTO alerta (dataAlerta, horaAlerta, situacao, fkRegistro, fkComponente, fkMetrica, fkServidor, fkBanco, fkPlano) VALUES (CAST(GETDATE() AS DATE), CAST(GETDATE() AS TIME, "Emergência", 1, 3, 1, 1, ${bancoFK}, ${planoFK});`
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarAlertaDISCOUrgencia(servidorFK, planoFK, bancoFK) {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `INSERT INTO alerta (dataAlerta, horaAlerta, situacao, fkRegistro, fkComponente, fkMetrica, fkServidor, fkBanco, fkPlano) VALUES (CURDATE(), CURTIME(), "Urgência", 1, 3, 1, 1, ${bancoFK}, ${planoFK});
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `INSERT INTO alerta (dataAlerta, horaAlerta, situacao, fkRegistro, fkComponente, fkMetrica, fkServidor, fkBanco, fkPlano) VALUES (CAST(GETDATE() AS DATE), CAST(GETDATE() AS TIME, "Urgência", 1, 3, 1, 1, ${bancoFK}, ${planoFK});`
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function buscarMedidasEmTempoRealAlerta(idAlerta) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        (SELECT dadosCaptados FROM registros WHERE fkComponentesReg = 1 order by idRegistros desc limit 1) AS PROC,
        (SELECT dadosCaptados FROM registros WHERE fkComponentesReg = 2 order by idRegistros desc limit 1) AS RAM,
        (SELECT dadosCaptados FROM registros WHERE fkComponentesReg = 3 order by idRegistros desc limit 1) AS disco,
        dataHorario AS horario
    FROM registros
    JOIN componentes ON fkComponentesReg = idComponentes
    ;`;

    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT 
        (SELECT TOP 1 dadoCaptado FROM registros WHERE fkComponentesReg = 1 ORDER BY idRegistros DESC) AS 'PROC',
        (SELECT TOP 1 dadoCaptado FROM registros WHERE fkComponentesReg = 2 ORDER BY idRegistros DESC) AS 'RAM',
        (SELECT TOP 1 dadoCaptado FROM registros WHERE fkComponentesReg = 3 ORDER BY idRegistros DESC) AS 'disco',
        r.dataHorario AS horario
    FROM registros r
    JOIN componentes c ON r.fkComponentesReg = c.idComponentes
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

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select dadoCaptado as asd from registros where fkComponentesReg =${idUsuario} and fkServidorReg = 1 order by idRegistros desc limit 1;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1 dadoCaptado as asd from registros where fkComponentesReg =${idUsuario} and fkServidorReg = 1 order by idRegistros desc;


    
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
    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select status as cnc from Rede where fkServidor = ${idUsuario} order by idRede desc limit 1;
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1 status as cnc from Rede where fkServidor = ${idUsuario} order by idRede desc;

    
    
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");

    }
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarUltimasMedidasSituSelected(idUsuario, limite_linhas) {
    var instrucaoSql = ''
    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select nome as UltimasSituSelected from servidor join status_maquina on fkStatus = idStatus where idServidor = ${idUsuario};
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select nome as UltimasSituSelected from servidor join status_maquina on fkStatus = idStatus where idServidor = ${idUsuario};
    
    
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");

    }
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




function buscarUltimasMedidasPRT(idUsuario, limite_linhas) {

    var instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT
        particao1.dadoCaptado as particao1,
        particao2.dadoCaptado as particao2
    FROM
        (SELECT dadoCaptado
         FROM registros
         WHERE fkParticao = 1
         ORDER BY idRegistros DESC
         LIMIT 1) as particao1
    JOIN
        (SELECT dadoCaptado
         FROM registros
         WHERE fkParticao = 2
         ORDER BY idRegistros DESC
         LIMIT 1) as particao2;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT
        particao1.dadoCaptado as 'particao1',
        particao2.dadoCaptado as 'particao2'
    FROM
        (SELECT TOP 1 dadoCaptado
         FROM registros
         WHERE fkParticao = 1
         ORDER BY idRegistros DESC
        ) as particao1
    JOIN
        (SELECT TOP 1 dadoCaptado
         FROM registros
         WHERE fkParticao = 2
         ORDER BY idRegistros DESC
        ) as particao2 ON 1 = 1
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function buscarUltimasMedidasTOT(idUsuario, limite_linhas) {

    var instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT
        espacoTotal1.espacoTotal as espacoTotal1,
        espacoTotal2.espacoTotal as espacoTotal2
        FROM 
        ( SELECT espacoTotal
        FROM particao 
        WHERE idParticao = 1 
         ORDER BY idParticao DESC
        LIMIT 1) as espacoTotal1
        JOIN
       (SELECT espacoTotal
        FROM particao
        WHERE idParticao = 2
        ORDER BY idParticao DESC
        LIMIT 1) as espacoTotal2;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT
        espacoTotal1.espacoTotal as espacoTotal1,
        espacoTotal2.espacoTotal as espacoTotal2
    FROM 
        (SELECT TOP 1 espacoTotal
         FROM particao 
         WHERE idParticao = 1 
         ORDER BY idParticao DESC
        ) as espacoTotal1
    JOIN
        (SELECT TOP 1 espacoTotal
         FROM particao
         WHERE idParticao = 2
         ORDER BY idParticao DESC
        ) as espacoTotal2 ON 1 = 1;    
    
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




function buscarDiasFaltando(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        select  DATEDIFF(dataValidade, CURDATE()) AS diasRestantes, dataCompraLocacao as DtC, dataValidade as DtV from locacao where fkServidor = ${idUsuario};
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
        SELECT
    DATEDIFF(day, GETDATE(), dataValidade) AS diasRestantes,
    dataCompraLocacao as DtC,
    dataValidade as DtV
FROM locacao
WHERE fkServidor = ${idUsuario};


        `;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");

    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarUltimasUltAlertasSelected(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
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
    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT
        alerta.situacao AS situ,
        componentes.modelo AS nomeComponente,
        CONVERT(VARCHAR(10), alerta.dataAlerta, 103) AS dataAlerta, -- Formatando a data no padrão dd/mm/yyyy
        CONVERT(TIME, alerta.horaAlerta) AS horaAlerta -- Convertendo o campo hora para o tipo TIME
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
    OFFSET 0 ROWS FETCH NEXT 3 ROWS ONLY; -- Usando OFFSET e FETCH para limitar os resultados
    `

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");

    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarUltimasUltAlertasSelected2(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
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
    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT TOP 1
        alerta.situacao AS situ,
        componentes.modelo AS nomeComponente,
        CONVERT(VARCHAR(10), alerta.dataAlerta, 103) AS dataAlerta, -- Formatando a data no padrão dd/mm/yyyy
        CONVERT(TIME, alerta.horaAlerta) AS horaAlerta -- Convertendo o campo hora para o tipo TIME
    FROM
        alerta
    JOIN
        servidor ON alerta.fkServidor = servidor.idServidor
    JOIN
        componentes ON alerta.fkComponente = componentes.idComponentes
    WHERE
        alerta.fkServidor = ${idUsuario}
    ORDER BY
        alerta.idAlertas DESC;
    `

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");

    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function buscarUltimasUsbConectadas(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select nomeDispositivo as nome,
        qtddPorta as qtdPortasTotal,
        qtddConectada as qtdConnect from usb where fkServidor = ${idUsuario};
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select nomeDispositivo as nome,
        qtddPorta as qtdPortasTotal,
        qtddConectada as qtdConnect from usb where fkServidor = ${idUsuario};
    
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");

    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}









function ultimoUpload(idUsuario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select PotenciaUpload as Upload from Rede where fkServidorRede = ${idUsuario}  order by idRede desc limit 1;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1 PotenciaUpload as Upload from Rede where fkServidor = ${idUsuario} order by idRede desc;
    
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

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select ip as redeIP from Rede where fkServidor =${idUsuario} order by idRede desc limit 1;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1 ip as redeIP from Rede where fkServidor =${idUsuario} order by idRede desc ;

    
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

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select dadoCaptado as ads from registros where fkComponentesReg = 2 and fkServidorReg = ${idUsuario} order by idRegistros desc limit 1;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1 dadoCaptado as ads from registros where fkComponentesReg = 2 and fkServidorReg = ${idUsuario} order by idRegistros desc ;
    
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

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select dadoCaptado as sda from registros where fkComponentesReg =3 and fkServidorReg = ${idUsuario} order by idRegistros desc limit 1;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1 dadoCaptado as sda from registros where fkComponentesReg =3 and fkServidorReg = ${idUsuario} order by idRegistros desc;
    
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

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select dataCompraLocacao as val from servidor where  fkBanco = 1;

    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
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

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT  COUNT(*) AS NumeroDeServidores
        FROM servidor
        WHERE fkBanco = ${idUsuario}
        GROUP BY fkBanco;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
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

function buscarUltimasMedidasBola(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `  select idServidor as idS, fkStatus as fkStatus from servidor where fkBanco =${idUsuario};`;
    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `  select idServidor as idS, fkStatus as fkStatus from servidor where fkBanco =${idUsuario};`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function buscarUltimasMedidas24h(idUsuario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT IFNULL((SELECT idAlertas 
                       FROM alerta 
                       WHERE dataAlerta >= CURDATE() - INTERVAL 1 DAY
                         AND fkBanco = 1 
                       ORDER BY idAlertas DESC 
                       LIMIT 1), 0) AS Al;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
        SELECT COALESCE((SELECT TOP 1 idAlertas 
            FROM alerta 
            WHERE dataAlerta >= DATEADD(DAY, -1, GETDATE()) 
              AND fkBanco = 1 
            ORDER BY idAlertas DESC), 0) AS Al;

    
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

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `          SELECT COUNT(*) AS QuantidadeDeMaquinasInstaveis
        FROM servidor
        WHERE fkStatus IN (SELECT idStatus FROM status_maquina WHERE nome != 'Estável')
          AND fkBanco = ${idUsuario};
        
        
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `          SELECT COUNT(*) AS QuantidadeDeMaquinasInstaveis
        FROM servidor
        WHERE fkStatus IN (SELECT idStatus FROM status_maquina WHERE nome != 'Estável')
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

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
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
    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
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

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT IFNULL(
            (SELECT COUNT(*) 
             FROM servidor 
             JOIN status_maquina ON fkStatus = idStatus 
             WHERE nome = 'Emergencia' AND fkBanco = ${idUsuario}
            ), 0) AS qtdE,
            GROUP_CONCAT(servidor.apelido) AS nomesServidores
        FROM servidor
        JOIN status_maquina ON servidor.fkStatus = status_maquina.idStatus
        WHERE nome = 'Emergencia' AND fkBanco = ${idUsuario};
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
        SELECT COALESCE(
            (
                SELECT COUNT(*) 
                FROM servidor 
                JOIN status_maquina ON fkStatus = idStatus 
                WHERE nome = 'Emergencia' AND fkBanco = ${idUsuario}
            ), 0) AS qtdE,
           COALESCE(
                (
                    SELECT STRING_AGG(servidor.apelido, ', ') 
                    FROM servidor 
                    JOIN status_maquina ON servidor.fkStatus = status_maquina.idStatus 
                    WHERE nome = 'Emergencia' AND fkBanco = ${idUsuario}
                ), 'Nenhum') AS nomesServidores;
    
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

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT email AS mail, 
        cargo AS Cargo, nivelAcesso as Esca FROM funcionarios join escalonamento_funcionario on fkEscalonamento = idEscalonamento WHERE fkBanco = ${idUsuario};`;
    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT email AS mail, 
        cargo AS Cargo, nivelAcesso as Esca FROM funcionarios join escalonamento_funcionario on fkEscalonamento = idEscalonamento WHERE fkBanco = ${idUsuario};`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return null; // Retornando nulo se nenhuma condição for satisfeita
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarUltimasMedidasSelectContaPerfil(idUsuario, limite_linhas) {

    let instrucaoSql = '';

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT f.fkEscalonamento as Esca, b.nomeFantasia as empresa
        FROM funcionarios f
        INNER JOIN banco b ON f.fkBanco = b.idBanco
        WHERE f.idFuncionarios = ${idUsuario}; `;
    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
        SELECT f.fkEscalonamento as Esca, b.nomeFantasia as empresa
        FROM funcionarios f
        INNER JOIN banco b ON f.fkBanco = b.idBanco
        WHERE f.idFuncionarios = ${idUsuario}; `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return null; // Retornando nulo se nenhuma condição for satisfeita
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarUltimosAlertas1(idUsuario, limite_linhas) {

    let instrucaoSql = '';

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `-- nome servidor, nome componente, data, hora e status
        select servidor.apelido as nomeServidor, componentes.modelo as nomeComponente, DATE_FORMAT(alerta.dataAlerta, '%d/%m/%Y') as dataAlerta, alerta.horaAlerta as horaAlerta, alerta.situacao as situacaoAlerta
from alerta join servidor on fkServidor = idServidor
join componentes on fkComponente = idComponentes order by idAlertas desc LIMIT  1;`;
    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `-- nome servidor, nome componente, data, hora e status
        SELECT TOP 1
    servidor.apelido as nomeServidor,
    componentes.modelo as nomeComponente,
    CONVERT(VARCHAR(10), alerta.dataAlerta, 103) as dataAlerta, -- Formatação da data no padrão dd/mm/yyyy (formato 103)
    CONVERT(TIME, alerta.horaAlerta) as horaAlerta,
    alerta.situacao as situacaoAlerta
FROM 
    alerta
JOIN 
    servidor ON alerta.fkServidor = servidor.idServidor
JOIN 
    componentes ON alerta.fkComponente = componentes.idComponentes
ORDER BY 
    idAlertas DESC;
`;
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
        SELECT TOP 3
    servidor.apelido as nomeServidor,
    componentes.modelo as nomeComponente,
    CONVERT(VARCHAR(10), alerta.dataAlerta, 103) as dataAlerta, -- Formatação da data no padrão dd/mm/yyyy (formato 103)
    CONVERT(TIME, alerta.horaAlerta) as horaAlerta,
    alerta.situacao as situacaoAlerta
FROM 
    alerta
JOIN 
    servidor ON alerta.fkServidor = servidor.idServidor
JOIN 
    componentes ON alerta.fkComponente = componentes.idComponentes
ORDER BY 
    idAlertas DESC;
`;
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
        SELECT
    servidor.apelido as nomeServidor,
    componentes.modelo as nomeComponente,
    CONVERT(VARCHAR(10), alerta.dataAlerta, 103) as dataAlerta, -- Formatação da data no padrão dd/mm/yyyy (formato 103)
    CONVERT(TIME, alerta.horaAlerta) as horaAlerta,
    alerta.situacao as situacaoAlerta
FROM 
    alerta
JOIN 
    servidor ON alerta.fkServidor = servidor.idServidor
JOIN 
    componentes ON alerta.fkComponente = componentes.idComponentes
WHERE
    servidor.fkBanco = ${idUsuario}
ORDER BY 
    idAlertas DESC
OFFSET 0 ROWS FETCH NEXT ${limite_linhas} ROWS ONLY;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `-- nome servidor, nome componente, data, hora e status
        select servidor.apelido as nomeServidor, componentes.modelo as nomeComponente, DATE_FORMAT(alerta.dataAlerta, '%d/%m/%Y') as dataAlerta, alerta.horaAlerta as horaAlerta, alerta.situacao as situacaoAlerta
from alerta join servidor on fkServidor = idServidor
join componentes on fkComponente = idComponentes where servidor.fkBanco = ${idUsuario} order by idAlertas desc LIMIT ${limite_linhas};`;
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
    MAX(CASE WHEN fkComponentesReg = 1 THEN dadoCaptado END) AS 'proc',
    MAX(CASE WHEN fkComponentesReg = 2 THEN dadoCaptado END) AS 'RAM',
    MAX(CASE WHEN fkComponentesReg = 3 THEN dadoCaptado END) AS 'disco',
    CONVERT(VARCHAR(10), dataHorario, 103) AS horario
FROM registros
WHERE fkBanco = 1
GROUP BY dataHorario
ORDER BY dataHorario DESC
OFFSET 0 ROWS FETCH NEXT 90 ROWS ONLY;

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

function buscarUltimasMedidasTemperatura(servidor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
        SELECT TOP 8
    registros.dadoCaptado as Temperatura,
    componentes.nome
FROM registros
JOIN componentes ON fkComponentesReg = idComponentes
WHERE modelo = 'Temperatura' AND fkServidor = 1
ORDER BY idRegistros DESC;


    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        select registros.dadoCaptado as Temperatura, componentes.nome from registros join componentes on fkComponentesReg = idComponentes where modelo = 'Temperatura' and fkServidor = ${servidor} order by idRegistros desc limit 8;
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealTemperatura(servidor) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
        SELECT TOP 8
    registros.dadoCaptado as Temperatura,
    componentes.nome
FROM registros
JOIN componentes ON fkComponentesReg = idComponentes
WHERE modelo = 'Temperatura' AND fkServidor = ${servidor}
ORDER BY idRegistros DESC;

    `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        select registros.dadoCaptado as Temperatura, componentes.nome from registros join componentes on fkComponentesReg = idComponentes where modelo = 'Temperatura' and fkServidor = ${servidor} order by idRegistros desc limit 8;
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function buscarUltimasMedidasCPU2(servidor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
        SELECT TOP 8
    registros.dadoCaptado as CPU,
    componentes.nome
FROM registros
JOIN componentes ON fkComponentesReg = idComponentes
WHERE componentes.nome = 'CPU' AND fkServidor =1
ORDER BY registros.idRegistros DESC;


   
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        select registros.dadoCaptado as CPU, componentes.nome from registros join componentes on fkComponentesReg = idComponentes where nome = 'CPU' and fkServidor = ${servidor} order by  registros.idRegistros desc limit 8;
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealCPU2(servidor) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
        SELECT TOP 8
    registros.dadoCaptado as CPU,
    componentes.nome
FROM registros
JOIN componentes ON fkComponentesReg = idComponentes
WHERE componentes.nome = 'CPU' AND fkServidor =1
ORDER BY registros.idRegistros DESC;

    `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        select registros.dadoCaptado as CPU, componentes.nome from registros join componentes on fkComponentesReg = idComponentes where nome = 'CPU' and fkServidor = ${servidor} order by  registros.idRegistros desc limit 8;
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
    (SELECT TOP 1 dadoCaptado FROM registros WHERE fkComponentesReg = 1 AND fkBanco = 1 ORDER BY dadoCaptado DESC) AS 'proc',
    (SELECT TOP 1 dadoCaptado FROM registros WHERE fkComponentesReg = 2 AND fkBanco = 1 ORDER BY dadoCaptado DESC) AS 'RAM',
    (SELECT TOP 1 dadoCaptado FROM registros WHERE fkComponentesReg = 3 AND fkBanco = 1 ORDER BY dadoCaptado DESC) AS 'disco',
    dataHorario AS horario
FROM registros
JOIN Componentes ON fkComponentesReg = idComponentes
WHERE registros.fkBanco = ${idUsuario}


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
        instrucaoSql2 = `SELECT status_maquina.nome as statuss, COUNT(servidor.fkStatus) as num 
        FROM Servidor 
        JOIN status_maquina ON servidor.fkStatus = status_maquina.idStatus 
        WHERE servidor.fkBanco = ${idUsuario2}  
        GROUP BY status_maquina.nome;
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql2 = `select nome as statuss, count(fkStatus) as num from Servidor join status_maquina on fkStatus = idStatus where fkBanco = ${idUsuario2} group by fkStatus;`;
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
        instrucaoSql2 = `SELECT status_maquina.nome as statuss, COUNT(servidor.fkStatus) as num 
        FROM Servidor 
        JOIN status_maquina ON servidor.fkStatus = status_maquina.idStatus 
        WHERE servidor.fkBanco = ${idUsuario2}  
        GROUP BY status_maquina.nome;
        `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql2 = `select nome as statuss, count(fkStatus) as num from Servidor join status_maquina on fkStatus = idStatus where fkBanco = ${idUsuario2} group by fkStatus;`;
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
        SELECT top 10 dadoCaptado AS 'proc', 
       dataHorario AS 'horario' 
FROM registros 
JOIN componentes ON registros.fkComponentesReg = componentes.idComponentes
WHERE registros.fkComponentesReg = 1 
  AND registros.fkServidorReg = ${idUsuario}
ORDER BY registros.idRegistros DESC ;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT dadoCaptado AS proc, 
       dataHorario AS horario 
FROM registros 
JOIN componentes ON registros.fkComponentesReg = componentes.idComponentes
WHERE registros.fkComponentesReg = 1 
  AND registros.fkServidorReg = ${idUsuario}
ORDER BY registros.idRegistros DESC 
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
        SELECT top 10 dadoCaptado AS 'proc', 
        dataHorario AS 'horario' 
 FROM registros 
 JOIN componentes ON registros.fkComponentesReg = componentes.idComponentes
 WHERE registros.fkComponentesReg = 1 
   AND registros.fkServidorReg = ${idUsuario}
 ORDER BY registros.idRegistros DESC ;
    
    `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT dadoCaptado AS proc, 
        dataHorario AS horario 
 FROM registros 
 JOIN componentes ON registros.fkComponentesReg = componentes.idComponentes
 WHERE registros.fkComponentesReg = 1 
   AND registros.fkServidorReg = ${idUsuario}
 ORDER BY registros.idRegistros DESC 
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
        SELECT top 10 dadoCaptado AS 'ram', 
        dataHorario AS 'horario' 
 FROM registros 
 JOIN componentes ON registros.fkComponentesReg = componentes.idComponentes
 WHERE registros.fkComponentesReg = 2 
   AND registros.fkServidorReg = ${idUsuario} 
 ORDER BY registros.idRegistros DESC ;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        
        SELECT dadoCaptado AS ram, 
        dataHorario AS horario 
 FROM registros 
 JOIN componentes ON registros.fkComponentesReg = componentes.idComponentes
 WHERE registros.fkComponentesReg = 2 
   AND registros.fkServidorReg = ${idUsuario} 
 ORDER BY registros.idRegistros DESC 
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
        SELECT top 10 dadoCaptado AS 'ram', 
        dataHorario AS 'horario' 
 FROM registros 
 JOIN componentes ON registros.fkComponentesReg = componentes.idComponentes
 WHERE registros.fkComponentesReg = 2 
   AND registros.fkServidorReg = ${idUsuario} 
 ORDER BY registros.idRegistros DESC ;
    
    `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT dadoCaptado AS ram, 
        dataHorario AS horario 
 FROM registros 
 JOIN componentes ON registros.fkComponentesReg = componentes.idComponentes
 WHERE registros.fkComponentesReg = 2 
   AND registros.fkServidorReg = ${idUsuario} 
 ORDER BY registros.idRegistros DESC 
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
        SELECT top 10 dadoCaptado AS 'DISK', 
        dataHorario AS 'horario' 
 FROM registros 
 JOIN componentes ON registros.fkComponentesReg = componentes.idComponentes
 WHERE registros.fkComponentesReg = 3 
   AND registros.fkServidorReg = ${idUsuario}
 ORDER BY registros.idRegistros DESC ;
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT dadoCaptado AS DISK, 
        dataHorario AS horario 
 FROM registros 
 JOIN componentes ON registros.fkComponentesReg = componentes.idComponentes
 WHERE registros.fkComponentesReg = 3 
   AND registros.fkServidorReg = ${idUsuario} 
 ORDER BY registros.idRegistros DESC 
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
        SELECT top 10 dadoCaptado AS 'DISK', 
        dataHorario AS 'horario' 
 FROM registros 
 JOIN componentes ON registros.fkComponentesReg = componentes.idComponentes
 WHERE registros.fkComponentesReg = 3 
   AND registros.fkServidorReg = ${idUsuario}
 ORDER BY registros.idRegistros DESC ;
    
    `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT dadoCaptado AS DISK, 
        dataHorario AS horario 
 FROM registros 
 JOIN componentes ON registros.fkComponentesReg = componentes.idComponentes
 WHERE registros.fkComponentesReg = 3 
   AND registros.fkServidorReg = ${idUsuario} 
 ORDER BY registros.idRegistros DESC 
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
    COALESCE((SELECT TOP 1 dadoCaptado FROM registros WHERE fkComponentesReg = 1 ORDER BY dataHorario DESC), 0) AS 'proc',
    COALESCE((SELECT TOP 1 dadoCaptado FROM registros WHERE fkComponentesReg = 2 ORDER BY dataHorario DESC), 0) AS 'RAM',
    COALESCE((SELECT TOP 1 dadoCaptado FROM registros WHERE fkComponentesReg = 3 ORDER BY dataHorario DESC), 0) AS 'disco',
    COALESCE((SELECT TOP 1 dadoCaptado FROM registros WHERE fkComponentesReg = 4 ORDER BY dataHorario DESC), 0) AS 'rede',
    COALESCE((SELECT TOP 1 dadoCaptado FROM registros WHERE fkComponentesReg = 5 ORDER BY dataHorario DESC), 0) AS 'porta'
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
        SELECT
COALESCE((SELECT top 1 dadoCaptado FROM registros WHERE fkComponentesReg = 1 ORDER BY dataHorario DESC), 0) AS 'proc',
COALESCE((SELECT top 1 dadoCaptado FROM registros WHERE fkComponentesReg = 2 ORDER BY dataHorario DESC), 0) AS 'RAM',
COALESCE((SELECT top 1 dadoCaptado FROM registros WHERE fkComponentesReg = 3 ORDER BY dataHorario DESC), 0) AS 'disco',
COALESCE((SELECT top 1 dadoCaptado FROM registros WHERE fkComponentesReg = 4 ORDER BY dataHorario DESC), 0) AS 'rede'
FROM registros     
JOIN Componentes ON fkComponentesReg = idComponentes     
WHERE registros.idRegistros = (SELECT MAX(idRegistros) FROM registros);
    
    
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





function componenteMetricaCPU(idSelect) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1 dadoCaptado 
        from registros join componentes on fkComponentesReg = idComponentes
        where componentes.modelo = 'cpu'
        and fkServidor = ${idSelect}
        order by idRegistros desc;
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        // instrucaoSql = `select dadosCaptados as cnc from registros where fkComponentesReg =4 and fkServidorReg = ${idUsuario} order by idRegistros desc limit 1;`
        instrucaoSql = `select dadoCaptado 
        from registros join componentes on fkComponentesReg = idComponentes
        where componentes.modelo = "cpu"
        and fkServidor = ${idSelect}
        order by idRegistros desc limit 1;;
    
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function componenteMetricaRAM(idSelect) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1 dadoCaptado 
        from registros join componentes on fkComponentesReg = idComponentes
        where componentes.modelo = 'ram'
        and fkServidor = ${idSelect}
        order by idRegistros desc;
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        // instrucaoSql = `select dadosCaptados as cnc from registros where fkComponentesReg =4 and fkServidorReg = ${idUsuario} order by idRegistros desc limit 1;`
        instrucaoSql = `select dadoCaptado 
        from registros join componentes on fkComponentesReg = idComponentes
        where componentes.modelo = "ram"
        and fkServidor = ${idSelect}
        order by idRegistros desc limit 1;
    
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function componenteMetricaDISCO(idSelect) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1 dadoCaptado 
        from registros join componentes on fkComponentesReg = idComponentes
        where componentes.modelo = 'disco'
        and fkServidor = ${idSelect}
        order by idRegistros desc;
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        // instrucaoSql = `select dadosCaptados as cnc from registros where fkComponentesReg =4 and fkServidorReg = ${idUsuario} order by idRegistros desc limit 1;`
        instrucaoSql = `select dadoCaptado 
        from registros join componentes on fkComponentesReg = idComponentes
        where componentes.modelo = "disco"
        and fkServidor = ${idSelect}
        order by idRegistros desc limit 1;
    
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function estadoFrequenteCPU(idSelect) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select alerta.situacao, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on alerta.fkServidor = idServidor
        join componentes on fkComponente = idComponentes
        where componentes.fkServidor = ${idSelect}
        and componentes.modelo = 'cpu'
        group by alerta.situacao
        ;
        ;
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        // instrucaoSql = `select dadosCaptados as cnc from registros where fkComponentesReg =4 and fkServidorReg = ${idUsuario} order by idRegistros desc limit 1;`
        instrucaoSql = `select alerta.situacao, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on alerta.fkServidor = idServidor
        join componentes on fkComponente = idComponentes
        where componentes.fkServidor = ${idSelect}
        and componentes.modelo = "cpu"
        group by alerta.situacao
        ;
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function estadoFrequenteDISCO(idSelect) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select alerta.situacao, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on alerta.fkServidor = idServidor
        join componentes on fkComponente = idComponentes
        where componentes.fkServidor = ${idSelect}
        and componentes.modelo = 'disco'
        group by alerta.situacao
        ;
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        // instrucaoSql = `select dadosCaptados as cnc from registros where fkComponentesReg =4 and fkServidorReg = ${idUsuario} order by idRegistros desc limit 1;`
        instrucaoSql = `select alerta.situacao, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on alerta.fkServidor = idServidor
        join componentes on fkComponente = idComponentes
        where componentes.fkServidor = ${idSelect}
        and componentes.modelo = "disco"
        group by alerta.situacao
        ;
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function estadoFrequenteRAM(idSelect) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select alerta.situacao, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on alerta.fkServidor = idServidor
        join componentes on fkComponente = idComponentes
        where componentes.fkServidor = ${idSelect}
        and componentes.modelo = 'ram'
        group by alerta.situacao
        ;
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        // instrucaoSql = `select dadosCaptados as cnc from registros where fkComponentesReg =4 and fkServidorReg = ${idUsuario} order by idRegistros desc limit 1;`
        instrucaoSql = `select alerta.situacao, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on alerta.fkServidor = idServidor
        join componentes on fkComponente = idComponentes
        where componentes.fkServidor = ${idSelect}
        and componentes.modelo = "ram"
        group by alerta.situacao
        ;
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function totalAlertas(idSelect) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select count(*) as totalAlertas 
        from alerta join servidor
        on fkServidor = idServidor
        where fkServidor = ${idSelect}
        ; 
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        // instrucaoSql = `select dadosCaptados as cnc from registros where fkComponentesReg =4 and fkServidorReg = ${idUsuario} order by idRegistros desc limit 1;`
        instrucaoSql = `select count(*) as totalAlertas 
        from alerta join servidor
        on fkServidor = idServidor
        where fkServidor = ${idSelect}
        ; 
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function totalAlertasCPU(idSelect) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT componentes.modelo, COUNT(alerta.situacao) as totalAlertas 
        FROM alerta 
        JOIN servidor ON alerta.fkServidor = servidor.idServidor 
        JOIN componentes ON alerta.fkComponente = componentes.idComponentes 
        WHERE servidor.idServidor = ${idSelect} AND componentes.modelo = "cpu"
        GROUP BY componentes.modelo;
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        // instrucaoSql = `select dadosCaptados as cnc from registros where fkComponentesReg =4 and fkServidorReg = ${idUsuario} order by idRegistros desc limit 1;`
        instrucaoSql = `SELECT componentes.modelo, COUNT(alerta.situacao) as totalAlertas 
        FROM alerta 
        JOIN servidor ON alerta.fkServidor = servidor.idServidor 
        JOIN componentes ON alerta.fkComponente = componentes.idComponentes 
        WHERE servidor.idServidor = ${idSelect} AND componentes.modelo = "cpu"
        GROUP BY componentes.modelo;
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function totalAlertasRAM(idSelect) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT componentes.modelo, COUNT(alerta.situacao) as totalAlertas 
        FROM alerta 
        JOIN servidor ON alerta.fkServidor = servidor.idServidor 
        JOIN componentes ON alerta.fkComponente = componentes.idComponentes 
        WHERE servidor.idServidor = ${idSelect} AND componentes.modelo = "ram"
        GROUP BY componentes.modelo;
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        // instrucaoSql = `select dadosCaptados as cnc from registros where fkComponentesReg =4 and fkServidorReg = ${idUsuario} order by idRegistros desc limit 1;`
        instrucaoSql = `SELECT componentes.modelo, COUNT(alerta.situacao) as totalAlertas 
        FROM alerta 
        JOIN servidor ON alerta.fkServidor = servidor.idServidor 
        JOIN componentes ON alerta.fkComponente = componentes.idComponentes 
        WHERE servidor.idServidor = ${idSelect} AND componentes.modelo = "ram"
        GROUP BY componentes.modelo;
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function totalAlertasDISCO(idSelect) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT componentes.modelo, COUNT(alerta.situacao) as totalAlertas 
        FROM alerta 
        JOIN servidor ON alerta.fkServidor = servidor.idServidor 
        JOIN componentes ON alerta.fkComponente = componentes.idComponentes 
        WHERE servidor.idServidor = ${idSelect} AND componentes.modelo = "disco"
        GROUP BY componentes.modelo;
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        // instrucaoSql = `select dadosCaptados as cnc from registros where fkComponentesReg =4 and fkServidorReg = ${idUsuario} order by idRegistros desc limit 1;`
        instrucaoSql = `SELECT componentes.modelo, COUNT(alerta.situacao) as totalAlertas 
        FROM alerta 
        JOIN servidor ON alerta.fkServidor = servidor.idServidor 
        JOIN componentes ON alerta.fkComponente = componentes.idComponentes 
        WHERE servidor.idServidor = ${idSelect} AND componentes.modelo = "disco"
        GROUP BY componentes.modelo;
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function totalAlertasAtencao(idSelect) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select alerta.situacao, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on fkServidor = idServidor
        where fkServidor = ${idSelect}
        and alerta.situacao = 'Atenção'
		group by alerta.situacao
        ; 
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        // instrucaoSql = `select dadosCaptados as cnc from registros where fkComponentesReg =4 and fkServidorReg = ${idUsuario} order by idRegistros desc limit 1;`
        instrucaoSql = `select alerta.situacao, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on fkServidor = idServidor
        where fkServidor = ${idSelect}
        and alerta.situacao = "Atenção"
        ; 
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function totalAlertasAtencaoCPU(idSelect) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select alerta.situacao, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on alerta.fkServidor = idServidor
        join componentes on fkComponente = idComponentes
        where alerta.fkServidor = ${idSelect}
        and alerta.situacao = 'Atenção'
        and componentes.modelo = 'cpu'
		group by alerta.situacao
        ; 
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        // instrucaoSql = `select dadosCaptados as cnc from registros where fkComponentesReg =4 and fkServidorReg = ${idUsuario} order by idRegistros desc limit 1;`
        instrucaoSql = `select alerta.situacao, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on alerta.fkServidor = idServidor
        join componentes on fkComponente = idComponentes
        where alerta.fkServidor = ${idSelect}
        and alerta.situacao = "Atenção"
        and componentes.modelo = "cpu"
        ; 
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function totalAlertasAtencaoRAM(idSelect) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select alerta.situacao, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on alerta.fkServidor = idServidor
        join componentes on fkComponente = idComponentes
        where alerta.fkServidor = ${idSelect}
        and alerta.situacao = 'Atenção'
        and componentes.modelo = 'ram'
		group by alerta.situacao
        ; 
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        // instrucaoSql = `select dadosCaptados as cnc from registros where fkComponentesReg =4 and fkServidorReg = ${idUsuario} order by idRegistros desc limit 1;`
        instrucaoSql = `select alerta.situacao, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on alerta.fkServidor = idServidor
        join componentes on fkComponente = idComponentes
        where alerta.fkServidor = ${idSelect}
        and alerta.situacao = "Atenção"
        and componentes.modelo = "ram"
        ; 
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function totalAlertasAtencaoDISCO(idSelect) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select alerta.situacao, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on alerta.fkServidor = idServidor
        join componentes on fkComponente = idComponentes
        where alerta.fkServidor = ${idSelect}
        and alerta.situacao = 'Atenção'
        and componentes.modelo = 'disco'
		group by alerta.situacao
        ; 
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        // instrucaoSql = `select dadosCaptados as cnc from registros where fkComponentesReg =4 and fkServidorReg = ${idUsuario} order by idRegistros desc limit 1;`
        instrucaoSql = `select alerta.situacao, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on alerta.fkServidor = idServidor
        join componentes on fkComponente = idComponentes
        where alerta.fkServidor = ${idSelect}
        and alerta.situacao = "Atenção"
        and componentes.modelo = "disco"
        ; 
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function totalAlertasEmergencia(idSelect) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select alerta.situacao, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on fkServidor = idServidor
        where fkServidor = ${idSelect}
        and alerta.situacao = 'Emergência'
		group by alerta.situacao; 
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        // instrucaoSql = `select dadosCaptados as cnc from registros where fkComponentesReg =4 and fkServidorReg = ${idUsuario} order by idRegistros desc limit 1;`
        instrucaoSql = `select alerta.situacao, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on fkServidor = idServidor
        where fkServidor = ${idSelect}
        and alerta.situacao = "Emergência"
        ; 
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function totalAlertasEmergenciaCPU(idSelect) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select alerta.situacao, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on alerta.fkServidor = idServidor
        join componentes on fkComponente = idComponentes
        where alerta.fkServidor = ${idSelect}
        and alerta.situacao = 'Emergência'
        and componentes.modelo = 'cpu'
		group by alerta.situacao
        ; 
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        // instrucaoSql = `select dadosCaptados as cnc from registros where fkComponentesReg =4 and fkServidorReg = ${idUsuario} order by idRegistros desc limit 1;`
        instrucaoSql = `select alerta.situacao, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on alerta.fkServidor = idServidor
        join componentes on fkComponente = idComponentes
        where alerta.fkServidor = ${idSelect}
        and alerta.situacao = "Emergência"
        and componentes.modelo = "cpu"
        ; 
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function totalAlertasEmergenciaRAM(idSelect) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select alerta.situacao, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on alerta.fkServidor = idServidor
        join componentes on fkComponente = idComponentes
        where alerta.fkServidor = ${idSelect}
        and alerta.situacao = 'Emergência'
        and componentes.modelo = 'ram'
		group by alerta.situacao
        ; 
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        // instrucaoSql = `select dadosCaptados as cnc from registros where fkComponentesReg =4 and fkServidorReg = ${idUsuario} order by idRegistros desc limit 1;`
        instrucaoSql = `select alerta.situacao, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on alerta.fkServidor = idServidor
        join componentes on fkComponente = idComponentes
        where alerta.fkServidor = ${idSelect}
        and alerta.situacao = "Emergência"
        and componentes.modelo = "ram"
        ; 
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function totalAlertasEmergenciaDISCO(idSelect) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select alerta.situacao, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on alerta.fkServidor = idServidor
        join componentes on fkComponente = idComponentes
        where alerta.fkServidor = ${idSelect}
        and alerta.situacao = 'Emergência'
        and componentes.modelo = 'disco'
		group by alerta.situacao
        ; 
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        // instrucaoSql = `select dadosCaptados as cnc from registros where fkComponentesReg =4 and fkServidorReg = ${idUsuario} order by idRegistros desc limit 1;`
        instrucaoSql = `select alerta.situacao, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on alerta.fkServidor = idServidor
        join componentes on fkComponente = idComponentes
        where alerta.fkServidor = ${idSelect}
        and alerta.situacao = "Emergência"
        and componentes.modelo = "disco"
        ; 
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function totalAlertasUrgencia(idSelect) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select alerta.situacao, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on fkServidor = idServidor
        where fkServidor = ${idSelect}
        and alerta.situacao = 'Urgência'
		group by alerta.situacao; 
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        // instrucaoSql = `select dadosCaptados as cnc from registros where fkComponentesReg =4 and fkServidorReg = ${idUsuario} order by idRegistros desc limit 1;`
        instrucaoSql = `select alerta.situacao, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on fkServidor = idServidor
        where fkServidor = ${idSelect}
        and alerta.situacao = "Urgência"
        ; 
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function totalAlertasUrgenciaCPU(idSelect) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select alerta.situacao, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on alerta.fkServidor = idServidor
        join componentes on fkComponente = idComponentes
        where alerta.fkServidor = ${idSelect}
        and alerta.situacao = 'Urgência'
        and componentes.modelo = 'cpu'
		group by alerta.situacao
        ; 
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        // instrucaoSql = `select dadosCaptados as cnc from registros where fkComponentesReg =4 and fkServidorReg = ${idUsuario} order by idRegistros desc limit 1;`
        instrucaoSql = `select alerta.situacao, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on alerta.fkServidor = idServidor
        join componentes on fkComponente = idComponentes
        where alerta.fkServidor = ${idSelect}
        and alerta.situacao = "Urgência"
        and componentes.modelo = "cpu"
        ; 
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function totalAlertasUrgenciaRAM(idSelect) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select alerta.situacao, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on alerta.fkServidor = idServidor
        join componentes on fkComponente = idComponentes
        where alerta.fkServidor = ${idSelect}
        and alerta.situacao = 'Urgência'
        and componentes.modelo = 'ram'
		group by alerta.situacao
        ; 
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        // instrucaoSql = `select dadosCaptados as cnc from registros where fkComponentesReg =4 and fkServidorReg = ${idUsuario} order by idRegistros desc limit 1;`
        instrucaoSql = `select alerta.situacao, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on alerta.fkServidor = idServidor
        join componentes on fkComponente = idComponentes
        where alerta.fkServidor = ${idSelect}
        and alerta.situacao = "Urgência"
        and componentes.modelo = "ram"
        ; 
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function totalAlertasUrgenciaDISCO(idSelect) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select alerta.situacao, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on alerta.fkServidor = idServidor
        join componentes on fkComponente = idComponentes
        where alerta.fkServidor = ${idSelect}
        and alerta.situacao = 'Urgência'
        and componentes.modelo = 'disco'
		group by alerta.situacao
        ; 
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        // instrucaoSql = `select dadosCaptados as cnc from registros where fkComponentesReg =4 and fkServidorReg = ${idUsuario} order by idRegistros desc limit 1;`
        instrucaoSql = `select alerta.situacao, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on alerta.fkServidor = idServidor
        join componentes on fkComponente = idComponentes
        where alerta.fkServidor = ${idSelect}
        and alerta.situacao = "Urgência"
        and componentes.modelo = "disco"
        ; 
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarUltimasMedidasAlertasConsumo1(idSelect) {

    instrucaoSql = ''
//COLOCAR O ID DO USUARIO
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select componentes.modelo as modelo, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on fkServidor = idServidor
        join componentes on fkComponente = idComponentes
        where alerta.fkServidor = ${idSelect}
        group by componentes.modelo
        ;  `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select componentes.modelo as modelo, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on fkServidor = idServidor
        join componentes on fkComponente = idComponentes
        where alerta.fkServidor = ${idSelect}
        group by componentes.modelo
        ; `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealAlertasConsumo1(idSelect) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select componentes.modelo as modelo, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on fkServidor = idServidor
        join componentes on fkComponente = idComponentes
        where alerta.fkServidor = ${idSelect}
        group by componentes.modelo
        ; `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select componentes.modelo as modelo, count(alerta.situacao) as totalAlertas 
        from alerta join servidor
        on fkServidor = idServidor
        join componentes on fkComponente = idComponentes
        where alerta.fkServidor = ${idSelect}
        group by componentes.modelo
        ; `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasAlertasConsumo2(idSelect) {

    instrucaoSql = ''
//COLOCAR O ID DO USUARIO
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT 
        componentes.modelo as modelo, 
        AVG(registros.dadoCaptado) as media
    FROM 
        componentes 
    JOIN 
        registros ON idComponentes = fkComponentesReg
    JOIN 
        servidor ON fkServidor = idServidor
    WHERE 
        fkServidor = ${idSelect} 
        AND componentes.modelo IN ('disco', 'cpu', 'ram')
    GROUP BY 
        modelo;
    
        ; `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT componentes.modelo as modelo, AVG(registros.dadoCaptado) as media
        FROM componentes join registros on idComponentes = fkComponentesReg
        join servidor on fkServidor = idServidor
        where fkServidor = ${idSelect}
        GROUP BY modelo
        ;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealAlertasConsumo2(idSelect) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT componentes.modelo as modelo, AVG(registros.dadoCaptado) as media
        FROM componentes join registros on idComponentes = fkComponentesReg
        join servidor on fkServidor = idServidor
        where fkServidor = ${idSelect}
        GROUP BY modelo
        ;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT componentes.modelo as modelo, AVG(registros.dadoCaptado) as media
        FROM componentes join registros on idComponentes = fkComponentesReg
        join servidor on fkServidor = idServidor
        where fkServidor = ${idSelect}
        GROUP BY modelo
        ;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasAlertasConsumoCPU(idSelect) {

    instrucaoSql = ''
//COLOCAR O ID DO USUARIO
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT 
        AVG(dadoCaptado) AS consumo, 
        FORMAT(dataHorario, 'MM') as mes 
    FROM registros 
    JOIN componentes ON fkComponentesReg = idComponentes
    WHERE componentes.modelo = 'cpu'
    AND fkServidor = ${idSelect}
    GROUP BY FORMAT(dataHorario, 'MM');
     `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT avg(dadoCaptado) AS consumo, 
        date_format(dataHorario, '%m') as mes 
        FROM registros 
        JOIN componentes ON fkComponentesReg = idComponentes
        WHERE componentes.modelo = "cpu"
        AND fkServidor = ${idSelect}
        group by date_format(dataHorario, '%m')
        ; `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealAlertasConsumoCPU(idSelect) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT 
        AVG(dadoCaptado) AS consumo, 
        FORMAT(dataHorario, 'MM') AS mes 
    FROM registros 
    JOIN componentes ON fkComponentesReg = idComponentes
    WHERE componentes.modelo = 'cpu'
    AND fkServidor = ${idSelect}
    GROUP BY FORMAT(dataHorario, 'MM');
    
        ; `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT avg(dadoCaptado) AS consumo, 
        date_format(dataHorario, '%m') as mes 
        FROM registros 
        JOIN componentes ON fkComponentesReg = idComponentes
        WHERE componentes.modelo = "cpu"
        AND fkServidor = ${idSelect}
        group by date_format(dataHorario, '%m')
        ; `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasAlertasConsumoRAM(idSelect) {

    instrucaoSql = ''
//COLOCAR O ID DO USUARIO
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT 
        AVG(dadoCaptado) AS consumo, 
        FORMAT(dataHorario, 'MM') AS mes 
    FROM registros 
    JOIN componentes ON fkComponentesReg = idComponentes
    WHERE componentes.modelo = 'ram'
    AND fkServidor = ${idSelect}
    GROUP BY FORMAT(dataHorario, 'MM');
        ; `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT avg(dadoCaptado) AS consumo, 
        date_format(dataHorario, '%m') as mes 
        FROM registros 
        JOIN componentes ON fkComponentesReg = idComponentes
        WHERE componentes.modelo = "ram"
        AND fkServidor = ${idSelect}
        group by date_format(dataHorario, '%m')
        ; `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealAlertasConsumoRAM(idSelect) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT 
        AVG(dadoCaptado) AS consumo, 
        FORMAT(dataHorario, 'MM') AS mes 
    FROM registros 
    JOIN componentes ON fkComponentesReg = idComponentes
    WHERE componentes.modelo = 'ram'
    AND fkServidor = ${idSelect}
    GROUP BY FORMAT(dataHorario, 'MM');
        ; `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT avg(dadoCaptado) AS consumo, 
        date_format(dataHorario, '%m') as mes 
        FROM registros 
        JOIN componentes ON fkComponentesReg = idComponentes
        WHERE componentes.modelo = "ram"
        AND fkServidor = ${idSelect}
        group by date_format(dataHorario, '%m')
        ; `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasAlertasConsumoDISCO(idSelect) {

    instrucaoSql = ''
//COLOCAR O ID DO USUARIO
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT 
        AVG(dadoCaptado) AS consumo, 
        FORMAT(dataHorario, 'MM') AS mes 
    FROM registros 
    JOIN componentes ON fkComponentesReg = idComponentes
    WHERE componentes.modelo = 'disco'
    AND fkServidor = ${idSelect}
    GROUP BY FORMAT(dataHorario, 'MM');
        ; `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT avg(dadoCaptado) AS consumo, 
        date_format(dataHorario, '%m') as mes 
        FROM registros 
        JOIN componentes ON fkComponentesReg = idComponentes
        WHERE componentes.modelo = "disco"
        AND fkServidor = ${idSelect}
        group by date_format(dataHorario, '%m')
        ; `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealAlertasConsumoDISCO(idSelect) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT 
        AVG(dadoCaptado) AS consumo, 
        FORMAT(dataHorario, 'MM') AS mes 
    FROM registros 
    JOIN componentes ON fkComponentesReg = idComponentes
    WHERE componentes.modelo = 'disco'
    AND fkServidor = ${idSelect}
    GROUP BY FORMAT(dataHorario, 'MM');
        ; `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT avg(dadoCaptado) AS consumo, 
        date_format(dataHorario, '%m') as mes 
        FROM registros 
        JOIN componentes ON fkComponentesReg = idComponentes
        WHERE componentes.modelo = "disco"
        AND fkServidor = ${idSelect}
        group by date_format(dataHorario, '%m')
        ; `;
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
    alertaRede.componente AS situ,
    FORMAT(alertaRede.data, 'dd/MM/yyyy') AS dataAlerta,
    alertaRede.hora AS horaAlerta
FROM
    alertaRede
JOIN
    Rede ON alertaRede.fkRede = Rede.idRede
WHERE
    Rede.fkServidor= ${idUsuario}
ORDER BY
    alertaRede.idAlertas DESC
OFFSET 0 ROWS FETCH NEXT 4 ROWS ONLY;

    
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
        instrucaoSql2 = `SELECT top 1 PotenciaUpload AS Upl  FROM rede  WHERE fkServidor = ${idUsuario} ORDER BY idRede DESC;`;


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
        instrucaoSql2 = `SELECT top 1 PotenciaUpload AS Upl  FROM rede  WHERE fkServidor = ${idUsuario}  ORDER BY idRede DESC;`;




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
        instrucaoSql2 = `select top 1 status as connectOrN from rede where fkServidor = ${idUsuario} order by idRede desc`;


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
        instrucaoSql2 = `SELECT top 1 PotenciaDownload AS Down  FROM rede  WHERE fkServidor = ${idUsuario}  ORDER BY idRede DESC`;


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
        instrucaoSql2 = `SELECT top 1 PotenciaDownload AS Down  FROM rede  WHERE fkServidor = ${idUsuario}  ORDER BY idRede DESC;`;



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
        instrucaoSql2 = `    SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS Ligado, SUM(CASE WHEN status = 0 THEN 1 ELSE 0 END) AS Desligado,COUNT(*) AS Total FROM rede WHERE fkServidor =${idUsuario};`;

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
        instrucaoSql2 = `SELECT 
        Ping AS Ping, 
        FORMAT(dtHora, 'dd/MM/yyyy') AS DataHora
    FROM 
        Rede
    WHERE 
        fkServidor = ${idUsuario}
    ORDER BY 
        dtHora DESC
    OFFSET 0 ROWS FETCH NEXT 6 ROWS ONLY;
    
        `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql2 = `SELECT Ping AS Ping, DATE_FORMAT(dtHora, '%d/%m/%Y') AS DataHora
        FROM Rede
        WHERE fkServidor = ${idUsuario}
        ORDER BY dtHora DESC
        LIMIT 6;
        `;


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









function kpiIndividual(servidorSelecionado) {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select qtdNucleos, qtdThreads, especificacaoCpu from qtdNucleosThreads where fkServidor = ${servidorSelecionado};`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select qtdNucleos, qtdThreads, especificacaoCpu from qtdNucleosThreads where fkServidor = ${servidorSelecionado};`
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function PorcentagemTotalProcessador(servidorSelecionado) {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT top 1 dadoCaptado
        FROM registros
        WHERE fkServidorReg = ${servidorSelecionado}
        ORDER BY dataHorario DESC 
    ;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT dadoCaptado
        FROM registros
        WHERE fkServidorReg = ${servidorSelecionado}
        ORDER BY dataHorario DESC 
        LIMIT 1;`
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}






function obterDadosGraficoThreads(servidorSelecionado) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 8 round(avg(porcentagem), 2) as media, numeroThreads as numeroThreads from monitoramentoThreads where fkNucleosThreds = ${servidorSelecionado} group by numeroThreads order by numeroThreads;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select round(avg(porcentagem), 2) as media, numeroThreads from monitoramentoThreads where fkNucleosThreds = ${servidorSelecionado} group by numeroThreads limit 8;`;
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizarGraficoThreads(servidorSelecionado) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 8 round(avg(porcentagem), 2) as media, numeroThreads from monitoramentoThreads where fkNucleosThreds =${servidorSelecionado} group by numeroThreads;`;


    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select round(avg(porcentagem), 2) as media, numeroThreads from monitoramentoThreads where fkNucleosThreds = ${servidorSelecionado} group by numeroThreads limit 8;`;

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
    buscarUltimasMedidasSituSelected,
    buscarUltimasUltAlertasSelected,
    buscarUltimasUsbConectadas,
    buscarUltimasUltAlertasSelected2,
    buscarUltimasMedidasBola,
    buscarUltimasMedidasSelectContaPerfil,
    componenteMetricaCPU,
    componenteMetricaRAM,
    componenteMetricaDISCO,
    estadoFrequenteCPU,
    estadoFrequenteDISCO,
    estadoFrequenteRAM,
    totalAlertas,
    totalAlertasCPU,
    totalAlertasRAM,
    totalAlertasDISCO,
    totalAlertasAtencao,
    totalAlertasAtencaoCPU,
    totalAlertasAtencaoRAM,
    totalAlertasAtencaoDISCO,
    totalAlertasEmergencia,
    totalAlertasEmergenciaCPU,
    totalAlertasEmergenciaRAM,
    totalAlertasEmergenciaDISCO,
    totalAlertasUrgencia,
    totalAlertasUrgenciaCPU,
    totalAlertasUrgenciaRAM,
    totalAlertasUrgenciaDISCO,
    buscarUltimasMedidasAlertasConsumo1,
    buscarMedidasEmTempoRealAlertasConsumo1,
    buscarUltimasMedidasAlertasConsumo2,
    buscarMedidasEmTempoRealAlertasConsumo2,    
    buscarUltimasMedidasAlertasConsumoCPU,
    buscarMedidasEmTempoRealAlertasConsumoCPU,
    buscarUltimasMedidasAlertasConsumoRAM,
    buscarMedidasEmTempoRealAlertasConsumoRAM,
    buscarUltimasMedidasAlertasConsumoDISCO,
    buscarMedidasEmTempoRealAlertasConsumoDISCO,
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
    buscarUltimasUltAlertasRede,
    buscarUltimasMedidasTemperatura,
    buscarMedidasEmTempoRealTemperatura,
    buscarUltimasMedidasCPU2,
    buscarMedidasEmTempoRealCPU2,
    kpiIndividual,
    PorcentagemTotalProcessador,
    obterDadosGraficoThreads,
    atualizarGraficoThreads,
    buscarUltimasMedidasPRT,
    buscarUltimasMedidasTOT
}
