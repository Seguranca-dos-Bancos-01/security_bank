 database = require("../database/config")

function autenticar(email, senha) {
    instrucaoSql = ``
    if(process.env.AMBIENTE_PROCESSO == "producao"){
        instrucaoSql = `select* from funcionarios WHERE 
        email = '${email}' AND 
        senha = '${senha}';`
    }else if(process.env.AMBIENTE_PROCESSO == "desenvolvimento"){
        instrucaoSql = `select* from funcionarios WHERE 
        email = '${email}' AND 
        senha = '${senha}';`
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
}





function AtualizarSessionUsuario(id) {
    instrucaoSql = ``

    if(process.env.AMBIENTE_PROCESSO == "producao"){
        instrucaoSql ` select* from funcionarios WHERE 
        idFuncionarios = ${id};`
    }else if(process.env.AMBIENTE_PROCESSO == "desenvolvimento"){
        instrucaoSql ` select* from funcionarios WHERE 
        idFuncionarios = ${id};`
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
}


function AtualizarSessionBanco(id) {
    instrucaoSql = ``

    if(process.env.AMBIENTE_PROCESSO == "producao"){
        instrucaoSql `select* from banco WHERE 
        idBanco = ${id};`
    }else if(process.env.AMBIENTE_PROCESSO == "desenvolvimento"){
        instrucaoSql `select* from banco WHERE 
        idBanco = ${id};`
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
}

function cadastrar(nome, email, cpf, telefone, senha, empresaId,) {
    instrucaoSql = ``

    if(process.env.AMBIENTE_PROCESSO == "producao"){
        instrucaoSql `INSERT INTO funcionarios (nome, email, cpf, telefone, senha, fkBanco, fkEscalonamento) VALUES ('${nome}', '${email}', '${cpf}', '${telefone}', '${senha}', ${empresaId}, 3);`
    }else if(process.env.AMBIENTE_PROCESSO == "desenvolvimento"){
        instrucaoSql `INSERT INTO funcionarios (nome, email, cpf, telefone, senha, fkBanco, fkEscalonamento) VALUES ('${nome}', '${email}', '${cpf}', '${telefone}', '${senha}', ${empresaId}, 3);`
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
}

function cadastrarServidor(apelidoServidor, soServidor, cpfRespServidor, ipServidor, fkBanco, fkPlano) {
    instrucaoSql = ``

    if(process.env.AMBIENTE_PROCESSO == "producao"){
        instrucaoSql `INSERT INTO servidor (apelido, sistemaOperacional, cpfResponsavelLegal, enderecoIP, fkbanco, fkstatus, fkEspecificacoes, fkPlano) VALUES 
        ('${apelidoServidor}','${soServidor}','${cpfRespServidor}','${ipServidor}',${fkBanco},1 ,1 ,${fkPlano})`
    }else if(process.env.AMBIENTE_PROCESSO == "desenvolvimento"){
        instrucaoSql `INSERT INTO servidor (apelido, sistemaOperacional, cpfResponsavelLegal, enderecoIP, fkbanco, fkstatus, fkEspecificacoes, fkPlano) VALUES 
        ('${apelidoServidor}','${soServidor}','${cpfRespServidor}','${ipServidor}',${fkBanco},1 ,1 ,${fkPlano})`
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
}


function PuxarFkServidor(idUsuario, apelido) {

    instrucaoSql = ``

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT idServidor AS fkP,
        apelido as apelido
        FROM Servidor
        WHERE apelido = '${apelido}' AND fkbanco = ${idUsuario};
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
            SELECT idServidor AS fkP,
            apelido as apelido
            FROM Servidor
            WHERE apelido = '${apelido}' AND fkbanco = ${idUsuario};

    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


    function cadastrarServidorNuvem(dtCompra, dtVal, idUsuario) {
        instrucaoSql = ``

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `INSERT INTO locacao (dataCompraLocacao, dataValidade, fkServidor,fkBanco,fkEspecificacoes,fkPlano) 
        VALUES('${dtCompra}','${dtVal}',${idUsuario},1,1,1);
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        INSERT INTO locacao (dataCompraLocacao, dataValidade, fkServidor,fkBanco,fkEspecificacoes,fkPlano) 
        VALUES('${dtCompra}','${dtVal}',${idUsuario},1,1,1);
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

    }

    function atualizarPerfil(nomePerfil, emailPerfil, cpfPerfil, telefonePerfil, senhaPerfil, idPerfil) {
        instrucaoSql = ``

        if (process.env.AMBIENTE_PROCESSO == "producao") {
            instrucaoSql = `
            update funcionarios set nome = '${nomePerfil}', email = '${emailPerfil}', senha = '${senhaPerfil}', telefone = '${telefonePerfil}', cpf = '${cpfPerfil}' where idFuncionarios = ${idPerfil};
        `;
        } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
            instrucaoSql = `
            update funcionarios set nome = '${nomePerfil}', email = '${emailPerfil}', senha = '${senhaPerfil}', telefone = '${telefonePerfil}', cpf = '${cpfPerfil}' where idFuncionarios = ${idPerfil};
        `;
        } else {
            console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
            return
        }
    
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    function UpdateValidadeNova(validadeNova, server) {
        instrucaoSql = ``

        if (process.env.AMBIENTE_PROCESSO == "producao") {
            instrucaoSql = `
            UPDATE locacao
        SET dataValidade = '${validadeNova}'
        WHERE fkServidor = ${server};
        `;
        } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
            instrucaoSql = `
            UPDATE locacao
        SET dataValidade = '${validadeNova}'
        WHERE fkServidor = ${server};
        `;
        } else {
            console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
            return
        }
    
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);

    }




    function atualizarNivelAcesso(NovoNivel, Email) {
        instrucaoSql = ``

        if (process.env.AMBIENTE_PROCESSO == "producao") {
            instrucaoSql = `
            UPDATE funcionarios AS f1
    JOIN (SELECT idFuncionarios FROM funcionarios WHERE email = '${Email}') AS f2
    ON f1.idFuncionarios = f2.idFuncionarios
    SET f1.fkEscalonamento = ${NovoNivel};
        `;
        } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
            instrucaoSql = `
            UPDATE funcionarios AS f1
    JOIN (SELECT idFuncionarios FROM funcionarios WHERE email = '${Email}') AS f2
    ON f1.idFuncionarios = f2.idFuncionarios
    SET f1.fkEscalonamento = ${NovoNivel};
        `;
        } else {
            console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
            return
        }
    
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);

    }


    function excluirConta(NovoNivel, Email) {
        instrucaoSql = ``

        if (process.env.AMBIENTE_PROCESSO == "producao") {
            instrucaoSql = `
            DELETE FROM funcionarios
            WHERE email = '${Email}' AND fkEscalonamento = ${NovoNivel};
        `;
        } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
            instrucaoSql = `
            DELETE FROM funcionarios
            WHERE email = '${Email}' AND fkEscalonamento = ${NovoNivel};
        `;
        } else {
            console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
            return
        }
    
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    module.exports = {
        autenticar,
        cadastrar,
        atualizarPerfil,
        cadastrarServidor,
        atualizarNivelAcesso,
        excluirConta,
        UpdateValidadeNova,
        cadastrarServidorNuvem,
        PuxarFkServidor,
        AtualizarSessionUsuario,
        AtualizarSessionBanco,
    };