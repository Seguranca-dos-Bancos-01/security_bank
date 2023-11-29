import mysql.connector 
import psutil
import time
from datetime import datetime
import platform
import subprocess
import re
import pymysql
import wmi
import pyodbc
import requests
import json

server = '34.206.192.7'
database = 'SecurityBank'
username = 'sa'
password = 'UrubuDoGit123'

conn = pyodbc.connect('DRIVER={SQL Server};SERVER='+server+';DATABASE='+database+';UID='+username+';PWD='+password)

valoresAWS = []
conn.cursor()
cursor1AWS = conn.cursor()
cursor2AWS = conn.cursor()
cursor3AWS = conn.cursor()
cursor4AWS = conn.cursor()
cursor5AWS = conn.cursor()
cursor6AWS = conn.cursor()

cursor1AWS.execute("select idMetrica from metrica where idMetrica = 1")
result1AWS = cursor1AWS.fetchall()
idMetricaAWS = [x[0] for x in result1AWS]
valoresAWS.extend(idMetricaAWS)
fkMetricaAWS = valoresAWS[0]

cursor2AWS.execute("select idServidor from servidor where idServidor = 1")
result2AWS = cursor2AWS.fetchall()
idServidorAWS = [x[0] for x in result2AWS]
valoresAWS.extend(idServidorAWS)
fkServidorAWS = valoresAWS[1]

cursor3AWS.execute("select idBanco from banco where idBanco = 1")
result3AWS = cursor3AWS.fetchall()
idBancoAWS = [x[0] for x in result3AWS]
valoresAWS.extend(idBancoAWS)
fkBancoAWS = valoresAWS[2]

cursor4AWS.execute("select idEspecificacoes from especificacao where idEspecificacoes = 1")
result4AWS = cursor4AWS.fetchall()
idEspecAWS = [x[0] for x in result4AWS]
valoresAWS.extend(idEspecAWS)
fkEspecAWS = valoresAWS[3]

cursor5AWS.execute("Select idPlano from plano_contratado where idPlano = 1")
result5AWS = cursor5AWS.fetchall()
idPlanoAWS = [x[0] for x in result5AWS]
valoresAWS.extend(idPlanoAWS)
fkPlanoAWS = valoresAWS[4]

cursor6AWS.execute("select idParticao from particao where idParticao = 2")
result6AWS = cursor6AWS.fetchall()
idParticaoAWS = [x[0] for x in result6AWS]
valoresAWS.extend(idParticaoAWS)
fkParticaoAWS = valoresAWS[5]

#def mysql_connection(host, user, passwd, database=None):
 #   connection = connect(
  #      host=host,
   #     user=user,
    #    passwd=passwd,
     #   database=database
    #)
    #return connection

config ={"user": "root","password":"rootpassword","host":"localhost","database":"SecurityBank"}
connection = pymysql.connect(**config)

config2 ={}

cursor1 = connection.cursor()
IDCPU = psutil.cpu_times()  

print(IDCPU)

mycursor1 = connection.cursor()
mycursor2 = connection.cursor()
mycursor3 = connection.cursor()
mycursor4 = connection.cursor()
mycursor5 = connection.cursor()
mycursor6 = connection.cursor()

valores_id = []


mycursor1.execute("SELECT idServidor FROM servidor WHERE apelido = 'Server C'")
result1 = mycursor1.fetchall()
id_servidor_vetor1 = [x[0] for x in result1]
valores_id.extend(id_servidor_vetor1)
fkServidor = valores_id[0]


mycursor2.execute("SELECT idBanco FROM banco WHERE nomeFantasia = 'Bank C'")
result2 = mycursor2.fetchall()
id_banco_vetor2 = [x[0] for x in result2]
valores_id.extend(id_banco_vetor2)  
fkBanco = valores_id[1]


mycursor3.execute("SELECT idEspecificacoes FROM especificacao WHERE idEspecificacoes = 1")
result3 = mycursor3.fetchall()
id_esp_vetor3 = [x[0] for x in result3]
valores_id.extend(id_esp_vetor3)
fkEspec = valores_id[2]

mycursor4.execute("SELECT idPlano FROM plano_contratado WHERE tipo = 1")
result4 = mycursor4.fetchall()
id_plano_vetor4 = [x[0] for x in result4]
valores_id.extend(id_plano_vetor4)
fkPlano = valores_id[3]

mycursor5.execute("Select idMetrica from metrica where idMetrica = 1")
result5 = mycursor5.fetchall()
id_metrica_vetor5 = [x[0] for x in result5]
valores_id.extend(id_metrica_vetor5)
fkMetrica = valores_id[4]

mycursor6.execute("select idParticao from particao where idParticao = 1")
result6 = mycursor6.fetchall()
id_particao_vetor6 = [x[0] for x in result6]
valores_id.extend(id_particao_vetor6)
fkParticao = valores_id[5]



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
cursor1CompAWS = conn.cursor()
cursor2CompAWS = conn.cursor()
cursor3CompAWS = conn.cursor()


componentesID = []
componentesIdAWS = []

queryC1 = "INSERT INTO componentes(nome, modelo, fkMetrica, fkServidor, fkBanco, fkEspecificacoes, fkPlano) VALUES (%s, 'cpu', %s, %s, %s, %s, %s)"
queryC1AWS = "INSERT INTO componentes(nome, modelo, fkMetrica, fkServidor, fkBanco, fkEspecificacoes, fkPlano) VALUES (?, 'cpu', ?, ?, ?, ?, ?)"
valuesC1 = (nomeCPU, fkMetrica, fkServidor, fkBanco, fkEspec, fkPlano)
valuesC1AWS = (nomeCPU,fkMetricaAWS,fkServidorAWS,fkBancoAWS,fkEspecAWS,fkPlanoAWS)
mycursor1Comp.execute(queryC1, valuesC1)
cursor1CompAWS.execute(queryC1AWS,valuesC1AWS)
connection.commit()
conn.commit()

queryC2 = "INSERT INTO componentes(nome, modelo, fkMetrica, fkServidor, fkBanco, fkEspecificacoes, fkPlano) VALUES (%s, 'ram', %s, %s, %s, %s, %s)"
queryC2AWS = "INSERT INTO componentes(nome, modelo, fkMetrica, fkServidor, fkBanco, fkEspecificacoes, fkPlano) VALUES (?, 'ram', ?, ?, ?, ?, ?)"
valuesC2 = ("Ram", fkMetrica, fkServidor, fkBanco, fkEspec, fkPlano)
valuesC2AWS = ("Ram",fkMetricaAWS,fkServidorAWS,fkBancoAWS,fkEspecAWS,fkPlanoAWS)
mycursor2Comp.execute(queryC2, valuesC2)
cursor2CompAWS.execute(queryC2AWS,valuesC2AWS)
connection.commit()
conn.commit()

queryC3 = "INSERT INTO componentes(nome, modelo, fkMetrica, fkServidor, fkBanco, fkEspecificacoes, fkPlano) VALUES (%s, 'disco', %s, %s, %s, %s, %s)"
queryC3AWS = "INSERT INTO componentes(nome, modelo, fkMetrica, fkServidor, fkBanco, fkEspecificacoes, fkPlano) VALUES (?, 'disco', ?, ?, ?, ?, ?)"
valuesC3 = (first_device_name, fkMetrica, fkServidor, fkBanco, fkEspec, fkPlano)
valuesC3AWS = (first_device_name,fkMetricaAWS,fkServidorAWS,fkBancoAWS,fkEspecAWS,fkPlanoAWS)
mycursor3Comp.execute(queryC3, valuesC3)
cursor3CompAWS.execute(queryC3AWS,valuesC3AWS)
connection.commit()
conn.commit()

mycursor1CompS = connection.cursor()
mycursor2CompS = connection.cursor()
mycursor3CompS = connection.cursor()
cursor1CompSAWS = conn.cursor()
cursor2CompSAWS = conn.cursor()
cursor3CompSAWS = conn.cursor()

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

cursor1CompSAWS.execute("SELECT idComponentes FROM componentes WHERE nome = ?", (nomeCPU,))
result1AWS = cursor1CompSAWS.fetchall()
idComponentevetor1AWS = [x[0]for x in result1AWS]
idCPUAWS = idComponentevetor1AWS[0]

cursor2CompSAWS.execute("SELECT idComponentes FROM componentes WHERE nome = ?", ("Ram",))
result2AWS = cursor2CompSAWS.fetchall()
idComponentevetor2AWS = [x[0]for x in result2AWS]
idMemoriaAWS = idComponentevetor2AWS[0]

cursor3CompSAWS.execute("SELECT idComponentes FROM componentes WHERE nome = ?", (first_device_name,))
result3AWS = cursor3CompSAWS.fetchall()
idComponentevetor3AWS = [x[0]for x in result3AWS]
idDiscoAWS = idComponentevetor3AWS[0]


print(idCPU)
print(idMemoria)
print(idDisco)
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

    ins = [cpu, memoria, disco]
    componentes = [idCPU, idMemoria, idDisco]
    cursor = connection.cursor()
    cursorAWS = conn.cursor()

    for i in range(len(ins)):
        dado = ins[i]

        query = "INSERT INTO registros (dataHorario, dadoCaptado, fkServidorReg, fkBanco, fkEspecificacoes, fkComponentesReg, fkMetrica,fkPlano,fkParticao) VALUES (%s, %s, %s, %s, %s, %s, %s,%s,%s)"
        cursor.execute(query, (horarioFormatado, dado, fkServidor, fkBanco, fkEspec, componentes[i],fkMetrica,fkPlano,fkParticao))
        connection.commit()
        
        query2 = "insert into rede (status,dtHora,fkServidor,fkBanco,fkEspecificacoes,fkPlano) values (%s,%s,%s,%s,%s,%s)"
        cursor.execute(query2, (statusRede,horarioFormatado,fkServidor,fkBanco,fkEspec,fkPlano))
        connection.commit()
        
        queryAWS = "INSERT INTO registros (dataHorario, dadoCaptado, fkServidorReg, fkBanco, fkEspecificacoes, fkComponentesReg, fkMetrica,fkPlano,fkParticao) VALUES (?, ?, ?, ?, ?, ?, ?,?,?)"
        cursorAWS.execute(queryAWS,(horarioFormatado, dado, fkServidorAWS, fkBancoAWS, fkEspecAWS, componentes[i],fkMetricaAWS,fkPlanoAWS,fkParticaoAWS))
        conn.commit()
        
        query2AWS = "insert into rede (status,dtHora,fkServidor,fkBanco,fkEspecificacoes,fkPlano) values (?,?,?,?,?,?)"
        cursorAWS.execute(query2AWS,(statusRede,horarioFormatado,fkServidorAWS,fkBancoAWS,fkEspecAWS,fkPlanoAWS))
        conn.commit()
        
        
    print("\nINFORMAÇÕES SOBRE PROCESSAMENTO: ")
    print('Porcentagem utilizada do Processador: ', cpu, '\nPorcentagem utilizada de memoria: ', memoria,
          '\nPorcentagem do disco sendo utilizada:', disco, '\nStatus da rede: ', statusRede)

    time.sleep(10)
    webhook = "https://hooks.slack.com/services/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"
        
    if cpu  >= 18 and cpu < 23 :
            
            alerta = {"text": f"Atenção! CPU com {cpu}% de uso"}
            

            requests.post(webhook, data=json.dumps(alerta))


    elif cpu  >= 23 and cpu < 50 :
            
            alerta = {"text": f"Emergência! CPU com {cpu}% de uso"}
            

            requests.post(webhook, data=json.dumps(alerta))


    elif cpu  >= 50:
            
            alerta = {"text": f"Urgência! CPU com {cpu}% de uso"}
            

            requests.post(webhook, data=json.dumps(alerta))    
            
            


    if disco >= 50 and disco < 70 :
           
            alerta = {"text": f"Atenção! Disco com {disco}% de uso "}
           

            requests.post(webhook, data=json.dumps(alerta))



    elif disco >= 70 and disco < 80 :
           
            alerta = {"text": f"Emergência! Disco com {disco}% de uso "}
           

            requests.post(webhook, data=json.dumps(alerta))

                    
    elif disco >= 80 :
           
            alerta = {"text": f"Urgência! Disco com {disco}% de uso "}
           

            requests.post(webhook, data=json.dumps(alerta))


    if memoria >= 45 and memoria < 55:
           
            alerta = {"text": f"Atenção! Memória RAM com {memoria}% de uso"}
          

            requests.post(webhook, data=json.dumps(alerta))
       

    elif memoria >= 55 and memoria < 65:
           
            alerta = {"text": f"Emergência! Memória RAM com {memoria}% de uso"}
          

            requests.post(webhook, data=json.dumps(alerta))


    elif memoria >= 65:
           
            alerta = {"text": f"Urgência! Memória RAM com {memoria}% de uso"}
          

            requests.post(webhook, data=json.dumps(alerta))    

cursor.close()
connection.close()
