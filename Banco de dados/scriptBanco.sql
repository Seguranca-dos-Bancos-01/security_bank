CREATE database SecurityBank;
drop database SecurityBank;
USE SecurityBank;

CREATE TABLE planoContratado(
idPlano int primary key auto_increment,
tipo int
);

insert into planoContratado values
(null, 0),
(null, 1);

select * from planoContratado;

CREATE TABLE statusMaquina(
idStatus int primary key auto_increment,
nome varchar (45)
) auto_increment = 100 ;

insert into statusMaquina values
(null, 'Ativa'),
(null, 'Inativa');

select * from statusMaquina;

CREATE TABLE localizacaoMatriz(
idLocalização int primary key auto_increment,
empresa varchar (45),
país varchar (45)
) auto_increment = 200;

insert into localizacaoMatriz values
(null, 'Banco do Brasil', 'Brasil'),
(null, 'Santander', 'Brasil'),
(null, 'C6 Bank', 'EUA');

select * from localizacaoMatriz;

CREATE TABLE especificacoes(
idEspecificacoes int primary key auto_increment,
potenciaMaxCPU double,
potenciaMaxRAM double,
potenciaMaxDisco double,
dataCompra date,
dataValidade date
) auto_increment = 300 ;

insert into especificacoes values
(null, 110.0,  16.0, 100.0, '2023-09-09',' 2030-10-01'),
(null, 90.0,  32.0, 90.0, '2023-05-10', '2035-12-01'),
(null, 99.0,  64.0, 53.0, '2022-01-11', '2029-11-11');

select * from especificacoes;

CREATE TABLE banco(
idBanco int primary key auto_increment,
nomeFantasia varchar (45),
cnpj CHAR(18),
razaoSocial varchar (45),
sigla varchar (10),
responsavelLegal varchar(45)
) auto_increment = 400 ;

Insert into banco values
(null, 'Banco do Brasil', '00.000.000/0001-91', 'Banco do Brasil S.A.', 'BB', 'Governo do Brasil '),
(null, 'Santander', '90.400.888/0001-12', 'Banco Santander (Brasil) S.A.', 'SANB11', 'Banco Central do Brasil'),
(null, 'C6 Bank', '31.872.495/0001-72', 'Banco C6 S.A', 'C6', 'Banco Central do Brasil');

select * from banco;


CREATE TABLE escalonamentoFuncionarios(
idEscalonamento int primary key auto_increment,
cargo varchar (45),
nívelAcesso int
) auto_increment = 500 ;

insert into escalonamentoFuncionarios values
(null, 'Administrador', 2),
(null, 'funcionario', 1);

select * from escalonamentoFuncionarios;

CREATE TABLE funcionarios(
idFuncionarios int auto_increment,
nome varchar (45),
email varchar (45),
cpf CHAR(14),
telefone varchar (11),
senha varchar (45),
fkBanco int,
fkEscalonamento int,
constraint pkComposta primary key (idFuncionarios, fkBanco , fkEscalonamento),
 foreign key (fkBanco) references banco (idBanco),
 foreign key (fkEscalonamento) references  escalonamentoFuncionarios (idEscalonamento)
) auto_increment = 600;

insert into funcionarios values
(null, 'Geferson', 'gerferson123@hotmail.com', '12356766601', '43789187267', 'Gef123@2', 400, 501),
(null, 'Felipe', 'felipe234@gmail.com', '46791722312', '98715678261', 'Fe7654&', 401, 500),
(null, 'João', 'joao.v@hotmail.com', '15671890971', '94716257890', 'joaosenha12', 402, 501);

select * from funcionarios;


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

insert into servidor values
(null, 'mark1', 'Windows 10', 'Lucas Souza', '123456789986178' , 401, 100, 201, 301, 1),
(null, 'lua', 'Ubuntu',  'Julia Costa' , '123631631234531', 402, 101, 201, 302, 2),
(null, 'iron', 'Windows 7', 'Paulo Sanchez', '785356789256718', 400, 100, 200, 300, 1);

select * from servidor;

CREATE TABLE componentes(
idComponentes int primary key auto_increment,
nome varchar (45),
modelo varchar (45)
) auto_increment = 800 ;

insert into componentes values
(null, 'Disco', 'HD'),
(null, 'RAM', 'Kingstone dd4'),
(null, 'CPU', 'Intel core i7');

select * from componentes;

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

insert into registros values
(null, null, '45%', 700, 401, 301, 800),
(null, null, '75%', 701, 402, 300, 801),
(null, null, '66%', 702, 400, 301, 802);

select * from registros;

