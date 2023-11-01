CREATE database SecurityBank;
USE SecurityBank;
drop database SecurityBank;


-- Inserção de dados na tabela 'planoContratado'
INSERT INTO planoContratado (tipo) VALUES (1), (2), (3);

-- Inserção de dados na tabela 'statusMaquina'
INSERT INTO statusMaquina (nome) VALUES ('Ativo'), ('Inativo'), ('Em manutenção');

-- Inserção de dados na tabela 'localizacaoMatriz'
INSERT INTO localizacaoMatriz (empresa, país) VALUES ('Empresa A', 'Brasil'), ('Empresa B', 'EUA'), ('Empresa C', 'Japão');

-- Inserção de dados na tabela 'banco'
INSERT INTO banco (nomeFantasia, cnpj, razaoSocial, sigla, responsavelLegal) VALUES ('Banco A', '12345678901234', 'Razão A', 'RA', '11111111111'), ('Banco B', '23456789012345', 'Razão B', 'RB', '22222222222'), ('Banco C', '34567890123456', 'Razão C', 'RC', '33333333333');

-- Inserção de dados na tabela 'escalonamentoFuncionarios'
INSERT INTO escalonamentoFuncionarios (cargo, nívelAcesso) VALUES ('Gerente', 1), ('Supervisor', 2), ('Funcionário', 3);

-- Inserção de dados na tabela 'funcionarios'
INSERT INTO funcionarios (nome, email, cpf, telefone, senha, fkBanco, fkEscalonamento) VALUES ('Nome A', 'emailA@example.com', '12345678901234', '1234567890', 'senhaA', 1, 1), ('Nome B', 'emailB@example.com', '23456789012345', '2345678901', 'senhaB', 2, 2), ('Nome C', 'emailC@example.com', '34567890123456', '3456789012', 'senhaC', 3, 3);

-- Inserção de dados na tabela 'servidor'
INSERT INTO servidor (apelido, sistemaOperacional, responsavelLegal, enderecoIP, dataCompraLocacao, dateValidade, fkBanco, fkStatus, fkLocalizacaoMatriz, fkPlano) VALUES ('Servidor A', 'Windows', 'Responsável A', '192.168.1.1', '2023-10-31', '2024-10-31', 1, 1, 1, 1), ('Servidor B', 'Linux', 'Responsável B', '192.168.1.2', '2023-11-01', '2024-11-01', 2, 2, 2, 2), ('Servidor C', 'Unix', 'Responsável C', '192.168.1.3', '2023-11-02', '2024-11-02', 3, 3, 3, 3);

-- Inserção de dados na tabela 'usb'
INSERT INTO usb (nomeDispositivo, qtdPorta, qtdConectada, fkServidorUSB, fkBancoUSB, fkEpescUBS, fkPlanoUBS, fkLocacaoUBS) VALUES ('Dispositivo A', 2, 1, 1, 1, 1, 1, 1), ('Dispositivo B', 3, 2, 2, 2, 2, 2, 2), ('Dispositivo C', 1, 1, 3, 3, 3, 3, 3);

-- Inserção de dados na tabela 'metrica'
INSERT INTO metrica (estavel, atencao, emergencia, urgencia) VALUES (0.1, 0.2, 0.3, 0.4), (0.2, 0.3, 0.4, 0.5), (0.3, 0.4, 0.5, 0.6);



INSERT INTO locacao(dataCompraLocacao, dateValidade) 
VALUES(STR_TO_DATE('06-10-2002', '%d-%m-%Y'), STR_TO_DATE('06-06-2030', '%d-%m-%Y'));


INSERT INTO locacao(dataCompraLocacao, dateValidade) 
VALUES(STR_TO_DATE('2002-10-06', '%Y-%m-%d'), STR_TO_DATE('2030-06-06', '%Y-%m-%d'));

SET @variavelidLocacao = (
    SELECT idLocacao 
    FROM locacao 
    WHERE dataCompraLocacao = STR_TO_DATE('2002-10-06', '%Y-%m-%d') 
    AND dateValidade = STR_TO_DATE('2030-06-06', '%Y-%m-%d')
    LIMIT 1
);

SET @compra = STR_TO_DATE('06-10-2002', '%d-%m-%Y');
SET @vali = STR_TO_DATE('06-06-2030', '%d-%m-%Y');

INSERT INTO locacao(dataCompraLocacao, dateValidade) 
VALUES(@compra, @vali);


SET @variavelidLocacao = (
    SELECT idLocacao 
    FROM locacao 
    WHERE dataCompraLocacao = @compra 
    AND dateValidade = @vali
    LIMIT 1
);




SELECT idLocacao INTO @variavelidLocacao FROM locacao WHERE dataCompraLocacao = STR_TO_DATE('06-10-2002', '%Y-%m-%d') AND dateValidade = STR_TO_DATE('06-06-2030', '%Y-%m-%d');
SET @variavelidLocacao = (SELECT idLocacao FROM locacao WHERE dataCompraLocacao = STR_TO_DATE('06-10-2002', '%Y-%m-%d') AND dateValidade = STR_TO_DATE('06-06-2030', '%Y-%m-%d'));


INSERT INTO servidor (apelido, sistemaOperacional, responsavelLegal, enderecoIP, fkBanco, fkStatus, fkLocalizacaoMatriz, fkPlano, fkLocacao) 
VALUES ('Servidor A', 'Windows', 'Responsável A', '192.168.1.1', 1, 1, 1, 1, 1), ('Servidor B', 'Linux', 'Responsável B', '192.168.1.2', 2, 2, 2, 2, 2);


SET @compra = STR_TO_DATE('${compra}', '%d-%m-%Y');
SET @vali = STR_TO_DATE('${vali}', '%d-%m-%Y');

-- Consultando os dados inseridos nas tabelas
SELECT * FROM planoContratado;
SELECT * FROM statusMaquina;
SELECT * FROM localizacaoMatriz;
SELECT * FROM banco;
SELECT * FROM escalonamentoFuncionarios;
SELECT * FROM funcionarios;
SELECT * FROM servidor;
SELECT * FROM componentes;
select*from locacao;
desc registros;
SELECT * FROM registros where fkservidor =1;


SET @variavelidLocacao = (
    SELECT idLocacao 
    FROM locacao 
    WHERE dataCompraLocacao = STR_TO_DATE('2002-10-06', '%Y-%m-%d')
    AND dateValidade = STR_TO_DATE('2030-06-06', '%Y-%m-%d')
    LIMIT 1
);
SET @variavelidLocacao = (
    SELECT idLocacao 
    FROM locacao 
    WHERE dataCompraLocacao = STR_TO_DATE('${compra}', '%Y-%m-%d')
    AND dateValidade = STR_TO_DATE('${vali}', '%Y-%m-%d')
    LIMIT 1
);

INSERT INTO servidor (apelido, sistemaOperacional, responsavelLegal, enderecoIP, fkBanco, fkStatus, fkLocalizacaoMatriz, fkPlano, fkLocacao) 
VALUES ('${apelidoServidor}', '${soServidor}', '${cpfRespServidor}', '${ipServidor}', ${fkBanco}, 1, NULL, ${fkPlano}, @variavelidLocacao);



    SELECT 
    Funcionarios.*,
    Banco.*
FROM 
    funcionarios
JOIN Banco ON funcionarios.fkBanco = Banco.idBanco
JOIN Servidor ON funcionarios.fkBanco = Servidor.fkBanco
WHERE 
    Funcionarios.email = 'carlos.santos@example.com' AND
    Funcionarios.senha = 'senha789';


SELECT DISTINCT
    Funcionarios.*,
    Banco.*
FROM 
    funcionarios
JOIN Banco ON funcionarios.fkBanco = Banco.idBanco
JOIN Servidor ON funcionarios.fkBanco = Servidor.fkBanco
WHERE 
    Funcionarios.email = 'carlos.santos@example.com' 
    AND Funcionarios.senha = 'senha789';
