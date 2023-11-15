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
fkLocalizacaoMatriz int,
fkEspecificacoes int,
fkPlano int,
constraint pkComposta primary key (idServidor,fkBanco, fkEspecificacoes, fkPlano),
 foreign key (fkBanco) references banco (idBanco),
 foreign key (fkStatus) references statusMaquina (idStatus),
 foreign key (fkLocalizacaoMatriz) references LocalizacaoMatriz (idLocalização),
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