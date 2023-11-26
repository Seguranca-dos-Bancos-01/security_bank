var database = require("../database/config");

function buscarAquariosPorEmpresa(email, senha) {

  instrucaoSql = `
  SELECT idServidor, 
       apelido, 
       sistemaOperacional, 
       cpfResponsavelLegal, 
       enderecoIP, 
       fkBanco,
       fkStatus,
       fkPlano
FROM servidor
WHERE fkBanco = (select fkBanco from funcionarios where email = '${email}' and senha = '${senha}');

`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(empresaId, descricao) {
  
  instrucaoSql = `insert into (descricao, fk_empresa) aquario values (${descricao}, ${empresaId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar
}
