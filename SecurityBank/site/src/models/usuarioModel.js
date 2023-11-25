 database = require("../database/config")

function autenticar(email, senha) {
    // console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
   
 select* from funcionarios WHERE 
 email = '${email}' AND 
 senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, cpf, telefone, senha, empresaId,) {
    // console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    INSERT INTO funcionarios (nome, email, cpf, telefone, senha, fkBanco, fkEscalonamento) VALUES ('${nome}', '${email}', '${cpf}', '${telefone}', '${senha}', ${empresaId}, 1);
`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarServidor(apelidoServidor, soServidor, cpfRespServidor, ipServidor, fkBanco, fkPlano) {
    // console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.

    //CONVERSAR COM GRUPO ()
    var instrucao = `INSERT INTO servidor (apelido, sistemaOperacional, cpfResponsavelLegal, enderecoIP, fkbAnco, fkstatus, fkEspecificacoes, fkPlano) VALUES 
            ('${apelidoServidor}','${soServidor}','${cpfRespServidor}','${ipServidor}',${fkBanco},1 ,NULL ,${fkPlano})   
`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function PuxarFkServidor(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select idServidor as fkP from Servidor where enderecoIP = '${idUsuario}';
    
    `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select idServidor as fkP from Servidor where enderecoIP = '${idUsuario}';

    
    `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}







        function cadastrarServidorNuvem(dtCompra, dtVal, idUsuario) {


    var instrucao3 = `INSERT INTO locacao (dataCompraLocacao, dateValidade, fkServidor) 
    VALUES('${dtCompra}','${dtVal}',${idUsuario});
      `;

    //     console.log("Executando a instrução SQL: \n" + instrucao3);
    //     return database.executar(instrucao3);
    }

    function atualizarPerfil(nomePerfil, emailPerfil, cpfPerfil, telefonePerfil, senhaPerfil, idPerfil) {
        console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

        // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
        //  e na ordem de inserção dos dados.
        var instrucao = `
    update funcionarios set nome = '${nomePerfil}', email = '${emailPerfil}', senha = '${senhaPerfil}', telefone = '${telefonePerfil}', cpf = '${cpfPerfil}' where idFuncionarios = ${idPerfil};
`;

        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
    }

    function UpdateValidadeNova(validadeNova, server) {
        //console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

        // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
        //  e na ordem de inserção dos dados.
        var instrucao = `


    
    UPDATE servidor
        SET dateValidade = '${validadeNova}'
        WHERE idServidor = ${server};
`;

        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
    }




    function atualizarNivelAcesso(NovoNivel, Email) {
        console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", NovoNivel, Email);

        // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
        //  e na ordem de inserção dos dados.
        var instrucao = `
    UPDATE funcionarios AS f1
    JOIN (SELECT idFuncionarios FROM funcionarios WHERE email = '${Email}') AS f2
    ON f1.idFuncionarios = f2.idFuncionarios
    SET f1.fkEscalonamento = ${NovoNivel};
`;

        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
    }


    function excluirConta(NovoNivel, Email) {
        console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", NovoNivel, Email);

        // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
        //  e na ordem de inserção dos dados.
        var instrucao = `
    DELETE FROM funcionarios
WHERE email = '${Email}' AND fkEscalonamento = ${NovoNivel};
`;

        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
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

    };