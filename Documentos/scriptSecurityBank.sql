Create database SecurityBank;
use SecurityBank;

create table Empresa(
idEmpresa int primary key auto_increment,
nomeEmpresa varchar(45),
CNPJ char(14)
);

create table Funcionario(
idFuncionario int primary key auto_increment,
nome varchar(45), 
email varchar(45),
senha varchar(20),
CPF char(11),
telefone varchar(15), 
fkEmpresa int,
constraint FKEMP foreign key (fkEmpresa) 
	references Empresa(idEmpresa) 
)auto_increment = 1000 ;

create table Servidor(
idServidor int primary key auto_increment, 
sistemaOperacional varchar(45),
processador varchar(45),
memoriaRam varchar(10),
disco varchar(30), 
fkEmpresaServidor int,
constraint FKSEV foreign key (fkEmpresaServidor)
	references Empresa(idEmpresa)
)auto_increment = 10000;

create table MonitoramentoServidor(
idMonitoramentoServidor int,
cpuPorcentagem double, 
ramPorcentagem double,
discoPorcentagem double,
fkServidor int, 
constraint FKSEVM foreign key (fkServidor)
	references Servidor(idServidor),
constraint FKPK primary key(idMonitoramentoServidor,fkServidor)
);

insert into Empresa values 
(null,"Nubank", "12345678912345");

insert into Funcionario values
(null, "Guilherme", "guilherme.gsantos@sptech,school", "Malu2505", "10987654321", "5511982206065", 1);

insert into Servidor values 
(null, "Ubuntu 22.04.03", "Core i9-13900KS ","32gb","1tb ssd",1);

insert into MonitoramentoServidor values 
(100001, 25.7, 38.3, 50.0, 10000);


select * 
	from Funcionario join Empresa
		on Funcionario.fkEmpresa = Empresa.idEmpresa;
        
select 
Servidor.sistemaOperacional as SO, 
Servidor.processador as CPU, 
Servidor.memoriaRam as Ram, 
Servidor.disco as EspaçoDisco, 
Empresa.nomeEmpresa as Empresa, 
CNPJ
	from Servidor join Empresa 
		on Servidor.fkEmpresaServidor = Empresa.idEmpresa;
        
select 
Servidor.sistemaOperacional as SO, 
Servidor.processador as CPU, 
Servidor.memoriaRam as Ram, 
Servidor.disco as EspaçoDisco, 
Empresa.nomeEmpresa as Empresa, 
CNPJ, 
MonitoramentoServidor.cpuPorcentagem as PorcentagemCPU,
MonitoramentoServidor.ramPorcentagem as PorcentagemRam, 
MonitoramentoServidor.discoPorcentagem as PorcentagemDisco
	from Servidor join Empresa 
		on Servidor.fkEmpresaServidor = Empresa.idEmpresa
		join MonitoramentoServidor on MonitoramentoServidor.fkServidor = Servidor.idServidor;
