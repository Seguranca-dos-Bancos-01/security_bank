import mysql.connector
import psutil
import json
import requests
import time
from datetime import datetime
import wmi
import pymssql
import pymysql



partitions_info = []

configAWS = {
    'server': '34.206.192.7',
    'database': 'SecurityBank',
    'user': 'sa',
    'password': 'UrubuDoGit123'
}

conn = pymssql.connect(**configAWS)


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
connection.cursor()


cursor1AWS = conn.cursor()
cursor2AWS = conn.cursor()
cursor3AWS = conn.cursor()
cursor4AWS = conn.cursor()
cursor5AWS = conn.cursor()
cursor6AWS = conn.cursor()
cursor7AWS = conn.cursor()
conn.cursor()


servidorId = 1
cursor = connection.cursor()
cursorAWS = conn.cursor()
queryExis = "SELECT COUNT(*) AS count FROM particao WHERE fkServidor = 1"
queryExisAWS = 'SELECT COUNT(*) AS count FROM particao WHERE fkServidor = 1'
cursor.execute(queryExis)
cursorAWS.execute(queryExisAWS)

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
            query_particaoAWS = """
            INSERT INTO particao (nomeParticao, espacoTotal, fkComponentes, fkMetrica, fkServidor, fkBanco, fkEspecificacoes, fkPlano)
            SELECT
            %s, %s, 3, 1, 1, 1, 1, 1
            WHERE NOT EXISTS (
            SELECT 1
            FROM particao
            WHERE nomeParticao = %s
                );
            """
     
            if result[0] == 0:
               
                values_particao = (partition_info["nomeParticao"], partition_info["espacoTotal"])
                cursor.execute(query_particao, values_particao)
                connection.commit()

                values_particaoAWS = (partition_info["nomeParticao"], partition_info["espacoTotal"], partition_info["nomeParticao"])
                cursorAWS.execute(query_particaoAWS, values_particaoAWS)
                conn.commit()

                

while True:
        partitions = psutil.disk_partitions()
 
        for partition in partitions:
       
            valores_id = [] 

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
    
            mycursor7.execute("SELECT idParticao FROM particao WHERE nomeParticao = %s", (partition.mountpoint,))
            result7 = mycursor7.fetchone()


        
            if result7:
                fkParticao = result7[0]

                usage = psutil.disk_usage(partition.mountpoint)
          
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
            
            print(f"Mountpoint: {partition.mountpoint}")  
            print(f"Espaço total: {usage.total / (1024 ** 3):.2f} GB")
            print(f"Espaço usado: {usage.used / (1024 ** 3):.2f} GB")
            print(f"Espaço livre: {usage.free / (1024 ** 3):.2f} GB")
            print(f"Percentual de uso: {usage.percent}%")
            print()

            

        time.sleep(10)         



while True:
 
    partitions = psutil.disk_partitions()
   
 
    for partition in partitions:
        valoresAWS = []
        

        cursor1AWS.execute('select idMetrica from metrica where idMetrica = 1')
        result1AWS = cursor1AWS.fetchall()
        idMetricaAWS = [x[0] for x in result1AWS]
        valoresAWS.extend(idMetricaAWS)
        fkMetricaAWS = valoresAWS[0]
        conn.commit()

        cursor2AWS.execute('select idServidor from servidor where idServidor = 1')
        result2AWS = cursor2AWS.fetchall()
        idServidorRegAWS = [x[0] for x in result2AWS]
        valoresAWS.extend(idServidorRegAWS)
        fkServidorRegAWS = valoresAWS[1]
        conn.commit()

        cursor3AWS.execute('select idBanco from banco where idBanco = 1')
        result3AWS = cursor3AWS.fetchall()
        idBancoAWS = [x[0] for x in result3AWS]
        valoresAWS.extend(idBancoAWS)
        fkBancoAWS = valoresAWS[2]
        conn.commit()

        cursor4AWS.execute('select idEspecificacoes from especificacao where idEspecificacoes = 1')
        result4AWS = cursor4AWS.fetchall()
        idEspecAWS = [x[0] for x in result4AWS]
        valoresAWS.extend(idEspecAWS)
        fkEspecAWS = valoresAWS[3]
        conn.commit()

        cursor5AWS.execute('select idPlano from plano_contratado where idPlano = 1')
        result5AWS = cursor5AWS.fetchall()
        idPlanoAWS = [x[0] for x in result5AWS]
        valoresAWS.extend(idPlanoAWS)
        fkPlanoAWS = valoresAWS[4]
        conn.commit()

        cursor6AWS.execute('select idComponentes from componentes where idComponentes = 1')
        result6AWS = cursor6AWS.fetchall()
        idComponentesRegAWS = [x[0] for x in result6AWS]
        valoresAWS.extend(idComponentesRegAWS)
        fkComponentesRegAWS = valoresAWS[5]
        conn.commit()
        
        cursor7AWS.execute('SELECT idParticao FROM particao WHERE idParticao = 4')
        result7AWS = cursor7AWS.fetchone()
        idParticaoAWS = [x[0] for x in result6AWS]
        valoresAWS.extend(idParticaoAWS)
        fkParticaoAWS = valoresAWS[6]
        conn.commit()

                
        data_e_hora = datetime.now()
       
        if result7AWS:
        
            fkParticaoAWS = result7AWS[0]

            usage = psutil.disk_usage(partition.mountpoint)
         
            query_registrosAWS = """
    INSERT INTO registros 
    (dataHorario, dadoCaptado, fkServidorReg, fkBanco, fkEspecificacoes, fkComponentesReg, fkMetrica, fkPlano, fkParticao) 
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
"""
            values_registrosAWS = (
                str(data_e_hora),
                usage.percent,
                fkServidorRegAWS,
                fkBancoAWS,
                fkEspecAWS,
                fkComponentesRegAWS,
                fkMetricaAWS,
                fkPlanoAWS,
                fkParticaoAWS,
                            )

            cursor.execute(query_registrosAWS, values_registrosAWS)
            conn.commit()

            print(f"Mountpoint: {partition.mountpoint}")  
            print(f"Espaço total: {usage.total / (1024 ** 3):.2f} GB")
            print(f"Espaço usado: {usage.used / (1024 ** 3):.2f} GB")
            print(f"Espaço livre: {usage.free / (1024 ** 3):.2f} GB")
            print(f"Percentual de uso: {usage.percent}%")
            print()
            
           

        time.sleep(10)

cursor.close()
connection.close()
cursorAWS.close()
conn.close()
