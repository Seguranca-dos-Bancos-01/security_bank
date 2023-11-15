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

CREATE TABLE especificacoes(
idEspecificacoes int primary key auto_increment,
potenciaMaxCPU double,
potenciaMaxRAM double,
potenciaMaxDisco double
) ;
CREATE TABLE locacao(
idLocacao int primary key auto_increment,
dataCompraLocacao DATE,
dateValidade DATE,
fkServidor int,
 foreign key (fkServidor) references servidor(idServidor)
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

fkEspecificacoes int,
fkPlano int,
constraint pkComposta primary key (idServidor,fkBanco, fkEspecificacoes, fkPlano),
 foreign key (fkBanco) references banco (idBanco),
 foreign key (fkStatus) references statusMaquina (idStatus),
 
 foreign key (fkEspecificacoes) references especificacoes (idEspecificacoes),
 foreign key (fkPlano) references planoContratado (idPlano)
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
constraint pkComposta primary key (idUSB, fkServidorUSB, fkBancoUSB, fkEpescUBS, fkPlanoUBS),
foreign key (fkServidorUSB) references Servidor(idServidor),
foreign key (fkBancoUSB) references banco(idBanco),
foreign key(fkEpescUBS) references especificacoes(idEspecificacoes),
foreign key(fkPlanoUBS) references planoContratado (idPlano)
);

create table Rede(
idRede int auto_increment,
StatusRede int,
PotenciaUpload Double,
PotenciaDownload Double,
fkServidorRede int,
fkBancoRede int,
fkEspecificacoesRede int,
fkPlanoRede int,
constraint pkComposta primary key (idRede, fkServidorRede, fkBancoRede, fkEspecificacoesRede, fkPlanoRede),
foreign key (fkServidorRede) references Servidor(idServidor),
foreign key (fkBancoRede) references banco(idBanco),
foreign key(fkEspecificacoesRede) references especificacoes(idEspecificacoes),
foreign key(fkPlanoRede) references planoContratado (idPlano)
);


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
    PRIMARY KEY (idComponentes, fkServidorComp, fkBancoComp, fkEspecificacoesComp, fkPlanoComp, fkMetrica ),
    CONSTRAINT fk_servidor_comp FOREIGN KEY (fkServidorComp) REFERENCES servidor(idServidor),
    CONSTRAINT fk_banco_comp FOREIGN KEY (fkBancoComp) REFERENCES banco(idBanco),
    CONSTRAINT fk_especificacoes_comp FOREIGN KEY (fkEspecificacoesComp) REFERENCES especificacoes(idEspecificacoes),
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
    PRIMARY KEY (idRegistros, fkServidorReg, fkBancoReg, fkEspeciReg, fkPlanoReg, fkComponentesReg),
    FOREIGN KEY (fkServidorReg) REFERENCES servidor (idServidor),
    FOREIGN KEY (fkBancoReg) REFERENCES banco (idBanco),
    FOREIGN KEY (fkEspeciReg) REFERENCES especificacoes (idEspecificacoes),
    FOREIGN KEY (fkPlanoReg) REFERENCES planoContratado(idPlano),
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
	foreign key(fkRegistro) references registros(idRegistros),
	FOREIGN KEY (fkServidor) REFERENCES servidor (idServidor),
    FOREIGN KEY (fkBanco) REFERENCES banco (idBanco),
    FOREIGN KEY (fkEsoecificacao) REFERENCES especificacoes (idEspecificacoes),
    FOREIGN KEY (fkPlano) REFERENCES planoContratado(idPlano),
    FOREIGN KEY (fkComponente) REFERENCES componentes (idComponentes),
	foreign key (fkMetrica) references metrica(idMetrica)
);



-- Plano Contratado
INSERT INTO planoContratado (tipo) VALUES (1), (2), (3);

-- Status Máquina
INSERT INTO statusMaquina (nome) VALUES ('Ativo'), ('Inativo'), ('Em Manutenção');


-- Especificações
INSERT INTO especificacoes (potenciaMaxCPU, potenciaMaxRAM, potenciaMaxDisco) 
VALUES 
    (4.0, 16.0, 500.0),
    (8.0, 32.0, 1000.0),
    (16.0, 64.0, 2000.0);

-- Locação
INSERT INTO locacao (dataCompraLocacao, dateValidade, fkServidor) 
VALUES 
    ('2023-11-15', '2023-12-15', 1),
    ('2023-10-20', '2023-11-20', 2),
    ('2023-09-25', '2023-10-25', 3);

-- Banco
INSERT INTO banco (nomeFantasia, cnpj, razaoSocial, sigla, responsavelLegal) VALUES 
    ('Banco A', '12345678901234', 'Banco A Ltda', 'BA', 'João da Silva'),
    ('Banco B', '98765432109876', 'Banco B SA', 'BB', 'Maria Souza'),
    ('Banco C', '56789012345678', 'Banco C S/A', 'BC', 'Pedro Santos');

-- Escalonamento de Funcionários
INSERT INTO escalonamentoFuncionarios (cargo, nivelAcesso) VALUES 
    ('Administrador', 1),
    ('Supervisor', 2),
    ('Funcionário', 3);

-- Funcionários
INSERT INTO funcionarios (nome, email, cpf, telefone, senha, fkbank, fkeScalonamento) VALUES 
    ('João', 'joao@example.com', '123.456.789-01', '(00) 1234-5678', 'senha123', 1, 1),
    ('Maria', 'maria@example.com', '987.654.321-09', '(00) 9876-5432', 'senha456', 2, 2),
    ('Pedro', 'pedro@example.com', '567.890.123-45', '(00) 5432-1098', 'senha789', 3, 3);

-- Servidor
INSERT INTO servidor (apelido, sistemaOperacional, responsavelLegal, enderecoIP, fkbAnco, fkstatus, fkLocalizacaoMatriz, fkEspecificacoes, fkPlano) VALUES 
    ('Servidor A', 'Linux', 'Fulano', '192.168.0.1', 1, 1, 1, 1, 1),
    ('Servidor B', 'Windows', 'Beltrano', '192.168.0.2', 2, 2, 2, 2, 2),
    ('Servidor C', 'Unix', 'Cicrano', '192.168.0.3', 3, 3, 3, 3, 3);

-- USB
INSERT INTO usb (idUSB, nomeDispositivo, qtdPorta, qtdConectada, fkServidorUSB, fkBancoUSB, fkEpescUBS, fkPlanoUBS) VALUES 
    (1, 'Dispositivo A', 4, 2, 1, 1, 1, 1),
    (2, 'Dispositivo B', 6, 3, 2, 2, 2, 2),
    (3, 'Dispositivo C', 8, 4, 3, 3, 3, 3);

-- Rede
INSERT INTO Rede (StatusRede, PotenciaUpload, PotenciaDownload, fkServidorRede, fkBancoRede, fkEspecificacoesRede, fkPlanoRede) VALUES 
    (1, 100.0, 200.0, 1, 1, 1, 1),
    (2, 150.0, 250.0, 2, 2, 2, 2),
    (3, 200.0, 300.0, 3, 3, 3, 3);

-- Métrica
INSERT INTO metrica (estavel, atencao, emergencia, urgencia) VALUES 
    (0.5, 1.0, 2.0, 3.0),
    (1.0, 2.0, 3.0, 4.0),
    (1.5, 3.0, 4.0, 5.0);

-- Componentes
INSERT INTO componentes (nome, modelo, fkServidorComp, fkBancoComp, fkEspecificacoesComp, fkPlanoComp, fkMetrica) VALUES 
    ('Componente A', 'Modelo 1', 1, 1, 1, 1, 1),
    ('Componente B', 'Modelo 2', 2, 2, 2, 2, 2),
    ('Componente C', 'Modelo 3', 3, 3, 3, 3, 3);

-- Registros
INSERT INTO registros (dataHorario, dadosCaptados, fkServidorReg, fkBancoReg, fkEspeciReg, fkPlanoReg, fkComponentesReg, fkMetricaReg) VALUES 
    ('2023-11-15 10:00:00', 100.0, 1, 1, 1, 1, 1, 1),
    ('2023-10-20 11:00:00', 150.0, 1, 1, 1, 1, 2, 2),
    ('2023-09-25 12:00:00', 200.0, 1, 1, 1, 1, 3, 3);

-- Alerta
INSERT INTO alerta (dataAlerta, horaAlerta, situacao, fkRegistro, fkComponente, fkMetrica, fkServidor, fkBanco, fkEsoecificacao, fkPlano) VALUES 
    ('2023-11-15', '10:00:00', 'Alerta A', 1, 1, 1, 1, 1, 1, 1),
    ('2023-10-20', '11:00:00', 'Alerta B', 2, 2, 2, 2, 2, 2, 2),
    ('2023-09-25', '12:00:00', 'Alerta C', 3, 3, 3, 3, 3, 3, 3);
