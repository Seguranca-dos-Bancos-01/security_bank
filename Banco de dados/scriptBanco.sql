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
constraint pkComposta primary key (idUSB, fkServidorUSB, fkBancoUSB, fkEpescUBS, fkPlanoUBS, fkLocacaoUBS ),
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
	foreign key(fkRegistro) references registros(idRegistros),
	FOREIGN KEY (fkServidor) REFERENCES servidor (idServidor),
    FOREIGN KEY (fkBanco) REFERENCES banco (idBanco),
    FOREIGN KEY (fkEsoecificacao) REFERENCES especificacoes (idEspecificacoes),
    FOREIGN KEY (fkPlano) REFERENCES planoContratado(idPlano),
    FOREIGN KEY (fkLocacao) references locacao(idLocacao),
    FOREIGN KEY (fkComponente) REFERENCES componentes (idComponentes),
	foreign key (fkMetrica) references metrica(idMetrica)
);
-- Inserção na tabela planoContratado
INSERT INTO planoContratado (tipo) VALUES (1), (2), (3);

-- Inserção na tabela statusMaquina
INSERT INTO statusMaquina (nome) VALUES ('Ativo'), ('Inativo'), ('Em manutenção');

-- Inserção na tabela localizacaoMatriz
INSERT INTO localizacaoMatriz (empresa, país) VALUES ('Empresa X', 'Brasil'), ('Empresa Y', 'Estados Unidos'), ('Empresa Z', 'Alemanha');

-- Inserção na tabela especificacoes
INSERT INTO especificacoes (potenciaMaxCPU, potenciaMaxRAM, potenciaMaxDisco) VALUES (2.5, 16, 500), (3.0, 32, 1000), (2.0, 8, 250);

-- Inserção na tabela locacao
INSERT INTO locacao (dataCompraLocacao, dateValidade) VALUES ('2023-10-28', '2024-10-28'), ('2023-09-15', '2024-09-15'), ('2023-11-01', '2024-11-01');

-- Inserção na tabela banco
INSERT INTO banco (nomeFantasia, cnpj, razaoSocial, sigla, responsavelLegal) VALUES ('Banco A', '12345678901234', 'Empresa A Ltda.', 'BAL', 'Fulano de Tal'), ('Banco B', '98765432109876', 'Empresa B Ltda.', 'BBL', 'Ciclano de Tal'), ('Banco C', '45678901234567', 'Empresa C Ltda.', 'BCL', 'Beltrano de Tal');

-- Inserção na tabela escalonamentoFuncionarios
INSERT INTO escalonamentoFuncionarios (cargo, nívelAcesso) VALUES ('Gerente', 3), ('Analista', 2), ('Assistente', 1);

-- Inserção na tabela funcionarios
INSERT INTO funcionarios (nome, email, cpf, telefone, senha, fkBanco, fkEscalonamento) VALUES ('João Silva', 'joao.silva@example.com', '12345678901', '9999999999', 'senha123', 1, 1), ('Maria Souza', 'maria.souza@example.com', '98765432109', '8888888888', 'senha456', 2, 2), ('Carlos Santos', 'carlos.santos@example.com', '45678901234', '7777777777', 'senha789', 3, 3);

-- Inserção na tabela servidor
INSERT INTO servidor (apelido, sistemaOperacional, responsavelLegal, enderecoIP, fkBanco, fkStatus, fkLocalizacaoMatriz, fkEspecificacoes, fkPlano, fkLocacao) VALUES ('Servidor A', 'Linux', 'Fulano de Tal', '192.168.1.1', 1, 1, 1, 1, 1, 1), ('Servidor B', 'Windows', 'Ciclano de Tal', '192.168.1.2', 2, 2, 2, 2, 2, 2), ('Servidor C', 'Unix', 'Beltrano de Tal', '192.168.1.3', 3, 3, 3, 3, 3, 3);

-- Inserção na tabela usb
INSERT INTO usb (idUSB, nomeDispositivo, qtdPorta, qtdConectada, fkServidorUSB, fkBancoUSB, fkEpescUBS, fkPlanoUBS, fkLocacaoUBS) VALUES (1, 'Dispositivo A', 4, 2, 1, 1, 1, 1, 1), (2, 'Dispositivo B', 6, 3, 2, 2, 2, 2, 2), (3, 'Dispositivo C', 8, 4, 3, 3, 3, 3, 3);

-- Inserção na tabela metrica
INSERT INTO metrica (estavel, atencao, emergencia, urgencia) VALUES (0.5, 0.7, 0.9, 1.0), (0.6, 0.8, 0.95, 1.0), (0.4, 0.6, 0.85, 1.0);

-- Inserção na tabela componentes
INSERT INTO componentes (nome, modelo, fkServidorComp, fkBancoComp, fkEspecificacoesComp, fkPlanoComp, fkMetrica, fkLocacao) VALUES ('Componente A', 'Modelo 1', 1, 1, 1, 1, 1, 1), ('Componente B', 'Modelo 2', 2, 2, 2, 2, 2, 2), ('Componente C', 'Modelo 3', 3, 3, 3, 3, 3, 3);

-- Inserção na tabela registros
INSERT INTO registros (dataHorario, dadosCaptados, fkServidorReg, fkBancoReg, fkEspeciReg, fkPlanoReg, fkComponentesReg, fkLocacaoReg, fkMetricaReg) VALUES ('2023-10-29 08:00:00', 50.2, 1, 1, 1, 1, 1, 1, 1), ('2023-10-29 09:00:00', 55.5, 2, 2, 2, 2, 2, 2, 2), ('2023-10-29 10:00:00', 60.1, 3, 3, 3, 3, 3, 3, 3);

-- Inserção na tabela alerta
INSERT INTO alerta (hora, fkRegistro, fkComponente, fkMetrica, fkServidor, fkBanco, fkEsoecificacao, fkPlano, fkLocacao) VALUES ('10:30:00', 1, 1, 1, 1, 1, 1, 1, 1), ('11:00:00', 2, 2, 2, 2, 2, 2, 2, 2), ('11:30:00', 3, 3, 3, 3, 3, 3, 3, 3);

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