CREATE database SecurityBank;
USE SecurityBank;
drop database SecurityBank;



CREATE TABLE planoContratado(
idPlano int primary key auto_increment,
tipo int
);

CREATE TABLE statusMaquina(
idStatus int primary key auto_increment,
nome varchar (45)
);
select*from statusmaquina;


CREATE TABLE localizacaoMatriz(
idLocalização int primary key auto_increment,
empresa varchar (45),
país varchar (45)
) ;

CREATE TABLE especificacoes(
idEspecificacoes int primary key auto_increment,
potenciaMaxCPU double,
potenciaMaxRAM double,
potenciaMaxDisco double
) ;
CREATE TABLE locacao(
idLocacao int primary key auto_increment,
dataCompraLocacao DATE,
dateValidade DATE
);

CREATE TABLE banco(
idBanco int primary key auto_increment,
nomeFantasia varchar (45),
cnpj CHAR(14),
razaoSocial varchar (45),
sigla varchar (10),
responsavelLegal varchar(45)
) ;


CREATE TABLE escalonamentoFuncionarios(
idEscalonamento int primary key auto_increment,
cargo varchar (45),
nivelAcesso int
) ;

CREATE TABLE funcionarios(
idFuncionarios int auto_increment,
nome varchar (45),
email varchar (45),
cpf CHAR(14),
telefone varchar (16),
senha varchar (45),
fkBanco int,
fkEscalonamento int,
constraint pkComposta primary key (idFuncionarios, fkBanco , fkEscalonamento),
 foreign key (fkBanco) references banco (idBanco),
 foreign key (fkEscalonamento) references  escalonamentoFuncionarios (idEscalonamento)
);


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
fkLocacao int, 
constraint pkComposta primary key (idServidor,fkBanco, fkEspecificacoes, fkPlano, fkLocacao),
 foreign key (fkBanco) references banco (idBanco),
 foreign key (fkStatus) references statusMaquina (idStatus),
 foreign key (fkLocalizacaoMatriz) references LocalizacaoMatriz (idLocalização),
 foreign key (fkEspecificacoes) references especificacoes (idEspecificacoes),
 foreign key (fkPlano) references planoContratado (idPlano),
 foreign key (fkLocacao) references locacao(idLocacao)
) ;
SELECT  COUNT(*) AS NumeroDeServidores
FROM servidor
WHERE fkBanco = 1
GROUP BY fkBanco;

SELECT IFNULL((SELECT idAlertas 
               FROM alerta 
               WHERE dataAlerta >= CURDATE() - INTERVAL 1 DAY
                 AND fkBanco = 1 
               ORDER BY idAlertas DESC 
               LIMIT 1), 0) AS Al;



select*from alerta;
CREATE TABLE usb (
idUSB int,
nomeDispositivo varchar(255),
qtdPorta int,
qtdConectada int,
fkServidorUSB int,
fkBancoUSB int,
fkEpescUBS int,
fkPlanoUBS int,
fkLocacaoUBS int,
constraint pkComposta primary key (idUSB, fkServidorUSB, fkBancoUSB, fkEpescUBS, fkPlanoUBS, fkLocacaoUBS ),
foreign key (fkServidorUSB) references Servidor(idServidor),
foreign key (fkBancoUSB) references banco(idBanco),
foreign key(fkEpescUBS) references especificacoes(idEspecificacoes),
foreign key(fkPlanoUBS) references planoContratado (idPlano),
foreign key(fkLocacaoUBS) references locacao(idLocacao)
);
ALTER TABLE Rede
ADD COLUMN EnderecoIP VARCHAR(39);
DESC REDE;


create table Rede(
idRede int auto_increment,
StatusRede int,
PotenciaUpload Double,
PotenciaDownload Double,
EnderecoIP varchar(39),
fkServidorRede int,
fkBancoRede int,
fkEspecificacoesRede int,
fkPlanoRede int,
fkLocacaoRede int,
constraint pkComposta primary key (idRede, fkServidorRede, fkBancoRede, fkEspecificacoesRede, fkPlanoRede, fkLocacaoRede ),
foreign key (fkServidorRede) references Servidor(idServidor),
foreign key (fkBancoRede) references banco(idBanco),
foreign key(fkEspecificacoesRede) references especificacoes(idEspecificacoes),
foreign key(fkPlanoRede) references planoContratado (idPlano),
foreign key(fkLocacaoRede) references locacao(idLocacao)
);

select EnderecoIP as redeIP from Rede where fkServidorRede =1 order by idRede desc limit 1;
select StatusRede as connectOrN from rede where fkServidorRede = 1 order by idRede desc limit 1;

CREATE TABLE metrica(
idMetrica int primary key auto_increment,
estavel DOUBLE,
atencao DOUBLE,
emergencia DOUBLE,
urgencia DOUBLE
);

select*from metrica;
CREATE TABLE componentes (
    idComponentes INT AUTO_INCREMENT,
    nome VARCHAR(90),
    modelo VARCHAR(45),
    fkServidorComp INT,
    fkBancoComp INT,
    fkEspecificacoesComp INT,
    fkPlanoComp INT,
    fkMetrica int,
    fkLocacao int,
    PRIMARY KEY (idComponentes, fkServidorComp, fkBancoComp, fkEspecificacoesComp, fkPlanoComp, fkMetrica ),
    CONSTRAINT fk_servidor_comp FOREIGN KEY (fkServidorComp) REFERENCES servidor(idServidor),
    CONSTRAINT fk_banco_comp FOREIGN KEY (fkBancoComp) REFERENCES banco(idBanco),
    CONSTRAINT fk_especificacoes_comp FOREIGN KEY (fkEspecificacoesComp) REFERENCES especificacoes(idEspecificacoes),
    CONSTRAINT fk_plano_comp FOREIGN KEY (fkPlanoComp) REFERENCES planoContratado(idPlano),
    constraint fk_locacao_comp FOREIGN KEY (fkLocacao) references locacao(idLocacao),
    CONSTRAINT fk_metricas_comp FOREIGN KEY(fkMetrica) REFERENCES metrica(idMetrica)
);

CREATE TABLE registros (
    idRegistros INT AUTO_INCREMENT,
    dataHorario DATETIME,
    dadosCaptados DOUBLE,
    fkServidorReg INT,
    fkBancoReg INT,
    fkEspeciReg INT,
    fkPlanoReg INT,
    fkComponentesReg INT,
    fkLocacaoReg int,
    fkMetricaReg int,
    PRIMARY KEY (idRegistros, fkServidorReg, fkBancoReg, fkEspeciReg, fkPlanoReg, fkComponentesReg),
    FOREIGN KEY (fkServidorReg) REFERENCES servidor (idServidor),
    FOREIGN KEY (fkBancoReg) REFERENCES banco (idBanco),
    FOREIGN KEY (fkEspeciReg) REFERENCES especificacoes (idEspecificacoes),
    FOREIGN KEY (fkPlanoReg) REFERENCES planoContratado(idPlano),
    FOREIGN KEY (fkLocacaoReg) references locacao(idLocacao),
    FOREIGN KEY (fkComponentesReg) REFERENCES componentes (idComponentes),
    foreign key (fkMetricaReg) references metrica(idMetrica)
    
);

create table alerta(
idAlertas int primary key auto_increment,
dataAlerta date,
horaAlerta time,
situacao varchar(99),
fkRegistro int,
fkComponente int,
fkMetrica int,
fkServidor int,
fkBanco int,
fkEsoecificacao int,
fkPlano int,
fkLocacao int,
	foreign key(fkRegistro) references registros(idRegistros),
	FOREIGN KEY (fkServidor) REFERENCES servidor (idServidor),
    FOREIGN KEY (fkBanco) REFERENCES banco (idBanco),
    FOREIGN KEY (fkEsoecificacao) REFERENCES especificacoes (idEspecificacoes),
    FOREIGN KEY (fkPlano) REFERENCES planoContratado(idPlano),
    FOREIGN KEY (fkLocacao) references locacao(idLocacao),
    FOREIGN KEY (fkComponente) REFERENCES componentes (idComponentes),
	foreign key (fkMetrica) references metrica(idMetrica)
);





-- Inserting data into planoContratado
INSERT INTO planoContratado (tipo) VALUES
(1),
(2);

-- Inserting data into statusMaquina
INSERT INTO statusMaquina (nome) VALUES
('Emergencia');

-- Inserting data into localizacaoMatriz
INSERT INTO localizacaoMatriz (empresa, país) VALUES
('Company A', 'Brazil'),
('Company B', 'USA');

-- Inserting data into especificacoes
INSERT INTO especificacoes (potenciaMaxCPU, potenciaMaxRAM, potenciaMaxDisco) VALUES
(3.2, 16, 500),
(2.5, 8, 256);

-- Inserting data into locacao
INSERT INTO locacao (dataCompraLocacao, dateValidade) VALUES
('2023-01-01', '2024-01-01'),
('2023-02-15', '2024-02-15');

-- Inserting data into banco
INSERT INTO banco (nomeFantasia, cnpj, razaoSocial, sigla, responsavelLegal) VALUES
('Bank c', '12345678901234', 'Bank A Ltd.', 'BKA', 'John Doe'),
('Bank B', '98765432109876', 'Bank B Inc.', 'BKB', 'Jane Smith');

-- Inserting data into escalonamentoFuncionarios
INSERT INTO escalonamentoFuncionarios (cargo, nivelAcesso) VALUES
('Admin', 1),
('Operator', 2),
('Estagiario', 3);


SELECT email AS mail, 
cargo AS Cargo, nivelAcesso as Esca FROM funcionarios join escalonamentoFuncionarios on fkEscalonamento = idEscalonamento WHERE fkBanco = 1;


-- Inserting data into funcionarios
INSERT INTO funcionarios (nome, email, cpf, telefone, senha, fkBanco, fkEscalonamento) VALUES
('John Doe', 'john@example.com', '12345678901', '123-456-7890', 'password123', 1, 1),
('Jane Smith', 'jane@example.com', '98765432109', '987-654-3210', 'pass456', 2, 2);

-- Inserting data into servidor
INSERT INTO servidor (apelido, sistemaOperacional, responsavelLegal, enderecoIP, fkBanco, fkStatus, fkLocalizacaoMatriz, fkEspecificacoes, fkPlano, fkLocacao) VALUES
('Server C', 'Linux', 'John Doe', '192.168.1.1', 1, 1, 1, 1, 1, 1),
('Server B', 'Windows', 'Jane Smith', '192.168.2.2', 2, 1, 2, 2, 2, 2);

-- Inserting data into usb
INSERT INTO usb (idUSB, nomeDispositivo, qtdPorta, qtdConectada, fkServidorUSB, fkBancoUSB, fkEpescUBS, fkPlanoUBS, fkLocacaoUBS) VALUES
(1, 'USB Device A', 4, 2, 1, 1, 1, 1, 1),
(2, 'USB Device B', 8, 6, 2, 2, 2, 2, 2);

-- Inserting data into Rede
INSERT INTO Rede (StatusRede, PotenciaUpload, PotenciaDownload, fkServidorRede, fkBancoRede, fkEspecificacoesRede, fkPlanoRede, fkLocacaoRede) VALUES
(0, 100, 250, 1, 1, 1, 1, 1);


-- Inserting data into metrica
INSERT INTO metrica (estavel, atencao, emergencia, urgencia) VALUES
(90, 80, 70, 60),
(95, 85, 75, 65);

-- Inserting data into componentes
INSERT INTO componentes (nome, modelo, fkServidorComp, fkBancoComp, fkEspecificacoesComp, fkPlanoComp, fkMetrica, fkLocacao) VALUES
('Component A', 'Model X', 1, 1, 1, 1, 1, 1),
('Component B', 'Model Y', 1, 1, 1, 1, 1, 1),
('Component C', 'Model Z', 1, 1, 1, 1, 1, 1);

-- Inserting data into registros
INSERT INTO registros (dataHorario, dadosCaptados, fkServidorReg, fkBancoReg, fkEspeciReg, fkPlanoReg, fkComponentesReg, fkLocacaoReg, fkMetricaReg) VALUES
('2023-03-01 12:00:00', 150, 1, 1, 1, 1, 2, 1, 1),
('2023-03-02 15:30:00', 200, 2, 2, 2, 2, 2, 2, 2);

-- Inserting data into alerta
INSERT INTO alerta (dataAlerta, horaAlerta, situacao, fkRegistro, fkComponente, fkMetrica, fkServidor, fkBanco, fkEsoecificacao, fkPlano, fkLocacao) VALUES
('2023-03-01', '12:05:00', 'Urgência', 1, 1, 1, 1, 1, 1, 1, 1),
('2023-03-02', '15:35:00', 'Emergência', 2, 2, 2, 2, 2, 2, 2, 2);
truncate table alerta;


INSERT INTO servidor (apelido, sistemaOperacional, responsavelLegal, enderecoIP, fkBanco, fkStatus, fkLocalizacaoMatriz, fkEspecificacoes, fkPlano, fkLocacao) VALUES
('Server Plim Plim', 'Linux', 'John Doe', '192.168.1.1', 1, 3, 1, 1, 1, 1);



select*from locacao;
select*from alerta;


SELECT
situacao as situ,
  componentes.modelo AS nomeComponente,
  DATE_FORMAT(alerta.dataAlerta, '%d/%m/%Y') AS dataAlerta,
  alerta.horaAlerta AS horaAlerta
FROM
  alerta
JOIN
  servidor ON alerta.fkServidor = servidor.idServidor
JOIN
  componentes ON alerta.fkComponente = componentes.idComponentes
WHERE
  alerta.fkServidor = 1
ORDER BY
  alerta.idAlertas DESC
LIMIT 7;

select*From usb;

INSERT INTO registros (dataHorario, dadosCaptados, fkServidorReg, fkBancoReg, fkEspeciReg, fkPlanoReg, fkComponentesReg, fkLocacaoReg, fkMetricaReg) VALUES
('2023-03-01 12:00:00', 15, 1, 1, 1, 1, 2, 1, 1),
('2023-03-01 12:00:00', 15, 1, 1, 1, 1, 1, 1, 1),
('2023-03-01 12:00:00', 15, 1, 1, 1, 1, 3, 1, 1);




select nomeDispositivo as nome,
qtdPorta as qtdPortasTotal,
qtdConectada as qtdConnect from usb where fkServidorUSB = 1;

select situacao from alerta where fkServidor = 1 order by  idAlertas desc limit 1;
select*from servidor;

select situacao as UltimasSituSelected from alerta where fkServidor =5 order by  idAlertas desc limit 1;
select*from rede;

SELECT PotenciaDownload AS Down  FROM rede  WHERE fkServidorRede = 1  ORDER BY idRede DESC LIMIT 1;

select*from servidor;
select*from funcionarios;
select*from registros;
select*From componentes;
SELECT
        situacao as situ,
        componentes.modelo AS nomeComponente,
        DATE_FORMAT(alerta.dataAlerta, '%d/%m/%Y') AS dataAlerta,
        alerta.horaAlerta AS horaAlerta
        
      FROM
        alerta
      JOIN
        servidor ON alerta.fkServidor = servidor.idServidor
      JOIN
        componentes ON alerta.fkComponente = componentes.idComponentes
      WHERE
        alerta.fkServidor = ${idUsuario}
      ORDER BY
        alerta.idAlertas DESC
      LIMIT 3;

select nome as UltimasSituSelected from servidor join statusMaquina on fkStatus = idStatus where idServidor = 1;



INSERT INTO funcionarios (nome, email, cpf, telefone, senha, fkBanco, fkEscalonamento) VALUES
('Pedrao', 'PedraoChefe@example.com', '12345678901', '123-456-7890', 'password123', 1, 1);
INSERT INTO funcionarios (nome, email, cpf, telefone, senha, fkBanco, fkEscalonamento) VALUES
('tutu', 'tutue@example.com', '12345678901', '123-456-7890', 'password123', 1, 2);
INSERT INTO funcionarios (nome, email, cpf, telefone, senha, fkBanco, fkEscalonamento) VALUES
('cleide', 'cleide@example.com', '12345678901', '123-456-7890', 'password123', 1, 3);

select idServidor AS qtd from servidor where fkBanco = 1 order by idServidor desc  limit 1;