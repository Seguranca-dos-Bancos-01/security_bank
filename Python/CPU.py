from mysql.connector import connect
import psutil
import time
from datetime import datetime

def mysql_connection(host,user,passwd,database=None):
    connection = connect(
        host = host,
        user = user,
        passwd = passwd,
        database = database
    )
    return connection

connection  = mysql_connection('localhost','root','rootpassword','SecurityBank')

mycursor1 = connection.cursor()
mycursor2 = connection.cursor()
mycursor3 = connection.cursor()
mycursor4 = connection.cursor()
mycursor5 = connection.cursor()
mycursor6 = connection.cursor()
valores = []
mycursor1.execute("SELECT idServidor FROM servidor WHERE apelido = 'Servidor1'")
result1 = mycursor1.fetchall()
idServidorVetor1 = [x[0] for x in result1]
valores.extend(idServidorVetor1)
fkServidor = valores[0]

mycursor2.execute("SELECT idBanco FROM banco WHERE nomeFantasia = 'Banco A'")
result2 = mycursor2.fetchall()
idBancoVetor2 = [x[0] for x in result2]
valores.extend(idBancoVetor2)
fkBanco = valores[1]

mycursor3.execute("Select idEspecificacoes from especificacoes where idEspecificacoes = 1")
result3 = mycursor3.fetchall()
idEspecVetor3 = [x[0] for x in result3]
valores.extend(idEspecVetor3)
fkEspec = valores[2]  

mycursor4.execute("select idPlano from planoContratado where tipo = 1")
result4 = mycursor4.fetchall()
idPlanoVetor4 = [x[0] for x in result4]
valores.extend(idPlanoVetor4)
fkPlano = valores[3]

mycursor5.execute("select idLocacao from locacao where idLocacao = 1")
result5 = mycursor5.fetchall()
idLocVetor5 = [x[0] for x in result5]
valores.extend(idLocVetor5)
fkLoc = valores[4]

mycursor6.execute("SELECT idMetrica FROM metrica WHERE idMetrica = 1")
result6 = mycursor6.fetchall()
idMetricaVetor6 = [x[0] for x in result6]
valores.extend(idMetricaVetor6)
fkMetrica = valores[5]

mycursor1Comp = connection.cursor()
componentesID = []
queryC1 = queryC1 = "INSERT INTO componentes (nome, modelo, fkServidorComp, fkBancoComp, fkEspecificacoesComp, fkPlanoComp, fkMetrica, fkLocacao) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
valuesC1 = ('CPU','CPU',fkServidor,fkBanco,fkEspec,fkPlano,fkLoc,fkMetrica)
mycursor1Comp.execute(queryC1,valuesC1)
connection.commit()

mycursor1CompS = connection.cursor()
mycursor1CompS.execute("select idComponentes from componentes where nome = 'CPU'")
result1 = mycursor1CompS.fetchall()
id_componente_vetor1 = [x[0] for x in result1]
idCPU = id_componente_vetor1[0]

while True:
    cpu = psutil.cpu_percent(interval=1)

    horarioAtual = datetime.now()
    horarioFormatado = horarioAtual.strftime('%Y-%m-%d %H:%M:%S')

    cursor = connection.cursor()

    query = "INSERT INTO registros (dataHorario, dadosCaptados, fkServidorReg, fkBancoReg, fkEspeciReg, fkPlanoReg, fkComponentesReg, fkLocacaoReg, fkMetricaReg) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"
    cursor.execute(query, (horarioFormatado, cpu, fkServidor, fkBanco, fkEspec, fkPlano, idCPU, fkLoc, fkMetrica))
    connection.commit()
    
    time.sleep(10)
