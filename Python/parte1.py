from mysql.connector import connect
import psutil
from datetime import datetime

def mysql_connection(host, user, passwd, database=None):
    connection = connect(
        host=host,
        user=user,
        passwd=passwd,
        database=database
    )
    return connection


connection = mysql_connection('localhost', 'pedro', 'pedro0610', 'SecurityBank')

cursor = connection.cursor()
cpu_times = psutil.Process
IDCPU = cpu_times# Supondo que você queira apenas o tempo do usuário

print(IDCPU)

Ident = "INSERT INTO componentes(nome, modelo) VALUES (%s, 'CPU')"

cursor.execute(Ident, (IDCPU,))  # Certifique-se de passar IDCPU como uma tupla

connection.commit()

cursor.close()
connection.close()

