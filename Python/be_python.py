import mysql.connector
import psutil
import json
import requests
import pymysql
import time
from datetime import datetime

webhook = "https://hooks.slack.com/services/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"

config = {"user": "root", "password": "Brol2005", "host": "localhost", "database": "SecurityBank"}
connection = pymysql.connect(**config)
cursor = connection.cursor()


mycursor1 = connection.cursor()
mycursor2 = connection.cursor()
mycursor3 = connection.cursor()
mycursor4 = connection.cursor()
mycursor5 = connection.cursor()
mycursor6 = connection.cursor()
mycursor7 = connection.cursor()

valores_id = []

mycursor1.execute("SELECT idComponentes FROM componentes WHERE modelo = 'cpu'")
result1 = mycursor1.fetchall()
id_componentes_vetor1 = [x[0] for x in result1]
valores_id.extend(id_componentes_vetor1)
fkComponentes = valores_id[0]


mycursor2.execute("SELECT idMetrica FROM metrica WHERE atencao = '80'")
result2 = mycursor2.fetchall()
id_metrica_vetor2 = [x[0] for x in result2]
valores_id.extend(id_metrica_vetor2)
fkMetrica = valores_id[1]


mycursor3.execute("SELECT idServidor FROM servidor WHERE apelido = 'teste'")
result3 = mycursor3.fetchall()
id_servidor_vetor3 = [x[0] for x in result3]
valores_id.extend(id_servidor_vetor3)
fkServidor = valores_id[1]

mycursor4.execute("SELECT idBanco FROM banco WHERE nomeFantasia = 'bla'")
result4 = mycursor4.fetchall()
id_banco_vetor4 = [x[0] for x in result4]
valores_id.extend(id_banco_vetor4)
fkBanco = valores_id[1]


mycursor5.execute("SELECT idEspecificacoes FROM especificacao WHERE potenciaMaxCPU = '2.5'")
result5 = mycursor5.fetchall()
id_especificacoes_vetor5 = [x[0] for x in result5]
valores_id.extend(id_especificacoes_vetor5)
fkEspecificacoes = valores_id[1]

mycursor6.execute("SELECT idPlano FROM plano_contratado WHERE tipo = 1")
result6 = mycursor6.fetchall()
id_plano_vetor6 = [x[0] for x in result6]
valores_id.extend(id_plano_vetor6)
fkPlano = valores_id[1]

mycursor7.execute("SELECT idLocacao FROM locacao WHERE dataValidade = 2024-01-01")
result7 = mycursor7.fetchall()
id_locacao_vetor7 = [x[0] for x in result7]
valores_id.extend(id_locacao_vetor7)
fkLocacao = valores_id[1]



while True:
      

        partitions = psutil.disk_partitions()

        for partition in partitions:

            usage = psutil.disk_usage(partition.mountpoint)
            porcentagem_uso = usage.percent

            query_particao = """
                INSERT INTO particao (dispositivo, pontoMontagem, fkComponentes, fkMetrica, fkServidor, fkBanco, 
                                      fkEspecificacoes, fkPlano, fkLocacao)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
            """
            values_particao = (partition.device, partition.mountpoint, fkComponentes, fkMetrica, fkServidor, fkBanco,
                               fkEspecificacoes, fkPlano, fkLocacao)
            cursor.execute(query_particao, values_particao)
            connection.commit()

            query_registros = """
                INSERT INTO registros (dataHorario, dadosCaptados, fkServidorReg, fkBanco, fkEspecificacoes, 
                                       fkComponentesReg, fkMetrica, fkLocacao, fkParticao)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, LAST_INSERT_ID())
            """
            values_registros = (datetime.now(), porcentagem_uso, fkServidor, fkBanco, fkEspecificacoes, fkComponentes, 
                               fkMetrica, fkLocacao)
            cursor.execute(query_registros, values_registros)
            connection.commit()


            print(f"Device: {partition.device}")  
            print(f"Mountpoint: {partition.mountpoint}")  
            print(f"Fstype: {partition.fstype}") 
            print(f"Opts: {partition.opts}")
            print()
            print(f"Espaço total: {usage.total / (1024 ** 3):.2f} GB")
            print(f"Espaço usado: {usage.used / (1024 ** 3):.2f} GB")
            print(f"Espaço livre: {usage.free / (1024 ** 3):.2f} GB")
            print(f"Percentual de uso: {usage.percent}%")
            print()


        time.sleep(300)

cursor.close()
connection.close()
