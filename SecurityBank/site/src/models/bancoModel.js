var database = require("../database/config");

function buscarAquariosPorEmpresa(empresaId) {

  instrucaoSql = `SELECT * FROM servidor 
  JOIN banco a 
  ON servidor.fkBanco = a.idBanco 
  WHERE a.idBanco = 1; `;

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
