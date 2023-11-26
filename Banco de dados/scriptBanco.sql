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
select*from locacao;
SELECT idServidor AS fkP
FROM Servidor
WHERE apelido = 'Server C' AND fkbanco = 1;
select*from servidor;
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

SELECT email AS mail, 
        cargo AS Cargo, nivelAcesso as Esca FROM funcionarios join escalonamento_funcionario on fkEscalonamento = idEscalonamento WHERE fkBanco = 1;
create table escalonamento_funcionario( -- permissionamento dos funcionários nas páginas da dashboard
idEscalonamento int primary key auto_increment,
cargo varchar(45),
nivelAcesso int
);

INSERT INTO escalonamento_funcionario (cargo, nivelAcesso) VALUES
('Admin', 1), -- acesso geral
('Operator', 2), -- acesso geral - página de controle de acesso
('Estagiario', 3); --  acesso limitado às páginas de painel geral e servidor individual

select*from servidor;
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
select*From locacao;

SELECT *
FROM monitoramentoThreads AS mt
JOIN (
    SELECT numeroThreads = 1 as um , 
    numeroThreads = 2 as dois ,
    numeroThreads = 3 as tres ,
    numeroThreads = 4 as quatro ,
    numeroThreads = 5 as quinto ,
    MAX(idcaptacao) AS ultimaCaptacao
    FROM monitoramentoThreads
    GROUP BY numeroThreads
) AS ultimos ON mt.idcaptacao = ultimos.ultimaCaptacao;




select*from locacao;
select*from servidor;

create table locacao( -- locacao caso servidor seja da nuvem
idLocacao int auto_increment,
dataCompraLocacao date,
dataValidade date,
fkServidor int,
fkBanco int,
fkEspecificacoes int,
fkPlano int,
constraint pkComposta primary key (idLocacao,fkServidor),
foreign key (fkServidor) references servidor (idServidor),
foreign key (fkBanco) references banco (idBanco),
foreign key (fkEspecificacoes) references especificacao (idEspecificacoes),
foreign key (fkPlano) references plano_contratado (idPlano)
);

INSERT INTO locacao (dataCompraLocacao, dataValidade, fkServidor, fkBanco, fkEspecificacoes, fkPlano) VALUES
('2023-01-01', '2024-01-01',1,1,1,1),
('2023-02-15', '2024-02-15',1,1,1,1);


CREATE TABLE componentes (
idComponentes int auto_increment,
nome varchar(90),
modelo varchar(45),
fkMetrica int,
fkServidor int,
fkBanco int,
fkEspecificacoes int,
fkPlano int,
constraint pkComposta primary key (idComponentes, fkMetrica, fkServidor, fkBanco, fkEspecificacoes, fkPlano),
FOREIGN KEY (fkServidor) REFERENCES servidor(idServidor),
FOREIGN KEY (fkBanco) REFERENCES banco(idBanco),
FOREIGN KEY (fkEspecificacoes) REFERENCES especificacao(idEspecificacoes),
FOREIGN KEY (fkPlano) REFERENCES plano_contratado(idPlano),
FOREIGN KEY (fkMetrica) REFERENCES metrica(idMetrica)
);

INSERT INTO componentes (nome, modelo, fkMetrica, fkServidor, fkBanco, fkEspecificacoes, fkPlano) VALUES
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
fkRegistro int,
foreign key(fkServidor) references servidor(idServidor),
foreign key  (fkBanco) REFERENCES banco (idBanco),
foreign key  (fkEspecificacoes) REFERENCES especificacao (idEspecificacoes),
foreign key  (fkComponente) REFERENCES componentes (idComponentes),
foreign key (fkMetrica) references metrica(idMetrica),
foreign key (fkPlano) REFERENCES plano_contratado(idPlano),
foreign key (fkRegistro) REFERENCES registro(idRegistros)
);
select * from funcionarios;
INSERT INTO alerta (dataAlerta, horaAlerta, situacao, fkRegistro, fkServidor, fkBanco, fkEspecificacoes, fkComponente, fkMetrica, fkPlano) VALUES
('2023-03-01', '12:05:00', 'Urgência', 3, 1, 1, 1, 1, 1, 1), -- o campo status deve sempre estar com essa formatação, primeira letra maiúscula e com acentuação
('2023-03-02', '15:35:00', 'Emergencia', 3, 2, 2, 2, 2, 2, 2);

select*from alerta;
   INSERT INTO alerta (dataAlerta, horaAlerta, situacao, fkRegistro, fkComponente, fkMetrica, fkServidor, fkBanco, fkPlano) VALUES (CURDATE(), CURTIME(), "Urgência", 3, 3, 3, 1,1,1);

select*from metrica;




select*from alerta;

CREATE TABLE usb (
idUSB int,
nomeDispositivo varchar(255),
qtddPorta int,
qtddConectada int,
fkServidor int,
fkBanco int,
fkEspecificacoes int,
fkPlano int,
constraint pkComposta primary key (idUSB, fkServidor, fkBanco, fkEspecificacoes, fkPlano),
foreign key (fkServidor) references servidor(idServidor),
foreign key (fkBanco) references banco(idBanco),
foreign key(fkEspecificacoes) references especificacao(idEspecificacoes),
foreign key(fkPlano) references plano_contratado (idPlano)
);

INSERT INTO usb (idUSB, nomeDispositivo, qtddPorta, qtddConectada, fkServidor, fkBanco, fkEspecificacoes, fkPlano) VALUES
(1, 'USB Device A', 4, 2, 1, 1, 1, 1),
(2, 'USB Device B', 8, 6, 2, 2, 2, 2);

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
foreign key (fkServidor) references servidor(idServidor),
foreign key (fkBanco) references banco(idBanco),
foreign key(fkEspecificacoes) references especificacao(idEspecificacoes),
foreign key(fkPlano) references plano_contratado (idPlano)
);


INSERT INTO rede (status, PotenciaUpload, PotenciaDownload, fkServidor, fkBanco, fkEspecificacoes, fkPlano) VALUES
(0, 100, 250, 1, 1, 1, 1);

CREATE TABLE particao (
idParticao int primary key auto_increment,
nomeParticao varchar (99),
qtdParticoes int, 
fkComponentes int,
fkMetrica int,
fkServidor int,
fkBanco int,
fkEspecificacoes int, 
fkPlano int,
foreign key (fkComponentes) references componentes(idComponentes),
foreign key (fkMetrica) references metrica(idMetrica),
foreign key (fkServidor) references servidor(idServidor),
foreign key (fkBanco) references banco(idBanco),
foreign key (fkEspecificacoes) references especificacao(idEspecificacoes),
foreign key (fkPlano) references plano_contratado(idPlano)
);

INSERT INTO particao (nomeParticao, qtdParticoes,fkComponentes,fkMetrica,fkServidor,fkBanco,fkEspecificacoes,fkPlano) VALUES
('backups',1, 1,1,1,1,1,1),
('faculdade',1, 1,1,1,1,1,1);
INSERT INTO particao (nomeParticao,qtdParticoes,fkComponentes,fkMetrica,fkServidor,fkBanco,fkEspecificacoes,fkPlano) VALUES
('backups','3', 1,1,1,1,1,1),
('faculdade','2', 1,1,1,1,1,1);

CREATE TABLE qtdNucleosThreads (
idThreads int primary key auto_increment,
qtdNucleos int,
qtdThreads int,
especificacaoCpu varchar(255),
fkComponentes int,
fkMetrica int,
fkServidor int,
fkBanco int,
fkEspecificacoes int,
fkPlano int,
foreign key (fkComponentes) references componentes(idComponentes),
foreign key (fkMetrica) references metrica(idMetrica),
foreign key (fkServidor) references servidor(idServidor),
foreign key (fkBanco) references banco(idBanco),
foreign key (fkEspecificacoes) references especificacao(idEspecificacoes),
foreign key (fkPlano) references plano_contratado(idPlano)
);

Insert into qtdNucleosThreads (qtdNucleos , qtdThreads , especificacaoCpu , fkComponentes ,  fkMetrica , fkServidor , fkBanco , fkEspecificacoes , fkPlano  ) VALUES
(4, 8, 'Intel core I5', 1, 1, 1, 1, 1, 1),
(2, 4, 'Intel Core I3', 1, 1, 1, 1, 1, 1);



CREATE TABLE monitoramentoThreads (
    idcaptacao int primary key auto_increment,
    porcentagem double,
    numeroThreads int,
    fkNucleosThreds int,
    foreign key (fkNucleosThreds) references qtdNucleosThreads(idThreads)
);

INSERT INTO monitoramentoThreads (porcentagem ,  numeroThreads, fkNucleosThreds ) VALUES
(2.5, 1, 1),
(7.3, 2, 1);

CREATE TABLE alertaRede (
    idAlertas int primary key auto_increment,
    componente VARCHAR(45),
    data date,
    hora time,
    status varchar(99),
    fkRede int,
    foreign key(fkRede) references rede(idRede)
);

alter table registros rename column fkServidor to fkServidorReg;
CREATE TABLE registros (
idRegistros int auto_increment,
dataHorario DATETIME,
dadoCaptado DOUBLE,
fkServidorReg int,
fkBanco int,
fkEspecificacoes int,
fkComponentesReg int,
fkMetrica int,
fkPlano int,
fkParticao int,
constraint pkComposta primary key (idRegistros, fkServidorReg,fkBanco, fkEspecificacoes, fkComponentesReg, fkMetrica, fkPlano),
foreign key (fkServidorReg) references servidor(idServidor),
foreign key (fkBanco) references banco(idBanco),
foreign key (fkEspecificacoes) references especificacao(idEspecificacoes),
foreign key (fkComponentesReg) references componentes(idComponentes),
foreign key (fkMetrica) references metrica(idMetrica),
foreign key (fkPlano) references plano_contratado(idPlano),
foreign key (fkParticao) references particao(idParticao)
);
drop table registros;
select*from alerta;
INSERT INTO registros (dataHorario, dadoCaptado, fkServidorReg, fkBanco, fkEspecificacoes, fkComponentesReg, fkMetrica, fkPlano, fkParticao) VALUES
('2023-03-01 12:00:00', 15, 1, 1, 1, 1, 2, 1, 1),
('2023-03-02 15:30:00', 20, 2, 2, 2, 2, 2, 2, 2);
select*from registros;

INSERT INTO registros (dataHorario, dadoCaptados, fkServidorReg, fkBanco, fkEspecificacoes, fkComponentesReg, fkMetrica, fkLocacao, fkParticao) VALUES
('2023-08-01 14:00:00', 150, 1, 1, 1, 1, 2, 1, 1);

select*from registro;
select nome as statuss, count(fkStatus) as num from Servidor join status_maquina on fkStatus = idStatus where fkBanco = 1 group by fkStatus;

 select servidor.apelido as nomeServidor, componentes.modelo as nomeComponente, DATE_FORMAT(alerta.dataAlerta, '%d/%m/%Y') as dataAlerta, alerta.horaAlerta as horaAlerta, alerta.situacao as situacaoAlerta
from alerta join servidor on fkServidor = idServidor
join componentes on fkComponente = idComponentes where servidor.fkBanco = 1 order by idAlertas desc LIMIT 30;

select*from funcionarios;
select * from servidor;
select * from locacao;







