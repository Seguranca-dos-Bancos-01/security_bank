var database = require("../database/config")

function autenticar(email, senha) {
    // console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
    SELECT 
    f.idFuncionarios,
    f.nome,
    f.email,
    f.cpf,
    f.telefone,
    f.senha,
    f.fkBanco,
    f.fkEscalonamento,
    GROUP_CONCAT(s.idServidor) AS servidores_ids,
    GROUP_CONCAT(s.apelido) AS servidores_apelidos,
    GROUP_CONCAT(s.sistemaOperacional) AS servidores_sistemas,
    GROUP_CONCAT(s.responsavelLegal) AS servidores_responsaveis,
    GROUP_CONCAT(s.enderecoIP) AS servidores_enderecos,
    GROUP_CONCAT(s.dataCompraLocacao) AS servidores_datasCompra,
    GROUP_CONCAT(s.dateValidade) AS servidores_datasValidade,
    b.idBanco,
    b.nomeFantasia,
    b.cnpj,
    b.razaoSocial,
    b.sigla,
    b.responsavelLegal
FROM 
    funcionarios f
JOIN servidor s ON f.idFuncionarios = s.fkBanco
JOIN banco b ON f.fkBanco = b.idBanco
WHERE 
    f.email = '${email}' AND 
    f.senha = '${senha}'
GROUP BY 
    f.idFuncionarios, f.nome, f.email, f.cpf, f.telefone, f.senha, f.fkBanco, f.fkEscalonamento, b.idBanco, b.nomeFantasia, b.cnpj, b.razaoSocial, b.sigla, b.responsavelLegal;
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
    INSERT INTO funcionarios (nome, email, cpf, telefone, senha, fkBanco, fkEscalonamento) VALUES ('${nome}', '${email}', '${cpf}', '${telefone}', '${senha}', ${empresaId}, 3);
`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarServidor(apelidoServidor, soServidor, cpfRespServidor, ipServidor, fkBanco, fkPlano) {
   // console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.

    //CONVERSAR COM GRUPO ()
    var instrucao = `
    INSERT INTO servidor (apelido, sistemaOperacional, responsavelLegal, enderecoIP,dataCompraLocacao, dateValidade, fkBanco, fkStatus, fkLocalizacaoMatriz, fkPlano) 
    VALUES('${apelidoServidor}', '${soServidor}', '${cpfRespServidor}', '${ipServidor}',NULL,NULL, ${fkBanco}, 1 , null , ${fkPlano});
`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function cadastrarServidorNuvem(apelidoServidor, soServidor, cpfRespServidor, ipServidor, fkBanco, fkPlano,compra, vali) {
    // console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
     
     // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
     //  e na ordem de inserção dos dados.
 
     //CONVERSAR COM GRUPO ()

   //  var instrucao = `
    

    // INSERT INTO locacao(dataCompraLocacao, dateValidade) VALUES('${compra}', '${vali}');
     
    //  `;

   //  var instrucao2 = `

//SET @variavelidLocacao = (
 //   SELECT idLocacao 
 //   FROM locacao 
  //  WHERE dataCompraLocacao = STR_TO_DATE('${compra}', '%Y-%m-%d')
  //  AND dateValidade = STR_TO_DATE('${vali}', '%Y-%m-%d')
  //  LIMIT 1
//);

 //`;

 var instrucao3 = `
 INSERT INTO servidor (apelido, sistemaOperacional, responsavelLegal, enderecoIP,dataCompraLocacao,dateValidade, fkBanco, fkStatus, fkLocalizacaoMatriz, fkPlano) 
 VALUES ('${apelidoServidor}', '${soServidor}', '${cpfRespServidor}', '${ipServidor}', '${compra}','${vali}' ,${fkBanco}, 1, NULL, ${fkPlano});
 
 
  `;
 
     console.log("Executando a instrução SQL: \n" + instrucao3);
     return database.executar(instrucao3);
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

function UpdateValidadeNova(validadeNova,server) {
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
    cadastrarServidorNuvem

};