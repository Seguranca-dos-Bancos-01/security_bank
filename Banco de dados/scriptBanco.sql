create database SecurityBank;
use SecurityBank;
   drop database SecurityBank;

create table plano_contratado(
idPlano int primary key auto_increment,
tipo int
);

INSERT INTO plano_contratado (tipo) VALUES
(1), -- plano premium
(2); -- plano básico


create table status_maquina(
idStatus int primary key auto_increment,
nome varchar(45) -- status que serão alterados conforme a captação dos servidores
);

INSERT INTO status_maquina (nome) VALUES
('Emergência'),
('Estável'),
('Atenção'),
('Urgência');


create table especificacao( -- disponibilidade máxima de cada componente
idEspecificacoes int primary key auto_increment,
potenciaMaxCPU double,
potenciaMaxRAM double,
potenciaMaxDisco double
);

INSERT INTO especificacao (potenciaMaxCPU, potenciaMaxRAM, potenciaMaxDisco) VALUES
(3.2, 16, 500),
(2.5, 8, 256);



create table metrica (
idMetrica int primary key auto_increment,
estavel double,
atencao double,
emergente double,
urgente double
);

INSERT INTO metrica (estavel, atencao, emergente, urgente) VALUES
(90, 80, 70, 60),
(95, 85, 75, 65);

INSERT INTO metrica (estavel, atencao, emergente, urgente) VALUES
(80, 70, 60, 50);

create table banco(
idBanco int primary key auto_increment,
nomeFantasia varchar(45),
cnpj char(14),
razaoSocial varchar(45),
sigla varchar(10),
cpfResponsavelLegal varchar(14)
);

INSERT INTO banco (nomeFantasia, cnpj, razaoSocial, sigla, cpfResponsavelLegal) VALUES
('Bank c', '12345678901234', 'Bank A Ltd.', 'BKA', '12345678901'),
('Bank B', '98765432109876', 'Bank B Inc.', 'BKB', '09876543210');


create table escalonamento_funcionario( -- permissionamento dos funcionários nas páginas da dashboard
idEscalonamento int primary key auto_increment,
cargo varchar(45),
nivelAcesso int
);

INSERT INTO escalonamento_funcionario (cargo, nivelAcesso) VALUES
('Admin', 1), -- acesso geral
('Operator', 2), -- acesso geral - página de controle de acesso
('Estagiario', 3); --  acesso limitado às páginas de painel geral e servidor individual


CREATE TABLE funcionarios (
idFuncionarios int auto_increment,
nome VARCHAR(45),
email VARCHAR(45),
cpf CHAR(14),
telefone VARCHAR(14),
senha VARCHAR(20),
fkBanco int, 
fkEscalonamento int,
foreign key (fkBanco) references banco(idBanco),
foreign key (fkEscalonamento) references escalonamento_funcionario(idEscalonamento),
constraint pkComposta primary key (idFuncionarios,fkBanco,fkEscalonamento)
);

INSERT INTO funcionarios (nome, email, cpf, telefone, senha, fkBanco, fkEscalonamento) VALUES
('John Doe', 'john@example.com', '12345678901', '123-456-7890', 'password123', 1, 1),
('Jane Smith', 'jane@example.com', '98765432109', '987-654-3210', 'pass456', 2, 2);


CREATE TABLE servidor (
idServidor int auto_increment,
apelido VARCHAR(20),
sistemaOperacional VARCHAR(45),
cpfResponsavelLegal VARCHAR(45),
enderecoIP VARCHAR(15),
fkBanco int,
fkStatus int, 
fkEspecificacoes int,
fkPlano int,
constraint pkComposta primary key (idServidor,fkBanco,fkEspecificacoes,fkPlano),
foreign key (fkBanco) references banco(idBanco),
foreign key (fkStatus) references status_maquina(idStatus),
foreign key (fkEspecificacoes) references especificacao(idEspecificacoes),
foreign key (fkPlano) references plano_contratado(idPlano)
);
INSERT INTO servidor (apelido, sistemaOperacional, cpfResponsavelLegal, enderecoIP, fkBanco, fkStatus,fkEspecificacoes, fkPlano) VALUES
('Server C', 'Linux', '12345678961', '192.168.1.1', 1, 1, 1, 1),
('Server B', 'Windows', '12345678902', '192.168.2.2',1, 1, 1, 1);


create table locacao( -- locacao caso servidor seja da nuvem
idLocacao int auto_increment,
dataCompraLocacao date,
dataValidade date,
servidor_fkLocacao int,
servidor_idServidor int,
servidor_fkBanco int,
servidor_fkEspecificacoes int,
servidor_fkPlano int,
constraint pkComposta primary key (idLocacao,servidor_fkLocacao),
foreign key (servidor_fkLocacao) references locacao (idLocacao),
foreign key (servidor_idServidor) references servidor (idServidor),
foreign key (servidor_fkBanco) references banco (idBanco),
foreign key (servidor_fkEspecificacoes) references especificacao (idEspecificacoes),
foreign key (servidor_fkPlano) references plano_contratado (idPlano)
);

INSERT INTO locacao (dataCompraLocacao, dataValidade,servidor_fkLocacao,servidor_idServidor,servidor_fkBanco,servidor_fkEspecificacoes,servidor_fkPlano) VALUES
('2023-01-01', '2024-01-01',1,1,1,1,1),
('2023-02-15', '2024-02-15',1,1,1,1,1);


CREATE TABLE componentes (
idComponentes int auto_increment,
nome varchar(90),
modelo varchar(45),
fkMetrica int,
servidor_idServidor int,
servidor_fkBanco int,
servidor_fkEspecificacoes int,
servidor_fkLocacao int,
constraint pkComposta primary key (idComponentes, fkMetrica, servidor_idServidor, servidor_fkBanco, servidor_fkEspecificacoes, servidor_fkLocacao),
FOREIGN KEY (fkMetrica) REFERENCES servidor(idServidor),
FOREIGN KEY (servidor_idServidor) REFERENCES banco(idBanco),
FOREIGN KEY (servidor_fkBanco) REFERENCES especificacao(idEspecificacoes),
FOREIGN KEY (servidor_fkEspecificacoes) REFERENCES plano_contratado(idPlano),
FOREIGN KEY (servidor_fkLocacao) references locacao(idLocacao)
);

INSERT INTO componentes (nome, modelo,fkMetrica, servidor_idServidor, servidor_fkBanco, servidor_fkEspecificacoes, servidor_fkLocacao) VALUES
('Component A', 'cpu', 1, 1, 1, 1, 1), -- padronização do campo "modelo" : cpu
('Component B', 'ram', 1, 1, 1, 1, 1), -- padronização do campo "modelo" : ram
('Component C', 'disco', 1, 1, 1, 1, 1); -- padronização do campo "modelo" : disco
-- pode-se adicionar mais componentes, porém é preciso dessa formatação (letra minúscula), só é necessário essa padronização com esses 3 componentes

alter table alerta add column fkRegistro int;
alter table alerta add constraint fkReg foreign key (fkRegistro) references registros (idRegistros);


CREATE TABLE alerta (
idAlertas int primary key auto_increment,
componente VARCHAR(45),
dataAlerta DATE,
horaAlerta time,
situacao VARCHAR(45),
fkServidor int,
fkBanco int,
fkEspecificacoes int,
fkComponente int,
fkMetrica int,
fkPlano int,
fkLocacao int,
fkRegistro int,
foreign key(fkServidor) references servidor(idServidor),
foreign key  (fkBanco) REFERENCES banco (idBanco),
foreign key  (fkEspecificacoes) REFERENCES especificacao (idEspecificacoes),
foreign key  (fkComponente) REFERENCES componentes (idComponentes),
foreign key (fkMetrica) references metrica(idMetrica),
foreign key (fkPlano) REFERENCES plano_contratado(idPlano),
foreign key (fkLocacao) references locacao(idLocacao)
);
select * from funcionarios;
INSERT INTO alerta (dataAlerta, horaAlerta, situacao, fkRegistro, fkServidor, fkBanco, fkEspecificacoes, fkComponente, fkMetrica, fkPlano, fkLocacao) VALUES
('2023-03-01', '12:05:00', 'Urgência', 3, 1, 1, 1, 1, 1,1,1), -- o campo status deve sempre estar com essa formatação, primeira letra maiúscula e com acentuação
('2023-03-02', '15:35:00', 'Emergencia', 3, 2, 2, 2, 2, 2,2,2);

select*from alerta;
   INSERT INTO alerta (dataAlerta, horaAlerta, situacao, fkRegistro, fkComponente, fkMetrica, fkServidor, fkBanco, fkPlano) VALUES (CURDATE(), CURTIME(), "Urgência", 3, 3, 3, 1,1,1);

select*from metrica;




select*from alerta;

CREATE TABLE usb (
idUSB int,
nomeDispositivo varchar(255),
qtddPorta int,
qtddConectada int,
servidor_idServidor int,
servidor_fkBanco int,
servidor_fkEspecificacoes int,
servidor_fkPlano int,
servidor_fkLocacao int,
constraint pkComposta primary key (idUSB, servidor_idServidor, servidor_fkBanco, servidor_fkEspecificacoes, servidor_fkPlano, servidor_fkLocacao),
foreign key (servidor_idServidor) references servidor(idServidor),
foreign key (servidor_fkBanco) references banco(idBanco),
foreign key(servidor_fkEspecificacoes) references especificacao(idEspecificacoes),
foreign key(servidor_fkPlano) references plano_contratado (idPlano),
foreign key(servidor_fkLocacao) references locacao(idLocacao)
);

INSERT INTO usb (idUSB, nomeDispositivo, qtddPorta, qtddConectada, servidor_idServidor, servidor_fkBanco, servidor_fkEspecificacoes, servidor_fkPlano, servidor_fkLocacao) VALUES
(1, 'USB Device A', 4, 2, 1, 1, 1, 1, 1),
(2, 'USB Device B', 8, 6, 2, 2, 2, 2, 2);

CREATE TABLE rede (
idRede int primary key auto_increment,
status int,
ping DOUBLE,
potenciaUpload DOUBLE,
potenciaDownload DOUBLE,
ip varchar(45),
dtHora datetime,
fkServidor int,
fkBanco int,
fkEspecificacoes int,
fkPlano int,
fkLocacao int,
foreign key (fkServidor) references servidor(idServidor),
foreign key (fkBanco) references banco(idBanco),
foreign key(fkEspecificacoes) references especificacao(idEspecificacoes),
foreign key(fkPlano) references plano_contratado (idPlano),
foreign key(fkLocacao) references locacao(idLocacao)
);


INSERT INTO rede (status, PotenciaUpload, PotenciaDownload, fkServidor, fkBanco, fkEspecificacoes, fkPlano, fkLocacao) VALUES
(0, 100, 250, 1, 1, 1, 1, 1);

CREATE TABLE particao (
idParticao int primary key auto_increment,
nomeParticao varchar (99),
pontoMontagem varchar (5), 
fkComponentes int,
fkMetrica int,
fkServidor int,
fkBanco int,
fkEspecificacoes int, 
fkPlano int,
fkLocacao int,
foreign key (fkComponentes) references componente(idComponentes),
foreign key (fkMetrica) references metrica(idMetrica),
foreign key (fkServidor) references servidor(idServidor),
foreign key (fkBanco) references banco(idBanco),
foreign key (fkEspecificacoes) references especificacao(idEspecificacoes),
foreign key (fkPlano) references plano_contratado(idPlano),
foreign key (fkLocacao) references locacao(idLocacao)
);

INSERT INTO particao (nomeParticao,pontoMontagem,fkComponentes,fkMetrica,fkServidor,fkBanco,fkEspecificacoes,fkPlano,fkLocacao) VALUES
('backups','D:/', 1,1,1,1,1,1,1),
('faculdade','E:/', 1,1,1,1,1,1,1);


CREATE TABLE qtdNucleosThreads (
idThreads int primary key auto_increment,
qtdNucleos int,
Threads int,
especificacaoCpu varchar(255),
fkComponentes int,
fkMetrica int,
fkServidor int,
fkBanco int,
fkEspecificacoes int,
fkPlano int,
fkLocacao int,
foreign key (fkComponentes) references componente(idComponentes),
foreign key (fkMetrica) references metrica(idMetrica),
foreign key (fkServidor) references servidor(idServidor),
foreign key (fkBanco) references banco(idBanco),
foreign key (fkEspecificacoes) references especificacao(idEspecificacoes),
foreign key (fkPlano) references plano_contratado(idPlano),
foreign key (fkLocacao) references locacao(idLocacao)
);



CREATE TABLE monitoramentoThreads (
    idcaptacao int primary key auto_increment,
    porcentagem double,
    numeroThreads int,
    qtdNucloesThreads_idThreads int,
    foreign key (qtdNucloesThreads_idThreads) references qtdNucleosThreads(idThreads)
);

CREATE TABLE alertaRede (
    idAlertas int primary key auto_increment,
    componente VARCHAR(45),
    data date,
    hora time,
    status varchar(99),
    rede_idrede int,
    foreign key(rede_idrede) references rede(idRede)
);

alter table registros rename column fkServidor to fkServidorReg;
CREATE TABLE registros (
idRegistros int auto_increment,
dataHorario DATETIME,
dadoCaptados DOUBLE,
fkServidorReg int,
fkBanco int,
fkEspecificacoes int,
fkComponentesReg int,
fkMetrica int,
fkLocacao int,
fkParticao int,
constraint pkComposta primary key (idRegistros,fkServidorReg,fkBanco,fkEspecificacoes,fkComponentesReg,fkMetrica,fkLocacao),
foreign key (fkServidorReg) references servidor(idServidor),
foreign key (fkBanco) references banco(idBanco),
foreign key (fkEspecificacoes) references especificacao(idEspecificacoes),
foreign key (fkComponentesReg) references componentes(idComponentes),
foreign key (fkMetrica) references metrica(idMetrica),
foreign key (fkLocacao) references locacao(idLocacao),
foreign key (fkParticao) references particao(idParticao)
);

select*from alerta;
INSERT INTO registros (dataHorario, dadosCaptados, fkServidorReg, fkBanco, fkEspecificacoes, fkComponentesReg, fkMetrica, fkLocacao, fkParticao) VALUES
('2023-03-01 12:00:00', 150, 1, 1, 1, 1, 2, 1, 1),
('2023-03-02 15:30:00', 200, 2, 2, 2, 2, 2, 2, 2);
select*from registros;

INSERT INTO registro (dataHorario, dadoCaptado, fkServidor, fkBanco, fkEspecificacoes, fkComponentes, fkMetrica, fkLocacao, fkParticao) VALUES
('2023-08-01 14:00:00', 150, 1, 1, 1, 1, 2, 1, 1);

select*from registro;
select nome as statuss, count(fkStatus) as num from Servidor join status_maquina on fkStatus = idStatus where fkBanco = 1 group by fkStatus;

 select servidor.apelido as nomeServidor, componentes.modelo as nomeComponente, DATE_FORMAT(alerta.dataAlerta, '%d/%m/%Y') as dataAlerta, alerta.horaAlerta as horaAlerta, alerta.situacao as situacaoAlerta
from alerta join servidor on fkServidor = idServidor
join componentes on fkComponente = idComponentes where servidor.fkBanco = 1 order by idAlertas desc LIMIT 30;

select*from funcionarios;






