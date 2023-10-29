CREATE database SecurityBank;
USE SecurityBank;
drop database SecurityBank;
-- 00:39:29	drop database SecurtyBank	Error Code: 1008. Can't drop database 'securtybank'; database doesn't exist	0.00030 sec


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
constraint pkComposta primary key (idSUB, fkServidorUSB, fkBancoUSB, fkEpescUBS, fkPlanoUBS, fkLocacaoUBS ),
foreign key (fkServidorUSB) references Servidor(idServidor),
foreign key (fkBancoUSB) references banco(idBanco),
foreign key(fkEpescUBS) references especificacoes(idEspecificacoes),
foreign key(fkPlanoUBS) references planoContratado (idPlano),
foreign key(fkLocacaoUBS) references locacao(idLocacao)
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
hora time,
fkRegistro int,
fkComponente int,
fkMetrica int,
fkServidor int,
fkBanco int,
fkEsoecificacao int,
fkPlano int,
fkLocacao int,
	foreign key(fkRegistro) references registro(idRegistro),
	FOREIGN KEY (fkServidor) REFERENCES servidor (idServidor),
    FOREIGN KEY (fkBanco) REFERENCES banco (idBanco),
    FOREIGN KEY (fkEspeci) REFERENCES especificacoes (idEspecificacoes),
    FOREIGN KEY (fkPlano) REFERENCES planoContratado(idPlano),
    FOREIGN KEY (fkLocacao) references locacao(idLocacao),
    FOREIGN KEY (fkComponentes) REFERENCES componentes (idComponentes),
	foreign key (fkMetrica) references metrica(idMetrica)
);

INSERT INTO planoContratado(tipo) VALUES (1);
INSERT INTO planoContratado(tipo) VALUES (2);

-- Inserindo dados na tabela statusMaquina
INSERT INTO statusMaquina(nome) VALUES ('Ativo');
INSERT INTO statusMaquina(nome) VALUES ('Inativo');

-- Inserindo dados na tabela localizacaoMatriz
INSERT INTO localizacaoMatriz(empresa, país) VALUES ('Empresa A', 'Brasil');
INSERT INTO localizacaoMatriz(empresa, país) VALUES ('Empresa B', 'Estados Unidos');

-- Inserindo dados na tabela especificacoes
INSERT INTO especificacoes(potenciaMaxCPU, potenciaMaxRAM, potenciaMaxDisco, dataCompra, dataValidade) VALUES (3.2, 16, 500, '2022-01-01', '2024-01-01');
INSERT INTO especificacoes(potenciaMaxCPU, potenciaMaxRAM, potenciaMaxDisco, dataCompra, dataValidade) VALUES (2.5, 8, 250, '2021-06-15', '2023-06-15');

-- Inserindo dados na tabela banco
INSERT INTO banco(nomeFantasia, cnpj, razaoSocial, sigla, responsavelLegal) 
VALUES('bla', '12345678901234','blabla', '1bla', 'pedrao');

-- Inserindo dados na tabela escalonamentoFuncionarios
INSERT INTO escalonamentoFuncionarios(cargo, nívelAcesso) VALUES ('Gerente', 3);
INSERT INTO escalonamentoFuncionarios(cargo, nívelAcesso) VALUES ('Técnico', 2);

-- Inserindo dados na tabela funcionarios
INSERT INTO funcionarios(nome, email, cpf, telefone, senha, fkBanco, fkEscalonamento) VALUES ('João', 'joao@email.com', '12345678901', '11999999999', '123456', 1, 1);
INSERT INTO funcionarios(nome, email, cpf, telefone, senha, fkBanco, fkEscalonamento) VALUES ('Maria', 'maria@email.com', '98765432101', '11888888888', '654321', 1, 2);
select*from banco;
-- Inserindo dados na tabela servidor
INSERT INTO servidor(apelido, sistemaOperacional, responsavelLegal, enderecoIP, fkBanco, fkStatus, fkLocalizacaoMatriz, fkEspecificacoes, fkPlano) 
VALUES ('teste', 'Linux', 'Fulano', '192.168.0.1', 1, 1, 1, 1, 1);
INSERT INTO servidor(apelido, sistemaOperacional, responsavelLegal, enderecoIP, fkBanco, fkStatus, fkLocalizacaoMatriz, fkEspecificacoes, fkPlano) VALUES ('Servidor B', 'Windows', 'Beltrano', '192.168.0.2', 1, 2, 2, 2, 2);

-- Consultando os dados inseridos nas tabelas
SELECT * FROM planoContratado;
SELECT * FROM statusMaquina;
SELECT * FROM localizacaoMatriz;
SELECT * FROM especificacoes;
SELECT * FROM banco;
SELECT * FROM escalonamentoFuncionarios;
SELECT * FROM funcionarios;
SELECT * FROM servidor;
SELECT * FROM componentes;
desc registros;
SELECT * FROM registros where fkservidor =1;
select 
         as cpu, 
        dht11_umidade as Ram,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    from medida
                    where fk_aquario = ${idAquario}
                    order by id desc limit ${limite_linhas}`