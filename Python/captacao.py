import mysql.connector 
import psutil
import time
from datetime import datetime
import platform
import subprocess
import re
import pymysql
import wmi

#def mysql_connection(host, user, passwd, database=None):
 #   connection = connect(
  #      host=host,
   #     user=user,
    #    passwd=passwd,
     #   database=database
    #)
    #return connection

config ={"user": "root","password":"justin123","host":"localhost","database":"SecurityBank"}
connection = pymysql.connect(**config)

cursor1 = connection.cursor()
IDCPU = psutil.cpu_times()  

print(IDCPU)

mycursor1 = connection.cursor()
mycursor2 = connection.cursor()
mycursor3 = connection.cursor()
mycursor4 = connection.cursor()

valores_id = []


mycursor1.execute("SELECT idServidor FROM servidor WHERE apelido = 'teste'")
result1 = mycursor1.fetchall()
id_servidor_vetor1 = [x[0] for x in result1]
valores_id.extend(id_servidor_vetor1)
fkServidor = valores_id[0]


mycursor2.execute("SELECT idBanco FROM banco WHERE nomeFantasia = 'bla'")
result2 = mycursor2.fetchall()
id_banco_vetor2 = [x[0] for x in result2]
valores_id.extend(id_banco_vetor2)
fkBanco = valores_id[1]


mycursor3.execute("SELECT idEspecificacoes FROM especificacoes WHERE dataValidade = '2024-01-01'")
result3 = mycursor3.fetchall()
id_esp_vetor3 = [x[0] for x in result3]
valores_id.extend(id_esp_vetor3)
fkEspec = valores_id[2]

mycursor4.execute("SELECT idPlano FROM planoContratado WHERE tipo = 1")
result4 = mycursor4.fetchall()
id_plano_vetor4 = [x[0] for x in result4]
valores_id.extend(id_plano_vetor4)
fkPlano = valores_id[3]





cpu_info = {}
cpu_info['Nome'] = platform.processor()
nomeCPU = cpu_info['Nome']
#cpu_info['Arquitetura'] = platform.architecture()[0]
#cpu_info['Palavra'] = platform.architecture()[0]
#cpu_info['Frequencia'] = psutil.cpu_freq().current
#cpu_info['Núcleos Físicos'] = psutil.cpu_count(logical=False)
#cpu_info['Núcleos Lógicos'] = psutil.cpu_count(logical=True)

print("Informações da CPU:")
for key, value in cpu_info.items():
    print(f"{key}: {value}")

# Informações da memória
#mem = psutil.virtual_memory()
#mem_info = {}
#mem_info['Total'] = mem.total
#mem_info['Disponível'] = mem.available
#mem_info['Porcentagem de Uso'] = mem.percent
#mem_info['Usada'] = mem.used
#mem_info['Livre'] = mem.free

print("\nInformações da Memória:")

#cmd = "/usr/sbin/system_profiler SPMemoryDataType | grep 'Serial Number' | awk '{print $3}'"
c = wmi.WMI()
#result = subprocess.run(cmd, shell=True, check=True, capture_output=True, text=True)
#serial_numbers = result.stdout.strip().split('\n')
nomeMemoria = None
# Mostra os números de série dos módulos de memória RAM
print("Números de Série dos Módulos de Memória RAM:")
#for i, serial_number in enumerate(serial_numbers, start=1):
  #  print(f"Módulo {i}: {serial_number}")
   # if i == 1:  # Verifica se é a primeira volta do loop
   #     nomeMemoria = serial_number
   # print(nomeMemoria)
#for key, value in mem_info.items():
 #   print(f"{key}: {value}")
#----------------------------------

memory_modules = c.Win32_PhysicalMemory()
memoria_info = []

for i, memory in enumerate(memory_modules, start=1):
    serial_number = memory.SerialNumber
    memoria_info.append(f"Módulo {i}: Número de Série: {serial_number}")
    if i == 1:
        nomeMemoria = memory.SerialNumber
        print(nomeMemoria)
#------------------------------------

partitions = psutil.disk_partitions()
first_device_name = None
percentages = []
for partition in partitions:
    if  first_device_name == None:
        first_device_name = partition.device
  #  print("\nDispositivo:", partition.device)
    #print("Ponto de montagem:", partition.mountpoint)
    #try:
       # partition_usage = psutil.disk_usage(partition.mountpoint)
       # print("Total de espaço:", partition_usage.total)
     #   print("Espaço usado:", partition_usage.used)
   #     print("Espaço livre:", partition_usage.free)
      #  print("Porcentagem de uso:", partition_usage.percent)
    #    percentages.append(partition_usage.percent)
  #  except PermissionError:
     #   continue

#print("\nNome do primeiro dispositivo:", first_device_name)
#print("Porcentagens de uso de todas as partições:", percentages)


print('\n')
print(first_device_name)
print(nomeCPU)
print(nomeMemoria)
print(fkServidor, fkBanco, fkEspec, fkPlano)


mycursor1Comp = connection.cursor()
mycursor2Comp = connection.cursor()
mycursor3Comp = connection.cursor()
mycursor4Comp = connection.cursor()

componentesID = []

queryC1 = "INSERT INTO componentes(nome, modelo, fkServidorComp, fkBancoComp, fkEspecificacoesComp, fkPlanoComp) VALUES (%s, 'CPU', %s, %s, %s, %s)"
valuesC1 = (nomeCPU, fkServidor, fkBanco, fkEspec, fkPlano)
mycursor1Comp.execute(queryC1, valuesC1)
connection.commit()

queryC2 = "INSERT INTO componentes(nome, modelo, fkServidorComp, fkBancoComp, fkEspecificacoesComp, fkPlanoComp) VALUES (%s, 'RAM', %s, %s, %s, %s)"
valuesC2 = ("Ram", fkServidor, fkBanco, fkEspec, fkPlano)
mycursor2Comp.execute(queryC2, valuesC2)
connection.commit()

queryC3 = "INSERT INTO componentes(nome, modelo, fkServidorComp, fkBancoComp, fkEspecificacoesComp, fkPlanoComp) VALUES (%s, 'DISCO', %s, %s, %s, %s)"
valuesC3 = (first_device_name, fkServidor, fkBanco, fkEspec, fkPlano)
mycursor3Comp.execute(queryC3, valuesC3)
connection.commit()
 
queryC4 = "INSERT INTO componentes(nome, fkServidorComp, fkBancoComp, fkEspecificacoesComp, fkPlanoComp) VALUES ('Rede', %s, %s, %s, %s)"
valuesC4 = (fkServidor, fkBanco, fkEspec, fkPlano)
mycursor4Comp.execute(queryC4, valuesC4)
connection.commit()

mycursor1CompS = connection.cursor()
mycursor2CompS = connection.cursor()
mycursor3CompS = connection.cursor()
mycursor4CompS = connection.cursor()

idCPU = None
idMemoria = None
idDisco = None
idNet = None
mycursor1CompS.execute("SELECT idComponentes FROM componentes WHERE nome = %s", (nomeCPU,))
result1 = mycursor1CompS.fetchall()
id_componente_vetor1 = [x[0] for x in result1]
idCPU = id_componente_vetor1[0]

mycursor2CompS.execute("SELECT idComponentes FROM componentes WHERE nome = %s", ("Ram",))
result2 = mycursor2CompS.fetchall()
id_componente_vetor2 = [x[0] for x in result2]
idMemoria = id_componente_vetor2[0]

mycursor3CompS.execute("SELECT idComponentes FROM componentes WHERE nome = %s", (first_device_name,))
result3 = mycursor3CompS.fetchall()
id_componente_vetor3 = [x[0] for x in result3]
idDisco = id_componente_vetor3[0]

mycursor4CompS.execute("SELECT idComponentes FROM componentes WHERE nome = 'Rede'")
result4 = mycursor4CompS.fetchall()
id_componente_vetor4 = [x[0] for x in result4]
idInternet = id_componente_vetor4[0]


print(idCPU)
print(idMemoria)
print(idDisco)
print(idInternet)
print(fkServidor, fkBanco, fkEspec, fkPlano)


while True:
    memoria = psutil.virtual_memory()[2]
    cpu = psutil.cpu_percent(None)
    disco = psutil.disk_usage('/')[3]
    interval = 1
    statusRede = 0
    network_connections = psutil.net_connections()

    network_active = any(conn.status == psutil.CONN_ESTABLISHED for conn in network_connections)

    print("\nINFORMAÇÕES SOBRE A REDE: ")

    if network_active:
        print("A rede está ativa.")
        statusRede = 1
    else:
        print("A rede não está ativa.")

    cursor = connection.cursor()

    horarioAtual = datetime.now()
    horarioFormatado = horarioAtual.strftime('%Y-%m-%d %H:%M:%S')
    sele = "Select"

    ins = [cpu, memoria, disco, statusRede]
    componentes = [idCPU, idMemoria, idDisco, idInternet]
    cursor = connection.cursor()

    for i in range(len(ins)):
        dado = ins[i]

        query = "INSERT INTO registros (dataHorario, dadosCaptados, fkServidorReg, fkBancoReg, fkEspeciReg, fkPlanoReg, fkComponentesReg) VALUES (%s, %s, %s, %s, %s, %s, %s)"
        cursor.execute(query, (horarioFormatado, dado, fkServidor, fkBanco, fkEspec, fkPlano,  componentes[i]))

        connection.commit()

    print("\nINFORMAÇÕES SOBRE PROCESSAMENTO: ")
    print('Porcentagem utilizada do Processador: ', cpu, '\nPorcentagem utilizada de memoria: ', memoria,
          '\nPorcentagem do disco sendo utilizada:', disco, '\nStatus da rede: ', statusRede)

    time.sleep(10)

cursor.close()
connection.close()
