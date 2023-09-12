import time
import psutil

def monitorar_recursos(intervalo):
    while (True):
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
        print("=" * 40)     

        time.sleep(intervalo)

intervalo_de_atualizacao = 2  
monitorar_recursos(intervalo_de_atualizacao)

