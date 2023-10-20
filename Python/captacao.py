from mysql.connector import connect
import psutil
import time
from datetime import datetime
import platform
import subprocess
import re

def mysql_connection(host, user, passwd, database=None):
    connection = connect(
        host=host,
        user=user,
        passwd=passwd,
        database=database
    )
    return connection

connection = mysql_connection('localhost', 'pedro', 'pedro0610', 'SecurityBank')

cursor1 = connection.cursor()
IDCPU = psutil.cpu_times()  

print(IDCPU)

connection = mysql_connection('localhost', 'pedro', 'pedro0610', 'SecurityBank')
mycursor1 = connection.cursor()
mycursor2 = connection.cursor()
mycursor3 = connection.cursor()
mycursor4 = connection.cursor()

# Executar consultas
mycursor1.execute("SELECT idServidor FROM servidor WHERE apelido = 'teste'")
result1 = mycursor1.fetchall()
id_servidor_vetor1 = [x[0] for x in result1]
print(id_servidor_vetor1)

mycursor2.execute("SELECT idBanco FROM banco WHERE nomeFantasia = 'bla'")
result2 = mycursor2.fetchall()
id_servidor_vetor2 = [x[0] for x in result2]
print(id_servidor_vetor2)

mycursor3.execute("SELECT idEspecificacoes FROM especificacoes WHERE dataValidade = '2024-01-01'")
result3 = mycursor3.fetchall()
id_servidor_vetor3 = [x[0] for x in result3]
print(id_servidor_vetor3)

mycursor4.execute("SELECT idPlano FROM planoContratado WHERE tipo = 1")
result4 = mycursor4.fetchall()
id_servidor_vetor4 = [x[0] for x in result4]
print(id_servidor_vetor4)


# Informações da CPU
cpu_info = {}
cpu_info['Nome'] = platform.processor()
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

cmd = "/usr/sbin/system_profiler SPMemoryDataType | grep 'Serial Number' | awk '{print $3}'"
result = subprocess.run(cmd, shell=True, check=True, capture_output=True, text=True)
serial_numbers = result.stdout.strip().split('\n')
nomeMemoria =[]
# Mostra os números de série dos módulos de memória RAM
print("Números de Série dos Módulos de Memória RAM:")
for i, serial_number in enumerate(serial_numbers, start=1):
    print(f"Módulo {i}: {serial_number}")
    if i == 1:  # Verifica se é a primeira volta do loop
        nomeMemoria.append(serial_number)
    print(nomeMemoria)
#for key, value in mem_info.items():
 #   print(f"{key}: {value}")




partitions = psutil.disk_partitions()
for partition in partitions:
    print("\nDispositivo:", partition.device)
    print("Ponto de montagem:", partition.mountpoint)
    try:
        partition_usage = psutil.disk_usage(partition.mountpoint)
        print("Total de espaço:", partition_usage.total)
        print("Espaço usado:", partition_usage.used)
        print("Espaço livre:", partition_usage.free)
        print("Porcentagem de uso:", partition_usage.percent)
    except PermissionError:

        continue




Ident = "INSERT INTO componentes(nome, modelo) VALUES ('bla', 'CPU')"  

cursor1.execute(Ident)

selID = "SELECT nome FROM componentes WHERE idComponentes = 1"
from_db = []
def read_query(connection, query):
    cursor = connection.cursor()
    result = None
    try:
        cursor1.execute(selID)
        result = cursor1.fetchall()
        return result
    except Error as err:
        print(f"Error: '{err}'")
results = read_query(connection, selID)
for result in results:
    result = list(result)
    from_db.append(result)
    print(from_db)


# cursor1.execute(selID)  



print()

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
    componentes = [1, 2, 3, 4]
    cursor = connection.cursor()

    for i in range(len(ins)):
        dado = ins[i]
        componente = componentes[i]

        query = "INSERT INTO registros(dataHorario, porcentagemConsumo, fkServidor, fkBanco, fkComponentes) VALUES (%s, %s, %s, %s, %s)"

        cursor.execute(query, (horarioFormatado, dado, 1, 1, componente))

        connection.commit()

    print("\nINFORMAÇÕES SOBRE PROCESSAMENTO: ")
    print('Porcentagem utilizada do Processador: ', cpu, '\nPorcentagem utilizada de memoria: ', memoria,
          '\nPorcentagem do disco sendo utilizada:', disco, '\nStatus da rede: ', statusRede)

    time.sleep(10)

cursor.close()
connection.close()
