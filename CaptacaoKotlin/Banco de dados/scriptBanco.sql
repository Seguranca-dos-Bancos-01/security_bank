CREATE database SecurityBank;
USE SecurityBank;

CREATE TABLE planoContratado(
idPlano int primary key auto_increment,
tipo int
);

CREATE TABLE statusMaquina(
idStatus int primary key auto_increment,
nome varchar (45)
) auto_increment = 100 ;

CREATE TABLE localizacaoMatriz(
idLocalização int primary key auto_increment,
empresa varchar (45),
país varchar (45)
) auto_increment = 200 ;

CREATE TABLE especificacoes(
idEspecificacoes int primary key auto_increment,
potenciaMaxCPU double,
potenciaMaxRAM double,
potenciaMaxDisco double,
dataCompra date,
dataValidade date
) auto_increment = 300 ;

CREATE TABLE banco(
idBanco int primary key auto_increment,
nomeFantasia varchar (45),
cnpj CHAR(14),
razaoSocial varchar (45),
sigla varchar (10),
responsavelLegal varchar(45)
) auto_increment = 400 ;


CREATE TABLE escalonamentoFuncionarios(
idEscalonamento int primary key auto_increment,
cargo varchar (45),
nívelAcesso int
) auto_increment = 500 ;

CREATE TABLE funcionarios(
idFuncionarios int auto_increment,
nome varchar (45),
email varchar (45),
cpf CHAR(11),
telefone varchar (11),
senha varchar (45),
fkBanco int,
fkEscalonamento int,
constraint pkComposta primary key (idFuncionarios, fkBanco , fkEscalonamento),
 foreign key (fkBanco) references banco (idBanco),
 foreign key (fkEscalonamento) references  escalonamentoFuncionarios (idEscalonamento)
) auto_increment = 600 ;


CREATE TABLE servidor(
idServidor int  auto_increment,
apelido varchar (20),
sistemaOperacional varchar (45),
responsavelLegal VARCHAR(45),
enderecoIP varchar (15),
fkBanco int,
fkStatus int,
fkLocalizacaoMatriz int,
fkEspecificacoes int,
fkPlano int,
constraint pkComposta primary key (idServidor,fkBanco, fkEspecificacoes, fkPlano),
 foreign key (fkBanco) references banco (idBanco),
 foreign key (fkStatus) references statusMaquina (idStatus),
 foreign key (fkLocalizacaoMatriz) references LocalizacaoMatriz (idLocalização),
 foreign key (fkEspecificacoes) references especificacoes (idEspecificacoes),
 foreign key (fkPlano) references planoContratado (idPlano)
) auto_increment = 700 ;

CREATE TABLE componentes(
idComponentes int primary key auto_increment,
nome varchar (45),
modelo varchar (45)
) auto_increment = 800 ;

CREATE TABLE registros(
idRegistros int  auto_increment,
dataHorario datetime,
porcentagemConsumo varchar (45),
fkServidor int,
fkBanco int,
fkEspecificacoes int,
fkComponentes int,
constraint pkComposta primary key (idRegistros, fkServidor,fkBanco, fkEspecificacoes, fkComponentes),
 foreign key (fkServidor) references servidor (idServidor),
 foreign key (fkBanco) references banco (idBanco),
 foreign key (fkEspecificacoes) references especificacoes (idEspecificacoes),
 foreign key (fkComponentes) references componentes (idComponentes)
) auto_increment = 900 ;

