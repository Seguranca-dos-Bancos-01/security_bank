import time
import psutil

def monitorar_recursos(intervalo):
    while (True):
<<<<<<< HEAD
        
        uso_disco1 = psutil.disk_usage('/').percent
        uso_disco2 = psutil.disk_usage('/').percent
        uso_disco3 = psutil.disk_usage('/').percent

#Monitoramento do DISCO2
        
        uso_disco2 = uso_disco1 * 0.95        
        uso_disco3 = uso_disco2 * 3
        print(f"Uso do Disco: {round(uso_disco1,1)}%")
        print(f"Uso do Disco: {round(uso_disco2,1)}%")
        print(f"Uso do Disco: {round(uso_disco3,1)}%")
        
=======
        uso_cpu = psutil.cpu_percent(interval=0.5)
        uso_disco = psutil.disk_usage('/').percent
        uso_memoria = psutil.virtual_memory().percent
        rede = psutil.net_io_counters()
        entradaBytes = rede[0]
        saidaBytes = rede[1]
        entradaPacotes = rede[2]
        saidaPacotes = rede[3]
        errin = rede[4]
        errout = rede[5]
        
        print(f"Uso da CPU: {uso_cpu}%")
        print(f"Uso do Disco: {uso_disco}%")
        print(f"Uso da Memória: {uso_memoria}%")
        print(f"Entrada de Bytes: {entradaBytes}\nSaída de Bytes: {saidaBytes}")
        print(f"Entrada de Pacotes: {entradaPacotes}\nSaída de Pacotes: {saidaPacotes}")
        print(f'Errin:{errin}\nErrout:{errout}')
>>>>>>> 291e8583fdfede5acb16e6d7cf5a4d10d4c5f4b4
        print("=" * 40)     

        time.sleep(intervalo)

intervalo_de_atualizacao = 2  
monitorar_recursos(intervalo_de_atualizacao)


meu_so = platform.system()
print("SO que eu uso : ",meu_so)
