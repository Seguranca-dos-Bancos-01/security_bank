import time
import psutil
import platform

import mysql.connector

db_config = {
        "host": "localhost",
        "port": "3306",
        "user": "root",
        "password": "271815",
        "database": "DESAFIO_CALCULO"


}

while (True):
        
        uso_memoria = psutil.virtual_memory().percent
        conta1 = uso_memoria * 1.15
        conta2 = conta1 - (uso_memoria * 0.5)
       
        print(f"Uso da Memória 1: {round(uso_memoria,1)}%")
        print(f"Uso da Memória 2: {round(conta1,1)}%")
        print(f"Uso da Memória 3: {round(conta2,1)}%")
        print("=" * 40)

        uso_cpu1 = psutil.cpu_percent(interval=0.5)
        uso_cpu2 = uso_cpu1 + (0.10*uso_cpu1)
        uso_cpu3 = uso_cpu1 + (0.15*uso_cpu1)
       
        print(f"Uso da CPU 1: {round(uso_cpu1,1)}%")        
        print(f"Uso da CPU 2: {round(uso_cpu2,1)}%")        
        print(f"Uso da CPU 3: {round(uso_cpu3,1)}%")              
        print("=" * 40)

        uso_disco1 = psutil.disk_usage('/').percent
        uso_disco2 = psutil.disk_usage('/').percent
        uso_disco3 = psutil.disk_usage('/').percent

        uso_disco2 = uso_disco1 * 0.95        
        uso_disco3 = uso_disco2 * 3
        
        print(f"Uso do Disco 1: {round(uso_disco1,1)}%")
        print(f"Uso do Disco 2: {round(uso_disco2,1)}%")
        print(f"Uso do Disco 3: {round(uso_disco3,1)}%")
       
        print("=" * 40)    
        
        meu_SO = platform.system()
        print('SO que eu uso =', meu_SO)  

        
 
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor()

        query = "INSERT INTO DADOS (memoria, CPU, disco) VALUES (%s, %s, %s)"
        values = (uso_memoria, uso_cpu1, uso_disco1)
        cursor.execute(query, values)
        conn.commit()
        cursor.close()
        conn.close()       

        intervalo = 2  

        time.sleep(intervalo)
