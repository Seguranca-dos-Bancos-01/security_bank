import mysql.connector
import psutil
import json
import requests
import time
from datetime import datetime

webhook = "https://hooks.slack.com/services/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"

config = {"user": "root", "password": "Brol2005", "host": "localhost", "database": "SecurityBank"}
connection = mysql.connector.connect(**config)
cursor = connection.cursor()

mycursor1 = connection.cursor()
mycursor2 = connection.cursor()
mycursor3 = connection.cursor()
mycursor4 = connection.cursor()
mycursor5 = connection.cursor()
mycursor6 = connection.cursor()
mycursor7 = connection.cursor()


# Select para ver se já existem participações no banco
partitions_info = []
servidorId = 1

cursor = connection.cursor()
queryExis = "SELECT COUNT(*) AS count FROM particao WHERE fkServidor = %s"

cursor.execute(queryExis, (servidorId,))

result = cursor.fetchone()

for partition in psutil.disk_partitions():
    usage = psutil.disk_usage(partition.mountpoint)
    partition_info = {
        "nomeParticao": partition.mountpoint,
        "espacoTotal": usage.total / (1024 ** 3),
    }
    partitions_info.append(partition_info)

for partition_info in partitions_info:

    query_particao = """
        INSERT IGNORE INTO particao (nomeParticao, espacoTotal, fkComponentes, fkMetrica, fkServidor, fkBanco, fkEspecificacoes, fkPlano)
        VALUES (%s, %s, 3, 1, 1, 1, 1, 1)
    """
    print(result[0])
    if result[0] == 0:
        values_particao = (partition_info["nomeParticao"], partition_info["espacoTotal"])
        cursor.execute(query_particao, values_particao)
        connection.commit()

# Se não existirem as partições, ele registra
while True:
    partitions = psutil.disk_partitions()
    print(partitions)
    print("aaaa")
    for partition in partitions:
        print(partition)

        valores_id = []  # Reset valores_id for each partition

        mycursor1.execute("SELECT idComponentes FROM componentes WHERE modelo = 'cpu'")
        result1 = mycursor1.fetchall()
        id_componentes_vetor1 = [x[0] for x in result1]
        valores_id.extend(id_componentes_vetor1)
        fkComponentesReg = valores_id[-1]

        mycursor2.execute("SELECT idMetrica FROM metrica WHERE atencao = '80'")
        result2 = mycursor2.fetchall()
        id_metrica_vetor2 = [x[0] for x in result2]
        valores_id.extend(id_metrica_vetor2)
        fkMetrica = valores_id[-1]

        mycursor3.execute("SELECT idServidor FROM servidor WHERE apelido = 'teste'")
        result3 = mycursor3.fetchall()
        id_servidor_vetor3 = [x[0] for x in result3]
        valores_id.extend(id_servidor_vetor3)
        fkServidorReg = valores_id[-1]

        mycursor4.execute("SELECT idBanco FROM banco WHERE nomeFantasia = 'bla'")
        result4 = mycursor4.fetchall()
        id_banco_vetor4 = [x[0] for x in result4]
        valores_id.extend(id_banco_vetor4)
        fkBanco = valores_id[-1]

        mycursor5.execute("SELECT idEspecificacoes FROM especificacao WHERE potenciaMaxCPU = '2.5'")
        result5 = mycursor5.fetchall()
        id_especificacoes_vetor5 = [x[0] for x in result5]
        valores_id.extend(id_especificacoes_vetor5)
        fkEspecificacoes = valores_id[-1]

        mycursor6.execute("SELECT idPlano FROM plano_contratado WHERE tipo = 1")
        result6 = mycursor6.fetchall()
        id_plano_vetor6 = [x[0] for x in result6]
        valores_id.extend(id_plano_vetor6)
        fkPlano = valores_id[-1]

        # Buscar idParticao correspondente à partição atual
        mycursor7.execute("SELECT idParticao FROM particao WHERE nomeParticao = %s", (partition.mountpoint,))
        result7 = mycursor7.fetchone()
        if result7:
            fkParticao = result7[0]

            usage = psutil.disk_usage(partition.mountpoint)
            print(usage)
            print()
            query_registros = """
                INSERT INTO registros (dataHorario, dadoCaptado, fkServidorReg, fkBanco, fkEspecificacoes, 
                                       fkComponentesReg, fkMetrica, fkPlano, fkParticao)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
            """
            values_registros = (
                datetime.now(),
                usage.percent,
                fkServidorReg,
                fkBanco,
                fkEspecificacoes,
                fkComponentesReg,
                fkMetrica,
                fkPlano,
                fkParticao,
            )
            cursor.execute(query_registros, values_registros)
            connection.commit()

            print(f"Espaço total: {usage.total / (1024 ** 3):.2f} GB")
            print(f"Espaço usado: {usage.used / (1024 ** 3):.2f} GB")
            print(f"Espaço livre: {usage.free / (1024 ** 3):.2f} GB")
            print(f"Percentual de uso: {usage.percent}%")
            print()

            # Atenção
            if usage.percent >= 60 and usage.percent < 70:
                alerta = {"text": f"Atenção! Partição {partition.mountpoint} com {usage.percent}% de uso"}
                requests.post(webhook, data=json.dumps(alerta))

            # Emergência
            elif usage.percent >= 70 and usage.percent < 80:
                alerta = {"text": f"Emergência! Partição {partition.mountpoint} com {usage.percent}% de uso"}
                requests.post(webhook, data=json.dumps(alerta))

            # Urgência
            elif usage.percent >= 80:
                alerta = {"text": f"Urgência! Partição {partition.mountpoint} com {usage.percent}% de uso"}
                requests.post(webhook, data=json.dumps(alerta))

    time.sleep(300)

cursor.close()
connection.close()
