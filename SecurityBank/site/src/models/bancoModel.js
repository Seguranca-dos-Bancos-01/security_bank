var database = require("../database/config");

function buscarAquariosPorEmpresa(empresaId) {

  instrucaoSql = `
  SELECT idServidor, 
       apelido, 
       sistemaOperacional, 
       responsavelLegal, 
       enderecoIP, 
       DATE_FORMAT(dataCompraLocacao, '%d/%m/%Y') as dataCompraLocacao,
       DATE_FORMAT(dateValidade, '%d/%m/%Y') as dateValidade,
       fkBanco,
       fkStatus,
       fkLocalizacaoMatriz,
       fkPlano
FROM servidor
WHERE fkBanco = 1;

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
