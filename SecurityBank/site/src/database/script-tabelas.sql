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
)  ;

CREATE TABLE localizacaoMatriz(
idLocalização int primary key auto_increment,
empresa varchar (45),
país varchar (45)
) ;


-- CREATE TABLE locacao(
-- idLocacao int primary key auto_increment,
-- dataCompraLocacao DATE,
-- dateValidade DATE
-- );

CREATE TABLE banco(
idBanco int primary key auto_increment,
nomeFantasia varchar (45),
cnpj CHAR(14),
razaoSocial varchar (45),
sigla varchar (10),
responsavelLegal varchar(11)
) ;


CREATE TABLE escalonamentoFuncionarios(
idEscalonamento int primary key auto_increment,
cargo varchar (45),
nívelAcesso int
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
dataCompraLocacao DATE,
dateValidade DATE,
fkBanco int,
fkStatus int,
fkLocalizacaoMatriz int,
fkPlano int, 
constraint pkComposta primary key (idServidor,fkBanco,fkPlano),
 foreign key (fkBanco) references banco (idBanco),
 foreign key (fkStatus) references statusMaquina (idStatus),
 foreign key (fkLocalizacaoMatriz) references LocalizacaoMatriz (idLocalização),
 foreign key (fkPlano) references planoContratado (idPlano)
) ;

SELECT DATEDIFF(dateValidade, CURDATE()) AS dias_restantes
FROM servidor
WHERE dateValidade >= CURDATE();

SELECT 
    DATEDIFF(dateValidade, CURDATE()) AS dias_restantes, 
    DATE_FORMAT(dataCompraLocacao, '%d/%m/%Y') AS DtC,
    DATE_FORMAT(dateValidade, '%d/%m/%Y') AS DtV
FROM 
    servidor
WHERE 
    dateValidade >= CURDATE();



CREATE TABLE usb (
idUSB int auto_increment,
nomeDispositivo varchar(255),
qtdPorta int,
qtdConectada int,
fkServidorUSB int,
fkBancoUSB int,
fkEpescUBS int,
fkPlanoUBS int,
fkLocacaoUBS int,
constraint pkComposta primary key (idUSB, fkServidorUSB, fkBancoUSB, fkEpescUBS, fkPlanoUBS ),
foreign key (fkServidorUSB) references Servidor(idServidor),
foreign key (fkBancoUSB) references banco(idBanco),
foreign key(fkPlanoUBS) references planoContratado (idPlano)
);




CREATE TABLE metrica(
idMetrica int primary key auto_increment,
estavel DOUBLE,
atencao DOUBLE,
emergencia DOUBLE,
urgencia DOUBLE
);

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
    PRIMARY KEY (idComponentes, fkServidorComp, fkBancoComp, fkPlanoComp, fkMetrica ),
    CONSTRAINT fk_servidor_comp FOREIGN KEY (fkServidorComp) REFERENCES servidor(idServidor),
    CONSTRAINT fk_banco_comp FOREIGN KEY (fkBancoComp) REFERENCES banco(idBanco),
    CONSTRAINT fk_plano_comp FOREIGN KEY (fkPlanoComp) REFERENCES planoContratado(idPlano),
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
    fkMetricaReg int,
    PRIMARY KEY (idRegistros, fkServidorReg, fkBancoReg, fkPlanoReg, fkComponentesReg),
    FOREIGN KEY (fkServidorReg) REFERENCES servidor (idServidor),
    FOREIGN KEY (fkBancoReg) REFERENCES banco (idBanco),
    FOREIGN KEY (fkPlanoReg) REFERENCES planoContratado(idPlano),
    FOREIGN KEY (fkComponentesReg) REFERENCES componentes (idComponentes),
    foreign key (fkMetricaReg) references metrica(idMetrica)
    
);

create table alerta(
idAlertas int primary key auto_increment,
hora time,
fkRegistro int,
fkComponente int,
fkMetrica int,
fkServidor int,
fkBanco int,
fkPlano int,
	foreign key(fkRegistro) references registros(idRegistros),
	FOREIGN KEY (fkServidor) REFERENCES servidor (idServidor),
    FOREIGN KEY (fkBanco) REFERENCES banco (idBanco),
    FOREIGN KEY (fkPlano) REFERENCES planoContratado(idPlano),
    FOREIGN KEY (fkComponente) REFERENCES componentes (idComponentes),
	foreign key (fkMetrica) references metrica(idMetrica)
);-- Inserção de dados na tabela 'planoContratado'
INSERT INTO planoContratado (tipo) VALUES (1), (2);

-- Inserção de dados na tabela 'statusMaquina'
INSERT INTO statusMaquina (nome) VALUES ('Ativo'), ('Inativo'), ('Em manutenção');

-- Inserção de dados na tabela 'localizacaoMatriz'
INSERT INTO localizacaoMatriz (empresa, país) VALUES ('Empresa A', 'Brasil'), ('Empresa B', 'EUA');

-- Inserção de dados na tabela 'banco'
INSERT INTO banco (nomeFantasia, cnpj, razaoSocial, sigla, responsavelLegal) VALUES ('Banco A', '12345678901234', 'Razão A', 'RA', '11111111111'), ('Banco B', '23456789012345', 'Razão B', 'RB', '22222222222'), ('Banco C', '34567890123456', 'Razão C', 'RC', '33333333333');

-- Inserção de dados na tabela 'escalonamentoFuncionarios'
INSERT INTO escalonamentoFuncionarios (cargo, nívelAcesso) VALUES ('Gerente', 1), ('Supervisor', 2), ('Funcionário', 3);

-- Inserção de dados na tabela 'funcionarios'
INSERT INTO funcionarios (nome, email, cpf, telefone, senha, fkBanco, fkEscalonamento) VALUES ('Nome A', 'emailA@example.com', '12345678901234', '1234567890', 'senhaA', 1, 1), ('Nome B', 'emailB@example.com', '23456789012345', '2345678901', 'senhaB', 2, 2), ('Nome C', 'emailC@example.com', '34567890123456', '3456789012', 'senhaC', 3, 3);

-- Inserção de dados na tabela 'servidor'
INSERT INTO servidor (apelido, sistemaOperacional, responsavelLegal, enderecoIP, dataCompraLocacao, dateValidade, fkBanco, fkStatus, fkLocalizacaoMatriz, fkPlano) VALUES ('Servidor A', 'Windows', 'Responsável A', '192.168.1.1', '2023-10-31', '2024-10-31', 1, 1, 1, 1), ('Servidor B', 'Linux', 'Responsável B', '192.168.1.2', '2023-11-01', '2024-11-01', 2, 2, 2, 2);

INSERT INTO servidor (apelido, sistemaOperacional, responsavelLegal, enderecoIP, dataCompraLocacao, dateValidade, fkBanco, fkStatus, fkLocalizacaoMatriz, fkPlano) VALUES ('Servidor aws', 'Windows', 'Responsável A', '192.168.1.1', '2023-10-31', '2024-10-31', 1, 1, 1, 1);

-- Inserção de dados na tabela 'usb'
INSERT INTO usb (nomeDispositivo, qtdPorta, qtdConectada, fkServidorUSB, fkBancoUSB, fkEpescUBS, fkPlanoUBS) VALUES ('Dispositivo A', 2, 1, 1, 1, 1, 1), ('Dispositivo B', 3, 2, 2, 2, 2, 2);

-- Inserção de dados na tabela 'metrica'
INSERT INTO metrica (estavel, atencao, emergencia, urgencia) VALUES (0.1, 0.2, 0.3, 0.4), (0.2, 0.3, 0.4, 0.5), (0.3, 0.4, 0.5, 0.6);

-- Consultando os dados inseridos nas tabelas
USE SecurityBank;
SELECT 
    Funcionarios.*,
    Banco.*,
    Servidor.*
FROM 
    funcionarios
JOIN Banco ON funcionarios.fkBanco = Banco.idBanco
JOIN Servidor ON funcionarios.fkBanco = Servidor.fkBanco;

SELECT * FROM servidor 
JOIN banco a 
ON servidor.fkBanco = a.idBanco 
WHERE a.idBanco = 1;


SELECT * FROM planoContratado;
SELECT * FROM statusMaquina;
SELECT * FROM localizacaoMatriz;
SELECT * FROM especificacoes;
SELECT * FROM banco;
SELECT * FROM escalonamentoFuncionarios;
SELECT * FROM funcionarios;
SELECT * FROM servidor;
SELECT * FROM componentes;
select*from registros;
desc registros;
SELECT * FROM registros where fkservidor =1;
SELECT
        (SELECT MAX(dadosCaptados) FROM registros WHERE fkComponentesReg = 1 and fkBancoReg = 1) AS proc,
        (SELECT MAX(dadosCaptados) FROM registros WHERE fkComponentesReg = 2 and fkBancoReg = 1) AS RAM,
        (SELECT MAX(dadosCaptados) FROM registros WHERE fkComponentesReg = 3 and fkBancoReg = 1) AS disco,
        dataHorario AS horario
    FROM registros 
    JOIN Componentes ON fkComponentesReg = idComponentes
    WHERE fkComponentesReg = 1
    LIMIT 0, 50;
    
SELECT 
    (SELECT MAX(dadosCaptados) FROM registros WHERE fkComponentesReg = 1 and fkBancoReg = 1) AS proc,
    (SELECT MAX(dadosCaptados) FROM registros WHERE fkComponentesReg = 2 and fkBancoReg = 1) AS RAM,
    (SELECT MAX(dadosCaptados) FROM registros WHERE fkComponentesReg = 3 and fkBancoReg = 1) AS disco,
    dataHorario AS horario
FROM registros
JOIN Componentes ON fkComponentesReg = idComponentes
WHERE fkBancoReg = 1
LIMIT 0, 50;